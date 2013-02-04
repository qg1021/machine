function verc() {
    $("#JD_Verification1").click();
}
var validateRegExp = {
    intege:"^-?[1-9]\\d*$", //����
    intege1:"^[1-9]\\d*$", //������
    intege2:"^-[1-9]\\d*$", //������
    num:"^([+-]?)\\d*\\.?\\d+$", //����
    num1:"^[1-9]\\d*|0$", //������������ + 0��
    num2:"^-[1-9]\\d*|0$", //������������ + 0��
    ascii:"^[\\x00-\\xFF]+$", //��ACSII�ַ�
    chinese:"^[\\u4e00-\\u9fa5]+$", //������
    date:"^\\d{4}(\\-|\\/|\.)\\d{1,2}\\1\\d{1,2}$", //����
    email:"^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$", //�ʼ�
    letter:"^[A-Za-z]+$", //��ĸ
    letter_l:"^[a-z]+$", //Сд��ĸ
    letter_u:"^[A-Z]+$", //��д��ĸ
    mobile:"^0?(13|15|18|14)[0-9]{9}$", //�ֻ�
    notempty:"^\\S+$", //�ǿ�
    password:"^.*[A-Za-z0-9\\w_-]+.*$", //����
    fullNumber:"^[0-9]+$", //����
    tel:"^[0-9\-()����]{7,18}$", //�绰����ĺ���(������֤��������,��������,�ֻ���)
    url:"^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&=]*)?$", //url
    username:"^[A-Za-z0-9_\\-\\u4e00-\\u9fa5]+$" //�û���
};
//������
(function ($) {
    $.fn.jdValidate = function (option, callback, def) {
        var ele = this;
        var id = ele.attr("id");
        var type = ele.attr("type");
        var rel = ele.attr("rel");
        var _onFocus = $("#" + id + validateSettings.onFocus.container);
        var _succeed = $("#" + id + validateSettings.succeed.container);
        var _isNull = $("#" + id + validateSettings.isNull.container);
        var _error = $("#" + id + validateSettings.error.container);
        if (def == true) {
            var str = ele.val();
            var tag = ele.attr("sta");
            if (str == "" || str == "-1") {
                validateSettings.isNull.run({
                    prompts:option,
                    element:ele,
                    isNullEle:_isNull,
                    succeedEle:_succeed
                }, option.isNull);
            } else if (tag == 1 || tag == 2) {
                return;
            } else {
                callback({
                    prompts:option,
                    element:ele,
                    value:str,
                    errorEle:_error,
                    succeedEle:_succeed
                });
            }
        } else {
            if (typeof def == "string") {
                ele.val(def);
            }
            if (type == "checkbox" || type == "radio") {
                if (ele.attr("checked") == true) {
                    ele.attr("sta", validateSettings.succeed.state);
                }
            }
            switch (type) {
                case "text":
                case "password":
                    ele.bind("focus", function () {
                        var str = ele.val();
                        if (str == def) {
                            ele.val("");
                        }
                        if (id == "pwd") {
                            $("#pwdstrength").hide();
                        }
                        validateSettings.onFocus.run({
                            prompts:option,
                            element:ele,
                            value:str,
                            onFocusEle:_onFocus,
                            succeedEle:_succeed
                        }, option.onFocus);
                    })
                        .bind("blur", function () {
                            var str = ele.val();
                            if (str == "") {
                                ele.val(def);
                            }
                            if (validateRules.isNull(str)) {
                                validateSettings.isNull.run({
                                    prompts:option,
                                    element:ele,
                                    value:str,
                                    isNullEle:_isNull,
                                    succeedEle:_succeed
                                }, "");
                            } else {
                                callback({
                                    prompts:option,
                                    element:ele,
                                    value:str,
                                    errorEle:_error,
                                    isNullEle:_isNull,
                                    succeedEle:_succeed
                                });
                            }
                        });
                    break;
                default:
                    if (rel && rel == "select") {
                        ele.bind("change", function () {
                            var str = ele.val();
                            callback({
                                prompts:option,
                                element:ele,
                                value:str,
                                errorEle:_error,
                                isNullEle:_isNull,
                                succeedEle:_succeed
                            });
                        })
                    } else {
                        ele.bind("click", function () {
                            callback({
                                prompts:option,
                                element:ele,
                                errorEle:_error,
                                isNullEle:_isNull,
                                succeedEle:_succeed
                            });
                        })
                    }
                    break;
            }
        }
    }
})(jQuery);

//����
var validateSettings = {
    onFocus:{
        state:null,
        container:"_error",
        style:"focus",
        run:function (option, str) {
            if (!validateRules.checkType(option.element)) {
                option.element.removeClass(validateSettings.INPUT_style2).addClass(validateSettings.INPUT_style1);
            }
            option.onFocusEle.removeClass().addClass(validateSettings.onFocus.style).html(str);
        }
    },
    isNull:{
        state:0,
        container:"_error",
        style:"null",
        run:function (option, str) {
            option.element.attr("sta", 0);
            if (!validateRules.checkType(option.element)) {
                if (str != "") {
                    option.element.removeClass(validateSettings.INPUT_style1).addClass(validateSettings.INPUT_style2);
                } else {
                    option.element.removeClass(validateSettings.INPUT_style2).removeClass(validateSettings.INPUT_style1);
                }
            }
            option.succeedEle.removeClass(validateSettings.succeed.style);
            option.isNullEle.removeClass().addClass(validateSettings.isNull.style).html(str);
        }
    },
    error:{
        state:1,
        container:"_error",
        style:"error",
        run:function (option, str) {
            option.element.attr("sta", 1);
            if (!validateRules.checkType(option.element)) {
                option.element.removeClass(validateSettings.INPUT_style1).addClass(validateSettings.INPUT_style2);
            }
            option.succeedEle.removeClass(validateSettings.succeed.style);
            option.errorEle.removeClass().addClass(validateSettings.error.style).html(str);
        }
    },
    succeed:{
        state:2,
        container:"_succeed",
        style:"succeed",
        run:function (option) {
            option.element.attr("sta", 2);
            option.errorEle.empty();
            if (!validateRules.checkType(option.element)) {
                option.element.removeClass(validateSettings.INPUT_style1).removeClass(validateSettings.INPUT_style2);
            }
            if (option.element.attr("id") == "schoolinput" && $("#schoolid").val() == "") {
                return;
            }
            option.succeedEle.addClass(validateSettings.succeed.style);
        }
    },
    INPUT_style1:"highlight1",
    INPUT_style2:"highlight2"
};

//��֤����
var validateRules = {
    isNull:function (str) {
        return (str == "" || typeof str != "string");
    },
    betweenLength:function (str, _min, _max) {
        return (str.length >= _min && str.length <= _max);
    },
    isUid:function (str) {
        return new RegExp(validateRegExp.username).test(str);
    },
    fullNumberName:function (str) {
        return new RegExp(validateRegExp.fullNumber).test(str);
    },
    isEmail:function (str) {
        return new RegExp(validateRegExp.email).test(str);
    },
    isTel:function (str) {
        return new RegExp(validateRegExp.tel).test(str);
    },
    isMobile:function (str) {
        return new RegExp(validateRegExp.mobile).test(str);
    },
    checkType:function (element) {
        return (element.attr("type") == "checkbox" || element.attr("type") == "radio" || element.attr("rel") == "select");
    }
};
//��֤�ı�
var validatePrompt = {
    username:{
        onFocus:"4-20λ�ַ����������ġ�Ӣ�ġ����ּ���_������-�����",
        succeed:"",
        isNull:"�������û���",
        error:{
            beUsed:"���û����ѱ�ʹ�ã���ʹ�������û���ע�ᣬ�������&quot;{1}&quot;����<a href='https://passport.360buy.com/new/login.aspx' class='flk13'>��¼</a>",
            badLength:"�û�������ֻ����4-20λ�ַ�֮��",
            badFormat:"�û���ֻ�������ġ�Ӣ�ġ����ּ���_������-�����",
            fullNumberName:"�û�������ȫΪ����"
        }
    },
    pwd:{
        onFocus:"6-20λ�ַ�����ʹ����ĸ�����ֻ���ŵ����",
        succeed:"",
        isNull:"����������",
        error:{
            badLength:"���볤��ֻ����6-20λ�ַ�֮��",
            badFormat:"����ֻ����Ӣ�ġ����ּ����������",
            simplePwd:"����̫�����б������գ��������ö����ַ���ɵĸ�������"
        }
    },
    authcode:{
        onFocus:"������ͼƬ�е��ַ��������ִ�Сд",
        succeed:"",
        isNull:"��������֤��",
        error:"��֤�����"
    },
    empty:{
        onFocus:"",
        succeed:"",
        isNull:"",
        error:""
    }
};

var nameold, emailold, authcodeold;
var namestate = false, emailstate = false, authcodestate = false;
//�ص�����
var validateFunction = {
    authcode:function (option) {
        validateSettings.succeed.run(option);
        authcodestate = true;
    },
    FORM_submit:function (elements) {
        var bool = true;
        for (var i = 0; i < elements.length; i++) {
            if ($(elements[i]).attr("sta") == 2) {
                bool = true;
            } else {
                bool = false;
                break;
            }
        }
        return bool;
    }
};
function strTrim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}