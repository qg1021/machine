/*
* 2012-11-6
*/
 (function(a) {
    a.fn.floatNav = function(c) {
        var d = a.extend({
            start: null,
            end: null,
            fixedClass: "nav-fixed",
            anchor: null,
            targetEle: null,
            range: 0,
            onStart: function() {},
            onEnd: function() {}
        },
        c);
        var g = a(this),
        h = g.height(),
        f = g.width(),
        b = a('<div class="float-nav-wrap"/>');
        g.css({
            height: h,
            width: f
        });
        if (!g.parent().hasClass("float-nav-wrap")) {
            g.wrap(b.css("height", h))
        }
        a(window).bind("scroll", 
        function() {
            var i = a(document).scrollTop(),
            j = g.find("a").eq(0).attr("href"),
            m = d.start || g.parent(".float-nav-wrap").offset().top,
            l = 10000;
            if (i > m && i < (d.end || l) - d.range) {
                g.addClass(d.fixedClass);
                if (d.anchor && j !== d.anchor) {
                    g.find("a").attr("href", d.anchor)
                }
                if (d.onStart) {
                    d.onStart()
                }
            } else {
                g.removeClass(d.fixedClass);
                if (d.anchor) {
                    g.find("a").attr("href", "javascript:;")
                }
                if (d.onEnd) {
                    d.onEnd()
                }
            }
        });
        return this
    }
})(jQuery);
function MouseEvent(a) {
    this.x = a.pageX;
    this.y = a.pageY
} (function(a) {
    a.fn.jqueryzoom = function(b) {
        var d = {
            xzoom: 200,
            yzoom: 200,
            offset: 10,
            position: "right",
            lens: 1,
            preload: 1
        };
        if (b) {
            a.extend(d, b)
        }
        var c = "";
        a(this).hover(function() {
            var g = a(this).offset().left;
            var j = a(this).offset().top;
            var i = a(this).find("img").get(0).offsetWidth;
            var f = a(this).find("img").get(0).offsetHeight;
            c = a(this).find("img").attr("alt");
            var h = a(this).find("img").attr("jqimg");
            a(this).find("img").attr("alt", "");
            if (a("div.zoomdiv").get().length == 0) {
                a(this).after("<div class='zoomdiv'><img class='bigimg' src='" + h + "'/></div>");
                a(this).append("<div class='jqZoomPup'>&nbsp;</div>")
            }
            a("div.zoomdiv").width(d.xzoom);
            a("div.zoomdiv").height(d.yzoom);
            a("div.zoomdiv").show();
            if (!d.lens) {
                a(this).css("cursor", "crosshair")
            }
            a(document.body).mousemove(function(o) {
                mouse = new MouseEvent(o);
                var p = a(".bigimg").get(0).offsetWidth;
                var n = a(".bigimg").get(0).offsetHeight;
                var l = "x";
                var m = "y";
                if (isNaN(m) | isNaN(l)) {
                    var m = (p / i);
                    var l = (n / f);
                    a("div.jqZoomPup").width((d.xzoom) / (m * 1));
                    a("div.jqZoomPup").height((d.yzoom) / (l * 1));
                    if (d.lens) {
                        a("div.jqZoomPup").css("visibility", "visible")
                    }
                }
                xpos = mouse.x - a("div.jqZoomPup").width() / 2 - g;
                ypos = mouse.y - a("div.jqZoomPup").height() / 2 - j;
                if (d.lens) {
                    xpos = (mouse.x - a("div.jqZoomPup").width() / 2 < g) ? 0: (mouse.x + a("div.jqZoomPup").width() / 2 > i + g) ? (i - a("div.jqZoomPup").width() - 2) : xpos;
                    ypos = (mouse.y - a("div.jqZoomPup").height() / 2 < j) ? 0: (mouse.y + a("div.jqZoomPup").height() / 2 > f + j) ? (f - a("div.jqZoomPup").height() - 2) : ypos
                }
                if (d.lens) {
                    a("div.jqZoomPup").css({
                        top: ypos,
                        left: xpos
                    })
                }
                scrolly = ypos;
                a("div.zoomdiv").get(0).scrollTop = scrolly * l;
                scrollx = xpos;
                a("div.zoomdiv").get(0).scrollLeft = (scrollx) * m
            })
        },
        function() {
            a(this).children("img").attr("alt", c);
            a(document.body).unbind("mousemove");
            if (d.lens) {
                a("div.jqZoomPup").remove()
            }
            a("div.zoomdiv").remove()
        });
        count = 0;
        if (d.preload) {
            a("body").append("<div style='display:none;' class='jqPreload" + count + "'>360buy</div>");
            a(this).each(function() {
                var g = a(this).children("img").attr("jqimg");
                var f = jQuery("div.jqPreload" + count + "").html();
                jQuery("div.jqPreload" + count + "").html(f + '<img src="' + g + '">')
            })
        }
    }
})(jQuery);
var scrollVisible_noitem = pageConfig.wideVersion && pageConfig.compatible ? 5: 4,
scrollVisible_itemover = pageConfig.wideVersion && pageConfig.compatible ? 6: 4;
var mdPerfix = pageConfig.product.type == 1 ? "CR": "GR";
var mbPerfix = pageConfig.product.type == 1 ? "3C": "GM";
var skuid = pageConfig.product.skuid;
var suit_TPL = {
    tabs: '<ul class="stab lh">{for item in packResponseList}<li class="fore${parseInt(item_index)+1}{if item_index==0} scurr{/if}" data-widget="tab-item" data-cat="${item.packId}" data-suit="${item.packName}">\u4f18\u60e0\u5957\u88c5${parseInt(item_index)+1}</li>{/for}</ul>',
    cons: '{for item in packResponseList}<div data-widget="tab-content" packPrice="${item.packPrice.amount}" packListPrice="${item.packListPrice.amount}" discount="${item.discount.amount}" data-cat="${item.packId}" class="stabcon{if parseInt(item_index) !== 0} none{/if}"><div class="master"> <s></s> <div class="p-img"> <a href="http://www.360buy.com/product/' + pageConfig.product.skuid + '.html" target="_blank"><img src="${pageConfig.FN_GetImageDomain(' + pageConfig.product.skuid + ")}n4/" + pageConfig.product.src + '" height="100" width="100"></a> </div> <div class="p-name"> <a href="http://www.360buy.com/product/' + pageConfig.product.skuid + '.html" target="_blank">' + unescape(pageConfig.product.name) + '</a> </div></div><div class="suits"> <ul class="lh" style="width:${(item.productList.length-1)*165}px">{for itemList in item.productList}{if itemList.skuId == pageConfig.product.skuid}{else} <li> <s></s> <div class="p-img"> <a href="http://www.360buy.com/product/${itemList.skuId}.html" target="_blank"><img src="${pageConfig.FN_GetImageDomain(itemList.skuId)}n4/${itemList.skuPicUrl}" alt="" height="100" width="100"></a> </div> <div class="p-name"> <a href="http://www.360buy.com/product/${itemList.skuId}.html" target="_blank">${itemList.skuName}</a> </div> </li>{/if}{/for} </ul></div><div class="infos"> <s></s> <div class="p-name"> <a href="http://www.360buy.com/suite/${item.packId}-${skuId}.html">${item.packName}</a> </div> <div class="p-price">\u5957&nbsp;&nbsp;\u88c5&nbsp;&nbsp;\u4ef7\uff1a <strong class="fitting-price">${parseFloat(item.packPrice.amount).toFixed(2)}</strong> </div> <div class="p-price">\u539f\u3000\u3000\u4ef7\uff1a <del class="orign-price">${parseFloat(item.packListPrice.amount).toFixed(2)}</del> </div> <div class="p-saving">\u7acb\u5373\u8282\u7701\uff1a <span class="fitting-saving">${parseFloat(item.discount.amount).toFixed(2)}</span> </div> <div class="btns"> <a class="btn-buy" href="http://jd2008.360buy.com/purchase/initcart.aspx?pId=${item.packId}&pCount=1&pType=2">\u8d2d\u4e70\u5957\u88c5</a> </div></div></div>{/for}'
};
var recoFittings_TPL = {
    tabs: '<li class="fore scurr" onclick="sortFitting(this, \'all\', \'#tab-reco\')">\u5168\u90e8\u914d\u4ef6</li>{for item in fittingType}<li class="fore${parseInt(item_index)+1}" data-count="${item.number}" data-cat="${item.sort}" onclick="sortFitting(this, ${item.sort}, \'#tab-reco\')">${item.name}(${item.number})</li>{/for}',
    cons: '<div class="master"> <s></s> <div class="p-img"> <a href="http://www.360buy.com/product/${master.skuid}.html" target="_blank"><img src="${pageConfig.FN_GetImageDomain(master.skuid)}n4/${master.pic}" height="100" width="100"></a> </div> <div class="p-name"> <a href="http://www.360buy.com/product/${master.skuid}.html" target="_blank">${master.name}</a> </div> <div class="p-price"><input type="checkbox" onclick="return false;" onchange="return false" wmeprice="{if master.price==""}0.00{else}${master.price}{/if}" wmaprice="${master.discount}" skuid="${master.skuid}" checked/> ${master.price}</div></div><div class="suits" data-count="${fittings.length}" style="overflow-x:{if parseInt(fittings.length)>(pageConfig.wideVersion&&pageConfig.compatible ? 4:3)}scroll{else}hidden{/if}"> <ul class="lh" style="width:${parseInt(fittings.length)*165}px"> {for item in fittings} <li data-cat="${item.sort}"> <s></s> <div class="p-img"> <a href="http://www.360buy.com/product/${item.skuid}.html" target="_blank"><img src="${pageConfig.FN_GetImageDomain(item.skuid)}n4/${item.pic}" alt="" height="100" skuidth="100"></a> </div> <div class="p-name"> <a href="http://www.360buy.com/product/${item.skuid}.html" target="_blank">${item.name}</a> </div> <div class="choose"> <input type="checkbox" id="inp_${item.skuid}" onclick="calculatePrice(this, \'#tab-reco\')" wmaprice="${item.discount}" wmeprice="${item.price}" skuid="${item.skuid}" /> <label for="inp_${item.skuid}" class="p-price"> <strong><img src="http://price.360buyimg.com/gp${item.skuid},1.png" onerror="this.src=\'http://misc.360buyimg.com/lib/skin/e/i/error-3.gif\'" /></strong> </label> </div> </li> {/for} </ul></div><div class="infos"> <s></s> <div class="p-name"> <em>\u5df2\u9009\u62e9<span>0</span>\u4e2a\u914d\u4ef6</em> </div> <div class="p-price">\u642d&nbsp;&nbsp;\u914d&nbsp;&nbsp;\u4ef7\uff1a <strong class="res-jdprice">{if master.price==""}\u6682\u65e0\u62a5\u4ef7{else}\uffe5 ${master.price}{/if}</strong> </div> <div class="p-saving">\u83b7\u5f97\u4f18\u60e0\uff1a <span class="res-totalprice">\uffe5 ${master.discount}</span> </div> <div class="btns"> <a class="btn-buy" href="http://jd2008.360buy.com/purchase/OrderFlowService.aspx?action=AddSkus&wids=${master.skuid}">\u7acb\u5373\u8d2d\u4e70</a> </div></div>'
};
var suitRecommend_TPL = '<div class="stabcon"><div class="master"> <s></s> <div class="p-img"> <a href="http://www.360buy.com/product/${master.wid}.html" target="_blank"><img src="${pageConfig.FN_GetImageDomain(master.wid)}n4/${master.imgurl}" height="100" width="100"></a> </div> <div class="p-name"> <a href="http://www.360buy.com/product/${master.wid}.html" target="_blank">${master.name}</a> </div> <div class="p-price none"><input type="checkbox" id="inp_${master.wid}" onclick="return false;" onchange="return false" wmaprice="${master.wmaprice}" wmeprice="${master.wmeprice}" skuid="${master.wid}" checked/> ${master.wmeprice}</div></div><div class="suits" style="overflow-x:{if parseInt(recoList.length)>(pageConfig.wideVersion&&pageConfig.compatible ? 4:3)}scroll{else}hidden{/if}"> <ul class="lh" style="width:${parseInt(recoList.length)*165}px"> {for item in recoList} <li onclick="reClick(\'' + mdPerfix + '3\', \'${master.wid}\', \'${item.wid}#${item.wmeprice}\', \'${item_index}\');"> <s></s> <div class="p-img"> <a href="http://www.360buy.com/product/${item.wid}.html" target="_blank"><img src="${pageConfig.FN_GetImageDomain(item.wid)}n4/${item.imgurl}" alt="" height="100" width="100"></a> </div> <div class="p-name"> <a href="http://www.360buy.com/product/${item.wid}.html" target="_blank">${item.name}</a> </div> <div class="choose"> <input type="checkbox" id="inp_${item.wid}" onclick="calculatePrice(this, \'#tab-hot\')" wmaprice="${item.wmaprice}" wmeprice="${item.wmeprice}" skuid="${item.wid}" /> <label for="inp_${item.wid}" class="p-price"> <strong><img src="http://price.360buyimg.com/gp${item.wid},1.png" onerror="this.src=\'http://misc.360buyimg.com/lib/skin/e/i/error-3.gif\'" /></strong> </label> </div> </li> {/for} </ul></div><div class="infos" onclick="{for item in recoList}reClick(\'' + mdPerfix + "3', '${master.wid}', '${item.wid}#${item.wmeprice}', '${item_index}');{/for}\"> <s></s> <div class=\"p-name\"> <a onclick=\"log('" + mbPerfix + 'PopularBuy\',\'click\')" href="http://jd2008.360buy.com/purchase/OrderFlowService.aspx?action=AddSkus&wids=${master.wid}">\u8d2d\u4e70\u4eba\u6c14\u7ec4\u5408</a> </div> <div class="p-price">\u603b\u4eac\u4e1c\u4ef7\uff1a <strong class="res-jdprice">\uffe5 ${master.wmeprice}</strong> </div> <div class="p-saving">\u603b\u53c2\u8003\u4ef7\uff1a <del class="res-totalprice">\uffe5 ${master.wmaprice}</del> </div> <div class="btns"> <a onclick="log(\'' + mbPerfix + 'PopularBuy\',\'click\')" class="btn-buy" href="http://jd2008.360buy.com/purchase/OrderFlowService.aspx?action=AddSkus&wids=${master.wid}">\u8d2d\u4e70\u7ec4\u5408</a> </div></div><div class="clb"></div></div>';
var recoService_yb_TPL = '<div class="i-mc"> <b>\u8d2d\u4e70\u5ef6\u4fdd\u670d\u52a1</b>- \u4fdd\u4fee\u65f6\u95f4\u66f4\u957f\u3001\u4fdd\u4fee\u8303\u56f4\u66f4\u5e7f\u3001\u591a\u9879\u610f\u5916\u4fdd\u969c\uff0c\u4f7f\u7528\u66f4\u5b89\u5fc3\uff01</div><table> <tbody>{for item in bandingRelations} <tr> <td>\u00b7 <a target="_blank" href="${item.links}">${item.ybName}</a> </td> <td> <strong style="color:red">\uffe5${item.ybPrice}</strong></td> <td> <a target="_blank" href="http://www.360buy.com/help/extend/notebook.aspx">[\u8be6\u7ec6\u8bf4\u660e]</a> </td> <td> <a href="http://jd2008.360buy.com/purchase/InitCart.aspx?pid=665403&amp;pcount=1&amp;ptype=1&amp;ybId=161716" class="btn-buy">\u8d2d\u4e70</a> </td> </tr>{/for} </tbody></table>';
var recoService_card_TPL = '<div class="i-mc"> <b>\u4eac\u4e1c\u8d3a\u5361\u670d\u52a1</b>- \u597d\u793c\u9644\u8d3a\u5361\uff0c\u5fc3\u610f\u5c3d\u4f20\u8fbe\uff01</div><table> <tbody> <tr> <td>\u00b7\u7cbe\u7f8e\u8d3a\u5361\uff08\u53ef\u81ea\u884c\u586b\u5199\u8d3a\u5361\u5185\u5bb9\uff09</td> <td> <a href="#none" class="btn-buy" onclick="Card_buy();">\u8d2d\u4e70</a> </td> </tr> </tbody></table>';
var listBuyBuy_TPL = '<div class="p-img"> <a target="_blank" title="${Wname}" href="${WidStr}"><img height="100" width="100" alt="" src="${ImageUrl}"></a> </div> <div class="p-name"> <a target="_blank" title="${Wname}" href="${WidStr}">${Wname}</a> </div> <div class="p-price"> <strong> <img src="http://price.360buyimg.com/gp${Wid},1.png" onerror="this.src=\'http://misc.360buyimg.com/lib/skin/e/i/error-3.gif\'" /> </strong> </div>';
var listBrosweBroswe_TPL = '<li onclick="reClick(1, ' + pageConfig.product.skuid + ',\'${wid}#${wmeprice}\', [#]);"> <div class="p-img"> <a target="_blank" title="${name}" href="http://www.360buy.com/product/${wid}.html"><img height="100" width="100" alt="${name}" src="${pageConfig.FN_GetImageDomain(wid)}n4/${imgurl}"></a> </div> <div class="p-name"> <a target="_blank" title="${name}" href="http://www.360buy.com/product/${wid}.html">${name}</a> </div> <div class="p-price"> <strong> <img src="http://price.360buyimg.com/gp${wid},1.png" onerror="this.src=\'http://misc.360buyimg.com/lib/skin/e/i/error-3.gif\'" /> </strong> </div></li>';
var listBrosweBroswe_TPL_RB = '<li> <div class="p-img"> <a target="_blank" title="${Wname}" href="http://www.360buy.com/product/${Wid}.html"><img height="100" width="100" alt="${Wname}" src="${ImageUrl}"></a> </div> <div class="p-name"> <a target="_blank" title="${Wname}" href="http://www.360buy.com/product/${Wid}.html">${Wname}</a> </div> <div class="p-price"> <strong> <img src="http://price.360buyimg.com/gp${Wid},1.png" onerror="this.src=\'http://misc.360buyimg.com/lib/skin/e/i/error-3.gif\'" /> </strong> </div></li>';
var listBrosweBuy_TPL = '<div class="p-img"> <a target="_blank" title="${Wname}" href="http://www.360buy.com/product/${Wid}.html"><img height="100" width="100" alt="${Wname}" src="${ImageUrl}"></a> </div> <div class="p-name"> {if Count>0} <strong>${Count}%\u4f1a\u4e70\uff1a</strong> {/if} <a target="_blank" title="${Wname}" href="http://www.360buy.com/product/${Wid}.html">${Wname}</a> </div> <div class="p-price"> <strong> <img src="http://price.360buyimg.com/gp${Wid},1.png" onerror="this.src=\'http://misc.360buyimg.com/lib/skin/e/i/error-3.gif\'" /> </strong> </div>';
var noItem_TPL = '{for list in MySoldOut}<li class="fore fore${list_index}" onclick="reClick2(\'' + pageConfig.product.cat[0] + "&SORec'," + pageConfig.product.skuid + ', \'${list.wid}#${list.wmeprice}\', ${list_index})"> <div class="p-img"> <a target="_blank" href="http://www.360buy.com/product/${list.wid}.html"><img height="100" width="100" src="${pageConfig.FN_GetImageDomain(list.wid)}n4/${list.imgurl}"></a> </div> <div class="p-name"> <a target="_blank" title="${list.name}" href="http://www.360buy.com/product/${list.wid}.html">${list.name}</a> </div> <div class="p-price"> <strong><img src="http://price.360buyimg.com/gp${list.wid},1.png" onerror="this.src=\'http://misc.360buyimg.com/lib/skin/e/i/error-3.gif\'" /></strong> </div></li>{/for}';
var noItem_TPL_OLD = '{for list in html}<li class="fore fore${list_index}"> <div class="p-img"> <a target="_blank" href="http://www.360buy.com/product/${list.skuId}.html"><img height="100" width="100" src="${pageConfig.FN_GetImageDomain(list.skuId)}n4/${list.imgUrl}"></a> </div> <div class="p-name"> <a target="_blank" title="${list.name}" href="http://www.360buy.com/product/${list.skuId}.html">${list.Name}</a> </div> <div class="p-price"> <strong><img src="http://price.360buyimg.com/gp${list.skuId},1.png" onerror="this.src=\'http://misc.360buyimg.com/lib/skin/e/i/error-3.gif\'" /></strong> </div></li>{/for}';
var commentRate_TPL = '{if Comments.length > 0}<div id="i-comment"> <div class="rate"> <strong>${CommentSummary.GoodRateShow}<span>%</span></strong> <br> <span>\u597d\u8bc4\u5ea6</span> </div> <div class="percent"> <dl> <dt>\u597d\u8bc4<span>(${CommentSummary.GoodRateShow}%)</span></dt> <dd> <div style="width: ${CommentSummary.GoodRateShow}px;"></div></dd> </dl> <dl> <dt>\u4e2d\u8bc4<span>(${CommentSummary.GeneralRateShow}%)</span></dt> <dd class="d1"><div style="width: ${CommentSummary.GeneralRateShow}%;"> </div></dd> </dl> <dl> <dt>\u5dee\u8bc4<span>(${CommentSummary.PoorRateShow}%)</span></dt> <dd class="d1"> <div style="width: ${CommentSummary.PoorRateShow}%;"> </div></dd> </dl> </div> <div class="actor"> <em>\u53d1\u8868\u8bc4\u4ef7\u5373\u53ef\u83b7\u5f97\u79ef\u5206\uff0c\u524d\u4e94\u4f4d\u8bc4\u4ef7\u7528\u6237\u53ef\u83b7\u5f97\u591a\u500d\u79ef\u5206\uff1a</em><a href="http://help.360buy.com/help/question-58.html" target="_blank">\u8be6\u89c1\u79ef\u5206\u89c4\u5219</a> <ul> {for User in Users} <li><span>+{if User.Integral==null}0{else}${User.Integral}{/if}</span><div class="u-name">${parseInt(User_index)+1}. <a href="http://club.360buy.com/userreview/${User.Uid}-1-1.html" target="_blank">${User.UNiChen}</a></div></li> {/for} </ul> <div class="clr"></div> <b></b> </div> <div class="btns"> <div> \u6211\u5728\u4eac\u4e1c\u8d2d\u4e70\u8fc7\u6b64\u5546\u54c1</div> <a href="http://club.360buy.com/Simplereview/${CommentSummary.ReferenceId}.html" class="btn-comment" target="_blank">\u6211\u8981\u8bc4\u4ef7</a> <div><a href="http://club.360buy.com/review/${CommentSummary.ReferenceId}-1-1.html" target="_blank">\u67e5\u770b\u5168\u90e8\u8bc4\u4ef7</a></div> </div></div>{/if}';
var commentList_TPL = '{if Comments.length > 0}{for Comment in Comments}<div class="item"> <div class="user"> <div class="u-icon"> <a href="http://club.360buy.com/userreview/${Comment.Uid}-1-1.html" target="_blank"> <img height="50" width="50" upin="${Comment.UserId}" src="http://misc.360buyimg.com/lib/img/u/${Comment.UserLevelId}.gif" /> </a> </div> <div class="u-name"> <a href="http://club.360buy.com/userreview/${Comment.Uid}-1-1.html" target="_blank">${Comment.UNiChen}</a></div> <span class="u-level"><span style="color:${Comment.UserLevelColor}"> ${Comment.UserLevelName} </span></span><div class="u-address"> (${Comment.UserProvince}) </div> <div class="date-buy">\u8d2d\u4e70\u65e5\u671f<br>${Comment.ReferenceDate}</div> </div> <div class="i-item"> <div class="o-topic"> {if parseInt(Comment.IsTop) == 1}<strong class="topic-best topic">\u7cbe\u534e</strong>{/if} <strong class="topic"><a href="http://club.360buy.com/repay/${Comment.ReferenceId}_${Comment.Id}_1.html" target="_blank">${Comment.Title}</a></strong> <span class="star sa{if Comment.Score !== null}${Comment.Score}{else}0{/if}"></span> <span class="date-comment">${Comment.UserClientShow} ${Comment.CreationTime}</span> </div> <div class="comment-content"> {if (Comment.Pros)} <dl> <dt>\u4f18\u70b9\uff1a</dt> <dd> ${Comment.Pros}</dd> </dl> {/if} {if (Comment.Cons)} <dl> <dt>\u4e0d\u8db3\uff1a</dt> <dd> ${Comment.Cons}</dd> </dl> {/if} {if (Comment.Content)} <dl> <dt>\u4f7f\u7528\u5fc3\u5f97\uff1a</dt> <dd> ${Comment.Content}</dd></dl> {/if} {if !!Comment.OrderInfo.shiningImages==true && parseInt(Comment.OrderInfo.shiningImages.imgs.length)>0} <dl> <dt>\u7528\u6237\u6652\u5355\uff1a</dt> <dd> <div class="comment-show-pic"> {for image in Comment.OrderInfo.shiningImages.imgs}{if parseInt(image_index)<3} <a href="http://comm.360buy.com/bbsDetail/${Comment.OrderInfo.referenceId}_${Comment.OrderInfo.guid}_1.html" target="_blank"><img alt="${image.imageTitle}" width="128" height="96" src="${image.i_s128x96}" /></a> {/if}{/for} <span><a href="http://comm.360buy.com/bbsDetail/${Comment.OrderInfo.referenceId}_${Comment.OrderInfo.guid}_1.html" target="_blank">[\u67e5\u770b\u6652\u5355]</a><em>\uff08\u5171${Comment.OrderInfo.shiningImages.imgs.length}\u5f20\uff09</em></span> </div> </dd> </dl> {/if} </div> <div class="btns"> <div class="useful" id="${Comment.Id}"> <span>\u6b64\u8bc4\u4ef7\u5bf9\u6211</span> <a name="agree" class="btn-agree" title="${Comment.UsefulVoteCount}" href="#none">\u6709\u7528(${Comment.UsefulVoteCount})</a> <a name="oppose" class="btn-oppose" title="${Comment.UselessVoteCount}" href="#none">\u6ca1\u7528(${Comment.UselessVoteCount})</a> </div> <a class="btn-reply" href="http://club.360buy.com/repay/${Comment.ReferenceId}_${Comment.Id}_1.html#replyform" target="_blank">\u56de\u590d</a> </div> {for Reply in Comment.Replies} <div class="item-reply"> <strong>${Comment.ReplyCount-parseInt(Reply_index)}</strong> <dl> <dt> <span class="u-name"><a href="http://club.360buy.com/userreview/${Reply.Uid}-1-1.html" target="_blank">${Reply.UNiChen}</a>\u56de\u590d\u8bf4\uff1a</span> <span class="date-comment">${Reply.UserClientShow} ${Reply.CreationTime}</span> </dt> <dd> ${Reply.Content}</dd> </dl> </div> {/for} {if Comment.ReplyCount > 8} <div class="ac"> <a href="http://club.360buy.com/repay/${Comment.ReferenceId}_${Comment.Id}_1.html" target="_blank">\u67e5\u770b\u5168\u90e8${Comment.ReplyCount}\u6761\u56de\u590d&gt;&gt;</a> </div> {/if} </div> <div class="corner tl"> </div> </div> {/for} <!--item end--> <div class="clearfix"> <div class="pagin fr" clstag="shangpin|keycount|product|fanye" id="commentsPage${Score}"> </div></div>{elseif Score == 0} <div class="norecode"> \u6682\u65e0\u5546\u54c1\u8bc4\u4ef7\uff01<span style="hl-red">\u4e89\u62a2\u4ea7\u54c1\u8bc4\u4ef7\u524d5\u540d\uff0c\u524d5\u4f4d\u8bc4\u4ef7\u7528\u6237\u53ef\u83b7\u5f97\u591a\u500d\u79ef\u5206\u54e6\uff01</span>\uff08<a href="http://help.360buy.com/help/question-58.html" target="_blank">\u8be6\u89c1\u79ef\u5206\u89c4\u5219</a>\uff09\uff01</div><div class="extra clearfix"> <div class="join"> \u53ea\u6709\u8d2d\u4e70\u8fc7\u8be5\u5546\u54c1\u7684\u7528\u6237\u624d\u80fd\u8fdb\u884c\u8bc4\u4ef7\u3002&nbsp;&nbsp;<a target="_blank" href="http://club.360buy.com/Simplereview/${CommentSummary.ReferenceId}.html" name="http://club.360buy.com/Simplereview/${CommentSummary.ReferenceId}.html" id="A1">[\u53d1\u8868\u8bc4\u4ef7]</a>&nbsp;&nbsp;<a target="_blank" href="http://club.360buy.com/allreview/1-1.html">[\u6700\u65b0\u8bc4\u4ef7]</a> </div></div> {elseif Score == 3} <div class="norecode"> \u6682\u65e0\u597d\u8bc4\uff01</div> {elseif Score == 2} <div class="norecode"> \u6682\u65e0\u4e2d\u8bc4\uff01</div> {elseif Score == 1} <div class="norecode"> \u6682\u65e0\u5dee\u8bc4\uff01</div> {elseif Score == 4} <div class="norecode"> \u6682\u65e0\u6652\u5355\u8bc4\u4ef7\uff01</div> {/if}';
var discuss_TPL = '<table width="100%" cellspacing="0" cellpadding="0" border="0"> <tbody> <tr> <th class="col1">\u4e3b\u9898</th> <th class="col2">\u56de\u590d/\u6d4f\u89c8</th> <th class="col3">\u4f5c\u8005</th> <th class="col4">\u65f6\u95f4</th> </tr> {for comment in discussComments.Comments} <tr> <td class="col1"> <div class="topic"> {if comment.referenceType == "Order"} <b class="icon shai"></b> {elseif comment.referenceType == "User"} <b class="icon lun"></b> {elseif comment.referenceType == "Question"} <b class="icon wen"></b> {elseif comment.referenceType == "Friend"} <b class="icon quan"></b> {/if} <a href="http://{if comment.referenceType == "User" || comment.referenceType == "Question"}club{else}comm{/if}.360buy.com/bbsDetail/${comment.referenceId}_${comment.id}_1.html" target="_blank">${comment.title}</a> </div> </td> <td class="col2">${comment.replyCount}/${comment.viewCount}</td> <td class="col3"> <div class="u-name"> <a target="_blank" title="${comment.uRemark}" href="http://club.360buy.com/userdiscuss/${comment.uid}-1.html">{if comment.uRemark}${comment.uRemark}{else}${comment.userId}{/if}</a> </div> </td> <td class="col4">${comment.creationTime}</td> </tr> {/for} </tbody></table>{if discussComments.CommentCount <= 0} {if parseInt(ReferenceType) == 1} <div class="norecode">\u6682\u65e0\u8ba8\u8bba\u5e16\uff01</div> {elseif parseInt(ReferenceType) == 2} <div class="norecode">\u6682\u65e0\u95ee\u7b54\u5e16\uff01</div> {elseif parseInt(ReferenceType) == 3} <div class="norecode">\u6682\u65e0\u5708\u5b50\u8d34\uff01</div> {elseif parseInt(ReferenceType) == 4} <div class="norecode">\u6682\u65e0\u6652\u5355\u5e16\uff01</div> {else} <div class="norecode">\u6682\u65e0\u7f51\u53cb\u8ba8\u8bba\uff01</div> {/if}{/if}<div class="extra clearfix"> <div class="total"> <span>\u5171${discussComments.CommentCount}\u4e2a\u8bdd\u9898</span>&nbsp;&nbsp; <a target="_blank" href="http://club.360buy.com/bbs/${referenceId}-1-0-${ReferenceType}.html">\u6d4f\u89c8\u5168\u90e8\u8bdd\u9898&gt;&gt;</a> </div> <div class="contact"> \u6709\u95ee\u9898\u8981\u4e0e\u5176\u4ed6\u7528\u6237\u8ba8\u8bba\uff1f<a target="_blank" href="http://club.360buy.com/bbs/${referenceId}-1.html" name="http://club.360buy.com/bbs/${referenceId}-1.html" id="userComment${ReferenceType}">[\u53d1\u8868\u8bdd\u9898]</a> </div></div>';
var consult_TPL = '{if Consultations.length > 0} {for Consultation in Consultations} <div class="item{if Consultation_index% 2 == 1} odd{/if}"> <div class="user"> <span class="u-name">\u7f51\u3000\u3000\u53cb\uff1a${Consultation.UNickNme}</span> <!--<span class="u-level" name="${Consultation.UserId}"></span>--> <span class="u-level" ><font style="color:${Consultation.UserLevelColor}"> ${Consultation.UserLevelName} </font></span> <span class="date-ask">${Consultation.CreationTime}</span> </div> <dl class="ask"> <dt><b></b>\u54a8\u8be2\u5185\u5bb9\uff1a</dt> <dd><a target="_blank" href="http://club.360buy.com/consultation/${Consultation.ProductId}-${Consultation.Id}.html">${Consultation.Content}</a></dd> </dl> <dl class="answer"> {for Reply in Consultation.Replies} <dt> <b></b> {if Reply.sst == 2}\u5356\u5bb6\u56de\u590d\uff1a {else}\u4eac\u4e1c\u56de\u590d\uff1a{/if} </dt> <dd> <div class="content">${Reply.sword}</div> <div class="date-answer">${Reply.sinsdate}</div> </dd> {/for} </dl> </div> {/for} {else} <div class="norecode">\u6682\u65e0\u8be5\u7c7b\u54a8\u8be2\uff01</div>{/if}<div class="extra clearfix"> <div class="total"> \u5171<strong>${SearchParameter.Count}</strong>\u6761&nbsp;&nbsp; <a href="http://club.360buy.com/allconsultations/${SearchParameter.ProductId}-1-1.html" target="_blank">\u6d4f\u89c8\u6240\u6709\u54a8\u8be2\u4fe1\u606f&gt;&gt;</a> </div> <div class="join"> \u8d2d\u4e70\u4e4b\u524d\uff0c\u5982\u6709\u95ee\u9898\uff0c\u8bf7\u5411\u4eac\u4e1c\u54a8\u8be2\u3002&nbsp;&nbsp; <a id="consultation" href="http://club.360buy.com/allconsultations/${SearchParameter.ProductId}-1-1.html#form1">[\u53d1\u8868\u54a8\u8be2]</a> </div></div>';
var consult_search_TPL = '{for item in list}<div class="item search-result-item"> <div class="user"> <span class="u-name">\u7f51\u3000\u3000\u53cb\uff1a${item.nickname}</span> <span class="date-ask">${item.sindate}</span> </div> <dl class="ask"> <dt><b></b>\u54a8\u8be2\u5185\u5bb9\uff1a</dt> <dd>${item.sword}</dd> </dl> <dl class="answer"> <dt><b></b>\u4eac\u4e1c\u56de\u590d\uff1a</dt> <dd>{if item.sword!==""}${item.sword2}{/if}</dd> </dl> <div id="${item.sid}" class="useful">\u60a8\u5bf9\u6211\u4eec\u7684\u56de\u590d\uff1a <a name="2" href="#none" class="btn-pleased">\u6ee1\u610f</a> (<span>${item.zantong}</span>)\u3000 <a name="2" href="#none" class="btn-unpleased">\u4e0d\u6ee1\u610f</a> (<span>${item.fd}</span>) </div></div>{/for}';
var search_TPL = '{for list in Product}<dl skuid="${list.wareid}"> <dt class="p-img"><a target="_blank" href="http://www.360buy.com/product/${list.wareid}.html"><img width="50" height="50" src="${pageConfig.FN_GetImageDomain(list.wareid)}n5/${list.Content.imageurl}" alt=""></a></dt> <dd class="p-name"><a target="_blank" href="http://www.360buy.com/product/${list.wareid}.html">${list.Content.warename}</a></dd> <dd class="p-price"> <img src="http://price.360buyimg.com/gp${list.wareid},1.png" onerror="this.src=\'http://misc.360buyimg.com/lib/skin/e/i/error-3.gif\'" /> </dd></dl>{/for}';
function jdPshowRecommend(b, g) {
    var i = unescape(pageConfig.product.name),
    f = pageConfig.product.skuid,
    j = pageConfig.product.src;
    price = pageConfig.product.price || "";
    var d = "\u6211\u5728@\u4eac\u4e1c\u5546\u57ce \u53d1\u73b0\u4e86\u4e00\u4e2a\u975e\u5e38\u4e0d\u9519\u7684\u5546\u54c1\uff1a" + i + "\uff0c\u4eac\u4e1c\u4ef7\uff1a\uffe5 " + price + "\u3002\u611f\u89c9\u4e0d\u9519\uff0c\u5206\u4eab\u4e00\u4e0b";
    var c = pageConfig.FN_GetImageDomain(f) + "n5/" + j;
    var h = "http://www.360buy.com/product/" + f + ".html?sid=";
    var a = readCookie("pin") || "";
    if (g == "qzone") {
        b = b + "&title=" + d + "&pic=" + c + "&url=" + h + a
    }
    if (g == "sina") {
        b = b + "&title=" + encodeURIComponent(d) + "&pic=" + encodeURIComponent(c) + "&url=" + encodeURIComponent(h) + a;
        window.open(b, "", "height=500, width=600")
    }
    if (g == "renren") {
        b = b + "title=" + i + "&content=" + d + "&pic=" + c + "&url=" + h + a
    }
    if (g == "kaixing") {
        b = b + "rtitle=" + i + "&rcontent=" + d + "&rurl=" + h + a
    }
    if (g == "douban") {
        b = b + "title=" + i + "&comment=" + d + "&url=" + h + a
    }
    if (g == "MSN") {
        b = b + "url=" + h + a + "&title=" + i + "&description=" + d + "&screenshot=" + c
    }
    if (g != "sina") {
        window.open(encodeURI(b), "", "height=500, width=600")
    }
}
function PostSinaDate() {
    var b = pageConfig.product.skuid;
    var a = "http://club.360buy.com/ProductPageService.aspx?method=GetCommentSummaryBySkuId&referenceId={0}&callback=CallBackGetCommentCount".format(b);
    $.getJSONP(a, CallBackGetCommentCount)
}
function CallBackGetCommentCount(a) {
    var c = 5,
    d = 0;
    if (a) {
        c = a.AverageScore;
        d = a.CommentCount
    }
    var f = pageConfig.product.skuid;
    var b = "http://www.360buy.com/SOAService/SinaRecommend.ashx?skuid={0}&grade={1}&rev_amount={2}&callback=?";
    $.getJSON(b.format(f, c, d), 
    function(g) {
        if (!g) {
            return
        }
    })
}
var setAmount = {
    min: 1,
    max: 999,
    urlPerfix: "http://gate.360buy.com/InitCart.aspx?",
    targetLink: $("#choose-btn-append .btn-append"),
    data: {
        pid: pageConfig.product.skuid,
        pcount: $("#buy-num").val(),
        ptype: 1
    },
    reg: function(a) {
        return new RegExp("^[1-9]\\d*$").test(a)
    },
    amount: function(b, c) {
        var a = $(b).val();
        if (this.reg(a)) {
            if (c) {
                a++
            } else {
                a--
            }
        } else {
            alert("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u6570\u91cf\uff01");
            $(b).val(1);
            $(b).focus()
        }
        return a
    },
    reduce: function(b) {
        var a = this.amount(b, false);
        if (a >= this.min) {
            $(b).val(a)
        } else {
            alert("\u5546\u54c1\u6570\u91cf\u6700\u5c11\u4e3a" + this.min);
            $(b).val(1);
            $(b).focus()
        }
        if (this.data.pcount) {
            this.data.pcount = $("#buy-num").val()
        }
        this.updateBuyLink(pageConfig.product.skuid, this.urlPerfix)
    },
    add: function(b) {
        var a = this.amount(b, true);
        if (a <= this.max) {
            $(b).val(a)
        } else {
            alert("\u5546\u54c1\u6570\u91cf\u6700\u591a\u4e3a" + this.max);
            $(b).val(999);
            $(b).focus()
        }
        if (this.data.pcount) {
            this.data.pcount = $("#buy-num").val()
        }
        this.updateBuyLink(pageConfig.product.skuid, this.urlPerfix)
    },
    modify: function(b) {
        var a = $(b).val();
        if (a < this.min || a > this.max || !this.reg(a)) {
            alert("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u6570\u91cf\uff01");
            $(b).val(1);
            $(b).focus()
        }
        if (this.data.pcount) {
            this.data.pcount = $("#buy-num").val()
        }
        this.updateBuyLink(pageConfig.product.skuid, this.urlPerfix)
    },
    updateBuyLink: function(f, a) {
        var c = this.data.pcount;
        var b = /^[0-9]{1,4}$/;
        var d = a || "http://gate.360buy.com/InitCart.aspx?";
        if (!b.exec(c)) {
            c = 1
        } else {
            if (c <= 0) {
                c = 1
            }
            if (c >= 1000) {
                c = 999
            }
        }
        this.targetLink.attr("href", d + $.param(this.data))
    }
}; (function() {
    //var b = pageConfig.product.skuid,
    //a = "http://club.360buy.com/ProductPageService.aspx?method=GetCommentSummaryBySkuId&referenceId={0}&callback=GetCommentSummaryBySkuId".format(b);
    //$.getJSONP(a, GetCommentSummaryBySkuId)
})();
function GetCommentSummaryBySkuId(a) {
    if (!a) {
        return
    }
    var c = $("#summary-grade .star"),
    b = $("#summary-grade .dd a");
    c.removeClass("sa0").addClass("sa" + a.AverageScore);
    b.html("(\u5df2\u6709" + a.CommentCount + "\u4eba\u8bc4\u4ef7)")
} (function() {
    var b = $("#choose-color .selected a,#choose-version .selected a"),
    a = $("#choose-result .dd"),
    c = [];
    if (b.length < 1 || $("#product-intro").hasClass("product-intro-noitem")) {
        $("#choose-result").hide()
    } else {
        b.each(function() {
            if ( !! $(this).attr("title") == true) {
                c.push("<strong>\u201c" + $(this).attr("title") + "\u201d</strong>")
            }
        });
        if (c.length > 0) {
            a.prepend("<em>\u5df2\u9009\u62e9</em>" + c.join("\uff0c"));
            $("#choose-result").show()
        }
    }
})(); (function() {
    var a = "4835-4836-4833",
    b = pageConfig.product.cat[2];
    if ((new RegExp(b)).test(a)) {
        $("#choose-amount").hide()
    }
    if (b == 4835 || b == 4836) {
        setAmount.urlPerfix = "http://card.360buy.com/order/order_place.action?";
        setAmount.data = null;
        setAmount.data = {
            skuId: pageConfig.product.skuid
        }
    }
    if (b == 4833) {
        setAmount.urlPerfix = "http://chongzhi.360buy.com/order/order_place.action?";
        setAmount.data = null;
        setAmount.data = {
            skuId: pageConfig.product.skuid
        }
    }
})();
var fq_serverSite = "http://jd2008.360buy.com/purchase/";
var fq_serverSiteService = "http://jd2008.360buy.com/purchaseservice/";
var fq_serverUrl = "ajaxServer/ForMiniCart_fq.aspx";
var fq_btnPanel = "choose-btn-divide";
var fq_skuId = "";
var fq_TipHtml = "";
var isFqOpen = true;
var isYbOpen = true;
var fq_returnData = null;
function sortFitting(d, c, m) {
    var a = $(m),
    h = c,
    i = a.find(".suits"),
    f = a.find(".stab li"),
    b = a.find(".suits .lh"),
    j = i.find('li[data-cat="' + h + '"]');
    if (c == "all") {
        var l = parseInt(i.attr("data-count"));
        i.find("li").show();
        b.css("width", l * 166);
        if (l > 4) {
            i.css("overflow-x", "scroll")
        }
    } else {
        i.find("li").hide();
        j.show()
    }
    f.removeClass("scurr");
    $(d).addClass("scurr");
    if ( !! $(d).attr("data-count") == true) {
        var g = parseInt($(d).attr("data-count"));
        i.css("overflow-x", (g <= 4) ? "hidden": "scroll");
        b.css("width", g * 166)
    }
    i.scrollLeft(0);
    removeLastAdd()
}
function calculatePrice(g, q) {
    var b = $(g).parents(q),
    n = b.find(".master input").attr("wmeprice"),
    l = b.find("input:checked"),
    a = l.length,
    c = b.find(".infos .res-totalprice"),
    o = b.find(".infos .res-jdprice"),
    j = 0,
    p = 0,
    f = "http://jd2008.360buy.com/purchase/OrderFlowService.aspx?action=AddSkus&wids=",
    m = b.find(".btn-buy"),
    h = [];
    for (var d = 0; d < l.length; d++) {
        j += parseFloat(l.eq(d).attr("wmaprice"));
        p += parseFloat(l.eq(d).attr("wmeprice"));
        h.push(l.eq(d).attr("skuid"))
    }
    if (n == "" || parseInt(n) == 0) {
        return
    } else {
        c.text("\uffe5 " + j.toFixed(2));
        o.text("\uffe5 " + p.toFixed(2));
        m.attr("href", f + h.join(","));
        b.find(".infos .p-name span").html((a - 1).toString())
    }
}
function checkIndex(b) {
    for (var a = 0; a < b.length; a++) {
        if (document.getElementById(b[a]).getAttribute("load")) {
            return a
        }
    }
}
var GiftCardWid = null;
function getGift(a) {
    $.jdThickBox({
        type: "json",
        width: 600,
        height: 530,
        title: "\u9009\u62e9\u8d3a\u5361\u6837\u5f0f",
        source: "http://buy.360buy.com/GreetingCard/giftAjax.aspx?getGift=get&wid=" + a + "&jsoncallback=?"
    },
    function(b, c) {
        $.getJSON(b, 
        function(d) {
            if (d.info != "") {
                c.html(d.info)
            }
        })
    })
}
function setGift() {
    var array = document.getElementById("changeCard").getElementsByTagName("input");
    var wid;
    for (var i = 0; i < array.length; i++) {
        if (array[i].type == "radio" && array[i].checked) {
            wid = array[i].value;
            break
        }
    }
    var to = document.getElementById("To").value;
    var form = document.getElementById("From").value;
    var msg = document.getElementById("Message").value;
    to = to.replace(/<[\s\S]*?>/, "");
    form = form.replace(/<[\s\S]*?>/, "");
    msg = msg.replace(/<[\s\S]*?>/, "");
    GiftCardWid = wid;
    if (wid == "" || wid == null) {
        alert("\u8bf7\u9009\u62e9\u8d3a\u5361\u6837\u5f0f\uff01");
        return false
    }
    if (to == "" || to == null) {
        alert("\u8bf7\u586b\u5199\u8d3a\u5361\u6536\u4ef6\u4eba\uff01");
        return false
    }
    if (msg == "" || msg == null) {
        alert("\u8bf7\u586b\u5199\u8d3a\u5361\u5185\u5bb9\uff01");
        return false
    }
    if (msg.length > 80) {
        alert("\u8d3a\u5361\u5185\u5bb9\u957f\u5ea6\u4e0d\u80fd\u8d85\u8fc780\uff01\u76ee\u524d\u5df2\u7ecf\u8f93\u5165" + msg.length);
        return false
    }
    if (form == "" || form == null) {
        alert("\u8bf7\u586b\u5199\u8d3a\u5361\u53d1\u4ef6\u4eba\uff01");
        return false
    }
    $.getJSON("http://buy.360buy.com/GreetingCard/giftAjax.aspx?getGift=set&wid=" + wid + "&To=" + to + "&From=" + form + "&msg=" + msg + "&jsoncallback=?", 
    function(json) {
        if (json.info != "") {
            if (json.info == "true") {
                if (CardUrl != null) {
                    window.location.href = CardUrl
                } else {
                    if (CardFun != null) {
                        eval(CardFun)
                    }
                }
            } else {
                alert("\u4fdd\u5b58\u4fe1\u606f\u5931\u8d25\uff01")
            }
        }
    })
}
var CardUrl = null;
var CardFun = null;
function Card() {
    this.Wid = 0;
    this.Url = "";
    this.Fun = "";
    this.Show = function() {
        CardUrl = this.Url;
        CardFun = this.Fun;
        getGift(this.Wid)
    }
}
var isIe = (window.ActiveXObject) ? true: false;
function showTip100(proobj) {
    var TipDivW = $(proobj).width();
    var TipDivH = $(proobj).height();
    var TipDiv = $("<div id='c04tip' style='z-index:20000;position:absolute;width:" + eval(TipDivW + 5) + "px;height:" + eval(TipDivH + 5) + "px;'><div style='position:absolute;margin:5px 0 0 5px;width:" + TipDivW + "px;height:" + TipDivH + "px;background:#BCBEC0;z-index:20001;'></div></div>");
    if (fq_returnData) {
        fq_formatData(fq_returnData)
    }
    TipDiv.append($(proobj));
    $(document.body).prepend(TipDiv);
    $(proobj).show();
    $("#c04tip").css({
        top: parseInt(document.documentElement.scrollTop + (document.documentElement.clientHeight - $("#c04tip").height()) / 2) + "px",
        left: (document.documentElement.clientWidth - $("#c04tip").width()) / 2 + "px"
    });
    $("#Tip_apply,#Tip_continue,.Tip_Close").click(function() {
        $("#c04tip").remove();
        $("#choose-btn-coll").after('<div id="Fqfk_Tip" class="Tip360"></div>')
    })
}
if (isFqOpen) {
    if (!isIe) {
        try {
            fq_init()
        } catch(e) {
            document.addEventListener("DOMContentLoaded", fq_init, null)
        }
    } else {
        fq_init()
    }
}
function fq_init() {
    if (pageConfig.product.skuid) {
        fq_showFq(pageConfig.product.skuid)
    }
}
if (isYbOpen) {
    if (!isIe) {
        try {
            yb_init()
        } catch(e) {
            document.addEventListener("DOMContentLoaded", yb_init, null)
        }
    } else {
        yb_init()
    }
}
function yb_init() {
    if (pageConfig.product.skuid) {
        yb_showYb(pageConfig.product.skuid)
    }
}
function fq_showFq(a) {
    var b = document.createElement("script");
    b.type = "text/javascript";
    b.src = fq_serverSiteService + fq_serverUrl + "?roid=" + Math.random() + "&action=getFqInfo&id=" + a;
    document.getElementsByTagName("head")[0].appendChild(b)
}
function yb_showYb(a) {
    var b = document.createElement("script");
    b.type = "text/javascript";
    b.src = fq_serverSiteService + fq_serverUrl + "?roid=" + Math.random() + "&action=getYBInfo&id=" + a;
    setTimeout(function() {
        document.getElementsByTagName("head")[0].appendChild(b)
    },
    3000)
}
function fq_showFq_html(a) {
    if (a != null) {
        if (a.json.length == 0) {
            return
        } else {
            if (a.json.length == 0) {
                return
            }
            if (a.json[0].error != null) {
                return
            }
            document.getElementById(fq_btnPanel).innerHTML = '<a href="javascript:;" class="btn-divide" onclick="showTip100(\'#Fqfk_Tip\')">\u5206\u671f\u4ed8\u6b3e<b></b></a>';
            fq_returnData = a
        }
    }
}
function fq_formatData(c) {
    var b = document.getElementById("Fqfk_Tip");
    b.style.width = "500px";
    var d = "";
    d += "<div class='Tip_Title'><em><img src='" + fq_serverSite + "skin/images/tip_close.jpg' class='Tip_Close'/></em>\u5206\u671f\u4ed8\u6b3e</div>";
    d += "<div class='Tip_Content'><div style='text-align:left;'>\u672c\u5546\u54c1\u652f\u6301\u4ee5\u4e0b\u94f6\u884c\u4fe1\u7528\u5361\u5206\u671f\u4ed8\u6b3e\uff1a</div>";
    d += "<div>";
    d += "<table width='100%' cellpadding='0' cellspacing='1' bgcolor='#C0C0C0'>";
    d += "<tr style='background:#EBF4FB'><th>\u94f6\u884c</th><th>3\u671f</th><th>6\u671f</th><th>12\u671f</th><th>24\u671f</th></tr>";
    for (var a = 0; a < c.json.length; a++) {
        d += "<tr style='background:#fff'><td><img src='" + fq_serverSite + "skin/images/ins_bank/fqfk_bank_" + c.json[a].Id + ".jpg' border='0' /></td>";
        d += "<td>" + ((c.json[a].p3 != "-") ? "<strong>" + c.json[a].p3 + "\u5143</strong>\u00d73\u671f": "-") + "</td>";
        d += "<td>" + ((c.json[a].p6 != "-") ? "<strong>" + c.json[a].p6 + "\u5143</strong>\u00d76\u671f": "-") + "</td>";
        d += "<td>" + ((c.json[a].p12 != "-") ? "<strong>" + c.json[a].p12 + "\u5143</strong>\u00d712\u671f": "-") + "</td>";
        d += "<td>" + ((c.json[a].p24 != "-") ? "<strong>" + c.json[a].p24 + "\u5143</strong>\u00d724\u671f": "-") + "</td></tr>"
    }
    d += "</table>";
    d += "</div>";
    d += "<div style='text-align:left;padding:7px 0 0 3px'>\u62db\u5546\u94f6\u884c\u5373\u5c06\u652f\u6301\u6309\u8ba2\u5355\u8fdb\u884c\u5206\u671f\u4ed8\u6b3e\uff0c\u60a8\u53ef\u4ee5\u4e0b\u5355\u540e\u5728\u7ed3\u7b97\u65f6\u9009\u62e9\u5206\u671f\u4ed8\u6b3e\u3002</div>";
    d += "</div>";
    d += "<div style='padding:9px;padding-bottom:13px'><img src='" + fq_serverSite + "skin/images/fqflow.gif' /></div>";
    d += "<div class='Tip_Submit'><a style='border:none' href='" + fq_serverSite + "ShoppingCart_fqInit.aspx?skuId=" + pageConfig.product.skuid + "&skuCount=1' id='Tip_apply'><img src='" + fq_serverSite + "skin/images/fqstart.gif' /></a><a class='link_1' style='margin-right:210px;border:none;color:#000' href='http://help.360buy.com/help/question-71.html' target='_blank'>\u67e5\u770b\u5206\u671f\u4ed8\u6b3e\u5e2e\u52a9</a></div>";
    b.innerHTML = d
}
var buyBtnLink;
function fq_showYb_html(f) {
    var a = $("#tab-services");
    var d = "";
    if (a.length != 0 || a != null) {
        if (pageConfig.product.skuid < 1000000000) {
            d += "<div class='i-mc'><b>\u4eac\u4e1c\u8d3a\u5361\u670d\u52a1</b> - \u597d\u793c\u9644\u8d3a\u5361\uff0c\u5fc3\u610f\u5c3d\u4f20\u8fbe\uff01</div>";
            d += "<table>";
            d += "<tr><td>\u00b7\u7cbe\u7f8e\u8d3a\u5361\uff08\u53ef\u81ea\u884c\u586b\u5199\u8d3a\u5361\u5185\u5bb9\uff09</td><td><a href='#none' class='btn-buy' onclick=\"Card_buy();\">\u8d2d\u4e70</a></td></tr>";
            d += "</table>"
        }
        if (f != null && f.json.length > 0 && f.json[0].error == null) {
            var g = "<table>";
            for (var c = 0; c < f.json.length; c++) {
                if (f.json[c].Type != "0") {
                    continue
                }
                g += "<tr><td>\u00b7";
                if (f.json[c].HName.indexOf("http") == 0) {
                    g += "<a target='_blank' href='" + f.json[c].HName + "'>" + f.json[c].Name + "</a>"
                } else {
                    g += "<a target='_blank' href='http://www.360buy.com/help/" + f.json[c].HName + "'>" + f.json[c].Name + "</a>"
                }
                g += "<font color='red' style='margin-right:12px'>" + f.json[c].Message + "</font></td><td><strong style='color:red'>\uffe5" + f.json[c].Price + "</strong>&nbsp;&nbsp;</td>";
                if (f.json[c].HName.indexOf("http") == 0) {
                    g += "<td><a target='_blank' href='" + f.json[c].HName + "'>[\u8be6\u7ec6\u8bf4\u660e]</a></td>"
                } else {
                    g += "<td><a target='_blank' href='http://www.360buy.com/help/" + f.json[c].HName + "'>[\u8be6\u7ec6\u8bf4\u660e]</a></td>"
                }
                g += "<td><a href='" + fq_serverSite + "InitCart.aspx?pid=" + pageConfig.product.skuid + "&pcount=1&ptype=1&ybId=" + f.json[c].Id + "' class='btn-buy'>\u8d2d\u4e70</a></td></tr>"
            }
            g += "</table>";
            if (g != "<table></table>") {
                d += "<div class='i-mc'><b>\u8d2d\u4e70\u5ef6\u4fdd\u670d\u52a1</b> - \u4fdd\u4fee\u65f6\u95f4\u66f4\u957f\u3001\u4fdd\u4fee\u8303\u56f4\u66f4\u5e7f\u3001\u591a\u9879\u610f\u5916\u4fdd\u969c\uff0c\u4f7f\u7528\u66f4\u5b89\u5fc3\uff01</div>";
                d += g
            }
            var b = "<table>";
            for (var c = 0; c < f.json.length; c++) {
                if (f.json[c].Type != "1") {
                    continue
                }
                b += "<tr><td>\u00b7<a href='http://www.360buy.com/product/" + f.json[c].Id + ".html' target='_blank'>" + f.json[c].Name + "</a><font color='red' style='margin-right:12px'>" + f.json[c].Message + "</font></td><td><strong style='color:red'>\uffe5" + f.json[c].Price + "</strong></td>";
                b += "<td><a href='" + fq_serverSite + "InitCart.aspx?pid=" + f.json[c].Id + "&pcount=1&ptype=1' class='btn-buy'>\u8d2d\u4e70</a></td>";
                b += "<td>&nbsp;&nbsp;<a href='http://www.360buy.com/help/special/index.aspx' target='_blank'>[\u670d\u52a1\u5e2e\u52a9]</a></td>";
                b += "</tr>"
            }
            b += "</table>";
            if (b != "<table></table>") {
                d += "<div class='i-mc'><b>\u6e05\u6d17\u670d\u52a1</b> - \u6e05\u6d17\u5bb6\u7535\u4e0d\u518d\u6101\uff0c\u751f\u6d3b\u66f4\u8212\u5fc3</div>";
                d += b
            }
            strDiy = "<table>";
            for (var c = 0; c < f.json.length; c++) {
                if (f.json[c].Type != "2") {
                    continue
                }
                strDiy += "<tr><td>\u00b7<a href='http://www.360buy.com/product/" + f.json[c].Id + ".html' target='_blank'>" + f.json[c].Name + "</a><font color='red' style='margin-right:12px'>" + f.json[c].Message + "</font></td><td><strong style='color:red'>\uffe5" + f.json[c].Price + "</strong></td>";
                strDiy += "<td><a href='" + fq_serverSite + "InitCart.aspx?pid=" + f.json[c].Id + "&pcount=1&ptype=1' class='btn-buy'>\u8d2d\u4e70</a></td>";
                strDiy += "<td>&nbsp;&nbsp;<a href='http://www.360buy.com/help/special/index.aspx' target='_blank'>[\u670d\u52a1\u5e2e\u52a9]</a></td>";
                strDiy += "</tr>"
            }
            strDiy += "</table>";
            if (strDiy != "<table></table>") {
                d += "<div class='i-mc'><b>\u4e0a\u95e8DIY\u670d\u52a1</b> - \u4eac\u4e1c\u4e0a\u95e8\u5e2e\u60a8DIY\uff0c\u88c5\u673a\u66f4\u8f7b\u677e\uff01</div>";
                d += strDiy
            }
        }
        if (d != "") {
            $("#tab-services").html(d);
            $("#recommend").show();
            if ($("#tab-reco").attr("loaded") !== "true" && $("#tab-hot").attr("loaded") !== "true") {
                $("#recommend .tab li").eq(2).show().trigger("click")
            } else {
                $("#recommend .tab li").eq(2).show()
            }
        }
    }
}
function yb_sel(d) {
    var b = document.getElementsByName("ybChk");
    for (var c = 0; c < b.length; c++) {
        if (d != b[c]) {
            b[c].checked = false
        }
    }
    var a = document.getElementById("gouwuche").parentNode;
    if (d.checked) {
        a.href = buyBtnLink + "&ybId=" + d.value
    } else {
        a.href = buyBtnLink
    }
}
function Card_buy() {
    var a = new Card();
    a.Fun = "Card_buy_finish('" + pageConfig.product.skuid + "');";
    a.Url = null;
    a.Show()
}
function Card_buy_finish(a) {
    this.location = "http://jd2008.360buy.com/purchase/InitCart.aspx?pid=" + a + "&pcount=1&ptype=1&addId=" + GiftCardWid
}
function getCookie(b) {
    var a = document.cookie.match(new RegExp("(^| )" + b + "=([^;]*)(;|$)"));
    if (a != null) {
        return unescape(a[2])
    }
    return null
}
function removeLastAdd(a) {
    var a = a || $(".suits");
    a.find("li").removeClass("last-item");
    a.find("li:visible:last").addClass("last-item")
}
var Recommend = {
    init: function(a) {
        this.type = a;
        this.renderHTML();
        this.renderRecoFittingsHTML()
    },
    renderRecoFittingsHTML: function() {
        var a = this;
        $.getJSONP("http://d.360buy.com/fittingInfo/get?skuId=" + pageConfig.product.skuid + "&callback=Recommend.cbRecoFittings")
    },
    renderRecoServiceHTML: function() {
        $.ajax({
            url: "http://d.360buy.com/yanbao/get?skuId=" + pageConfig.product.skuid,
            dataType: "jsonp",
            success: function(b) {
                var c = [];
                if (pageConfig.product.skuid < 1000000000) {
                    c.push(recoService_card_TPL)
                }
                if (b !== null && b.length > 0) {
                    for (var a = 0; a < b.length; a++) {
                        c.push(recoService_yb_TPL.process(b[a]))
                    }
                }
                $("#recommend").show();
                $("#recommend .tab li").eq(2).show().trigger("click");
                $("#tab-services").html(c.join(""))
            }
        })
    },
    renderHTML: function() {
        var a = this;
        $.getJSONP("http://jprice.360buy.com/suit/" + pageConfig.product.skuid + "-1-1.html");
        switch (this.type) {
        case 1:
            $.getJSONP("http://simigoods.360buy.com/ThreeCCombineBuying/ThreeCBuyBuy.aspx?ip=" + getCookie("ipLocation") + "&wids=" + pageConfig.product.skuid + "&callback=Recommend.cbCBuyBuy", Recommend.cbCBuyBuy);
            $.getJSONP("http://simigoods.360buy.com/ThreeCCombineBuying/ThreeCBroswerBuy.aspx?ip=" + getCookie("ipLocation") + "&wids=" + pageConfig.product.skuid + "&callback=Recommend.cbBroswerBuy", Recommend.cbBroswerBuy);
            $.getJSONP("http://simigoods.360buy.com/ThreeCCombineBuying/CombineBuyJsonData.aspx?ip=" + getCookie("ipLocation") + "&wids=" + pageConfig.product.skuid + "&callback=Recommend.cbCombineBuying", Recommend.cbCombineBuying);
            break;
        case 2:
            $.getJSONP("http://simigoods.360buy.com/Electronic/EBuyToBuy.aspx?ip=" + getCookie("ipLocation") + "&wids=" + pageConfig.product.skuid + "&callback=Recommend.cbCBuyBuy", Recommend.cbCBuyBuy);
            $.getJSONP("http://simigoods.360buy.com/Electronic/EBrowserBuy.aspx?ip=" + getCookie("ipLocation") + "&wids=" + pageConfig.product.skuid + "&callback=Recommend.cbBroswerBuy", Recommend.cbBroswerBuy);
            if (pageConfig.product.cat[0] == 1315) {
                $.getJSONP("http://simigoods.360buy.com/Pop/PopCombinebuyingColor.aspx?ip=" + getCookie("ipLocation") + "&wids=" + pageConfig.product.skuid + "&callback=Recommend.cbCombineBuyingPop")
            } else {
                $.getJSONP("http://simigoods.360buy.com/Electronic/GCombineBuyJsonData.aspx?ip=" + getCookie("ipLocation") + "&wids=" + pageConfig.product.skuid + "&callback=Recommend.cbCombineBuying")
            }
            break;
        default:

        }
    },
    cbRecoFittings: function(a) {
        if ( !! a == true && a.fittings.length > 0) {
            $("#recommend").show();
            $("#tab-reco").attr("loaded", "true").html('<ul class="stab lh">' + recoFittings_TPL.tabs.process(a) + '</ul><div class="stabcon">' + recoFittings_TPL.cons.process(a) + "</div>");
            if ($("#tab-hot").attr("loaded") == "true") {
                $("#recommend .tab li a").eq(0).text("\u63a8\u8350\u914d\u4ef6");
                $("#recommend .tab li").eq(0).show()
            } else {
                $("#recommend .tab li a").eq(0).text("\u63a8\u8350\u914d\u4ef6");
                $("#recommend .tab li").eq(0).show().trigger("click")
            }
            removeLastAdd()
        }
    },
    cbCombineBuying: function(a) {
        if ( !! a.master.wid == true && a.recoList.length > 0) {
            $("#recommend").show();
            $("#tab-hot").attr("loaded", "true").html(suitRecommend_TPL.process(a));
            log(mdPerfix + "3", "Show");
            if ($("#tab-reco").attr("loaded") == "true") {
                $("#recommend .tab li").eq(1).show()
            } else {
                $("#recommend .tab li").eq(1).show().trigger("click")
            }
        }
        removeLastAdd()
    },
    cbCombineBuyingPop: function(c) {
        var d = {
            set: function(o, n) {
                if ($("#p-selected-" + o).length < 1) {
                    $("#pop-list-" + o).find(".p-scroll").hide().before('<div id="p-selected-' + o + '" class="p-selected">\u5df2\u9009\u62e9\uff1a' + n.split("|")[1] + "\uff0c" + n.split("|")[2] + ' <a data-ind="' + o + '" class="p-modify" href="#none">\u4fee\u6539</a></div>')
                } else {
                    $("#p-selected-" + o).html("\u5df2\u9009\u62e9\uff1a" + n.split("|")[1] + "\uff0c" + n.split("|")[2] + ' <a data-ind="' + o + '" class="p-modify" href="#none">\u4fee\u6539</a>')
                }
                $(".p-modify").unbind("click").bind("click", 
                function() {
                    i(parseInt(this.getAttribute("data-ind")), n)
                });
                $("#p-selected-" + o).attr("data-res", n)
            }
        };
        var a = {
            set: function(o) {
                var n = o || $(".pop-list");
                n.find(".p-scroll").each(function() {
                    var r = $(this),
                    q = r.prev(".p-img").find("img"),
                    s = r.find(".p-scroll-wrap img"),
                    p = r.find(".p-scroll-wrap a");
                    s.bind("mouseover", 
                    function() {
                        var t = $(this).attr("src");
                        p.removeClass("curr");
                        $(this).parent().addClass("curr");
                        q.attr("src", t.replace("/n5/", "/n2/"))
                    })
                })
            },
            del: function(p) {
                var o = p || $(".pop-list"),
                n = null;
                o.find(".p-scroll").each(function() {
                    $(this).find(".p-scroll-wrap img").unbind("mouseover")
                })
            }
        };
        var b = function(p, r) {
            var n = $("#p-scroll .p-scroll-wrap a"),
            o = $("#pop-list-" + p).find(".p-img img"),
            q = $("#pop-list-" + p).attr("data-sku");
            n.unbind("click").bind("click", 
            function() {
                var t = $(this),
                s = $(this).find("img").attr("src"),
                u = $(this).attr("title");
                l.get(q, u, p, null);
                n.removeClass("curr");
                $(this).addClass("curr");
                o.attr("src", s.replace("/n5/", "/n2/"));
                if ($("#pop-list-" + p).attr("data-res")) {
                    $("#pop-list-" + p).removeAttr("data-res")
                }
            });
            if (r) {
                n.each(function() {
                    if ($(this).attr("title") == r) {
                        $(this).trigger("click")
                    }
                })
            }
        };
        var m = {
            show: function(n, o) {
                $("#pop-box").css({
                    left: n * $(".pop-list").outerWidth() - $("#stabcon_pop .suits").scrollLeft(),
                    visibility: "visible"
                });
                if (typeof o == "function") {
                    o(n)
                }
            },
            hide: function() {
                $("#pop-box").css("visibility", "hidden");
                return this
            },
            clear: function() {
                var n = $("#pop-box"),
                o = $("#p-scroll,#p-size,#p-tips");
                o.html("");
                this.isClear = true;
                if (a) {
                    a.set()
                }
                return this
            }
        };
        var l = {
            sClick: function(q, o) {
                var p = $("#p-size a"),
                n = $("#pop-list-" + q),
                r = this;
                p.click(function() {
                    var t = $(this).attr("data-resku"),
                    u = $("#p-scroll .p-scroll-wrap .curr").attr("title"),
                    s = $(this).attr("title"),
                    w = $(this).attr("wmaprice"),
                    v = $(this).attr("wmeprice");
                    p.removeClass("selected");
                    $(this).addClass("selected");
                    r.clearTips("#p-noselected");
                    n.attr("data-res", [t, u, s, w, v].join("|"))
                });
                if (o) {
                    $("#p-size a").each(function() {
                        if ($(this).attr("title") == o) {
                            $(this).trigger("click")
                        }
                    })
                }
            },
            noSize: function(o, n) {
                $("#p-size").addClass("nosizes").html("");
                $("#pop-list-" + o).attr("data-res", [n.Subcodesku[0].Sku, $("#pop-box .curr").attr("title"), "\u65e0\u5c3a\u7801", n.Subcodesku[0].WMeprice, n.Subcodesku[0].WMaprice].join("|"))
            },
            get: function(t, n, r, o, p) {
                var s = this,
                q = {
                    ip: getCookie("ipLocation"),
                    sku: t,
                    color: encodeURI(n)
                };
                if ($("#pop-list-" + r).find(".no-scroll").length > 0) {
                    q = {
                        ip: getCookie("ipLocation"),
                        sku: t
                    }
                }
                $.ajax({
                    url: "http://simigoods.360buy.com/Pop/CodeServiceSize.aspx?",
                    dataType: "jsonp",
                    data: q,
                    success: function(u) {
                        if (u.Subcodesku.length < 1) {
                            s.setTips('<p id="p-nostock">\u8be5\u5546\u54c1\u5df2\u4e0b\u67b6\u6216\u65e0\u8d27</p>');
                            $("#p-size").html("")
                        } else {
                            if (u.Subcodesku.length == 1 && !!u.Subcodesku[0].sizename == false || u.Subcodesku[0].sizename == "\u65e0") {
                                s.noSize(r, u);
                                s.clearTips("#p-nostock")
                            } else {
                                s.set(u, t, r, o);
                                s.clearTips("#p-nostock")
                            }
                        }
                        if (typeof p == "function") {
                            p(u)
                        }
                    }
                })
            },
            set: function(q, r, p, o) {
                var n = '{for list in Subcodesku}<a href="#none" data-resku="${list.Sku}" wmaprice="${list.WMaprice}" wmeprice="${list.WMeprice}" title="${list.sizename}">${list.sizename}</a>{/for}';
                $("#p-size").html(n.process(q));
                this.sClick(p, o)
            },
            setTips: function(n) {
                if ($("#p-tips").html() == "") {
                    $("#p-tips").html(n)
                }
            },
            clearTips: function(n) {
                $("#pop-box").find(n).remove()
            }
        };
        var f = {
            get: function(n) {
                $("#p-scroll").append($("#pop-list-" + n).find(".p-scroll").clone().show());
                this.set(n)
            },
            set: function(n) {
                j(true)
            }
        };
        var h = function(n) {
            var n = n;
            $("#p-selected-ok").unbind("click").bind("click", 
            function() {
                var q = $("#pop-box"),
                p = q.find("#p-scroll .curr").attr("title");
                if ($("#pop-box .curr").length < 1) {
                    l.setTips('<p id="p-noselected">\u8bf7\u9009\u62e9\u989c\u8272</p>')
                } else {
                    if ($("#pop-box .selected").length < 1 && !$("#p-size").hasClass("nosizes")) {
                        l.setTips('<p id="p-noselected">\u8bf7\u9009\u62e9\u5c3a\u7801</p>')
                    } else {
                        d.set(n, $("#pop-list-" + n).attr("data-res"));
                        m.hide().clear();
                        var r = $("#pop-list-" + n),
                        t = r.attr("data-res").split("|"),
                        u = t[0],
                        v = t[3],
                        s = t[4],
                        w = r.find(".p-price img"),
                        o = w.attr("src");
                        w.attr("src", o.replace(/\d{10}/, u));
                        r.find("input:checkbox").attr({
                            skuid: u,
                            wmaprice: v,
                            wmeprice: s,
                            checked: true
                        });
                        calculatePrice($("#pop-list-" + n).find("input:checkbox")[0], "#tab-hot")
                    }
                }
            });
            $("#p-selected-cancel").click(function() {
                m.hide().clear();
                if ($("#p-selected-" + n).length < 1) {
                    $("#pop-list-" + n).find("input:checkbox").attr("checked", false)
                }
            })
        };
        function j(q) {
            if (q) {
                var o = $("#pop-box .p-scroll-wrap"),
                n = $("#pop-box .p-scroll-next"),
                p = $("#pop-box .p-scroll-prev");
                if (o.find("li").length > 4) {
                    o.imgScroll({
                        showControl: true,
                        width: 30,
                        height: 30,
                        visible: 4,
                        step: 1,
                        prev: p,
                        next: n
                    })
                }
            } else {
                $(".p-scroll").each(function() {
                    var r = $(this).find(".p-scroll-wrap"),
                    s = $(this).find(".p-scroll-next"),
                    t = $(this).find(".p-scroll-prev");
                    if (r.find("li").length > 4) {
                        r.imgScroll({
                            showControl: true,
                            width: 30,
                            height: 30,
                            visible: 4,
                            step: 1,
                            prev: t,
                            next: s
                        })
                    }
                })
            }
        }
        if (c.master.wid && c.recoList.length > 0) {
            var g = '<div id="stabcon_pop" class="stabcon"><div class="master"> <s></s> <div class="p-img"> <a href="http://www.360buy.com/product/${master.wid}.html" target="_blank"><img src="${pageConfig.FN_GetImageDomain(master.wid)}n2/${master.imgurl}" height="160" width="160"></a> </div> <div class="p-name"> <a href="http://www.360buy.com/product/${master.wid}.html" target="_blank">${master.name}</a> </div> <div class="p-price none"><input type="checkbox" id="inp_${master.wid}" onclick="return false;" onchange="return false" wmaprice="${master.wmaprice}" wmeprice="${master.wmeprice}" skuid="${master.wid}" checked/> ${master.wmeprice}</div></div><div class="pop-wrap"><div id="pop-box" class=""> <div id="p-scroll"></div> <div id="p-size"></div> <div id="p-tips"></div> <div id="p-size-btn"> <a href="#none" id="p-selected-ok">\u786e\u5b9a</a><a id="p-selected-cancel" href="#none">\u53d6\u6d88</a> </div></div><div class="suits" style="overflow-x:{if parseInt(recoList.length)>(pageConfig.wideVersion&&pageConfig.compatible ? 3:2)}scroll;{else}hidden;{/if}"> <ul class="lh" style="width:${parseInt(recoList.length)*200+20}px"> {for item in recoList} <li class="pop-list {if parseInt(item_index)+1==parseInt(recoList.length)} last-item{/if}" id="pop-list-${item_index}" data-sku="${item.wid}" data-ind="${item_index}" onclick="reClick(\'' + mdPerfix + '3\', \'${master.wid}\', \'${item.wid}#${item.wmeprice}\', \'${item_index}\');"> <s></s> <div class="p-img"> <a href="http://www.360buy.com/product/${item.wid}.html" target="_blank"><img src="${pageConfig.FN_GetImageDomain(item.wid)}n2/${item.imgurl}" alt="" height="160" width="160"></a> </div> <div class="p-scroll"> <a href="javascript:;" class="p-scroll-btn p-scroll-prev">&lt;</a> <div class="p-scroll-wrap"> <ul> {for color in item.colorlist} <li><a href="javascript:;" class="{if parseInt(color_index)==0}curr{/if}" data-sku="${item.wid}" title="${color.colorname}"><img data-img="1" width="25" height="25" alt="" src="${pageConfig.FN_GetImageDomain(item.wid)}n5/${color.imgurl}" data-img="1"></a></li> {forelse} <li><a href="javascript:;" class="no-scroll curr" title="\u65e0"><img data-img="1" width="25" height="25" alt="" src="${pageConfig.FN_GetImageDomain(item.wid)}n5/${item.imgurl}"></a></li> {/for} </ul> </div> <a href="javascript:;" class="p-scroll-btn p-scroll-next">&gt;</a> </div> <div class="p-name"> <a href="http://www.360buy.com/product/${item.wid}.html" target="_blank">${item.name}</a> </div> <div class="choose"> <input type="checkbox" data-nocolor="${item.colorlist.length<1}" id="inp_${item.wid}" class="{if parseInt(item.colorlist.length)==0}no-pop-win{/if}" wmaprice="${item.wmaprice}" wmeprice="${item.wmeprice}" skuid="${item.wid}" /> <label for="inp_${item.wid}" class="p-price"> <strong><img src="http://price.360buyimg.com/gp${item.wid},1.png" onerror="this.src=\'http://misc.360buyimg.com/lib/skin/e/i/error-3.gif\'" /></strong> </label> </div> </li> {/for} </ul></div></div><div class="infos" onclick="{for item in recoList}reClick(\'' + mdPerfix + "3', '${master.wid}', '${item.wid}#${item.wmeprice}', '${item_index}');{/for}\"> <s></s> <div class=\"p-name\"> <a onclick=\"log('" + mbPerfix + 'PopularBuy\',\'click\')" href="http://jd2008.360buy.com/purchase/OrderFlowService.aspx?action=AddSkus&wids=${master.wid}">\u8d2d\u4e70\u4eba\u6c14\u7ec4\u5408</a> </div> <div class="p-price">\u603b\u4eac\u4e1c\u4ef7\uff1a <strong class="res-jdprice">\uffe5 ${master.wmeprice}</strong> </div> <div class="p-saving">\u603b\u53c2\u8003\u4ef7\uff1a <del class="res-totalprice">\uffe5 ${master.wmaprice}</del> </div> <div class="btns"> <a onclick="log(\'' + mbPerfix + 'PopularBuy\',\'click\')" class="btn-buy" href="http://jd2008.360buy.com/purchase/OrderFlowService.aspx?action=AddSkus&wids=${master.wid}">\u8d2d\u4e70\u7ec4\u5408</a> </div></div><div class="clb"></div></div>';
            $("#recommend").show();
            $("#tab-hot").attr("loaded", "true").html(g.process(c));
            pageConfig.FN_ImgError($("#tab-hot")[0]);
            $("#stabcon_pop .suits").scroll(function() {
                if ($("#pop-box").css("visibility") == "visible") {
                    var n = parseInt($("#pop-box").attr("data-ind"));
                    $("#pop-list-" + n).find("input:checkbox").attr("checked", false);
                    m.clear().hide()
                }
            });
            a.set();
            j(false);
            function i(q, n) {
                var q = q;
                if (n) {
                    var o = n.split("|"),
                    p = o[1],
                    r = o[2]
                }
                if ($("#pop-box").length > 0) {
                    $("#pop-box").attr("data-ind", q)
                }
                m.clear().show(q, 
                function() {
                    var s = $("#pop-list-" + q),
                    t = s.attr("data-sku"),
                    u = s.find("a.curr").attr("title");
                    h(q);
                    a.del();
                    f.get(q);
                    b(q, p || null, c);
                    l.get(t, p || u, q, r)
                })
            }
            $("#stabcon_pop ul input:checkbox").click(function() {
                var q = $(this),
                n = q.attr("data-nocolor"),
                p = q.parents(".pop-list"),
                r = p.attr("data-ind");
                if ($("#pop-box").css("visibility") == "visible") {
                    var o = parseInt($("#pop-box").attr("data-ind"));
                    $("#pop-list-" + o).find("input:checkbox").attr("checked", false);
                    m.clear().hide()
                }
                if (n == "true") {
                    calculatePrice(q[0], "#tab-hot")
                } else {
                    if ($(this).attr("checked") == true) {
                        i(r)
                    } else {
                        if ($("#p-selected-" + r)) {
                            $("#p-selected-" + r).remove();
                            $("#pop-list-" + r).find(".p-scroll").show();
                            a.set($("#pop-list-" + r))
                        }
                        calculatePrice(q[0], "#tab-hot")
                    }
                }
            });
            log(mdPerfix + "3", "Show");
            if ($("#tab-reco").attr("loaded") == "true") {
                $("#recommend .tab li").eq(1).show()
            } else {
                $("#recommend .tab li").eq(1).show().trigger("click")
            }
        }
    },
    cbCBuyBuy: function(c) {
        var a = $("#buy-buy"),
        d = [];
        if (c !== null && c.length > 0) {
            log(mdPerfix + "2", "Show");
            for (var b = 0; b < c.length; b++) {
                d.push('<li class="fore' + (b + 1) + '" onclick="reClick(\'' + mdPerfix + "2'," + pageConfig.product.skuid + ",'" + c[b].Wid + "#" + c[b].WMeprice + "'," + b + ');">' + listBuyBuy_TPL.process(c[b]) + "</li>")
            }
            a.show().find("ul").html(d.join(""))
        }
    },
    cbBroswerBroswer: function(c) {
        var a = $("#related-viewed"),
        d = [];
        if (c !== null) {
            log("R1", "Show");
            for (var b = 0; b < c.length; b++) {
                if (this.type == 1) {
                    d.push((listBrosweBroswe_TPL.process(c[b])).replace("[#]", b))
                } else {
                    d.push((listBrosweBroswe_TPL_RB.process(c[b])).replace("[#]", b))
                }
            }
            a.show().find("ul").addClass("lh").html(d.join(""))
        }
    },
    cbBroswerBuy: function(c) {
        var a = $("#view-buy"),
        d = [];
        if (c !== null && c.length > 0) {
            a.show();
            log(mdPerfix + "1", "Show");
            for (var b = 0; b < c.length; b++) {
                d.push('<li class="fore' + (b + 1) + '" onclick="reClick(\'' + mdPerfix + "1'," + pageConfig.product.skuid + ",'" + c[b].Wid + "#" + c[b].WMeprice + "'," + b + ');">' + listBrosweBuy_TPL.process(c[b]) + "</li>")
            }
            a.show().find("ul").html(d.join("")).after('<div class="extra"><a target="_blank" title="\u67e5\u770b\u66f4\u591a" href="http://prs.360buy.com/PersonalSimiRec.aspx?ShowType=1&wid=' + pageConfig.product.skuid + '">\u67e5\u770b\u66f4\u591a\u63a8\u8350</a></div>')
        }
    }
};
function getSuitInfoService(a) {
    if (a.packResponseList !== null && a.packResponseList.length > 0) {
        var b = [];
        $("#favorable-suit").show();
        $("#favorable-suit .mc").html(suit_TPL.tabs.process(a) + suit_TPL.cons.process(a));
        $("#favorable-suit .mc").Jtab({
            event: "click",
            compatible: true,
            currClass: "scurr"
        },
        function(c, f, d) {
            var m = f.attr("packprice"),
            i = f.attr("packlistprice"),
            j = f.attr("discount"),
            l = f.find(".fitting-price"),
            g = f.find(".orign-price"),
            h = f.find(".fitting-saving");
            if (m !== "" && i !== "") {
                l.html(parseFloat(m).toFixed(2));
                g.html(parseFloat(i).toFixed(2));
                h.html(parseFloat(j).toFixed(2))
            }
        });
        removeLastAdd()
    }
}
jdRecent.element = $("#recent-view ul");
jdRecent.init();
$.extend(jdModelCallCenter, {
    usefulComment: function(a) {
        $.login({
            modal: true,
            complete: function(b) {
                if (b.IsAuthenticated) {
                    var c = a.parent().attr("id");
                    var d = a.attr("name") == "agree";
                    if (a.attr("enabled") != "true") {
                        $.ajax({
                            type: "GET",
                            url: "http://comm.360buy.com/index.php",
                            data: {
                                mod: "ProductComment",
                                action: "saveCommentUserfulVote",
                                commentId: c,
                                isUseful: d
                            },
                            dataType: "jsonp",
                            success: function(g) {
                                a.attr("enabled", "true");
                                if (1 == g.status) {
                                    var f = parseInt(a.attr("title")) + 1;
                                    a.attr("title", f);
                                    if (d) {
                                        a.html("\u6709\u7528(" + f + ")")
                                    } else {
                                        a.html("\u6ca1\u7528(" + f + ")")
                                    }
                                }
                            }
                        })
                    }
                }
            }
        });
        mark(pageConfig.product.skuid, 5)
    }
});
$(".btn-agree,.btn-oppose").livequery("click", 
function() {
    var a = $(this);
    $.extend(jdModelCallCenter.settings, {
        object: a,
        fn: function() {
            jdModelCallCenter.usefulComment(this.object)
        }
    });
    jdModelCallCenter.settings.fn()
});
function GetSnsAvatar() {
    var c = "";
    var b = $("#comment").children("div:visible").find("div.u-icon img");
    if (b.length > 0) {
        for (var a = 0; a < b.length; a++) {
            c += b[a].attributes.upin.nodeValue + ","
        }
        c = c.substring(0, c.lastIndexOf(","));
        $.getJSONP("http://i.360buy.com/user/upload/img/show/" + encodeURI(escape(c)) + ".html?callback=GetAvatarCallback", GetAvatarCallback)
    }
}
function GetAvatarCallback(b) {
    if (b) {
        for (var a = 0; a < b.info.length; a++) {
            if (b.info[a].imgurl.indexOf("no-img") <= 0) {
                $("#comment div:visible a:contains('" + b.info[a].pin + "')").parent().prev().find("img").attr("src", b.info[a].imgurl + "_sma_.jpg")
            }
        }
    }
}
var consultationServiceUrl = "http://club.360buy.com/newconsultationservice.aspx?callback=?";
$("#btnReferSearch").livequery("click", 
function() {
    Consult.search(pageConfig.product.skuid, $("#txbReferSearch").val(), 1, 6)
});
$("#txbReferSearch").livequery("keydown", 
function(a) {
    if (a.keyCode == 13) {
        Consult.search(pageConfig.product.skuid, $("#txbReferSearch").val(), 1, 6)
    }
});
$("#backConsultations").livequery("click", 
function() {
    $("#consult .tab li.curr").trigger("click")
});
$("#consultation").livequery("click", 
function() {
    $.login({
        returnUrl: $(this).attr("name"),
        complete: function(a) {
            if (a.IsAuthenticated) {
                location.href = this.returnUrl
            }
        }
    })
});
$("#login").livequery("click", 
function() {
    $.login()
});
$(".btn-pleased,.btn-unpleased").livequery("click", 
function() {
    var a = $(this);
    $.login({
        complete: function(b) {
            if (b.IsAuthenticated != null && b.IsAuthenticated) {
                var d = parseInt($.query.get("id"));
                if (isNaN(d) || d == 0) {
                    var b = location.href.match(/(\d+)(.html)/);
                    if (b != null) {
                        d = parseInt(b[1])
                    }
                }
                var c = $(a).parent().attr("id");
                var f = parseInt($(a).attr("name"));
                if (d > 0) {
                    $.getJSON(consultationServiceUrl, {
                        method: "VoteForConsultation",
                        productId: d,
                        consultationId: c,
                        score: f
                    },
                    function(g) {
                        if (g.Result) {
                            $(a).text("\u5df2\u6295\u7968");
                            $(a).next("span").text(parseInt($(a).next("span").text()) + 1)
                        } else {
                            $(a).text("\u5df2\u6295\u7968")
                        }
                    })
                }
            }
        }
    });
    mark(location.href.match(/(\d+).html/)[1], 5)
});
$(".btn-comment").livequery("click", 
function() {
    var a = $(this).attr("href");
    $.extend(jdModelCallCenter.settings, {
        clstag1: 0,
        clstag2: 0,
        fn: function() {
            jdModelCallCenter.autoLocation(a)
        }
    });
    jdModelCallCenter.settings.fn();
    return false
});
var CommentList = {
    getData: function(b, c, d) {
        var f = this,
        b = b || 0,
        c = c || 0,
        d = d,
        a = "http://club.360buy.com/clubservice/newproductcomment-" + pageConfig.product.skuid + "-" + b + "-" + c + ".html";
        if (b == 1) {
            b = 3
        } else {
            if (b == 3) {
                b = 1
            }
        }
        window.fetchJSON_CommentList = function(g) {
            if (!$("#comment .mc").hasClass("loaded")) {
                if (parseInt(g.CommentSummary.CommentCount) !== 0) {
                    $("#comment").show();
                    $("#comment .mc").addClass("loaded").html(commentRate_TPL.process(g))
                } else {
                    $("#comment").attr("nodata", "true").hide()
                }
                $("#comments-list .tab li").each(function() {
                    var i = $("#comments-list .tab li").index($(this)),
                    h = $(this).find("em");
                    switch (i) {
                    case 0:
                        h.html("(" + g.CommentSummary.CommentCount + ")");
                        break;
                    case 1:
                        h.html("(" + g.CommentSummary.GoodCount + ")");
                        break;
                    case 2:
                        h.html("(" + g.CommentSummary.GeneralCount + ")");
                        break;
                    case 3:
                        h.html("(" + g.CommentSummary.PoorCount + ")");
                        break;
                    case 4:
                        h.html("(" + g.CommentSummary.ShowCount + ")");
                        break
                    }
                })
            }
            f.setItem(d, g, b, c)
        };
        $.getJSONP("http://club.360buy.com/clubservice/newproductcomment-" + pageConfig.product.skuid + "-" + b + "-" + c + ".html?callback=fetchJSON_CommentList")
    },
    setItem: function(f, d, a, c) {
        var i = this,
        b = f,
        a = a || 0,
        c = c || 0,
        h = f.attr("id"),
        g = "";
        f.html(commentList_TPL.process(d));
        switch (h) {
        case "comment-0":
            g = "CommentCount";
            break;
        case "comment-1":
            g = "GoodCount";
            break;
        case "comment-2":
            g = "GeneralCount";
            break;
        case "comment-3":
            g = "PoorCount";
            break;
        case "comment-4":
            g = "ShowCount";
            break;
        default:
            g = "CommentCount"
        }
        $("#commentsPage" + d.Score).pagination(d.CommentSummary[g], {
            items_per_page: 7,
            num_display_entries: 5,
            current_page: c,
            num_edge_entries: 2,
            link_to: "#comments-list",
            prev_text: "\u4e0a\u4e00\u9875",
            next_text: "\u4e0b\u4e00\u9875",
            ellipse_text: "...",
            prev_show_always: false,
            next_show_always: false,
            callback: function(j, l) {
                if (a == 1) {
                    a = 3
                } else {
                    if (a == 3) {
                        a = 1
                    }
                }
                i.getData(a, j, b)
            }
        })
    }
};
var Discuss = {
    getData: function(d, c) {
        var a = "http://club.360buy.com/clubservice/newcomment-",
        b = "",
        c = c;
        switch (d) {
        case 0:
            b = "Club";
            break;
        case 1:
            b = "Order";
            break;
        case 2:
            b = "User";
            break;
        case 3:
            b = "Question";
            break;
        case 4:
            b = "Friend"
        }
        window.fetchJSON_Discuss = function(f) {
            c.html(discuss_TPL.process(f))
        };
        $.getJSONP(a + b + "-" + pageConfig.product.skuid + ".html?callback=fetchJSON_Discuss")
    },
    setItem: function() {}
};
var Consult = {
    getData: function(c, b) {
        var a = "http://club.360buy.com/clubservice/newconsulation-" + pageConfig.product.skuid + "-" + (c + 1) + ".html";
        window.fetchJSON_Consult = function(d) {
            b.html(consult_TPL.process(d))
        };
        $.getJSONP("http://club.360buy.com/clubservice/newconsulation-" + pageConfig.product.skuid + "-" + (c + 1) + ".html?callback=fetchJSON_Consult")
    },
    setData: function(b, a) {},
    setExtraData: function(b, a) {
        $.jmsajax({
            url: "http://www.360buy.com/newsserver.asmx",
            method: "PayExplain",
            data: {
                id: "A-product-0" + (b - 3)
            },
            success: function(c) {
                if (c != null) {
                    a.html(c)
                }
            }
        })
    },
    search: function(f, b, d, a) {
        var c = "http://search.360buy.com/sayword?",
        d = d || 0,
        f = f || pageConfig.product.skuid,
        g = this;
        $.ajax({
            url: c,
            dataType: "jsonp",
            data: {
                wid: f,
                keyword: encodeURI(b),
                page: d,
                ps: 5
            },
            success: function(l) {
                var h = '<div class="clb"><div id="ReferPagenation" class="pagin fr none"></div></div>';
                if (l.length > 0) {
                    var j = (l[0].list.length <= 0 || l[0].total <= 0) ? "\uff0c\u8bd5\u8bd5\u66f4\u7b80\u77ed\u7684\u5173\u952e\u8bcd\u6216\u66f4\u6362\u5173\u952e\u8bcd": "";
                    var i = '<div id="consult-result" class="result clearfix"><div class="fl">\u5171\u641c\u7d22\u5230<strong>' + l[0].total + "</strong>\u6761\u76f8\u5173\u54a8\u8be2" + j + '\u3000<a id="backConsultations" href="#none">\u8fd4\u56de</a></div><div class="fr"><em>\u58f0\u660e\uff1a\u4ee5\u4e0b\u56de\u590d\u4ec5\u5bf9\u63d0\u95ee\u80053\u5929\u5185\u6709\u6548\uff0c\u5176\u4ed6\u7f51\u53cb\u4ec5\u4f9b\u53c2\u8003\uff01</em></div></div>';
                    $("#consult .tabcon:visible").html(i + "" + consult_search_TPL.process(l[0]) + "" + h);
                    if (l[0].list.length <= 0 || l[0].total <= 0) {
                        return false
                    }
                    $("#ReferPagenation").show().pagination(l[0].total, {
                        items_per_page: 5,
                        num_display_entries: 5,
                        current_page: d - 1,
                        num_edge_entries: 0,
                        link_to: "#consult",
                        prev_text: "\u4e0a\u4e00\u9875",
                        next_text: "\u4e0b\u4e00\u9875",
                        ellipse_text: "...",
                        prev_show_always: false,
                        next_show_always: false,
                        callback: function(m, n) {
                            g.search(pageConfig.product.skuid, $("#txbReferSearch").val(), m + 1, 6)
                        }
                    })
                }
            }
        })
    }
};
var ProductTrack = function(d, a, c) {
    this.sRecent = d;
    this.sGuess = a;
    this.isBook = c || false;
    var b = '#product-track .nothing{text-align:center;margin-top:100px;}#product-track .iloading{margin-top:100px;}#product-track .m2 h2{padding:0 8px;font:bold 14px/28px simsun;}#product-track .left .m2 .mt{height:28px;line-height:28px;background:url(http://misc.360buyimg.com/product/skin/2012/i/newicon20120718.png) 0 -287px repeat-x;border-right:0;border-bottom:1px solid #ccc;}#product-track .m2{border:1px solid #CCC;}#product-track .left{float:left;width:210px;margin:0;padding:0;}#product-track .right{float:right;margin:0;padding:0;}#product-track{margin-top:10px;}#product-track .right{width:780px;}#recent-view-track .mc ul{height:250px;overflow-y:auto;}#recent-view-track h2{float:left;font-size:14px;}#recent-view-track .extra{float:right;font-size:12px;margin-right:10px;}#recent-view-track ul{margin-top:-1px;padding:0 8px;}#recent-view-track li{overflow:hidden;border-top:1px dotted #DEDEDE;zoom:1;}#recent-view-track .p-img{float:left;margin-right:5px;width:50px;height:50px;overflow:hidden;}#recent-view-track .p-name{float:left;width:120px;height:3em;margin-top:5px;}#recent-view-track .p-price{float:left;width:120px;}#recent-view-track .no-track{margin:10px;height:230px;background:url(http://misc.360buyimg.com/product/skin/2012/i/foot.png) left bottom no-repeat;color:#999;}#recent-view-track .no-track p{margin-top:5px;line-height:1.5em;}#recent-view-track .no-track h4{font:18px "microsoft yahei";}#product-track #maybe-like{border-left:0;}#maybe-like .mt{height:28px;background:url(http://misc.360buyimg.com/product/skin/2012/i/newicon20120718.png) 0 -287px repeat-x;border-right:0;border-bottom:1px solid #ccc;}#maybe-like h2{font-size:14px;float:left;}#maybe-like .extra{float:right;font:12px/29px arial;margin-right:10px;}#maybe-like .extra span{font-family:arial;cursor:pointer;margin:5px 0 0 5px;display:inline-block;height:16px;line-height:16px;padding:0 4px;border-radius:10px;background:#999;color:#fff;*zoom:1;}#maybe-like .extra .curr{background:#d00;}#maybe-like .mc,#recent-view-track .mc{height:250px;overflow:hidden;position:relative;}#maybe-like .p-comm .star{margin-top:2px;}#product-track .star{background-image:url(http://misc.360buyimg.com/product/skin/2012/i/newicon20120718.png);background-repeat:no-repeat;}#maybe-like .mc li{width:133px;padding:10px 20px;text-align:center;}#maybe-like .mc .p-name{height:3em;}#maybe-like .p-price{height:16px;}#guess-scroll{margin-left:40px;}#maybe-like .disabled{cursor:default;}.guess-control{position:absolute;z-index:10;left:10px;top:70px;display:block;width:21px;height:107px;text-indent:-9999px;overflow:hidden;background:url(http://misc.360buyimg.com/product/skin/2012/i/scroll.png) 0 0 no-repeat;cursor:pointer;}#guess-backward{background-position:-21px 0;right:10px;left:auto;}#product-track .star{display:inline-block;width:75px;height:14px;}#product-track .sa5{background-position:-109px -239px;}#product-track .sa4{background-position:-124px -239px;}#product-track .sa3{background-position:-139px -239px;}#product-track .sa2{background-position:-154px -239px;}#product-track .sa1{background-position:-169px -239px;}#product-track .sa0{background-position:-184px -239px;}.root61 .right-extra{width:989px;}.root61 #maybe-like .mc li{width:144px;}.root61 #product-track .right{width:1000px;}';
    this.getStyleRules(b);
    $(this.sGuess).find("h2").html("\u6839\u636e\u6d4f\u89c8\u4e3a\u6211\u63a8\u8350")
};
ProductTrack.prototype = {
    hide: function() {
        $(this.sRecent).hide();
        $(this.sGuess).hide()
    },
    getStyleRules: function(d) {
        var f = document,
        c = f.getElementsByTagName("head"),
        b = f.createElement("style");
        b.setAttribute("type", "text/css");
        if (b.styleSheet) {
            b.styleSheet.cssText = d
        } else {
            var a = f.createTextNode(d);
            b.appendChild(a)
        }
        if (c.length) {
            c[0].appendChild(b)
        } else {
            f.documentElement.appendChild(b)
        }
    },
    getCommentData: function(a) {
        var b = this;
        $.ajax({
            url: "http://club.360buy.com/clubservice.aspx?method=GetCommentsCount&referenceIds=" + a,
            dataType: "jsonp",
            success: function(c) {
                b.setCommentData(c)
            }
        })
    },
    setCommentData: function(c) {
        var a = c.CommentsCount.length;
        for (var b = 0; b < a; b++) {
            $("#g" + c.CommentsCount[b].SkuId).find(".star").removeClass("sa5").addClass("sa" + c.CommentsCount[b].AverageScore);
            $("#g" + c.CommentsCount[b].SkuId).find(".p-comm a").html("(\u5df2\u6709" + c.CommentsCount[b].CommentCount + "\u4eba\u8bc4\u4ef7)")
        }
    },
    getData: function(a) {
        var a = a || "http://my.360buy.com/global/track.action?jsoncallback=?";
        _this = this;
        $.ajax({
            url: a,
            dataType: "json",
            success: function(b) {
                _this.setContent(b)
            },
            error: function() {
                _this.hide()
            }
        });
        return this
    },
    setContent: function(h, d, b) {
        var m = " onclick=\"clsClickLog('', '', '${list.wid}', 3, ${list_index}, 'rodGlobalHis');\"";
        var a = " onclick=\"clsClickLog('', '', '${list.wid}', 2, ${list_index}, 'rodGlobalTrack');\"";
        if (this.isBook) {
            m = " onclick=\"clsLog('${list.topNum}&HomeHis', '', '${list.wid}#${list.wMeprice}', ${list_index}, 'reWidsBookHis');\"";
            a = " onclick=\"clsLog('${list.topNum}&HomeTrack', '', '${list.wid}#${list.wMeprice}', ${list_index}, 'reWidsBookTrack');\""
        }
        var g = "<ul> {for list in history} <li" + m + '> <div class="p-img"> <a href="${list.productUrl}"><img src="${pageConfig.FN_GetImageDomain(list.wid)}n5/${list.imageUrl}" /></a> </div> <div class="p-name"> <a href="${list.productUrl}">${list.wName}</a> </div> <div class="p-price"> <img src="http://price.360buyimg.com/gp${list.wid},1.png" onerror="this.src=\'http://misc.360buyimg.com/lib/skin/e/i/error-3.gif\'" /> </div> </li> {/for} <li class="all-recent" style="text-align:right;padding:5px 0;"><a href="http://my.360buy.com/history/list.html" target="_blank" style="color:#005ea7;">\u5168\u90e8\u6d4f\u89c8\u5386\u53f2 <span style="font-family:simsun;">&gt;</span></a></li></ul>';
        var f = '<span class="guess-control" id="guess-forward">&lt;</span><span class="guess-control" id="guess-backward">&gt;</span><div id="guess-scroll"><ul class="lh">{for list in guessyou}<li' + a + ' id="g${list.wid}"> <div class="p-img"> <a target="_blank" title="${list.wName}" href="${list.productUrl}"><img height="130" width="130" alt="${list.wName}" src="${pageConfig.FN_GetImageDomain(list.wid)}n3/${list.imageUrl}"></a> </div> <div class="p-name"> <a target="_blank" title="${list.wName}" href="${list.productUrl}">${list.wName}</a> </div> <div class="p-comm"> <span class="star sa5"></span><br/> <a target="_blank" href="http://club.360buy.com/review/${list.wid}-1-1.html">(\u5df2\u67090\u4eba\u8bc4\u4ef7)</a> </div> <div class="p-price"> <img src="http://price.360buyimg.com/gp${list.wid},1.png" onerror="this.src=\'http://misc.360buyimg.com/lib/skin/e/i/error-3.gif\'" /> </div></li>{/for}</ul></div>';
        var j = d || g,
        l = b || f;
        if (h.history !== null && h.history.length > 0) {
            $(this.sRecent).find(".mc").html(j.process(h));
            $(this.sRecent).find(".mt").append('<div class="extra"><a href="http://my.360buy.com/history/list.html" target="_blank">\u66f4\u591a</a></div>');
            if (this.isBook) {
                log("BOOK&HomeHis", "Show")
            } else {
                clsPVAndShowLog("", "", 3, "s")
            }
        } else {
            $(this.sGuess).find("h2").html("\u672c\u5468\u70ed\u9500");
            $(this.sRecent).find(".mc").html('<div class="no-track"><h4>\u60a8\u8fd8\u672a\u5728\u4eac\u4e1c\u7559\u4e0b\u8db3\u8ff9</h4><p>\u5728\u60a8\u7684\u8d2d\u7269\u65c5\u7a0b\u4e2d\uff0c\u60a8\u53ef\u4ee5\u968f\u65f6\u901a\u8fc7\u8fd9\u91cc\u67e5\u770b\u60a8\u4e4b\u524d\u7684\u6d4f\u89c8\u8bb0\u5f55\uff0c\u4ee5\u4fbf\u5feb\u6377\u8fd4\u56de\u60a8\u66fe\u7ecf\u611f\u5174\u8da3\u7684\u9875\u9762\u3002</p></div>')
        }
        if (h.guessyou !== null && h.guessyou.length > 0) {
            var c = [];
            $(this.sGuess).find(".mc").html(f.process(h));
            $(this.sGuess).find(".mt .extra").html('<a href="http://my.360buy.com/personal/guess.html" target="_blank">\u66f4\u591a\u63a8\u8350</a>');
            var i = pageConfig.wideVersion && !!pageConfig.compatible ? 5: 4;
            $("#guess-scroll").imgScroll({
                visible: i,
                step: i,
                prev: "#guess-forward",
                next: "#guess-backward"
            });
            if (this.isBook) {
                log("BOOK&HomeTrack", "Show")
            } else {
                clsPVAndShowLog("", "", 2, "s")
            }
            var n = [];
            $("#guess-scroll ul li").each(function() {
                n.push($(this).attr("id"))
            });
            this.getCommentData(n.join(",").replace(/g/g, ""))
        } else {
            $(this.sGuess).find(".mc").html('<div class="nothing">\u6682\u65e0\u63a8\u8350</div>')
        }
    }
};
var Repository = {
    init: function() {
        this.getKeywords();
        this.content = $(".detail-content").eq(0);
        this.tab = $("#product-detail .tab li").eq(5);
        this.tabCon = $("#product-detail-6");
        this.tabCon.html('<div class="iloading">\u6b63\u5728\u52a0\u8f7d\u4e2d\uff0c\u8bf7\u7a0d\u5019...</div>');
        if (this.tab.html() == "") {
            this.tab.html("\u5b9e\u7528\u6307\u5357")
        }
    },
    setKeywords: function(b) {
        var c = this;
        if (b !== null && b.length > 0) {
            for (var a = 0; a < b.length; a++) {
                this.setData(b[a], a, (a + 1 == b.length))
            }
        }
    },
    getKeywords: function() {
        var a = this;
        $.ajax({
            url: "http://wiki.360buy.com/product/" + pageConfig.product.skuid + "/keywords.html",
            dataType: "jsonp",
            success: function(b) {
                a.setKeywords(b)
            }
        })
    },
    setData: function(d, h, l) {
        var i = d.keyword,
        g = this.content.html(),
        b = '<dl><dt>${keyword}</dt> <dd>${description}</dd></dl><div class="wiki-more"><a href="${href}" target="_blank">\u67e5\u770b\u8be6\u7ec6\u4ecb\u7ecd</a></div>';
        var c = '<abbr class="word-wiki"><strong style="font:bold 14px arial;color:#005EA7">' + i + '</strong><div class="wiki-arrow none">\u25c7</div><div class="word-wiki-detail none"><div class="wiki-inner">' + b.process(d) + "</div></div></abbr>";
        this.content.html(g.replace(new RegExp(i), c));
        $("img[data-lazyload]").Jlazyload({
            type: "image",
            placeholderClass: "err-product"
        });
        if ( !! $(".word-wiki").eq(h).offset()) {
            var f = $("#product-detail").offset().left,
            a = $("#product-detail").width(),
            j = $(".word-wiki").eq(h).offset().left;
            if ((j - f) > a / 2) {
                $(".word-wiki-detail").eq(h).css("left", -400)
            }
        }
        if (l) {
            $(".word-wiki").hover(function() {
                $(this).addClass("actived");
                $(this).find(".wiki-arrow,.word-wiki-detail").show()
            },
            function() {
                $(this).removeClass("actived");
                $(this).find(".wiki-arrow,.word-wiki-detail").hide()
            })
        }
    },
    getPracticalGuide: function() {
        var a = this;
        $.ajax({
            url: "http://wiki.360buy.com/product/" + pageConfig.product.skuid + "/guide.html",
            dataType: "jsonp",
            success: function(b) {
                if (b !== null && b.length > 0) {
                    a.setPracticalGuide(b)
                } else {
                    a.tabCon.html('<div class="tc p10">\u8be5\u5546\u54c1\u7684\u5b9e\u7528\u6307\u5357\uff0c\u7a0d\u540e\u652f\u6301\u3002</div>')
                }
            }
        })
    },
    setPracticalGuide: function(c) {
        var a = {};
        a.resList = c;
        var b = ' <div id="practical-guide" class="item-detail" data-widget="tabs"> <ul class="tab-sub"> {for item in resList} <li data-widget="tab-item" class="fore{if item_index==0} curr{/if}">${item.groupName}</li> {/for} </ul> {for item in resList} <ul data-widget="tab-content" class="tabcon-sub{if item_index!=0} hide{/if}"> {for list in item.pgList} <li>\u00b7<span>[${item.groupName}]</span><a href="${list.url}" target="_blank">${list.name}</a></li> {/for} </ul> {/for}</div>';
        this.tabCon.html(b.process(a));
        $("#practical-guide").Jtab({
            event: "click",
            compatible: true
        })
    }
}; (function() {
    var g = function() {
        var b = "";
        try {
            b = window.top.document.referrer
        } catch(a) {
            if (window.parent) {
                try {
                    b = window.parent.document.referrer
                } catch(c) {
                    b = ""
                }
            }
        }
        if (b === "") {
            b = document.referrer
        }
        return b
    };
    JDS = window.JDS || {};
    JDS.strpos = function(c, b, a) {
        var h = (c + "").indexOf(b, (a || 0));
        return h === -1 ? false: h
    };
    JDS.uri = function(a) {
        this.components = {};
        this.options = {
            strictMode: false,
            key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
            q: {
                name: "queryKey",
                parser: /(?:^|&)([^&=]*)=?([^&]*)/g
            },
            parser: {
                strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
            }
        };
        if (a) {
            this.components = this.parseUri(a)
        }
    };
    JDS.uri.prototype = {
        parseUri: function(a) {
            var b = this.options;
            var j = b.parser[b.strictMode ? "strict": "loose"].exec(a);
            var c = {};
            var i = 14;
            while (i--) {
                c[b.key[i]] = j[i] || ""
            }
            c[b.q.name] = {};
            c[b.key[12]].replace(b.q.parser, 
            function(l, m, h) {
                if (m) {
                    c[b.q.name][m] = h
                }
            });
            return c
        },
        getHost: function() {
            if (this.components.hasOwnProperty("host")) {
                return this.components.host
            }
        },
        getQueryParam: function(a) {
            if (this.components.hasOwnProperty("queryKey") && this.components.queryKey.hasOwnProperty(a)) {
                return this.components.queryKey[a]
            }
        },
        isQueryParam: function(a) {
            if (this.components.hasOwnProperty("queryKey") && this.components.queryKey.hasOwnProperty(a)) {
                return true
            } else {
                return false
            }
        }
    };
    var f = [{
        d: "baidu",
        q: "wd"
    },
    {
        d: "google",
        q: "q"
    },
    {
        d: "images.google",
        q: "q"
    },
    {
        d: "images.search.yahoo.com",
        q: "p"
    },
    {
        d: "sogou",
        q: "query"
    },
    {
        d: "soso",
        q: "w"
    },
    {
        d: "bing",
        q: "q"
    },
    {
        d: "youdao",
        q: "q"
    },
    {
        d: "114so",
        q: "kw"
    },
    {
        d: "zhongsou",
        q: "w"
    },
    {
        d: "yisou",
        q: "q"
    },
    {
        d: "lycos",
        q: "query"
    },
    {
        d: "lycos",
        q: "word"
    },
    {
        d: "yahoo",
        q: "q"
    },
    {
        d: "yahoo",
        q: "p"
    },
    {
        d: "search",
        q: "q"
    },
    {
        d: "live",
        q: "q"
    },
    {
        d: "aol",
        q: "query"
    },
    {
        d: "aol",
        q: "encquery"
    },
    {
        d: "aol",
        q: "q"
    },
    {
        d: "ask",
        q: "q"
    },
    {
        d: "cnn",
        q: "query"
    },
    {
        d: "teoma",
        q: "q"
    },
    {
        d: "yandex",
        q: "text"
    }];
    var d = function(b) {
        for (var i = 0, n = f.length; i < n; i++) {
            var a = f[i].d;
            var m = f[i].q;
            var c = b.getHost();
            var l = b.getQueryParam(m);
            if (!JDS.strpos(c, "360buy") && JDS.strpos(c, a) && b.isQueryParam(m)) {
                return {
                    d: a,
                    q: m,
                    k: l
                }
            }
        }
    };
    window.jdSref = g();
    window.jdSuri = new JDS.uri(window.jdSref);
    window.searchEngineSource = d(window.jdSuri)
})();
function setSearch(c, d) {
    var a = pageConfig.wideVersion && pageConfig.compatible ? 5: 4,
    b = c || b;
    $.ajax({
        url: "http://api.search.360buy.com/?key=" + b + "&pagesize=" + a + "&filt_type=wyn,L1M1;wstate,L1M1" + d,
        dataType: "jsonp",
        success: function(g) {
            var f = g.Summary.key;
            if (g.Product !== null && g.Product.length > 0) {
                $("#search-result").show();
                $("#search-result .search-item").html(search_TPL.process(g));
                $("#search-result .mt").html('<h2>\u5728\u4eac\u4e1c\u5546\u57ce\u4e2d\u67e5\u770b\u5176\u5b83\u201c<a target="_blank" href="http://search.360buy.com/Search?keyword=' + f + '">' + f + '</a>\u201d\u7684\u641c\u7d22\u7ed3\u679c\uff1a</h2><div class="extra"><a target="_blank" href="http://search.360buy.com/Search?keyword=' + f + '">\u67e5\u770b\u66f4\u591a\u641c\u7d22\u7ed3\u679c</a></div>');
                $(".search-item dl .p-img a").click(function() {
                    var h = $(this).parents("dl").attr("skuid");
                    $.getScript("http://sstat.360buy.com/scslog?args=1^" + encodeURIComponent(f) + "^^1^^" + encodeURIComponent(document.referrer) + "^" + h + "^0^101^^0^0")
                });
                $(".search-item dl .p-name a").click(function() {
                    var h = $(this).parents("dl").attr("skuid");
                    $.getScript("http://sstat.360buy.com/scslog?args=1^" + encodeURIComponent(f) + "^^1^^" + encodeURIComponent(document.referrer) + "^" + h + "^0^101^^0^0")
                })
            }
        }
    })
}
if ( !! jdSref && !!searchEngineSource) {
    var charset = "&encode=utf-8";
    if (searchEngineSource.d == "baidu") {
        var refer = document.referrer;
        charset = /ie=utf-8/.test(refer) ? "&encode=utf-8": "&encode=gbk"
    } else {
        charset = new RegExp(searchEngineSource.d).test("soso#sogou") ? "&encode=gbk": "&encode=utf-8"
    }
    setSearch(searchEngineSource.k, charset)
}
var shopInfo = {
    get: function(a, b) {
        $.ajax({
            url: "http://price.360buy.com/stocksoa/StockHandler.ashx?type=provincestock&provinceid=1&skuid=" + a,
            dataType: "jsonp",
            success: function(c) {
                if (typeof b == "function") {
                    b(c)
                }
            }
        })
    }
};
var EvaluateGrade = {
    init: function() {
        var b = this;
        if ($("#brand-bar-pop").length < 1) {
            this.getGrade()
        } else {
            pageConfig.product.popInfo = null;
            if (pageConfig.product.popInfo) {
                var a = pageConfig.product.popInfo;
                if (a.stock.D && a.stock.D.vid) {
                    b.getGradeDetail(a.stock.D.vid)
                }
                b.setShopInfo(a)
            } else {
                shopInfo.get(pageConfig.product.skuidkey, 
                function(c) {
                    if (c.stock.D && c.stock.D.vid) {
                        b.getGradeDetail(c.stock.D.vid)
                    }
                    b.setShopInfo(c)
                })
            }
        }
    },
    bindEvent: function() {
        $("#evaluate s").click(function() {
            $(this).toggleClass("fold");
            $("#evaluate-detail").toggle()
        });
        return this
    },
    getGrade: function() {
        var b = $(".evaluate-grade"),
        a = $(".heart-red");
        window.fetchJSON_Eva = function(c) {
            a.removeClass("h4").addClass("h" + Math.round(parseFloat(c.result)));
            b.html(parseFloat(c.result) + "\u5206")
        };
        $.getJSONP("http://club.360buy.com/clubservice/merchantcomment/" + pageConfig.product.skuid + ".html?callback=fetchJSON_Eva");
        return this
    },
    getGradeDetail: function(a) {
        var b = this;
        $.ajax({
            url: "http://rms.shop.360buy.com/json/popscore/jsonscore.action?",
            data: {
                venderID: a
            },
            dataType: "jsonp",
            success: function(c) {
                if (c !== null) {
                    if ($("#evaluate s").length < 1) {
                        $("#evaluate").append("<s></s>")
                    }
                    b.bindEvent().setGradeDetail(c)
                }
            }
        })
    },
    setGradeDetail: function(c) {
        var d = '<div id="evaluate-detail" class="m"> <div class="mt"> <div class="fl">\u8bc4\u5206\u660e\u7ec6</div> <div class="p-bfc" title="\u8ba1\u7b97\u89c4\u5219\uff1a(\u5546\u5bb6\u5f97\u5206-\u540c\u884c\u4e1a\u5e73\u5747\u5206)/\u540c\u884c\u4e1a\u5e73\u5747\u5206">\u4e0e\u884c\u4e1a\u76f8\u6bd4</div> </div> <div class="mc"> <dl> <dt>\u63cf\u8ff0\u76f8\u7b26\uff1a</dt> <dd> <span class="eva-grade" title="${descScore}">${(descScore+"").substr(0, 3)}<b>\u5206</b></span> <span class="eva-percent ${descScoreTrends}"><s></s>${resDescScore.toFixed(2)}%</span> </dd> </dl> <dl> <dt>\u9001\u8d27\u901f\u5ea6\uff1a</dt> <dd> <span class="eva-grade" title="${expressScore}">${(expressScore+"").substr(0, 3)}<b>\u5206</b></span> <span class="eva-percent ${expressScoreTrends}"><s></s>${resExpressScore.toFixed(2)}%</span> </dd> </dl> <dl> <dt>\u5546\u54c1\u8d28\u91cf\uff1a</dt> <dd> <span class="eva-grade" title="${qualityScore}">${(qualityScore+"").substr(0, 3)}<b>\u5206</b></span> <span class="eva-percent ${qualityScoreTrends}"><s></s>${resQualityScore.toFixed(2)}%</span> </dd> </dl> <dl class="evaluate-item-last"> <dt>\u552e\u540e\u670d\u52a1\uff1a</dt> <dd> <span class="eva-grade" title="${afsScore}">${(afsScore+"").substr(0, 3)}<b>\u5206</b></span> <span class="eva-percent ${afsScoreTrends}"><s></s>${resAfsScore.toFixed(2)}%</span> </dd> </dl> </div></div>';
        function a() {
            c.resDescScore = Math.abs((c.descScore - c.avgDescScore) / c.avgDescScore * 100);
            c.resExpressScore = Math.abs((c.expressScore - c.avgExpressScore) / c.avgExpressScore * 100);
            c.resQualityScore = Math.abs((c.qualityScore - c.avgQualityScore) / c.avgQualityScore * 100);
            c.resAfsScore = Math.abs((c.afsScore - c.avgAfsScore) / c.avgAfsScore * 100);
            if (c.descScore > c.avgDescScore) {
                c.descScoreTrends = "eva-up"
            } else {
                if (c.descScore == c.avgDescScore) {
                    c.descScoreTrends = "eva-eq"
                } else {
                    if (c.descScore < c.avgDescScore) {
                        c.descScoreTrends = "eva-down"
                    }
                }
            }
            if (c.expressScore > c.avgExpressScore) {
                c.expressScoreTrends = "eva-up"
            } else {
                if (c.expressScore == c.avgExpressScore) {
                    c.expressScoreTrends = "eva-eq"
                } else {
                    if (c.expressScore < c.avgExpressScore) {
                        c.expressScoreTrends = "eva-down"
                    }
                }
            }
            if (c.qualityScore > c.avgQualityScore) {
                c.qualityScoreTrends = "eva-up"
            } else {
                if (c.qualityScore == c.avgQualityScore) {
                    c.qualityScoreTrends = "eva-eq"
                } else {
                    if (c.qualityScore < c.avgQualityScore) {
                        c.qualityScoreTrends = "eva-down"
                    }
                }
            }
            if (c.afsScore > c.avgAfsScore) {
                c.afsScoreTrends = "eva-up"
            } else {
                if (c.afsScore == c.avgAfsScore) {
                    c.afsScoreTrends = "eva-eq"
                } else {
                    if (c.afsScore < c.avgAfsScore) {
                        c.afsScoreTrends = "eva-down"
                    }
                }
            }
            return c
        }
        var b = a();
        $(".evaluate-grade strong").html((c.totalScore + "").substr(0, 3));
        $(".heart-red").removeClass("h4").addClass("h" + c.totalScore.toFixed(0));
        $("#evaluate").after(d.process(b))
    },
    setShopInfo: function(a) {
        var b = "http://mall.360buy.com/index-" + a.stock.D.id + ".html";
        $("#seller dd a").html(a.stock.D.vender).attr({
            href: b,
            title: a.stock.D.vender
        });
        $("#enter-shop a").attr("href", b);
        if (a.stock.D && a.stock.D.linkphone !== null) {
            if ($("#hotline dd").length < 1) {
                $("#hotline dd").html(number)
            }
        }
    }
};
var RecoServices = {
    init: function(a, c) {
        if (!a) {
            $("#summary").append('<li id="summary-featured"><div class="dt">\u7279\u8272\u670d\u52a1\uff1a</div><div class="dd">\u53ef\u9009\u5ef6\u4fdd\u7b49\u7279\u8272\u670d\u52a1 <a href="javascript:;">[\u7acb\u5373\u9009\u62e9]</a></div></li>')
        }
        var b = this,
        c = c || pageConfig.product.skuid,
        a = a || "#summary-featured a";
        $(a).jdThickBox({
            width: 560,
            title: "\u7279\u8272\u670d\u52a1",
            _box: "featured_box",
            _con: "featured_con",
            source: '<div class="iloading" style="padding:20px;">\u52a0\u8f7d\u4e2d...</div>'
        },
        function() {
            var d = b.cacheData.renderHTML;
            $("#featured_con,#featured_box").height("auto");
            if (d !== "") {
                $("#featured_con").html(d);
                b.setSelectedData();
                b.bindEvent()
            } else {
                b.getServices(c)
            }
        })
    },
    cacheData: {
        ids: {},
        selected: "",
        renderHTML: ""
    },
    setSelectedData: function() {
        var a = this.cacheData;
        for (k in a.ids) {
            $("#" + a.ids[k]).addClass("actived")
        }
        $("#yb-result .dd").html(a.selected)
    },
    bindEvent: function() {
        var b = this,
        a = $("#feature-service .tabcon").length;
        $("#feature-service").Jtab({
            event: "click",
            compatible: true
        });
        $("#feature-service .tabcon .item").bind("click", 
        function() {
            var f = $(this).parents(".tabcon"),
            d = f.find(".actived"),
            g = $("#feature-service .tabcon").index(f);
            function c() {
                if (d.length > 0) {
                    d.each(function() {
                        $(this).removeClass("actived");
                        b.popResult(this, g)
                    })
                }
            }
            if ($(this).hasClass("actived")) {
                c();
                b.popResult(this, g)
            } else {
                c();
                b.pushResult(this, $(this).attr("data-selected"), g)
            }
        });
        $("#yb-btn-ok").unbind("click").bind("click", 
        function() {
            b.onSubmit(b.cacheData)
        });
        $(".yb-btn-cancel").unbind("click").bind("click", 
        function() {
            b.onCancel()
        })
    },
    onSubmit: function(a) {
        jdThickBoxclose()
    },
    onCancel: function() {
        this.cacheData = {
            ids: {},
            selected: "",
            renderHTML: ""
        };
        jdThickBoxclose()
    },
    getServices: function(b) {
        var a = this;
        $.ajax({
            url: "http://d.360buy.com/yanbao/get?skuId=" + b,
            dataType: "jsonp",
            success: function(c) {
                if (c) {
                    a.setServices(c, 
                    function() {
                        a.bindEvent()
                    })
                } else {
                    $("#featured_con").html('<p class="tc">\u6682\u65e0\u6570\u636e</p>')
                }
            }
        })
    },
    setServices: function(c, g) {
        var f = this,
        d = "";
        var b = {
            list: c
        };
        var a = '<div id="feature-service" data-widget="tabs"> <div class="mt"> <ul class="tab"> {for item in list} <li data-widget="tab-item" {if parseInt(item_index)==0}class="curr"{/if}><s></s><b></b>${item.virtualTypeName}</li> {/for} </ul> </div> {for item in list} <div class="mc tabcon{if parseInt(item_index)!=0} hide{/if}" data-widget="tab-content"> <h3>\u8bf7\u9009\u62e9</h3> {for service in item.virtualSkuBrandVoList} <dl class="f-sercvice-list"><dt class="yb_type fl"><a title="${service.brandName}" href="${service.brandLinks}" target="_blank">${service.brandName}</a></dt> <dd class="p-bfc"> {for relation in service.bandingRelations} <div class="item" id="srv_${relation.virtualSkuId}_${item_index}" data-selected="${service.brandName} ${service.brandName} ${relation.serviceYear}\u5e74"><b></b><a href="javascript:;" title="${relation.virtualSkuName}">${relation.serviceYear}\u5e74 \uffe5${relation.virtualSkuPrice}</a></div> {/for} </dd> </dl> {/for} <p class="yb-tips">\u6e29\u99a8\u63d0\u793a\uff1a\u6bcf\u79cd\u670d\u52a1\u4e0b\u53ea\u80fd\u9009\u62e9\u4e00\u4e2a\u9009\u9879</p> </div> {/for} <div id="yb-result"> <div class="dt fl">\u5df2\u9009\u62e9\uff1a</div> <div class="dd p-bfc"> </div> </div> <div class="yb-btn p-bfc clb"><a href="javascirpt:;" id="yb-btn-ok" class="yb-btn-ok">\u786e\u5b9a</a><a href="javascirpt:;" class="yb-btn-cancel">\u53d6\u6d88</a></div></div>';
        d = a.process(b);
        $("#featured_con").html(d);
        this.cacheData.renderHTML = d;
        if (typeof g == "function") {
            g()
        }
    },
    pushResult: function(b, c, a) {
        if ($("#yb-res-" + a).length < 1) {
            $("#yb-result .dd").append('<p id="yb-res-' + a + '">' + c + "</p>")
        } else {
            $("#yb-res-" + a).html(c)
        }
        $(b).addClass("actived");
        this.cacheData.ids["fore" + a] = b.id;
        this.cacheData.selected = $("#yb-result .dd").html()
    },
    popResult: function(b, a) {
        if ($("#yb-res-" + a).length > 0) {
            $("#yb-res-" + a).remove();
            $(b).removeClass("actived");
            this.cacheData.ids["fore" + a] = null;
            this.cacheData.selected = ""
        }
    }
};
$(function() {
    $(".jqzoom").jqueryzoom({
        xzoom: 400,
        yzoom: 400,
        offset: 10,
        position: "left",
        preload: 1,
        lens: 1
    });
    $("#summary-grade .dd").click(function() {
        var c = $("#comment");
        if ($("#comment").attr("nodata") !== "true") {
            c.show()
        } else {
            $(document).scrollTop($("#comments-list").offset().top + $("#comments-list .mt").height())
        }
    });
    $("#spec-list img").mouseover(function() {
        var c = $(this).attr("src");
        $("#spec-list img").removeClass("img-hover");
        $(this).addClass("img-hover");
        $("#spec-n1 img").eq(0).attr({
            src: c.replace("/n5/", "/n1/"),
            jqimg: c.replace("/n5/", "/n0/")
        })
    });
    $(".spec-items").imgScroll({
        visible: 5,
        speed: 200,
        step: 1,
        loop: false,
        prev: "#spec-forward",
        next: "#spec-backward",
        disableClass: "disabled"
    });
    $("#recommend").Jtab({
        event: "click",
        compatible: true
    });
    $("#product-detail").Jtab({
        event: "click",
        compatible: true
    },
    function(c, d, f) {
        $("#product-detail .mt").removeClass("nav-fixed");
        $("#product-detail .mt").removeClass("nav-fixed").floatNav({
            fixedClass: "nav-fixed",
            targetEle: "#consult",
            anchor: "#product-detail",
            range: 30,
            onStart: function() {
                $("#nav-minicart").show()
            }
        });
        if (f == 5) {
            Repository.getPracticalGuide()
        }
        if (f == 3) {
            d.css("height", 5).html("<div>a</div>");
            $("#promises,#state").hide();
            Consult.getData(0, $("#consult-0"));
            CommentList.getData(0, 0, $("#comment-0"));
            $("#product-detail .mt").floatNav({
                fixedClass: "nav-fixed",
                targetEle: "#consult",
                anchor: "#product-detail",
                range: 0,
                onStart: function() {
                    $("#nav-minicart").show()
                }
            })
        } else {
            $("#promises,#state").show()
        }
    });
    $("#comments-list").Jtab({
        event: "click",
        compatible: true
    },
    function(c, d, f) {
        CommentList.getData(f, 0, d)
    });
    $("#discuss").Jtab({
        event: "click",
        compatible: true
    },
    function(c, d, f) {
        Discuss.getData(f, d)
    });
    $("#consult").Jtab({
        event: "click",
        compatible: true
    },
    function(c, d, f) {
        if (f <= 4) {
            Consult.getData(f, d)
        } else {
            Consult.setExtraData(f, d)
        }
    });
    mlazyload({
        defObj: "#consult",
        defHeight: 0,
        fn: function() {
            Consult.getData(0, $("#consult-0"))
        }
    });
    mlazyload({
        defObj: "#comments-list",
        defHeight: 0,
        fn: function() {
            CommentList.getData(0, 0, $("#comment-0"))
        }
    });
    mlazyload({
        defObj: "#discuss",
        defHeight: 0,
        fn: function() {
            Discuss.getData(0, $("#discuss-1"))
        }
    });
    mlazyload({
        defObj: "#comments",
        defHeight: 0,
        fn: function() {
            CommentList.getData(0, 0, $("#comment-0"))
        }
    });
    mlazyload({
        defObj: "#product-track",
        defHeight: 0,
        fn: function() {
            var c = new ProductTrack("#recent-view-track", "#maybe-like").getData()
        }
    });
    $("#ranklist .mc").Jtab({
        compatible: true
    });
    $("#product-detail .mt").floatNav({
        fixedClass: "nav-fixed",
        targetEle: "#consult",
        anchor: "#product-detail",
        range: 30,
        onStart: function() {
            $("#nav-minicart").show()
        }
    });
    $("#nav-minicart").Jdropdown(function(d) {
        var c = pageConfig.product.priceImg || ("http://price.360buyimg.com/gp" + pageConfig.product.skuid + ",1.png");
        d.find(".nav-minicart-btn a").attr("href", $("#choose-btn-append .btn-append").attr("href"));
        d.find(".p-img img").attr("src", pageConfig.FN_GetImageDomain(pageConfig.product.skuid) + "n4/" + pageConfig.product.src);
        d.find(".p-name").html(unescape(pageConfig.product.name));
        d.find(".p-price img").attr("src", c)
    });
    $("#store-selector").Jdropdown();
    $(".share-ft").click(function() {
        $(this).toggleClass("share-ft-open");
        $(".share-list-item").toggleClass("share-list-item-all")
    });
    $("#comments-list .tab").append('<li class="tab-last"></li>');
    Recommend.init(pageConfig.product.type);
    Repository.init();
    EvaluateGrade.init();
    if ($("#state p").length < 1) {
        $("#state").append("<p><b>\u6ce8\uff1a</b>\u672c\u7ad9\u5546\u54c1\u4fe1\u606f\u5747\u6765\u81ea\u4e8e\u5382\u5546\uff0c\u5176\u771f\u5b9e\u6027\u3001\u51c6\u786e\u6027\u548c\u5408\u6cd5\u6027\u7531\u4fe1\u606f\u62e5\u6709\u8005\uff08\u5382\u5546\uff09\u8d1f\u8d23\u3002\u672c\u7ad9\u4e0d\u63d0\u4f9b\u4efb\u4f55\u4fdd\u8bc1\uff0c\u5e76\u4e0d\u627f\u62c5\u4efb\u4f55\u6cd5\u5f8b\u8d23\u4efb\u3002</p>")
    }
    mark(pageConfig.product.skuid, 1);
    clsPVAndShowLog("", "", 3, "p");
    clsPVAndShowLog("", "", 2, "p"); (function() {
        var f = [],
        c;
        var d = window.location.href + "?sid=";
        d = (readCookie("pin")) ? (d + readCookie("pin")) : d;
        f.push('<div class="model-prompt model-partake"><div class="form"><label>\u5546\u54c1\u94fe\u63a5\uff1a</label><input type="text" class="text" value=\'');
        f.push(d);
        f.push("'/></div>");
        if ($.browser.msie) {
            f.push('<div class="ac"><input type="button" class="btn-copy" value="\u590d\u5236\u5e76\u53d1\u7ed9\u6211\u7684\u597d\u53cb" onclick="window.clipboardData.setData(\'Text\',\'' + d + "');$('.model-partake').html('\u5546\u54c1\u94fe\u63a5\u5730\u5740\u5df2\u7ecf\u590d\u5236\uff0c\u60a8\u53ef\u4ee5\u7c98\u8d34\u5230QQ\u3001MSN\u6216\u90ae\u4ef6\u4e2d\u53d1\u9001\u7ed9\u597d\u53cb\u4e86!')\"></div>");
            c = 90
        } else {
            f.push('<div class="i-con">\u60a8\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u81ea\u52a8\u590d\u5236\u529f\u80fd\u3002\u60a8\u53ef\u4ee5\u6309\u4f4fCtrl+C\uff0c\u5c06\u5546\u54c1\u94fe\u63a5\u5730\u5740\u590d\u5236\u4e0b\u6765\u3002</div>');
            c = 110
        }
        f.push("</div>");
        f = f.join("");
        $("#site-qq").jdThickBox({
            type: "text",
            width: 400,
            height: c,
            source: f,
            _fastClose: true
        });
        $("#site-qqmsn").jdThickBox({
            type: "text",
            width: 400,
            height: c,
            source: f,
            _fastClose: true
        });
        $(".share-list-item a").click(function() {
            var g = this.id;
            switch (g) {
            case "site-sina":
                jdPshowRecommend("http://v.t.sina.com.cn/share/share.php?appkey=2445336821", "sina");
                break;
            case "site-qzone":
                jdPshowRecommend("http://v.t.qq.com/share/share.php?source=1000002&site=http://www.360buy.com", "qzone");
                break;
            case "site-renren":
                jdPshowRecommend("http://share.renren.com/share/buttonshare/post/1004?", "renren");
                break;
            case "site-kaixing":
                jdPshowRecommend("http://www.kaixin001.com/repaste/share.php?", "kaixing");
                break;
            case "site-douban":
                jdPshowRecommend("http://www.douban.com/recommend/?", "douban");
                break;
            case "site-msn":
                jdPshowRecommend("http://profile.live.com/badge/?", "MSN");
                break;
            case "site-email":
                window.open("http://club.360buy.com/jdFriend/tjyl.aspx?product=" + pageConfig.product.skuid);
                break
            }
        })
    })();
    if (self == top) {
        if (pageConfig.product.cat[2] === 1356 && $.browser.safari) {
            $.getScript("http://misc.360buyimg.com/product/js/2012/guang.js", 
            function() {
                SP.shoppingToolbar.init();
                $("#sp-minilize").bind("click", 
                function() {
                    $("#shopping-list").hide()
                })
            })
        }
        function b() {
            var c = $("#sp-setting-btn .sp-pop");
            $.ajax({
                url: "http://pt.360buy.com/pt_toUserFlag.action?ceshi3=1&pinflag=1&pin=" + encodeURI(readCookie("pin")),
                dataType: "jsonp",
                success: function(d) {}
            })
        }
        if (readCookie("pin")) {
            b();
            var a = setInterval(b, 600000)
        }
    }
});
function onlineService(c, m) {
    var i = pageConfig.product.skuid;
    if (!i) {
        i = $("ul[id='summary'] span").html().replace("\u5546\u54c1\u7f16\u53f7\uff1a", "")
    }
    var b = unescape(pageConfig.product.name);
    b = encodeURIComponent(encodeURIComponent(b));
    var g = $("#name strong").html();
    g = encodeURIComponent(encodeURIComponent(g));
    var o = $("#store-selector .text").text();
    var h = $("#store-prompt strong").html();
    var n = o + "\uff08" + h + "\uff09";
    n = encodeURIComponent(encodeURIComponent(n));
    m = encodeURIComponent(encodeURIComponent(m));
    var d = $("span[class^='star']").attr("class").replace("star sa", "");
    var p = 100;
    try {
        p = $("a[href='#comment']").html().replace("(\u5df2\u6709", "").replace("\u4eba\u8bc4\u4ef7)", "")
    } catch(l) {}
    var f = 100;
    try {
        f = $("#i-comment .rate strong").text().replace("%", "")
    } catch(l) {}
    var r = encodeURIComponent(encodeURIComponent(pageConfig.product.src));
    var q = jQuery.cookie("_recent");
    if (!q) {
        q = ""
    }
    var j = "";
    try {
        j = $("strong[class='p-price'] img").attr("src")
    } catch(l) {}
    if (j) {
        j = encodeURIComponent(encodeURIComponent(j))
    } else {
        j = ""
    }
    var a = "http://chat.360buy.com/index.action?pid=" + i + "&price=" + j + "&stock=" + n + "&score=" + d + "&commentNum=" + p + "&imgUrl=" + r + "&wname=" + b + "&advertiseWord=" + g + "&seller=" + m + "&evaluationRate=" + f + "&recent=" + q + "&code=" + c;
    open(a, i, "status=no,toolbar=no,menubar=no,location=no,titlebar=no,resizable=no,width=800px,height=590")
}
function setIM() {
    var pid = pageConfig.product.skuid;
    if (!pid) {
        pid = $("ul[id='summary'] span").html().replace("\u5546\u54c1\u7f16\u53f7\uff1a", "")
    }
    jQuery.getJSON("http://chat.360buy.com/api/checkSku.action?pid=" + pid + "&t=" + (parseInt(new Date().getTime() / 2000, 10)) + "&callback=?", 
    function(xml) {
        if (xml) {
            var retObj = eval("(" + xml + ")");
            var code = retObj.code;
            var seller = retObj.seller;
            if (seller && seller != "") {
                seller = seller.replace("&qt;", "'").replace("&dt;", '"')
            }
            if (code == 1) {
                $("#jdim img").attr("src", "http://misc.360buyimg.com/product/skin/2012/i/online.gif");
                $("#jdim").removeClass("im noservice");
                $("#jdim").addClass("im online");
                $("#jdim").attr("title", seller + " \u5728\u7ebf\u5ba2\u670d");
                $("#jdim").click(function() {
                    onlineService(1, seller)
                })
            } else {
                if (code == 2) {
                    $("#jdim img").attr("src", "http://misc.360buyimg.com/product/skin/2012/i/offline.png");
                    $("#jdim").removeClass("im noservice");
                    $("#jdim").addClass("im");
                    var tt = (pid.length >= 10) ? " \u5ba2\u670d\u76ee\u524d\u4e0d\u5728\u7ebf\uff01\u8d2d\u4e70\u4e4b\u524d\uff0c\u5982\u6709\u95ee\u9898\uff0c\u8bf7\u5728\u6b64\u9875\u201c\u5168\u90e8\u8d2d\u4e70\u54a8\u8be2\u201d\u4e2d\u5411\u4eac\u4e1c\u5ba2\u670d\u53d1\u8d77\u54a8\u8be2": " \u5382\u5546\u552e\u524d\u54a8\u8be2\u76ee\u524d\u4e0d\u5728\u7ebf\uff01\u8d2d\u4e70\u4e4b\u524d\uff0c\u5982\u6709\u95ee\u9898\uff0c\u8bf7\u5728\u6b64\u9875\u201c\u5168\u90e8\u8d2d\u4e70\u54a8\u8be2\u201d\u4e2d\u5411\u4eac\u4e1c\u5ba2\u670d\u53d1\u8d77\u54a8\u8be2";
                    $("#jdim").attr("title", seller + tt);
                    $("#jdim").unbind("click")
                } else {
                    if (code == 3 || code == 9) {
                        $("#jdim img").attr("src", "http://misc.360buyimg.com/product/skin/2012/i/online.gif");
                        $("#jdim").html("\u7ed9\u5ba2\u670d\u7559\u8a00");
                        $("#jdim").removeClass("im noservice");
                        $("#jdim").addClass("im online");
                        $("#jdim").attr("title", seller + " \u5728\u7ebf\u5ba2\u670d\u76ee\u524d\u4e0d\u5728\u7ebf\uff0c\u60a8\u53ef\u4ee5\u70b9\u51fb\u6b64\u5904\u7ed9\u5546\u5bb6\u7559\u8a00\uff0c\u5e76\u5728\u3010\u6211\u7684\u4eac\u4e1c->\u6d88\u606f\u7cbe\u7075\u3011\u4e2d\u67e5\u770b\u56de\u590d");
                        $("#jdim").click(function() {
                            onlineService(3, seller)
                        })
                    }
                }
            }
        }
    })
}
setIM();
function setImButton() {
    var pid = pageConfig.product.skuid;
    if (!pid) {
        pid = $("ul[id='summary'] span").html().replace("\u5546\u54c1\u7f16\u53f7\uff1a", "")
    }
    jQuery.getJSON("http://chat.360buy.com/api/checkSku.action?pid=" + pid + "&t=" + (parseInt(new Date().getTime() / 2000, 10)) + "&callback=?", 
    function(xml) {
        if (xml) {
            var retObj = eval("(" + xml + ")");
            var code = retObj.code;
            var seller = retObj.seller;
            if (seller && seller != "") {
                seller = seller.replace("&qt;", "'").replace("&dt;", '"')
            }
            if (code == 1) {
                $("#online-service").show();
                $("#j-im").attr("title", seller + " \u5728\u7ebf\u5ba2\u670d");
                $("#j-im").click(function() {
                    onlineService(1, seller)
                })
            } else {
                if (code == 2) {
                    $("#online-service").show();
                    var tt = (pid.length >= 10) ? " \u5ba2\u670d\u76ee\u524d\u4e0d\u5728\u7ebf\uff01\u8d2d\u4e70\u4e4b\u524d\uff0c\u5982\u6709\u95ee\u9898\uff0c\u8bf7\u5728\u6b64\u9875\u201c\u5168\u90e8\u8d2d\u4e70\u54a8\u8be2\u201d\u4e2d\u5411\u4eac\u4e1c\u5ba2\u670d\u53d1\u8d77\u54a8\u8be2": " \u5382\u5546\u552e\u524d\u54a8\u8be2\u76ee\u524d\u4e0d\u5728\u7ebf\uff01\u8d2d\u4e70\u4e4b\u524d\uff0c\u5982\u6709\u95ee\u9898\uff0c\u8bf7\u5728\u6b64\u9875\u201c\u5168\u90e8\u8d2d\u4e70\u54a8\u8be2\u201d\u4e2d\u5411\u4eac\u4e1c\u5ba2\u670d\u53d1\u8d77\u54a8\u8be2";
                    $("#j-im").addClass("im-offline").attr("title", seller + tt).unbind("click")
                } else {
                    if (code == 3 || code == 9) {
                        $("#online-service").show().find("s").html("\u7ed9\u5ba2\u670d\u7559\u8a00");
                        $("#j-im").addClass("im-offline").attr("title", seller + " \u5728\u7ebf\u5ba2\u670d\u76ee\u524d\u4e0d\u5728\u7ebf\uff0c\u60a8\u53ef\u4ee5\u70b9\u51fb\u6b64\u5904\u7ed9\u5546\u5bb6\u7559\u8a00\uff0c\u5e76\u5728\u3010\u6211\u7684\u4eac\u4e1c->\u6d88\u606f\u7cbe\u7075\u3011\u4e2d\u67e5\u770b\u56de\u590d").click(function() {
                            onlineService(3, seller)
                        })
                    }
                }
            }
        }
    })
}
if ($("#brand-bar-pop").length > 0) {
    setImButton()
}
$("#jdim").attr("clstag", "shangpin|keycount|product|imbtn");
if (window.pageConfig) {
    var sidePanle = new pageConfig.FN_InitSidebar();
    sidePanle.addItem("<a class='research' target='_blank' href='http://survey.360buy.com/index.php?sid=68129&lang=zh-Hans'><b></b>\u8c03\u67e5\u95ee\u5377</a>");
    sidePanle.setTop();
    sidePanle.scroll()
} (function() {

    if ($("#summary-market").length > 0) {
        $("#summary-market").show();
        var a = $("#summary-market").html();
        if (/\u5e02/.test(a)) {
            $("#summary-market .dt").html("\u53c2&nbsp;\u8003&nbsp;\u4ef7\uff1a")
        }
    }
})();