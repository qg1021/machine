<%@ page contentType="text/html;charset=UTF-8" %>
<%@page import="org.springside.modules.security.springsecurity.SpringSecurityUtils"%>
<%@ include file="/common/taglibs.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>  
	<%@ include file="/common/meta.jsp" %>
	<meta content="index" name="headmenu" />
	<link href="${ctx}/css/front.css" rel="stylesheet" type="text/css" /> 
	<link href="${ctx}/css/news.css" rel="stylesheet" type="text/css" /> 
	<script src="${ctx}/js/jquery.js" type="text/javascript"></script>
</head>
<body>	
<%@ include file="/common/nav.jsp" %>
	<div id="o-header">
		<c:import url="${appurl}/advert!indextop.action"/>
		<%@ include file="/common/header.jsp" %>
		<%@ include file="/common/menu.jsp" %>
	</div>
			<div class="w main">
	<div class="right-extra">
		<div id="detail" class="m">
		 <div class="mt"><h1>${title}</h1></div>
		 <div class="summary">时间：<s:date name="pubdate" format="yyyy-MM-dd HH:mm"/></div>
		 <div class="mc">
		 	${remark}
		 </div>
		</div>
		<div id="review_top"></div>
		<div id="container"></div>
	</div><!--right-extra end-->			
	<span class="clr"></span>
</div>
	
	
	

<%@ include file="/common/footer.jsp" %>
<script type="text/javascript" src="${ctx}/js/base-v1.js"></script>
<script type="text/javascript" src="${ctx}/js/common.js"></script>
</body>
</html>
