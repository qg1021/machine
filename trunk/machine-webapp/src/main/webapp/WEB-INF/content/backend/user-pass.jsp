<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/common/taglibs.jsp" %>
<%@page import="com.gm.machine.util.CommonUtils"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<%@ include file="/common/meta.jsp" %>
	<title>东方农机商城(www.machine1688.com)-修改密码</title>
	<meta content="pass" name="activemenu" />
	<link href="${ctx}/css/backend.css" type="text/css" rel="stylesheet"/> 
	<link href="${ctx}/js/validate/jquery.validate.css" type="text/css" rel="stylesheet"/>
	<script src="${ctx}/js/jquery.js" type="text/javascript"></script>
	<script src="${ctx}/js/validate/jquery.validate.js" type="text/javascript"></script>
	<script src="${ctx}/js/validate/messages_cn.js" type="text/javascript"></script>
	<script type="text/javascript" >
		$(document).ready(function() { 
		//聚焦第一个输入框
		$("#inputForm").validate({
			rules: {
				oldpass: {
					required: true,
					minlength:6,
					maxlength:18
				},
				password: {
					required: true,
					minlength:6,
					maxlength:18
				},
				qpassword: {
					required: true,
					equalTo: "#password"
				}
			},
			messages: {
				oldpass: {
					required: "输入当前密码",
					minlength:"长度不小于6位",
					maxlength:"长度不大于20位"
				},
				password: {
					required: "输入新密码",
					minlength:"长度不小于6位",
					maxlength:"长度不大于20位"
				},
				qpassword: {
					required: "输入确认密码",
					equalTo: "两次密码不相同"
				}
			},errorPlacement: function(error, element) {   
 		        if (document.getElementById("error_"+element.attr("name")))  {
 		            error.appendTo("#error_"+element.attr("name"));  
 		        }else       
 		            error.insertAfter(element);   
 		        }
			});	
	});
		</script>
</head>
<body>
		<%@include file="/common/adminheader.jsp" %>
		<!-- 正文内容 start -->
		<div id="content"> 
		    <!-- 左侧菜单 总shell start -->
		    <%@include file="/common/adminleft.jsp" %>
		    <div class="mainpart">
    			<div class="title">
      				<h2 class="ll">修改密码</h2>
    			</div>
    			<div class="detailbox">
    				<div id="message" style="line-height:20px;">
						<s:actionmessage theme="custom" cssClass="tipbox"/>
					</div>
					<form id="inputForm" name="inputForm" action="user!savePass.action" method="post">
			    		<input id="id" name="id" type="hidden" value="${entity.id}" size="30"/>
					    <div id="news_edit" class="form input mb20">
					    	<ul>
								<li>以下有<cite>*</cite>的内容为必填项：</li>
					            <li> 
			            			<label>用户名<cite>*</cite></label>
			            			${entity.loginName}
			            		</li>
					            <li>
					             	<label>当前密码<cite>*</cite></label>
					             	<input id="oldpass" name="oldpass"  type="password" size="30"/><span id="error_oldpass" class="rr"></span>
					            </li>
					            <li>
					             	<label>确认密码<cite>*</cite></label>
					             	<input id="password" name="password" type="password" size="30"/><span id="error_password" class="rr"></span>
					            </li>
					            <li>
						             <label>确认密码<cite>*</cite></label>
						             <input id="qpassword" name="qpassword"  type="password" size="30"/><span id="error_qpassword" class="rr"></span>
						        </li>
			        		</ul>
			        	</div>
		 				<div class=" buttonbox lh32 tc">
	                        <input class="button01 w90 ll" type="submit"  value="保 存" />
	                    </div> 
		 			</form>
 				</div>
			</div>
		</div>
		<p class=" del_float"></p>
		<!-- 正文内容 end --> 
		<%@include file="/common/adminfooter.jsp" %>
</body>
</html>