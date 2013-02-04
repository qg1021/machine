<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/common/taglibs.jsp" %>
<%@page import="com.gm.machine.util.CommonUtils"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>中国竹木工艺网会员中心</title>
<%@ include file="/common/meta.jsp" %>
<link href="${ctx}/css/master.css" type="text/css" rel="stylesheet"/>
<script src="${ctx}/js/jquery.js" type="text/javascript"></script> 
</head>
<body>
<div id="wrapper">
	<div id="header">
		<%@ include file="/common/header.jsp" %>
		<%@ include file="/common/menu.jsp" %>
	</div>
	<div id="content">
		<%@ include file="/common/userleft.jsp" %>
		<div class="right_shell"> 
			<table cellSpacing=0 cellPadding=0 width="90%" align=center border=0>
			<tr height=100>
				<td align="center" width=100>
					<img height="100" src="${ctx}/css/image/admin_p.gif" width="90"/></td>
				<td width=60>&nbsp;</td>
				<td>
				<table height=100 cellSpacing=0 cellPadding=0 width="100%" border=0>
					<tr>
						<td><h2 class="stitle" align="center">欢迎进入会员中心！</h2></td>
					</tr>
				</table>
				</td>
			</tr>
			<tr>
				<td colSpan=3 height=10></td>
			</tr>
		</table>
      		
  		</div>
    </div>
    <%@ include file="/common/footer.jsp" %>
	</div>
</body>
</html>

