<%@ page contentType="text/html;charset=UTF-8" %>
<%@page import="com.gm.machine.contant.Global"%>
<%@ include file="/common/taglibs.jsp" %> 
<div class="slide" id="slide">
	<div class="slide-itemswrap">
		<div id="imgplayer"   style="display:none;">
			<s:iterator value="advertList" status="st">
				<s:if test="linkurl!=null && linkurl!=''">
			    	<a target="_blank" href="${linkurl}">
						<img  data-lazyload="${ctx}<%=Global.picpath%>${picurl}"/>
			        </a>
		    	</s:if>
			    <s:else>
			        <a href="advert!input.action?id=${id}" target="_blank">
			        	<img  data-lazyload="${ctx}<%=Global.picpath%>${picurl}"/>
			        </a>
			    </s:else>
		    </s:iterator>
		</div>
	</div>
</div>

	
