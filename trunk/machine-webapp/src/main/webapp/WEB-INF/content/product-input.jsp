<%@ page contentType="text/html;charset=UTF-8" %>
<%@page import="org.springside.modules.security.springsecurity.SpringSecurityUtils"%>
<%@ include file="/common/taglibs.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>  
	<%@ include file="/common/meta.jsp" %>
	<meta content="index" name="headmenu" />
	<link href="${ctx}/css/base.css" rel="stylesheet" type="text/css" /> 
	<link href="${ctx}/css/pshow.css" rel="stylesheet" type="text/css" />
	<script src="${ctx}/js/jquery.js" type="text/javascript"></script>
	<script type="text/javascript" src="${ctx}/js/base-v1.js"></script>
	<script  type="text/javascript">
		$(document).ready(function() {
			setTimeout( function() {setTab("${tabid}")},1500);
		});
		function iFrameHeight(frameId,tab) {
			var pTar = frameId;
			if (pTar) {  
				if (pTar.contentDocument && pTar.contentDocument.body.offsetHeight) {//ff
			　　		pTar.height = pTar.contentDocument.body.offsetHeight;
			　　}
				else if (pTar.Document && pTar.Document.body.scrollHeight) { //ie
			　　		pTar.height = pTar.Document.body.scrollHeight;
			　　		setTimeout( function() { iFrameHeight(frameId); }, 2000);
			　　}
			}
			$("#"+tab).addClass("hide");
		}
		function setTab(tabid){
			if(tabid!="0"){
				$("#pd"+tabid).click();
			}
		}

		
    
	</script>
</head>
<body>	
<%@ include file="/common/nav.jsp" %>
	<div id="o-header">
		<c:import url="${appurl}/advert!indextop.action"/>
		<%@ include file="/common/header.jsp" %>
		<%@ include file="/common/menu.jsp" %>
	</div>
	<div class="w">
		<div class="breadcrumb">
			<strong><a href="product-cat-${onecatid}-0-0.html">${category.parent.parent.name}</a></strong>
			<span>
				&nbsp;&gt;&nbsp;<a href="product-cat-${onecatid}-${twocatid}-0.html">${category.parent.name}</a>
				&nbsp;&gt;&nbsp;<a href="product-cat-${onecatid}-${twocatid}-${threecatid}.html">${category.name}</a>
				&nbsp;&gt;&nbsp;<a href="product-${id}-tab-1.html">${name}</a>
			</span>
		</div>
	</div>
	<div class="w">
	<div id="product-intro" class="">
		<div id="name">
			<strong>${name}</strong>
		</div><!--name end-->
		<script type="text/javascript">var warestatus = 1; </script>
		<div clstag="shangpin|keycount|product|share" class="clearfix">
			<ul id="summary">
				<li id="summary-grade">
					<div class="dt">商品规格：</div>
					<div class="dd"><span>${standard}</span></div>
				</li>
				<li id="summary-grade">
					<div class="dt">价&nbsp;&nbsp;&nbsp;&nbsp;格：</div>
					<div class="dd"><span>${price}</span></div>
				</li>
				<li id="summary-grade">
					<div class="dt">所属品牌：</div>
					<div class="dd">
						<a href="product-brand-${id}.html">${brand.name}</a>
					</div>
				</li>
				<li id="summary-grade">
					<div class="dt">关注人数：</div>
					<div class="dd">(已有${attnum}人关注)</div>
				</li>
				<li id="summary-grade">
					<div class="dt">询价人数：</div>
					<div class="dd">(已有${postnum}人询价)</div>
				</li>
				<li id="summary-grade">
					<div class="dt">评论人数：</div>
					<div class="dd">(已有${ennum}人评论)</div>
				</li>
				<li id="summary-grade">
					<div class="dt">发布时间：</div>
					<div class="dd"><s:date name="pubdate" format="yyyy-MM-dd HH:mm"/></div>
				</li>
			</ul><!--summary end-->
			<ul clstag="shangpin|keycount|product|choose" id="choose">
				<li id="choose-btns">
					<div    style=" float:left;height:38px; margin-top:14px;margin-right:5px;">
						<a href="javascript:setTab('2');">
							<img src="${ctx}/images/enquiry.gif" border="0" />
						</a>
					</div>
					<div class="btn" id="choose-btn-coll">
							<a clstag="shangpin|keycount|product|btn-coll" class="btn-coll"  id="coll${id}" href="#none">加关注<b></b></a>
					</div>
				</li>
				<li>
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
				</li>
			</ul><!--choose end-->
			<span class="clr"></span>
		</div>
		<div id="preview">
			<div clstag="shangpin|keycount|product|spec-n1" class="jqzoom" id="spec-n1">
				<img width="350" height="385" jqimg="${ctx}<%=Global.picpath%>${picurl}" alt="${name}" src="${ctx}<%=Global.picpath%>${picurl}" data-img="1"/>
			</div>
		</div><!--preview end-->
	</div><!--product-intro end-->
</div>
<div class="w w1">
	<div clstag="shangpin|keycount|product|detail" data-widget="tabs" class="m m1" id="product-detail">
			<div class="float-nav-wrap" style="height: 31px;">
				<div class="mt" style="height: 31px; width: 989px;">
					<ul class="tab">
						<li class="curr" data-widget="tab-item" id="pd1" clstag="shangpin|keycount|product|pinfotab">
							<a href="javascript:;">商品介绍</a>
						</li>
						<li data-widget="tab-item" id="pd2" clstag="shangpin|keycount|product|pcanshutab" class="">
							<a href="javascript:;">会员询价</a>
						</li>
						<li data-widget="tab-item" id="pd3" clstag="shangpin|keycount|product|packlisttab" class="">
							<a href="javascript:;">商品评价</a>
						</li>
					</ul>
			</div></div>
			<div id="product-detail-1" data-widget="tab-content" class="mc" style="display: block;">
				<ul class="detail-list">
					<li title="联想K860">商品名称：${name}</li>
					<li>商品规格：${standard}</li>
					<li>品牌：<a href="product-brand-${id}.html">${brand.name}</a></li>
					<li>发布时间：<s:date name="pubdate" format="yyyy-MM-dd HH:mm"/></li>
					<li>商品产地：${province}${city}</li>
					<li>商品价格：${price}</li>
				</ul>
				<div class="detail-content">
					<strong>说明：</strong><br/>
					${remark}
				</div>
			</div>
			<div id="product-detail-2" data-widget="tab-content" class="mc">
				<iframe id="mainFrame" onload="iFrameHeight(this,'product-detail-2');" src="product-enquiry-${id}.html" width="100%" style="float:left; text-align: center;"  marginheight="0" marginwidth="0" frameborder="0" scrolling="no"></iframe>
			</div>
			<div id="product-detail-3" data-widget="tab-content"  class="mc">
			 	<iframe id="mainFrame" onload="iFrameHeight(this,'product-detail-3');" src="product-post-${id}.html" width="100%" style="float:left; text-align: center;"  marginheight="0" marginwidth="0" frameborder="0" scrolling="no"></iframe>
			</div>
		</div>
</div>
<%@ include file="/common/footer.jsp" %>
<script type="text/javascript" src="${ctx}/js/common.js"></script>
<script src="${ctx}/js/product.js" type="text/javascript"></script>
</body>
</html>
