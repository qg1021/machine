package com.gm.machine.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * 
 * 广告位
 * 
 * @author qingang
 * @version 1.0
 * @since 2012-7-24
 */
@Entity
@Table(name = "t_advert")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Advert extends BaseEntity
{

    /**
     * serialVersionUID long
     */
    private static final long serialVersionUID = 1L;

    private String            title;

    private int               type;

    private String            picurl;

    private String            remark;

    private boolean           ispublic;

    private Date              pubdate;

    public final static int   TYPE_0           = 0; // 首页顶部

    public final static int   TYPE_1           = 1; // 首页切换

    public final static int   TYPE_2           = 2; // 首页中间

    public final static int   TYPE_3           = 3;  // 首页中间

    public final static int   TYPE_4           = 4;  //

    public final static int   TYPE_5           = 5;

    public Date getPubdate()
    {
        return pubdate;
    }

    public void setPubdate(Date pubdate)
    {
        this.pubdate = pubdate;
    }

    @Transient
    public String getStatusName()
    {
        if (ispublic)
        {
            return "已发布";
        }
        return "未发布";
    }

    public boolean isIspublic()
    {
        return ispublic;
    }

    public void setIspublic(boolean ispublic)
    {
        this.ispublic = ispublic;
    }

    public String getTitle()
    {
        return title;
    }

    public void setTitle(String title)
    {
        this.title = title;
    }

    public int getType()
    {
        return type;
    }

    public void setType(int type)
    {
        this.type = type;
    }

    public String getPicurl()
    {
        return picurl;
    }

    public void setPicurl(String picurl)
    {
        this.picurl = picurl;
    }

    public String getRemark()
    {
        return remark;
    }

    public void setRemark(String remark)
    {
        this.remark = remark;
    }

    public String getLinkurl()
    {
        return linkurl;
    }

    public void setLinkurl(String linkurl)
    {
        this.linkurl = linkurl;
    }

    private String linkurl;

}