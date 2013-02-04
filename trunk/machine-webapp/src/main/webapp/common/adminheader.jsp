<%@ page language="java" pageEncoding="UTF-8" %>
<%@ include file="/common/taglibs.jsp" %>
<%@page import="org.springside.modules.security.springsecurity.SpringSecurityUtils"%>
<div class="bhead">
	<div class="logo ll"><img src="${ctx}/images/backlogo.png"/></div>
  	<div class="sidebar rr ">
	    <ul>
			<li>&nbsp;</li>
			<li>&nbsp;</li>
	      <li>所属：当涂县东方农业机械有限公司 杨大堂</li>
	    </ul>
    </div>
  	<div class="del_float"> </div>
  	<div id="menu">
    	<div class="menu_cbg ll">
    		 欢迎您; 管理员 <%=SpringSecurityUtils.getCurrentUserName()%> !第${sessionScope.loginuser.loginTimes}次进入系统; 上次登录时间: <s:date name="#session.loginuser.lastLoginDate" format="yyyy-MM-dd HH:mm"/>
    		  <a  onclick="if (confirm('确定要退出吗？')) return true; else return false;" href="${ctx}/j_spring_security_logout">[退出系统]</a> <a  href="user!view.action">[修改密码]</a>
    	</div>
    	<div class="del_float"> </div>
  	</div>
</div>
<!--the end of 头部-->

 


