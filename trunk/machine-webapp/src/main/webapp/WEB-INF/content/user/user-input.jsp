<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/common/taglibs.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>  
	<%@ include file="/common/meta.jsp" %>
	<meta content="my_userinfo" name="activemenu" />
	<link href="${ctx}/css/base.css" rel="stylesheet" type="text/css" /> 
	<link href="${ctx}/css/userbase.css" rel="stylesheet" type="text/css" />
	<link href="${ctx}/js/validate/jquery.validate.css" type="text/css" rel="stylesheet"/>
	<script src="${ctx}/js/jquery.js" type="text/javascript"></script>
	<script src="${ctx}/js/validate/jquery.validate.js" type="text/javascript"></script>
	<script src="${ctx}/js/PCASClass.js" type="text/javascript"></script>
	<script type="text/javascript" src="${ctx}/js/base-v1.js"></script>
	<script  type="text/javascript">
	$(document).ready(function() { 
		//聚焦第一个输入框
		$("#nick").focus();
	$("#inputForm").validate({
		rules: {
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
			pwdquestion: {
				required: true,
				maxlength:20
			},
			pwdanswer: {
				required: true,
				maxlength:20
			},
			province: {
				required: true
			},				
			city: {
				required: true
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
			province: {
				required: "选择省"
			},
			city: {
				required: "选择市"
			},
			area: {
				required: "选择区"
			},
			address: {
				required: "输入详细地址"
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
			<div class="o-mt"><h2>修改个人信息</h2><p><s:actionmessage theme="custom" cssClass="success_box"/></p></div>
			<form id="inputForm" name="inputForm" action="user!save.action" method="post">
	    	<input id="id" name="id" type="hidden" value="${id}" size="30"/>
			<div class="m" id="baseinfo">
				<div class="mc">
					<div class="i-m">
						<div class="i-mc">
							<div class="form">
								<div class="item">
									<span class="label">&nbsp;&nbsp;用户名: </span>
									<div class="fl">${loginName}</div>
									<div class="clr"></div>
								</div>
								<div class="item">
									<span class="label"><em>*</em>昵  称：</span>
									<div class="fl">
										<div>
											<input id="nick" name="nick" value="${nick}" type="text" size="30"/><span id="error_nick" class="rr"></span>
										</div>
									</div>
									<div class="clr"></div>
								</div>
								<div class="item">
									<span class="label"><em>*</em>姓  名：</span>
									<div class="fl">
										<div>
											<input id="name" name="name" value="${name}" maxlength="15" type="text" size="30"/><span id="error_name" class="rr"></span>
										</div>
									</div>
									<div class="clr"></div>
								</div>
								<div class="item">
									<span class="label"><em>*</em>性  别：</span>
									<div class="fl">
										<div>
											<s:select list="#{'男':'男','女':'女'}"  id="sex" name="sex" value="sex" headerKey="" headerValue="--选择--"   theme="simple"/><span id="error_sex" class="rr"></span>
										</div>
									</div>
									<div class="clr"></div>
								</div>
								<div class="item">
									<span class="label"><em>*</em>联系方式：</span>
									<div class="fl">
										<div>
											<input id="linktel" name="linktel" value="${linktel}" maxlength="15" type="text" size="30"/><span id="error_linktel" class="rr"></span>
										</div>
									</div>
									<div class="clr"></div>
								</div>
								<div class="item">
									<span class="label"><em>*</em>通信地址：</span>
									<div class="fl">
										<div>
											<select id="province" name="province"></select><span id="error_province" ></span>
											<select id="city" name="city"></select><span id="error_city" ></span>
											<select id="area" name="area"></select><span id="error_area"></span>
											<script type="text/javascript">
												new PCAS("province","city","area","${province}","${city}","${area}");
											</script>
											<p>&nbsp;</p>
											<p class="ml_100">
												<input id="address" name="address" value="${address}" maxlength="50" type="text" size="30"/><span id="error_address" class="rr"></span>
											</p>
										</div>
									</div>
									<div class="clr"></div>
								</div>
								<div class="item">
									<span class="label"><em>*</em>密码问题：</span>
									<div class="fl">
										<div>
											<input type="text" id="pwdquestion" name="pwdquestion" value="${pwdquestion}" maxlength="50" size="30"/><span id="error_pwdquestion" class="rr"></span>
										</div>
									</div>
									<div class="clr"></div>
								</div>
								<div class="item">
									<span class="label"><em>*</em>密码答案：</span>
									<div class="fl">
										<div>
											<input type="text" id="pwdanswer" name="pwdanswer" value="${pwdanswer}" maxlength="50" size="30"/><span id="error_pwdanswer" class="rr"></span>
										</div>
									</div>
									<div class="clr"></div>
								</div>
								<div class="item">
									<span class="label">电子邮箱：</span>
									<div class="fl">
										<div>
											<input type="text" size="30" id="email" name="email" value="${email}"/><span id="error_email" class="rr"></span>
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
