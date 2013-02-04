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
			$("#postForm").validate({
				rules: {
					remark: {
						required:true,
						maxlength:200
					},
					rcode: {
						required:true
					}
				},
				messages: {
					remark: {
						required: "请输入评价内容",
						maxlength:"字数不能超过200"
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
		function onPost(){
			if($("#postForm").valid()){
				$.post("index!isLogin.excsec",{},function(data) {
				    if (data=="true") {
				    	$.post("post!save.excsec",{rcode:$("#rcode").val(),remark:$("#remark").val(),pid:"${pid}"},function(rdata) {
					    	if(rdata=='发表成功'){
					    		$("#rcode").val('');
					    		$("#remark").val('');
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
		<div><font color="gray">此商品暂无评价!</font></div>  
	</s:if>
	<s:else>
		<form id="mainForm" action="product-post-${pid}.html" method="post">
			<div id="consult" class="mc tabcon">
				<s:iterator value="page.result" status="st">
					<div class="item <s:if test="st.even">odd</s:if>">        
						<div class="user">            
							<span class="u-name">会&#12288;&#12288;员：${user.nick}</span>
							<span class="u-level"><font style="color:">${user.province}${user.city}${user.area}</font></span>             
							<span class="date-ask"><s:date name="createdate" format="yyyy-MM-dd HH:mm"/></span>        
						</div>        
						<dl class="ask">            
							<dt><b></b>评价内容：</dt>
							<dd>${remark}</dd>        
					   </dl> 
					   <s:iterator value="childs" status="st">       
						   <dl class="answer">            
						   	<dt><b></b>${user.nick}回复:</dt>            
						   	<dd>                
						   		<div class="reply">${remark}</div>
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
	<form id="postForm"  method="post">
		<div class="Review_Form">
			<h5>发表评价：</h5>
			<div class="Re_Explain">请勿重复提交相同评价；如有其它疑问，欢迎通过联系我们中的电话方式联系商城工作人员！</div>
			<ul>
				<li>
					<label style="vertical-align: top;">评价内容：</label><span  id="error_remark"></span>
					<br/>
					<textarea class="area1" name="remark" id="remark" style="font-size: 14px;"></textarea>
					
				</li>
				<li>
					<label>验证码：</label>
					<input name="rcode" type="text" id="rcode"  size="6" maxlength="6" title="看不清,请点击!"/>
					<img id="imgrcode" src="authImg" border="0" align="top" onclick="changeimg()" style='cursor: pointer;' title="看不清,请点击!" />
					<span id="error_rcode"></span>
				</li>
				<li class="buttons">
					<a id="getRefer" href="javascript:onPost();">
						<img src="${ctx}/images/button_08.jpg" id="saveConsultation" border="0"/>
					</a>
				</li>
			</ul>
		</div>
	</form>
</body>
</html>
