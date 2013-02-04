package com.gm.machine.entity;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * 
 * 基础数据
 * 
 * @author qingang
 * @version 1.0
 * @since 2012-7-24
 */
@Entity
@Table(name = "t_basedata")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class BaseData extends BaseEntity
{

    /**
     * serialVersionUID long
     */
    private static final long serialVersionUID = 1L;

    private String            name;                 // 名称

    private String            remark;               // 简介

    private int               type;                 // 类型

    private boolean           status;               // 是否启用

    public final static int   BRAND_TYPE       = 0; // 品牌

    public final static int   ENQUIRY_TYPE     = 1;  // 询价类型

    public boolean isStatus()
    {
        return status;
    }

    public void setStatus(boolean status)
    {
        this.status = status;
    }

    public String getName()
    {
        return name;
    }

    @Transient
    public String getStatusName()
    {
        return status ? "启用" : "禁用";
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public String getRemark()
    {
        return remark;
    }

    public void setRemark(String remark)
    {
        this.remark = remark;
    }

    public int getType()
    {
        return type;
    }

    public void setType(int type)
    {
        this.type = type;
    }

}