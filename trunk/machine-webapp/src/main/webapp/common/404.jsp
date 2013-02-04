<%@ page contentType="text/html;charset=UTF-8" %>
<%@page import="com.gm.machine.contant.Global"%>
<%@ include file="/common/taglibs.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>404 - 资源暂未找到</title>
	<link href="${ctx}/css/base.css" rel="stylesheet" type="text/css" /> 
	<link href="${ctx}/css/error.css" rel="stylesheet" type="text/css" />
	<script src="${ctx}/js/jquery.js" type="text/javascript"></script>
	<script type="text/javascript" src="${ctx}/js/base-v1.js"></script>
</head>

<body>

<%@ include file="/common/nav.jsp" %>
	<div id="o-header">
		<c:import url="${appurl}/advert!indextop.action"/>
		<%@ include file="/common/header.jsp" %>
		<%@ include file="/common/menu.jsp" %>
	</div>
<div class="w main">

       <div class="img_box">
           <div class="img">
               <img src="${ctx}/images/error_icon.jpg"/>
           </div>
           <div class="text_box">
               <p class="tittle">对不起，您请求的资源暂未找到！</p>
               <p class="text_box_1"> 404错误-请求的资源暂未找到。 您可以“重试”<input type="button" value=" 重&nbsp;试 " onclick="location.reload();"/>或者联系QQ技术支持 2235411789。</p>
               	<div id="buttonbox" class="btnbox m20 button01 clearl">
				<input type="button" onclick="location.href='<%=Global.siteurl%>'" value="返回首页"/>
				</div>
           </div>
       </div>   
</div>
<%@ include file="/common/footer.jsp" %>
<script type="text/javascript" src="${ctx}/js/common.js"></script>
</body>
</html>