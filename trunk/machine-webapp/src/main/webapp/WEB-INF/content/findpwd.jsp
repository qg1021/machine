<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/common/taglibs.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>忘记密码-东方农机商城(www.machine1688.com)</title>
	<%@ include file="/common/meta.jsp" %>
	<link href="${ctx}/css/passport.css" rel="stylesheet" type="text/css" />
	<link href="${ctx}/css/regist.css" rel="stylesheet" type="text/css" /> 
	<link href="${ctx}/js/validate/jquery.validate.css" type="text/css" rel="stylesheet"/>
	<script src="${ctx}/js/jquery.js" type="text/javascript"></script>
	<script src="${ctx}/js/validate/jquery.validate.js" type="text/javascript"></script>
	<script src="${ctx}/js/validate/messages_cn.js" type="text/javascript"></script>
	<script src="${ctx}/js/findpwd.js" type="text/javascript"></script>
</head>

<body>
	<%@ include file="/common/nav.jsp" %>
	<%@ include file="/common/headersearch.jsp" %>
  	<div id="entry" class="w">
       	<div class="mt">
   			<h2>忘记密码</h2>
   			<b></b>
   			<span style="text-align: right">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> <span>现在就&nbsp;<a class="flk13" href="${ctx}/user/index.action">登录</a></span>
		</div>
    <div cstyle="padding-top:20px;" class="mc"> 
		<!--忘记密码 start -->
        <div  id="first_div" >
        	<p class="box_dotline_top mb10"><b>- 输入你的用户名</b></p>
        	<ul class="form_list">
        		<li>
        			<label>用户名</label>
        			<input   type="text" id="userName" name="userName" value="" maxlength="20"/>
        			<label id="first_span" style="display:none" class="error">用户名不存在</label>
        		</li>
        	</ul>
        	
        	<input type="button" class="btn-img btn-entry" id="findPwdSubmit" onclick="onVaild();" value="确定" tabindex="4"/>
       		<p class="font_s12">若忘记用户名，请将注册时的姓名email到 <a href="mailto:machine1688@126.com">machine1688@126.com</a> 找回用户名。</p>
        </div>
        <div id="second_div" style="display:none">
        	<p class="box_dotline_top mb10"><b>回答你注册时设定的密码问题</b> </p>
        	<ul class="form_list">
        		<li>
        			<label>密码问题</label>
        			<span id="answer_span"></span>
        		</li>
        		<li>
        			<label>密码答案</label>
        			<input  class="input" type="text" id="answer" name="answer"/>
        			<label id="second_span" style="display:none" class="error">答案错误</label>
        		</li>
        	</ul>
        	
        	<input type="button" class="btn-img btn-entry" value="确定" onclick="onAnswer();"/>
        </div>
        <div id="third_div" style="display:none">
        	<p class="box_dotline_top mb10">欢迎你，<span id="nick_span">anne!</span> 你的身份已被验证，请重新设置登录密码。 </p>
        	<ul class="form_list">
        		<li>
        			<label>新密码</label>
        			<input    type="password" id="pwd" name="pwd" value="" maxlength="18"/>
        		</li>
        		<li>
        			<label>重复新密码</label>
        			<input   type="password" id="repwd" name="repwd" value="" maxlength="18"/><label id="third_span" style="display:none" class="error">两次输入的密码不一致</label>
        		</li>
        	</ul>
        	
        	<input type="button" class="btn-img btn-entry" value="确定"  onclick="onSetPassword();"/>
        </div>
        <div id="fourth_div" style="display:none" class="getpw">
        	<p class="name">新密码已生效，下次登录请使用新密码！ </p>
        	<p class="mt20"><a href="${ctx}" class="colororange">返回首页&gt;&gt;</a></p>
        </div>
      <!--忘记密码 end --> 
    </div>
    <!-- 内容 end --> 
  </div>
  <!-- 正文内容 end -->
  <%@ include file="/common/footer.jsp" %> 
  <script type="text/javascript" src="${ctx}/js/base-v1.js"></script>
  <script type="text/javascript" src="${ctx}/js/common.js"></script>
    
</body>
</html>