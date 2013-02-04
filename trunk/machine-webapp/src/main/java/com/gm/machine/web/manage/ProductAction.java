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
package com.gm.machine.web.manage;

import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.xwork.StringUtils;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Results;
import org.springframework.beans.factory.annotation.Autowired;
import org.springside.modules.orm.Page;
import org.springside.modules.orm.PropertyFilter;
import org.springside.modules.utils.web.struts2.Struts2Utils;

import cn.common.lib.springside.util.ParamPropertyUtils;
import cn.common.lib.springside.web.CrudActionSupport;

import com.gm.machine.contant.Global;
import com.gm.machine.core.BaseDataManager;
import com.gm.machine.core.CategoryManager;
import com.gm.machine.core.ProductManager;
import com.gm.machine.entity.BaseData;
import com.gm.machine.entity.Category;
import com.gm.machine.entity.Product;
import com.google.common.collect.Lists;

/**
 * 
 * 产品action
 * 
 * @author qingang
 * @version 1.0
 * @since 2012-7-28
 */
@Namespace("/backend")
@Results( { @Result(name = CrudActionSupport.RELOAD, location = "product.action", type = "redirect") })
public class ProductAction extends CrudActionSupport<Product>
{

    /**
     * serialVersionUID long
     */
    private static final long serialVersionUID = 1L;

    private Long              id;

    private Product           product;

    private List<Long>        ids;

    private Page<Product>     page             = new Page<Product>(10);

    @Autowired
    private BaseDataManager   baseDataManager;

    @Autowired
    private CategoryManager   categoryManager;

    @Autowired
    private ProductManager    productManager;

    /** 一级分类 **/
    public List<Category> getOneCatList()
    {
        return categoryManager.getAllCats(0l);
    }

    /** 二级分类 **/
    public List<Category> getTwoCatList()
    {
        HttpServletRequest request = Struts2Utils.getRequest();
        if (id != null)
        {

            return categoryManager.getAllCats(product.getOnecatid());
        }
        else
            if (StringUtils.isNotBlank(request
                    .getParameter("filter_EQL_onecatid")))
            {
                return categoryManager.getAllCats(Long.parseLong(request
                        .getParameter("filter_EQL_onecatid")));
            }
        return Lists.newArrayList();
    }

    /** 三级级分类 **/
    public List<Category> getThreeCatList()
    {
        HttpServletRequest request = Struts2Utils.getRequest();
        if (id != null)
        {

            return categoryManager.getAllCats(product.getTwocatid());
        }
        else
            if (StringUtils.isNotBlank(request
                    .getParameter("filter_EQL_twocatid")))
            {
                return categoryManager.getAllCats(Long.parseLong(request
                        .getParameter("filter_EQL_twocatid")));
            }
        return Lists.newArrayList();
    }

    public List<BaseData> getBrandList()
    {
        return baseDataManager.searchByType(BaseData.BRAND_TYPE);
    }

    @Override
    public String input() throws Exception
    {
        return INPUT;
    }

    @Override
    public String delete() throws Exception
    {
        try
        {
            productManager.delete(id);
            this.addActionMessage(Global.DELETE_SUCCESS);
        }
        catch (Exception e)
        {
            e.printStackTrace();
            this.addActionMessage(Global.DELETE_LOSE);
        }
        return RELOAD;
    }

    /**
     * 
     * 批量删除
     * 
     * @since 2012-7-29
     * @author qingang
     * @return
     * @throws Exception
     */
    public String batchDelete() throws Exception
    {

        try
        {
            productManager.batchDelete(ids);
            this.addActionMessage(Global.DELETE_SUCCESS);
        }
        catch (Exception e)
        {
            e.printStackTrace();
            this.addActionMessage(Global.DELETE_LOSE);
        }
        return RELOAD;
    }

    /**
     * 
     * 批量推荐
     * 
     * @since 2012-7-29
     * @author qingang
     * @return
     * @throws Exception
     */
    public String batchRecommend() throws Exception
    {

        try
        {
            productManager.recommend(ids);
            this.addActionMessage(Global.RECOMMEND_SUCCESS);
        }
        catch (Exception e)
        {
            e.printStackTrace();
            this.addActionMessage(Global.RECOMMEND_LOSE);
        }
        return RELOAD;
    }

    /**
     * 
     * 批量推荐
     * 
     * @since 2012-7-29
     * @author qingang
     * @return
     * @throws Exception
     */
    public String batchCancelRecommend() throws Exception
    {

        try
        {
            productManager.cancelRecommend(ids);
            this.addActionMessage(Global.CANCEL_SUCCESS);
        }
        catch (Exception e)
        {
            e.printStackTrace();
            this.addActionMessage(Global.CANCEL_LOSE);
        }
        return RELOAD;
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
            if (!page.isOrderBySetted())
            {
                page.setOrderBy("id");
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
    protected void prepareModel() throws Exception
    {
        if (id != null)
        {
            product = productManager.get(id);
        }
        else
        {
            product = new Product();
        }

    }

    @Override
    public String save() throws Exception
    {
        try
        {
            HttpServletRequest request = Struts2Utils.getRequest();
            String brandid = request.getParameter("brandid");
            String thirdcatid = request.getParameter("threecatid");
            if (id == null)
            {
                product.setCreatedate(new Date());
            }
            product.setBrand(baseDataManager.get(Long.parseLong(brandid)));
            product
            .setCategory(categoryManager
                    .get(Long.parseLong(thirdcatid)));
            productManager.save(product);
            this.addActionMessage(Global.SAVE_SUCCESS);
        }
        catch (Exception e)
        {
            this.addActionMessage(Global.SAVE_LOSE);
            e.printStackTrace();
        }
        return RELOAD;
    }

    public String publish() throws Exception
    {
        try
        {
            productManager.publish(ids);
            this.addActionMessage(Global.PUBLISH_SUCCESS);
        }
        catch (Exception e)
        {
            this.addActionMessage(Global.PUBLISH_LOSE);
            e.printStackTrace();
        }
        return RELOAD;
    }

    public String cancelPublish() throws Exception
    {
        try
        {
            productManager.cancel(ids);
            this.addActionMessage(Global.CANCEL_SUCCESS);
        }
        catch (Exception e)
        {
            this.addActionMessage(Global.CANCEL_LOSE);
            e.printStackTrace();
        }
        return RELOAD;
    }

    @Override
    public Product getModel()
    {
        return product;
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
        return product;
    }

    public void setEntity(Product product)
    {
        this.product = product;
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

}
