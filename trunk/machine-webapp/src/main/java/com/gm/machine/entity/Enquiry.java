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
 * 用户商品询价
 * 
 * @author qingang
 * @version 1.0
 * @since 2012-7-24
 */
@Entity
@Table(name = "t_enquiry")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Enquiry extends BaseEntity
{

    /**
     * serialVersionUID long
     */
    private static final long serialVersionUID = 1L;

    private String            title;                                  // 询价标题

    private String            content;                                // 询价内容

    private boolean           hasbrand;                               // 是否有品牌要求

    @ManyToOne(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
    @NotFound(action = NotFoundAction.IGNORE)
    @JoinColumn(name = "product_id")
    private Product           product;                                // 商品

    @ManyToOne(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
    @NotFound(action = NotFoundAction.IGNORE)
    @JoinColumn(name = "uptype_id")
    private BaseData          uptype;                                 // 产品询价的侧重点

    private boolean           status;                                 // 是否屏蔽

    @ManyToOne(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
    @NotFound(action = NotFoundAction.IGNORE)
    @JoinColumn(name = "user_id")
    private User              user;                                   // 询价人

    private Date              createdate;                             // 询价时间

    private boolean           hasbuy;                                 // 是否有采购意向

    private Date              buydate;                                // 采购时间

    private String            buynum;                                 // 采购数量

    private String            buyprice;                               // 期望采购价格

    private Date              indate;                                 // 有效期

    @OneToMany(mappedBy = "parent", cascade = CascadeType.REMOVE, fetch = FetchType.LAZY)
    @OrderBy(value = "id")
    private List<Enquiry>     childs           = Lists.newArrayList();

    @ManyToOne(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
    @NotFound(action = NotFoundAction.IGNORE)
    @JoinColumn(name = "parent_id")
    private Enquiry           parent;                                 // 主询价

    private long              productid;                              // 产品id(冗余字段)

    private boolean           topic;                                  // 是否为主贴

    private long              uid;

    public long getUid()
    {
        return uid;
    }

    public void setUid(long uid)
    {
        this.uid = uid;
    }

    public boolean isTopic()
    {
        return topic;
    }

    public void setTopic(boolean topic)
    {
        this.topic = topic;
    }

    public long getProductid()
    {
        return productid;
    }

    public void setProductid(long productid)
    {
        this.productid = productid;
    }

    public String getTitle()
    {
        return title;
    }

    public void setTitle(String title)
    {
        this.title = title;
    }

    public String getContent()
    {
        return content;
    }

    public void setContent(String content)
    {
        this.content = content;
    }

    public boolean isHasbrand()
    {
        return hasbrand;
    }

    public void setHasbrand(boolean hasbrand)
    {
        this.hasbrand = hasbrand;
    }

    public Product getProduct()
    {
        return product;
    }

    public void setProduct(Product product)
    {
        this.product = product;
        this.productid = product.getId();
    }

    public BaseData getUptype()
    {
        return uptype;
    }

    public void setUptype(BaseData uptype)
    {
        this.uptype = uptype;
    }

    public User getUser()
    {
        return user;
    }

    public void setUser(User user)
    {
        this.user = user;
        this.uid = user.getId();
    }

    public Date getCreatedate()
    {
        return createdate;
    }

    public void setCreatedate(Date createdate)
    {
        this.createdate = createdate;
    }

    public boolean isHasbuy()
    {
        return hasbuy;
    }

    public void setHasbuy(boolean hasbuy)
    {
        this.hasbuy = hasbuy;
    }

    public Date getBuydate()
    {
        return buydate;
    }

    public void setBuydate(Date buydate)
    {
        this.buydate = buydate;
    }

    public String getBuynum()
    {
        return buynum;
    }

    public void setBuynum(String buynum)
    {
        this.buynum = buynum;
    }

    public String getBuyprice()
    {
        return buyprice;
    }

    public void setBuyprice(String buyprice)
    {
        this.buyprice = buyprice;
    }

    public Date getIndate()
    {
        return indate;
    }

    public void setIndate(Date indate)
    {
        this.indate = indate;
    }

    public Enquiry getParent()
    {
        return parent;
    }

    public void setParent(Enquiry parent)
    {
        this.parent = parent;
    }

    public List<Enquiry> getChilds()
    {
        return childs;
    }

    public void setChilds(List<Enquiry> childs)
    {
        this.childs = childs;
    }

    public boolean isStatus()
    {
        return status;
    }

    public void setStatus(boolean status)
    {
        this.status = status;
    }

    @Transient
    public String getStatusName()
    {
        return status ? "已屏蔽" : "未屏蔽";
    }

}