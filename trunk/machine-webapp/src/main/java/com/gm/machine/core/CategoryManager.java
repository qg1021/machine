package com.gm.machine.core;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springside.modules.orm.Page;
import org.springside.modules.orm.PropertyFilter;

import cn.common.lib.cache.CacheManager;

import com.gm.machine.api.CategoryDao;
import com.gm.machine.cache.CacheKeyUtil;
import com.gm.machine.entity.Category;
import com.google.common.collect.Lists;

/**
 * 
 * 操作栏目的业务逻辑类
 * 
 * @author qingang
 * @version 1.0
 * @param <T>
 * @since 2012-11-2
 */

// Spring Bean的标识.
@Component
// 默认将类中的所有函数纳入事务管理.
public class CategoryManager extends CacheEntityManager<Category, Long>
{
    @Autowired
    @Qualifier("ehCacheManager")
    CacheManager        cacheManager;

    @Autowired
    private CategoryDao categoryDao;

    /**
     * 重写父类方法，以便使用缓存
     * 
     * @author houbing.qian
     * @since 1.0 2011/07/06
     */
    @Override
    public void save(Category category)
    {
        categoryDao.save(category);
        cacheManager.clear(CacheKeyUtil.CategoryPrefix);
    }

    /**
     * 重构删除,清空缓存
     * 
     * @since 2012-6-29
     * @see cn.common.lib.springside.service.EntityManager#save(java.lang.Object)
     */
    @Override
    public void delete(Long id)
    {
        categoryDao.delete(id);
        cacheManager.clear(CacheKeyUtil.CategoryPrefix);
    }

    /**
     * 取得所有分类，经过缓存处理 注意：分类有变化后要清空缓存
     * 
     * @author houbing.qian
     * @since 1.0 2011/07/06
     */
    @SuppressWarnings("unchecked")
    public List<Category> getAllCats(Long parentId)
    {
        String cacheKey = CacheKeyUtil.buildCategoryKey(parentId);
        Object object = cacheManager.get(cacheKey);
        if (object == null)
        {
            List<Category> list = categoryDao.getCategoryList(parentId);
            cacheManager.put(cacheKey, super.getIDs(list));
            return list;
        }
        else
        {
            List<Long> idList = (List<Long>) object;
            return super.getObjectsbyIds(idList);
        }
    }

    /**
     * 
     * 首页推荐一
     * 
     * @since 2012-12-23
     * @author qingang
     * @param id
     * @param isrecommend
     */
    public void setIndexRecommendOne(List<Long> ids, boolean isrecommend)
    {
        categoryDao.setIndexRecommendOne(ids, isrecommend);
        cacheManager.clear(CacheKeyUtil.CategoryPrefix);
    }

    /**
     * 
     * 首页推荐二
     * 
     * @since 2012-12-23
     * @author qingang
     * @param id
     * @param isrecommend
     */
    public void setIndexRecommendTwo(List<Long> ids, boolean isrecommend)
    {
        categoryDao.setIndexRecommendTwo(ids, isrecommend);
        cacheManager.clear(CacheKeyUtil.CategoryPrefix);
    }

    @SuppressWarnings("unchecked")
    public List<Category> searchOneRecommend(int pagesize)
    {

        String cacheKey = CacheKeyUtil.buildCategoryKey("rone");
        Object object = cacheManager.get(cacheKey);
        if (object == null)
        {// get from db
            Page<Category> page = new Page<Category>(pagesize);
            page.setOrderBy("id");
            page.setOrder(Page.DESC);
            List<PropertyFilter> filters = Lists.newArrayList();
            filters.add(new PropertyFilter("EQB_rone", "true"));
            List<Category> list = categoryDao.findPage(page, filters)
            .getResult();
            // 从对象列表中取得key列表
            cacheManager.put(cacheKey, getIDs(list));
            return list;
        }
        else
        {
            List<Long> idList = (List<Long>) object;
            return super.getObjectsbyIds(idList);
        }
    }

    @SuppressWarnings("unchecked")
    public List<Category> searchTwoRecommend(int pagesize)
    {

        String cacheKey = CacheKeyUtil.buildCategoryKey("rtwo");
        Object object = cacheManager.get(cacheKey);
        if (object == null)
        {// get from db
            Page<Category> page = new Page<Category>(pagesize);
            page.setOrderBy("id");
            page.setOrder(Page.DESC);
            List<PropertyFilter> filters = Lists.newArrayList();
            filters.add(new PropertyFilter("EQB_rtwo", "true"));
            List<Category> list = categoryDao.findPage(page, filters)
            .getResult();
            // 从对象列表中取得key列表
            cacheManager.put(cacheKey, getIDs(list));
            return list;
        }
        else
        {
            List<Long> idList = (List<Long>) object;
            return super.getObjectsbyIds(idList);
        }
    }

    /**
     * 
     * 通过名称查询目录
     * 
     * @since 2012-12-3
     * @author qingang
     * @param name
     * @return
     */
    public Category getCategory(String name)
    {
        return categoryDao.findUniqueBy("name", name);
    }

    /**
     * 
     * 批量删除
     * 
     * @since 2011-7-22
     * @author qingang
     * @param idsList
     * @return
     */
    public void batchDelete(Long[] ids)
    {
        // 将对象Id集合转化成字符串集合
        List<Long> idsList = Lists.newArrayList();
        if (ids != null && ids.length > 0)
        {
            for (Long id : ids)
            {
                idsList.add(id);
            }
            categoryDao.batchDelete(idsList);
            cacheManager.clear(CacheKeyUtil.CategoryPrefix);
        }
    }

    /**
     * 
     * 根据父类ID和名称判断是否存在重名的栏目,true表示已存在
     * 
     * @since 2012-6-26
     * @author qingang
     * @param parentid
     * @param name
     * @return
     */
    public boolean isNameUnique(Long parentid, String newName, String oldName)
    {
        if (newName.equals(oldName))
        {
            return true;
        }
        long count = categoryDao.countCategory(newName, parentid);
        return count > 0 ? false : true;
    }

    /**
     * 目录分页查询
     * 
     * @since 2012-7-5
     * @author qingang
     * @param page
     * @param pid父目录id
     * @param name产品分类名称
     * @return
     */
    public Page<Category> search(Page<Category> page, Long pid, String name)
    {
        return categoryDao.search(page, pid, name);
    }

    /**
     * 操作向上移动
     * 
     * @since 2012-11-8
     * @author qingang
     * @param id当前记录的ＩＤ
     * @param parentId当前记录的父级ＩＤ
     * @param currentNum当前记录的排序号
     * @return　boolean 返回操作结果
     */
    public boolean moveUp(Long id, Long parentid, int currentNum)
    {
        cacheManager.clear(CacheKeyUtil.CategoryPrefix);
        return categoryDao.moveUp(id, parentid, currentNum);
    }

    /**
     * 操作向下移动
     * 
     * @since 2010-11-8
     * @author qingang
     * @param id
     *            当前记录的ＩＤ
     * @param parentId
     *            　当前记录的父级ＩＤ
     * @param currentNum
     *            　当前记录的排序号
     * 
     * @return　boolean 返回操作结果
     */
    public boolean moveDown(Long id, Long parentid, int currentNum)
    {
        cacheManager.clear(CacheKeyUtil.CategoryPrefix);
        return categoryDao.moveDown(id, parentid, currentNum);
    }

    @Override
    protected CategoryDao getEntityDao()
    {
        return categoryDao;
    }

}
