package com.gm.machine.api;

import java.util.List;

import org.springside.modules.orm.Page;

import cn.common.lib.springside.orm.BaseDao;

import com.gm.machine.entity.Category;

/**
 * 
 * 产品分类接口
 * 
 * @author qingang
 * @version 1.0
 * @since 2012-9-2
 */
public interface CategoryDao extends BaseDao<Category, Long>
{
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
    public Page<Category> search(Page<Category> page, Long pid, String name);

    /**
     * 
     * 批量删除
     * 
     * @since 2011-7-22
     * @author qingang
     * @param idsList
     * @return
     */
    public int batchDelete(List<Long> idsList);

    /**
     * 获得最大排序号
     * 
     * @since 2012-11-8
     * @author qingang
     * @param parentid父级栏目ＩＤ
     * @return　int　返回最大排序号
     */
    public int getMaxOrderNum(Long parentid);

    /**
     * 
     * 查询分类列表
     * 
     * @since 2012-11-21
     * @author qingang
     * @param pid
     * @return
     */
    public List<Category> getCategoryList(Long pid);

    /**
     * 
     * 删除时同步更新排序号
     * 
     * @since 2010-12-18
     * @author qingang
     * @param orderNum
     *            　排序号
     */
    public int updateCategoryOrderNum(int orderNum, Long parentid);

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
    public boolean moveUp(Long id, Long parentid, int currentNum);

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
    public boolean moveDown(Long id, Long parentid, int currentNum);

    /**
     * 
     * 统计分类个数
     * 
     * @since 2012-10-30
     * @author qingang
     * @param name分类名称
     * @param pid父id
     * @return
     */
    public long countCategory(String name, Long pid);

    /**
     * 
     * 首页推荐一
     * 
     * @since 2012-12-23
     * @author qingang
     * @param id
     * @param isrecommend
     */
    public void setIndexRecommendOne(List<Long> ids, boolean isrecommend);

    /**
     * 
     * 首页推荐二
     * 
     * @since 2012-12-23
     * @author qingang
     * @param id
     * @param isrecommend
     */
    public void setIndexRecommendTwo(List<Long> ids, boolean isrecommend);

}
