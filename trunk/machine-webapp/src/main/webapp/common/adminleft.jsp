<%@ page language="java" pageEncoding="UTF-8" %>
<%@ include file="/common/taglibs.jsp" %>
<script type="text/javascript">
      	$(document).ready(function() {
    		$("div[class='menu1']").bind("click", function(){
    			var e = $(this).parent().find("div[id='menu_second']")
    			var flag = e.css("display");
    			if(flag == "none") {
    				$("div[id='menu_second']").each(function() {
    	        		var title = $(this).attr("title");
    	        		if(title != 'headmenu'){
    	    				$(this).hide();
    	        		}
            		})
    				e.show();
    			} else {
    				e.hide();
    			}
			});
			var activemenu = $('meta[name="activemenu"]').attr("content");
	    	if(!activemenu)
	    		activemenu = $('#activemenu').val();
	    	if(activemenu){
		    	$("#"+activemenu).parent().parent().parent().show();
				$("#"+activemenu).parent().addClass("sel_menu");
	    	}
    	});
    	

        </script>
<div id="left" class="leftmenu ll">
	<div class="block">
    	<div class="menu1">资讯管理 </div>
    	<div id="menu_second"  style="display: none;">
	      	<ul class="menu2" >
	        	<li class="dotline"><a id="syzx" href="news.action?mtype=0">首页资讯</a></li>
	      	</ul>
      	</div>
    </div>
    <div class="block">
    	<div class="menu1">产品管理 </div>
    	<div id="menu_second"  style="display: none;">
	      	<ul class="menu2" >
	        	<li class="dotline"><a id="product" href="product.action">产品中心</a></li>
	      	</ul>
      	</div>
    </div>
    <div class="block">
      	<div class="menu1">基础数据管理 </div>
      	<div id="menu_second"  style="display: none;">
	      	<ul class="menu2">
	        	<li class="dotline"><a id="category" href="category.action">类 别</a></li>
	        	<li class="dotline"><a id="brand" href="basedata.action?mtype=0">品 牌</a></li>
	        	<li class="dotline"><a id="buytype" href="basedata.action?mtype=1">询价类型</a></li>
	      	</ul>
      	</div>
    </div>
    <div class="block">
      	<div class="menu1">广告位管理 </div>
      	<div id="menu_second"  style="display: none;">
	      	<ul class="menu2">
	        	<li class="dotline"><a id="advert01" href="advert.action?mtype=0">首页顶部红腰带</a></li>
	        	<li class="dotline"><a id="advert02" href="advert.action?mtype=1">首页切换广告位</a></li>
				<li class="dotline"><a id="advert03" href="advert.action?mtype=2">首页中间广告位</a></li>
				<li class="dotline"><a id="advert04" href="advert.action?mtype=3">首页尾部广告位</a></li>
	      	</ul>
      	</div>
    </div>
    <div class="block">
      	<div class="menu1">辅助管理 </div>
      	<div id="menu_second"  style="display: none;">
	      	<ul class="menu2">
	        	<li class="dotline"><a id="friendlinks" href="links.action?mtype=0">友情链接</a></li>
	        	<li class="dotline"><a id="aboutus" href="links.action?mtype=1">关于我们</a></li>
	        	<li class="dotline"><a id="contactus" href="links.action?mtype=2">联系我们</a></li>
	        	<li class="dotline"><a id="adextend" href="links.action?mtype=3">广告推广</a></li>
	      	</ul>
      	</div>
    </div>
    <div class="block">
      	<div class="menu1">用户管理 </div>
      	<div id="menu_second"  style="display: none;">
	      	<ul class="menu2">
	        	<li class="dotline"><a id="user" href="user.action">用户</a></li>
	      	</ul>
      	</div>
    </div>
    <div class="block">
      	<div class="menu1">系统设置 </div>
      	<div id="menu_second"  style="display: none;">
	      	<ul class="menu2">
	        	<li class="dotline"><a id="pass" href="user!view.action">修改密码</a></li>
	      	</ul>
      	</div>
    </div>
</div>

 


