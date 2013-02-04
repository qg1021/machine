<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/common/taglibs.jsp" %>
<%@page import="com.gm.machine.contant.Global"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<%@ include file="/common/meta.jsp" %>
	<title>东方农机商城(www.machine1688.com)-${product.name}-询价</title>
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
	function onDisplay(){
		var  isChecked=false;
		$("input[name='ids']:checked").each(function(){
			isChecked = true;
		});
		if(!isChecked){
			alert("选择显示的记录");
			return false;
		}

		if(confirm("确认显示？")){
			$("#mainForm").attr("action","enquiry!batchDisplay.action?pid=${pid}").submit();
		}
	}
	function onDisable(){
		var  isChecked=false;
		$("input[name='ids']:checked").each(function(){
			isChecked = true;
		});
		if(!isChecked){
			alert("选择屏蔽的记录");
			return false;
		}

		if(confirm("确认屏蔽？")){
			$("#mainForm").attr("action","enquiry!batchDisable.action?pid=${pid}").submit();
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
      				<h2 class="ll">${product.name}-询价</h2>
    			</div>
    			<div class="detailbox">
					<div id="message" style="line-height:20px;">
						<s:actionmessage theme="custom" cssClass="tipbox"/>
					</div>
	    			<form id="mainForm" action="enquiry.action?pid=${pid}" method="post">
	    				<div class="product_box">
	    					<ul class="ll">
								<li>					
									<label class="ml20" style="vertical-align: top;">产品名称:</label>
									${product.name}	
									<label class="ml20" style="vertical-align: top;">产品规格:</label>
									${product.standard}
									<label class="ml20" style="vertical-align: top;">所属分类:</label>
									${product.category.parent.parent.name}&gt;${product.category.parent.name}&gt;${product.category.name}
									<label class="ml20" style="vertical-align: top;">产地:</label>
									${product.province}&gt;${product.city}
														
								</li>
								<li>
									<label class="ml20" style="vertical-align: top;">产品图片:</label>
									<img src="..<%=Global.picpath%>${product.picurl}" width="120" height="90"/>	
								</li>
							 </ul>
							 <input class="button01 w60 rr forsubmit" value="产品中心" onclick="location.href='product.action'" type="button" />
	    				</div>
	    				<div class="search_box">
								<ul class="ll">
									<li class=" input">					
										<label class="ml20">状态</label>
				                     	<s:select list="#{'true':'已屏蔽','false':'未屏蔽'}"  id="status" name="filter_EQB_status"  value="#parameters.filter_EQB_status" cssStyle="width:85px;" headerKey="" headerValue="--全 部--"/> 
									</li>
								</ul>
								<input class="button01 w60 rr forsubmit" value="查询" onclick="location.href='product.action'" type="submit" />
								
						</div>
						<p class="ll mt15">
		    				<button id="btnDisplay" type="button" onclick="onDisplay();">显示</button>
		    				<button id="btnCancel" type="button" onclick="onDisable();">屏蔽</button>
	    				</p>
						<div class="tablebox">
		        			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="tablebg font333 ll collapse">
							    <tr>
							    	<th width="5%"><input type="checkbox" id="checkall" name="checkall"/></th>
							        <th width="18%">询价时间</th>
							        <th width="18%">询价人</th>
							        <th width="10%">状态</th>
							        <th width="38%">标题</th>
							        <th width="11%">操作</th>
							    </tr>
			    				<s:iterator value="page.result" status="st">
								   <tr>
								   		<td title=""><input type="checkbox" id="ids" name="ids" value="${id}"/></td>
								        <td><s:date name="createdate" format="yyyy-MM-dd HH:mm"/></td>
								        <td>${user.loginName}(${user.nick})</td>
								        <td>${statusName}</td>
								        <td>${title}</td>
								        <td>
								        	<a href="enquiry!input.action?id=${id}&pid=${productid}">查看</a>
								        	<s:if test="status">
								        		<a href="enquiry!batchDisplay.action?ids=${id}&pid=${productid}">显示</a>
								        	</s:if>
								        	<s:else>
								        		<a href="enquiry!batchDisable.action?ids=${id}&pid=${productid}">屏蔽</a>
								        	</s:else>
								        </td>
								    </tr>
							    </s:iterator>
							    <s:if test="page.result.size ==0">
									<tr> 
										<td height="30" align="center" colspan="6"><font color="gray">没有符合条件的记录</font></td>
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