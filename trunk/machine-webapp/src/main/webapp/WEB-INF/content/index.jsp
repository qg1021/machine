<%@ page contentType="text/html;charset=UTF-8" %>
<%@page import="org.springside.modules.security.springsecurity.SpringSecurityUtils"%>
<%@ include file="/common/taglibs.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>  
	<%@ include file="/common/meta.jsp" %>
	<meta content="index" name="headmenu" />
	<link href="${ctx}/css/front.css" rel="stylesheet" type="text/css" /> 
	<script src="${ctx}/js/jquery.js" type="text/javascript"></script>
</head>
<body>	
<%@ include file="/common/nav.jsp" %>
	<div id="o-header">
		<c:import url="${appurl}/advert!indextop.excsec"/>
		<%@ include file="/common/header.jsp" %>
		<%@ include file="/common/menu.jsp" %>
	</div>
	<div class="w w1">
		<c:import url="${appurl}/advert!tab.excsec"/>
		<c:import url="${appurl}/news!part.excsec"/>
		<div id="timed" class="m m2">
			<div class="mt">
				<h2>热销推荐</h2>
				<div class="extra"></div>
			</div>
			<c:import url="${appurl}/product!indextop.excsec"/>	
		</div><!--timed end-->
	</div>
	<div class="w w1">
		<div data-widget="tabs" class="hot m m3" id="hot2">
			<c:import url="${appurl}/product!partone.excsec"/>
		</div>
	</div>
	<c:import url="${appurl}/advert!middle.excsec?mtype=2"/>
	<div class="w w1">
		<div data-widget="tabs" class="hot m m3" id="hot">
			<c:import url="${appurl}/product!parttwo.excsec"/>
		</div>
	</div>
<c:import url="${appurl}/advert!middle.excsec?mtype=3"/>
<%@ include file="/common/footer.jsp" %>
<script type="text/javascript" src="${ctx}/js/base-v1.js"></script>
<script type="text/javascript" src="${ctx}/js/common.js"></script>
<script type="text/javascript" src="${ctx}/js/jquery.fn.imgplayer.js"></script>
<script type="text/javascript">
		$("#imgplayer").player({
			width	: '561px',
			height  : '242px',
			showTitle : false
		}).play();
</script>
<!-- Baidu Button BEGIN -->
<script type="text/javascript" id="bdshare_js" data="type=slide&amp;img=0&amp;pos=right&amp;uid=0" ></script>
<script type="text/javascript" id="bdshell_js"></script>
<script type="text/javascript">
document.getElementById("bdshell_js").src = "http://bdimg.share.baidu.com/static/js/shell_v2.js?cdnversion=" + Math.ceil(new Date()/3600000);
</script>
<!-- Baidu Button END -->

</body>
</html>
