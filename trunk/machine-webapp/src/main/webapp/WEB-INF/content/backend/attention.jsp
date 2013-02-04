<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/common/taglibs.jsp" %>
<%@page import="com.gm.machine.contant.Global"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<%@ include file="/common/meta.jsp" %>
	<title>东方农机商城(www.machine1688.com)-${product.name}-关注度</title>
	<meta content="product" name="activemenu" />
	<link href="${ctx}/css/backend.css" type="text/css" rel="stylesheet"/> 
	<script src="${ctx}/js/jquery.js" type="text/javascript"></script>
	<script src="${ctx}/js/jcommon.js" type="text/javascript"></script>
	<script  type="text/javascript">
	$(document).ready(function() {
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
      				<h2 class="ll">${product.name}-关注度</h2>
    			</div>
    			<div class="detailbox">
					<div id="message" style="line-height:20px;">
						<s:actionmessage theme="custom" cssClass="tipbox"/>
					</div>
	    			<form id="mainForm" action="attention.action?pid=${pid}" method="post">
	    				<div class="search_box">
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
										<img src="..<%=Global.picpath%>${product.picurl}" width="100" height="70"/>	
									</li>
								</ul>
								<input class="button01 w60 rr forsubmit" value="产品中心" onclick="location.href='product.action'" type="button" />
						</div>
						<div class="tablebox">
		        			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="tablebg font333 ll collapse">
							    <tr>
							        <th width="50%">关注时间</th>
							        <th width="50%">关注人</th>
							    </tr>
			    				<s:iterator value="page.result" status="st">
								   <tr>
								        <td><s:date name="createdate" format="yyyy-MM-dd HH:mm"/></td>
								        <td>${user.loginName}(${user.nick})</td>
								    </tr>
							    </s:iterator>
							    <s:if test="page.result.size ==0">
									<tr> 
										<td height="30" align="center" colspan="2"><font color="gray">没有符合条件的记录</font></td>
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