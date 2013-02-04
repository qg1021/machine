<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/common/taglibs.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>  
	<%@ include file="/common/meta.jsp" %>
	<meta content="my_attention" name="activemenu" />
	<link href="${ctx}/css/base.css" rel="stylesheet" type="text/css" /> 
	<link href="${ctx}/css/userbase.css" rel="stylesheet" type="text/css" />
	<link href="${ctx}/css/userfov.css" rel="stylesheet" type="text/css" />
	<script src="${ctx}/js/jquery.js" type="text/javascript"></script>
	<script type="text/javascript" src="${ctx}/js/base-v1.js"></script>
	<script  type="text/javascript">
		$(document).ready(function() {
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
		<div class="o-mt"><h2>我的关注</h2></div>
		<form id="mainForm" action="attention.action" method="post">
		<div class="m m1" id="fov">
			<div class="mt"><div class="extra"></div></div>
				<div class="mc mbb">
					<div class="tb-void tb-void-01 tb-rows">
					
						<table width="100%" cellspacing="0" cellpadding="0" border="0">
							<tbody>
								<tr>
									<th width="40%">
										商品图片
									</th>
									<th width="20%">商品名称</th>
									<th width="20%">网友反馈</th>
									<th width="20%">操作</th>
								</tr>
							</tbody>
							<tbody id="follow_table">
							<s:iterator value="page.result">
								<tr>
									<td>
										<a target="_blank" id="img_${id}" href="../product-${product.id}-tab-1.html">
											<img height="100" width="100" src="${ctx}<%=Global.picpath%>${product.picurl}" border="0"/>
										</a>
									</td>
									<td>
										<div clstag="click|keycount|follow|productname" class="p-name">
											<a target="_blank" id="name_${id}" href="../product-${product.id}-tab-1.html">
												${product.name}
											</a>
										</div>
										<div class="star sa0 sa4" id="star1000554559"></div>
										<div class="date">关注时间：<s:date name="createdate" format="yyyy-MM-dd HH:mm"/></div>
									</td>
									<td>
										<ul class="list-x">
											<li clstag="click|keycount|follow|productpj">
												<span class="ftx-03">评价：</span>
												<a href="../product-${product.id}-tab-3.html" target="_blank">
													<span id="pj${product.id}">${product.postnum}</span>人
												</a>
											</li>
											<li clstag="click|keycount|follow|productsd">
												<span class="ftx-03">询价：</span>
												<a href="../product-${product.id}-tab-2.html" target="_blank">
													<span id="sd${product.id}">${product.ennum}</span>人
												</a>
											</li>																
										</ul>
									</td>
									<td>
										<a href="attention!cancel.action?id=${id}">
											取消关注
										</a>
									</td>
								</tr>
							</s:iterator>
							<s:if test="page.result.size ==0"><tr><td colspan="5">您还没有关注的商品！</td></tr></s:if>
						</tbody>
					</table>
				</div>
				 <span class="clr"></span>
			</div>
			<div class="mb mbb">
				<div class="pagin fr">
                   <%@ include file="/common/page.jsp"%>
				</div><!--pagin end-->
			</div>
		</div>
		</form>
     </div>
     <span class="clr"></span>
</div>
<%@ include file="/common/footer.jsp" %>
<script type="text/javascript" src="${ctx}/js/common.js"></script>
</body>
</html>
