<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/common/taglibs.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<%@ include file="/common/meta.jsp" %>
	<title>东方农机商城(www.machine1688.com)-产品分类管理</title>
	<meta content="category" name="activemenu" />
	<link href="${ctx}/css/backend.css" type="text/css" rel="stylesheet"/> 
	<script src="${ctx}/js/jquery.js" type="text/javascript"></script>
	<script src="${ctx}/js/jcommon.js" type="text/javascript"></script>
	<script  type="text/javascript">
	$(document).ready(function() {
		$("#checkall").click(function(){
 			$("input[id='ids']").attr("checked",$(this).attr("checked"));
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
			$("#mainForm").attr("action","category!delete.action").submit();
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
      				<h2 class="ll">产品分类管理</h2>
    			</div>
    			<div class="detailbox">
				<div id="message" style="line-height: 35px;">
					<s:actionmessage theme="custom" cssClass="tipbox"/>
				</div>
    			<form id="mainForm" action="category.action" method="post">
    				<div class="search_box">
						<ul class="ll">
							<li class=" input">					
								<label class="ml20">名称</label>
								<input type="text" id="title" name="filter_LIKES_name" size="30" value="${param['filter_LIKES_name']}"/>
								<label class="ml20">首页推荐一</label>
				                <s:select list="#{'true':'是','false':'否'}"  id="rone" name="filter_EQB_rone"  value="#parameters.filter_EQB_rone" cssStyle="width:85px;" headerKey="" headerValue="--全 部--"/> 	
				                <label class="ml20">首页推荐二</label>
				               	<s:select list="#{'true':'是','false':'否'}"  id="rtwo" name="filter_EQB_rtwo"  value="#parameters.filter_EQB_rtwo" cssStyle="width:85px;" headerKey="" headerValue="--全 部--"/> 	
							</li>
						</ul>
						<input class="button01 w60 rr forsubmit" value="搜 索" type="submit" />
					</div> 
					<input type="hidden" name="parentId" id="parentId" value="${parentId}"/>
					<s:if test="parentId != null && parentId!=0">
						<div style="height: 25px;"><a href="category.action?parentId=${category.pid}">返回上级栏目</a>(${category.name})</div>
						<br/>
					</s:if>
					<p class="ll mt15">
						<button id="btnCreate" type="button" onclick="location.href='category!input.action?parentId=${parentId}'">新增</button>
						<button id="btnDelete" type="button" onclick="onBatchDelete();">删除</button>
						<button id="btnHtml" type="button" onclick="location.href='category!createHtml.action?parentId=${parentId}'">生成首页静态页</button>
					</p>
					<div class="tablebox">
        				<table width="100%" border="0" cellspacing="0" cellpadding="0" class="tablebg font333 ll collapse">
							<tr>
			       	 			<th width="5%"><input type="checkbox" id="checkall" name="checkall"/></th>
			          			<th width="5%" >No</th>
					  			<s:if test="parentId != null && parentId!=0">
					  				<th width="25%">栏目名称</th>
					  				<th width="25%">上级栏目名称</th>
					  			</s:if>
					  			<s:else>
					  				<th width="50%">栏目名称</th>
					  			</s:else> 
			          			<th width="40%">操作</th>
			        		</tr>
	 	  	 				<s:iterator value="page.result" status="st">
	                    		<tr>
	                        		<td>
	                           			<input type="checkbox" id="ids" name="ids" value="${id}"/>
	                        		</td>  
	                        		<td  title="${page.first + st.index}">
	                            		&nbsp;${page.first + st.index}
	                        		</td>
	                        		<s:if test="parentId != null && parentId!=0">
	                        			<td title="${name}"><common:cut len="20" string="${name}" />&nbsp;</td>
	                        			<td title="${parent.name}"><common:cut len="20" string="${parent.name}" />&nbsp;</td>
	                        		</s:if>
	                        		<s:else>
	                        			<td title="${name}"><common:cut len="20" string="${name}" />&nbsp;</td>
	                        		</s:else> 
	                        		<td>
	                        			<a href="category!input.action?id=${id}&parentId=${parentId}">修改</a>
										<a href="#" onclick="delRecord('category!delete.action?id=${id}&parentId=${parentId}');">删除</a>
										<s:if test="cattype<3">
							 				<a href="category.action?parentId=${id}">进入下级栏目</a>
							 			</s:if>
							 			<s:else>
							 				<s:if test="rone">
							 					<a href="category!cancelIndexrone.action?id=${id}&parentId=${parentId}">取消首页推荐一</a>
							 				</s:if>
							 				<s:else>
							 					<a href="category!setIndexrone.action?id=${id}&parentId=${parentId}">设为首页推荐一</a>
							 				</s:else>
							 				<s:if test="rtwo">
							 					<a href="category!cancelIndexrtwo.action?id=${id}&parentId=${parentId}">取消首页推荐二</a>
							 				</s:if>
							 				<s:else>
							 					<a href="category!setIndexrtwo.action?id=${id}&parentId=${parentId}">设为首页推荐二</a>
							 				</s:else>
							 			</s:else>
	                       			</td> 
	                    		</tr>
	                		</s:iterator> 
						    <s:if test="page.result.size ==0">
								<tr> 
									<s:if test="parentId != null">
						  				<td height="30" align="center" colspan="5"><font color="gray">没有符合条件的记录</font></td>
					  				</s:if>
					  				<s:else>
					  					<td height="30" align="center" colspan="4"><font color="gray">没有符合条件的记录</font></td>
					  				</s:else>
									
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