<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/common/taglibs.jsp" %>
<div class="m m1" id="jdnews">
	<div class="mt">
		<h2>商城资讯</h2>
		<div clstag="homepage|keycount|home2012|11a" class="extra"><a target="_blank" href="news.html">更多&nbsp;&gt;&gt;</a></div>
	</div>
	<div class="mc">
		<ul>
			<s:iterator value="newsList" status="st">
				<li clstag="homepage|keycount|home2012|11b" class="<s:if test="#st.odd">odd</s:if>">
					<s:if test="link!=null && link!=''">
	           			<a href="${link}" title="${title}" target="_blank"">
	                  		<common:cut len="18" string="${title}"/> 
	                  	</a>
	                 </s:if>
	                 <s:else>
	                	<a href="news-${id}.html" title="${title}" target="_blank">
	                    	<common:cut len="18" string="${title}"/> 
	                    </a>
	                 </s:else>
				</li>
			</s:iterator>
			
		</ul>
	</div>
</div>

