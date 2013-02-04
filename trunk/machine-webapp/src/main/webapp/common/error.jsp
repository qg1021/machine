<%@ page contentType="text/html;charset=UTF-8" isErrorPage="true"%>
<%@ include file="/common/taglibs.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@page import="org.apache.log4j.spi.LoggerFactory"%>
<%@page import="org.slf4j.Logger"%>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>error - 页面出错</title>
	<link href="${ctx}/css/base.css" rel="stylesheet" type="text/css" /> 
	<link href="${ctx}/css/error.css" rel="stylesheet" type="text/css" />
	<script src="${ctx}/js/jquery.js" type="text/javascript"></script>
	<script type="text/javascript" src="${ctx}/js/base-v1.js"></script>
</head>

<body>
<div style="display: none;">
<%=exception.getCause().toString()%>
</div>
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
                    <p class="tittle">对不起，你访问的资源暂未找到！</p>
                    <p class="text_box_1"> 你没有访问该页面的权限。 您可以“重试”<input type="button" value=" 重&nbsp; 试 " onclick="location.reload();"/>或者联系QQ技术支持 2235411789.</p>
                    <span class="text_box_bnt"><input type="button" class="btn_1" value="返回首页" onclick="location.href='<%=Global.siteurl%>'"/></span>
                </div>
            </div>
        </div>
</div>
<%@ include file="/common/footer.jsp" %>
<script type="text/javascript" src="${ctx}/js/common.js"></script>
</body>
</html>