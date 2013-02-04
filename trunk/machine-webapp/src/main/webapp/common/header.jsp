<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/common/taglibs.jsp" %>
<script  type="text/javascript">
	function search(key){
		if(document.getElementById(key).value==''){
			alert("请输入查询关键字!");
			return false;
		}
		document.getElementById("topsearchForm").submit();
	}
</script>
<div id="header" class="w">
	<div id="logo" class="ld">
		<a href="${ctx}" clstag="homepage|keycount|home2012|02a">
			<img alt="东方农机商城" src="${ctx}/images/logo.png" width="259">
			<b></b>
		</a>
	</div><!--logo end-->
			<div id="search">
				<div class="i-search ld"><b></b><s></s>
					<ul id=shelper class=hide></ul>
					<div class=form>
						<form id="topsearchForm" name="topsearchForm" action="${ctx}/product.html" method="post">
							<input accessKey="s" onkeydown="javascript:if(event.keyCode==13) search('keyword');" id="keyword" name="keyword" value="${param['keyword']}" class="text" autocomplete="off"> 
							<input class="button" onclick="search('keyword');" value="搜索" type="button" clstag="homepage|keycount|home2012|03a">
						</form> 
					</div>
				</div>
				<!--<div clstag="homepage|keycount|home2012|03b" id="hotwords"><strong>热门搜索：</strong><a style="color: #CC0000" target="_blank" href="http://sale.360buy.com/act/KCrYGkgJj2DAzHs0.html">莫言</a><a target="_blank" href="http://search.360buy.com/Search?keyword=%E8%81%94%E6%83%B3yoga&amp;enc=utf-8&amp;area=1">联想yoga</a><a target="_blank" href="http://search.360buy.com/Search?keyword=%E9%9B%86%E8%90%83%E5%A0%82&amp;enc=utf-8&amp;area=1">秋季护肤</a><a target="_blank" href="http://search.360buy.com/Search?keyword=%E5%BA%B7%E4%BD%B342%E5%AF%B8LED&amp;enc=utf-8&amp;area=1">康佳42寸LED</a><a target="_blank" href="http://www.360buy.com/products/1672-2575-5257-0-0-0-0-0-0-0-4-1-1.html">时尚女包</a><a target="_blank" href="http://search.360buy.com/Search?keyword=XT615&amp;enc=utf-8&amp;area=1">XT615</a><a target="_blank" href="http://search.360buy.com/Search?keyword=%E5%86%B0%E4%B8%8E%E7%81%AB%E4%B9%8B%E6%AD%8C&amp;enc=utf-8&amp;book=y">冰与火之歌</a>
				<a target="_blank" href="http://search.360buy.com/Search?keyword=诺基亚800">诺基亚800</a></div>  -->
			</div><!--search end-->
			<div id="my360buy">
				<dl>
					<dt class="ld">
						<s></s>
						<img  src="${ctx}/images/blank.gif" width="24" height="24"/>
						<a href="${ctx}/user/index.action" clstag="homepage|keycount|home2012|04k">会员中心</a>
						<b></b> 
					</dt>
					<dd>
						<div class="loading-style1">
							<b></b>加载中，请稍候...
						</div>
					</dd>
				</dl>
			</div><!--my360buy end-->
			<!--<div id="settleup" clstag="homepage|keycount|home2012|05a">
			<dl>
				<dt class="ld">
					<s><span id="shopping-amount"></span></s>
					<a href="${ctx}/user/enquiry.action">查看询价回复</a> 
					<b></b>
				</dt>
				<dd>
					<div class="prompt">
						<div class=loading-style1><B></B>加载中，请稍候...</div>
					</div>
				</dd></dl>
			</div>  --><!--settleup end-->
		</div><!--header end-->
