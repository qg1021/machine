<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/common/taglibs.jsp" %>
<%@ page import="org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter" %>
<%@ page import="org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter" %>
<%@ page import="org.springframework.security.core.AuthenticationException" %>
<%@page import="org.springside.modules.security.springsecurity.SpringSecurityUtils"%>
<!DOCTYPE html PUBLIC "-//W3C//Dtd XHTML 1.0 transitional//EN" "http://www.w3.org/tr/xhtml1/Dtd/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>登录东方农机商城</title>
<%@ include file="/common/meta.jsp" %>
<link href="${ctx}/css/base.css" rel="stylesheet" type="text/css">
<link href="${ctx}/css/attention.css" rel="stylesheet" type="text/css">
</head>
<body>
<div style="" class="tips" id="reset">
	<h2>
		${requestScope.successtip}<a href="attention.action" target="_blank">查看我关注的商品&gt;&gt;</a>
	</h2>
</div>
<div class="wrap">
	<div class="scroll-title"></div>
</div>
</body>
</html>

