<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/common/taglibs.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>  
	<%@ include file="/common/meta.jsp" %>
	<meta content="my_post" name="activemenu" />
	<link href="${ctx}/js/validate/jquery.validate.css" type="text/css" rel="stylesheet"/>
	<link href="${ctx}/css/base.css" rel="stylesheet" type="text/css" /> 
	<link href="${ctx}/css/userbase.css" rel="stylesheet" type="text/css" />
	<link href="${ctx}/css/userfov.css" rel="stylesheet" type="text/css" />
	<script src="${ctx}/js/jquery.js" type="text/javascript"></script>
	<script src="${ctx}/js/validate/jquery.validate.js" type="text/javascript"></script>
	<script src="${ctx}/js/validate/messages_cn.js" type="text/javascript"></script>
	<script type="text/javascript" src="${ctx}/js/base-v1.js"></script>
	<script  type="text/javascript">
	$(document).ready(function() {
		//聚焦第一个输入框
		$("#inputForm").validate({
			rules: {
				remark: {
					required:true,
					maxlength:200
				}
			},
			messages: {
				remark: {
					required: "请输入回复内容",
					maxlength:"字数不能超过200"
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
		<div class="detailbox">
    				<div class="product_box">
	   					<ul class="ll">
							<li style="float:left">
								<img src="..<%=Global.picpath%>${product.picurl}" width="200" height="150"/>	
							</li>
							<li style="float:right">					
								<div style="margin-top:15px;"><label>产品名称:</label>${product.name}</div>	
								<div style="margin-top:15px;"><label class="ml20" >产品规格:</label>${product.standard}</div>
								<div style="margin-top:15px;">
									<label class="ml20">所属分类:</label>
									${product.category.parent.parent.name}&gt;${product.category.parent.name}&gt;${product.category.name}
								</div>
								<div style="margin-top:15px;">
									<label class="ml20">产地:</label>
									${product.province}&gt;${product.city}
								</div>			
							</li>
						 </ul>
	    			</div>
	    			<span class="clr"></span>
	    			<div id="consult" class="mc tabcon">
    				<div class="item">        
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
					</div>
    				
					<form id="inputForm" name="inputForm" action="post!save.action?pid=${pid}" method="post">
						<input type="hidden" id="parentid" name="parentid" value="${id}"/>
		    			<div id="news_edit" class="form" >
				    	<ul>
							<li>以下有<em>*</em>的内容为必填项：</li>
					  		<li >
					  			<label style="vertical-align: top;">内容<em>*</em></label>
					  			<textarea id="remark" name="remark" cols="100" rows="8" style="width:540px;height:60px;"></textarea>
			        			<span id="error_remark"></span>
					  		</li>
						</ul>
						</div>  
						<span class="clr"></span>  
		 				<div class=" buttonbox lh32 tc" style="margin-top:15px;">
		                        <input class="button01 w90 ll" type="submit"  value="回复" />
								<input class="button02 w60 rr ml20" type="button" type="button" onclick="location.href='post.action'" value="返回" />
	                    </div>
		 			</form>
 			</div>
    </div>
    <span class="clr"></span>
</div>
<%@ include file="/common/footer.jsp" %>
<script type="text/javascript" src="${ctx}/js/common.js"></script>
</body>
</html>
