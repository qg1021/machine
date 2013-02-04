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

import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Results;
import org.springside.modules.utils.web.struts2.Struts2Utils;

import com.gm.machine.contant.Global;
import com.gm.machine.web.BaseUserAction;

/**
 * 会员中心
 * 
 * @author qingang
 * @version 1.0
 * @since 2012-9-5
 */
@Namespace("/user")
@Results( { @Result(name = "view", location = "user!view.action", type = "redirect") })
public class UserAction extends BaseUserAction
{

    /**
     * serialVersionUID long
     */
    private static final long serialVersionUID = 1L;

    @Override
    public String input() throws Exception
    {
        return INPUT;
    }

    @Override
    public String execute() throws Exception
    {
        HttpServletRequest request = Struts2Utils.getRequest();
        entity = userManager.get((Long) request.getSession().getAttribute(
        "userid"));
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
            entity = userManager.get((Long) Struts2Utils.getSession()
                    .getAttribute("userid"));

        }

    }

    @Override
    public String save() throws Exception
    {
        try
        {
            userManager.save(entity);
            this.addActionMessage(Global.MODIFY_SUCCESS);
        }
        catch (Exception e)
        {
            this.addActionMessage(Global.MODIFY_LOSE);
            e.printStackTrace();
        }
        return INPUT;
    }

    public String savePass() throws Exception
    {
        try
        {
            String oldpass = Struts2Utils.getParameter("oldpass");
            String password = Struts2Utils.getParameter("password");
            entity = userManager.get(id);
            if (!entity.getPassword().equals(oldpass))
            {
                this.addActionMessage(Global.CURRENT_PASSWORD);
            }
            else
            {
                entity.setPassword(password);
                userManager.save(entity);
                this.addActionMessage(Global.MODIFY_SUCCESS);
            }

        }
        catch (Exception e)
        {
            this.addActionMessage(Global.MODIFY_LOSE);
            e.printStackTrace();
        }
        return "view";
    }

    /**
     * 
     * 修改密码初始化
     * 
     * @since 2012-9-6
     * @author qingang
     * @return
     * @throws Exception
     */
    public String view() throws Exception
    {
        return "pass";
    }

}
