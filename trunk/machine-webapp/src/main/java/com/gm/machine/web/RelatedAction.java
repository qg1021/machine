package com.gm.machine.web;

//-------------------------------------------------------------------------
// Copyright (c) 2000-2010 Ufinity. All Rights Reserved.
//
// This software is the confidential and proprietary information of
// Ufinity
//
// Original author: chengpeng.zhang
//
//-------------------------------------------------------------------------
// UFINITY MAKES NO REPRESENTATIONS OR WARRANTIES ABOUT THE SUITABILITY OF
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

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.ServletActionContext;
import org.apache.struts2.convention.annotation.Namespace;
import org.springframework.beans.factory.annotation.Autowired;
import org.springside.modules.utils.web.struts2.Struts2Utils;

import cn.common.lib.util.web.ParamUtils;
import cn.common.lib.vo.LabelValue;

import com.gm.machine.core.CategoryManager;
import com.gm.machine.entity.Category;
import com.google.common.collect.Lists;
import com.opensymphony.xwork2.ActionSupport;

@Namespace("/")
public class RelatedAction extends ActionSupport
{
    /**
     * serialVersionUID long
     */
    private static final long serialVersionUID = 1L;

    @Autowired
    private CategoryManager   categoryManager;

    /**
     * 
     * 分类级联
     * 
     * @since 2012-9-10
     * @author qingang
     * @return
     * @throws Exception
     */
    public String categorys() throws Exception
    {
        HttpServletRequest request = ServletActionContext.getRequest();
        Long parentId = ParamUtils.getLongParameter(request, "parentId", null);

        List<Category> categories = categoryManager.getAllCats(parentId);
        if (categories == null || categories.size() < 0)
        {
            Struts2Utils.renderJson("");
            return null;
        }

        List<LabelValue> categoryLvList = Lists.newArrayList();
        LabelValue lv = null;
        for (Category category : categories)
        {
            lv = new LabelValue(String.valueOf(category.getId()), category
                    .getName());
            categoryLvList.add(lv);
        }

        Struts2Utils.renderJson(categoryLvList);

        return null;
    }

}
