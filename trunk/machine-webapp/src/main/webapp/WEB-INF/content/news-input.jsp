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
			 <div class="mt">
			 	<h1>${title}</h1>
			 <div style="bottom: 0;overflow: hidden;position: absolute;right: 0;">
			 		<!-- Baidu Button BEGIN -->
					<div id="bdshare" class="bdshare_t bds_tools get-codes-bdshare">
					<a class="bds_qzone"></a>
					<a class="bds_tsina"></a>
					<a class="bds_tqq"></a>
					<a class="bds_renren"></a>
					<a class="bds_t163"></a>
					<span class="bds_more">更多</span>
					</div>
					<script type="text/javascript" id="bdshare_js" data="type=tools&amp;uid=0" ></script>
					<script type="text/javascript" id="bdshell_js"></script>
					<script type="text/javascript">
					document.getElementById("bdshell_js").src = "http://bdimg.share.baidu.com/static/js/shell_v2.js?cdnversion=" + Math.ceil(new Date()/3600000)
					</script>
					<!-- Baidu Button END -->
			 	</div>
			 <div class="summary">
			 	时间：<s:date name="publishdate" format="yyyy-MM-dd HH:mm"/>&nbsp;&nbsp;&nbsp;来源：${source}
			 </div>
			  </div>
			 <div class="mc">
			 	${desciption}
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
