<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/common/taglibs.jsp" %>
<%@page import="com.gm.machine.contant.Global"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<%@ include file="/common/meta.jsp" %>
	<title>东方农机商城(www.machine1688.com)-${typeName.label}</title>
	<meta content="${typeName.value}" name="activemenu" />
	<link href="${ctx}/css/backend.css" type="text/css" rel="stylesheet"/> 
	<script src="${ctx}/js/jquery.js" type="text/javascript"></script>
	<script src="${ctx}/js/jcommon.js" type="text/javascript"></script>
	<script  type="text/javascript">
	$(document).ready(function() {
		$("#checkall").click(function(){
 			$("input[name='ids']").attr("checked",$(this).attr("checked"));
 		});
	});
	function onBatchDelete(){
		var  isChecked=false;
		$("input[name='ids']:checked").each(function(){
			isChecked = true;
		});
		if(!isChecked){
			alert("选择删除的记录");
			return false;
		}

		if(confirm("确认删除？")){
			$("#mainForm").attr("action","advert!batchDelete.action?mtype=${mtype}").submit();
		}
	}
	function onPublish(){
		var  isChecked=false;
		$("input[name='ids']:checked").each(function(){
			isChecked = true;
		});
		if(!isChecked){
			alert("选择发布的记录");
			return false;
		}

		if(confirm("确认发布？")){
			$("#mainForm").attr("action","advert!publish.action?mtype=${mtype}").submit();
		}
	}
	function onCancel(){
		var  isChecked=false;
		$("input[name='ids']:checked").each(function(){
			isChecked = true;
		});
		if(!isChecked){
			alert("选择取消发布的记录");
			return false;
		}

		if(confirm("确认取消发布？")){
			$("#mainForm").attr("action","advert!cancelPublish.action?mtype=${mtype}").submit();
		}
	}
	
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
      				<h2 class="ll">${typeName.label}</h2>
    			</div>
    			<div class="detailbox">
					<div id="message" style="line-height:20px;">
						<s:actionmessage theme="custom" cssClass="tipbox"/>
					</div>
	    			<form id="mainForm" action="advert.action?mtype=${mtype}" method="post">
						<div class="search_box">
								<ul class="ll">
									<li class=" input">					
										<label class="ml20">标题</label>
										<input type="text" id="title" name="filter_LIKES_title" size="30" value="${param['filter_LIKES_title']}"/>
										<label class="ml20">状态</label>
				                     	<s:select list="#{'true':'已发布','false':'未发布'}"  id="ispublic" name="filter_EQB_ispublic"  value="#parameters.filter_EQB_ispublic" cssStyle="width:85px;" headerKey="" headerValue="--全 部--"/> 
									</li>
								</ul>
								<input class="button01 w60 rr forsubmit" value="搜 索" type="submit" />
						</div>
						<p class="ll mt15">
		    				<button id="btnCreate" type="button" onclick="window.location.href='advert!input.action?mtype=${mtype}'">新增</button>
		    				<button id="btnDelete" type="button" onclick="onBatchDelete();">删除</button>
		    				<button id="btnPublish" type="button" onclick="onPublish();">发布</button>
		    				<button id="btnCancel" type="button" onclick="onCancel();">取消发布</button>
	    				</p>
						<div class="tablebox">
		        			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="tablebg font333 ll collapse">
							    <tr>
							    	<th width="5%"><input type="checkbox" id="checkall" name="checkall"/></th>
							        <th width="20%">标题</th>
							        <th width="50%">图片</th>
							        <th width="10%">是否发布</th>
							        <th width="15%">操作</th>
							    </tr>
			    				<s:iterator value="page.result" status="st">
								   <tr>
								   		<td title=""><input type="checkbox" id="ids" name="ids" value="${id}"/></td>
								        <td title="${title}"><common:cut string="${title}" len="30"/></td>
								        <td><img src="..<%=Global.picpath%>/${picurl}" width="150" height="50"/></td>
								        <td>${statusName}</td>
								        <td>
								        	<a href="advert!input.action?id=${id}&mtype=${mtype}">修改</a>&nbsp;&nbsp;
								        	<a href="javaScript:delRecord('advert!delete.action?id=${id}&mtype=${mtype}');">删除</a>
								        </td>
								    </tr>
							    </s:iterator>
							    <s:if test="page.result.size ==0">
									<tr> 
										<td height="30" align="center" colspan="7"><font color="gray">没有符合条件的记录</font></td>
									</tr>  
								</s:if>      
			    			</table>
		    			</div>
		    			<%@ include file="/common/page.jsp"%>
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