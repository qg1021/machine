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
package com.gm.machine.api;

import java.util.List;

import cn.common.lib.springside.orm.BaseDao;

import com.gm.machine.entity.BaseData;

/**
 * 
 * 操作基础数据接口
 * 
 * @author qingang
 * @version 1.0
 * @since 2011-11-8
 */
public interface BaseDataDao extends BaseDao<BaseData, Long>
{
    /**
     * 
     * 批量删除
     * 
     * @since 2012-7-25
     * @author qingang
     * @param ids
     */
    public void batchDelete(List<Long> ids);

    /**
     * 
     * 通过type查询基础数据列表
     * 
     * @since 2012-7-25
     * @author qingang
     * @param ype
     * @return
     */
    public List<BaseData> searchByType(int type);

    /**
     * 
     * 启用和禁用
     * 
     * @since 2012-7-26
     * @author qingang
     * @param ids
     * @param status
     *            true: 启用 false:禁用
     */
    public void batchStart(List<Long> ids, Boolean status);

    /**
     * 
     * 统计基础数据的个数
     * 
     * @since 2012-11-25
     * @author qingang
     * @param name
     *            名称
     * @param type
     *            类型
     * @return
     */
    public long countBaseData(String name, int type);

}
