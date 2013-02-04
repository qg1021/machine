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

import com.gm.machine.core.EnquiryManager;
import com.gm.machine.core.ProductManager;
import com.gm.machine.core.UserManager;
import com.gm.machine.entity.Enquiry;
import com.gm.machine.entity.Product;
import com.gm.machine.entity.User;
import com.gm.machine.util.CommonUtils;
import com.opensymphony.xwork2.ActionSupport;

/**
 * 
 * 前台商品询价
 * 
 * @author qingang
 * @version 1.0
 * @since 2012-12-14
 */
@Namespace("/")
public class EnquiryAction extends ActionSupport
{

    /**
     * serialVersionUID long
     */
    private static final long serialVersionUID = 1L;

    private Long pid;//商品id

    private Page<Enquiry>     page             = new Page<Enquiry>(8);
    @Autowired
    private EnquiryManager    enquiryManager;
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
        page = enquiryManager.search(page, filters);
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
            String hasbrand = request.getParameter("hasbrand");
            String hasbuy = request.getParameter("hasbuy");
            String buynum = request.getParameter("buynum");
            String buyprice = request.getParameter("buyprice");
            Enquiry enquiry = new Enquiry();
            enquiry.setUser(user);
            enquiry.setProduct(p);
            enquiry.setCreatedate(new Date());
            enquiry.setHasbrand(Boolean.parseBoolean(hasbrand));
            enquiry.setHasbuy(Boolean.parseBoolean(hasbuy));
            enquiry.setBuynum(buynum);
            enquiry.setBuyprice(buyprice);
            enquiry.setContent(CommonUtils.escapeHTMLTags(request
                    .getParameter("content")));
            enquiry.setTopic(true);
            enquiryManager.save(enquiry);
            p.setEnnum(p.getEnnum() + 1);
            productManager.save(p);
            Struts2Utils.renderText("询价成功");
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

    public Page<Enquiry> getPage()
    {
        return page;
    }

    public void setPage(Page<Enquiry> page)
    {
        this.page = page;
    }

}
