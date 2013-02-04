package com.gm.machine.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OrderBy;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import com.google.common.collect.Lists;

/**
 * 
 * 分类
 * 
 * @author qingang
 * @version 1.0
 * @since 2012-8-29
 */
@Entity
@Table(name = "t_category")
// 默认的缓存策略
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Category extends BaseEntity
{

    /**
     * serialVersionUID long
     */
    private static final long serialVersionUID = -6686865393271702213L;

    private String            name;                                    // 栏目名称

    @ManyToOne(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
    @NotFound(action = NotFoundAction.IGNORE)
    @JoinColumn(name = "parent_id")
    private Category          parent;                                  // 上级栏目

    private long              pid;                                     // 上级目录id

    private int               cattype;                                 // 分类等级

    @OneToMany(mappedBy = "parent", cascade = CascadeType.REMOVE, fetch = FetchType.LAZY)
    @OrderBy(value = "orderNum")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    private List<Category>    childcats        = Lists.newArrayList(); // 取得当前分类下的下一级分类

    public static final int   CAT_TYPE_ONE     = 1;                    // 一级分类

    public static final int   CAT_TYPE_THREE   = 3;                    // 三级分类

    public static final int   CAT_TYPE_TWO     = 2;                    // 二级分类

    private int               orderNum;                                // 分类序号

    private boolean           rone;                                    // 首页推荐分类一

    private boolean           rtwo;                                    // 首页推荐分类二

    public boolean isRone()
    {
        return rone;
    }

    public void setRone(boolean rone)
    {
        this.rone = rone;
    }

    public boolean isRtwo()
    {
        return rtwo;
    }

    public void setRtwo(boolean rtwo)
    {
        this.rtwo = rtwo;
    }

    public int getOrderNum()
    {
        return orderNum;
    }

    public void setOrderNum(int orderNum)
    {
        this.orderNum = orderNum;
    }

    public int getCattype()
    {
        return cattype;
    }

    public void setCattype(int cattype)
    {
        this.cattype = cattype;
    }

    public List<Category> getChildcats()
    {
        return childcats;
    }

    public void setChildcats(List<Category> childcats)
    {
        this.childcats = childcats;
    }

    public long getPid()
    {
        return pid;
    }

    public void setPid(long pid)
    {
        this.pid = pid;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public Category getParent()
    {
        return parent;
    }

    public void setParent(Category parent)
    {
        this.parent = parent;
        if (parent != null && parent.getId() != null)
        {
            pid = parent.getId();
        }
        else
        {
            pid = 0;
        }
    }

}
