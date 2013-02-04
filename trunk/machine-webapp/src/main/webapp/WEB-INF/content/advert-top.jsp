<%@ page contentType="text/html;charset=UTF-8" %>
<%@page import="com.gm.machine.contant.Global"%>
<%@ include file="/common/taglibs.jsp" %> 
<div id="top-banner" style="width: 990px; height: 70px; margin: 2px auto 0px; position: relative;">
	<s:iterator value="advertList" status="st">
		<s:if test="linkurl!=null && linkurl!=''">
	    	<a clstag="homepage|keycount|home2012|00a" target="_blank" title="${title}" href="${linkurl}">
				<img width="990" height="70" src="${ctx}<%=Global.picpath%>${picurl}"/>
	        </a>
	    </s:if>
	    <s:else>
	        <a clstag="homepage|keycount|home2012|00a" href="advert-${id}.html" title="${title}"  target="_blank">
	        	<img width="990" height="70" src="${ctx}<%=Global.picpath%>${picurl}"/>
	        </a>
	    </s:else>
	</s:iterator>
</div>

	
