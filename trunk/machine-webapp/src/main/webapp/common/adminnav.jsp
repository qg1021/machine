<%@ page contentType="text/html;charset=UTF-8" %>
<%@page import="org.springside.modules.security.springsecurity.SpringSecurityUtils"%>
<%@ include file="/common/taglibs.jsp" %>
<div class="title">
<ul>
	<li class="ll">
		<%=SpringSecurityUtils.getCurrentUserName()%>;您好! 欢迎进入网站后台！
	</li>
	<li class="rr">
		<a onclick="if (confirm('确定要退出吗？')) return true; else return false;" href="${ctx}/j_spring_security_logout" >[退出]</a>
	</li>
</ul>
</div>