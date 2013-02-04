<%@ page contentType="text/html;charset=UTF-8" %>
<%@page import="com.gm.machine.contant.Global"%>
<%@ include file="/common/taglibs.jsp" %> 
<div class="mc">
	<ul class="lh">
		<s:iterator value="productList" status="st">
		<li id="timed1" class="fore1" clstag="homepage|keycount|home2012|15a">
			<a href="product-${id}.html" title="${name}" target="_blank"><img width="140" height="110" border="0"  data-lazyload="${ctx}<%=Global.picpath%>${picurl}"/></a>
		</li>
		</s:iterator>
	</ul>
</div>
<div clstag="thirdtype|keycount|thirdtype|select" class="m" id="select">
	<div class="mt">
		<h1>商品列表</h1>
	</div>
	<dl id="select-brand">
		<dt>品牌：</dt>
		<dd>
			<div class="content" style="height: 126px;">
				<div rel="0"><a class="curr" style="cursor:pointer;" href="onSearch('','${id}');" id="0">不限</a></div>
				<s:iterator value="productList" status="st">
					<div rel="${st.count}"><a style="cursor:pointer;" onclick="onSearch('','${id}');" id="brand_${id}">${name}</a></div>
				</s:iterator>
			</div>
		</dd>
	</dl>
</div><!--select end -->

	
