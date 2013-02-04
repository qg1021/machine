<%@ page contentType="text/html;charset=UTF-8" %>
<%@page import="org.springside.modules.security.springsecurity.SpringSecurityUtils"%>
<%@ include file="/common/taglibs.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>  
	<%@ include file="/common/meta.jsp" %>
	<meta content="index" name="headmenu" />
	<title>东方农机商城(www.machine1688.com)-${title}</title>
	<link href="${ctx}/css/base.css" rel="stylesheet" type="text/css" />  
	<script src="${ctx}/js/jquery.js" type="text/javascript"></script>
</head>
<body>	
<%@ include file="/common/nav.jsp" %>
	<div id="o-header">
		<c:import url="${appurl}/advert!indextop.action"/>
		<%@ include file="/common/header.jsp" %>
		<%@ include file="/common/menu.jsp" %>
	</div>
	<div class="w w1">
		<div>
			<form id="mainForm" name="mainForm" action="friendlinks.html" method="post">
				<ul class="middle_ad">
					<s:iterator value="page.result" status="st">
						<li>
					    	<a title="${title}" target="_blank" href="${linkurl}">
								<img width="160" height="65" border="0"  data-lazyload="${ctx}<%=Global.picpath%>${picurl}"/>
					        </a>
						</li>
					</s:iterator>
					<s:if test="page.result.size ==0">
						<li><font color="gray">暂无数据！</font></li>  
					</s:if>
				</ul>
				<span class="clr"></span>
				<div class="m clearfix" style="margin-top:5px;">
					<div class="pagin fr">
		                  <%@ include file="/common/page.jsp"%>
					</div><!--pagin end-->
				</div>
			</form>
		</div>
	</div>
	<span class="clr"></span>
<%@ include file="/common/footer.jsp" %>
<script type="text/javascript" src="${ctx}/js/base-v1.js"></script>
<script type="text/javascript" src="${ctx}/js/common.js"></script>
</body>
</html>
