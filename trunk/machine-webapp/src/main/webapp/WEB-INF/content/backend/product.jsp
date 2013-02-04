<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/common/taglibs.jsp" %>
<%@page import="com.gm.machine.contant.Global"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<%@ include file="/common/meta.jsp" %>
	<title>东方农机商城(www.machine1688.com)-产品管理</title>
	<meta content="product" name="activemenu" />
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
			$("#mainForm").attr("action","product!batchDelete.action").submit();
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
			$("#mainForm").attr("action","product!publish.action").submit();
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
			$("#mainForm").attr("action","product!cancelPublish.action").submit();
		}
	}
	function onRecommend(){
		var  isChecked=false;
		$("input[name='ids']:checked").each(function(){
			isChecked = true;
		});
		if(!isChecked){
			alert("选择推荐的记录");
			return false;
		}

		if(confirm("确认推荐？")){
			$("#mainForm").attr("action","product!batchRecommend.action").submit();
		}
	}
	function onCancelRecommend(){
		var  isChecked=false;
		$("input[name='ids']:checked").each(function(){
			isChecked = true;
		});
		if(!isChecked){
			alert("选择取消推荐的记录");
			return false;
		}

		if(confirm("确认取消推荐？")){
			$("#mainForm").attr("action","product!batchCancelRecommend.action").submit();
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
      				<h2 class="ll">产品管理</h2>
    			</div>
    			<div class="detailbox">
					<div id="message" style="line-height:20px;">
						<s:actionmessage theme="custom" cssClass="tipbox"/>
					</div>
	    			<form id="mainForm" action="product.action" method="post">
						<div class="search_box">
								<ul class="ll">
									<li class=" input">					
										<label class="ml20">产品名称</label>
										<input type="text" id="name" name="filter_LIKES_name" size="30" value="${param['filter_LIKES_name']}"/>
										<label class="ml20">品 牌</label>
				                     	<s:select list="brandList"   listKey="id" listValue="name" name="filter_EQL_bid"  value="@java.lang.Long@parseLong(#parameters.filter_EQL_bid)" cssStyle="width:150px;" headerKey="" headerValue="--全 部--"/> 
										<label class="ml20">状态</label>
				                     	<s:select list="#{'true':'已发布','false':'未发布'}"  id="status" name="filter_EQB_status"  value="#parameters.filter_EQB_status" cssStyle="width:85px;" headerKey="" headerValue="--全 部--"/> 
									</li>
									<li class=" input">					
										<label class="ml20">一级分类</label>
										<s:select list="oneCatList"   listKey="id" listValue="name" id="onecatid" name="filter_EQL_onecatid" onchange="showTwoCat();" value="@java.lang.Long@parseLong(#parameters.filter_EQL_onecatid)"   cssStyle="width:150px;" headerKey="" headerValue="--全 部--"/> 
										<label class="ml20">二级分类</label>
				                     	<s:select list="twoCatList"   listKey="id" listValue="name" id="twocatid" name="filter_EQL_twocatid" onchange="showThreeCat()" value="@java.lang.Long@parseLong(#parameters.filter_EQL_twocatid)"   cssStyle="width:150px;" headerKey="" headerValue="--全 部--"/> 
										<label class="ml20">三级分类</label>
				                     	<s:select list="threeCatList"   listKey="id" listValue="name" id="threecatid" name="filter_EQL_threecatid" value="@java.lang.Long@parseLong(#parameters.filter_EQL_threecatid)"   cssStyle="width:150px;" headerKey="" headerValue="--全 部--"/> 
									</li>
									<li class=" input">	
										<label class="ml20">推荐状态</label>
				                     	<s:select list="#{'true':'已推荐','false':'未推荐'}"  id="recommend" name="filter_EQB_recommend"  value="#parameters.filter_EQB_recommend" cssStyle="width:85px;" headerKey="" headerValue="--全 部--"/> 				
									</li>
								</ul>
								<input class="button01 w60 rr forsubmit" value="搜 索" type="submit" />
						</div>
						<p class="ll mt15">
		    				<button id="btnCreate" type="button" onclick="window.location.href='product!input.action'">新增</button>
		    				<button id="btnDelete" type="button" onclick="onBatchDelete();">删除</button>
		    				<button id="btnPublish" type="button" onclick="onPublish();">发布</button>
		    				<button id="btnCancel" type="button" onclick="onCancel();">取消发布</button>
		    				<button id="btnPublish" type="button" onclick="onRecommend();">推荐</button>
		    				<button id="btnCancel" type="button" onclick="onCancelRecommend();">取消推荐</button>
	    				</p>
						<div class="tablebox">
		        			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="tablebg font333 ll collapse">
							    <tr>
							    	<th width="5%"><input type="checkbox" id="checkall" name="checkall"/></th>
							        <th width="15%">名称</th>
							        <th width="24%">所属分类</th>
							        <th width="10%">所属品牌</th>
							        <th width="8%">关注度</th>
							        <th width="8%">评价数</th>
							        <th width="8%">询价数</th>
							        <th width="10%">是否发布</th>
							        <th width="12%">操作</th>
							    </tr>
			    				<s:iterator value="page.result" status="st">
								   <tr>
								   		<td title=""><input type="checkbox" id="ids" name="ids" value="${id}"/></td>
								        <td title="${name}">
								        	<common:cut string="${name}" len="20"/>
								        	<s:if test="recommend">
								        		<font color="red">*已推荐*</font>
								        	</s:if>
								        </td>
								        <td>${category.parent.parent.name}&gt;${category.parent.name}&gt;${category.name}</td>
								        <td>${brand.name}</td>
								        <td title="查看关注度"><a href="attention.action?pid=${id}">${attnum}</a></td>
								        <td title="查看评价数"><a href="post.action?pid=${id}">${postnum}</a></td>
								        <td title="回复询价"><a href="enquiry.action?pid=${id}">${ennum}</a></td>
								        <td>${statusName}</td>
								        <td>
								        	<a href="product!input.action?id=${id}">修改</a>&nbsp;&nbsp;
								        	<a href="javaScript:delRecord('product!delete.action?id=${id}');">删除</a>
								        </td>
								    </tr>
							    </s:iterator>
							    <s:if test="page.result.size ==0">
									<tr> 
										<td height="30" align="center" colspan="9"><font color="gray">没有符合条件的记录</font></td>
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