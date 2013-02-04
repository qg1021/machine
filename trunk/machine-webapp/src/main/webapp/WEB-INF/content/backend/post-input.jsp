<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/common/taglibs.jsp" %>
<%@page import="com.gm.machine.util.CommonUtils"%>
<%@page import="com.gm.machine.contant.Global"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<%@ include file="/common/meta.jsp" %>
	<title>东方农机商城(www.machine1688.com)-评价</title>
	<meta content="product" name="activemenu" />
	<link href="${ctx}/js/validate/jquery.validate.css" type="text/css" rel="stylesheet"/>
	<link href="${ctx}/css/backend.css" type="text/css" rel="stylesheet"/>
	<link href="${ctx}/css/layer.css" rel="stylesheet" type="text/css"/> 
	<script src="${ctx}/js/jquery.js" type="text/javascript"></script>
	<script src="${ctx}/js/ajaxfileupload.js" type="text/javascript"></script>
	<script src="${ctx}/js/layer.js" type="text/javascript"></script>
	<script src="${ctx}/js/jcommon.js" type="text/javascript"></script>
	<script src="${ctx}/js/validate/jquery.validate.js" type="text/javascript"></script>
	<script src="${ctx}/js/validate/messages_cn.js" type="text/javascript"></script>
	<script type="text/javascript">
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
		        }
		}); 
	});
	function  onDisplay(id) {
		if(confirm("确认要显示?")) {
			$.post("post!display.action",{"id":id},function(data) {
				
				if(data=='显示成功'){
					$("#button_"+id).html("<a style='cursor:pointer;' onclick='onDisable("+id+");'>屏蔽</a>");
				}
				
			});
		}
	}
	function  onDisable(id) {
		if(confirm("确认要屏蔽?")) {
			$.post("post!disable.excsec",{"id":id},function(data) {
				if(data=='屏蔽成功'){
					$("#button_"+id).html("<a style='cursor:pointer;' onclick='onDisplay("+id+");'>显示</a>");
				}
				
				
			});
		}
	}


</script>
</head>
<body>
	<div id="fullbg"></div> 
		<!-- end JS遮罩层 --> 
		<!-- 对话框 --> 
		<div id="dialog"> 
			<div id="dialog_content"></div> 
		</div>
		<%@include file="/common/adminheader.jsp" %>
		<!-- 正文内容 start -->
		<div id="content"> 
		    <!-- 左侧菜单 总shell start -->
		    <%@include file="/common/adminleft.jsp" %>
		    <div class="mainpart">
    			<div class="title">
      				<h2 class="ll">回复评价</h2>
    			</div>
    			<div class="detailbox">
    				<div class="product_box">
	   					<ul class="ll">
							<li>					
								<label class="ml20" style="vertical-align:top;">产品名称:</label>
								${product.name}	
								<label class="ml20" style="vertical-align:top;">产品规格:</label>
								${product.standard}
								<label class="ml20" style="vertical-align:top;">所属分类:</label>
								${product.category.parent.parent.name}&gt;${product.category.parent.name}&gt;${product.category.name}
								<label class="ml20" style="vertical-align: top;">产地:</label>
								${product.province}&gt;${product.city}			
							</li>
							<li>
								<label class="ml20" style="vertical-align: top;">产品图片:</label>
								<img src="..<%=Global.picpath%>${product.picurl}" width="120" height="90"/>	
							</li>
						 </ul>
	    			</div>
    				<span class="rr">评论人：${user.nick} 评论时间：<s:date name="createdate" format="yyyy-MM-dd HH:mm"/></span>
    				<div style="width:80%;">
    					${remark}
    				</div>
    				<s:iterator value="childs">
	    				<div class="childtie">
	    					<div style="vertical-align: top;" class="rr">
	    						回复人：${user.nick} 回复时间：<s:date name="createdate" format="yyyy-MM-dd HH:mm"/>
	    						<span id="button_${id}">
	    						<s:if test="status">
					        		<a style='cursor:pointer;' onclick="onDisplay(${id});">显示</a>
					        	</s:if>
					        	<s:else>
					        		<a style='cursor:pointer;'  onclick="onDisable(${id});">屏蔽</a>
					        	</s:else>
					        	</span>
	    					</div>
	    					${remark}
	    				</div>
    				</s:iterator>
    				
					<form id="inputForm" name="inputForm" action="post!save.action?pid=${pid}" method="post">
						<input type="hidden" id="parentid" name="parentid" value="${id}"/>
		    			<div id="news_edit" class="form input mb20">
				    	<ul>
							<li>以下有<cite>*</cite>的内容为必填项：</li>
					  		<li >
					  			<label style="vertical-align: top;">内容<cite>*</cite></label>
					  			<textarea id="remark" name="remark" cols="100" rows="8" style="width:540px;height:60px;"></textarea>
			        			<span id="error_remark"></span>
					  		</li>
						</ul>
						</div>    
		 				<div class=" buttonbox lh32 tc">
		                        <input class="button01 w90 ll" type="submit"  value="回复" />
								<input class="button02 w60 rr ml20" type="button" type="button" onclick="location.href='post.action?pid=${pid}'" value="返回" />
	                    </div>
		 			</form>
 			</div>
 			</div>
    		<!-- 右侧内容 end --> 
			<p class=" del_float"></p>
		</div>
		<!-- 正文内容 end --> 
		<%@include file="/common/adminfooter.jsp" %>
</body>
</html>