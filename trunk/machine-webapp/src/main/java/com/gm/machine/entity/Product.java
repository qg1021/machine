package com.gm.machine.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OrderBy;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import com.google.common.collect.Lists;

/**
 * 
 * 产品
 * 
 * @author qingang
 * @version 1.0
 * @since 2012-7-24
 */
@Entity
@Table(name = "t_product")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Product extends BaseEntity
{

    /**
     * serialVersionUID long
     */
    private static final long serialVersionUID = 1L;

    private String            name;                                   // 名称

    private String            remark;                                 // 简介

    private boolean           status;                                 // 是否发布

    @ManyToOne(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
    @NotFound(action = NotFoundAction.IGNORE)
    @JoinColumn(name = "category_id")
    private Category          category;                               // 分类

    @ManyToOne(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
    @NotFound(action = NotFoundAction.IGNORE)
    @JoinColumn(name = "brand_id")
    private BaseData          brand;                                  // 品牌

    private String            standard;                               // 规格

    private String            price;                                  // 价格

    private Date              createdate;                             // 创建时间

    private Date              pubdate;                                // 发布时间

    private String            picurl;                                 // 图片路径

    private String            province;                               // 省

    private String            city;                                   // 市

    private String            area;                                   // 区

    private String            address;                                // 详细地址

    private Long              onecatid;                               // 一级分类id（冗余字段）

    private Long              twocatid;                               // 二级分类id(冗余字段)

    private Long              threecatid;                             // 三级分裂id(冗余字段)

    private Long              bid;

    private long              postnum;                                // 评价数

    private long              ennum;                                  // 询价数

    private long              attnum;                                 // 关注度数

    @ManyToOne(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
    @NotFound(action = NotFoundAction.IGNORE)
    @JoinColumn(name = "user_id")
    private User              user;                                   // 发布人

    @OneToMany(targetEntity = Attention.class, cascade = CascadeType.REMOVE, fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id")
    @OrderBy(value = "id desc")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    private List<Attention>   attentionList    = Lists.newArrayList(); // 关注度

    @OneToMany(targetEntity = Post.class, cascade = CascadeType.REMOVE, fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id")
    @OrderBy(value = "id desc")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    private List<Post>        postList         = Lists.newArrayList(); // 评价数

    @OneToMany(targetEntity = Enquiry.class, cascade = CascadeType.REMOVE, fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id")
    @OrderBy(value = "id desc")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    private List<Enquiry>     enquiryList      = Lists.newArrayList(); // 询价数

    private boolean           recommend;                               // 热销推荐

    public boolean isRecommend()
    {
        return recommend;
    }

    public void setRecommend(boolean recommend)
    {
        this.recommend = recommend;
    }

    public long getPostnum()
    {
        return postnum;
    }

    public void setPostnum(long postnum)
    {
        this.postnum = postnum;
    }

    public long getEnnum()
    {
        return ennum;
    }

    public void setEnnum(long ennum)
    {
        this.ennum = ennum;
    }

    public long getAttnum()
    {
        return attnum;
    }

    public void setAttnum(long attnum)
    {
        this.attnum = attnum;
    }

    public List<Post> getPostList()
    {
        return postList;
    }

    public void setPostList(List<Post> postList)
    {
        this.postList = postList;
    }

    public List<Enquiry> getEnquiryList()
    {
        return enquiryList;
    }

    public void setEnquiryList(List<Enquiry> enquiryList)
    {
        this.enquiryList = enquiryList;
    }





    public List<Attention> getAttentionList()
    {
        return attentionList;
    }

    public void setAttentionList(List<Attention> attentionList)
    {
        this.attentionList = attentionList;
    }

    public User getUser()
    {
        return user;
    }

    public void setUser(User user)
    {
        this.user = user;
    }

    public String getProvince()
    {
        return province;
    }

    public void setProvince(String province)
    {
        this.province = province;
    }

    public String getCity()
    {
        return city;
    }

    public void setCity(String city)
    {
        this.city = city;
    }

    public String getArea()
    {
        return area;
    }

    public void setArea(String area)
    {
        this.area = area;
    }

    public String getAddress()
    {
        return address;
    }

    public void setAddress(String address)
    {
        this.address = address;
    }

    public Long getOnecatid()
    {
        return onecatid;
    }

    public void setOnecatid(Long onecatid)
    {
        this.onecatid = onecatid;
    }

    public Long getTwocatid()
    {
        return twocatid;
    }

    public void setTwocatid(Long twocatid)
    {
        this.twocatid = twocatid;
    }

    public Long getThreecatid()
    {
        return threecatid;
    }

    public void setThreecatid(Long threecatid)
    {
        this.threecatid = threecatid;
    }

    public String getPicurl()
    {
        return picurl;
    }

    public void setPicurl(String picurl)
    {
        this.picurl = picurl;
    }

    public Category getCategory()
    {
        return category;
    }

    public void setCategory(Category category)
    {
        this.category = category;
        this.onecatid = category.getParent().getPid();
        this.twocatid = category.getPid();
        this.threecatid = category.getId();
    }

    public BaseData getBrand()
    {
        return brand;
    }

    public void setBrand(BaseData brand)
    {
        this.brand = brand;
        this.bid = brand.getId();
    }

    public String getStandard()
    {
        return standard;
    }

    public void setStandard(String standard)
    {
        this.standard = standard;
    }

    public String getPrice()
    {
        return price;
    }

    public void setPrice(String price)
    {
        this.price = price;
    }

    public Date getCreatedate()
    {
        return createdate;
    }

    public void setCreatedate(Date createdate)
    {
        this.createdate = createdate;
    }

    public Date getPubdate()
    {
        return pubdate;
    }

    public void setPubdate(Date pubdate)
    {
        this.pubdate = pubdate;
    }

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
        return status ? "已发布" : "未发布";
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

    public Long getBid()
    {
        return bid;
    }

    public void setBid(Long bid)
    {
        this.bid = bid;
    }

}