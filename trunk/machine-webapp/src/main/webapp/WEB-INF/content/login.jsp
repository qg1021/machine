<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/common/taglibs.jsp" %>
<%@ page import="org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter" %>
<%@ page import="org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter" %>
<%@ page import="org.springframework.security.core.AuthenticationException" %>
<%@page import="org.springside.modules.security.springsecurity.SpringSecurityUtils"%>
<!DOCTYPE html PUBLIC "-//W3C//Dtd XHTML 1.0 transitional//EN" "http://www.w3.org/tr/xhtml1/Dtd/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>登录东方农机商城</title>
<%@ include file="/common/meta.jsp" %>
<link href="${ctx}/css/passport.css" rel="stylesheet" type="text/css" /> 
<link href="${ctx}/js/validate/jquery.validate.css" type="text/css" rel="stylesheet" />
<script src="${ctx}/js/jquery.js" type="text/javascript"></script>
<script src="${ctx}/js/jquery.cookie.js" type="text/javascript"></script>
<script src="${ctx}/js/validate/jquery.validate.js" type="text/javascript"></script>
<script src="${ctx}/js/validate/messages_cn.js" type="text/javascript"></script>
<script type="text/javascript">
$(document).ready(function() {
	
	//聚焦第一个输入框
	$("#j_username").focus();
	initLogin();//记住用户名
	$("#inputForm").validate({
		rules: {
			j_username: "required", 
			j_password: "required" 
		},
		messages: {
			j_username: {
				required: "请输入用户名"
			},
			j_password: {
				required: "请输入密码"
			} 
		},
        errorPlacement: function(error, element) {   
	        if (document.getElementById("error_"+element.attr("name")))  {
	            error.appendTo("#error_"+element.attr("name"));  
	        }
	        else       
	            error.insertAfter(element);   
	        }
	}); 
});
function onSubmit() {
	 if($("#inputForm").valid()){
		 doLogin();
	 	$("#inputForm").submit();
	 }	
}
document.onkeydown = function(e){    
	e = e || window.event;   
	if(e.keyCode === 13){        
	 onSubmit();   
	}
};
function doLogin()  
{  
	/** 实现记住密码功能 */    
    var n = $('#j_username').val();
    if($('#remeberme').attr('checked')){  
        $.cookie('username', n, {expires:7});  
    }else{  
        $.cookie('username', null);  
    }     
}
function initLogin(){
	var n = $.cookie('username');
    if(n!=null) {
        $('#j_username').val(n);
        $('#remeberme').attr('checked',"true");
    }
}
</script>
</head>
<body>
	<%@ include file="/common/nav.jsp" %>
	<%@ include file="/common/headersearch.jsp" %>
	<form  method="post" action="${ctx}/j_spring_security_check" id="inputForm">
    <div id="entry" class="w">
        <div class="mt"><h2>用户登录</h2><b></b></div>
        <div style="padding-top:20px;" class="mc">
            <div class="form">
            	<div class="item">
            		<span class="label">账户名：
            		</span><div class="fl">
                        <input type="text"  class="text"    tabindex="1" name="j_username" id="j_username">
                        <span class="clr"></span>
                        <span id="error_j_username"></span>
                    </div>
                </div>
                <div class="item">
                    <span class="label">密码：</span>
                    <div class="fl">
                        <input type="password" autocomplete="off"  tabindex="2" class="text" name="j_password" id="j_password">
                        <label id="loginpwd_succeed" class="blank invisible"></label>
                        <label><a class="flk13" href="${ctx}/findpwd.action">忘记密码</a></label>
                        <span class="clr"></span>
                        <span id="error_j_password"></span>
                    </div>
                </div>
                <div id="autoentry" class="item">
                    <span class="label">&nbsp;</span>
                    <div class="fl safety">
                        <label class="mar">
                        	<input type="checkbox" name="remeberme" id="remeberme" class="checkbox" onclick="doLogin();"/>
                            <label class="mar-b">记住账户名</label>
                        </label>
                    </div>
                    <div class="errormsg">   
					<%
						if (session.getAttribute(AbstractAuthenticationProcessingFilter.SPRING_SECURITY_LAST_EXCEPTION_KEY) != null) {
						    if(session.getAttribute(AbstractAuthenticationProcessingFilter.SPRING_SECURITY_LAST_EXCEPTION_KEY).toString().contains("LockedException")){
					%>
								<font color="red">登录失败,用户被锁定.</font>
					<%
							}else{%>
								<font color="red">登录失败,用户名或密码错误.</font>
							<%}
							session.removeAttribute(AbstractAuthenticationProcessingFilter.SPRING_SECURITY_LAST_EXCEPTION_KEY);
						}
					%>
	  			</div>
                </div>
                <div class="item">
                    <span class="label">&nbsp;</span>
                    <input type="button" tabindex="8" onclick="onSubmit();" value="登录" id="loginsubmit" class="btn-img btn-entry">
                </div>
            </div>
            <div id="guide"><h5>还不是东方农机商城用户？</h5>
			<div class="content">现在免费注册成为东方农机商城用户，便能立刻享受便宜又放心的购物乐趣。</div>
			<a class="btn-link btn-personal" href="${ctx}/register.html">注册新用户</a>
			</div>
            <span class="clr"></span>
        </div>
    </div>
	</form>
    <%@ include file="/common/footer.jsp" %>
    <script type="text/javascript" src="${ctx}/js/base-v1.js"></script>
	<script type="text/javascript" src="${ctx}/js/common.js"></script>
</body>
</html>

