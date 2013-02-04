<%@ page contentType="text/html;charset=UTF-8" %>
<%@page import="com.gm.machine.contant.Global"%>
<%@ include file="/common/taglibs.jsp" %> 
<s:iterator value="productvoList" status="st">
	<div data-widget="tab-item" clstag="homepage|keycount|home2012|13a" class="fore${st.count} ${css}">
		<div class="mt"><h2>${name}</h2></div>
		<div data-widget="tab-content" class="mc">
			<ul class="lh">
				<s:iterator value="productList" status="st">
  					<li class="fore1">
 						<div class="p-img ld">
 							<a target="_blank" href="product-${id}-tab-1.html">
 								<img width="130" height="130" data-img="1"  data-lazyload="${ctx}<%=Global.picpath%>${picurl}" alt="${name}"/>
 							</a> 
 						</div>
 						<div class="p-name">
 							<a target="_blank" href="product-${id}-tab-1.html" title="${name}">${name}</a>
 						</div>
 						<div class="p-price">价格：<strong>${price}</strong></div>
						</li>
				</s:iterator>
			</ul>
		</div>
	</div>
</s:iterator>					

	
