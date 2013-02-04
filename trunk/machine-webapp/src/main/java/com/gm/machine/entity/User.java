package com.gm.machine.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OrderBy;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import com.google.common.collect.Lists;

/**
 * 用户
 */
@Entity
@Table(name = "acct_user")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class User extends BaseEntity
{

    /**
     * serialVersionUID long
     */
    private static final long   serialVersionUID = 1L;
    private String              loginName;               // 用户名
    private String              name;                    // 姓名
    private String              nick;                    // 昵称
    private String              password;                // 密码
    private String              edudegree;               // 教育经历
    private String              email;                   // 邮箱
    private String              province;                // 省
    private String              city;                    // 市
    private String              area;                    // 区
    private String              address;                 // 详细地址
    private String              introduction;            // 简介
    private String              sex;                     // 性别
    private Date                createDate;              // 创建时间
    private String              roleName;                // 角色名称
    private String              linktel;                 // 联系方式
    private String              pwdquestion;             // 密码问题
    private String              pwdanswer;               // 密码问题答案
    private Date                lastLoginDate;           // 最后登录时间
    private long                loginTimes;              // 登录次数
    private boolean             userlock;                // 是否被锁
    public final static boolean PUBLIC_USER      = false; // 未锁定
    public final static boolean LOCK_USER        = true; // 已锁定
    public static final String  DEFAULT_PASSWORD = "123456"; // 用户默认密码

    @Transient
    public String getStatusName()
    {
        if (userlock)
        {
            return "已锁定";
        }
        return "未锁定";
    }

    public boolean isUserlock()
    {
        return userlock;
    }

    public void setUserlock(boolean userlock)
    {
        this.userlock = userlock;
    }
    public Date getLastLoginDate()
    {
        return lastLoginDate;
    }
    public void setLastLoginDate(Date lastLoginDate)
    {
        this.lastLoginDate = lastLoginDate;
    }

    public long getLoginTimes()
    {
        return loginTimes;
    }

    public void setLoginTimes(long loginTimes)
    {
        this.loginTimes = loginTimes;
    }

    public String getPwdquestion()
    {
        return pwdquestion;
    }

    public void setPwdquestion(String pwdquestion)
    {
        this.pwdquestion = pwdquestion;
    }

    public String getPwdanswer()
    {
        return pwdanswer;
    }

    public void setPwdanswer(String pwdanswer)
    {
        this.pwdanswer = pwdanswer;
    }

    public String getLinktel()
    {
        return linktel;
    }

    public void setLinktel(String linktel)
    {
        this.linktel = linktel;
    }


    public String getEdudegree()
    {
        return edudegree;
    }

    public void setEdudegree(String edudegree)
    {
        this.edudegree = edudegree;
    }

    public String getEmail()
    {
        return email;
    }

    public void setEmail(String email)
    {
        this.email = email;
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

    public String getIntroduction()
    {
        return introduction;
    }

    public void setIntroduction(String introduction)
    {
        this.introduction = introduction;
    }

    public String getSex()
    {
        return sex;
    }

    public void setSex(String sex)
    {
        this.sex = sex;
    }

    public Date getCreateDate()
    {
        return createDate;
    }

    public void setCreateDate(Date createDate)
    {
        this.createDate = createDate;
    }

    // 多对多定义
    @ManyToMany
    // 中间表定义,表名采用默认命名规则
    @JoinTable(name = "acct_user_role", joinColumns = { @JoinColumn(name = "user_id") }, inverseJoinColumns = { @JoinColumn(name = "role_id") })
    // Fecth策略定义
    @Fetch(FetchMode.SUBSELECT)
    // 集合按id排序.
    @OrderBy("id")
    // 集合中对象id的缓存.
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    private List<Role> roleList = Lists.newArrayList(); // 有序的关联对象集合

    public String getLoginName()
    {
        return loginName;
    }

    public void setLoginName(String loginName)
    {
        this.loginName = loginName;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public String getPassword()
    {
        return password;
    }

    public void setPassword(String password)
    {
        this.password = password;
    }

    public List<Role> getRoleList()
    {
        return roleList;
    }

    public void setRoleList(List<Role> roleList)
    {
        this.roleList = roleList;
        for (Role role : roleList)
        {
            roleName = role.getName();
        }
    }

    public String getRoleName()
    {
        return roleName;
    }

    public void setRoleName(String roleName)
    {
        this.roleName = roleName;
    }

    public String getNick()
    {
        return nick;
    }

    public void setNick(String nick)
    {
        this.nick = nick;
    }

}
