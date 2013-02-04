<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/common/taglibs.jsp" %>
<%@page import="com.gm.machine.util.CommonUtils"%>
<%@page import="com.gm.machine.contant.Global"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<%@ include file="/common/meta.jsp" %>
	<title>东方农机商城(www.machine1688.com)-产品管理</title>
	<meta content="product" name="activemenu" />
	<link href="${ctx}/js/validate/jquery.validate.css" type="text/css" rel="stylesheet"/>
	<link href="${ctx}/css/backend.css" type="text/css" rel="stylesheet"/>
	<link href="${ctx}/css/layer.css" rel="stylesheet" type="text/css"/> 
	<link href="${ctx}/css/fancybox/jquery.fancybox-1.3.4.css" rel="stylesheet" type="text/css" media="screen" />
	<link rel="stylesheet" href="${ctx}/KindEditor/themes/default/default.css" />
	<link rel="stylesheet" href="${ctx}/KindEditor/plugins/code/prettify.css" />
	<script src="${ctx}/js/jquery.js" type="text/javascript"></script>
	<script src="${ctx}/js/ajaxfileupload.js" type="text/javascript"></script>
	<script src="${ctx}/js/layer.js" type="text/javascript"></script>
	<script src="${ctx}/js/jcommon.js" type="text/javascript"></script>
	<script src="${ctx}/js/PCASClass.js" type="text/javascript"></script>
	<script type="text/javascript" src="${ctx}/js/fancybox/jquery.mousewheel-3.0.4.pack.js"></script>
	<script type="text/javascript" src="${ctx}/js/fancybox/jquery.fancybox-1.3.4.pack.js"></script>
	<script src="${ctx}/js/validate/jquery.validate.js" type="text/javascript"></script>
	<script src="${ctx}/js/validate/messages_cn.js" type="text/javascript"></script>
	<script type="text/javascript" src="${ctx}/KindEditor/kindeditor-min.js"></script>
	<script type="text/javascript" src="${ctx}/KindEditor/lang/zh_CN.js"></script>
	<script type="text/javascript">
	$(document).ready(function() {
		//聚焦第一个输入框
		$("a#picexample").fancybox();
		$("#title").focus();
		$("#inputForm").validate({
			rules: {
				name: {
					required:true
				},
				brandid: {
					required:true
				},
				threecatid: {
					required:true
				},
				standard:{
					required:true
				},
				price:{
					required:true
				},
				city:{
					required:true
				},
				picurl:{
					required:true
				}
			},
			messages: {
				name: {
					required: "请输入名称"
				},
				brandid: {
					required: "请选择品牌"
				},
				threecatid: {
					required:"请选择分类"
				},
				standard:{
					required:"请输入规格"
				},
				price:{
					required:"请输入价格"
				},
				city:{
					required:"请选择产地"
				},
				picurl:{
					required:"请上传配图"
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
	var htmlEditor = null;
	KindEditor.ready(function(K) {
		htmlEditor = K.create('textarea[name=remark]', {
			cssPath : '${ctx}/KindEditor/themes/default/default.css',
			uploadJson : '${ctx}/KindEditor/jsp/upload_json.jsp',
			fileManagerJson : '${ctx}/KindEditor/jsp/file_manager_json.jsp',
			allowFileManager : true	//允许查看文件
		});
	});
	function onSubmit() {
		 if($("#inputForm").valid()){
		 if(!htmlEditor.isEmpty()){
		 	$("#remark").val(htmlEditor.html());
		 	$("#inputForm").submit();
		 }	else{
		 	alert("内容不能为空");
		 }
		}
	}
	document.onkeydown = function(e){    
		e = e || window.event;   
		if(e.keyCode === 13){        
		 onSubmit();   
		}
	};


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
      				<h2 class="ll"><s:if test="id!=null">编辑</s:if><s:else>新增</s:else>产品</h2>
    			</div>
    			<div class="detailbox">
				<form id="inputForm" name="inputForm" action="product!save.action" method="post">
					<input type="hidden" id="id" name="id" value="${id}"/>
	    			<div id="news_edit" class="form input mb20">
			    	<ul>
						<li>以下有<cite>*</cite>的内容为必填项：</li>
						<li>
				  			<label>名称<cite>*</cite></label>
				  			<input id="name" name="name" value="${name}" type="text" maxlength="100" style="width:300px;" />
				  		</li>
				  		<li>
				  			<label>品牌<cite>*</cite></label>
				  			<s:select list="brandList"   listKey="id" listValue="name" id="brandid" name="brandid"  value="@java.lang.Long@parseLong(bid)" cssStyle="width:150px;" headerKey="" headerValue="--全 部--"/> 
				  		</li>
				  		<li>
				  			<label>所属分类<cite>*</cite></label>
							<s:select list="oneCatList"   listKey="id" listValue="name" id="onecatid" name="onecatid" onchange="showTwoCat();" value="@java.lang.Long@parseLong(onecatid)"   cssStyle="width:120px;" headerKey="" headerValue="--全 部--"/> 
							<s:select list="twoCatList"   listKey="id" listValue="name" id="twocatid" name="twocatid" onchange="showThreeCat()" value="@java.lang.Long@parseLong(twocatid)"   cssStyle="width:120px;" headerKey="" headerValue="--全 部--"/> 
				            <s:select list="threeCatList" listKey="id" listValue="name" id="threecatid" name="threecatid" value="@java.lang.Long@parseLong(threecatid)"   cssStyle="width:150px;" headerKey="" headerValue="--全 部--"/> 
						    <span id="error_threecatid"></span>
				  		</li>
				  		<li>
				  			<label>规格<cite>*</cite></label>
				  			<input id="standard" name="standard" value="${standard}" type="text" maxlength="100" style="width:300px;" />
				  		</li>
				  		<li>
				  			<label>价格<cite>*</cite></label>
				  			<input id="price" name="price" value="${price}" type="text" maxlength="100" style="width:300px;" />
				  		</li>
				  		<li>
				  			<label>产地<cite>*</cite></label>
				  			<select id="province" name="province"></select>
							<select id="city" name="city"></select>
							<select id="area" name="area"></select><span id="error_city" ></span>
							<script type="text/javascript">
								new PCAS("province","city","area","${province}","${city}","${area}");
							</script>
				  		</li>
				  		<li>
				  			<label>配图<cite>*</cite></label>
				  			<input name="file" type="file" id="file" class="input" onchange="ajaxUploadPic('../upload.excsec');"/>
	        				<span id="picspan">
	        					<s:if test="picurl!=null">
	        						<a id="picexample" href="..<%=Global.picpath%>${picurl}">预览</a>
	        					</s:if>
	        					<s:else>
	        						<a id="picexample" href="" style="display:none">查看</a>
	        					</s:else>
	        				</span>
	        				<input type="hidden" id="picurl" name="picurl" value="${picurl}"/>
	        				<input type="hidden" id="baseurl" name="baseurl" value="..<%=Global.picpath%>"/>
				  		</li>
				  		<li >
				  			<label style="vertical-align: top;">内容</label>
				  			<textarea id="remark" name="remark" cols="100" rows="8" style="width:750px;height:270px;visibility:hidden;">${remark}</textarea>
		        			<span id="error_remark"></span>
				  		</li>
					</ul>
					</div>    
	 				<div class=" buttonbox lh32 tc">
	                        <input class="button01 w90 ll" type="submit"  value="保 存" />
							<input class="button02 w60 rr ml20" type="button" type="button" onclick="location.href='product.action'" value="取消" />
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