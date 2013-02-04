<%@ page contentType="text/html;charset=UTF-8" %>
<%@page import="org.springside.modules.security.springsecurity.SpringSecurityUtils"%>
<%@ include file="/common/taglibs.jsp" %>
	<script  type="text/javascript">
		var ctx ="${ctx}"
		$(document).ready(function() {
			if (window.pageConfig) {
			    var sidePanle = new pageConfig.FN_InitSidebar();
			    //sidePanle.addItem("<a class='research' target='_blank' href='http://survey.360buy.com/index.php?sid=68129&lang=zh-Hans'><b></b>\u8c03\u67e5\u95ee\u5377</a>");
			    sidePanle.setTop();
			    sidePanle.scroll()
			}
		});
	</script>
<div id="shortcut">
	<div class="w">
		<ul class="fl lh">
			<li clstag="homepage|keycount|home2012|01a" class="fore1 ld">
				<b></b>
				<a href="javascript:void(0);" onclick="addToFavorite();" style="outline:none;blr:expression(this.onFocus=this.blur())">加入收藏</a>
			</li>
			<li clstag="homepage|keycount|home2012|01b" class="fore2">
				<a style="outline:none;blr:expression(this.onFocus=this.blur())" onclick="javascript:setHomepage('http://www.machine1688.com');">设为主页</a> 
				<input class="btn-login" type="button" value="登录" style="display:none"/>
			</li>
		</ul>
		<ul class="fr lh">
			<li clstag="homepage|keycount|home2012|01e" class="fore1 ld" id="loginbar">
				您好，
				<%if(SpringSecurityUtils.getCurrentUserName().equals("anonymousUser") || request.getSession().getAttribute("loginuser")==null){ %>
					欢迎来到东方农机商城！<span><a href="javascript:login();">[登录]</a> <a class="link-regist" href="${ctx}/register.html">[免费注册]</a></span>
					
				<%}else{%>
					<span>${sessionScope.loginuser.nick}</span> 
					<a onclick="if (confirm('确定要退出吗？')) return true; else return false;" href="${ctx}/j_spring_security_logout" >[退出]</a> 
				<%}%>
			</li>
			<li clstag="homepage|keycount|home2012|01f" class="fore2"><a href="${ctx}/user/enquiry.action">我的询价</a> </li>
			<li clstag="homepage|keycount|home2012|01f" class="fore2"><a href="${ctx}/user/index.action">会员中心</a> </li>
			<!--<li clstag="homepage|keycount|home2012|01h" class="fore4"><a target="_blank" href="http://app.360buy.com/">手机版</a> </li>-->
			<!--<li data-widget="dropdown" clstag="homepage|keycount|home2012|01j" class="fore6 menu">
				<dl>
					<dt class="ld"><a target="_blank" href="http://help.360buy.com/">客户服务<b></b></a></dt>
					<dd>
						<div><a target="_blank" href="http://help.360buy.com/help/question-61.html">常见问题</a></div>
						<div><a target="_blank" href="http://myjd.360buy.com/repair/orderlist.action">售后服务</a></div>
						<div><a target="_blank" href="http://chat.360buy.com/jdchat/custom.action">在线客服</a></div>
						<div><a target="_blank" href="http://myjd.360buy.com/opinion/list.action">投诉中心</a></div>
						<div><a target="_blank" href="http://www.360buy.com/contact/service.html">客服邮箱</a></div>
					</dd>
				</dl>
			</li>  -->
		</ul>
		<span class="clr"></span>
	</div>
</div>