<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/common/taglibs.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>  
	<%@ include file="/common/meta.jsp" %>
	<meta content="my_password" name="activemenu" />
	<link href="${ctx}/css/base.css" rel="stylesheet" type="text/css" /> 
	<link href="${ctx}/css/userbase.css" rel="stylesheet" type="text/css" />
	<link href="${ctx}/js/validate/jquery.validate.css" type="text/css" rel="stylesheet"/>
	<script src="${ctx}/js/jquery.js" type="text/javascript"></script>
	<script src="${ctx}/js/validate/jquery.validate.js" type="text/javascript"></script>
	<script type="text/javascript" src="${ctx}/js/base-v1.js"></script>
	<script  type="text/javascript">
	$(document).ready(function() { 
		//聚焦第一个输入框
		$("#oldpass").focus();
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
 		        },
		        errorElement: "em"
			});	
	});
	function onSavePass(){
		if($("#inputForm").valid()){
			$("#inputForm").submit();
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
	<%@ include file="/common/userleft.jsp" %>
	<div class="right">
			<div class="o-mt"><h2>修改登录密码</h2><p><s:actionmessage theme="custom" cssClass="success_box"/></p></div>
			<form id="inputForm" name="inputForm" action="user!savePass.action" method="post">
	    	<input id="id" name="id" type="hidden" value="${id}" size="30"/>
			<div class="m" id="baseinfo">
				<div class="mc">
					<div class="i-m">
						<div class="i-mc">
							<div class="form">
								
								<div class="item">
									<span class="label">用户名: </span>
									<div class="fl">${loginName}</div>
									<div class="clr"></div>
								</div>
								
								<div class="item">
									<span class="label"><em>*</em>当前密码：</span>
									<div class="fl">
										<div>
											<input id="oldpass" name="oldpass"  type="password" size="30"/><span id="error_oldpass" class="rr"></span>
										</div>
									</div>
									<div class="clr"></div>
								</div>
								<div class="item">
									<span class="label"><em>*</em>新密码：</span>
									<div class="fl">
										<div>
											<input id="password" name="password" type="password" size="30"/><span id="error_password" class="rr"></span>
										</div>
									</div>
									<div class="clr"></div>
								</div>
								<div class="item">
									<span class="label"><em>*</em>确认密码：</span>
									<div class="fl">
										<div>
											<input id="qpassword" name="qpassword"  type="password" size="30"/><span id="error_qpassword" class="rr"></span>
										</div>
									</div>
									<div class="clr"></div>
								</div>
							</div>
							<div class="item">
								<span class="label">&nbsp;</span>

								<div class="fl">
									<a class="btn btn-7" onclick="onSavePass();" href="javascript:void(0)"><s></s>提交</a>
								</div>
								<div class="clr"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			</form>
		</div>
        <span class="clr"></span>
</div>
<%@ include file="/common/footer.jsp" %>
<script type="text/javascript" src="${ctx}/js/common.js"></script>
</body>
</html>
