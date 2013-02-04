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

import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Results;
import org.springframework.beans.factory.annotation.Autowired;
import org.springside.modules.orm.Page;
import org.springside.modules.orm.PropertyFilter;
import org.springside.modules.security.springsecurity.SpringSecurityUtils;
import org.springside.modules.utils.web.struts2.Struts2Utils;

import cn.common.lib.springside.util.ParamPropertyUtils;
import cn.common.lib.springside.web.CrudActionSupport;

import com.gm.machine.contant.Global;
import com.gm.machine.core.EnquiryManager;
import com.gm.machine.core.ProductManager;
import com.gm.machine.core.UserManager;
import com.gm.machine.entity.Enquiry;
import com.gm.machine.entity.Product;
import com.gm.machine.util.CommonUtils;

/**
 * 
 * 询价管理action
 * 
 * @author qingang
 * @version 1.0
 * @since 2012-7-28
 */
@Namespace("/backend")
@Results( { @Result(name = CrudActionSupport.RELOAD, location = "enquiry.action?pid=${pid}", type = "redirect") })
public class EnquiryAction extends CrudActionSupport<Enquiry>
{

    /**
     * serialVersionUID long
     */
    private static final long serialVersionUID = 1L;

    private Long              id;

    private Enquiry           entity;

    private Long              pid;

    private Product           product;

    private List<Long>        ids;

    private Page<Enquiry>     page             = new Page<Enquiry>(10);

    @Autowired
    private EnquiryManager    enquiryManager;

    @Autowired
    private ProductManager    productManager;

    @Autowired
    private UserManager       userManager;

    private Long              parentid;                                // 主贴id


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
            enquiryManager.delete(id);
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
            enquiryManager.batchDelete(ids);
            this.addActionMessage(Global.DELETE_SUCCESS);
        }
        catch (Exception e)
        {
            e.printStackTrace();
            this.addActionMessage(Global.DELETE_LOSE);
        }
        return RELOAD;
    }

    @Override
    public String list() throws Exception
    {
        try
        {
            product = productManager.get(pid);
            HttpServletRequest request = Struts2Utils.getRequest();
            List<PropertyFilter> filters = PropertyFilter
            .buildFromHttpRequest(request);
            ParamPropertyUtils.replacePropertyRule(filters);
            filters
            .add(new PropertyFilter("EQL_productid", String
                    .valueOf(pid)));
            filters.add(new PropertyFilter("EQB_topic", "true"));
            if (!page.isOrderBySetted())
            {
                page.setOrderBy("id");
                page.setOrder(Page.DESC);
            }
            page = enquiryManager.search(page, filters);
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
            entity = enquiryManager.get(id);
        }
        else
        {
            entity = new Enquiry();
        }

    }

    @Override
    public String save() throws Exception
    {
        try
        {
            if (id == null)
            {
                entity.setParent(enquiryManager.get(parentid));
                entity.setCreatedate(new Date());
                entity.setProduct(productManager.get(pid));
                entity.setUser(userManager
                        .getUserByUsername(SpringSecurityUtils
                                .getCurrentUserName()));
                entity
.setContent(CommonUtils.escapeHTMLTags(entity
                        .getContent()));
            }
            enquiryManager.save(entity);
            this.addActionMessage(Global.SAVE_SUCCESS);
        }
        catch (Exception e)
        {
            this.addActionMessage(Global.SAVE_LOSE);
            e.printStackTrace();
        }
        return RELOAD;
    }

    public String batchDisable() throws Exception
    {
        try
        {
            if (ids != null && !ids.isEmpty())
            {
                enquiryManager.disable(ids);
            }
            this.addActionMessage(Global.SCREEN_SUCCESS);
        }
        catch (Exception e)
        {
            this.addActionMessage(Global.SCREEN__LOSE);
            e.printStackTrace();
        }
        return RELOAD;
    }

    public String batchDisplay() throws Exception
    {
        try
        {
            if (ids != null && !ids.isEmpty())
            {
                enquiryManager.display(ids);
            }
            this.addActionMessage(Global.DISPLAY_SUCCESS);
        }
        catch (Exception e)
        {
            this.addActionMessage(Global.DISPLAY_LOSE);
            e.printStackTrace();
        }
        return RELOAD;
    }

    /**
     * 
     * 单个显示
     * 
     * @since 2012-12-1
     * @author qingang
     * @return
     * @throws Exception
     */
    public String display() throws Exception
    {
        try
        {
            entity = enquiryManager.get(id);
            entity.setStatus(false);
            enquiryManager.save(entity);
            Struts2Utils.renderText("显示成功");
        }
        catch (Exception e)
        {
            Struts2Utils.renderText("显示失败");
            e.printStackTrace();
        }
        return null;
    }

    /**
     * 
     * 单个屏蔽
     * 
     * @since 2012-12-1
     * @author qingang
     * @return
     * @throws Exception
     */
    public String disable() throws Exception
    {
        try
        {
            entity = enquiryManager.get(id);
            entity.setStatus(true);
            enquiryManager.save(entity);
            Struts2Utils.renderText("屏蔽成功");
        }
        catch (Exception e)
        {
            Struts2Utils.renderText("屏蔽失败");
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public Enquiry getModel()
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

    public Enquiry getEntity()
    {
        return entity;
    }

    public void setEntity(Enquiry entity)
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

    public Page<Enquiry> getPage()
    {
        return page;
    }

    public void setPage(Page<Enquiry> page)
    {
        this.page = page;
    }

    public Long getPid()
    {
        return pid;
    }

    public void setPid(Long pid)
    {
        this.pid = pid;
    }

    public Product getProduct()
    {
        return product;
    }

    public void setProduct(Product product)
    {
        this.product = product;
    }

    public Long getParentid()
    {
        return parentid;
    }

    public void setParentid(Long parentid)
    {
        this.parentid = parentid;
    }

}
