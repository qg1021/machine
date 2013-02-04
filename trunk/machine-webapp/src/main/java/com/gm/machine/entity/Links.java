package com.gm.machine.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * 
 * 友情链接、广告推广
 * 
 * @author qingang
 * @version 1.0
 * @since 2012-7-24
 */
@Entity
@Table(name = "t_links")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Links extends BaseEntity
{

    /**
     * serialVersionUID long
     */
    private static final long serialVersionUID = 1L;

    private String            title;                // 标题

    private String            picurl;               // 图片路径

    private Date              createdate;           // 创建时间

    private boolean           ispublic;             // 是否发布

    private Date              publishdate;          // 发布时间

    private String            remark;               // 内容

    private String            linkurl;              // 链接

    private int               type;

    public final static int   TYPE_0           = 0;

    public final static int   TYPE_1           = 1;

    public final static int   TYPE_2           = 0;

    @Transient
    public String getStatusName()
    {
        if (ispublic)
        {
            return "已发布";
        }
        return "未发布";
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

    public int getType()
    {
        return type;
    }

    public void setType(int type)
    {
        this.type = type;
    }

    public String getTitle()
    {
        return title;
    }

    public void setTitle(String title)
    {
        this.title = title;
    }

    public String getPicurl()
    {
        return picurl;
    }

    public void setPicurl(String picurl)
    {
        this.picurl = picurl;
    }

    public Date getCreatedate()
    {
        return createdate;
    }

    public void setCreatedate(Date createdate)
    {
        this.createdate = createdate;
    }

    public Boolean getIspublic()
    {
        return ispublic;
    }

    public void setIspublic(Boolean ispublic)
    {
        this.ispublic = ispublic;
    }

    public Date getPublishdate()
    {
        return publishdate;
    }

    public void setPublishdate(Date publishdate)
    {
        this.publishdate = publishdate;
    }

}