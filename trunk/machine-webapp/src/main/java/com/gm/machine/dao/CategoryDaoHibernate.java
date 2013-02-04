package com.gm.machine.dao;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.xwork.StringUtils;
import org.springframework.stereotype.Component;
import org.springside.modules.orm.Page;
import org.springside.modules.orm.hibernate.HibernateDao;

import com.gm.machine.api.CategoryDao;
import com.gm.machine.entity.Category;
import com.gm.machine.util.CommonUtils;
import com.google.common.collect.Maps;

/**
 * 产品分类的数据访问类
 * 
 * @author qingang
 * @version 1.0
 * @since 2012-09-01
 */
@Component
public class CategoryDaoHibernate extends HibernateDao<Category, Long>
implements CategoryDao
{

    // 批量删除
    private static final String BATCH_DELETE = "delete from Category where id in (:ids)";

    /**
     * {@inheritDoc}
     * 
     * @since 2012-11-21
     * @see com.gm.machine.api.CategoryDao#batchDelete(java.util.List)
     */
    public int batchDelete(List<Long> idsList)
    {
        Map<String, List<Long>> values = Collections.singletonMap("ids",
                idsList);
        return batchExecute(BATCH_DELETE, values);
    }

    /**
     * {@inheritDoc}
     * 
     * @since 2012-11-21
     * @see com.gm.machine.api.CategoryDao#getMaxOrderNum(java.lang.Long)
     */
    @Override
    public int getMaxOrderNum(Long parentid)
    {
        String hql = "select max(orderNum) from Category where pid=?";
        try
        {
            return (Integer) this.find(hql, parentid).get(0);
        }
        catch (Exception ex)
        {
            return 0;
        }
    }

    /**
     * {@inheritDoc}
     * 
     * @since 2012-11-21
     * @see com.gm.machine.api.CategoryDao#moveDown(java.lang.Long,
     *      java.lang.Long, int)
     */
    @Override
    public boolean moveDown(Long id, Long parentid, int currentNum)
    {
        try
        {
            int aim = currentNum + 1;
            StringBuffer hql = new StringBuffer();
            StringBuffer hql2 = new StringBuffer();
            hql.append("update Category set orderNum = ?");
            hql.append(" where orderNum<=? and orderNum>?");
            hql.append(" and pid=?");

            super.batchExecute(hql.toString(), aim - 1, aim, currentNum,
                    parentid);

            hql2.append("update Category set orderNum = ?");
            hql2.append(" where id=?");

            super.batchExecute(hql2.toString(), aim, id);
            return true;
        }
        catch (Exception e)
        {
            logger.debug(e.getMessage(), e);
            e.printStackTrace();
            return false;
        }
    }

    /**
     * {@inheritDoc}
     * 
     * @since 2012-11-21
     * @see com.gm.machine.api.CategoryDao#moveUp(java.lang.Long,
     *      java.lang.Long, int)
     */
    @Override
    public boolean moveUp(Long id, Long parentid, int currentNum)
    {
        try
        {
            int aim = currentNum - 1;
            StringBuffer hql = new StringBuffer();
            StringBuffer hql2 = new StringBuffer();
            new StringBuffer();

            hql.append("update Category set orderNum =?");
            hql.append(" where orderNum>=? and orderNum<?");
            hql.append(" and pid=?");
            super.batchExecute(hql.toString(), aim + 1, aim, currentNum,
                    parentid);

            hql2.append("update Category set orderNum = ?");
            hql2.append(" where id=?");

            super.batchExecute(hql2.toString(), aim, id);
            return true;
        }
        catch (Exception e)
        {
            logger.debug(e.getMessage(), e);
            e.printStackTrace();
            return false;
        }
    }

    /**
     * {@inheritDoc}
     * 
     * @since 2012-11-21
     * @see com.gm.machine.api.CategoryDao#search(org.springside.modules.orm.Page,
     *      int)
     */
    @Override
    public Page<Category> search(Page<Category> page, Long pid, String name)
    {
        StringBuffer hql = new StringBuffer("from Category  where pid = :pid");
        Map<String, Object> values = Maps.newHashMap();
        values.put("pid", pid == null ? 0 : pid);
        if (StringUtils.isNotBlank(name))
        {
            hql.append(" and name like :name");
            values.put("name", CommonUtils.convertParam(name));
        }
        hql.append(" order by ").append(page.getOrderBy()).append(" ").append(
                page.getOrder());

        return this.findPage(page, hql.toString(), values);
    }

    /**
     * {@inheritDoc}
     * 
     * @since 2012-11-21
     * @see com.gm.machine.api.CategoryDao#updateCategoryOrderNum(int,
     *      java.lang.Long)
     */
    @Override
    public int updateCategoryOrderNum(int orderNum, Long parentid)
    {
        // TODO Auto-generated method stub
        return 0;
    }

    /**
     * {@inheritDoc}
     * 
     * @since 2012-11-21
     * @see com.gm.machine.api.CategoryDao#countCategory(java.lang.String,
     *      java.lang.Long)
     */
    @Override
    public long countCategory(String name, Long pid)
    {
        String hql = " from Category where name = ? and pid=?";
        return super.countHqlResult(hql, name, pid);
    }

    /**
     * {@inheritDoc}
     * 
     * @since 2012-11-21
     * @see com.gm.machine.api.CategoryDao#getCategoryList(java.lang.Long)
     */
    @Override
    public List<Category> getCategoryList(Long pid)
    {
        String hql = "from Category where pid = ? order by id";
        return super.find(hql, pid);
    }

    /**
     * {@inheritDoc}
     * 
     * @since 2012-12-23
     * @see com.gm.machine.api.CategoryDao#setIndexRecommendOne(java.util.List,
     *      boolean)
     */
    @Override
    public void setIndexRecommendOne(List<Long> ids, boolean isrecommend)
    {
        String hql = "update Category set rone = :recommend where id in(:ids)";
        Map<String, Object> values = new HashMap<String, Object>();
        values.put("recommend", isrecommend);
        values.put("ids", ids);
        super.batchExecute(hql, values);

    }

    /**
     * {@inheritDoc}
     * 
     * @since 2012-12-23
     * @see com.gm.machine.api.CategoryDao#setIndexRecommendTwo(java.util.List,
     *      boolean)
     */
    @Override
    public void setIndexRecommendTwo(List<Long> ids, boolean isrecommend)
    {
        String hql = "update Category set rtwo = :recommend where id in(:ids)";
        Map<String, Object> values = new HashMap<String, Object>();
        values.put("recommend", isrecommend);
        values.put("ids", ids);
        super.batchExecute(hql, values);

    }
}
