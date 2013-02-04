<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/common/taglibs.jsp" %>
<script type="text/javascript">
	$(document).ready(function() {
       $('.tree ul').hide();
   	   var activemenu = $('meta[name="activemenu"]').attr("content");
   		if(!activemenu)
   		   activemenu = $('#activemenu').val();
   	    if(activemenu){
   		  var tag = $('#' + activemenu);
   		  tag.addClass('curr');
   	    }
    });
</script>
<div class="left">
	<div id="myjd" class="m">	
		<div class="mt">		
			<h2><a href="index.action">会员中心</a></h2>		
		</div>	
		<div class="mc">		
			<dl tag="1">					
				<dd>
					<div id="my_attention" class="item">
						<a href="attention.action" tag="101">我的关注</a>
					</div>	
					<div id="my_post" class="item">
						<a href="post.action" tag="102">我的评价</a>
					</div>				
					<div id="my_enquiry" class="item">
						<a href="enquiry.action" tag="103">我的询价</a>
					</div>
					<div id="my_password" class="item">
						<a href="user!view.action">修改密码</a>
					</div>	
					<div id="my_userinfo" class="item">
						<a href="user!input.action">个人信息</a>
					</div>	
				</dd>	
			</dl>	
		</div>
	</div>
</div>