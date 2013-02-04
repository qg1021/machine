<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/common/taglibs.jsp" %> 
<script type="text/javascript">
	$(document).ready(function() { 
		var activemenu = $('meta[name="headmenu"]').attr("content");
 
		if(activemenu){
    		var tag = $('#' + activemenu);
			tag.removeClass("fff");
			tag.addClass("fffs");
		}
	});
</script>
<div class="w">
	<div id="nav">
		<c:import url="${appurl}/category.action?hindex=true"/>
	</div>
</div>
	
