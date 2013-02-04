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
package com.gm.machine.web.user;

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

import cn.common.lib.springside.web.CrudActionSupport;

import com.gm.machine.core.PostManager;
import com.gm.machine.core.ProductManager;
import com.gm.machine.core.UserManager;
import com.gm.machine.entity.Post;
import com.gm.machine.entity.Product;
import com.gm.machine.entity.User;
import com.gm.machine.util.CommonUtils;

/**
 * 
 * 商品评论action
 * 
 * @author qingang
 * @version 1.0
 * @since 2012-7-28
 */
@Namespace("/user")
@Results( { @Result(name = CrudActionSupport.RELOAD, location = "post!input.action?id=${parentid}&pid=${pid}", type = "redirect") })
public class PostAction extends CrudActionSupport<Post>
{

    /**
     * serialVersionUID long
     */
    private static final long serialVersionUID = 1L;

    private Post              entity;

    private Page<Post>        page             = new Page<Post>(5);
    @Autowired
    private PostManager       postManager;
    @Autowired
    private ProductManager productManager;

    @Autowired
    private UserManager       userManager;
    private Product product;
    private Long              pid;

    private Long              id;

    private Long              parentid;

    public Long getParentid()
    {
        return parentid;
    }

    public void setParentid(Long parentid)
    {
        this.parentid = parentid;
    }

    public Long getId()
    {
        return id;
    }

    public void setId(Long id)
    {
        this.id = id;
    }

    @Override
    public String input() throws Exception
    {
        product = productManager.get(pid);
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
            filters.add(new PropertyFilter("EQL_uid", String
                    .valueOf(Struts2Utils.getSession().getAttribute(
                    "userid"))));
            filters.add(new PropertyFilter("EQB_topic", "true"));
            if (!page.isOrderBySetted())
            {
                page.setOrderBy("id");
                page.setOrder(Page.DESC);
            }
            page = postManager.search(page, filters);
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
        if (id != null)
        {
            entity = postManager.get(id);
        }
        else
        {
            entity = new Post();
        }
    }
    @Override
    public String save() throws Exception
    {
        User user = userManager.getUserByUsername(SpringSecurityUtils
                .getCurrentUserName());

        product = productManager.get(pid);
        entity = new Post();
        entity.setParent(postManager.get(parentid));
        entity.setCreatedate(new Date());
        entity.setProduct(product);
        entity.setUser(user);
        entity.setRemark(CommonUtils.escapeHTMLTags(Struts2Utils
                .getParameter("remark")));
        postManager.save(entity);

        return RELOAD;
    }
    @Override
    public Post getModel()
    {
        return entity;
    }

    public Page<Post> getPage()
    {
        return page;
    }

    public void setPage(Page<Post> page)
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
