<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/common/taglibs.jsp" %>
<div id="categorys" class="">
	<div clstag="homepage|keycount|home2012|06a" class="mt ld">
		<h2><a>全部商品分类<b></b></a></h2>
	</div>
	<div class="mc" id="_JD_ALLSORT" load="2">
		<s:iterator value="catList" status="st">
			<div class="item fore${st.count}">            
				<span clstag="homepage|keycount|home2012|0601a">
					<h3><a href="${ctx}/product-cat-${id}-0-0.html">${name}</a></h3>
					<s></s>
				</span>            
				<div class="i-mc">                
					<div class="close" onclick="$(this).parent().parent().removeClass('hover')"></div>                
						<div clstag="homepage|keycount|home2012|0601b" class="subitem">
							<s:iterator value="childcats" status="st">                    
								<dl class="fore${st.count}">
									<dt><a href="${ctx}/product-cat-${pid}-${id}-0.html">${name}</a></dt>
									<dd>
										<s:iterator value="childcats" status="st">
											<em><a href="${ctx}/product-cat-${parent.pid}-${pid}-${id}.html">${name}</a></em>
										</s:iterator>
									</dd>                    
								</dl>
							</s:iterator>                    
							</div>                
							<!--<div id="JD_sort_k" class="cat-right-con fr">        
								<dl class="categorys-promotions" clstag="homepage|keycount|home2012|0601c">            
									<dt>促销活动</dt>            
									<dd>                
										<ul>                    
											<li>
												<a target="_blank" href="http://sale.360buy.com/act/YFaQEx6s8VhR.html">
													<img width="194" height="70" title="经管励志畅销热评榜" src="http://img30.360buyimg.com/erpVCAare/g8/M03/08/17/rBEHaFB45XcIAAAAAAAgBzsmupUAABtXgP_lBMAACAf336.jpg">
												</a>
											</li>                    
											<li>
												<a target="_blank" href="http://sale.360buy.com/act/CQYrHFb3WaoK6wp.html">
													<img width="194" height="70" title="计算机图书畅销榜" src="http://img30.360buyimg.com/erpVCAare/g9/M03/08/17/rBEHaVB45ZQIAAAAAAAdAfKgJEUAABtXgOlAMsAAB0Z502.jpg">                    </a></li>                </ul>            </dd>        </dl>         <dl class="categorys-brands" clstag="homepage|keycount|home2012|0601d">                <dt>推荐品牌出版商</dt>            <dd>                <ul>                    <li><a target="_blank" href="http://sale.360buy.com/act/cYJHovaOMpDZPR.html">磨铁图书有限公司</a>
											</li>                    
											<li><a target="_blank" href="http://adtpl.360buy.com/tpl/list/2010/10/dmd49xmaxomt04su.html">上海世纪出版股份有限公司</a></li>                    
											<li><a target="_blank" href="http://ilike.360buy.com/ilike/rmwx1090047/index.html">人民文学出版社</a></li>                    
											<li><a target="_blank" href="http://adtpl.360buy.com/uploads/promotion/promotion-tpl/2010/10/ezf6pu0qgx8zk6z0.html">中华书局</a></li>                    <li><a target="_blank" href="http://ilike.360buy.com/ilike/zxppd2326031/index.html">中信出版社</a></li>                    <li><a target="_blank" href="http://adtpl.360buy.com/tpl/list/2010/10/uk3pf0q6rk85s3tv.html">三联书店</a></li>                    <li><a target="_blank" href="http://adtpl.360buy.com/tpl/list/2010/10/grsc3rflbaglsh4s.html">商务印书馆</a></li>
											<li><a target="_blank" href="http://adtpl.360buy.com/tpl/list/2010/10/j4epbwngynbjp3un.html">机械工业出版社</a></li>                    
											<li><a target="_blank" href="http://adtpl.360buy.com/tpl/list/2010/10/uarmdhnriapg9xth.html">作家出版社</a></li>                
										</ul>            
									</dd>        
								</dl>
							</div>   -->           
						</div>        
					</div>        
			
		</s:iterator>
	</div>
</div>
<ul id="navitems">
  <li clstag="homepage|keycount|home2012|07a" class="fore1" id="nav-index"><a href="${ctx}/index.html">首页</a> </li>
  <s:iterator value="catList" status="st" begin="0" end="6" step="1">
  	<li clstag="homepage|keycount|home2012|07a" class="fore${st.count}" id="nav-${st.count}">
  		<a href="product-cat-${id}-0-0.html">${name}</a> 
  	</li>
  </s:iterator>
</ul>

