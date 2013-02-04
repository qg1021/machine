<%@ page contentType="text/html;charset=UTF-8" %>
<%@page import="org.springside.modules.security.springsecurity.SpringSecurityUtils"%>
<%@ include file="/common/taglibs.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>  
	<%@ include file="/common/meta.jsp" %>
	<meta content="index" name="headmenu" />
	<link href="${ctx}/css/base.css" rel="stylesheet" type="text/css" /> 
	<link href="${ctx}/css/plist.css" rel="stylesheet" type="text/css" /> 
	<script src="${ctx}/js/jquery.js" type="text/javascript"></script>
	<script type="text/javascript" src="${ctx}/js/base-v1.js"></script>
	<script  type="text/javascript">
		$(document).ready(function() {
			initSearchParam();
		});
		function initSearchParam(){
			$("#brand_${brandid}").addClass("curr");
			$("#order_${page.orderBy}").addClass("curr");
		}
		/**产品二级分类级联**/
		function  showTwoCat() {
			var oneCatId = $("#onecatid").val();
			if(oneCatId) {
				$.post("related!categorys.excsec",{"parentId":oneCatId},function(data) {
					$("#twocatid option[value!='']").remove();
					var category = eval(data);
					if(category.length == 0) return;
					for(var i = 0 ;i < category.length ; i++) {
						$("#twocatid").append("<option value='"+category[i].value+"'>"+category[i].label+"</option>");
					} 
				});
			}else {
				$("#twocatid option[value!='']").remove(); 
			}
		}
		/**产品三级分类级联**/
		function  showThreeCat() {
			var oneCatId = $("#twocatid").val();
			if(oneCatId) {
				$.post("related!categorys.excsec",{"parentId":oneCatId},function(data) {
					$("#threecatid option[value!='']").remove();
					var category = eval(data);
					if(category.length == 0) return;
					for(var i = 0 ;i < category.length ; i++) {
						$("#threecatid").append("<option value='"+category[i].value+"'>"+category[i].label+"</option>");
					} 
				});
			}else {
				$("#threecatid option[value!='']").remove(); 
			}
		}
		function onSort(orderBy) {
			if ($("#orderBy").val() != orderBy) {
				$("#orderBy").val(orderBy);
				$("#mainForm").submit();
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
	<div class="w main">
		<div class="right-extra">						
			<div clstag="thirdtype|keycount|thirdtype|select" class="m" id="select">
				<div class="mt">
					<h1>商品列表</h1>
				</div>
				<dl id="select-brand">
					<dt>品牌：</dt>
					<dd>
						<div class="content">
							<div rel="0"><a  style="cursor:pointer;" href="product-brand-0.html" id="brand_0">不限</a></div>
							<s:iterator value="brandList" status="st">
								<div rel="${st.count}"><a  href="product-brand-${id}.html" id="brand_${id}">${name}</a></div>
							</s:iterator>
						</div>
					</dd>
				</dl>
			</div><!--select end -->
			<form id="mainForm" action="product.html" method="post">
				<input type="hidden" id="brandid" name="brandid" value="${param['brandid']}"/>
				<div clstag="thirdtype|keycount|thirdtype|filter" id="filter">
	                <div class="fore1">
	                	<dl class="order">
	                		<dt>排序：</dt>
	                		<dd id="order_ennum"><a style="cursor:pointer;" href="javaScript:void(0);" onclick="onSort('ennum');">询价数</a><b></b></dd>
	                		<dd id="order_attnum"><b></b><a rel="nofollow" href="javaScript:void(0);" style="cursor:pointer;" onclick="onSort('attnum');">关注数</a><b></b></dd>
	                		<dd id="order_postnum"><a rel="nofollow" href="javaScript:void(0);" style="cursor:pointer;" onclick="onSort('postnum');">评论数</a><b></b></dd>
	                		<dd id="order_pubdate"><a rel="nofollow" href="javaScript:void(0);" style="cursor:pointer;" onclick="onSort('pubdate');">发布时间</a><b></b></dd>
	                	</dl>
	                	<div class="total">&nbsp;<span>共<strong>${page.totalCount}</strong>个商品</span></div>
	                	<span class="clr"></span>
	                </div>
	                <div class="fore2 form">
	                	<dl class="type">
	                		<dt>商品名称：</dt>
	                		<dd><input type="text" id="keyword" name="keyword" value="${param['keyword']}"/></dd>
	                		<dt>商品类别：</dt>
	                		<dd><s:select list="oneCatList"   listKey="id" listValue="name" id="onecatid" name="onecatid" onchange="showTwoCat();" value="@java.lang.Long@parseLong(#parameters.onecatid)"     cssStyle="width:150px;" headerKey="" headerValue="--全 部--"/></dd>
	                		<dd><s:select list="twoCatList"   listKey="id" listValue="name" id="twocatid" name="twocatid" onchange="showThreeCat()" value="@java.lang.Long@parseLong(#parameters.twocatid)"   cssStyle="width:150px;"  headerKey="" headerValue="--全 部--"/></dd>
	                		<dd><s:select list="threeCatList"   listKey="id" listValue="name" id="threecatid" name="threecatid" value="@java.lang.Long@parseLong(#parameters.threecatid)"    cssStyle="width:150px;"  headerKey="" headerValue="--全 部--"/></dd>
	                		<dd><button class="btn_orange_s" type="submit">搜 索</button></dd>
	                	</dl>
	                </div>
	                <span class="clr"></span>
	             </div>
				 <div clstag="thirdtype|keycount|thirdtype|plist" id="plist" class="m ">
					 <ul class="list-h">
		                    <s:iterator value="page.result" status="st">
								<li  sku="${st.count}">
									<div class="p-img">
										<a href="product-${id}-tab-1.html" target="_blank">
											<img width="160" height="160" alt="${name}" src="${ctx}<%=Global.picpath%>${picurl}"  title="${name}"/>
										</a>
									</div>
									<div class="p-name">
										<a href="product-${id}-tab-1.html" target="_blank" title="${name}">${name}<font class="adwords" style="color:#ff0000">${brand.name}</font></a>
										
									</div>
									<div class="p-price">
										产地：${province}${city}
									</div>
									<div class="p-price">
										<font style="color:#ff0000">${price}</font>
									</div>
									<div class="extra">
										<span class="evaluate"><a href="product-${id}-tab-3.html" target="_blank">已有${postnum}人评价</a></span>
									</div>
									<div class="btns">
										<input type="button" id="coll${id}"  value="关 注" class="btn-coll"/>
										<a class="btn-buy" target="_blank" href="product-${id}-tab-2.html">询 价</a>
										<a class="btn-buy" target="_blank" href="product-${id}-tab-3.html">评 价</a>
									</div>
								</li>
							</s:iterator>
							<s:if test="page.result.size ==0">
								<li><font color="gray">很遗憾;您查询的商品不存在！</font></li>  
							</s:if>
						</ul>
					</div><!--plist end-->					
					<div class="m clearfix">
						<div class="pagin fr">
		                   <%@ include file="/common/page.jsp"%>
						</div><!--pagin end-->
					</div>
				</form>
			</div>
			<span class="clr"></span>
		</div>
<%@ include file="/common/footer.jsp" %>
<script type="text/javascript" src="${ctx}/js/common.js"></script>
<script type="text/javascript">
    function lazyload(option) {
        var settings = {
            defObj: null,
            defHeight: 0
        };
        settings = $.extend(settings, option || {});
        var defHeight = settings.defHeight,
        defObj = (typeof settings.defObj == "object") ? settings.defObj.find("img") : $(settings.defObj).find("img");
        var pageTop = function() {
            var d = document,
            y = (navigator.userAgent.toLowerCase().match(/iPad/i) == "ipad") ? window.pageYOffset: Math.max(d.documentElement.scrollTop, d.body.scrollTop);
            return d.documentElement.clientHeight + y - settings.defHeight
        };
        var imgLoad = function() {
            defObj.each(function() {
                if ($(this).offset().top<=pageTop()) {
                    var src2 = $(this).attr("src2");
                    if (src2) {
                        $(this).attr("src", src2).removeAttr("src2")
                    }
                }
            })
        };
        imgLoad();
        $(window).bind("scroll",
        function() {
            imgLoad()
        })
    }
    lazyload({
        defObj: "#plist"
    })
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
