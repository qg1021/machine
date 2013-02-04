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

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.apache.struts2.convention.annotation.Namespace;
import org.springframework.beans.factory.annotation.Autowired;
import org.springside.modules.utils.web.struts2.Struts2Utils;

import cn.common.lib.vo.LabelValue;

import com.gm.machine.core.UserManager;
import com.gm.machine.entity.User;
import com.opensymphony.xwork2.ActionSupport;

/**
 * 
 * 忘记密码
 * 
 * @author qingang
 * @version 1.0
 * @since 2011-2-14
 */
@Namespace("/")
public class FindpwdAction extends ActionSupport
{

    /**
     * serialVersionUID long
     */
    private static final long serialVersionUID = 1L;

    @Autowired
    private UserManager       userManager;

    @Override
    public String execute() throws Exception
    {
        return SUCCESS;
    }

    /**
     * 
     * 用户名验证
     * 
     * @since 2011-2-14
     * @author qingang
     * @return
     * @throws Exception
     */
    public String vaild() throws Exception
    {
        HttpServletRequest request = Struts2Utils.getRequest();
        String username = request.getParameter("userName");
        User user = userManager.getUserByUsername(username);
        if (user == null)
        {
            Struts2Utils.renderJson(new LabelValue("", ""));
        }
        else
        {
            Struts2Utils.renderJson(new LabelValue(user.getPwdquestion(), ""));
        }
        return null;
    }

    /**
     * 
     * 密保问题验证
     * 
     * @since 2011-2-15
     * @author qingang
     * @return
     * @throws Exception
     */
    public String answer() throws Exception
    {
        HttpServletRequest request = Struts2Utils.getRequest();
        String username = request.getParameter("userName");
        String answer = request.getParameter("answer");
        User user = userManager.getUserByUsername(username);
        if (StringUtils.isNotEmpty(answer)
                && answer.equals(user.getPwdanswer()))
        {
            Struts2Utils.renderJson(new LabelValue(user.getNick(), ""));
        }
        else
        {
            Struts2Utils.renderJson(new LabelValue("", ""));
        }
        return null;
    }

    /**
     * 
     * 设置新密码
     * 
     * @since 2011-2-15
     * @author qingang
     * @return
     * @throws Exception
     */
    public String setPwd() throws Exception
    {
        HttpServletRequest request = Struts2Utils.getRequest();
        String username = request.getParameter("userName");
        String password = request.getParameter("pwd");
        User user;
        try
        {
            user = userManager.getUserByUsername(username);
            user.setPassword(password);
            userManager.save(user);
            Struts2Utils.renderJson(new LabelValue("新密码设置成功", ""));
        }
        catch (Exception e)
        {
            e.printStackTrace();
            Struts2Utils.renderJson(new LabelValue("系统异常", ""));
        }

        return null;
    }

    public String finish() throws Exception
    {
        return SUCCESS;
    }
}
