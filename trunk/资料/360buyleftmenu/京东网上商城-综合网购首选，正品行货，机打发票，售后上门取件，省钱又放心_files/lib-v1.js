if (document.getElementById("nav-minitiao")) {
    document.getElementById("nav-minitiao").innerHTML = '<a target="_blank" href="http://www.minitiao.com/">\u8ff7\u4f60\u6311</a>'

} (function() {
    var f = document.getElementById("footer"),
    e = document.getElementById("shortcut"),
    h = document.getElementById("nav-club");
    if (f) {
        f = f.getElementsByTagName("div")[0];
        f.innerHTML = f.innerHTML.replace("bbs.360buy.com", "club.360buy.com").replace("\u4eac\u4e1c\u8bba\u575b", "\u4eac\u4e1c\u793e\u533a")

    }
    if (e) {
        var g = document.createElement("div");
        e = e.getElementsByTagName("ul")[1].getElementsByTagName("dd")[0];
        g.innerHTML = "<a href='http://club.360buy.com/' target='_blank'>\u4eac\u4e1c\u793e\u533a</a>";
        e.appendChild(g)

    }
    if (h && pageConfig.navId != "club") {
        h.innerHTML = "<a href='http://wan.360buy.com/'>\u5728\u7ebf\u6e38\u620f</a>";
        h.setAttribute("id", "nav-wan")

    }

})();
eval(function(h, b, j, d, g, f) {
    g = function(a) {
        return (a < b ? "": g(parseInt(a / b))) + ((a = a % b) > 35 ? String.fromCharCode(a + 29) : a.toString(36))

    };
    if (!"".replace(/^/, String)) {
        while (j--) {
            f[g(j)] = d[j] || g(j)

        }
        d = [function(a) {
            return f[a]

        }];
        g = function() {
            return "\\w+"

        };
        j = 1

    }
    while (j--) {
        if (d[j]) {
            h = h.replace(new RegExp("\\b" + g(j) + "\\b", "g"), d[j])

        }

    }
    return h

} ("(4($){$.R($.7,{3:4(c,b,d){9 e=2,q;5($.O(c))d=b,b=c,c=z;$.h($.3.j,4(i,a){5(e.8==a.8&&e.g==a.g&&c==a.m&&(!b||b.$6==a.7.$6)&&(!d||d.$6==a.o.$6))l(q=a)&&v});q=q||Y $.3(2.8,2.g,c,b,d);q.u=v;$.3.s(q.F);l 2},T:4(c,b,d){9 e=2;5($.O(c))d=b,b=c,c=z;$.h($.3.j,4(i,a){5(e.8==a.8&&e.g==a.g&&(!c||c==a.m)&&(!b||b.$6==a.7.$6)&&(!d||d.$6==a.o.$6)&&!2.u)$.3.y(a.F)});l 2}});$.3=4(e,c,a,b,d){2.8=e;2.g=c||S;2.m=a;2.7=b;2.o=d;2.t=[];2.u=v;2.F=$.3.j.K(2)-1;b.$6=b.$6||$.3.I++;5(d)d.$6=d.$6||$.3.I++;l 2};$.3.p={y:4(){9 b=2;5(2.m)2.t.16(2.m,2.7);E 5(2.o)2.t.h(4(i,a){b.o.x(a)});2.t=[];2.u=Q},s:4(){5(2.u)l;9 b=2;9 c=2.t,w=$(2.8,2.g),H=w.11(c);2.t=w;5(2.m){H.10(2.m,2.7);5(c.C>0)$.h(c,4(i,a){5($.B(a,w)<0)$.Z.P(a,b.m,b.7)})}E{H.h(4(){b.7.x(2)});5(2.o&&c.C>0)$.h(c,4(i,a){5($.B(a,w)<0)b.o.x(a)})}}};$.R($.3,{I:0,j:[],k:[],A:v,D:X,N:4(){5($.3.A&&$.3.k.C){9 a=$.3.k.C;W(a--)$.3.j[$.3.k.V()].s()}},U:4(){$.3.A=v},M:4(){$.3.A=Q;$.3.s()},L:4(){$.h(G,4(i,n){5(!$.7[n])l;9 a=$.7[n];$.7[n]=4(){9 r=a.x(2,G);$.3.s();l r}})},s:4(b){5(b!=z){5($.B(b,$.3.k)<0)$.3.k.K(b)}E $.h($.3.j,4(a){5($.B(a,$.3.k)<0)$.3.k.K(a)});5($.3.D)1j($.3.D);$.3.D=1i($.3.N,1h)},y:4(b){5(b!=z)$.3.j[b].y();E $.h($.3.j,4(a){$.3.j[a].y()})}});$.3.L('1g','1f','1e','1b','1a','19','18','17','1c','15','1d','P');$(4(){$.3.M()});9 f=$.p.J;$.p.J=4(a,c){9 r=f.x(2,G);5(a&&a.8)r.g=a.g,r.8=a.8;5(14 a=='13')r.g=c||S,r.8=a;l r};$.p.J.p=$.p})(12);", 62, 82, "||this|livequery|function|if|lqguid|fn|selector|var|||||||context|each||queries|queue|return|type||fn2|prototype|||run|elements|stopped|false|els|apply|stop|undefined|running|inArray|length|timeout|else|id|arguments|nEls|guid|init|push|registerPlugin|play|checkQueue|isFunction|remove|true|extend|document|expire|pause|shift|while|null|new|event|bind|not|jQuery|string|typeof|toggleClass|unbind|addClass|removeAttr|attr|wrap|before|removeClass|empty|after|prepend|append|20|setTimeout|clearTimeout".split("|"), 0, {}));
new
function(e) {
    var d = e.separator || "&";
    var c = e.spaces === false ? false: true;
    var a = e.suffix === false ? "": "[]";
    var g = e.prefix === false ? false: true;
    var b = g ? e.hash === true ? "#": "?": "";
    var f = e.numbers === false ? false: true;
    jQuery.query = new
    function() {
        var h = function(n, m) {
            return n != undefined && n !== null && ( !! m ? n.constructor == m: true)

        };
        var j = function(s) {
            var n,
            r = /\[([^[]*)\]/g,
            o = /^(\S+?)(\[\S*\])?$/.exec(s),
            p = o[1],
            q = [];
            while (n = r.exec(o[2])) {
                q.push(n[1])

            }
            return [p, q]

        };
        var l = function(t, s, r) {
            var u,
            q = s.shift();
            if (typeof t != "object") {
                t = null

            }
            if (q === "") {
                if (!t) {
                    t = []

                }
                if (h(t, Array)) {
                    t.push(s.length == 0 ? r: l(null, s.slice(0), r))

                } else {
                    if (h(t, Object)) {
                        var p = 0;
                        while (t[p++] != null) {}
                        t[--p] = s.length == 0 ? r: l(t[p], s.slice(0), r)

                    } else {
                        t = [];
                        t.push(s.length == 0 ? r: l(null, s.slice(0), r))

                    }

                }

            } else {
                if (q && q.match(/^\s*[0-9]+\s*$/)) {
                    var n = parseInt(q, 10);
                    if (!t) {
                        t = []

                    }
                    t[n] = s.length == 0 ? r: l(t[n], s.slice(0), r)

                } else {
                    if (q) {
                        var n = q.replace(/^\s*|\s*$/g, "");
                        if (!t) {
                            t = {}

                        }
                        if (h(t, Array)) {
                            var m = {};
                            for (var p = 0; p < t.length; ++p) {
                                m[p] = t[p]

                            }
                            t = m

                        }
                        t[n] = s.length == 0 ? r: l(t[n], s.slice(0), r)

                    } else {
                        return r

                    }

                }

            }
            return t

        };
        var k = function(m) {
            var n = this;
            n.keys = {};
            if (m.queryObject) {
                jQuery.each(m.get(), 
                function(o, p) {
                    n.SET(o, p)

                })

            } else {
                jQuery.each(arguments, 
                function() {
                    var o = "" + this;
                    o = o.replace(/^[?#]/, "");
                    o = o.replace(/[;&]$/, "");
                    if (c) {
                        o = o.replace(/[+]/g, " ")

                    }
                    jQuery.each(o.split(/[&;]/), 
                    function() {
                        var p = decodeURIComponent(this.split("=")[0]);
                        var q = decodeURIComponent(encodeURIComponent(this.split("=")[1]));
                        if (!p) {
                            return

                        }
                        if (f) {
                            if (/^[+-]?[0-9]+\.[0-9]*$/.test(q)) {
                                q = parseFloat(q)

                            } else {
                                if (/^[+-]?[0-9]+$/.test(q)) {
                                    q = parseInt(q, 10)

                                }

                            }

                        }
                        q = (!q && q !== 0) ? true: q;
                        if (q !== false && q !== true && typeof q != "number") {
                            q = q

                        }
                        n.SET(p, q)

                    })

                })

            }
            return n

        };
        k.prototype = {
            queryObject: true,
            has: function(m, n) {
                var o = this.get(m);
                return h(o, n)

            },
            GET: function(n) {
                if (!h(n)) {
                    return this.keys

                }
                var m = j(n),
                o = m[0],
                q = m[1];
                var p = this.keys[o];
                while (p != null && q.length != 0) {
                    p = p[q.shift()]

                }
                return typeof p == "number" ? p: p || ""

            },
            get: function(m) {
                var n = this.GET(m);
                if (h(n, Object)) {
                    return jQuery.extend(true, {},
                    n)

                } else {
                    if (h(n, Array)) {
                        return n.slice(0)

                    }

                }
                return n

            },
            SET: function(n, s) {
                var p = !h(s) ? null: s;
                var m = j(n),
                o = m[0],
                r = m[1];
                var q = this.keys[o];
                this.keys[o] = l(q, r.slice(0), p);
                return this

            },
            set: function(m, n) {
                return this.copy().SET(m, n)

            },
            REMOVE: function(m) {
                return this.SET(m, null).COMPACT()

            },
            remove: function(m) {
                return this.copy().REMOVE(m)

            },
            EMPTY: function() {
                var m = this;
                jQuery.each(m.keys, 
                function(n, o) {
                    delete m.keys[n]

                });
                return m

            },
            load: function(m) {
                var o = m.replace(/^.*?[#](.+?)(?:\?.+)?$/, "$1");
                var n = m.replace(/^.*?[?](.+?)(?:#.+)?$/, "$1");
                return new k(m.length == n.length ? "": n, m.length == o.length ? "": o)

            },
            empty: function() {
                return this.copy().EMPTY()

            },
            copy: function() {
                return new k(this)

            },
            COMPACT: function() {
                function m(p) {
                    var o = typeof p == "object" ? h(p, Array) ? [] : {}: p;
                    if (typeof p == "object") {
                        function n(s, q, r) {
                            if (h(s, Array)) {
                                s.push(r)

                            } else {
                                s[q] = r

                            }

                        }
                        jQuery.each(p, 
                        function(q, r) {
                            if (!h(r)) {
                                return true

                            }
                            n(o, q, m(r))

                        })

                    }
                    return o

                }
                this.keys = m(this.keys);
                return this

            },
            compact: function() {
                return this.copy().COMPACT()

            },
            toString: function() {
                var o = 0,
                r = [],
                q = [],
                n = this;
                var m = function(s, t, u) {
                    if (!h(u) || u === false) {
                        return

                    }
                    var v = [encodeURIComponent(t)];
                    if (u !== true) {
                        v.push("=");
                        v.push(encodeURIComponent(u))

                    }
                    s.push(v.join(""))

                };
                var p = function(t, s) {
                    var u = function(v) {
                        return ! s || s == "" ? [v].join("") : [s, "[", v, "]"].join("")

                    };
                    jQuery.each(t, 
                    function(v, w) {
                        if (typeof w == "object") {
                            p(w, u(v))

                        } else {
                            m(q, u(v), w)

                        }

                    })

                };
                p(this.keys);
                if (q.length > 0) {
                    r.push(b)

                }
                r.push(q.join(d));
                return r.join("")

            }

        };
        return new k(location.search, location.hash)

    }

} (jQuery.query || {});
eval(function(h, b, j, d, g, f) {
    g = function(a) {
        return (a < b ? "": g(parseInt(a / b))) + ((a = a % b) > 35 ? String.fromCharCode(a + 29) : a.toString(36))

    };
    if (!"".replace(/^/, String)) {
        while (j--) {
            f[g(j)] = d[j] || g(j)

        }
        d = [function(a) {
            return f[a]

        }];
        g = function() {
            return "\\w+"

        };
        j = 1

    }
    while (j--) {
        if (d[j]) {
            h = h.replace(new RegExp("\\b" + g(j) + "\\b", "g"), d[j])

        }

    }
    return h

} ("n.5=v(a,b,c){4(7 b!='w'){c=c||{};4(b===o){b='';c.3=-1}2 d='';4(c.3&&(7 c.3=='p'||c.3.q)){2 e;4(7 c.3=='p'){e=x y();e.z(e.A()+(c.3*B*r*r*C))}s{e=c.3}d=';3='+e.q()}2 f=c.8?';8='+(c.8):'';2 g=c.9?';9='+(c.9):'';2 h=c.t?';t':'';6.5=[a,'=',D(b),d,f,g,h].E('')}s{2 j=o;4(6.5&&6.5!=''){2 k=6.5.F(';');G(2 i=0;i<k.m;i++){2 l=n.H(k[i]);4(l.u(0,a.m+1)==(a+'=')){j=I(l.u(a.m+1));J}}}K j}};", 47, 47, "||var|expires|if|cookie|document|typeof|path|domain|||||||||||||length|jQuery|null|number|toUTCString|60|else|secure|substring|function|undefined|new|Date|setTime|getTime|24|1000|encodeURIComponent|join|split|for|trim|decodeURIComponent|break|return".split("|"), 0, {}));
Function.prototype.overwrite = function(b) {
    var a = b;
    if (!a.original) {
        a.original = this

    }
    return a

};
Date.prototype.toString = Date.prototype.toString.overwrite(function(b) {
    var a = new String();
    if (typeof(b) == "string") {
        a = b;
        a = a.replace(/yyyy|YYYY/, this.getFullYear());
        a = a.replace(/yy|YY/, this.getFullYear().toString().substr(2, 2));
        a = a.replace(/MM/, this.getMonth() >= 9 ? this.getMonth() + 1: "0" + (this.getMonth() + 1));
        a = a.replace(/M/, this.getMonth());
        a = a.replace(/dd|DD/, this.getDate() > 9 ? this.getDate() : "0" + this.getDate());
        a = a.replace(/d|D/, this.getDate());
        a = a.replace(/hh|HH/, this.getHours() > 9 ? this.getHours() : "0" + this.getHours());
        a = a.replace(/h|H/, this.getHours());
        a = a.replace(/mm/, this.getMinutes() > 9 ? this.getMinutes() : "0" + this.getMinutes());
        a = a.replace(/m/, this.getMinutes());
        a = a.replace(/ss|SS/, this.getSeconds() > 9 ? this.getSeconds() : "0" + this.getSeconds());
        a = a.replace(/s|S/, this.getSeconds())

    }
    return a

});
String.prototype.format = function() {
    var a = this;
    if (arguments.length > 0) {
        parameters = $.makeArray(arguments);
        $.each(parameters, 
        function(b, c) {
            a = a.replace(new RegExp("\\{" + b + "\\}", "g"), c)

        })

    }
    return a

};
function StringBuilder() {
    this.strings = new Array();
    this.length = 0

}
StringBuilder.prototype.append = function(a) {
    this.strings.push(a);
    this.length += a.length

};
StringBuilder.prototype.toString = function(b, a) {
    return this.strings.join("").substr(b, a)

}; (function($) {
    $.jmsajax = function(options) {
        var defaults = {
            type: "POST",
            dataType: "msjson",
            data: {},
            beforeSend: function(xhr) {
                xhr.setRequestHeader("Content-type", "application/json; charset=utf-8")

            },
            contentType: "application/json; charset=utf-8",
            error: function(x, s, m) {
                alert("Status: " + ((x.statusText) ? x.statusText: "Unknown") + "\nMessage: " + msJSON.parse(((x.responseText) ? x.responseText: "Unknown")).Message)

            }

        };
        var options = $.extend(defaults, options);
        if (options.method) {
            options.url += "/" + options.method

        }
        if (options.data) {
            if (options.type == "GET") {
                var data = "";
                for (var i in options.data) {
                    if (data != "") {
                        data += "&"

                    }
                    data += i + "=" + msJSON.stringify(options.data[i])

                }
                options.url += "?" + data;
                data = null;
                options.data = "{}"

            } else {
                if (options.type == "POST") {
                    options.data = msJSON.stringify(options.data)

                }

            }

        }
        if (options.success) {
            if (options.dataType) {
                if (options.dataType == "msjson") {
                    var base = options.success;
                    options.success = function(response, status) {
                        var y = dateparse(response);
                        if (options.version) {
                            if (options.version >= 3.5) {
                                y = y.d

                            }

                        } else {
                            if (response.indexOf('{"d":') == 0) {
                                y = y.d

                            }

                        }
                        base(y, status)

                    }

                }

            }

        }
        return $.ajax(options)

    };
    dateparse = function(data) {
        try {
            return msJSON.parse(data, 
            function(key, value) {
                var a;
                if (typeof value === "string") {
                    if (value.indexOf("Date") >= 0) {
                        a = /^\/Date\(([0-9]+)\)\/$/.exec(value);
                        if (a) {
                            return new Date(parseInt(a[1], 10))

                        }

                    }

                }
                return value

            })

        } catch(e) {
            return null

        }

    };
    msJSON = function() {
        function f(n) {
            return n < 10 ? "0" + n: n

        }
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapeable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"

        },
        rep;
        function quote(string) {
            escapeable.lastIndex = 0;
            return escapeable.test(string) ? '"' + string.replace(escapeable, 
            function(a) {
                var c = meta[a];
                if (typeof c === "string") {
                    return c

                }
                return "\\u" + ("0000" + ( + (a.charCodeAt(0))).toString(16)).slice( - 4)

            }) + '"': '"' + string + '"'

        }
        function str(key, holder) {
            var i,
            k,
            v,
            length,
            mind = gap,
            partial,
            value = holder[key];
            if (value && typeof value === "object" && typeof value.toJSON === "function") {
                value = value.toJSON(key)

            }
            if (typeof rep === "function") {
                value = rep.call(holder, key, value)

            }
            switch (typeof value) {
                case "string":
                return quote(value);
                case "number":
                return isFinite(value) ? String(value) : "null";
                case "boolean":
            case "null":
                return String(value);
                case "object":
                if (!value) {
                    return "null"

                }
                if (value.toUTCString) {
                    return '"\\/Date(' + (value.getTime()) + ')\\/"'

                }
                gap += indent;
                partial = [];
                if (typeof value.length === "number" && !(value.propertyIsEnumerable("length"))) {
                    length = value.length;
                    for (i = 0; i < length; i += 1) {
                        partial[i] = str(i, value) || "null"

                    }
                    v = partial.length === 0 ? "[]": gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]": "[" + partial.join(",") + "]";
                    gap = mind;
                    return v

                }
                if (rep && typeof rep === "object") {
                    length = rep.length;
                    for (i = 0; i < length; i += 1) {
                        k = rep[i];
                        if (typeof k === "string") {
                            v = str(k, value, rep);
                            if (v) {
                                partial.push(quote(k) + (gap ? ": ": ":") + v)

                            }

                        }

                    }

                } else {
                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = str(k, value, rep);
                            if (v) {
                                partial.push(quote(k) + (gap ? ": ": ":") + v)

                            }

                        }

                    }

                }
                v = partial.length === 0 ? "{}": gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}": "{" + partial.join(",") + "}";
                gap = mind;
                return v

            }

        }
        return {
            stringify: function(value, replacer, space) {
                var i;
                gap = "";
                indent = "";
                if (typeof space === "number") {
                    for (i = 0; i < space; i += 1) {
                        indent += " "

                    }

                } else {
                    if (typeof space === "string") {
                        indent = space

                    }

                }
                rep = replacer;
                if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                    throw new Error("JSON.stringify")

                }
                return str("", {
                    "": value

                })

            },
            parse: function(text, reviver) {
                var j;
                function walk(holder, key) {
                    var k,
                    v,
                    value = holder[key];
                    if (value && typeof value === "object") {
                        for (k in value) {
                            if (Object.hasOwnProperty.call(value, k)) {
                                v = walk(value, k);
                                if (v !== undefined) {
                                    value[k] = v

                                } else {
                                    delete value[k]

                                }

                            }

                        }

                    }
                    return reviver.call(holder, key, value)

                }
                cx.lastIndex = 0;
                if (cx.test(text)) {
                    text = text.replace(cx, 
                    function(a) {
                        return "\\u" + ("0000" + ( + (a.charCodeAt(0))).toString(16)).slice( - 4)

                    })

                }
                if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                    j = eval("(" + text + ")");
                    return typeof reviver === "function" ? walk({
                        "": j

                    },
                    "") : j

                }
                throw new SyntaxError("JSON.parse")

            }

        }

    } ()

})(jQuery);
var TrimPath; (function() {
    if (TrimPath == null) {
        TrimPath = new Object()

    }
    if (TrimPath.evalEx == null) {
        TrimPath.evalEx = function(src) {
            return eval(src)

        }

    }
    var UNDEFINED;
    if (Array.prototype.pop == null) {
        Array.prototype.pop = function() {
            if (this.length === 0) {
                return UNDEFINED

            }
            return this[--this.length]

        }

    }
    if (Array.prototype.push == null) {
        Array.prototype.push = function() {
            for (var i = 0; i < arguments.length; ++i) {
                this[this.length] = arguments[i]

            }
            return this.length

        }

    }
    TrimPath.parseTemplate = function(tmplContent, optTmplName, optEtc) {
        if (optEtc == null) {
            optEtc = TrimPath.parseTemplate_etc

        }
        var funcSrc = parse(tmplContent, optTmplName, optEtc);
        var func = TrimPath.evalEx(funcSrc, optTmplName, 1);
        if (func != null) {
            return new optEtc.Template(optTmplName, tmplContent, funcSrc, func, optEtc)

        }
        return null

    };
    try {
        String.prototype.process = function(context, optFlags) {
            var template = TrimPath.parseTemplate(this, null);
            if (template != null) {
                return template.process(context, optFlags)

            }
            return this

        }

    } catch(e) {}
    TrimPath.parseTemplate_etc = {};
    TrimPath.parseTemplate_etc.statementTag = "forelse|for|if|elseif|else|var|macro";
    TrimPath.parseTemplate_etc.statementDef = {
        "if": {
            delta: 1,
            prefix: "if (",
            suffix: ") {",
            paramMin: 1

        },
        "else": {
            delta: 0,
            prefix: "} else {"

        },
        elseif: {
            delta: 0,
            prefix: "} else if (",
            suffix: ") {",
            paramDefault: "true"

        },
        "/if": {
            delta: -1,
            prefix: "}"

        },
        "for": {
            delta: 1,
            paramMin: 3,
            prefixFunc: function(stmtParts, state, tmplName, etc) {
                if (stmtParts[2] != "in") {
                    throw new etc.ParseError(tmplName, state.line, "bad for loop statement: " + stmtParts.join(" "))

                }
                var iterVar = stmtParts[1];
                var listVar = "__LIST__" + iterVar;
                return ["var ", listVar, " = ", stmtParts[3], ";", "var __LENGTH_STACK__;", "if (typeof(__LENGTH_STACK__) == 'undefined' || !__LENGTH_STACK__.length) __LENGTH_STACK__ = new Array();", "__LENGTH_STACK__[__LENGTH_STACK__.length] = 0;", "if ((", listVar, ") != null) { ", "var ", iterVar, "_ct = 0;", "for (var ", iterVar, "_index in ", listVar, ") { ", iterVar, "_ct++;", "if (typeof(", listVar, "[", iterVar, "_index]) == 'function') {continue;}", "__LENGTH_STACK__[__LENGTH_STACK__.length - 1]++;", "var ", iterVar, " = ", listVar, "[", iterVar, "_index];"].join("")

            }

        },
        forelse: {
            delta: 0,
            prefix: "} } if (__LENGTH_STACK__[__LENGTH_STACK__.length - 1] == 0) { if (",
            suffix: ") {",
            paramDefault: "true"

        },
        "/for": {
            delta: -1,
            prefix: "} }; delete __LENGTH_STACK__[__LENGTH_STACK__.length - 1];"

        },
        "var": {
            delta: 0,
            prefix: "var ",
            suffix: ";"

        },
        macro: {
            delta: 1,
            prefixFunc: function(stmtParts, state, tmplName, etc) {
                var macroName = stmtParts[1].split("(")[0];
                return ["var ", macroName, " = function", stmtParts.slice(1).join(" ").substring(macroName.length), "{ var _OUT_arr = []; var _OUT = { write: function(m) { if (m) _OUT_arr.push(m); } }; "].join("")

            }

        },
        "/macro": {
            delta: -1,
            prefix: " return _OUT_arr.join(''); };"

        }

    };
    TrimPath.parseTemplate_etc.modifierDef = {
        eat: function(v) {
            return ""

        },
        escape: function(s) {
            return String(s).replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">")

        },
        capitalize: function(s) {
            return String(s).toUpperCase()

        },
        "default": function(s, d) {
            return s != null ? s: d

        }

    };
    TrimPath.parseTemplate_etc.modifierDef.h = TrimPath.parseTemplate_etc.modifierDef.escape;
    TrimPath.parseTemplate_etc.Template = function(tmplName, tmplContent, funcSrc, func, etc) {
        this.process = function(context, flags) {
            if (context == null) {
                context = {}

            }
            if (context._MODIFIERS == null) {
                context._MODIFIERS = {}

            }
            if (context.defined == null) {
                context.defined = function(str) {
                    return (context[str] != undefined)

                }

            }
            for (var k in etc.modifierDef) {
                if (context._MODIFIERS[k] == null) {
                    context._MODIFIERS[k] = etc.modifierDef[k]

                }

            }
            if (flags == null) {
                flags = {}

            }
            var resultArr = [];
            var resultOut = {
                write: function(m) {
                    resultArr.push(m)

                }

            };
            try {
                func(resultOut, context, flags)

            } catch(e) {
                if (flags.throwExceptions == true) {
                    throw e

                }
                var result = new String(resultArr.join("") + "[ERROR: " + e.toString() + (e.message ? "; " + e.message: "") + "]");
                result.exception = e;
                return result

            }
            return resultArr.join("")

        };
        this.name = tmplName;
        this.source = tmplContent;
        this.sourceFunc = funcSrc;
        this.toString = function() {
            return "TrimPath.Template [" + tmplName + "]"

        }

    };
    TrimPath.parseTemplate_etc.ParseError = function(name, line, message) {
        this.name = name;
        this.line = line;
        this.message = message

    };
    TrimPath.parseTemplate_etc.ParseError.prototype.toString = function() {
        return ("TrimPath template ParseError in " + this.name + ": line " + this.line + ", " + this.message)

    };
    var parse = function(body, tmplName, etc) {
        body = cleanWhiteSpace(body);
        var funcText = ["var TrimPath_Template_TEMP = function(_OUT, _CONTEXT, _FLAGS) { with (_CONTEXT) {"];
        var state = {
            stack: [],
            line: 1

        };
        var endStmtPrev = -1;
        while (endStmtPrev + 1 < body.length) {
            var begStmt = endStmtPrev;
            begStmt = body.indexOf("{", begStmt + 1);
            while (begStmt >= 0) {
                var endStmt = body.indexOf("}", begStmt + 1);
                var stmt = body.substring(begStmt, endStmt);
                var blockrx = stmt.match(/^\{(cdata|minify|eval)/);
                if (blockrx) {
                    var blockType = blockrx[1];
                    var blockMarkerBeg = begStmt + blockType.length + 1;
                    var blockMarkerEnd = body.indexOf("}", blockMarkerBeg);
                    if (blockMarkerEnd >= 0) {
                        var blockMarker;
                        if (blockMarkerEnd - blockMarkerBeg <= 0) {
                            blockMarker = "{/" + blockType + "}"

                        } else {
                            blockMarker = body.substring(blockMarkerBeg + 1, blockMarkerEnd)

                        }
                        var blockEnd = body.indexOf(blockMarker, blockMarkerEnd + 1);
                        if (blockEnd >= 0) {
                            emitSectionText(body.substring(endStmtPrev + 1, begStmt), funcText);
                            var blockText = body.substring(blockMarkerEnd + 1, blockEnd);
                            if (blockType == "cdata") {
                                emitText(blockText, funcText)

                            } else {
                                if (blockType == "minify") {
                                    emitText(scrubWhiteSpace(blockText), funcText)

                                } else {
                                    if (blockType == "eval") {
                                        if (blockText != null && blockText.length > 0) {
                                            funcText.push("_OUT.write( (function() { " + blockText + " })() );")

                                        }

                                    }

                                }

                            }
                            begStmt = endStmtPrev = blockEnd + blockMarker.length - 1

                        }

                    }

                } else {
                    if (body.charAt(begStmt - 1) != "$" && body.charAt(begStmt - 1) != "\\") {
                        var offset = (body.charAt(begStmt + 1) == "/" ? 2: 1);
                        if (body.substring(begStmt + offset, begStmt + 10 + offset).search(TrimPath.parseTemplate_etc.statementTag) == 0) {
                            break

                        }

                    }

                }
                begStmt = body.indexOf("{", begStmt + 1)

            }
            if (begStmt < 0) {
                break

            }
            var endStmt = body.indexOf("}", begStmt + 1);
            if (endStmt < 0) {
                break

            }
            emitSectionText(body.substring(endStmtPrev + 1, begStmt), funcText);
            emitStatement(body.substring(begStmt, endStmt + 1), state, funcText, tmplName, etc);
            endStmtPrev = endStmt

        }
        emitSectionText(body.substring(endStmtPrev + 1), funcText);
        if (state.stack.length != 0) {
            throw new etc.ParseError(tmplName, state.line, "unclosed, unmatched statement(s): " + state.stack.join(","))

        }
        funcText.push("}}; TrimPath_Template_TEMP");
        return funcText.join("")

    };
    var emitStatement = function(stmtStr, state, funcText, tmplName, etc) {
        var parts = stmtStr.slice(1, -1).split(" ");
        var stmt = etc.statementDef[parts[0]];
        if (stmt == null) {
            emitSectionText(stmtStr, funcText);
            return

        }
        if (stmt.delta < 0) {
            if (state.stack.length <= 0) {
                throw new etc.ParseError(tmplName, state.line, "close tag does not match any previous statement: " + stmtStr)

            }
            state.stack.pop()

        }
        if (stmt.delta > 0) {
            state.stack.push(stmtStr)

        }
        if (stmt.paramMin != null && stmt.paramMin >= parts.length) {
            throw new etc.ParseError(tmplName, state.line, "statement needs more parameters: " + stmtStr)

        }
        if (stmt.prefixFunc != null) {
            funcText.push(stmt.prefixFunc(parts, state, tmplName, etc))

        } else {
            funcText.push(stmt.prefix)

        }
        if (stmt.suffix != null) {
            if (parts.length <= 1) {
                if (stmt.paramDefault != null) {
                    funcText.push(stmt.paramDefault)

                }

            } else {
                for (var i = 1; i < parts.length; i++) {
                    if (i > 1) {
                        funcText.push(" ")

                    }
                    funcText.push(parts[i])

                }

            }
            funcText.push(stmt.suffix)

        }

    };
    var emitSectionText = function(text, funcText) {
        if (text.length <= 0) {
            return

        }
        var nlPrefix = 0;
        var nlSuffix = text.length - 1;
        while (nlPrefix < text.length && (text.charAt(nlPrefix) == "\n")) {
            nlPrefix++

        }
        while (nlSuffix >= 0 && (text.charAt(nlSuffix) == " " || text.charAt(nlSuffix) == "\t")) {
            nlSuffix--

        }
        if (nlSuffix < nlPrefix) {
            nlSuffix = nlPrefix

        }
        if (nlPrefix > 0) {
            funcText.push('if (_FLAGS.keepWhitespace == true) _OUT.write("');
            var s = text.substring(0, nlPrefix).replace("\n", "\\n");
            if (s.charAt(s.length - 1) == "\n") {
                s = s.substring(0, s.length - 1)

            }
            funcText.push(s);
            funcText.push('");')

        }
        var lines = text.substring(nlPrefix, nlSuffix + 1).split("\n");
        for (var i = 0; i < lines.length; i++) {
            emitSectionTextLine(lines[i], funcText);
            if (i < lines.length - 1) {
                funcText.push('_OUT.write("\\n");\n')

            }

        }
        if (nlSuffix + 1 < text.length) {
            funcText.push('if (_FLAGS.keepWhitespace == true) _OUT.write("');
            var s = text.substring(nlSuffix + 1).replace("\n", "\\n");
            if (s.charAt(s.length - 1) == "\n") {
                s = s.substring(0, s.length - 1)

            }
            funcText.push(s);
            funcText.push('");')

        }

    };
    var emitSectionTextLine = function(line, funcText) {
        var endMarkPrev = "}";
        var endExprPrev = -1;
        while (endExprPrev + endMarkPrev.length < line.length) {
            var begMark = "${",
            endMark = "}";
            var begExpr = line.indexOf(begMark, endExprPrev + endMarkPrev.length);
            if (begExpr < 0) {
                break

            }
            if (line.charAt(begExpr + 2) == "%") {
                begMark = "${%";
                endMark = "%}"

            }
            var endExpr = line.indexOf(endMark, begExpr + begMark.length);
            if (endExpr < 0) {
                break

            }
            emitText(line.substring(endExprPrev + endMarkPrev.length, begExpr), funcText);
            var exprArr = line.substring(begExpr + begMark.length, endExpr).replace(/\|\|/g, "#@@#").split("|");
            for (var k in exprArr) {
                if (exprArr[k].replace) {
                    exprArr[k] = exprArr[k].replace(/#@@#/g, "||")

                }

            }
            funcText.push("_OUT.write(");
            emitExpression(exprArr, exprArr.length - 1, funcText);
            funcText.push(");");
            endExprPrev = endExpr;
            endMarkPrev = endMark

        }
        emitText(line.substring(endExprPrev + endMarkPrev.length), funcText)

    };
    var emitText = function(text, funcText) {
        if (text == null || text.length <= 0) {
            return

        }
        text = text.replace(/\\/g, "\\\\");
        text = text.replace(/\n/g, "\\n");
        text = text.replace(/"/g, '\\"');
        funcText.push('_OUT.write("');
        funcText.push(text);
        funcText.push('");')

    };
    var emitExpression = function(exprArr, index, funcText) {
        var expr = exprArr[index];
        if (index <= 0) {
            funcText.push(expr);
            return

        }
        var parts = expr.split(":");
        funcText.push('_MODIFIERS["');
        funcText.push(parts[0]);
        funcText.push('"](');
        emitExpression(exprArr, index - 1, funcText);
        if (parts.length > 1) {
            funcText.push(",");
            funcText.push(parts[1])

        }
        funcText.push(")")

    };
    var cleanWhiteSpace = function(result) {
        result = result.replace(/\t/g, "    ");
        result = result.replace(/\r\n/g, "\n");
        result = result.replace(/\r/g, "\n");
        result = result.replace(/^(\s*\S*(\s+\S+)*)\s*$/, "$1");
        return result

    };
    var scrubWhiteSpace = function(result) {
        result = result.replace(/^\s+/g, "");
        result = result.replace(/\s+$/g, "");
        result = result.replace(/\s+/g, " ");
        result = result.replace(/^(\s*\S*(\s+\S+)*)\s*$/, "$1");
        return result

    };
    TrimPath.parseDOMTemplate = function(elementId, optDocument, optEtc) {
        if (optDocument == null) {
            optDocument = document

        }
        var element = optDocument.getElementById(elementId);
        var content = element.value;
        if (content == null) {
            content = element.innerHTML

        }
        content = content.replace(/</g, "<").replace(/>/g, ">");
        return TrimPath.parseTemplate(content, elementId, optEtc)

    };
    TrimPath.processDOMTemplate = function(elementId, context, optFlags, optDocument, optEtc) {
        return TrimPath.parseDOMTemplate(elementId, optDocument, optEtc).process(context, optFlags)

    }

})(); (function($) {
    $.extend({
        _jsonp: {
            scripts: {},
            counter: 1,
            charset: "gb2312",
            head: document.getElementsByTagName("head")[0],
            name: function(callback) {
                var name = "_jsonp_" + (new Date).getTime() + "_" + this.counter;
                this.counter++;
                var cb = function(json) {
                    eval("delete " + name);
                    callback(json);
                    $._jsonp.head.removeChild($._jsonp.scripts[name]);
                    delete $._jsonp.scripts[name]

                };
                eval(name + " = cb");
                return name

            },
            load: function(url, name) {
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.charset = this.charset;
                script.src = url;
                this.head.appendChild(script);
                this.scripts[name] = script

            }

        },
        getJSONP: function(url, callback) {
            var name = $._jsonp.name(callback);
            var url = url.replace(/{callback};/, name);
            $._jsonp.load(url, name);
            return this

        }

    })

})(jQuery); (function(a) {
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

})(jQuery); (function(a) {
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

})(jQuery); (function(a) {
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

})(jQuery); (function(a) {
    a.Jtimer = function(d, h) {
        var c = a.extend({
            pids: null,
            template: null,
            reset: null,
            mainPlaceholder: "timed",
            subPlaceholder: "timer",
            resetPlaceholder: "reset",
            iconPlaceholder: "icon",
            finishedClass: "",
            timer: []

        },
        d || {}),
        g = function(l) {
            var k = l.split(" "),
            j = k[0].split("-"),
            m = k[1].split(":");
            return new Date(j[0], j[1] - 1, j[2], m[0], m[1], m[2])

        },
        e = function(j) {
            if (String(j).length < 2) {
                j = "0" + j

            }
            return j

        },
        f = function(t, p) {
            if (p == {} || !p || !p.start || !p.end) {
                return

            }
            var j = g(p.start),
            l = g(p.server),
            n = g(p.end),
            v,
            u,
            o,
            s = (j - l) / 1000,
            m = (n - l) / 1000,
            w = "#" + c.mainPlaceholder + t,
            k = "#" + c.subPlaceholder + p.qid,
            r = "#" + c.resetPlaceholder + p.qid;
            if (s <= 0) {
                var q = c.template.process(p);
                a(w).html(q)

            }
            c.timer[p.qid] = setInterval(function() {
                if (s > 0) {
                    clearInterval(c.timer[p.qid]);
                    return

                } else {
                    if (m > 0) {
                        v = Math.floor(m / 3600);
                        u = Math.floor((m - v * 3600) / 60);
                        o = (m - v * 3600) % 60;
                        a(k).html("\u5269\u4f59<b>" + e(v) + "</b>\u5c0f\u65f6<b>" + e(u) + "</b>\u5206<b>" + e(o) + "</b>\u79d2");
                        m--

                    } else {
                        a(k).html("\u62a2\u8d2d\u7ed3\u675f\uff01");
                        if (c.iconPlaceholder) {
                            iconElement = "#" + c.iconPlaceholder + p.qid;
                            a(iconElement).attr("class", c.finishedClass).html("\u62a2\u5b8c")

                        }
                        if (c.reset) {
                            a(k).append('<a href="javascript:void(0)" id="' + r.substring(1) + '">\u5237\u65b0</a>');
                            a(r).bind("click", 
                            function() {
                                a.each(c.timer, 
                                function(x) {
                                    clearInterval(this)

                                });
                                c.reset()

                            })

                        }
                        clearInterval(c.timer[p.qid])

                    }

                }

            },
            1000)

        },
        b = function(k, j) {
            return ((g(k.end) - g(k.server)) - (g(j.end) - g(j.server)))

        };
        a.ajax({
            url: "http://qiang.360buy.com/HomePageNewLimitBuy.ashx?callback=?",
            data: {
                ids: c.pids

            },
            dataType: "jsonp",
            success: function(j) {
                if (j && j.data) {
                    j.data.sort(b);
                    a.each(j.data, 
                    function(k) {
                        f((k + 1), j.data[k])

                    })

                }
                if (h) {
                    h()

                }

            }

        })

    }

})(jQuery); (function(a) {
    a.fn.Jslider = function(h, n) {
        if (!this.length) {
            return

        }
        if (typeof h == "function") {
            n = h;
            h = {}

        }
        var d = a.extend({
            auto: false,
            reInit: false,
            data: [],
            defaultIndex: 0,
            slideWidth: 0,
            slideHeight: 0,
            slideDirection: 1,
            speed: "normal",
            stay: 5000,
            delay: 150,
            maxAmount: null,
            template: null,
            showControls: true

        },
        h || {});
        var g = a(this),
        e = null,
        k = null,
        j = null,
        c = null,
        m = null,
        o = function() {
            var p;
            if (d.maxAmount && d.maxAmount < d.data.length) {
                d.data.splice(d.maxAmount)

            }
            if (typeof d.data == "object") {
                if (d.data.length) {
                    p = {};
                    p.json = d.data

                } else {
                    p = d.data

                }

            }
            var r = d.template;
            if (d.reInit) {
                var s,
                u = r.controlsContent.process(p);
                p.json = p.json.slice(1);
                s = r.itemsContent.process(p);
                g.find(".slide-items").eq(0).append(s);
                g.find(".slide-controls").eq(0).html(u)

            } else {
                var t = r.itemsWrap.replace("{innerHTML}", r.itemsContent) + r.controlsWrap.replace("{innerHTML}", r.controlsContent),
                q = t.process(p);
                g.html(q)

            }
            e = g.find(".slide-items");
            k = g.find(".slide-controls");
            j = k.find("span");
            f();
            l();
            if (n) {
                n(g)

            }

        },
        f = function() {
            j.bind("mouseover", 
            function() {
                var p = j.index(this);
                if (p == d.defaultIndex) {
                    return

                }
                clearTimeout(m);
                clearInterval(c);
                m = setTimeout(function() {
                    b(p)

                },
                d.delay)

            }).bind("mouseleave", 
            function() {
                clearTimeout(m);
                clearInterval(c);
                l()

            });
            e.bind("mouseover", 
            function() {
                clearTimeout(m);
                clearInterval(c)

            }).bind("mouseleave", 
            function() {
                l()

            })

        },
        b = function(p) {
            j.each(function(v) {
                if (v == p) {
                    a(this).addClass("curr")

                } else {
                    a(this).removeClass("curr")

                }

            });
            var u = 0,
            t = 0;
            if (d.slideDirection == 3) {
                var q = e.children(),
                r = q.eq(d.defaultIndex),
                s = q.eq(p);
                r.css({
                    zIndex: 0

                });
                s.css({
                    zIndex: 1

                });
                r.fadeOut("fase");
                s.fadeIn("slow");
                d.defaultIndex = p

            } else {
                if (d.slideDirection == 1) {
                    e.css({
                        width: d.slideWidth * d.data.length

                    });
                    u = -d.slideWidth * p

                } else {
                    t = -d.slideHeight * p

                }
                e.animate({
                    top: t + "px",
                    left: u + "px"

                },
                d.speed, 
                function() {
                    d.defaultIndex = p

                })

            }

        },
        l = function() {
            if (d.auto) {
                c = setInterval(function() {
                    var p = d.defaultIndex;
                    p++;
                    if (p == d.data.length) {
                        p = 0

                    }
                    b(p)

                },
                d.stay)

            }

        };
        o()

    }

})(jQuery);
jQuery.fn.pagination = function(a, b) {
    b = jQuery.extend({
        items_per_page: 10,
        num_display_entries: 10,
        current_page: 0,
        num_edge_entries: 0,
        link_to: "#",
        prev_text: "Prev",
        next_text: "Next",
        ellipse_text: "...",
        prev_show_always: true,
        next_show_always: true,
        callback: function() {
            return false

        }

    },
    b || {});
    return this.each(function() {
        function f() {
            return Math.ceil(a / b.items_per_page)

        }
        function h() {
            var l = Math.ceil(b.num_display_entries / 2);
            var m = f();
            var k = m - b.num_display_entries;
            var n = g > l ? Math.max(Math.min(g - l, k), 0) : 0;
            var j = g > l ? Math.min(g + l, m) : Math.min(b.num_display_entries, m);
            return [n, j]

        }
        function e(k, j) {
            g = k;
            c();
            var l = b.callback(k, d);
            if (!l) {
                if (j.stopPropagation) {
                    j.stopPropagation()

                } else {
                    j.cancelBubble = true

                }

            }
            return l

        }
        function c() {
            d.empty();
            var k = h();
            var o = f();
            if (o == 1) {
                $(".Pagination").css({
                    display: "none"

                })

            }
            var p = function(q) {
                return function(r) {
                    return e(q, r)

                }

            };
            var n = function(q, r) {
                q = q < 0 ? 0: (q < o ? q: o - 1);
                r = jQuery.extend({
                    text: q + 1,
                    classes: ""

                },
                r || {});
                if (q == g) {
                    var s = $("<a href='javascript:void(0)' class='current'>" + (r.text) + "</a>")

                } else {
                    var s = $("<a>" + (r.text) + "</a>").bind("click", p(q)).attr("href", b.link_to.replace(/__id__/, q))

                }
                if (r.classes) {
                    s.addClass(r.classes)

                }
                d.append(s)

            };
            if (b.prev_text && (g > 0 || b.prev_show_always)) {
                n(g - 1, {
                    text: b.prev_text,
                    classes: "prev"

                })

            }
            if (k[0] > 0 && b.num_edge_entries > 0) {
                var j = Math.min(b.num_edge_entries, k[0]);
                for (var l = 0; l < j; l++) {
                    n(l)

                }
                if (b.num_edge_entries < k[0] && b.ellipse_text) {
                    jQuery("<span>" + b.ellipse_text + "</span>").appendTo(d)

                }

            }
            for (var l = k[0]; l < k[1]; l++) {
                n(l)

            }
            if (k[1] < o && b.num_edge_entries > 0) {
                if (o - b.num_edge_entries > k[1] && b.ellipse_text) {
                    jQuery("<span>" + b.ellipse_text + "</span>").appendTo(d)

                }
                var m = Math.max(o - b.num_edge_entries, k[1]);
                for (var l = m; l < o; l++) {
                    n(l)

                }

            }
            if (b.next_text && (g < o - 1 || b.next_show_always)) {
                n(g + 1, {
                    text: b.next_text,
                    classes: "next"

                })

            }

        }
        var g = b.current_page;
        a = (!a || a < 0) ? 1: a;
        b.items_per_page = (!b.items_per_page || b.items_per_page < 0) ? 1: b.items_per_page;
        var d = jQuery(this);
        this.selectPage = function(j) {
            e(j)

        };
        this.prevPage = function() {
            if (g > 0) {
                e(g - 1);
                return true

            } else {
                return false

            }

        };
        this.nextPage = function() {
            if (g < f() - 1) {
                e(g + 1);
                return true

            } else {
                return false

            }

        };
        c()

    })

}; (function(a) {
    a.extend(a.browser, {
        client: function() {
            return {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight,
                bodyWidth: document.body.clientWidth,
                bodyHeight: document.body.clientHeight

            }

        },
        scroll: function() {
            return {
                width: document.documentElement.scrollWidth,
                height: document.documentElement.scrollHeight,
                bodyWidth: document.body.scrollWidth,
                bodyHeight: document.body.scrollHeight,
                left: document.documentElement.scrollLeft + document.body.scrollLeft,
                top: document.documentElement.scrollTop + document.body.scrollTop

            }

        },
        screen: function() {
            return {
                width: window.screen.width,
                height: window.screen.height

            }

        },
        isIE6: a.browser.msie && a.browser.version == 6,
        isMinW: function(b) {
            return Math.min(a.browser.client().bodyWidth, a.browser.client().width) <= b

        },
        isMinH: function(b) {
            return a.browser.client().height <= b

        }

    })

})(jQuery); (function(a) {
    a.fn.jdPosition = function(f) {
        var e = a.extend({
            mode: null

        },
        f || {});
        switch (e.mode) {
            default:
        case "center":
            var c = a(this).outerWidth(),
            g = a(this).outerHeight();
            var b = a.browser.isMinW(c),
            d = a.browser.isMinH(g);
            a(this).css({
                left: a.browser.scroll().left + Math.max((a.browser.client().width - c) / 2, 0) + "px",
                top: (!a.browser.isIE6) ? (d ? a.browser.scroll().top: (a.browser.scroll().top + Math.max((a.browser.client().height - g) / 2, 0) + "px")) : ((a.browser.scroll().top <= a.browser.client().bodyHeight - g) ? (a.browser.scroll().top + Math.max((a.browser.client().height - g) / 2, 0) + "px") : (a.browser.client().height - g) / 2 + "px")

            });
            break;
            case "auto":
            break;
            case "fixed":
            break

        }

    }

})(jQuery); (function(a) {
    a.fn.jdThickBox = function(f, k) {
        if (typeof f == "function") {
            k = f;
            f = {}

        }
        var o = a.extend({
            type: "text",
            source: null,
            width: null,
            height: null,
            title: null,
            _frame: "",
            _div: "",
            _box: "",
            _con: "",
            _loading: "thickloading",
            close: false,
            _close: "",
            _fastClose: false,
            _close_val: "\u00d7",
            _titleOn: true,
            _title: "",
            _autoReposi: false,
            _countdown: false

        },
        f || {});
        var e = (typeof this != "function") ? a(this) : null;
        var c;
        var m = function() {
            clearInterval(c);
            a(".thickframe").add(".thickdiv").hide();
            a(".thickbox").empty().remove();
            if (o._autoReposi) {
                a(window).unbind("resize.jdThickBox").unbind("scroll.jdThickBox")

            }

        };
        if (o.close) {
            m();
            return false

        }
        var d = function(p) {
            if (p != "") {
                return p.match(/\w+/)

            } else {
                return ""

            }

        };
        var n = function(p) {
            if (a(".thickframe").length == 0 || a(".thickdiv").length == 0) {
                a("<iframe class='thickframe' id='" + d(o._frame) + "' marginwidth='0' marginheight='0' frameborder='0' scrolling='no'></iframe>").appendTo(a(document.body));
                a("<div class='thickdiv' id='" + d(o._div) + "'></div>").appendTo(a(document.body))

            } else {
                a(".thickframe").add(".thickdiv").show()

            }
            a("<div class='thickbox' id='" + d(o._box) + "'></div>").appendTo(a(document.body));
            if (o._titleOn) {
                h(p)

            }
            a("<div class='thickcon' id='" + d(o._con) + "' style='width:" + o.width + "px;height:" + o.height + "px;'></div>").appendTo(a(".thickbox"));
            if (o._countdown) {
                b()

            }
            a(".thickcon").addClass(o._loading);
            g();
            j();
            l(p);
            if (o._autoReposi) {
                a(window).bind("resize.jdThickBox", g).bind("scroll.jdThickBox", g)

            }
            if (o._fastClose) {
                a(document.body).bind("click.jdThickBox", 
                function(r) {
                    r = r ? r: window.event;
                    var q = r.srcElement ? r.srcElement: r.target;
                    if (q.className == "thickdiv") {
                        a(this).unbind("click.jdThickBox");
                        m()

                    }

                })

            }

        };
        var b = function() {
            var p = o._countdown;
            a("<div class='thickcountdown' style='width:" + o.width + "'><span id='jd-countdown'>" + p + "</span>\u79d2\u540e\u81ea\u52a8\u5173\u95ed</div>").appendTo(a(".thickbox"));
            c = setInterval(function() {
                p--;
                a("#jd-countdown").html(p);
                if (p == 0) {
                    p = o._countdown;
                    m()

                }

            },
            1000)

        };
        var h = function(p) {
            o.title = (o.title == null && p) ? p.attr("title") : o.title;
            a("<div class='thicktitle' id='" + d(o._title) + "' style='width:" + o.width + "'><span>" + o.title + "</span></div>").appendTo(a(".thickbox"))

        };
        var j = function() {
            if (o._close != null) {
                a("<a href='#' class='thickclose' id='" + d(o._close) + "'>" + o._close_val + "</a>").appendTo(a(".thickbox"));
                a(".thickclose").one("click", 
                function() {
                    m();
                    return false

                })

            }

        };
        var l = function(p) {
            o.source = (o.source == null) ? p.attr("href") : o.source;
            switch (o.type) {
                default:
            case "text":
                a(".thickcon").html(o.source);
                a(".thickcon").removeClass(o._loading);
                if (k) {
                    k()

                }
                break;
                case "html":
                a(o.source).clone().appendTo(a(".thickcon")).show();
                a(".thickcon").removeClass(o._loading);
                if (k) {
                    k()

                }
                break;
                case "image":
                o._index = (o._index == null) ? e.index(p) : o._index;
                a(".thickcon").append("<img src='" + o.source + "' width='" + o.width + "' height='" + o.height + "'>");
                o.source = null;
                a(".thickcon").removeClass(o._loading);
                if (k) {
                    k()

                }
                break;
                case "ajax":
            case "json":
                if (k) {
                    k(o.source, a(".thickcon"), 
                    function() {
                        a(".thickcon").removeClass(o._loading)

                    })

                }
                break;
                case "iframe":
                a("<iframe src='" + o.source + "' marginwidth='0' marginheight='0' frameborder='0' scrolling='no' style='width:" + o.width + "px;height:" + o.height + "px;border:0;'></iframe>").appendTo(a(".thickcon"));
                a(".thickcon").removeClass(o._loading);
                if (k) {
                    k()

                }
                break

            }

        };
        var g = function() {
            var q = a(".thickcon").outerWidth(),
            t = (o._titleOn ? a(".thicktitle").outerHeight() : 0) + a(".thickcon").outerHeight();
            a(".thickbox").css({
                width: q + "px",
                height: t + "px"

            });
            a(".thickbox").jdPosition({
                mode: "center"

            });
            if (a.browser.isIE6) {
                var s = a(".thickbox").outerWidth(),
                u = a(".thickbox").outerHeight();
                var p = a.browser.isMinW(s),
                r = a.browser.isMinH(u);
                a(".thickframe").add(".thickdiv").css({
                    width: p ? s: "100%",
                    height: Math.max(a.browser.client().height, a.browser.client().bodyHeight) + "px"

                })

            }

        };
        if (e != null) {
            e.click(function() {
                n(a(this));
                return false

            })

        } else {
            n()

        }

    };
    a.jdThickBox = a.fn.jdThickBox

})(jQuery);
function jdThickBoxclose() {
    $(".thickclose").trigger("click")

} (function(a) {
    a.fn.jdMarquee = function(h, b) {
        if (typeof h == "function") {
            b = h;
            h = {}

        }
        var j = a.extend({
            deriction: "up",
            speed: 10,
            auto: false,
            width: null,
            height: null,
            step: 1,
            control: false,
            _front: null,
            _back: null,
            _stop: null,
            _continue: null,
            wrapstyle: "",
            stay: 5000,
            delay: 20,
            dom: "div>ul>li".split(">"),
            mainTimer: null,
            subTimer: null,
            tag: false,
            convert: false,
            btn: null,
            disabled: "disabled",
            pos: {
                ojbect: null,
                clone: null

            }

        },
        h || {});
        var u = this.find(j.dom[1]);
        var e = this.find(j.dom[2]);
        var r;
        if (j.deriction == "up" || j.deriction == "down") {
            var l = u.eq(0).outerHeight();
            var c = j.step * e.eq(0).outerHeight();
            u.css({
                width: j.width + "px",
                overflow: "hidden"

            })

        }
        if (j.deriction == "left" || j.deriction == "right") {
            var n = e.length * e.eq(0).outerWidth();
            u.css({
                width: n + "px",
                overflow: "hidden"

            });
            var c = j.step * e.eq(0).outerWidth()

        }
        var o = function() {
            var s = "<div style='position:relative;overflow:hidden;z-index:1;width:" + j.width + "px;height:" + j.height + "px;" + j.wrapstyle + "'></div>";
            u.css({
                position: "absolute",
                left: 0,
                top: 0

            }).wrap(s);
            j.pos.object = 0;
            r = u.clone();
            u.after(r);
            switch (j.deriction) {
                default:
            case "up":
                u.css({
                    marginLeft:
                    0,
                    marginTop: 0

                });
                r.css({
                    marginLeft: 0,
                    marginTop: l + "px"

                });
                j.pos.clone = l;
                break;
                case "down":
                u.css({
                    marginLeft:
                    0,
                    marginTop: 0

                });
                r.css({
                    marginLeft: 0,
                    marginTop: -l + "px"

                });
                j.pos.clone = -l;
                break;
                case "left":
                u.css({
                    marginTop:
                    0,
                    marginLeft: 0

                });
                r.css({
                    marginTop: 0,
                    marginLeft: n + "px"

                });
                j.pos.clone = n;
                break;
                case "right":
                u.css({
                    marginTop:
                    0,
                    marginLeft: 0

                });
                r.css({
                    marginTop: 0,
                    marginLeft: -n + "px"

                });
                j.pos.clone = -n;
                break

            }
            if (j.auto) {
                k();
                u.hover(function() {
                    m(j.mainTimer)

                },
                function() {
                    k()

                });
                r.hover(function() {
                    m(j.mainTimer)

                },
                function() {
                    k()

                })

            }
            if (b) {
                b()

            }
            if (j.control) {
                g()

            }

        };
        var k = function(s) {
            m(j.mainTimer);
            j.stay = s ? s: j.stay;
            j.mainTimer = setInterval(function() {
                t()

            },
            j.stay)

        };
        var t = function() {
            m(j.subTimer);
            j.subTimer = setInterval(function() {
                q()

            },
            j.delay)

        };
        var m = function(s) {
            if (s != null) {
                clearInterval(s)

            }

        };
        var p = function(s) {
            if (s) {
                a(j._front).unbind("click");
                a(j._back).unbind("click");
                a(j._stop).unbind("click");
                a(j._continue).unbind("click")

            } else {
                g()

            }

        };
        var g = function() {
            if (j._front != null) {
                a(j._front).click(function() {
                    a(j._front).addClass(j.disabled);
                    p(true);
                    m(j.mainTimer);
                    j.convert = true;
                    j.btn = "front";
                    t();
                    if (!j.auto) {
                        j.tag = true

                    }
                    f()

                })

            }
            if (j._back != null) {
                a(j._back).click(function() {
                    a(j._back).addClass(j.disabled);
                    p(true);
                    m(j.mainTimer);
                    j.convert = true;
                    j.btn = "back";
                    t();
                    if (!j.auto) {
                        j.tag = true

                    }
                    f()

                })

            }
            if (j._stop != null) {
                a(j._stop).click(function() {
                    m(j.mainTimer)

                })

            }
            if (j._continue != null) {
                a(j._continue).click(function() {
                    k()

                })

            }

        };
        var f = function() {
            if (j.tag && j.convert) {
                j.convert = false;
                if (j.btn == "front") {
                    if (j.deriction == "down") {
                        j.deriction = "up"

                    }
                    if (j.deriction == "right") {
                        j.deriction = "left"

                    }

                }
                if (j.btn == "back") {
                    if (j.deriction == "up") {
                        j.deriction = "down"

                    }
                    if (j.deriction == "left") {
                        j.deriction = "right"

                    }

                }
                if (j.auto) {
                    k()

                } else {
                    k(4 * j.delay)

                }

            }

        };
        var d = function(w, v, s) {
            if (s) {
                m(j.subTimer);
                j.pos.object = w;
                j.pos.clone = v;
                j.tag = true

            } else {
                j.tag = false

            }
            if (j.tag) {
                if (j.convert) {
                    f()

                } else {
                    if (!j.auto) {
                        m(j.mainTimer)

                    }

                }

            }
            if (j.deriction == "up" || j.deriction == "down") {
                u.css({
                    marginTop: w + "px"

                });
                r.css({
                    marginTop: v + "px"

                })

            }
            if (j.deriction == "left" || j.deriction == "right") {
                u.css({
                    marginLeft: w + "px"

                });
                r.css({
                    marginLeft: v + "px"

                })

            }

        };
        var q = function() {
            var v = (j.deriction == "up" || j.deriction == "down") ? parseInt(u.get(0).style.marginTop) : parseInt(u.get(0).style.marginLeft);
            var w = (j.deriction == "up" || j.deriction == "down") ? parseInt(r.get(0).style.marginTop) : parseInt(r.get(0).style.marginLeft);
            var x = Math.max(Math.abs(v - j.pos.object), Math.abs(w - j.pos.clone));
            var s = Math.ceil((c - x) / j.speed);
            switch (j.deriction) {
                case "up":
                if (x == c) {
                    d(v, w, true);
                    a(j._front).removeClass(j.disabled);
                    p(false)

                } else {
                    if (v <= -l) {
                        v = w + l;
                        j.pos.object = v

                    }
                    if (w <= -l) {
                        w = v + l;
                        j.pos.clone = w

                    }
                    d((v - s), (w - s))

                }
                break;
                case "down":
                if (x == c) {
                    d(v, w, true);
                    a(j._back).removeClass(j.disabled);
                    p(false)

                } else {
                    if (v >= l) {
                        v = w - l;
                        j.pos.object = v

                    }
                    if (w >= l) {
                        w = v - l;
                        j.pos.clone = w

                    }
                    d((v + s), (w + s))

                }
                break;
                case "left":
                if (x == c) {
                    d(v, w, true);
                    a(j._front).removeClass(j.disabled);
                    p(false)

                } else {
                    if (v <= -n) {
                        v = w + n;
                        j.pos.object = v

                    }
                    if (w <= -n) {
                        w = v + n;
                        j.pos.clone = w

                    }
                    d((v - s), (w - s))

                }
                break;
                case "right":
                if (x == c) {
                    d(v, w, true);
                    a(j._back).removeClass(j.disabled);
                    p(false)

                } else {
                    if (v >= n) {
                        v = w - n;
                        j.pos.object = v

                    }
                    if (w >= n) {
                        w = v - n;
                        j.pos.clone = w

                    }
                    d((v + s), (w + s))

                }
                break

            }

        };
        if (j.deriction == "up" || j.deriction == "down") {
            if (l >= j.height && l >= j.step) {
                o()

            }

        }
        if (j.deriction == "left" || j.deriction == "right") {
            if (n >= j.width && n >= j.step) {
                o()

            }

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
var jdFriendUrl = "http://club.360buy.com/jdFriend/TuiJianService.aspx";
function FriendScript() {
    var b = getparam();
    if (b != "") {
        var a = document.createElement("script");
        a.type = "text/javascript";
        a.src = jdFriendUrl + "?roid=" + Math.random() + b;
        a.charset = "GB2312";
        document.getElementsByTagName("head")[0].appendChild(a)

    }

}
window.onload = function() {
    FriendScript()

};
function getparam() {
    var a = "";
    var e = "";
    var c = new Object();
    var g = location.search.substring(1);
    var f = g.split("&");
    for (var d = 0; d < f.length; d++) {
        var h = f[d].indexOf("=");
        if (h == -1) {
            continue

        }
        var b = f[d].substring(0, h);
        if (f[d].substring(0, h) == "sid") {
            a = unescape(f[d].substring(h + 1))

        }
        if (f[d].substring(0, h) == "t") {
            e = unescape(f[d].substring(h + 1))

        }

    }
    if (a != "" || e != "") {
        return "&sid=" + escape(a) + "&t=" + escape(e)

    } else {
        return ""

    }

} (function(a) {
    a.jdCalcul = function(g) {
        var b = null;
        var g = g.join(",");
        var e = "http://qiang.360buy.com/HomePageLimitBuy.ashx?callback=?&ids=" + g;
        var d = "http://www.360buy.com/product/";
        var f = function(n) {
            var r = a.extend({
                contentid: "#limit",
                clockid: "#clock",
                rankid: "#rank",
                limitid: "#limitbuy"

            },
            n || {});
            if (n == {} || n == "" || r.start == null || r.start == "" || r.end == null || r.end == "") {
                return

            }
            r.start = c(r.start);
            r.start = (a.browser.mozzia) ? Date.parse(r.start) : r.start;
            r.server = c(r.server);
            r.server = (a.browser.mozzia) ? Date.parse(r.server) : r.server;
            r.end = c(r.end);
            r.end = (a.browser.mozzia) ? Date.parse(r.end) : r.end;
            r.contentid = a(r.contentid + r.qid);
            r.clockid = a(r.clockid + r.qid);
            r.rankid = a(r.rankid + r.qid);
            r.limitid = a(r.limitid + r.qid);
            var o = (r.start - r.server) / 1000,
            q,
            p,
            m,
            j;
            var l = (r.end - r.server) / 1000;
            var h = function() {
                var s = '<li><div class="p-img"><a href="{6}{0}.html" target="_blank"><img src="{1}" width="100" height="100" /></a>{2}</div><div class="p-name"><a href="{6}{0}.html" target="_blank">{3}</a></div><div class="p-price">\u62a2\u8d2d\u4ef7\uff1a<strong>{4}</strong>{5}</div></li>';
                var t = "<ul>";
                a.each(r.pros, 
                function(w) {
                    var A = r.pros[w].id,
                    z = r.pros[w].tp,
                    x = (r.pros[w].zt == 1) ? "<div class='pi9'></div>": "<div class='pi10'></div>",
                    y = unescape(r.pros[w].mc),
                    u = r.pros[w].qg,
                    v = "(" + r.pros[w].zk + "\u6298)";
                    t += s.replace(/\{0\}/g, A).replace("{1}", z).replace("{2}", x).replace("{3}", y).replace("{4}", u).replace("{5}", v).replace(/\{6\}/g, d)

                });
                t += "</ul>";
                r.contentid.html(t)

            };
            var k = function() {
                if (o > 0) {
                    return

                } else {
                    if (l > 0) {
                        q = Math.floor(l / 3600);
                        p = Math.floor((l - q * 3600) / 60);
                        m = (l - q * 3600) % 60;
                        r.clockid.html("\u5269\u4f59<b>" + q + "</b>\u5c0f\u65f6<b>" + p + "</b>\u5206<b>" + m + "</b>\u79d2");
                        l--

                    } else {
                        r.clockid.html("\u62a2\u8d2d\u7ed3\u675f");
                        clearInterval(j);
                        r.limitid.hide();
                        if (r.rankid.length > 0) {
                            r.rankid.show()

                        }

                    }

                }

            };
            if (o <= 0 && l > 0) {
                h();
                if (r.rankid.length > 0) {
                    r.rankid.hide()

                }
                r.limitid.show()

            }
            k();
            j = setInterval(function() {
                k()

            },
            1000)

        };
        var c = function(k) {
            var j = k.split(" ");
            var h = j[0].split("-");
            var l = j[1].split(":");
            return new Date(h[0], h[1] - 1, h[2], l[0], l[1], l[2])

        };
        a.ajax({
            url: e,
            dataType: "jsonp",
            success: function(h) {
                if (h) {
                    b = h.data;
                    a.each(b, 
                    function(j) {
                        f(b[j])

                    })

                }

            }

        })

    }

})(jQuery);
function mlazyload(d) {
    var c = {
        defObj: null,
        defHeight: 0,
        fn: null

    };
    c = $.extend(c, d || {});
    var b = c.defHeight,
    f = (typeof c.defObj == "object") ? c.defObj: $(c.defObj);
    if (f.length < 1) {
        return

    }
    var a = function() {
        var g = document,
        h = (navigator.userAgent.toLowerCase().match(/iPad/i) == "ipad") ? window.pageYOffset: Math.max(g.documentElement.scrollTop, g.body.scrollTop);
        return g.documentElement.clientHeight + h - c.defHeight

    };
    var e = function() {
        if (f.offset().top <= a() && !f.attr("load")) {
            f.attr("load", "true");
            if (c.fn) {
                c.fn()

            }

        }

    };
    e();
    $(window).bind("scroll", 
    function() {
        e()

    })

}
var jdRecent = {
    element: $("#recent ul"),
    jsurl: "http://www.360buy.com/lishiset.aspx?callback=jdRecent.setData&id=",
    cookiename: "_recent",
    list: $.cookie("_recent"),
    url: location.href,
    init: function() {
        var a = this.url.match(/\/(\d{6}).html/);
        var b = (a != null && a[0].indexOf("html") != -1) ? a[1] : "";
        if (!this.list || this.list == null || this.list == "") {
            if (b == "") {
                return this.getData(0)

            } else {
                this.list = b

            }

        } else {
            if (b == "" || this.list.indexOf(b) != -1) {
                this.list = this.list

            } else {
                if (this.list.split(".").length >= 10) {
                    this.list = this.list.replace(/.\d+$/, "")

                }
                this.list = b + "." + this.list

            }

        }
        $.cookie(this.cookiename, this.list, {
            expires: 7,
            path: "/",
            domain: "360buy.com",
            secure: false

        });
        this.getData(this.list)

    },
    clear: function() {
        $.cookie(this.cookiename, "", {
            expires: 7,
            path: "/",
            domain: "360buy.com",
            secure: false

        })

    },
    getData: function(a) {
        if (a == 0) {
            this.element.html("<li><div class='norecode'>\u6682\u65e0\u8bb0\u5f55!</div></li>");
            return

        }
        var b = a.split(".");
        for (i in b) {
            if (i == 0) {
                this.element.empty()

            }
            $.getJSONP(this.jsurl + b[i], this.setData)

        }

    },
    setData: function(a) {
        this.element.append("<li><div class='p-img'><a href='" + a.url + "'><img src='" + a.img + "' /></a></div><div class='p-name'><a href='" + a.url + "'>" + decodeURIComponent(a.name) + "</a></div></li>")

    }

};
$("#clearRec").click(function() {
    jdRecent.clear();
    jdRecent.getData(0)

});
mlazyload({
    defObj: "#recent",
    defHeight: 50,
    fn: function() {
        if (jdRecent.element.length == 1) {
            jdRecent.init()

        }

    }

});
var jdModelCallCenter = {
    settings: {
        clstag1: 0,
        clstag2: 0

    },
    tbClose: function() {
        if ($(".thickbox").length != 0) {
            jdThickBoxclose()

        }

    },
    login: function() {
        this.tbClose();
        var c = this;
        var b = navigator.userAgent.toLowerCase(),
        a = (b.match(/ucweb/i) == "ucweb" || b.match(/rv:1.2.3.4/i) == "rv:1.2.3.4");
        if (a) {
            location.href = "https://passport.360buy.com/new/login.aspx?ReturnUrl=" + escape(location.href);
            return

        }
        setTimeout(function() {
            $.jdThickBox({
                type: "iframe",
                title: "\u60a8\u5c1a\u672a\u767b\u5f55",
                source: "http://passport.360buy.com/new/LoginFrame.aspx?clstag1=" + c.settings.clstag1 + "&clstag2=" + c.settings.clstag2 + "&r=" + Math.random(),
                width: 450,
                height: 360,
                _title: "thicktitler",
                _close: "thickcloser",
                _con: "thickconr"

            })

        },
        20)

    },
    regist: function() {
        this.tbClose();
        var a = this;
        setTimeout(function() {
            $.jdThickBox({
                type: "iframe",
                title: "\u60a8\u5c1a\u672a\u767b\u5f55",
                source: "http://passport.360buy.com/new/registPersonalFrame.aspx?clstag1=" + a.settings.clstag1 + "&clstag2=" + a.settings.clstag2 + "&r=" + Math.random(),
                width: 450,
                height: 500,
                _title: "thicktitler",
                _close: "thickcloser",
                _con: "thickconr"

            })

        },
        20)

    },
    init: function() {
        var a = this;
        $.ajax({
            url: "http://passport.360buy.com/new/helloService.ashx?m=ls",
            dataType: "jsonp",
            success: function(b) {
                a.tbClose();
                if (b && b.info) {
                    $("#loginbar").html(b.info)

                }
                a.settings.fn()

            }

        })

    }

};
$.extend(jdModelCallCenter, {
    autoLocation: function(a) {
        var b = this;
        $.login({
            modal: true,
            complete: function(c) {
                if (c != null && c.IsAuthenticated != null && c.IsAuthenticated) {
                    window.location = a

                }

            }

        })

    }

});
$.extend(jdModelCallCenter, {
    doAttention: function(a) {
        var b = "http://t.360buy.com/regard/follow.action?callback=?";
        $.login({
            modal: true,
            complete: function(c) {
                if (c != null && c.IsAuthenticated != null && c.IsAuthenticated) {
                    if (a > 0) {
                        $.getJSON(b, {
                            goodId: a

                        },
                        function(e) {
                            if (e.code != null) {
                                var g = (e.code == "success") ? 510: 388,
                                d = (e.code == "success") ? 500: 80,
                                f = (e.code == "success") ? false: 6;
                                $.jdThickBox({
                                    type: "iframe",
                                    source: "http://t.360buy.com/subscriber/jumpSubPageNew.action?code=" + e.code + "&pid=" + a + "&t=" + Math.random(),
                                    width: g,
                                    height: d,
                                    title: "\u63d0\u793a",
                                    _box: "attboxr",
                                    _con: "attconr",
                                    _countdown: f

                                })

                            }

                        })

                    }

                }

            }

        })

    }

});
$(".btn-coll").livequery("click", 
function() {
    var b = $(this);
    var a = parseInt(b.attr("id").replace("coll", ""));
    $.extend(jdModelCallCenter.settings, {
        clstag1: "login|keycount|5|3",
        clstag2: "login|keycount|5|4",
        id: a,
        fn: function() {
            jdModelCallCenter.doAttention(this.id)

        }

    });
    jdModelCallCenter.settings.fn()

});
var category = {
    OBJ: $("#_JD_ALLSORT"),
    URL_Serv: "http://www.360buy.com/ajaxservice.aspx?stype=SortJson",
    URL_BrandsServ: "http://www.360buy.com/lishi.aspx?callback=category.getBrandService&id=a,915,925^b,916,926^c,917,927^d,918,928^e,919,929^f,920,930^g,921,931^h,922,932^i,923,933^j,924,934^k,2096,2097^l,3512,3513^m,5274,5275",
    FN_GetLink: function(c, d) {
        var a,
        b;
        switch (c) {
            case 1:
            a = d.u;
            b = d.n;
            break;
            case 2:
            a = d.split("|")[0];
            b = d.split("|")[1];
            break

        }
        if (a == "") {
            return b

        } else {
            if (!/^http[s]?:\/\/([\w-]+\.)+[\w-]+([\w-.\/?%&=]*)?$/.test(a)) {
                a = "http://www.360buy.com/products/" + a + ".html"

            }
            return '<a href="' + a + '">' + b + "</a>"

        }

    },
    FN_SetLink: function(a) {
        var b = "";
        return b

    },
    DATA_Simple: {
        "1": [{
            l: "http://book.360buy.com/",
            n: "\u56fe\u4e66"

        },
        {
            l: "http://e.360buy.com/",
            n: "\u7535\u5b50\u4e66\u520a"

        },
        {
            l: "http://mvd.360buy.com/",
            n: "\u97f3\u50cf"

        }],
        "2": [{
            l: "http://www.360buy.com/electronic.html",
            n: "\u5bb6\u7528\u7535\u5668"

        }],
        "3": [{
            l: "http://www.360buy.com/digital.html",
            n: "\u624b\u673a\u6570\u7801"

        }],
        "4": [{
            l: "http://www.360buy.com/computer.html",
            n: "\u7535\u8111\u3001\u529e\u516c"

        }],
        "5": [{
            l: "http://www.360buy.com/home.html",
            n: "\u5bb6\u5c45"

        },
        {
            l: "http://www.360buy.com/products/1620-1622-000.html",
            n: "\u5bb6\u5177"

        },
        {
            l: "http://www.360buy.com/products/1620-4957-000.html",
            n: "\u5bb6\u88c5"

        },
        {
            l: "http://www.360buy.com/kitchenware.html",
            n: "\u53a8\u5177"

        }],
        "6": [{
            l: "http://www.360buy.com/clothing.html",
            n: "\u670d\u9970\u978b\u5e3d"

        }],
        "7": [{
            l: "http://www.360buy.com/beauty.html",
            n: "\u4e2a\u62a4\u5316\u5986"

        }],
        "8": [{
            l: "http://www.360buy.com/bag.html",
            n: "\u793c\u54c1\u7bb1\u5305"

        },
        {
            l: "http://www.360buy.com/watch.html",
            n: "\u949f\u8868"

        },
        {
            l: "http://www.360buy.com/jewellery.html",
            n: "\u73e0\u5b9d"

        }],
        "9": [{
            l: "http://www.360buy.com/sports.html",
            n: "\u8fd0\u52a8\u5065\u5eb7"

        }],
        "10": [{
            l: "http://www.360buy.com/auto.html",
            n: "\u6c7d\u8f66\u7528\u54c1"

        }],
        "11": [{
            l: "http://www.360buy.com/baby.html",
            n: "\u6bcd\u5a74"

        },
        {
            l: "http://www.360buy.com/toys.html",
            n: "\u73a9\u5177\u4e50\u5668"

        }],
        "12": [{
            l: "http://www.360buy.com/food.html",
            n: "\u98df\u54c1\u996e\u6599\u3001\u4fdd\u5065\u98df\u54c1"

        }],
        "13": [{
            l: "http://caipiao.360buy.com/",
            n: "\u5f69\u7968"

        },
        {
            l: "http://trip.360buy.com/",
            n: "\u65c5\u884c"

        },
        {
            l: "http://chongzhi.360buy.com/",
            n: "\u5145\u503c"

        },
        {
            l: "http://game.360buy.com/",
            n: "\u6e38\u620f"

        }]

    },
    TPL_Simple: '{for item in data}		<div class="item fore${parseInt(item_index)}">			<span clstag="homepage|keycount|home2012|06{if parseInt(item_index)+1>9}${parseInt(item_index)+1}{else}0${parseInt(item_index)+1}{/if}a"><h3>			{for sItem in item}{if sItem_index!=0}\u3001{/if}<a href="${sItem.l}">${sItem.n}</a>{/for}			</h3><s></s></span>		</div>		{/for}<div class="extra"><a clstag="homepage|keycount|home2012|0614a" href="http://www.360buy.com/allSort.aspx">\u5168\u90e8\u5546\u54c1\u5206\u7c7b</a></div>',
    FN_InitSimple: function() {
        var b,
        a = {};
        a.data = this.DATA_Simple;
        b = this.TPL_Simple.process(a);
        $("#_JD_ALLSORT").html(b)

    },
    TPL_Items: '{for item in data}		<div class="item fore${parseInt(item_index)+1}">			<span clstag="homepage|keycount|home2012|0${601+parseInt(item_index)}a"><h3>${item.n}</h3><s></s></span>			<div class="i-mc">				<div onclick="$(this).parent().parent().removeClass(\'hover\')" class="close"></div>				<div class="subitem" clstag="homepage|keycount|home2012|0${601+parseInt(item_index)}b">					{for subitem in item.i}					<dl class="fore${parseInt(subitem_index)+1}">						<dt>							${category.FN_GetLink(1,subitem)}						</dt>						<dd>{for link in subitem.i}<em>${category.FN_GetLink(2,link)}</em>{/for}</dd>					</dl>					{/for}				</div>				<div class="cat-right-con fr" id="JD_sort_${item.t}"><div class="loading-style1"><b></b>\u52a0\u8f7d\u4e2d\uff0c\u8bf7\u7a0d\u5019...</div></div>			</div>		</div>		{/for}<div class="extra"><a clstag="homepage|keycount|home2012|0614a" href="http://www.360buy.com/allSort.aspx">\u5168\u90e8\u5546\u54c1\u5206\u7c7b</a></div>',
    TPL_Brands: '${category.FN_SetLink(id)}		{if p.length!=0}		<dl class="categorys-promotions">			<dt>\u4fc3\u9500\u6d3b\u52a8</dt>			<dd>				<ul>					{for item in p}					<li><a href="${item.u}" target="_blank">						{if item.i}							<img src="${item.i}" width="194" height="70" title="${item.n}" />						{else}							${item.n}						{/if}					</a></li>					{/for}				</ul>			</dd>		</dl>		{/if}		{if b.length!=0}		<dl class="categorys-brands">			{if id==\'k\'}				<dt>\u63a8\u8350\u54c1\u724c\u51fa\u7248\u5546</dt>			{else}				{if id==\'l\'}					<dt>\u63a8\u8350\u4ea7\u54c1</dt>				{else}					<dt>\u63a8\u8350\u54c1\u724c</dt>				{/if}			{/if}			<dd>				<ul>					{for item in b}					<li><a href="${item.u}" target="_blank">${item.n}</a></li>					{/for}				</ul>			</dd>		</dl>		{/if}',
    FN_GetData: function() {
        $.getJSONP(this.URL_Serv, category.getDataService)

    },
    FN_GetBrands: function() {
        $.getJSONP(this.URL_BrandsServ, category.getBrandService)

    },
    getDataService: function(b) {
        var a = this.TPL_Items.process(b);
        this.OBJ.attr("load", "1").html(a);
        this.FN_GetBrands();
        this.OBJ.find(".item").Jdropdown({
            delay: 200

        })

    },
    getBrandService: function(a) {
        var c = this,
        b = a.data;
        this.OBJ.attr("load", "2");
        $.each(b, 
        function(e) {
            var d = c.TPL_Brands.process(b[e], e);
            $("#JD_sort_" + b[e].id).html(d)

        });
        $(".cat-right-con").each(function(d) {
            $(this).find(".categorys-promotions").attr("clstag", "homepage|keycount|home2012|0" + (601 + d) + "c");
            $(this).find(".categorys-brands").attr("clstag", "homepage|keycount|home2012|0" + (601 + d) + "d")

        })

    },
    FN_Init: function() {
        if (!this.OBJ.length) {
            return

        }
        if (!this.OBJ.attr("load")) {
            if (window.pageConfig && window.pageConfig.pageId != 0) {
                this.FN_InitSimple()

            }
            $("#categorys").Jdropdown({
                delay: 200

            })

        }
        var a = this;
        this.OBJ.one("mouseover", 
        function() {
            var b = a.OBJ.attr("load");
            if (!b) {
                a.FN_GetData()

            } else {
                if (b == 1) {
                    a.FN_GetBrands()

                } else {
                    return

                }

            }

        })

    }

};
var UC = {
    DATA_Cookie: "_recent",
    TPL_UnRegist: '<div class="prompt">			<span class="fl">\u60a8\u597d\uff0c\u8bf7\u767b\u5f55</span>			<span class="fr"><a href="javascript:login()" class="btn-login" clstag="homepage|keycount|home2012|04a">\u767b\u5f55\u4eac\u4e1c</a></span>		</div>',
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
var MCART = {
    DATA_Cookie: "cn",
    DATA_Amount: readCookie("cn") || 0,
    URL_Serv: "http://cart.360buy.com/cart/miniCartService.action",
    TPL_Iframe: '<iframe scrolling="no" frameborder="0" marginheight="0" marginwidth="0" id="settleup-iframe"></iframe>',
    TPL_NoGoods: '<div class="prompt">\u8d2d\u7269\u8f66\u4e2d\u8fd8\u6ca1\u6709\u5546\u54c1\uff0c\u8d76\u7d27\u9009\u8d2d\u5427\uff01</div>',
    TPL_SList: '<div id="settleup-content">	{if Cart.ThePacks.length+Cart.TheGifts.length+Cart.TheSkus.length==0}	<div class="prompt">\u8d2d\u7269\u8f66\u4e2d\u8fd8\u6ca1\u6709\u5546\u54c1\uff0c\u8d76\u7d27\u9009\u8d2d\u5427\uff01</div>	{else}			<div class="sm">				<div class="smt">					<h4 class="fl">\u6700\u65b0\u52a0\u5165\u7684\u5546\u54c1</h4>					{if Cart.ThePacks.length+Cart.TheGifts.length+Cart.TheSkus.length>5}					<div class="extra fr">\u62d6\u52a8\u6eda\u52a8\u6761\u6d4f\u89c8\u6240\u6709\u5546\u54c1</div>					{/if}				</div>				<div class="smc" {if Cart.ThePacks.length+Cart.TheGifts.length+Cart.TheSkus.length>5}style="overflow-y:scroll"{/if}>					<ul>						{for Suit in Cart.ThePacks}							{var Price = 0}							{for Sku in Suit.Skus}								{if Sku.PromotionPrice > Price}									{var ImageUrl = Sku.ImgUrl; var SkuId = Sku.Id; Price = Sku.PromotionPrice;}								{/if}							{/for}							<li>								<div class="p-img fl"><a href="http://www.360buy.com/product/${SkuId}.html" target="_blank"><img src="http://img10.360buyimg.com/n5/${ImageUrl}" width="50" height="50" alt="${Suit.Name}" /></a></div>								<div class="p-name fl">									<span>										{if Suit.SuitType==6}[\u5957\u88c5]{/if}										{if Suit.SuitType==10}[\u6ee1\u51cf]{/if}										{if Suit.SuitType==11}[\u6ee1\u9001]{/if}									</span>									<a href="http://www.360buy.com/product/${SkuId}.html">${Suit.Name}</a>								</div>								<div class="p-detail fr ar">									<span class="p-price"><strong>\uffe5${Suit.PromotionPrice.toFixed(2)}</strong>\u00d7${Suit.Num}</span><br />									<a class="delete" id="${Suit.Id}" name="RemoveSuit" href="#delete">\u5220\u9664</a>								</div>							</li>						{/for}						{for Suit in Cart.TheGifts}							<li class="style1">								<div class="p-img fl"><a href="http://www.360buy.com/product/${Suit.MainSKU.Id}.html" target="_blank"><img src="http://img10.360buyimg.com/n5/${Suit.MainSKU.ImgUrl}" width="50" height="50" alt="${Suit.MainSKU.Name}" /></a></div>								<div class="p-name fl"><a href="http://www.360buy.com/product/${Suit.MainSKU.Id}.html">${Suit.MainSKU.Name}</a></div>								<div class="p-detail fr ar">									<span class="p-price"><strong>\uffe5${Suit.PromotionPrice.toFixed(2)}</strong>\u00d7${Suit.Num}</span><br />									<a class="delete" id="${Suit.Id}" name="RemoveGift" href="#delete">\u5220\u9664</a>								</div>								<span class="clr"></span>								{for Sku in Suit.Skus}									<div class="gift"><a href="http://www.360buy.com/product/${Sku.Id}.html" target="_blank">${Sku.Name}</a></div>								{/for}							</li>						{/for}						{for Sku in Cart.TheSkus}							<li>								<div class="p-img fl"><a href="http://www.360buy.com/product/${Sku.Id}.html" target="_blank"><img src="http://img10.360buyimg.com/n5/${Sku.ImgUrl}" width="50" height="50" alt="${Sku.Name}" /></a></div>								<div class="p-name fl"><a href="http://www.360buy.com/product/${Sku.Id}.html" target="_blank">${Sku.Name}</a></div>								<div class="p-detail fr ar">									<span class="p-price"><strong>\uffe5${Sku.PromotionPrice.toFixed(2)}</strong>\u00d7${Sku.Num}</span><br />									<a class="delete" id="${Sku.Id}" name="RemoveProduct" href="#delete">\u5220\u9664</a>								</div>							</li>						{/for}					</ul>				</div>				<div class="smb ar">\u5171<b>${Cart.Num}</b>\u4ef6\u5546\u54c1\u3000\u5171\u8ba1<strong>\uffe5${Cart.TotalPromotionPrice.toFixed(2)}</strong><br />				<a href="http://jd2008.360buy.com/purchase/ShoppingCart.aspx" title="\u53bb\u8d2d\u7269\u8f66\u7ed3\u7b97" id="btn-payforgoods">\u53bb\u8d2d\u7269\u8f66\u7ed3\u7b97</a></div>			</div>		{/if}	</div>',
    FN_BindEvents: function() {
        $("#settleup-content").find(".delete").bind("click", 
        function() {
            var b = $(this).attr("id"),
            a = $(this).attr("name");
            if (!b) {
                return

            }
            $.ajax({
                url: MCART.URL_Serv,
                data: {
                    method: a,
                    cartId: b

                },
                dataType: "jsonp",
                success: function(c) {
                    if (c.Result) {
                        MCART.FN_Refresh()

                    }

                }

            })

        })

    },
    FN_Refresh: function() {
        var b = $("#settleup dl");
        var d = b.find("dd").eq(0),
        c,
        a = function(e) {
            c = MCART.TPL_SList.process(e);
            d.html(c);
            if ($.browser.msie && $.browser.version == 6) {
                var g = $("#settleup-content");
                g.before(MCART.TPL_Iframe);
                var f = $("#settleup-iframe");
                f.height(g.height())

            }
            MCART.FN_BindEvents()

        };
        $.ajax({
            url: MCART.URL_Serv,
            data: {
                method: "GetCart"

            },
            dataType: "jsonp",
            success: function(e) {
                a(e)

            }

        });
        MCART.DATA_Amount = readCookie(MCART.DATA_Cookie);
        if (MCART.DATA_Amount) {
            $("#shopping-amount").html(MCART.DATA_Amount)

        }

    }

}; (function() {
    pageConfig.FN_ImgError(document);
    $("img[data-lazyload]").Jlazyload({
        type: "image",
        placeholderClass: "err-product"

    });
    category.FN_Init();
    $("#shortcut .menu").Jdropdown({
        delay: 50

    });
    $("#navitems li").Jdropdown();
    $.ajax({
        url: "http://passport.360buy.com/new/helloService.ashx?m=ls",
        dataType: "jsonp",
        scriptCharset: "gb2312",
        success: function(a) {
            if (a && a.info) {
                $("#loginbar").html(a.info)

            }
            if (a && a.sso) {
                $.each(a.sso, 
                function() {
                    $.getJSON(this)

                })

            }

        }

    });
    if (MCART.DATA_Amount) {
        $("#settleup s").eq(0).addClass("shopping");
        $("#shopping-amount").html(MCART.DATA_Amount)

    }
    $("#settleup dl").Jdropdown({
        delay: 200

    },
    function(a) {
        MCART.FN_Refresh()

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
                    b = readCookie(UC.DATA_Cookie);
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
                        UC.FN_InitVList(b)

                    }
                    return

                }
                UC.FN_InitOList()

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
pageConfig.FN_InitSidebar = function() {
    if (!$("#toppanel").length) {
        $(document.body).prepend('<div class="w ld" id="toppanel"></div>')

    }
    $("#toppanel").append('<div id="sidepanel" class="hide"></div>');
    var a = $("#sidepanel");
    this.scroll = function() {
        var b = this;
        $(window).bind("scroll", 
        function() {
            var c = document.body.scrollTop || document.documentElement.scrollTop;
            if (c == 0) {
                a.hide()

            } else {
                a.show()

            }

        });
        b.initCss();
        $(window).bind("resize", 
        function() {
            b.initCss()

        })

    };
    this.initCss = function() {
        var b,
        c = pageConfig.compatible ? 1210: 990;
        if (screen.width >= 1210) {
            if ($.browser.msie && $.browser.version <= 6) {
                b = {
                    right: "-26px"

                }

            } else {
                b = {
                    right: (document.documentElement.clientWidth - c) / 2 - 26 + "px"

                }

            }
            a.css(b)

        }

    };
    this.addCss = function(b) {
        a.css(b)

    };
    this.addItem = function(b) {
        a.append(b)

    };
    this.setTop = function() {
        this.addItem("<a href='#' class='gotop' title='\u4f7f\u7528\u5feb\u6377\u952eT\u4e5f\u53ef\u8fd4\u56de\u9876\u90e8\u54e6\uff01'><b></b>\u8fd4\u56de\u9876\u90e8</a>")

    }

};
pageConfig.FN_InitContrast = function(d, c, b) {
    var d = d || "_contrast",
    b = b || "list",
    c = c || "http://misc.360buyimg.com/contrast/js/contrast.js",
    a = readCookie(d + "_status");
    if (a == "show" || a == "side" || !!readCookie(d) == true) {
        $.getScript(c, 
        function() {
            if (Contrast) {
                Contrast.init(b, d)

            }

        })

    } else {
        console.log("o");
        $(".btn-compare").unbind("click").bind("click", 
        function() {
            var e = this.getAttribute("skuid");
            $.getScript(c, 
            function() {
                if (Contrast) {
                    Contrast.init(b, d).showPopWin(e)

                }

            })

        })

    }

};
pageConfig.FN_InitContrast = function(d, c, b) {
    var d = d || "_contrast",
    b = b || "list",
    c = c || "http://misc.360buyimg.com/contrast/js/contrast.js",
    a = readCookie(d + "_status");
    if (pageConfig.isInitContrast) {
        return false

    }
    if ((a == "show" || a == "side") && !!readCookie(d) == true) {
        $.getScript(c, 
        function() {
            if (Contrast) {
                Contrast.init(b, d)

            }

        })

    } else {
        $(".btn-compare").bind("click", 
        function() {
            var e = this.getAttribute("skuid");
            $.getScript(c, 
            function() {
                if (Contrast) {
                    Contrast.init(b, d).showPopWin(e)

                }

            })

        })

    }
    pageConfig.isInitContrast = 1;
    createCookie(d + "[T]sideTips", "", -1, "/;domain=360buy.com")

};