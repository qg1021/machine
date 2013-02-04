<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/common/taglibs.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta content="${typeName.value}" name="activemenu" />
	<title>东方农机商城(www.machine1688.com)-${typeName.label}</title>
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
					required:true,
					maxlength: 30,
					remote: "basedata!ajaxCheckName.excsec?type=${mtype}&oldName=" + encodeURIComponent('${name}')
				}
			},
			messages: {
				name: {
					required: "请输入名称",
					maxlength: "字数不能超过20",
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
		    <%@include file="/common/adminleft.jsp" %>
    		<div class="mainpart">
    			<div class="title">
      				<h2 class="ll"><s:if test="id!=null">编辑</s:if><s:else>新增</s:else>${typeName.label}</h2>
    			</div>
    			<div class="detailbox">
					<form id="inputForm" name="inputForm" action="basedata!save.action?mtype=${mtype}" method="post">
						<input type="hidden" id="id" name="id" value="${id}"/>
						<input type="hidden" id="type" name="type" value="${mtype}"/>
						<div id="news_edit" class="form input mb20">
			    			<ul>
								<li>以下有<cite>*</cite>的内容为必填项：</li>
						  		<li>
						  			<label>数据名称<cite>*</cite></label>
						  			<input id="name" name="name" value="${name}" type="text" maxlength="100" style="width:300px;" />
						  		</li>
						  		<li >
						  			<label style="vertical-align: top;">备注</label>
						  			<textarea rows="3" cols="50" id="remark" name="remark">${remark}</textarea>
						  		</li>
					  		</ul>
					  	</div>
						<div class=" buttonbox lh32 tc">
	                        <input class="button01 w90 ll" type="submit"  value="保 存" />
							<input class="button02 w60 rr ml20" type="button" type="button" onclick="location.href='basedata.action?mtype=${mtype}'" value="取消" />
                    	</div>
						
					</form>
				</div>
			</div>
			<!-- 右侧内容 column  end-->    
		</div> <!-- content  end--> 
		<p class=" del_float"></p>
		<%@include file="/common/adminfooter.jsp" %> 
</body>
</html>