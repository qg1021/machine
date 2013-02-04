<%@ page contentType="text/html;charset=UTF-8" %>
<%@page import="org.springside.modules.security.springsecurity.SpringSecurityUtils"%>
<%@ include file="/common/taglibs.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>  
	<link href="${ctx}/css/base.css" rel="stylesheet" type="text/css" /> 
	<link href="${ctx}/css/pshow.css" rel="stylesheet" type="text/css" />
	<link href="${ctx}/css/review.css" rel="stylesheet" type="text/css" /> 
	<link href="${ctx}/js/validate/jquery.validate.css" type="text/css" rel="stylesheet"/> 
	<script src="${ctx}/js/jquery.js" type="text/javascript"></script>
	<script src="${ctx}/js/validate/jquery.validate.js" type="text/javascript"></script>
	<script src="${ctx}/js/validate/messages_cn.js" type="text/javascript"></script>
	
	<script type="text/javascript">
		$(document).ready(function() {
			//聚焦第一个输入框
			$("#enquiryForm").validate({
				rules: {
					content: {
						required:true,
						maxlength:200
					},
					hasbrand: {
						required:true
					},
					hasbuy: {
						required:true
					},
					buynum: {
						required:true
					},
					buyprice: {
						required:true
					},
					rcode: {
						required:true
					}
				},
				messages: {
					content: {
						required: "请输入询价内容",
						maxlength:"字数不能超过200"
					},
					hasbrand: {
						required:"请选择品牌要求"
					},
					hasbuy: {
						required:"请选择是否有采购意向"
					},
					buynum: {
						required:"请填写采购数量"
					},
					buyprice: {
						required:"请填写期望采购价格"
					},
					rcode: {
						required: "请输入验证码"
					}
				},
		        errorPlacement: function(error, element) {   
			        if (document.getElementById("error_"+element.attr("name")))  {
			            error.appendTo("#error_"+element.attr("name"));  
			        }
			        else       
			            error.insertAfter(element);   
			        },
			        errorElement: "em"
			}); 
		});
		/**商品评价**/
		function onEnquiry(){
			if($("#enquiryForm").valid()){
				$.post("index!isLogin.excsec",{},function(data) {
				    if (data=="true") {
				    	$.post("enquiry!save.excsec",{
					    							  hasbrand:$('input[name="hasbrand"]:checked').val(),
					    							  hasbuy:$('input[name="hasbuy"]:checked').val(),
					    							  buynum:$("#buynum").val(),buyprice:$("#buyprice").val(),
					    							  rcode:$("#rcode").val(),content:$("#content").val(),
					    							  pid:"${pid}"},function(rdata) {
					    	if(rdata=='询价成功'){
					    		$("#rcode").val('');
					    		$("#content").val('');
				    			location.reload();
					    	}else{
						    	alert(rdata);
						    	changeimg();
					    	}
				    	});
				    }else{
					    window.parent.$(".btn-login").click();
				    }
				});
		 	}
		}
		function changeimg(){  
			var myimg = document.getElementById("imgrcode");  
		    myimg.src="authImg?"+Math.random();//随机生成一个数字，让图片缓冲区认为不是同一个缓冲区  
		}
	</script>
</head>
<body>	
	<s:if test="page.result.size ==0">
		<div><font color="gray">此商品暂无会员询价!</font></div>  
	</s:if>
	<s:else>
		<form id="mainForm" action="product-enquiry-${pid}.html" method="post">
			<div id="consult" class="mc tabcon">
				<s:iterator value="page.result" status="st">
					<div class="item <s:if test="st.even">odd</s:if>">        
						<div class="user">            
							<span class="u-name">会&#12288;&#12288;员：${user.nick}</span>
							<span class="u-level"><font style="color:">${user.province}${user.city}${user.area}</font></span>             
							<span class="date-ask"><s:date name="createdate" format="yyyy-MM-dd HH:mm"/></span>        
						</div>        
						<dl class="ask">            
							<dt><b></b>询价内容：</dt>
							<dd>${content}</dd>        
					   </dl> 
					   <s:iterator value="childs" status="st">       
						   <dl class="answer">            
						   	<dt><b></b>商城回复:</dt>            
						   	<dd>                
						   		<div class="reply">${content}</div>
						   		<div class="date-answer"><s:date name="createdate" format="yyyy-MM-dd HH:mm"/></div>            
						   	</dd>        
						   </dl> 
					   </s:iterator>   
					</div> 
				</s:iterator>   
			</div>
			<div class="m clearfix"><div class="pagin fr"><%@ include file="/common/page.jsp"%></div><!--pagin end--></div>
		</form>
	</s:else>
	<form id="enquiryForm"  method="post">
		<div class="Review_Form">
			<h5>开始询价：</h5>
			<div class="Re_Explain">请勿重复提交相同询价内容；如有其它疑问，欢迎通过联系我们中的电话方式联系商城工作人员！</div>
			<ul>
				<li>
					<label>品牌要求：</label>
					<input name="hasbrand" type="radio" id="hasbrand"  value="true"/>有
					<input name="hasbrand" type="radio" id="hasbrand"  value="true"/>无
					<span id="error_hasbrand"></span>
				</li>
				<li>
					<label style="vertical-align: top;">询价内容：</label><span  id="error_content"></span>
					<br/>
					<textarea class="area1" name="content" id="content" style="font-size: 14px;"></textarea>
					
				</li>
				<li>
					<label>采购意向：</label>
					<input name="hasbuy" type="radio" id="hasbuy"  value="true"/>有
					<input name="hasbuy" type="radio" id="hasbuy"  value="false"/>无
					<span id="error_hasbuy"></span>
				</li>
				
				<li>
					<label>采购数量：</label>
					<input name="buynum" type="text" id="buynum"  size="10" maxlength="6" value="面议"/></span>
					<span  id="error_buynum"></span>
				</li>
				<li>
					<label>期望采购价格：</label>
					<input name="buyprice" type="text" id="buyprice" value="面议"  size="10" maxlength="6" value="1"/>
					<span  id="error_buyprice"></span>
				</li>
				<li>
					<label>验证码：</label>
					<input name="rcode" type="text" id="rcode"  size="6" maxlength="6" title="看不清,请点击!"/>
					<img id="imgrcode" src="authImg" border="0" align="top" onclick="changeimg()" style='cursor: pointer;' title="看不清,请点击!" />
					<span id="error_rcode"></span>
				</li>
				<li class="buttons">
					<a id="getRefer" href="javascript:onEnquiry();">
						<img src="${ctx}/images/button_08.jpg" id="saveConsultation" border="0"/>
					</a>
				</li>
			</ul>
		</div>
	</form>
</body>
</html>
