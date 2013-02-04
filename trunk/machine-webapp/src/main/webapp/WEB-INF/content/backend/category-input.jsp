<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/common/taglibs.jsp" %>
<%@page import="com.gm.machine.util.CommonUtils"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<%@ include file="/common/meta.jsp" %>
	<title>东方农机商城(www.machine1688.com)-产品分类管理</title>
	<meta content="category" name="activemenu" />
	<link href="${ctx}/css/backend.css" type="text/css" rel="stylesheet"/> 
	<link href="${ctx}/js/validate/jquery.validate.css" type="text/css" rel="stylesheet"/>
	<script src="${ctx}/js/jquery.js" type="text/javascript"></script>
	<script src="${ctx}/js/validate/jquery.validate.js" type="text/javascript"></script>
	<script src="${ctx}/js/validate/messages_cn.js" type="text/javascript"></script>
	<script type="text/javascript">
	$(document).ready(function() {
		//聚焦第一个输入框
		$("#name").focus();
		$("#inputForm").validate({
 			rules: {
	 			name: {
					required: true,
					maxlength: 20,
					remote: "category!ajaxCheckName.excsec?parentId=${parentId}&oldName=" + encodeURIComponent('${name}')
				}  
 			},
 			messages: {
 				name: {
 					required: "请输入栏目名称",
 					maxlength: "栏目名称最多为20个字符",
 					remote: "此名称已存在"
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

</script>
</head>
<body>
		<%@include file="/common/adminheader.jsp" %>
		<!-- 正文内容 start -->
		<div id="content"> 
		    <!-- 左侧菜单 总shell start -->
		    <%@include file="/common/adminleft.jsp" %>
		    <!-- 左侧菜单 总shell end --> 
		    
			<!-- 右侧内容 start -->
    		<div class="mainpart"> 
				<div class="title">
      				<h2 class="ll"><s:if test="id!=null">编辑</s:if><s:else>新增</s:else>分类</h2>
    			</div>
    			<div class="detailbox">
					<form id="inputForm" action="category!save.action" method="post">
						<input type="hidden" name="id" id="id" value="${id}"/>
						<input type="hidden" name="parentId" id="parentId" value="${parentId}"/>　
						<input type="hidden" name="oldName" id="oldName" value="${name}"/>　
		    			<div id="news_edit" class="form input mb20">
			    			<ul>
								<li>以下有<cite>*</cite>的内容为必填项：</li>
								<li> 
		            				<label>栏目名称<cite>*</cite></label>
		            				<input type="text" value="${name}" id="name" name="name" style="width:180px;" maxlength="30"/>
		          				</li>
		          				<li>
		          					<label>分类等级</label>
		          					<input type="text" value="<s:if test="id!=null">${category.cattype}</s:if><s:else><s:if test="parentId ==null || parentId==0">1</s:if><s:else>${category.cattype+1}</s:else></s:else>" name="cattype" readonly="readonly" style="width:180px;background: #CBCBCB;"/> 
		         		 		</li>
		         		 		<li>
		            				<label>上级栏目名称</label>
		            				<input type="text" value="<s:if test="id != null">${category.parent.name}</s:if><s:else>${category.name}</s:else>" name="parentName" disabled="disabled" style="width:180px;"/>  
		          				</li>
							</ul> 
						</div>
						<div class=" buttonbox lh32 tc">
	                        <input class="button01 w90 ll" type="submit" value="保 存" />
							<input class="button02 w60 rr ml20" type="button" type="button" onclick="location.href='category.action?parentId=${parentId}';" value="取消" />
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