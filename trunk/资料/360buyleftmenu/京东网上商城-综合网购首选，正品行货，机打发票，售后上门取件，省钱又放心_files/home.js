(function() {
    $("#slogens").Jdropdown(function(b) {
        b.find(".close").bind("click", 
        function() {
            if (!pageConfig.DATA_slogensAd) {
                return;

            }
            var c = pageConfig.DATA_slogensAd;
            b.addClass("loading-style2").html('<a href="' + c.href + '" target="_blank"><img data-img="2" src="' + c.src + '" width="' + c.width + '" height="' + c.height + '" alt="' + c.alt + '" /></a>');
            createCookie("slog", "1", 15, "/;domain=.360buy.com");

        });

    });
    $("#slogens dl").Jdropdown({
        delay: 300

    });
    $(".plist .style1 .p-img").bind("mouseover", 
    function() {
        $(this).css("opacity", "0.7");

    }).bind("mouseout", 
    function() {
        $(this).css("opacity", "1");

    });
    pageConfig.TPL_GuessYou = '<ul class="lh">		{for item in YouLikeRec}		<li class="fore${parseInt(item_index)+1}" onclick="reClick2012(\'cai2012\',\'${item.Wid}#${item.WMeprice}\',${item_index})">			<div class="p-img ld"><a target="_blank" href="http://prs.360buy.com/PersonalSimiRec.aspx?wid=${item.Wid}&ShowType=1"><img height="130" width="130" alt="${item.Wname}" data-img="1" src="${item.Img}"></a></div>			<div class="p-name"><a target="_blank" href="http://prs.360buy.com/PersonalSimiRec.aspx?wid=${item.Wid}&ShowType=1" title="${item.Wname}">${item.Wname}</a></div>			<div class="p-price">京东价：<strong>￥${item.WMeprice}</strong></div>		</li>		{/for}	</ul>';
    pageConfig.FN_GuessYou = function(c, b) {
        $.ajax({
            url: "http://prs.360buy.com/HomeGuessYouLike.aspx",
            dataType: "jsonp",
            success: function(e) {
                if (e && e.YouLikeRec) {
                    var d = pageConfig.TPL_GuessYou.process(e);
                    b.html(d);
                    pageConfig.FN_ImgError(b.get(0));

                }

            }

        });
        log("hcaip", "Show");

    };
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
    $("#virtuals").Jtab({
        type: "dynamic",
        source: "data-url",
        delay: 300

    },
    function(c, b, d) {
        if (!c) {
            return;

        }
        if (screen.width < 1210) {
            c += "?990";

        }
        b.html('<iframe scrolling="no" height="139px" frameborder="0" width="100%" src="' + c + '"></iframe>');

    });
    pageConfig.TPL_Timed = '<div class="countdown" id="timer${qid}">正在加载中...</div>	{for item in pros}		{if item_index==0}			<div class="p-img ld"><a href="http://www.360buy.com/product/${item.id}.html" target="_blank" title="${unescape(item.mc)}"><b class="pi pix1" id="icon${qid}"><span>${item.zk}</span><br />折</b><img src="${item.tp}" width="130" height="130" data-img="1" alt="${unescape(item.mc)}"></a></div>			<div class="p-name"><a href="http://www.360buy.com/product/${item.id}.html" title="${unescape(item.mc)}" target="_blank">${unescape(item.mc)}</a></div>			<div class="p-price"><span>抢购价：</span><strong>￥${item.qg}</strong></div>		{/if}	{/for}';
    pageConfig.TIMER_Timed = [];
    pageConfig.FN_TimedInit = function() {
        $.Jtimer({
            pids: "36,37,38,39,40",
            template: pageConfig.TPL_Timed,
            reset: pageConfig.FN_TimedInit,
            timer: pageConfig.TIMER_Timed,
            finishedClass: "pi pix0"

        });

    };
    pageConfig.FN_TimedInit();
    pageConfig.TPL_MSlide = {
        itemsWrap: '<div class="slide-itemswrap"><ul class="slide-items">{innerHTML}</ul></div>',
        itemsContent: '{for item in json}			<li data-tag="${item.aid}" class="{if item.data.length==3}style2{else}style1{/if} hide">				{for sItem in item.data}					{var v=pageConfig.FN_GetCompatibleData(sItem)}					<div class="fore${parseInt(sItem_index)+1}" height="${v.height}" width="${v.width}">						<a href="${v.href}" target="_blank" title="${v.alt}" clstag="homepage|keycount|home2012|09${parseInt(item_index)+2}${parseInt(sItem_index)+1}">						{if sItem_index==0}							<img height="${v.height}" width="${v.width}" src="${v.src}" data-img="2" />						{else}							<img height="${v.height}" width="${v.width}" src="http://misc.360buyimg.com/lib/img/e/blank.gif" style="background:url(${v.src}) no-repeat center 0;" />						{/if}						</a>					</div>				{/for}			</li>		{/for}',
        controlsWrap: '<div class="slide-controls">{innerHTML}</div>',
        controlsContent: '{for item in json}			<span class="{if parseInt(item_index)==0}curr{/if}">${parseInt(item_index)+1}</span>		{/for}'

    };
    pageConfig.TPL_FSlide = {
        itemsWrap: '<div class="slide-itemswrap"><ul class="slide-items">{innerHTML}</ul></div>',
        itemsContent: '{for item in json}			<div><a href="${item.href}" target="_blank"><img src="${item.src}" width="${item.width}" height="${item.height}" alt="${item.alt}" data-img="2"></a></div>		{/for}',
        controlsWrap: '<div class="slide-crystal"></div><div class="slide-controls">{innerHTML}</div>',
        controlsContent: '{for item in json}			<span class="{if parseInt(item_index)==0}curr{/if}">${parseInt(item_index)+1}</span>		{/for}'

    };
    pageConfig.TPL_Tabs = '<ul class="lh style2">		{for item in data}		<li class="fore${parseInt(item_index)}">			<div class="p-img ld"><a target="_blank" href="${pageConfig.FN_GetUrl(item.f,item.a)}" title="${item.b}">{if item.e}${pageConfig.FN_SetPromotion(item.e)}{/if}<img height="130" width="130" alt="${item.b}" data-img="1" src="${pageConfig.FN_GetImageDomain(item.a)}N3/${item.d}"></a></div>			<div class="p-name"><a target="_blank" href="${pageConfig.FN_GetUrl(item.f,item.a)}" title="${item.b}">${item.b}</a></div>			<div class="p-price">京东价：<strong>￥${item.c}</strong></div>		</li>		{/for}	</ul>';
    pageConfig.TPL_Tabs_book = '<ul class="lh style2">		{for item in data}			{if parseInt(item_index)<5}				<li class="fore${parseInt(item_index)}">					<div class="p-img ld"><a target="_blank" href="${pageConfig.FN_GetUrl(item.f,item.a)}" title="${item.b}">{if item.e}${pageConfig.FN_SetPromotion(item.e)}{/if}<img height="130" width="130" alt="${item.b}" data-img="1" src="${pageConfig.FN_GetImageDomain(item.a)}N3/${item.d}"></a></div>					<div class="p-name"><a target="_blank" href="${pageConfig.FN_GetUrl(item.f,item.a)}" title="${item.b}">${item.b}</a></div>					<div class="p-price">京东价：<strong>￥${item.c}</strong></div>				</li>			{else}				<li class="link link${parseInt(item_index)}">					<a target="_blank" href="${pageConfig.FN_GetUrl(item.f,item.a)}" title="${item.b}">${item.b}</a>				</li>			{/if}		{/for}	</ul>';
    pageConfig.TPL_Tabs_food = '<ul class="lh style3">		{for item in data}			{if parseInt(item_index)<7}			<li class="fore${parseInt(item_index)}">				<div class="p-img"><a target="_blank" href="${pageConfig.FN_GetUrl(item.f,item.a)}" title="${item.b}"><img height="100" width="100" alt="${item.b}" data-img="1" src="${pageConfig.FN_GetImageDomain(item.a)}N4/${item.d}"></a></div>				<div class="p-detail">					<div class="p-name"><a target="_blank" href="${pageConfig.FN_GetUrl(item.f,item.a)}" title="${item.b}">${item.b}</a></div>					<div class="p-price"><strong>￥${item.c}</strong></div>				</div>			</li>			{/if}		{/for}	</ul>';
    pageConfig.TPL_Tabs_virtuals = '<div class="slide"></div>	<ul class="lh style1">		{for item in data}			{if parseInt(item_index)<8}			<li class="fore${parseInt(item_index)}">				<div class="p-img p-img-sys"><a target="_blank" href="${pageConfig.FN_GetUrl(item.f,item.a)}" title="${item.b}"><img height="130" width="130" alt="${item.b}" data-img="1" src="http://img10.360buyimg.com/${item.d}"></a></div>				<div class="p-detail">					<div class="p-name"><a target="_blank" href="${pageConfig.FN_GetUrl(item.f,item.a)}" title="${item.b}">${item.b}</a></div>					<div class="p-price">${item.c}</div>				</div>			</li>			{/if}		{/for}	</ul>';
    pageConfig.FN_Tabs = function(e, b) {
        var d = this.DATA_Tabs[e],
        f = {},
        c = "";
        f.data = d;
        if (e == 85 || e == 86 || e == 87 || e == 88) {
            c = this.TPL_Tabs_book.process(f);

        } else {
            if (e == 101 || e == 102 || e == 103 || e == 104) {
                c = this.TPL_Tabs_food.process(f);

            } else {
                if (e == 110) {
                    c = this.TPL_Tabs_virtuals.process(f);

                } else {
                    c = this.TPL_Tabs.process(f);

                }

            }

        }
        b.html(c);
        pageConfig.FN_ImgError(b.get(0));

    };
    $(".plist").each(function() {
        $(this).Jtab({
            type: "dynamic",
            source: "data-tag",
            delay: 300

        },
        function(c, b, d) {
            if (!c) {
                return;

            }
            pageConfig.FN_Tabs(c, b);
            if (c == 110) {
                b.find(".slide").Jslider({
                    data: pageConfig.DATA_FSlide.F8,
                    slideWidth: 225,
                    slideHeight: 261,
                    maxAmount: 4,
                    speed: "fast",
                    template: pageConfig.TPL_FSlide

                },
                function(e) {
                    pageConfig.FN_ImgError(e.get(0));

                });

            }

        });

    });
    $(".ranking").Jtab();
    $(".club .mc").each(function() {
        var b = $(this);
        setInterval(function() {
            var c = b.find("li:last-child");
            b.find("li:last-child").remove();
            b.find("ul").prepend(c.css({
                height: 0

            }));
            c.animate({
                height: "60px"

            });

        },
        8000);

    });
    $("#slide").Jslider({
        data: pageConfig.DATA_MSlide,
        auto: true,
        reInit: true,
        slideWidth: (screen.width >= 1210) ? 670: 550,
        slideHeight: 390,
        maxAmount: 7,
        slideDirection: 3,
        template: pageConfig.TPL_MSlide

    },
    function(b) {
        pageConfig.FN_ImgError(b.get(0));

    });
    $(".slide[data-lazyload]").Jlazyload({
        type: "module"

    },
    function(c, b) {
        b.Jslider({
            data: pageConfig.DATA_FSlide["F" + c],
            slideWidth: 225,
            slideHeight: 261,
            maxAmount: 4,
            speed: "fast",
            template: pageConfig.TPL_FSlide

        },
        function(d) {
            pageConfig.FN_ImgError(d.get(0));

        });

    });
    var a = new pageConfig.FN_InitSidebar();
    a.setTop();
    a.scroll();
    $("#subscription-submit").bind("click", 
    function() {
        var e = $("#subscription-val").val(),
        b = $("#subscription-prompt"),
        c = "";
        if (!e.match("^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$")) {
            var d = (e == "请输入您的邮箱") ? "请输入您的邮箱": "邮箱格式不正确";
            b.html(d).attr("class", "incorrect").show();
            return;

        }
        $.ajax({
            url: "http://edm.360buy.com/front/ajax/subscribe.ashx",
            data: {
                email: e,
                type: 1

            },
            dataType: "jsonp",
            success: function(f) {
                if (f) {
                    switch (f.state) {
                        case 0:
                        c = "correct";
                        break;
                        case 1:
                        c = "correct";
                        break;
                        case 2:
                        c = "incorrect";
                        break;

                    }
                    b.html(f.message).attr("class", c).show();

                }

            }

        });

    });

})();