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
package com.gm.machine.contant;

import java.util.List;

import cn.common.lib.util.web.PropertyUtils;
import cn.common.lib.vo.LabelValue;

import com.google.common.collect.Lists;

/**
 * 
 * 全局静态变量
 * 
 * @author qingang
 * @version 1.0
 * @since 2011-11-15
 */
public class Global
{
    public final static int        MAX_PAGESIZE     = 2000;                // 最大数据量

    public final static String     EXPORT_SUCCESS   = "导出成功";

    public final static String     EXPORT_LOSE      = "导出失败";

    public final static String     RECOMMEND_SUCCESS = "推荐成功";

    public final static String     RECOMMEND_LOSE    = "推荐失败";

    public final static String     LOCK_SUCCESS     = "锁定成功";

    public final static String     LOCK_LOSE        = "锁定失败";

    public final static String     CLEAR_SUCCESS    = "解锁成功";

    public final static String     CLEAR_LOSE       = "解锁失败";

    public final static String     PUBLISH_SUCCESS  = "发布成功";

    public final static String     PUBLISH_LOSE     = "发布失败";

    public final static String     CANCEL_SUCCESS   = "取消成功";

    public final static String     CANCEL_LOSE      = "取消失败";

    public final static String     DISPLAY_SUCCESS  = "显示成功";

    public final static String     DISPLAY_LOSE     = "显示失败";

    public final static String     SCREEN_SUCCESS   = "屏蔽成功";

    public final static String     SCREEN__LOSE     = "屏蔽失败";

    public final static String     START_SUCCESS    = "启用成功";

    public final static String     START_LOSE       = "启用失败";

    public final static String     DISABLE_SUCCESS  = "禁用成功";

    public final static String     DISABLE_LOSE     = "禁用失败";

    public final static String     AUDIT_SUCCESS    = "审核成功";

    public final static String     AUDIT_LOSE       = "审核失败";

    public final static String     UNAUDIT_SUCCESS  = "审核不通过成功";

    public final static String     UNAUDIT_LOSE     = "审核不通过失败";

    public final static String     SAVE_SUCCESS     = "保存成功";

    public final static String     SAVE_LOSE        = "保存失败";

    public final static String     MODIFY_SUCCESS   = "修改成功";

    public final static String     MODIFY_LOSE      = "修改失败";

    public final static String     CURRENT_PASSWORD = "当前密码输入不正确";

    public final static String     UPLOAD_SUCCESS   = "上传成功";

    public final static String     UPLOAD_LOSE      = "上传失败";

    public final static String     DELETE_SUCCESS   = "删除成功";

    public final static String     DELETE_LOSE      = "删除失败";

    public final static String     IMPORT_NO_DATA   = "导入的文件没有数据或者模版不正确";

    public final static String     IMPORT_NO_FILE   = "没有导入文件";

    public static List<LabelValue> BASEDATA_TYPES   = Lists.newArrayList();

    public final static String     DEAULT_NO_IMAGE  = "null.gif";

    public final static String     CATEGORY_HTMLPAGE_URL = "WEB-INF/content/category-shtml.jsp";                // 首页产品分类静态也全路径

    public final static String     HMTLPAGE_CHARSET      = "<%@ page contentType=\"text/html;charset=UTF-8\"%>";

    public static String           picpath;

    public static List<LabelValue> newsTypeList     = Lists.newArrayList();

    public static List<LabelValue> advertTypeList   = Lists.newArrayList();

    public static List<LabelValue> linksTypeList    = Lists.newArrayList();

    public static String           appurl;

    public static String           siteurl;

    static
    {
        BASEDATA_TYPES.add(new LabelValue("brand", "基础数据-品牌"));
        BASEDATA_TYPES.add(new LabelValue("buytype", "基础数据-用户询价类型"));
        picpath = PropertyUtils.getProperty("upload.path");
        appurl = PropertyUtils.getProperty("machine.appurl");
        siteurl = PropertyUtils.getProperty("machine.siteurl");
        /** 行情资讯分类 **/
        newsTypeList.add(new LabelValue("syzx", "首页资讯"));// ----0

        advertTypeList.add(new LabelValue("advert01", "首页顶部红腰带"));// ----0
        advertTypeList.add(new LabelValue("advert02", "首页切换广告位"));// ----1
        advertTypeList.add(new LabelValue("advert03", "首页中间广告位"));// ----2
        advertTypeList.add(new LabelValue("advert04", "首页尾部广告位"));// ----3

        linksTypeList.add(new LabelValue("friendlinks", "友情链接"));// ----0
        linksTypeList.add(new LabelValue("aboutus", "关于我们"));// ----1
        linksTypeList.add(new LabelValue("contactus", "联系我们"));// ----2
        linksTypeList.add(new LabelValue("adextend", "广告推广"));// ----3

    }

}
