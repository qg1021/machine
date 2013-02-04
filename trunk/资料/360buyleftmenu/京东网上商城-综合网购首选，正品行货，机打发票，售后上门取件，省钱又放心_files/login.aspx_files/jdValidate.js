$.extend(validatePrompt, {
    username:{
        onFocus:"",
        succeed:"",
        isNull:"请输入用户名/邮箱/已验证手机",
        error:"不存在此用户名"
    }
});
$.extend(validateFunction, {
    username:function (option) {
        validateSettings.succeed.run(option);
    },
    pwd:function (option) {
        validateSettings.succeed.run(option);
    },

    FORM_validate:function () {
        $("#loginname").jdValidate(validatePrompt.username, validateFunction.username, true);
        $("#loginpwd").jdValidate(validatePrompt.pwd, validateFunction.pwd, true);
        return validateFunction.FORM_submit(["#loginname", "#loginpwd"]);
    }
});
setTimeout(function () {
    if (!$("#loginname").val()) {
        $("#loginname").get(0).focus();
    }
}, 0);

$("#loginname").jdValidate(validatePrompt.username, validateFunction.username);
$("#loginpwd").jdValidate(validatePrompt.empty, validateFunction.pwd);
$("#authcode").jdValidate(validatePrompt.empty, validateFunction.authcode);
function verc() {
    $("#JD_Verification1").click();
}
$("#loginname,#loginpwd, #authcode").bind('keyup', function (event) {
    if (event.keyCode == 13) {
        $("#loginsubmit").click();
    }
});
$("#loginsubmit").click(function () {
    var loginUrl = "../uc/loginService";
    var flag = loginNameOk() && validateFunction.FORM_validate();
    if (flag) {
        var srcValue = $("#JD_Verification1").attr("src");
        if (!srcValue) {
            srcValue = $("#JD_Verification1").attr("src2");
        }
        var uuid = srcValue.split("&uid=")[1].split("&")[0];
        $(this).attr({ "disabled":"disabled" });
        $.ajax({
            type:"POST",
            url:loginUrl + "?uuid=" + uuid + "&" + location.search.substring(1) + "&r=" + Math.random(),
            contentType:"application/x-www-form-urlencoded; charset=utf-8",
            data:$("#formlogin").serialize(),
            error:function () {
                $("#loginpwd").attr({ "class":"text highlight2" });
                $("#loginpwd_error").html("网络超时，请稍后再试").show().attr({ "class":"error" });
                $("#loginsubmit").removeAttr("disabled");
                $this.removeAttr("disabled");
            },
            success:function (result) {
                if (result) {
                    var obj = eval(result);
                    if (obj.success) {
                        window.location = obj.success;
                        return;
                    }
                    if (obj.transfer) {
                        window.location = obj.transfer + window.location.search;
                        return;
                    }
                    if (obj.resetpwd) {
                        window.location = "http://safe.360buy.com/resetPwd/reset.action?username=" + obj.resetpwd;
                        return;
                    }
                    $("#loginsubmit").removeAttr("disabled");
                    verc();

                    if (obj.verifycode || obj.authcode1 || obj.authcode2) {
                        $("#o-authcode").show();
                    }
                    if (obj.authcode2) {
                        $("#loginname").attr({ "class":"text highlight2" });
                        $("#loginname_error").html("您的账号有安全隐患，建议您登录后修改为复杂密码").show().attr({ "class":"message" });
                    }
                    if (obj.username) {
                        $("#loginname").attr({ "class":"text highlight2" });
                        $("#loginname_error").html(obj.username).show().attr({ "class":"error" });
                    }
                    if (obj.pwd) {
                        $("#loginpwd").attr({ "class":"text highlight2" });
                        $("#loginpwd_error").html(obj.pwd).show().attr({ "class":"error" });
                    }
                    if (obj.emptyAuthcode) {
                        $("#o-authcode").show();
                        $("#authcode").attr({ "class":"text text-1 highlight2" });
                        $("#authcode_error").html(obj.emptyAuthcode).show().attr({ "class":"error" });
                    }
                }
            }
        });
    }
});

function loginNameOk() {
    var loginName = $("#loginname").val();
    if (validateRules.isNull(loginName) || loginName == '用户名/邮箱/已验证手机') {
        $("#loginname").attr({ "class":"text highlight2" });
        $("#loginname_error").html("请输入用户名/邮箱/已验证手机").show().attr({ "class":"error" });
        return false;
    }

    return true;
}

$("#loginsubmitframe").click(function () {
    var flag = loginNameOk() && validateFunction.FORM_validate();
    if (flag) {
        var srcValue = $("#JD_Verification1").attr("src");
        if (!srcValue) {
            srcValue = $("#JD_Verification1").attr("src2");
        }
        var uuid = srcValue.split("&uid=")[1].split("&")[0];
        $(this).attr({ "disabled":"disabled" });
        $.ajax({
            type:"POST",
            url:"../uc/loginService?uuid=" + uuid + "&" + location.search.substring(1) + "&r=" + Math.random(),
            contentType:"application/x-www-form-urlencoded; charset=utf-8",
            data:$("#formloginframe").serialize(),
            error:function () {
                $("#loginpwd").attr({ "class":"text highlight2" });
                $("#loginpwd_error").html("网络超时，请稍后再试").show().attr({ "class":"error" });
                $("#loginsubmitframe").removeAttr("disabled");
            },
            success:function (result) {
                if (result) {
                    var obj = eval(result);
                    if (obj.success || obj.transfer) {
                        window.parent.jdModelCallCenter.init();
                        return;
                    }
                    if (obj.resetpwd) {
                        window.parent.location = "http://safe.360buy.com/resetPwd/reset.action?username=" + obj.resetpwd;
                        return;
                    }
                    $("#loginsubmitframe").removeAttr("disabled");
                    verc();

                    if (obj.verifycode || obj.authcode1 || obj.authcode2) {
                        $("#o-authcode").show();
                    }
                    if (obj.authcode2) {
                        $("#loginname").attr({ "class":"text highlight2" });
                        $("#loginname_error").html("您的账号有安全隐患，建议您登录后修改为复杂密码").show().attr({ "class":"message" });
                    }
                    if (obj.username) {
                        $("#loginname").attr({ "class":"text highlight2" });
                        $("#loginname_error").html(obj.username).show().attr({ "class":"error" });
                    }
                    if (obj.pwd) {
                        $("#loginpwd").attr({ "class":"text highlight2" });
                        $("#loginpwd_error").html(obj.pwd).show().attr({ "class":"error" });
                    }
                    if (obj.emptyAuthcode) {
                        $("#authcode").attr({ "class":"text text-1 highlight2" });
                        $("#authcode_error").html(obj.emptyAuthcode).show().attr({ "class":"error" });
                    }
                }
            }
        });
    }
});
$("#loginname,#loginpwd, #authcode").bind('keyup', function (event) {
    if (event.keyCode == 13) {
        $("#loginsubmitframe").click();
    }
});
var authcodeShowed = false;
function preCheck() {
    var pin = $("#loginname").val();
    if (pin != null && pin.length > 0 && pin != '用户名/邮箱/已验证手机') {
        var url = document.location.protocol + "//passport.360buy.com/user/preCheck.action?pin=" + escape(pin) + "&r=" + Math.random();
        $.getJSON(url, function (result) {
            if (result) {
                var obj = eval(result);
                if (obj.authcode1 || obj.authcode2) {
                    if (!authcodeShowed) {
                        verc();
                        $("#o-authcode").show();
                        authcodeShowed = true;
                    }
                }
                if (obj.authcode2) {
                    //$("#loginname").attr({ "class":"text highlight2" });
                    $("#loginname_error").html("您的账号有安全隐患，建议您登录后修改为复杂密码").show().attr({ "class":"message" });
                }
            }
        })
    }
}