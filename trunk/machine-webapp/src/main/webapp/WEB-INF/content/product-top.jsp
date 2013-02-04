<%@ page contentType="text/html;charset=UTF-8" %>
<%@page import="com.gm.machine.contant.Global"%>
<%@ include file="/common/taglibs.jsp" %> 
<div class="mc">
	<ul class="lh">
		<s:iterator value="productList" status="st">
		<li id="timed1" class="fore1" clstag="homepage|keycount|home2012|15a">
			<a href="product-${id}-tab-1.html" title="${name}" target="_blank"><img width="140" height="110" border="0"  data-lazyload="${ctx}<%=Global.picpath%>${picurl}"/></a>
		</li>
		</s:iterator>
	</ul>
</div>

	
