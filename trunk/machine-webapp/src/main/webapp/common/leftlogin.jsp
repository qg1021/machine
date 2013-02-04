<%@ page language="java" pageEncoding="UTF-8" %>
<%@page import="org.springside.modules.security.springsecurity.SpringSecurityUtils"%>
<%@ include file="/common/taglibs.jsp" %>
<div class="indexlogin rr">
	<div class="indexlogin_btn">
		<a class="btn1" href="${ctx}/user/business.action">发布招商信息</a>
		<a class="btn1"  href="${ctx}/user/company.action">发布企业信息</a>
		<a class="btn1"  href="${ctx}/user/supply.action">发布供应信息</a>
		<a class="btn1"  href="${ctx}/user/buy.action">发布求购信息</a>	
		<%if(SpringSecurityUtils.getCurrentUserName().equals("anonymousUser")){ %>
			<a class="btn2" target="_blank" href="register.action">马上免费注册会员</a>
		<%}else{ %>
			<a class="btn2" target="_blank" href="${ctx}/user/index.action">进入会员中心&gt;&gt;</a>
		<%}%>
	</div>
	<p class="clearb"></p>
	<%if(SpringSecurityUtils.getCurrentUserName().equals("anonymousUser")){ %>
	<span class="indexlogin_mess">如果您已是会员,请 <a href="${ctx}/register.action"><span class="red_rectangle">[登录]</span></a>!</span>
	<%} %>
</div>