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

import java.util.List;

import org.apache.struts2.convention.annotation.Namespace;
import org.springframework.beans.factory.annotation.Autowired;

import cn.common.lib.springside.web.CrudActionSupport;

import com.gm.machine.contant.Global;
import com.gm.machine.core.AdvertManager;
import com.gm.machine.entity.Advert;
import com.google.common.collect.Lists;

/**
 * 
 * 广告服务
 * 
 * @author qingang
 * @version 1.0
 * @since 2012-7-28
 */
@Namespace("/")
public class AdvertAction extends CrudActionSupport<Advert>
{
    /**
     * serialVersionUID long
     */
    private static final long serialVersionUID = 1L;

    private List<Advert>      advertList       = Lists.newArrayList();

    @Autowired
    private AdvertManager     advertManager;

    private Advert            advert;

    private Long              id;

    public Long getId()
    {
        return id;
    }

    public void setId(Long id)
    {
        this.id = id;
    }

    public Advert getAdvert()
    {
        return advert;
    }

    public void setAdvert(Advert advert)
    {
        this.advert = advert;
    }

    private int mtype;

    public int getMtype()
    {
        return mtype;
    }

    public void setMtype(int mtype)
    {
        this.mtype = mtype;
    }

    public String getLinkName()
    {
        return Global.advertTypeList.get(mtype).getLabel();
    }

    @Override
    public String execute() throws Exception
    {
        advertList = advertManager.search(Advert.TYPE_0, 100);
        return "advert";
    }

    /**
     * 
     * 首页顶部广告位
     * 
     * @since 2012-12-2
     * @author qingang
     * @return
     * @throws Exception
     */
    public String indextop() throws Exception
    {
        advertList = advertManager.search(Advert.TYPE_0, 1);
        return "top";
    }

    /**
     * 
     * 中间广告位
     * 
     * @since 2012-12-2
     * @author qingang
     * @return
     * @throws Exception
     */
    public String middle() throws Exception
    {
        advertList = advertManager.search(mtype, 6);
        return "middle";
    }

    /**
     * 
     * 首页顶部广告位
     * 
     * @since 2012-12-2
     * @author qingang
     * @return
     * @throws Exception
     */
    public String tab() throws Exception
    {
        advertList = advertManager.search(Advert.TYPE_1, 10);
        return "tab";
    }

    public String detail() throws Exception
    {
        List<Advert> llist = advertManager.search(mtype, 1);
        if (llist != null && !llist.isEmpty())
        {
            advert = llist.get(0);
        }
        return "input";
    }

    public List<Advert> getAdvertList()
    {
        return advertList;
    }

    /**
     * {@inheritDoc}
     * 
     * @since 2012-12-2
     * @see cn.common.lib.springside.web.CrudActionSupport#input()
     */
    @Override
    public String input() throws Exception
    {
        return INPUT;
    }

    /**
     * {@inheritDoc}
     * 
     * @since 2012-12-2
     * @see cn.common.lib.springside.web.CrudActionSupport#list()
     */
    @Override
    public String list() throws Exception
    {
        // TODO Auto-generated method stub
        return null;
    }

    /**
     * {@inheritDoc}
     * 
     * @since 2012-12-2
     * @see cn.common.lib.springside.web.CrudActionSupport#prepareModel()
     */
    @Override
    protected void prepareModel() throws Exception
    {
        if (id != null)
        {
            advert = advertManager.get(id);
        }

    }

    /**
     * {@inheritDoc}
     * 
     * @since 2012-12-2
     * @see cn.common.lib.springside.web.CrudActionSupport#save()
     */
    @Override
    public String save() throws Exception
    {
        // TODO Auto-generated method stub
        return null;
    }

    /**
     * {@inheritDoc}
     * 
     * @since 2012-12-2
     * @see com.opensymphony.xwork2.ModelDriven#getModel()
     */
    @Override
    public Advert getModel()
    {
        return advert;
    }
}
