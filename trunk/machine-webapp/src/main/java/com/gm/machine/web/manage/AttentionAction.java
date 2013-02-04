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

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Results;
import org.springframework.beans.factory.annotation.Autowired;
import org.springside.modules.orm.Page;
import org.springside.modules.orm.PropertyFilter;
import org.springside.modules.utils.web.struts2.Struts2Utils;

import cn.common.lib.springside.web.CrudActionSupport;

import com.gm.machine.core.AttentionManager;
import com.gm.machine.core.ProductManager;
import com.gm.machine.entity.Attention;
import com.gm.machine.entity.Product;

/**
 * 
 * 商品关注度action
 * 
 * @author qingang
 * @version 1.0
 * @since 2012-7-28
 */
@Namespace("/backend")
@Results( { @Result(name = CrudActionSupport.RELOAD, location = "attention.action", type = "redirect") })
public class AttentionAction extends CrudActionSupport<Attention>
{

    /**
     * serialVersionUID long
     */
    private static final long serialVersionUID = 1L;
    private Attention         entity;
    private Page<Attention>   page             = new Page<Attention>(10);
    @Autowired
    private AttentionManager  attentionManager;
    @Autowired
    private ProductManager productManager;
    private Product product;
    private Long              pid;


    @Override
    public String input() throws Exception
    {
        return INPUT;
    }


    @Override
    public String list() throws Exception
    {
        try
        {
            HttpServletRequest request = Struts2Utils.getRequest();
            List<PropertyFilter> filters = PropertyFilter
            .buildFromHttpRequest(request);

            if (pid != null)
            {
                filters.add(new PropertyFilter("EQL_pid", String.valueOf(pid)));
                product = productManager.get(pid);
            }
            if (!page.isOrderBySetted())
            {
                page.setOrderBy("id");
                page.setOrder(Page.DESC);
            }
            page = attentionManager.search(page, filters);
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }

        return SUCCESS;
    }

    public Product getProduct()
    {
        return product;
    }
    @Override
    protected void prepareModel() throws Exception
    {

    }
    @Override
    public String save() throws Exception
    {
        return RELOAD;
    }
    @Override
    public Attention getModel()
    {
        return entity;
    }
    public Page<Attention> getPage()
    {
        return page;
    }

    public void setPage(Page<Attention> page)
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

}
