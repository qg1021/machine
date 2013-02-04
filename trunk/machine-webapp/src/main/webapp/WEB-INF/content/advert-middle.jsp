<%@ page contentType="text/html;charset=UTF-8" %>
<%@page import="com.gm.machine.contant.Global"%>
<%@ include file="/common/taglibs.jsp" %> 
<div class="w w1">
	<div>
		<ul class="middle_ad">
			<s:iterator value="advertList" status="st">
				<li>
					<s:if test="linkurl!=null && linkurl!=''">
				    	<a clstag="homepage|keycount|home2012|00a" target="_blank" href="${linkurl}">
							<img width="160" height="65" border="0"  data-lazyload="${ctx}<%=Global.picpath%>${picurl}"/>
				        </a>
				    </s:if>
				    <s:else>
				        <a clstag="homepage|keycount|home2012|00a" href="advert!input.action?id=${id}" target="_blank">
				        	<img width="160" height="65" border="0"  data-lazyload="${ctx}<%=Global.picpath%>${picurl}"/>
				        </a>
				    </s:else>
				</li>
			</s:iterator>
		</ul>
	</div>
</div>

	
