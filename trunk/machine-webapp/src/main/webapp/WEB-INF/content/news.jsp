<%@ page contentType="text/html;charset=UTF-8" %>
<%@page import="org.springside.modules.security.springsecurity.SpringSecurityUtils"%>
<%@ include file="/common/taglibs.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>  
	<%@ include file="/common/meta.jsp" %>
	<meta content="index" name="headmenu" />
	<link href="${ctx}/css/base.css" rel="stylesheet" type="text/css" /> 
	<link href="${ctx}/css/news-list.css" rel="stylesheet" type="text/css" /> 
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
		<div class="content fl" id="left">
			<div class="m">
				<form id="mainForm" action="news.html" method="post">
				<div class="mt"><h2>商城资讯</h2>
					<div class="form">
						<input type="text" class="text" id="title" name="filter_LIKES_title" value="${param['filter_LIKES_title']}"/>
						<input type="submit" class="btn-search" value="搜索"/>
					</div>
					<div class="extra"></div>
				</div>
				<div class="mc">
					<h5><span>发表时间</span>标题</h5>
						<ul>
							<s:iterator value="page.result" status="st">
								<li>
									<div><a href="news-${id}.html" target="_blank">${title}</a></div>
									<span><s:date name="publishdate" format="yyyy-MM-dd HH:mm"/></span>
									<div class="line"></div>
								</li>
							</s:iterator>
						</ul>
				</div>
				<div class="clearfix">
					<div class="pagin pagin-m fr">
						<%@ include file="/common/page.jsp"%>
					</div>
				</div>	
				</form>
				<span class="clr"></span>
			</div>
		</div>
	</div>
	<div class="w w1">
	<div>
		<ul class="middle_ad">
				<li>
					<a target="_blank" href="http://w16w16.51.net/" title="农林竹网">
						<img width="160" height="65" border="0" src="demo/a8.gif">
					</a>
				</li>
				<li>
					<a target="_blank" href="http://www.csoly.com/" title="欧林雅">
						<img width="160" height="65" border="0" src="demo/a9.gif">
					</a>
				</li>
				<li>
					<a target="_blank" href="http://www.yafeng-shanyou.com/" title="九木堂">
						<img width="160" height="65" border="0" src="demo/a10.gif">
					</a>
				</li>
				<li>
					<a target="_blank" href="http://www.zgzm114.com" title="竹原料采购平台">
						<img width="160" height="65" border="0" src="demo/a11.gif">
					</a>
				</li>
				<li>
					<a target="_blank" href="http://www.cnwanlida.com/" title="安吉万利达">
						<img width="160" height="65" border="0" src="demo/a12.jpg">
					</a>
				</li>
				<li>
					<a target="_blank" href="http://www.tongsoon.com/" title="同顺企业">
						<img width="160" height="65" border="0" src="demo/a7.gif">
					</a>
				</li>
			</ul>
	</div>
</div>
	
	
	

<%@ include file="/common/footer.jsp" %>
<script type="text/javascript" src="${ctx}/js/base-v1.js"></script>
<script type="text/javascript" src="${ctx}/js/common.js"></script>
</body>
</html>
