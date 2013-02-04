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
<link href="${ctx}/css/regist-frame.css" rel="stylesheet" type="text/css">
<link href="${ctx}/css/reg.css" rel="stylesheet" type="text/css">
<link href="${ctx}/js/validate/jquery.validate.css" type="text/css" rel="stylesheet" />
<script src="${ctx}/js/jquery.js" type="text/javascript"></script>
<script src="${ctx}/js/jquery.cookie.js" type="text/javascript"></script>
<script src="${ctx}/js/validate/jquery.validate.js" type="text/javascript"></script>
<script src="${ctx}/js/validate/messages_cn.js" type="text/javascript"></script>
<script type="text/javascript">
$(document).ready(function() {
	
	//聚焦第一个输入框
	$("#username").focus();
	initLogin();//记住用户名
	$("#inputForm").validate({
		rules: {
			username: "required", 
			loginpwd: "required" 
		},
		messages: {
			username: {
				required: "请输入用户名"
			},
			loginpwd: {
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
    var n = $('#username').val();
    if($('#remeberme').attr('checked')){  
        $.cookie('username', n, {expires:7});  
    }else{  
        $.cookie('username', null);  
    }     
}
function initLogin(){
	var n = $.cookie('username');
	 var mess = "${mess}";
	    if("登录成功"==mess){
	    	var b ="您好;<span>${sessionScope.loginuser.nick}</span><a onclick='if (confirm('确定要退出吗？')) return true; else return false;' href='${ctx}/j_spring_security_logout'>[退出]</a>";
	        parent.$("#loginbar").html(b);
	        if('${pid}'!=0){
	        	window.parent.jdModelCallCenter.doAttention("${pid}");
	        }
	        window.parent.jdThickBoxclose();
	    }
    if(n!=null) {
        $('#username').val(n);
        $('#remeberme').attr('checked',"true");
    }
}
</script>
</head>
<body>
	<form  method="post" id="inputForm" action="index!login.action">
    	<input type="hidden" value="${pid}" name="pid" id="${pid}">
	    <div id="regist">
	        <div class="mt">
	            <ul class="tab">
	                <li class="curr">登&nbsp;录</li>
	            </ul>
	        </div>
	        <div id="" class="mc form">
	            <div class="item">
	                <span class="label">账户名：</span>
	                <div class="fl">
	                    <input type="text"  class="text"  tabindex="1" name="username" id="username">
	                    <label class="blank invisible" id="username_succeed"></label>
	                    <span class="clr"></span>
	                    <span id="error_username"></span>
	                </div>
	            </div>
	            <div class="item">
	                <span class="label">密码：</span>
	
	                <div class="fl">
	                    <input type="password" autocomplete="off"  tabindex="2" class="text" name="loginpwd" id="loginpwd">
	                    <label class="blank invisible" id="loginpwd_succeed"></label>
	                    <label><a class="flk13" target="_blank" href="${ctx}/findpwd.action">忘记密码</a></label>
	                    <span class="clr"></span>
	                    <span id="error_loginpwd"></span>
	                </div>
	            </div>
	            <div id="autoentry" class="item">
	                <span class="label">&nbsp;</span>
	                <div class="fl">
	                    <input type="checkbox" name="remeberme" id="remeberme" class="checkbox" onclick="doLogin();"/>
	                    <label class="mar-b">记住账户名</label>
	                </div>
	                <div class="errormsg">   
						<font color="red">${mess}</font>
	  				</div>
	            </div>
	            
	            <div class="item">
	                <span class="label">&nbsp;</span>
	                <input type="button" tabindex="8" value="登&nbsp;录" onclick="onSubmit();" id="loginsubmitframe" class="btn-img btn-regist mar" clstag="login|keycount|5|3">
	                <label class="ftx23">&nbsp;&nbsp;&nbsp;&nbsp;新用户?<a  class="flk13" target="_blank" href="${ctx}/register.html">立即注册</a></label>
	            </div>
	        </div>
	    </div>
	</form>
</body>
</html>

