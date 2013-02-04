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
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Results;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springside.modules.utils.web.struts2.Struts2Utils;

import cn.common.lib.springside.web.CrudActionSupport;

import com.gm.machine.contant.Global;
import com.gm.machine.entity.Role;
import com.gm.machine.entity.User;
import com.google.common.collect.Lists;

/**
 * 用户注册、忘记密码
 * 
 * @author qingang
 * @version 1.0
 * @since 2012-9-5
 */
@Namespace("/")
@Results( { @Result(name = CrudActionSupport.RELOAD, location = "user/index.action", type = "redirect") })
public class RegisterAction extends BaseUserAction
{

    /**
     * serialVersionUID long
     */
    private static final long serialVersionUID = 1L;

    private String            tip;

    @Autowired
    @Qualifier("org.springframework.security.authenticationManager")
    protected AuthenticationManager authenticationManager;

    public String getTip()
    {
        return tip;
    }

    public void setTip(String tip)
    {
        this.tip = tip;
    }

    @Override
    public String input() throws Exception
    {
        return SUCCESS;
    }

    @Override
    protected void prepareModel() throws Exception
    {
        if (id != null)
        {
            entity = userManager.get(id);
        }
        else
        {
            entity = new User();
            List<Role> rlist = Lists.newArrayList();
            rlist.add(roleManager.findByName(Role.ROLE_TYPE_0));
            entity.setRoleList(rlist);
            entity.setCreateDate(new Date());
        }

    }

    @Override
    public String save() throws Exception
    {
        try
        {
            HttpServletRequest request = Struts2Utils.getRequest();
            String rcode = Struts2Utils.getParameter("rcode");
            String scode = (String)Struts2Utils.getSession().getAttribute("scode");
            if(StringUtils.isBlank(rcode)){
                this.tip = "输入验证码!";
                return input();
            }else{
                if(!rcode.equalsIgnoreCase(scode))
                {
                    this.tip = "验证码输入错误!";
                    return input();
                }

            }
            userManager.save(entity);
            UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
                    entity.getLoginName(), entity.getPassword());
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
        }
        catch (Exception e)
        {
            this.addActionMessage(Global.SAVE_LOSE);
            e.printStackTrace();
        }
        return RELOAD;
    }

}
