(function(a) {
    a.fn.Jdropdown = function(d, e) {
        if (!this.length) {
            return

        }
        if (typeof d == "function") {
            e = d;
            d = {}

        }
        var c = a.extend({
            event: "mouseover",
            current: "hover",
            delay: 0

        },
        d || {});
        var b = (c.event == "mouseover") ? "mouseout": "mouseleave";
        a.each(this, 
        function() {
            var h = null,
            g = null,
            f = false;
            a(this).bind(c.event, 
            function() {
                if (f) {
                    clearTimeout(g)

                } else {
                    var j = a(this);
                    h = setTimeout(function() {
                        j.addClass(c.current);
                        f = true;
                        if (e) {
                            e(j)

                        }

                    },
                    c.delay)

                }

            }).bind(b, 
            function() {
                if (f) {
                    var j = a(this);
                    g = setTimeout(function() {
                        j.removeClass(c.current);
                        f = false

                    },
                    c.delay)

                } else {
                    clearTimeout(h)

                }

            })

        })

    }

})(jQuery); 
(function(a) {
    a.fn.Jtab = function(d, h) {
        if (!this.length) {
            return

        }
        if (typeof d == "function") {
            h = d;
            d = {}

        }
        var b = a.extend({
            type: "static",
            auto: false,
            event: "mouseover",
            currClass: "curr",
            source: "data-tag",
            hookKey: "data-widget",
            hookItemVal: "tab-item",
            hookContentVal: "tab-content",
            stay: 5000,
            delay: 100,
            threshold: null,
            mainTimer: null,
            subTimer: null,
            index: 0,
            compatible: false

        },
        d || {});
        var f = a(this).find("*[" + b.hookKey + "=" + b.hookItemVal + "]"),
        e = a(this).find("*[" + b.hookKey + "=" + b.hookContentVal + "]"),
        k = b.source.toLowerCase().match(/http:\/\/|\d|\.aspx|\.ascx|\.asp|\.php|\.html\.htm|.shtml|.js/g);
        if (f.length != e.length) {
            return false

        }
        var j = function(m, l) {
            b.subTimer = setTimeout(function() {
                f.eq(b.index).removeClass(b.currClass);
                if (b.compatible) {
                    e.eq(b.index).hide()

                }
                if (l) {
                    b.index++;
                    if (b.index == f.length) {
                        b.index = 0

                    }

                } else {
                    b.index = m

                }
                b.type = (f.eq(b.index).attr(b.source) != null) ? "dynamic": "static";
                c()

            },
            b.delay)

        };
        var g = function() {
            b.mainTimer = setInterval(function() {
                j(b.index, true)

            },
            b.stay)

        };
        var c = function() {
            f.eq(b.index).addClass(b.currClass);
            if (b.compatible) {
                e.eq(b.index).show()

            }
            switch (b.type) {
                default:
            case "static":
                var l = "";
                break;
                case "dynamic":
                var l = (!k) ? f.eq(b.index).attr(b.source) : b.source;
                f.eq(b.index).removeAttr(b.source);
                break

            }
            if (h) {
                h(l, e.eq(b.index), b.index)

            }

        };
        f.each(function(l) {
            a(this).bind(b.event, 
            function() {
                clearTimeout(b.subTimer);
                clearInterval(b.mainTimer);
                j(l, false)

            }).bind("mouseleave", 
            function() {
                if (b.auto) {
                    g()

                } else {
                    return

                }

            })

        });
        if (b.type == "dynamic") {
            j(b.index, false)

        }
        if (b.auto) {
            g()

        }

    }

})(jQuery);
(function(a) {
    a.fn.Jlazyload = function(j, n) {
        if (!this.length) {
            return

        }
        var f = a.extend({
            type: null,
            offsetParent: null,
            source: "data-lazyload",
            placeholderImage: "http://misc.360buyimg.com/lib/img/e/blank.gif",
            placeholderClass: "loading-style2",
            threshold: 200

        },
        j || {}),
        k = this,
        g,
        m,
        l = function(r) {
            var u = r.scrollLeft,
            t = r.scrollTop,
            s = r.offsetWidth,
            q = r.offsetHeight;
            while (r.offsetParent) {
                u += r.offsetLeft;
                t += r.offsetTop;
                r = r.offsetParent

            }
            return {
                left: u,
                top: t,
                width: s,
                height: q

            }

        },
        e = function() {
            var v = document.documentElement,
            r = document.body,
            u = window.pageXOffset ? window.pageXOffset: (v.scrollLeft || r.scrollLeft),
            t = window.pageYOffset ? window.pageYOffset: (v.scrollTop || r.scrollTop),
            s = v.clientWidth,
            q = v.clientHeight;
            return {
                left: u,
                top: t,
                width: s,
                height: q

            }

        },
        d = function(w, v) {
            var y,
            x,
            s,
            r,
            q,
            u,
            z = f.threshold ? parseInt(f.threshold) : 0;
            y = w.left + w.width / 2;
            x = v.left + v.width / 2;
            s = w.top + w.height / 2;
            r = v.top + v.height / 2;
            q = (w.width + v.width) / 2;
            u = (w.height + v.height) / 2;
            return Math.abs(y - x) < (q + z) && Math.abs(s - r) < (u + z)

        },
        b = function(q, s, r) {
            if (f.placeholderImage && f.placeholderClass) {
                r.attr("src", f.placeholderImage).addClass(f.placeholderClass)

            }
            if (q) {
                r.attr("src", s).removeAttr(f.source);
                if (n) {
                    n(s, r)

                }

            }

        },
        c = function(q, t, r) {
            if (q) {
                var s = a("#" + t);
                s.html(r.val()).removeAttr(f.source);
                r.remove();
                if (n) {
                    n(t, r)

                }

            }

        },
        p = function(q, s, r) {
            if (q) {
                r.removeAttr(f.source);
                if (n) {
                    n(s, r)

                }

            }

        },
        o = function() {
            m = e(),
            k = k.filter(function() {
                return a(this).attr(f.source)

            });
            a.each(k, 
            function() {
                var t = a(this).attr(f.source);
                if (!t) {
                    return

                }
                var s = (!f.offsetParent) ? m: l(a(f.offsetParent).get(0)),
                r = l(this),
                q = d(s, r);
                switch (f.type) {
                    case "image":
                    b(q, t, a(this));
                    break;
                    case "textarea":
                    c(q, t, a(this));
                    break;
                    case "module":
                    p(q, t, a(this));
                    break;
                    default:
                    break

                }

            })

        },
        h = function() {
            if (k.length > 0) {
                clearTimeout(g);
                g = setTimeout(function() {
                    o()

                },
                10)

            }

        };
        o();
        if (!f.offsetParent) {
            a(window).bind("scroll", 
            function() {
                h()

            }).bind("reset", 
            function() {
                h()

            })

        } else {
            a(f.offsetParent).bind("scroll", 
            function() {
                h()

            })

        }

    }

})(jQuery);
$.login = function(a) {
    a = $.extend({
        loginService: "http://passport.360buy.com/loginservice.aspx?callback=?",
        loginMethod: "Login",
        loginUrl: "https://passport.360buy.com/new/login.aspx",
        returnUrl: location.href,
        automatic: true,
        complete: null,
        modal: false

    },
    a || {});
    if (a.loginService != "" && a.loginMethod != "") {
        $.getJSON(a.loginService, {
            method: a.loginMethod

        },
        function(b) {
            if (b != null) {
                if (a.complete != null) {
                    a.complete(b.Identity)

                }
                if (!b.Identity.IsAuthenticated && a.automatic && a.loginUrl != "") {
                    if (a.modal) {
                        jdModelCallCenter.login()

                    } else {
                        location.href = a.loginUrl + "?ReturnUrl=" + escape(a.returnUrl)

                    }

                }

            }

        })

    }

};

(function() {
	pageConfig.FN_ImgError(document);
    $("img[data-lazyload]").Jlazyload({
        type: "image",
        placeholderClass: "err-product"

    });
    $("#shortcut .menu").Jdropdown({
        delay: 50

    });
    $("#navitems li").Jdropdown();
	$("#categorys").Jdropdown({delay: 200});
	$("#_JD_ALLSORT").find(".item").Jdropdown({delay: 200});
	$("#hot").Jtab({
        delay: 300,
        source: "data-boole"

    },
    function(c, b, d) {
        if (d == 4) {
            if (!c) {
                return;

            }
            pageConfig.FN_GuessYou(c, b);

        } else {
            b.find("img").Jlazyload({
                type: "image",
                source: "data-src"

            },
            function() {
                pageConfig.FN_ImgError(b.get(0));

            });

        }

    });
	$("#hot2").Jtab({
        delay: 300,
        source: "data-boole"

    },
    function(c, b, d) {
        if (d == 4) {
            if (!c) {
                return;

            }
            pageConfig.FN_GuessYou(c, b);

        } else {
            b.find("img").Jlazyload({
                type: "image",
                source: "data-src"

            },
            function() {
                pageConfig.FN_ImgError(b.get(0));

            });

        }

    });
	$("#my360buy dl").Jdropdown({
        delay: 100
    },
    function(a) {
        if (a.attr("load")) {
            return

        }
        $.login({
            automatic: false,
            complete: function(e) {
                if (!e) {
                    return

                }
                var d = a.find("dd").eq(0),
                c = "",
                b;
                if (!e.IsAuthenticated) {
                    c += UC.TPL_UnRegist;
                    c += UC.TPL_UList;
                    //b = readCookie(UC.DATA_Cookie);
                    if (b) {
                        c += UC.TPL_VList.placeholder

                    }

                } else {
                    c += UC.TPL_Regist.process(e);
                    c += UC.TPL_OList.placeholder;
                    c += UC.TPL_UList

                }
                d.html(c);
                a.attr("load", "1");
                setTimeout(function() {
                    a.removeAttr("load")

                },
                60000);
                if (!e.IsAuthenticated) {
                    if (b) {
                        //UC.FN_InitVList(b)

                    }
                    return

                }
                //UC.FN_InitOList()

            }

        })

    });


    document.onkeyup = function(c) {
        var a = document.activeElement.tagName.toLowerCase();
        if (a == "input" || a == "textarea") {
            return

        }
        var c = c ? c: window.event,
        b = c.keyCode || c.which;
        switch (b) {
            case 68:
            if (!window.pageConfig.clientViewTop) {
                window.pageConfig.clientViewTop = 0

            }
            window.pageConfig.clientViewTop += document.documentElement.clientHeight;
            window.scrollTo(0, pageConfig.clientViewTop);
            break;
            case 83:
            window.scrollTo(0, 0);
            window.pageConfig.clientViewTop = 0;
            document.getElementById("key").focus();
            break;
            case 84:
            window.scrollTo(0, 0);
            window.pageConfig.clientViewTop = 0;
            break;
            default:
            break

        }

    }

})();


var UC = {
    DATA_Cookie: "_recent",
    TPL_UnRegist: '<div class="prompt">			<span class="fl">\u60a8\u597d\uff0c\u8bf7\u767b\u5f55</span>			<span class="fr"><a href="javascript:login()" class="btn-login" clstag="homepage|keycount|home2012|04a">\u767b\u5f55</a></span>		</div>',
    TPL_Regist: '<div class="prompt">				<span class="fl"><strong>${Name}</strong></span>				<span class="fr"><a href="http://home.360buy.com/">\u53bb\u6211\u7684\u4eac\u4e1c\u9996\u9875&nbsp;&gt;</a></span>			</div>',
    TPL_OList: {
        placeholder: '<div id="jduc-orderlist"></div>',
        fragment: '<div class="orderlist">				<div class="smt">					<h4>\u6700\u65b0\u8ba2\u5355\u72b6\u6001\uff1a</h4>					<div class="extra"><a href="http://jd2008.360buy.com/JdHome/OrderList.aspx" target="_blank">\u67e5\u770b\u6240\u6709\u8ba2\u5355&nbsp;&gt;</a></div>				</div>				<div class="smc">					<ul>						{for item in orderList}						<li class="fore${parseInt(item_index)+1}">							<div class="p-img fl">								{for image in item.OrderDetail}									{if image_index<2}										<a href="http://www.360buy.com/product/${image.ProductId}.html" target="_blank"><img src="${pageConfig.FN_GetImageDomain(image.ProductId)}n5/${image.ImgUrl}" width="50" height="50" alt="${image.ProductName}" /></a>									{/if}								{/for}								{if item.OrderDetail.length>2}									<a href="${item.passKeyUrl}" target="_blank" class="more">\u66f4\u591a</a>								{/if}							</div>							<div class="p-detail fr">								\u8ba2\u5355\u53f7\uff1a${item.OrderId}<br />								\u72b6\u3000\u6001\uff1a<span>${UC.FN_SetState(item.OrderState)}</span><br />								\u3000\u3000\u3000\u3000<a href="${item.passKeyUrl}">\u67e5\u770b\u8be6\u60c5</a>							</div>						</li>						{/for}					</ul>				</div>			</div>'

    },
    TPL_UList: '<div class="uclist">				<ul class="fore1 fl">					<li><a target="_blank" clstag="homepage|keycount|home2012|04b" href="http://jd2008.360buy.com/JdHome/OrderList.aspx">\u5f85\u5904\u7406\u8ba2\u5355<span id="num-unfinishedorder"></span></a></li>					<li><a target="_blank" clstag="homepage|keycount|home2012|04c" href="http://jd2008.360buy.com/user_spzx.aspx">\u54a8\u8be2\u56de\u590d<span id="num-consultation"></span></a></li>					<li><a target="_blank" clstag="homepage|keycount|home2012|04d" href="http://t.360buy.com/home/follow?page=1&m_m=1&r_r=1">\u964d\u4ef7\u5546\u54c1<span id="num-reduction"></span></a></li>					<li><a target="_blank" clstag="homepage|keycount|home2012|04e" href="http://coupon.360buy.com/user_quan.aspx">\u4f18\u60e0\u5238<span id="num-ticket"></span></a></li>				</ul>				<ul class="fore2 fl">					<li><a target="_blank" clstag="homepage|keycount|home2012|04f" href="http://jd2008.360buy.com/JdHome/OrderList.aspx">\u6211\u7684\u8ba2\u5355&nbsp;&gt;</a></li>					<li><a target="_blank" clstag="homepage|keycount|home2012|04i" href="http://t.360buy.com/home/follow">\u6211\u7684\u5173\u6ce8&nbsp;&gt;</a></li>					<li><a target="_blank" clstag="homepage|keycount|home2012|04g" href="http://bankws.360buy.com/score/Integral/ScoreExhibit.aspx">\u6211\u7684\u79ef\u5206&nbsp;&gt;</a></li>					<li><a target="_blank" clstag="homepage|keycount|home2012|04h" href="http://my.360buy.com/personal/guess.html">\u4e3a\u6211\u63a8\u8350&nbsp;&gt;</a></li>				</ul>			</div>',
    TPL_VList: {
        placeholder: '<div class="viewlist" clstag="homepage|keycount|home2012|04j">				<div class="smt">					<h4>\u6700\u8fd1\u6d4f\u89c8\u7684\u5546\u54c1\uff1a</h4>					<div style="float:right;padding-right:9px;"><a style="border:0;color:#005EA7" href="http://my.360buy.com/history/list.html" target="_blank">\u67e5\u770b\u6d4f\u89c8\u5386\u53f2&nbsp;&gt;</a></div>				</div>				<div class="smc" id="jduc-viewlist">					<div class="loading-style1"><b></b>\u52a0\u8f7d\u4e2d\uff0c\u8bf7\u7a0d\u5019...</div>					<ul class="lh hide"></ul>				</div>			</div>',
        fragment: '<li><a href="${url}" target="_blank" title="${decodeURIComponent(name)}"><img src="${img}" width="50" height="50" alt="${decodeURIComponent(name)}" /></a></li>'

    },
    FN_SetState: function(a) {
        var a = a;
        if (a.length > 4) {
            a = "<span title=" + a + ">" + a.substr(0, 4) + "...</span>"

        }
        return a

    },
    FN_InitVList: function(a) {
        var b = a.split(".");
        $.each(b, 
        function(c) {
            if (c >= 5) {
                return

            }
            $.getJSONP("http://www.360buy.com/lishiset.aspx?callback=UC.FN_ShowVList&id=" + b[c], UC.FN_ShowVList)

        })

    },
    FN_ShowVList: function(b) {
        var c = $("#jduc-viewlist").find(".loading-style1");
        if (c.length > 0) {
            c.hide()

        }
        var a = this.TPL_VList.fragment.process(b);
        $("#jduc-viewlist").find("ul").eq(0).append(a).show()

    },
    FN_setWords: function(b) {
        var c = '<font style="color:{0}">({1})</font>',
        a = "";
        if (b == 0) {
            a = "#ccc"

        } else {
            a = "#c00"

        }
        return pageConfig.FN_StringFormat(c, a, b)

    },
    FN_InitOList: function() {
        $.ajax({
            url: "http://minijd.360buy.com/getOrderList",
            dataType: "jsonp",
            success: function(b) {
                if (b && b.error == 0 && b.orderList) {
                    var a = UC.TPL_OList.fragment.process(b);
                    $("#jduc-orderlist").html(a)

                }

            }

        });
        $.ajax({
            url: "http://minijd.360buy.com/getHomeCount",
            dataType: "jsonp",
            success: function(a) {
                if (a && a.error == 0) {
                    $("#num-unfinishedorder").html(UC.FN_setWords(a.orderCount))

                }

            }

        });
        $.ajax({
            url: "http://comm.360buy.com/index.php?mod=Consultation&action=havingReplyCount",
            dataType: "jsonp",
            success: function(a) {
                if (a) {
                    $("#num-consultation").html(UC.FN_setWords(a.cnt))

                }

            }

        });
        $.ajax({
            url: "http://t.360buy.com/follow/followProductCount.action",
            data: {
                method: "GetCount"

            },
            dataType: "jsonp",
            success: function(a) {
                if (a) {
                    $("#num-reduction").html(UC.FN_setWords(a.priceReduction))

                }

            }

        });
        $.ajax({
            url: "http://coupon.360buy.com/service.ashx",
            data: {
                m: "getcouponcount"

            },
            dataType: "jsonp",
            success: function(a) {
                if (a) {
                    $("#num-ticket").html(UC.FN_setWords(a.CouponCount))

                }

            }

        })

    }

};
var $o = (function(g) {
    var e = {};
    e.replace = function(r, s) {
        return r.replace(/#{(.*?)}/g, 
        function() {
            var t = arguments[1];
            if ("undefined" != typeof(s[t])) {
                return s[t]

            } else {
                return arguments[0]

            }

        })

    };
    String.prototype.trim = function() {
        return this.replace(/^\s*(.*?)\s*$/, "$1")

    };
    String.prototype.isEmpty = function() {
        if (0 == this.length) {
            return true

        } else {
            return false

        }

    };
    var m = '<a id="d_#{id}" href="javascript:void(0);" title="#{title}" onclick="$o.clickItem(this)" cid="#{cid}" cLevel="#{cLevel}" ev_val="#{ev_val}" onmouseover="$o.mouseOverEvItem(event, this);" onmouseout="$o.mouseOutEvItem(event, this);">#{ev_name}</a>';
    var c = '<a href="javascript:void(0);" title="#{title}" onclick="$o.clickItem(this)" cid="#{cid}" cLevel="#{cLevel}" onmouseover="$o.mouseOverEvItem(event, this)" onmouseout="$o.mouseOutEvItem(event, this);">\u66F4\u591A&gt;&gt;</a>';
    var f = '<div id="d_#{id}" class="item3" cid="#{cid}" cLevel="#{cLevel}" onmouseover="$o.mouseOverItem(this)" onmouseout="$o.mouseOutItem(this)"><span>\u6309#{es_name}\uff1a</span>#{evs}</div>';
    var h = '<li id="d_#{id}" title="#{title}" onclick="$o.clickItem(this)" onmouseover="$o.mouseOverItem(this)" onmouseout="$o.mouseOutItem(this)"><div>#{keyword}</div></li>';
    var b = '<div id="d_#{id}" class="#{className}" title="#{title}" cid="#{cid}" cLevel="#{cLevel}" onclick="$o.clickItem(this)" onmouseover="$o.mouseOverItem(this)" onmouseout="$o.mouseOutItem(this)">\u5728<strong>#{cname}</strong>\u5206\u7c7b\u4e2d\u641c\u7d22</div>';
    var k = '<li class="fore1"><div id="d_#{id}" class="fore1" title="#{title}" onclick="$o.clickItem(this)" onmouseover="$o.mouseOverItem(this)" onmouseout="$o.mouseOutItem(this)">#{keyword}</div>#{categorys}</li>';
    var n = "dd.search.360buy.com";
    var p = "http://" + n + "/?key=#{keyword}&callback=$o.onloadItems";
    var o = "#FFDFC6";
    var d = "#FFF";
    var l = $("#key");
    var q = $("#shelper");
    function a() {
        this.length = 0;
        this.index = -1;
        this.HIndex = -1;
        this.needCreatedItem = false

    }
    a.prototype.init = function() {
        this.length = 0;
        this.index = -1;
        this.HIndex = -1;
        this.needCreatedItem = false

    };
    a.prototype.hideTip = function() {
        this.init();
        q.html("").hide()

    };
    a.prototype.clickItem = function(u) {
        var t = u.getAttribute("cid");
        if (null != t && "" != t) {
            search.cid = t

        } else {
            search.cid = null

        }
        var r = u.getAttribute("cLevel");
        if (null != r && "" != r) {
            search.cLevel = r

        } else {
            search.cLevel = null

        }
        var v = u.getAttribute("ev_val");
        if (null != v && !v.trim().isEmpty()) {
            search.ev_val = v

        } else {
            search.ev_val = null

        }
        var s = u.getAttribute("title");
        if (null != s && !s.trim().isEmpty()) {
            l.val(s)

        }
        search("key")

    };
    a.prototype.mouseOverItem = function(s) {
        if (null == s) {
            return

        }
        s.style.backgroundColor = o;
        if ( - 1 != this.index && null != s.id && !s.id.trim().isEmpty()) {
            var t = s.id.split("_");
            if (2 == t.length) {
                var r = parseInt(t[1], 10);
                if (r != this.index) {
                    $("#d_" + this.index).css("background-color", d);
                    this.index = r

                }
                if ( - 1 != this.HIndex) {
                    $("#d_" + this.index + "_" + this.HIndex).css("text-decoration", "none");
                    this.HIndex = -1

                }

            }

        }
        this.needCreatedItem = true

    };
    a.prototype.mouseOutItem = function(r) {
        if (null != r) {
            r.style.backgroundColor = d

        }
        this.needCreatedItem = false

    };
    a.prototype.mouseOverEvItem = function(t, u) {
        if ("function" == typeof(t.stopPropagation)) {
            t.stopPropagation()

        } else {
            t.cancelBubble = true

        }
        var r = parseInt(u.parentNode.id.split("_")[1]);
        this.index = r;
        var s = parseInt(u.id.split("_")[2], 10);
        this.HIndex = s;
        u.parentNode.style.backgroundColor = o;
        u.style.textDecoration = "underline";
        this.needCreatedItem = true

    };
    a.prototype.mouseOutEvItem = function(r, s) {
        if ("function" == typeof(r.stopPropagation)) {
            r.stopPropagation()

        } else {
            r.cancelBubble = true

        }
        s.parentNode.style.backgroundColor = d;
        s.style.textDecoration = "none"

    };
    a.prototype.moveUp = function() {
        var t = this;
        if (t.length > 0) {
            t.index -= 1;
            if (t.index < 0) {
                t.index = t.length - 1

            }
            var s = t.index;
            var r = (s == t.length - 1 ? 0: s + 1);
            t.selectItemNode(s, r)

        }

    };
    a.prototype.moveDown = function() {
        var s = this;
        if (s.length > 0) {
            s.index = ($o.index + 1) % $o.length;
            var r = s.index;
            var t = (0 === r ? $o.length - 1: r - 1);
            s.selectItemNode(r, t)

        }

    };
    a.prototype.selectItemNode = function(t, A) {
        var u = this;
        var z = $("#d_" + t);
        var w = $("#d_" + A);
        if (z.length > 0 && w.length > 0) {
            z.css("background-color", o);
            if (t != A) {
                w.css("background-color", d)

            }
            var y = z.attr("title");
            if (null != y && !y.trim().isEmpty()) {
                l.val(y)

            }
            var v = z.attr("cid");
            if (null != v && "" != v) {
                search.cid = v

            } else {
                search.cid = null

            }
            var x = z.attr("cLevel");
            if (null != x && "" != x) {
                search.cLevel = x

            } else {
                search.cLevel = null

            }
            search.ev_val = null;
            if ( - 1 != u.HIndex) {
                var s = $("#d_" + A + "_" + u.HIndex);
                if (s.length > 0) {
                    s.css("text-decoration", "none");
                    u.HIndex = -1

                }

            }
            var r = z.attr("class");
            if ( - 1 == u.HIndex && r == "item3") {
                u.moveRight()

            }

        }

    };
    a.prototype.moveLeft = function(r) {
        var y = this;
        var C = $("#d_" + y.index);
        var t = C.attr("class");
        if (null != t && "item3" == t) {
            var A = C.attr("ev_amount");
            var z = parseInt(A, 10);
            y.HIndex -= 1;
            if (y.HIndex < 0) {
                y.HIndex = z - 1

            }
            var w = y.HIndex;
            var B = "#d_" + y.index + "_" + y.HIndex;
            var v = $(B);
            var s = (w == z - 1 ? 0: w + 1);
            var x = "#d_" + y.index + "_" + s;
            var u = $(x);
            y.selectHorizontalItemNode(v, u)

        }

    };
    a.prototype.moveRight = function(r) {
        var x = this;
        var A = $("#d_" + x.index);
        var t = A.attr("class");
        if (null != t && "item3" == t) {
            var z = A.attr("ev_amount");
            var y = parseInt(z, 10);
            x.HIndex = (x.HIndex + 1) % y;
            var w = x.HIndex;
            var s = (0 == w ? y - 1: w - 1);
            var v = $("#d_" + x.index + "_" + w);
            var u = $("#d_" + x.index + "_" + s);
            x.selectHorizontalItemNode(v, u)

        }

    };
    a.prototype.selectHorizontalItemNode = function(s, t) {
        s.css("text-decoration", "underline");
        if (s.attr("id") != t.attr("id")) {
            t.css("text-decoration", "none")

        }
        var r = s.attr("ev_val");
        if (null != r && !r.trim().isEmpty()) {
            search.ev_val = r

        } else {
            search.ev_val = null

        }

    };
    a.prototype.keyup = function(u) {
        var t = this;
        var s = u;
        if (null != window.event && "object" == typeof(window.event)) {
            s = window.event

        }
        if (0 == l.length) {
            l = $("#key")

        }
        if (0 == q.length) {
            q = $("tie")

        }
        var r = l.val().trim();
        if ("" == r) {
            q.html("").hide();
            return

        }
        var w = s.keyCode;
        switch (w) {
            case 37:
            t.moveLeft(s);
            break;
            case 38:
            t.moveUp(s);
            break;
            case 39:
            t.moveRight(s);
            break;
            case 40:
            t.moveDown();
            break;
            case 27:
            t.hideTip();
            break;
            default:
            r = encodeURIComponent(r);
            var v = e.replace(p, {
                keyword: r

            });
            $.ajax({
                url: v,
                dataType: "jsonp",
                scriptCharset: "utf-8",
                jsonp: "jsonp_callback"

            });
            break

        }

    };
    a.prototype.onloadItems = function(ap) {
        var ax = l.val().trim();
        if ("" == ax) {
            q.html("").hide();
            return

        }
        var F = ap.length;
        if (0 == F) {
            this.hideTip();
            return

        }
        var ah = this;
        ah.init();
        var Y = "";
        var ad = "";
        var G = "";
        var U = 0;
        if ("undefined" != typeof(window.pageConfig) && "undefined" != typeof(window.pageConfig.searchType)) {
            U = window.pageConfig.searchType

        }
        var W = /^[1-8]4$/;
        var M = false;
        var X = false;
        var s = 0;
        var I = 0;
        for (var aw = 0, av = 0, O = F; aw < O; aw++) {
            var w = ap[aw];
            var z = l.val().trim();
            var P = new RegExp("^(" + z + ")");
            var Q = w.keyword.trim();
            var ag = Q.search(P);
            var S = Q;
            if (ag > -1) {
                var aA = Q.replace(P, "");
                S = z + "<strong>" + aA + "</strong>"

            }
            if ("string" == typeof(w.cid) && !w.cid.trim().isEmpty()) {
                if ("" == ad) {
                    ad = e.replace(k, {
                        id: av,
                        title: w.keyword,
                        keyword: S

                    });
                    av += 1

                }
                if ("string" == typeof(w.cname) && w.cname.trim().isEmpty()) {
                    F -= 1;
                    continue

                }
                var H = w.level;
                if (null == H || "undefined" == typeof(H)) {
                    F -= 1;
                    continue

                }
                if (0 == U) {
                    X = true;
                    if ("string" == typeof(H) && W.test(H)) {
                        F -= 1;
                        continue

                    }

                } else {
                    if (5 == U) {
                        if ("string" == typeof(H) && !(/^[5-8]2$/.test(H))) {
                            F -= 1;
                            continue

                        }

                    } else {
                        if (1 == U || 2 == U || 3 == U || 4 == U) {
                            F -= 1;
                            continue

                        }

                    }

                }
                var al = "";
                if ("3" == H && null != w.expand && (w.expand instanceof Array) && w.expand.length > 0) {
                    M = true

                } else {
                    M = false

                }
                var E = "";
                if (M) {
                    E = "item2"

                } else {
                    E = "item1"

                }
                var ak = e.replace(b, {
                    id: av,
                    title: w.keyword,
                    cid: w.cid,
                    cLevel: w.level,
                    className: E,
                    cname: w.cname

                });
                var T = "";
                if (M) {
                    var J = w.expand;
                    s = w.expand.length;
                    loopEs: for (var au = 0; au < s; au++) {
                        var aq = w.expand[au];
                        var aa = aq.esname;
                        if (null == aa || "undefined" == typeof(aa) || "" == aa) {
                            continue loopEs

                        }
                        var ae = aq.esid;
                        if (null == ae || "undefined" == typeof(ae) || "" == ae) {
                            continue loopEs

                        }
                        av += 1;
                        if (0 == I) {
                            I = av

                        }
                        var A = aq.evs;
                        var ar = 0;
                        var v = false;
                        if (null != A && (A instanceof Array) && A.length > 0) {
                            v = true;
                            ar = A.length

                        } else {
                            v = false

                        }
                        var V = e.replace(f, {
                            id: av,
                            cid: w.cid,
                            cLevel: w.level,
                            es_name: aa

                        });
                        if (v) {
                            sEvTmp = "";
                            loopEv: for (var an = 0; an < ar; an++) {
                                var N = A[an];
                                var am = N.evname;
                                var L = N.evid;
                                if (null == am || "" == am) {
                                    continue loopEv

                                }
                                if (null == L || "" == L) {
                                    continue loopEv

                                }
                                var D = encodeURIComponent(aa) + "_" + encodeURIComponent(am);
                                if ("\u4EF7\u683C" == aa) {
                                    var az = "";
                                    if (am.search(/(\d*).*\u4E0B/) > -1) {
                                        az = "0-" + RegExp.$1

                                    } else {
                                        if (am.search(/(\d*).*\u4E0A/) > -1) {
                                            az = RegExp.$1 + "gt"

                                        } else {
                                            az = am.replace(/\uff0d/g, "-")

                                        }

                                    }
                                    D = "exprice_" + az

                                }
                                if ("\u54C1\u724C" == aa) {
                                    D = "exbrand_" + encodeURIComponent(am)

                                }
                                var ao = av + "_" + an;
                                sEvTmp += e.replace(m, {
                                    id: ao,
                                    title: w.keyword,
                                    ev_name: am,
                                    ev_val: D,
                                    cid: w.cid,
                                    cLevel: w.level

                                })

                            }
                            sEvTmp += e.replace(c, {
                                title: w.keyword,
                                cid: w.cid,
                                cLevel: w.level

                            });
                            V = e.replace(V, {
                                evs: sEvTmp

                            })

                        }
                        T += V

                    }

                }
                ak += T;
                G += ak

            } else {
                var ak = e.replace(h, {
                    id: av,
                    title: w.keyword,
                    keyword: S

                });
                Y += ak

            }
            av += 1

        }
        if ("" != ad) {
            ad = e.replace(ad, {
                categorys: G

            });
            Y = ad + Y;
            ah.length = F + 1

        } else {
            ah.length = F

        }
        ah.length += s;
        if ("" != Y) {
            Y += '<li class="close" onclick="$o.hideTip()">\u5173\u95ed</li>';
            q.html(Y).show();
            var ai = $("ul#shelper .item3");
            var ab = ai.length;
            if (ab <= 3) {
                for (var aw = 0; aw < ab; aw++) {
                    var R = ai[aw];
                    var ac = $(R);
                    var B = ac.children("a");
                    var aj = ac.offset().top;
                    var Z = ac.height();
                    var C = aj + Z / 2;
                    var K = B.length - 1;
                    var y = null;
                    var x = null;
                    evLoop: for (var av = K; av >= 0; av--) {
                        var u = B[av];
                        if (null == y) {
                            y = u.parentNode

                        }
                        var af = $(u);
                        if (av == K) {
                            x = af

                        }
                        var ay = af.offset().top;
                        if (av < K && ay > C) {
                            var aB = u;
                            y.removeChild(aB)

                        } else {
                            continue evLoop

                        }

                    }
                    if (null != x && null != y) {
                        var r = y.children.length;
                        if (x.offset().top > C && r >= 2) {
                            y.removeChild(y.children[r - 2]);
                            r -= 1

                        }
                        var at = "d_" + (I + aw) + "_" + (r - 2);
                        y.lastChild.setAttribute("id", at);
                        y.setAttribute("ev_amount", r - 1)

                    }

                }

            }

        } else {
            q.html("").hide()

        }

    };
    var j = new a();
    l.keyup(function(r) {
        j.keyup(r)

    });
    l.blur(function() {
        if (!j.needCreatedItem) {
            j.hideTip()

        }

    });
    return j

})();