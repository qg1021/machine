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

import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.convention.annotation.Namespace;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springside.modules.security.springsecurity.SpringSecurityUtils;
import org.springside.modules.utils.web.struts2.Struts2Utils;

import com.gm.machine.core.UserManager;
import com.gm.machine.entity.User;
import com.opensymphony.xwork2.ActionSupport;

/**
 * 首页
 * 
 * @author qingang
 * @version 1.0
 * @since 2012-9-10
 */
@Namespace("/")
public class IndexAction extends ActionSupport
{

    /**
     * serialVersionUID long
     */
    private static final long serialVersionUID = 1L;

    @Autowired
    private UserManager       userManager;

    @Autowired
    @Qualifier("org.springframework.security.authenticationManager")
    protected AuthenticationManager authenticationManager;

    private String            mess;

    private long                    pid;

    public long getPid()
    {
        return pid;
    }

    public void setPid(long pid)
    {
        this.pid = pid;
    }

    @Override
    public String execute() throws Exception
    {
        return SUCCESS;
    }

    public String isLogin() throws Exception
    {
        if (SpringSecurityUtils.getCurrentUser() == null)
        {
            Struts2Utils.renderText("false");
        }
        else
        {
            Struts2Utils.renderText("true");
        }
        return null;
    }

    /**
     * 
     * 弹出层登录页面
     * 
     * @since 2012-12-9
     * @author qingang
     * @return
     * @throws Exception
     */
    public String logininit() throws Exception
    {
        return "login";
    }

    public String login() throws Exception{
        try
        {
            HttpServletRequest request = Struts2Utils.getRequest();
            User entity = userManager.getUserByUsername(request.getParameter("username"));
            if(entity==null){
                mess = "用户名不存在";
                return "login";
            }else{
                if(entity.isUserlock()){
                    mess = "用户名不存在";
                    return "login";
                }
            }

            UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
                    request.getParameter("username"), request.getParameter("loginpwd"));
            token.setDetails(new WebAuthenticationDetails(request));
            Authentication authenticatedUser = authenticationManager
            .authenticate(token);

            SecurityContextHolder.getContext().setAuthentication(
                    authenticatedUser);
            request
            .getSession()
            .setAttribute(
                    HttpSessionSecurityContextRepository.SPRING_SECURITY_CONTEXT_KEY,
                    SecurityContextHolder.getContext());

            entity.setLastLoginDate(new Date());// 记录最后登录时间
            entity.setLoginTimes(entity.getLoginTimes() + 1);// 记录登录次数
            userManager.save(entity);
            request.getSession().setAttribute("loginuser", entity);
            request.getSession().setAttribute("userid", entity.getId());
            mess = "登录成功";
            return "login";
        }
        catch (AuthenticationException e)
        {
            mess = "密码错误";
            e.printStackTrace();
            return "login";

        }
    }

    public String getMess()
    {
        return mess;
    }

    public void setMess(String mess)
    {
        this.mess = mess;
    }


}
