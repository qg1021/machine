<%@ page contentType="text/html;charset=UTF-8" isErrorPage="true" %>
<%@ include file="/common/taglibs.jsp" %>
<%@ page import="org.slf4j.Logger,org.slf4j.LoggerFactory" %>

<%
	Throwable ex = null;
	if (exception != null)
		ex = exception;
	if (request.getAttribute("javax.servlet.error.exception") != null)
		ex = (Throwable) request.getAttribute("javax.servlet.error.exception");

	//记录日志
	Logger logger = LoggerFactory.getLogger("500.jsp");
	logger.error(ex.getMessage(), ex);
	ex.printStackTrace();
%> 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>500 - 系统内部错误</title>
	<link href="${ctx}/css/base.css" rel="stylesheet" type="text/css" /> 
	<link href="${ctx}/css/error.css" rel="stylesheet" type="text/css" />
	<script src="${ctx}/js/jquery.js" type="text/javascript"></script>
	<script type="text/javascript" src="${ctx}/js/base-v1.js"></script>
</head>

<body>
<% 
response.setStatus(HttpServletResponse.SC_OK); 
%>
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
                    <p class="tittle">系统发生内部错误！</p>
                    <p class="text_box_1">500系统发生内部错误。 您可以“重试”<input type="button" value=" 重&nbsp;试 " onclick="location.reload();"/>或者联系QQ技术支持 2235411789。</p>
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
