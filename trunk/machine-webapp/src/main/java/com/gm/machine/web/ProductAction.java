//-------------------------------------------------------------------------
// Copyright (c) 2000-2010 Digital. All Rights Reserved.
//
// This software is the confidential and proprietary information of
// Digital
//
// Original author: qingang
//
//-------------------------------------------------------------------------
// LOOSOFT MAKES NO REPRESENTATIONS OR WARRANTIES ABOUT THE SUITABILITY OF
// THE SOFTWARE, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
// TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
// PARTICULAR PURPOSE, OR NON-INFRINGEMENT. UFINITY SHALL NOT BE
// LIABLE FOR ANY DAMAGES SUFFERED BY LICENSEE AS A RESULT OF USING,
// MODIFYING OR DISTRIBUTING THIS SOFTWARE OR ITS DERIVATIVES.
//
// THIS SOFTWARE IS NOT DESIGNED OR INTENDED FOR USE OR RESALE AS ON-LINE
// CONTROL EQUIPMENT IN HAZARDOUS ENVIRONMENTS REQUIRING FAIL-SAFE
// PERFORMANCE, SUCH AS IN THE OPERATION OF NUCLEAR FACILITIES, AIRCRAFT
// NAVIGATION OR COMMUNICATION SYSTEMS, AIR TRAFFIC CONTROL, DIRECT LIFE
// SUPPORT MACHINES, OR WEAPONS SYSTEMS, IN WHICH THE FAILURE OF THE
// SOFTWARE COULD LEAD DIRECTLY TO DEATH, PERSONAL INJURY, OR SEVERE
// PHYSICAL OR ENVIRONMENTAL DAMAGE ("HIGH RISK ACTIVITIES"). UFINITY
// SPECIFICALLY DISCLAIMS ANY EXPRESS OR IMPLIED WARRANTY OF FITNESS FOR
// HIGH RISK ACTIVITIES.
//-------------------------------------------------------------------------
package com.gm.machine.web;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Results;
import org.springframework.beans.factory.annotation.Autowired;
import org.springside.modules.orm.Page;
import org.springside.modules.orm.PropertyFilter;
import org.springside.modules.utils.web.struts2.Struts2Utils;

import cn.common.lib.springside.util.ParamPropertyUtils;
import cn.common.lib.springside.web.CrudActionSupport;

import com.gm.machine.core.BaseDataManager;
import com.gm.machine.core.CategoryManager;
import com.gm.machine.core.ProductManager;
import com.gm.machine.entity.BaseData;
import com.gm.machine.entity.Category;
import com.gm.machine.entity.Product;
import com.gm.machine.vo.ProductVO;
import com.google.common.collect.Lists;

/**
 * 
 * 前台产品中心
 * 
 * @author qingang
 * @version 1.0
 * @since 2012-7-28
 */
@Namespace("/")
@Results( { @Result(name = CrudActionSupport.RELOAD, location = "product.action", type = "redirect") })
public class ProductAction extends BaseAction<Product>
{

    /**
     * serialVersionUID long
     */
    private static final long serialVersionUID = 1L;
    private Long              id;
    private Product           entity;
    private List<Long>        ids;

    private Page<Product>     page             = new Page<Product>(20);
    private List<Product>     productList      = Lists.newArrayList();
    private List<ProductVO>   productvoList    = Lists.newArrayList();
    private long              brandid;                                 // 品牌id
    private long              onecatid;
    private long              twocatid;
    private long              threecatid;

    private int               tabid;
    @Autowired
    private ProductManager productManager;
    @Autowired
    private BaseDataManager   baseDataManager;
    @Autowired
    private CategoryManager categoryManager;

    /** 一级分类 **/
    public List<Category> getOneCatList()
    {
        return categoryManager.getAllCats(0l);
    }

    /** 二级分类 **/
    public List<Category> getTwoCatList()
    {
        if (onecatid != 0)
        {

            return categoryManager.getAllCats(onecatid);
        }
        return Lists.newArrayList();
    }

    /** 三级级分类 **/
    public List<Category> getThreeCatList()
    {
        Struts2Utils.getRequest();
        if (twocatid != 0)
        {

            return categoryManager.getAllCats(twocatid);
        }
        return Lists.newArrayList();
    }

    public List<BaseData> getBrandList()
    {
        return baseDataManager.searchByType(BaseData.BRAND_TYPE);
    }

    @Override
    public String list() throws Exception
    {
        try
        {
            HttpServletRequest request = Struts2Utils.getRequest();
            List<PropertyFilter> filters = PropertyFilter
            .buildFromHttpRequest(request);
            ParamPropertyUtils.replacePropertyRule(filters);
            filters.add(new PropertyFilter("EQB_status", "true"));
            String name = request.getParameter("keyword");
            if (StringUtils.isNotBlank(name))
            {
                filters.add(new PropertyFilter("LIKES_name", name));
            }
            if (onecatid != 0)
            {
                filters.add(new PropertyFilter("EQL_onecatid", String
                        .valueOf(onecatid)));
            }
            if (twocatid != 0)
            {
                filters.add(new PropertyFilter("EQL_twocatid", String
                        .valueOf(twocatid)));
            }
            if (threecatid != 0)
            {
                filters.add(new PropertyFilter("EQL_threecatid", String
                        .valueOf(threecatid)));
            }
            if (brandid != 0)
            {
                filters.add(new PropertyFilter("EQL_bid", String
                        .valueOf(brandid)));
            }
            if (!page.isOrderBySetted())
            {
                page.setOrderBy("ennum");
                page.setOrder(Page.DESC);
            }
            page = productManager.search(page, filters);
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }

        return SUCCESS;
    }

    @Override
    public String input() throws Exception
    {

        return INPUT;
    }

    public String partone() throws Exception
    {
        productvoList = Lists.newArrayList();
        int i = 1;
        List<Category> clist = categoryManager.searchOneRecommend(6);
        if (clist != null && clist.size() > 0)
        {
            for (Category c : clist)
            {
                int tep = 0;
                String css = "";
                if (i > 1 && i <= 2)
                {
                    tep = i - 1;
                }
                else
                {
                    if (i == 1)
                    {
                        tep = i;
                        css = "curr";
                    }
                    else
                    {
                        tep = i - 1;
                    }
                }
                productvoList.add(new ProductVO(c.getName(), productManager
                        .search(c.getId(), 6), tep, css));
                i++;
            }
        }
        return "part";
    }

    public String parttwo() throws Exception
    {
        productvoList = Lists.newArrayList();
        int i = 1;
        List<Category> clist = categoryManager.searchTwoRecommend(6);
        if (clist != null && clist.size() > 0)
        {
            for (Category c : clist)
            {
                int tep = 0;
                String css = "";
                if (i > 1 && i <= 2)
                {
                    tep = i - 1;
                }
                else
                {
                    if (i == 1)
                    {
                        tep = i;
                        css = "curr";
                    }
                    else
                    {
                        tep = i - 1;
                    }
                }
                productvoList.add(new ProductVO(c.getName(), productManager
                        .search(c.getId(), 6), tep, css));
                i++;
            }
        }
        return "part";
    }

    public String indextop() throws Exception
    {
        try
        {
            productList = productManager.searchRecommend(5);
        }
        catch (Exception e)
        {

            e.printStackTrace();
        }
        return "top";
    }


    @Override
    protected void prepareModel() throws Exception
    {
        if (id != null)
        {
            entity = productManager.get(id);
        }
        else
        {
            entity = new Product();
        }

    }

    @Override
    public String save() throws Exception
    {

        return RELOAD;
    }




    @Override
    public Product getModel()
    {
        return entity;
    }

    public Long getId()
    {
        return id;
    }

    public void setId(Long id)
    {
        this.id = id;
    }

    public Product getEntity()
    {
        return entity;
    }

    public void setEntity(Product entity)
    {
        this.entity = entity;
    }

    public List<Long> getIds()
    {
        return ids;
    }

    public void setIds(List<Long> ids)
    {
        this.ids = ids;
    }

    public Page<Product> getPage()
    {
        return page;
    }

    public void setPage(Page<Product> page)
    {
        this.page = page;
    }

    public List<ProductVO> getProductvoList()
    {
        return productvoList;
    }

    public List<Product> getProductList()
    {
        return productList;
    }

    public void setProductList(List<Product> productList)
    {
        this.productList = productList;
    }

    public long getBrandid()
    {
        return brandid;
    }

    public void setBrandid(long brandid)
    {
        this.brandid = brandid;
    }

    public long getOnecatid()
    {
        return onecatid;
    }

    public void setOnecatid(long onecatid)
    {
        this.onecatid = onecatid;
    }

    public long getTwocatid()
    {
        return twocatid;
    }

    public void setTwocatid(long twocatid)
    {
        this.twocatid = twocatid;
    }

    public long getThreecatid()
    {
        return threecatid;
    }

    public void setThreecatid(long threecatid)
    {
        this.threecatid = threecatid;
    }

    public int getTabid()
    {
        return tabid;
    }

    public void setTabid(int tabid)
    {
        this.tabid = tabid;
    }

}
