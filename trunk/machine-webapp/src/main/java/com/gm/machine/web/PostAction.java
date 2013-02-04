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

import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.apache.struts2.convention.annotation.Namespace;
import org.springframework.beans.factory.annotation.Autowired;
import org.springside.modules.orm.Page;
import org.springside.modules.orm.PropertyFilter;
import org.springside.modules.security.springsecurity.SpringSecurityUtils;
import org.springside.modules.utils.web.struts2.Struts2Utils;

import cn.common.lib.springside.util.ParamPropertyUtils;

import com.gm.machine.core.PostManager;
import com.gm.machine.core.ProductManager;
import com.gm.machine.core.UserManager;
import com.gm.machine.entity.Post;
import com.gm.machine.entity.Product;
import com.gm.machine.entity.User;
import com.gm.machine.util.CommonUtils;
import com.opensymphony.xwork2.ActionSupport;

/**
 * 
 * 前台商品评价
 *
 * @author            qingang
 * @version           1.0
 * @since             2012-12-14
 */
@Namespace("/")
public class PostAction extends ActionSupport
{

    /**
     * serialVersionUID long
     */
    private static final long serialVersionUID = 1L;

    private Long pid;//商品id

    private Page<Post>        page             = new Page<Post>(8);
    @Autowired
    private PostManager postManager;
    @Autowired
    private ProductManager productManager;
    @Autowired
    private UserManager userManager;
    @Override
    public String execute() throws Exception{
        HttpServletRequest request = Struts2Utils.getRequest();
        List<PropertyFilter> filters = PropertyFilter
        .buildFromHttpRequest(request);
        ParamPropertyUtils.replacePropertyRule(filters);
        filters.add(new PropertyFilter("EQB_topic", "true"));
        filters.add(new PropertyFilter("EQB_status", "false"));
        filters.add(new PropertyFilter("EQL_productid", String.valueOf(pid)));
        if (!page.isOrderBySetted())
        {
            page.setOrderBy("id");
            page.setOrder(Page.DESC);
        }
        page = postManager.search(page, filters);
        return SUCCESS;
    }
    public String save() throws Exception{
        try
        {
            HttpServletRequest request = Struts2Utils.getRequest();
            String scode = (String) request.getSession().getAttribute("scode");
            String rcode = request.getParameter("rcode");
            if(StringUtils.isBlank(rcode)){
                Struts2Utils.renderText("输入验证码");
                return null;
            }
            if(!rcode.equalsIgnoreCase(scode)){
                Struts2Utils.renderText("验证码输入不正确");
                return null;
            }
            Product p = productManager.get(pid);
            User user = userManager.getUserByUsername(SpringSecurityUtils.getCurrentUserName());
            Post post = new Post();
            post.setUser(user);
            post.setProduct(p);
            post.setCreatedate(new Date());
            post.setRemark(CommonUtils.escapeHTMLTags(request.getParameter("remark")));
            post.setTopic(true);
            postManager.save(post);
            p.setPostnum(p.getPostnum()+1);
            productManager.save(p);
            Struts2Utils.renderText("发表成功");
        }
        catch (Exception e)
        {
            Struts2Utils.renderText("系统异常");
            e.printStackTrace();
        }
        return null;
    }
    public Long getPid()
    {
        return pid;
    }
    public void setPid(Long pid)
    {
        this.pid = pid;
    }
    public Page<Post> getPage()
    {
        return page;
    }
    public void setPage(Page<Post> page)
    {
        this.page = page;
    }

}
