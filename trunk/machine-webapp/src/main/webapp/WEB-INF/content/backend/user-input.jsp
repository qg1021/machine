<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/common/taglibs.jsp" %>
<%@page import="com.gm.machine.util.CommonUtils"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<%@ include file="/common/meta.jsp" %>
	<title>东方农机商城(www.machine1688.com)-用户管理</title>
	<meta content="user" name="activemenu" />
	<link href="${ctx}/css/backend.css" type="text/css" rel="stylesheet"/> 
	<link href="${ctx}/js/validate/jquery.validate.css" type="text/css" rel="stylesheet"/>
	<script src="${ctx}/js/jquery.js" type="text/javascript"></script>
	<script src="${ctx}/js/validate/jquery.validate.js" type="text/javascript"></script>
	<script src="${ctx}/js/validate/messages_cn.js" type="text/javascript"></script>
	<script src="${ctx}/js/PCASClass.js" type="text/javascript"></script>
	<script type="text/javascript" >
		$(document).ready(function() { 
		//聚焦第一个输入框
		$("#loginName").focus();
		//为inputForm注册validate函数
		jQuery.validator.addMethod("valusername", function(value, element) {
			var username = $.trim($("#loginName").val());
			var re =/^[A-Za-z]{1}[0-9A-Za-z]{2,}$/ ;
			if (!re.test(username)){ 
 		    	return false;
 		    }
 		    return true;
		}, "由英文和数字组成，首位为英文字母");
		$("#inputForm").validate({
			rules: {
				loginName: {
					required: true,
					minlength:6,
					maxlength:20,
					valusername:true,
					remote: "user!checkUserName.excsec?oldUserName=" + encodeURIComponent('${loginName}')
				},
				nick: {
					required: true,
					maxlength:8
				},
				name: {
					required: true,
					maxlength:8
				},
				sex: {
					required: true
				},
				linktel: {
					required: true
				},
				password: {
					required: true,
					minlength:6,
					maxlength:18
				},
				qpassword: {
					required: true,
					equalTo: "#password"
				},
				pwdquestion: {
					required: true,
					maxlength:20
				},
				pwdanswer: {
					required: true,
					maxlength:20
				},
				area: {
					required: true
				},
				address: {
					required: true
				},
				email:{
					email:true
				}
			},
			messages: {
				loginName: {
					required: "输入用户名",
					minlength:"长度不小于6位",
					maxlength:"长度不大于20位",
					remote: "此用户名已存在"
				},
				nick: {
					required: "输入昵称",
					maxlength:"长度不大于10位"
				},
				name: {
					required: "输入姓名",
					maxlength:"长度不大于10位"
				},
				sex: {
					required: "输入性别"
				},
				linktel: {
					required: "输入联系方式",
					maxlength:"长度不大于10位"
				},
				password: {
					required: "输入密码",
					minlength:"长度不小于6位",
					maxlength:"长度不大于20位"
				},
				qpassword: {
					required: "输入确认密码",
					equalTo: "两次密码不相同"
				},
				pwdquestion: {
					required: "输入密码问题",
					maxlength:"长度不大于20位"
				},
				pwdanswer: {
					required: "输入密码答案",
					maxlength:"长度不大于20位"
				},
				email:{
					email:"邮箱不合法"
				},
				area: {
					required: "请选择省市区"
				},
				address: {
					required: "输入详细地址"
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
      				<h2 class="ll"><s:if test="id!=null">编辑</s:if><s:else>新增</s:else>用户</h2>
    			</div>
    			<div class="detailbox">
					<form id="inputForm" name="inputForm" action="user!save.action" method="post">
			    		<input id="id" name="id" type="hidden" value="${id}" size="30"/>
					    <div id="news_edit" class="form input mb20">
					    	<ul>
								<li>以下有<cite>*</cite>的内容为必填项：</li>
					            <li> 
					            	<label>用户名<cite>*</cite></label>
					            	<input id="loginName" name="loginName" value="${loginName}" type="text" size="30"/><span id="error_loginName" class="rr"></span>
					            </li>
					            <li>
					             	<label>昵称<cite>*</cite></label>
					             	<input id="nick" name="nick" value="${nick}" type="text" size="30"/><span id="error_nick" class="rr"></span>
					            </li>
					            <li>
					             	<label>姓名<cite>*</cite></label>
					             	<input id="name" name="name" value="${name}" maxlength="15" type="text" size="30"/><span id="error_name" class="rr"></span>
					            </li>
					            <li>
					             	<label>性别<cite>*</cite></label>
					             	<s:select list="#{'男':'男','女':'女'}"  id="sex" name="sex" value="sex" headerKey="" headerValue="--选择--"   theme="simple"/><span id="error_sex" class="rr"></span>
					            </li>
					            <li>
					             	<label>联系方式<cite>*</cite></label>
					             	<input id="linktel" name="linktel" value="${linktel}" maxlength="15" type="text" size="30"/><span id="error_linktel" class="rr"></span>
					            </li>
					            <li>
					            	<label>通信地址</label>
					            	<select id="province" name="province"></select>
									<select id="city" name="city"></select>
									<select id="area" name="area"></select>
									<script type="text/javascript">
										new PCAS("province","city","area","${province}","${city}","${area}");
									</script>
									<span id="error_area" class="rr"></span>
								</li>
								<li>
					             	<label>&nbsp;</label>
					             	<input id="address" name="address" value="${address}" maxlength="50" type="text" size="30"/><span id="error_address" class="rr"></span>
					            </li>

					            <s:if test="id==null||id==''">
					            <li>
					             	<label>密码<cite>*</cite></label>
					             	<input id="password" name="password" value="" type="password" size="30"/><span id="error_password" class="rr"></span>
					            </li>
					            <li>
					             	<label>确认密码<cite>*</cite></label>
					             	<input id="qpassword" name="qpassword" value="" type="password" size="30"/><span id="error_qpassword" class="rr"></span>
					            </li>
					            </s:if>
					            <s:else>
					            	<li style="display:none">
					             		<label>密码<cite>*</cite></label>
					             		<input id="password" name="password" value="${password}" type="password" size="30"/>
						            </li>
						            <li style="display:none">
						             	<label>确认密码<cite>*</cite></label>
						             	<input id="qpassword" name="qpassword" value="${password}" type="password" size="30"/>
						            </li>
					            </s:else>
					            <li>
			            			<label>密码问题<cite>*</cite></label>
			            			<input type="text" id="pwdquestion" name="pwdquestion" value="${pwdquestion}" maxlength="50" size="30"/><span id="error_pwdquestion" class="rr"></span>
			          			</li>
			          			<li>
			            			<label>密码答案<cite>*</cite></label>
			            			<input type="text" id="pwdanswer" name="pwdanswer" value="${pwdanswer}" maxlength="50" size="30"/><span id="error_pwdanswer" class="rr"></span>
			          			</li>
			          			<li>
			            			<label>电子邮箱</label>
			            			<input type="text" size="30" id="email" name="email" value="${email}"/><span id="error_email" class="rr"></span>
			          			</li>
			        		</ul>
			        	</div>
		 				<div class=" buttonbox lh32 tc">
	                        <input class="button01 w90 ll" type="submit"  value="保 存" />
							<input class="button02 w60 rr ml20" type="button" type="button" onclick="location.href='user.action'" value="取消" />
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