package com.gm.machine.web.manage;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.ServletActionContext;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Results;
import org.springframework.beans.factory.annotation.Autowired;
import org.springside.modules.orm.Page;
import org.springside.modules.orm.PropertyFilter;
import org.springside.modules.utils.web.struts2.Struts2Utils;

import cn.common.lib.springside.web.CrudActionSupport;
import cn.common.lib.util.web.ParamUtils;
import cn.common.lib.util.web.RequestUtils;

import com.gm.machine.contant.Global;
import com.gm.machine.core.CategoryManager;
import com.gm.machine.entity.Category;
import com.gm.machine.util.CommonUtils;
import com.google.common.collect.Lists;

/**
 * 
 * 产品分类后台action
 * 
 * @author qingang
 * @version 1.0
 * @since 2012-9-2
 */
@Namespace("/backend")
// 定义名为reload的result重定向到user.action, 其他result则按照convention默认.
@Results( { @Result(name = CrudActionSupport.RELOAD, location = "category.action?parentId=${parentId}&position=true", type = "redirect") })
public class CategoryAction extends CrudActionSupport<Category>
{
    private static final long serialVersionUID = -2807114789307673883L;

    // -- 页面属性 --//
    private Long              id;

    private Long[]            ids;

    private Long              parentId;

    public Category           category;

    private Page<Category>    page             = new Page<Category>(10);

    @Autowired
    private CategoryManager   categoryManager;

    /**
     * 进入保存页面
     * 
     * @since 2012-6-26
     * @see cn.common.lib.springside.web.CrudActionSupport#input()
     */
    @Override
    public String input() throws Exception
    {
        if (id == null && parentId != null && parentId != 0)
        {
            category = categoryManager.get(parentId);
        }
        return INPUT;
    }

    /**
     * 查询
     * 
     * @since 2012-6-26
     * @see cn.common.lib.springside.web.CrudActionSupport#list()
     */
    @Override
    public String list() throws Exception
    {
        // 设置默认排序方式
        if (!page.isOrderBySetted())
        {
            page.setOrderBy("id");
            page.setOrder(Page.ASC);
        }

        HttpServletRequest request = Struts2Utils.getRequest();
        List<PropertyFilter> filters = PropertyFilter
        .buildFromHttpRequest(request);// 定义过滤器

        PropertyFilter parentFilter = null;
        if (parentId == null || parentId == 0)
        {
            // 一级栏目查询
            parentFilter = new PropertyFilter("EQL_pid", "0");
        }
        else
        {
            category = categoryManager.get(parentId);
            // 二级栏目查询
            parentFilter = new PropertyFilter("EQL_pid", String
                    .valueOf(parentId));
        }
        filters.add(parentFilter);

        page = categoryManager.search(page, filters);

        return SUCCESS;
    }

    /**
     * 保存栏目
     * 
     * @since 2012-6-26
     * @see cn.common.lib.springside.web.CrudActionSupport#save()
     */
    @Override
    public String save() throws Exception
    {
        try
        {
            if (id == null && parentId != null && parentId != 0)
            {
                category.setParent(categoryManager.get(parentId));
            }
            categoryManager.save(category);
            addActionMessage("栏目信息保存成功.");
        }
        catch (Exception e)
        {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return RELOAD;
    }

    /**
     * 
     * 设置首页推荐一
     * 
     * @since 2012-12-23
     * @author qingang
     * @return
     * @throws Exception
     */
    public String setIndexrone() throws Exception
    {
        try
        {
            List<Long> idlist = Lists.newArrayList();
            idlist.add(id);
            categoryManager.setIndexRecommendOne(idlist, true);
        }
        catch (Exception e)
        {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return RELOAD;
    }

    /**
     * 
     * 生成静态页
     * 
     * @since 2013-1-12
     * @author qingang
     * @return
     * @throws Exception
     */
    public String createHtml() throws Exception
    {
        try
        {
            String realPath = RequestUtils.getRealPath(ServletActionContext
                    .getServletContext(), "/");
            CommonUtils.createHtmlPage(Global.appurl + "/" + "category.action",
                    "首页产品分类", realPath + Global.CATEGORY_HTMLPAGE_URL, "UTF-8");
            addActionMessage("生成静态页成功");
        }
        catch (Exception e)
        {
            e.printStackTrace();
            addActionMessage("生成静态页失败");
        }
        return RELOAD;
    }

    /**
     * 
     * 取消首页推荐一
     * 
     * @since 2012-12-23
     * @author qingang
     * @return
     * @throws Exception
     */
    public String cancelIndexrone() throws Exception
    {
        try
        {
            List<Long> idlist = Lists.newArrayList();
            idlist.add(id);
            categoryManager.setIndexRecommendOne(idlist, false);
        }
        catch (Exception e)
        {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return RELOAD;
    }

    /**
     * 
     * 设置首页推荐二
     * 
     * @since 2012-12-23
     * @author qingang
     * @return
     * @throws Exception
     */
    public String setIndexrtwo() throws Exception
    {
        try
        {
            List<Long> idlist = Lists.newArrayList();
            idlist.add(id);
            categoryManager.setIndexRecommendTwo(idlist, true);
        }
        catch (Exception e)
        {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return RELOAD;
    }

    /**
     * 
     * 取消首页推荐二
     * 
     * @since 2012-12-23
     * @author qingang
     * @return
     * @throws Exception
     */
    public String cancelIndexrtwo() throws Exception
    {
        try
        {
            List<Long> idlist = Lists.newArrayList();
            idlist.add(id);
            categoryManager.setIndexRecommendTwo(idlist, false);
        }
        catch (Exception e)
        {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return RELOAD;
    }

    /**
     * 删除栏目
     * 
     * @since 2012-6-26
     * @see cn.common.lib.springside.web.CrudActionSupport#delete()
     */
    @Override
    public String delete() throws Exception
    {
        if (id != null)// 单个删除
        {
            categoryManager.delete(id);
            addActionMessage("栏目信息删除成功.");
        }
        else
            // 批量删除
            if (id == null && ids != null)
            {
                categoryManager.batchDelete(ids);
                addActionMessage("栏目信息删除成功.");
            }
        return RELOAD;
    }

    /**
     * 
     * 判断父类下是否存在同名的栏目名称
     * 
     * @since 2012-6-26
     * @author fangyong
     * @return
     */
    public String ajaxCheckName()
    {
        // 获得类型
        HttpServletRequest request = Struts2Utils.getRequest();
        parentId = ParamUtils.getLongParameter(request, "parentId", null);
        String newName = ParamUtils.getParameter(request, "name");
        String oldName = ParamUtils.getParameter(request, "oldName");

        if (categoryManager.isNameUnique(parentId == null ? 0 : parentId,
                newName, oldName))
        {
            Struts2Utils.renderText("true");
        }
        else
        {
            Struts2Utils.renderText("false");
        }

        return null;
    }

    @Override
    protected void prepareModel() throws Exception
    {
        if (id != null)
        {
            category = categoryManager.get(id);
        }
        else
        {
            category = new Category();
        }
    }

    public Category getModel()
    {
        return category;
    }

    public Long getId()
    {
        return id;
    }

    public void setId(Long id)
    {
        this.id = id;
    }

    public void setIds(Long[] ids)
    {
        this.ids = ids;
    }

    public Long getParentId()
    {
        return parentId;
    }

    public void setParentId(Long parentId)
    {
        this.parentId = parentId;
    }

    public Category getCategory()
    {
        return category;
    }

    public void setCategory(Category category)
    {
        this.category = category;
    }

    public Page<Category> getPage()
    {
        return page;
    }

}
