/*##20120827##*/
if (!djdarea) var djdarea = {};
if (!eleRegion) {
    var eleRegion = null;
    djdarea.skuId = pageConfig.product.skuid
}
if (!eleSkuIdKey) {
    var eleSkuIdKey = null;
    djdarea.skuKey = pageConfig.product.skuidkey
}
var jdlocation = {
    "北京": {
        id: 1,
        c: {
            "朝阳区": 72,
            "海淀区": 2800,
            "西城区": 2801,
            "东城区": 2802,
            "崇文区": 2803,
            "宣武区": 2804,
            "丰台区": 2805,
            "石景山区": 2806,
            "门头沟": 2807,
            "房山区": 2808,
            "通州区": 2809,
            "大兴区": 2810,
            "顺义区": 2812,
            "怀柔区": 2814,
            "密云区": 2816,
            "昌平区": 2901,
            "平谷区": 2953,
            "延庆县": 3065
        }
    },
    "上海": {
        id: 2,
        c: {
            "黄浦区": 78,
            "卢湾区": 2811,
            "徐汇区": 2813,
            "长宁区": 2815,
            "静安区": 2817,
            "闸北区": 2820,
            "虹口区": 2822,
            "杨浦区": 2823,
            "宝山区": 2824,
            "闵行区": 2825,
            "嘉定区": 2826,
            "浦东新区": 2830,
            "青浦区": 2833,
            "松江区": 2834,
            "金山区": 2835,
            "南汇区": 2836,
            "奉贤区": 2837,
            "普陀区": 2841,
            "崇明县": 2919
        }
    },
    "天津": {
        id: 3,
        c: {
            "天津市": 83
        }
    },
    "重庆": {
        id: 4,
        c: {
            "重庆市": 87
        }
    },
    "河北": {
        id: 5,
        c: {
            "石家庄市": 142,
            "邯郸市": 148,
            "邢台市": 164,
            "保定市": 199,
            "张家口市": 224,
            "承德市": 239,
            "秦皇岛市": 248,
            "唐山市": 258,
            "沧州市": 264,
            "廊坊市": 274,
            "衡水市": 275
        }
    },
    "山西": {
        id: 6,
        c: {
            "太原市": 303,
            "大同市": 309,
            "阳泉市": 318,
            "晋城市": 325,
            "朔州市": 330,
            "晋中市": 336,
            "忻州市": 350,
            "吕梁市": 368,
            "临汾市": 379,
            "运城市": 398,
            "长治市": 3074
        }
    },
    "河南": {
        id: 7,
        c: {
            "郑州市": 412,
            "开封市": 420,
            "洛阳市": 427,
            "平顶山市": 438,
            "焦作市": 446,
            "鹤壁市": 454,
            "新乡市": 458,
            "安阳市": 468,
            "濮阳市": 475,
            "许昌市": 482,
            "漯河市": 489,
            "三门峡市": 495,
            "南阳市": 502,
            "商丘市": 517,
            "周口市": 527,
            "驻马店市": 538,
            "信阳市": 549,
            "济源市": 2780
        }
    },
    "辽宁": {
        id: 8,
        c: {
            "沈阳市": 560,
            "大连市": 573,
            "鞍山市": 579,
            "抚顺市": 584,
            "本溪市": 589,
            "丹东市": 593,
            "锦州市": 598,
            "葫芦岛市": 604,
            "营口市": 609,
            "盘锦市": 613,
            "阜新市": 617,
            "辽阳市": 621,
            "铁岭市": 625,
            "朝阳市": 632,
            "海城市": 4184
        }
    },
    "吉林": {
        id: 9,
        c: {
            "长春市": 639,
            "吉林市": 644,
            "四平市": 651,
            "通化市": 657,
            "白山市": 664,
            "松原市": 674,
            "白城市": 681,
            "延边朝鲜族自治州": 687,
            "延吉市": 689,
            "公主岭市": 2978,
            "辽源市": 2992,
            "珲春市": 4094
        }
    },
    "黑龙江": {
        id: 10,
        c: {
            "哈尔滨市": 698,
            "齐齐哈尔市": 712,
            "鹤岗市": 727,
            "双鸭山市": 731,
            "鸡西市": 737,
            "大庆市": 742,
            "伊春市": 753,
            "牡丹江市": 757,
            "佳木斯市": 765,
            "七台河市": 773,
            "黑河市": 776,
            "绥化市": 782,
            "大兴安岭地区": 793,
            "铁力市": 2898,
            "北安市": 4099
        }
    },
    "内蒙古": {
        id: 11,
        c: {
            "呼和浩特市": 799,
            "包头市": 805,
            "乌海市": 810,
            "赤峰市": 812,
            "乌兰察布盟": 823,
            "锡林郭勒盟": 835,
            "呼伦贝尔市": 848,
            "哲里木盟": 862,
            "鄂尔多斯市": 870,
            "巴彦淖尔市": 880,
            "阿拉善盟": 891,
            "兴安盟": 895,
            "通辽市": 902
        }
    },
    "江苏": {
        id: 12,
        c: {
            "南京市": 904,
            "徐州市": 911,
            "连云港市": 919,
            "淮安市": 925,
            "宿迁市": 933,
            "盐城市": 939,
            "扬州市": 951,
            "泰州市": 959,
            "南通市": 965,
            "镇江市": 972,
            "常州市": 978,
            "无锡市": 984,
            "苏州市": 988
        }
    },
    "山东": {
        id: 13,
        c: {
            "济南市": 1000,
            "青岛市": 1007,
            "淄博市": 1016,
            "枣庄市": 1022,
            "东营市": 1025,
            "潍坊市": 1032,
            "烟台市": 1042,
            "威海市": 1053,
            "莱芜市": 1058,
            "德州市": 1060,
            "临沂市": 1072,
            "聊城市": 1081,
            "滨州市": 1090,
            "菏泽市": 1099,
            "日照市": 1108,
            "泰安市": 1112,
            "济宁市": 2900
        }
    },
    "安徽": {
        id: 14,
        c: {
            "铜陵市": 1114,
            "合肥市": 1116,
            "淮南市": 1121,
            "淮北市": 1124,
            "芜湖市": 1127,
            "蚌埠市": 1132,
            "马鞍山市": 1137,
            "当涂县": 1139,
            "安庆市": 1140,
            "黄山市": 1151,
            "滁州市": 1159,
            "阜阳市": 1167,
            "毫州市": 1174,
            "宿州市": 1180,
            "宜城市": 1193,
            "池州市": 1201,
            "六安市": 1206,
            "宣城市": 2971,
            "凤阳县": 4037
        }
    },
    "浙江": {
        id: 15,
        c: {
            "宁波市": 1158,
            "杭州市": 1213,
            "温州市": 1233,
            "嘉兴市": 1243,
            "湖州市": 1250,
            "绍兴市": 1255,
            "金华市": 1262,
            "衢州市": 1273,
            "丽水市": 1280,
            "台州市": 1290,
            "舟山市": 1298
        }
    },
    "福建": {
        id: 16,
        c: {
            "福州市": 1303,
            "厦门市": 1315,
            "三明市": 1317,
            "莆田市": 1329,
            "泉州市": 1332,
            "漳州市": 1341,
            "南平市": 1352,
            "龙岩市": 1362,
            "宁德市": 1370
        }
    },
    "湖北": {
        id: 17,
        c: {
            "武汉市": 1381,
            "黄石市": 1387,
            "襄樊市": 1396,
            "十堰市": 1405,
            "荆州市": 1413,
            "宜昌市": 1421,
            "孝感市": 1432,
            "黄冈市": 1441,
            "咸宁市": 1458,
            "恩施土家族苗族自治州": 1466,
            "鄂州市": 1475,
            "荆门市": 1477,
            "随州市": 1479,
            "潜江市": 2922,
            "天门市": 2980,
            "仙桃市": 2983,
            "宜都市": 2998,
            "钟祥市": 3063,
            "神农架林区": 3154,
            "恩施市": 4030,
            "洪湖市": 4098
        }
    },
    "湖南": {
        id: 18,
        c: {
            "长沙市": 1482,
            "株洲市": 1488,
            "湘潭市": 1495,
            "韶山市": 1499,
            "衡阳市": 1501,
            "邵阳市": 1511,
            "岳阳市": 1522,
            "常德市": 1530,
            "张家界市": 1540,
            "郴州市": 1544,
            "益阳市": 1555,
            "永州市": 1560,
            "怀化市": 1574,
            "娄底市": 1586,
            "湘西土家族苗族": 1592,
            "耒阳市": 4250
        }
    },
    "广东": {
        id: 19,
        c: {
            "广州市": 1601,
            "深圳市": 1607,
            "珠海市": 1609,
            "汕头市": 1611,
            "韶关市": 1617,
            "河源市": 1627,
            "梅州市": 1634,
            "惠州市": 1643,
            "汕尾市": 1650,
            "东莞市": 1655,
            "中山市": 1657,
            "江门市": 1659,
            "佛山市": 1666,
            "阳江市": 1672,
            "湛江市": 1677,
            "茂名市": 1684,
            "肇庆市": 1690,
            "云浮市": 1698,
            "清远市": 1704,
            "潮州市": 1705,
            "揭阳市": 1709
        }
    },
    "广西": {
        id: 20,
        c: {
            "南宁市": 1715,
            "柳州市": 1720,
            "桂林市": 1726,
            "梧州市": 1740,
            "北海市": 1746,
            "防城港市": 1749,
            "钦州市": 1753,
            "贵港市": 1757,
            "玉林市": 1761,
            "南宁地区": 1768,
            "柳州地区": 1781,
            "贺州市": 1792,
            "百色市": 1806,
            "河池市": 1818,
            " 来宾市": 3044,
            "崇左市": 3168
        }
    },
    "江西": {
        id: 21,
        c: {
            "南昌市": 1827,
            "景德镇市": 1832,
            "萍乡市": 1836,
            "新余市": 1842,
            "九江市": 1845,
            "鹰潭市": 1857,
            "上饶市": 1861,
            "宜春市": 1874,
            "抚州市": 1885,
            "吉安市": 1898,
            "赣州市": 1911
        }
    },
    "四川": {
        id: 22,
        c: {
            "成都市": 1930,
            "自贡市": 1946,
            "攀枝花市": 1950,
            "泸州市": 1954,
            "绵阳市": 1960,
            "德阳市": 1962,
            "广元市": 1977,
            "遂宁市": 1983,
            "内江市": 1988,
            "乐山市": 1993,
            "宜宾市": 2005,
            "广安市": 2016,
            "南充市": 2022,
            "达州市": 2033,
            "巴中市": 2042,
            "雅安市": 2047,
            "眉山市": 2058,
            "资阳市": 2065,
            "阿坝藏族羌族自治州": 2070,
            "甘孜藏族自治州": 2084,
            "凉山彝族自治州": 2103,
            "江油市": 4149,
            "广汉市": 4249
        }
    },
    "海南": {
        id: 23,
        c: {
            "海口市": 2121,
            "儋州市": 3034,
            "琼海市": 3115,
            "万宁市": 3137,
            "东方市": 3173,
            "三亚市": 3690,
            "文昌市": 3698,
            "五指山市": 3699,
            "临高县": 3701,
            "澄迈县": 3702,
            "定安县": 3703,
            "屯昌县": 3704,
            "昌江黎族自治县": 3705,
            "白沙黎族自治县　": 3706,
            "琼中黎族苗族自治县": 3707,
            "陵水黎族自治县": 3708,
            "保亭黎族苗族自治县": 3709,
            "乐东黎族自治县": 3710,
            "西南中沙群岛办事处（县级）": 3711
        }
    },
    "贵州": {
        id: 24,
        c: {
            "贵阳市": 2144,
            "六盘水市": 2150,
            "遵义市": 2155,
            "铜仁地区": 2169,
            "毕节地区": 2180,
            "安顺市": 2189,
            "黔西南布依族苗族": 2196,
            "黔东南苗族侗族自治州": 2205,
            "黔南布依族苗族自治县": 2222
        }
    },
    "云南": {
        id: 25,
        c: {
            "昆明市": 2235,
            "曲靖市": 2247,
            "玉溪市": 2258,
            "昭通市": 2270,
            "普洱市": 2281,
            "临沧市": 2291,
            "保山市": 2298,
            "丽江地区": 2304,
            "文山壮族苗族自治州": 2309,
            "红河彝族哈尼族自治洲": 2318,
            "西双版纳傣族自治州": 2332,
            "楚雄彝族自治州": 2336,
            "大理白族自治州": 2347,
            "德宏傣族景坡族自治州": 2360,
            "怒江傈僳族自治州": 2366,
            "迪庆藏族自治州": 4108
        }
    },
    "西藏": {
        id: 26,
        c: {
            "拉萨": 2951,
            "那曲地区": 3107,
            "山南地区": 3129,
            "昌都地区": 3138,
            "日喀则地区": 3144,
            "阿里地区": 3970,
            "林芝地区": 3971
        }
    },
    "陕西": {
        id: 27,
        c: {
            "西安市": 2376,
            "铜川市": 2386,
            "宝鸡市": 2390,
            "咸阳市": 2402,
            "渭南市": 2416,
            "延安市": 2428,
            "汉中市": 2442,
            "榆林市": 2454,
            "商洛市": 2468,
            "安康市": 2476
        }
    },
    "甘肃": {
        id: 28,
        c: {
            "兰州市": 2487,
            "金昌市": 2492,
            "白银市": 2495,
            "天水市": 2501,
            "嘉峪关市": 2509,
            "安西地区": 2510,
            "平凉市": 2518,
            "庆阳市": 2525,
            "陇南市": 2534,
            "武威市": 2544,
            "张掖市": 2549,
            "酒泉市": 2556,
            "甘南藏族自治州": 2564,
            "临夏州": 2573,
            "定西市": 3080,
            "临夏市": 3122
        }
    },
    "青海": {
        id: 29,
        c: {
            "西宁市": 2580,
            "海东地区": 2585,
            "海北州": 2592,
            "黄南州": 2597,
            "海南州": 2603,
            "果洛藏族自治州": 2605,
            "玉树藏族自治州": 2612,
            "海西州": 2620
        }
    },
    "宁夏": {
        id: 30,
        c: {
            "银川市": 2628,
            "石嘴山市": 2632,
            "吴忠市": 2637,
            "固原市": 2644,
            "中卫市": 3071
        }
    },
    "新疆": {
        id: 31,
        c: {
            "乌鲁木齐市": 2652,
            "克拉玛依市": 2654,
            "石河子市": 2656,
            "吐鲁番地区": 2658,
            "哈密地区": 2662,
            "和田地区": 2666,
            "阿克苏地区": 2675,
            "喀什地区": 2686,
            "克孜勒苏柯尔克": 2699,
            "巴音郭楞蒙古族自治州": 2704,
            "昌吉回族自治州": 2714,
            "博尔塔拉蒙古自治州": 2723,
            "伊犁哈萨克自治州": 2727,
            "塔城地区": 2736,
            "阿勒泰地区": 2744,
            "新疆维吾尔自治区": 4091,
            "五家渠市": 4110,
            "博尔塔拉蒙古自治州阿拉山口口岸": 4163
        }
    },
    "台湾": {
        id: 32,
        c: {
            "台湾市": 2768
        }
    },
    "香港": {
        id: 42,
        c: {
            "香港特别行政区": 2754
        }
    },
    "澳门": {
        id: 43,
        c: {
            "澳门市": 2770
        }
    },
    "钓鱼岛": {
        id: 84,
        c: {
            "钓鱼岛": 84
        }
    }
};
var djdLimit = {
    "11": 1,
    "26": 1,
    "29": 1,
    "31": 1,
    "32": 1,
    "42": 1,
    "43": 1,
    "84": 1
};
$.easybuy_button = $("#choose-btn-easybuy");
$.divide_button = $("#choose-btn-divide");
$.notice_button = $("#choose-btn-notice");
djdarea.pageload = true;
djdarea.getNameById = function(id) {
    for (var o in jdlocation) {
        if (jdlocation[o].id == id) return o;

    }
    return "北京";

};
djdarea.getProCitIdByName = function(name) {
    var pro = 0;
    var cit = 0;
    for (var o in this.iplocation) {
        if (name.indexOf(o, 0) != -1) {
            var fcit = 0;
            pro = this.iplocation[o].id;
            for (var co in this.iplocation[o].c) {
                if (fcit == 0) fcit = this.iplocation[o].c[co];
                if (name.indexOf(co, 0) != -1) cit = this.iplocation[o].c[co];

            }
            if (pro > 0 && cit == 0) {
                cit = fcit;

            }
            return pro + "-" + cit;

        }

    }
    return "1-72"

};
djdarea.selecthtm = [];
djdarea.curAreaSku = ["0", "0", "0", "0", "0"];
djdarea.curCitys = null;
djdarea.provinceDom = null;
djdarea.cityDom = null;
djdarea.areaDom = null;
djdarea.djdStockDom = null;
djdarea.stockInfoDom = null;
djdarea.cacheArea = {};
djdarea.flag = 0;
djdarea.bindAreaDom = function(t, v) {
    var dom = null;
    var exist = false;
    switch (t) {
        case "P":
        djdarea.selecthtm = [];
        for (var o in jdlocation) {
            djdarea.selecthtm.push("<option value=\"" + jdlocation[o].id + "\">" + o + "</option>");
            if (v == jdlocation[o].id) exist = true;

        }
        if (!exist) v = 1;
        djdarea.provinceDom.html(djdarea.selecthtm.join("")).val(v);
        djdarea.curAreaSku[0] = v;
        djdarea.curAreaSku[1] = "0";
        djdarea.curAreaSku[2] = "0";
        djdarea.curAreaSku[3] = "0";
        djdarea.curAreaSku[4] = "0";
        if (eleRegion && eleRegion[v]) djdarea.curCitys = eleRegion[v].citys;
        break;
        case "C":
        var pid = djdarea.provinceDom.val();
        djdarea.selecthtm = ["<option value='0'>--请选择--</option>"];
        var cityid = 72;
        var fircityid = 0;
        for (var o in jdlocation) {
            if (jdlocation[o].id == pid) {
                for (var co in jdlocation[o].c) {
                    cityid = jdlocation[o].c[co];
                    if (!fircityid) fircityid = cityid;
                    if (v == cityid) exist = true;
                    if (v == "-1") v = cityid;
                    djdarea.selecthtm.push("<option value=\"" + cityid + "\">" + co + "</option>");

                }

            }

        }
        if (!exist && v != 0) v = fircityid ? fircityid: 72;
        djdarea.cityDom.html(djdarea.selecthtm.join("")).val(v);
        djdarea.areaDom.html("<option value='0'>--请选择--</option>");
        djdarea.curAreaSku[0] = pid;
        djdarea.curAreaSku[1] = v;
        djdarea.curAreaSku[2] = "0";
        djdarea.curAreaSku[3] = djdarea.getSkuId(v, "C");
        djdarea.curAreaSku[4] = djdarea.getKey(eleSkuIdKey, "SkuId", djdarea.curAreaSku[3]);
        if (eleRegion && eleRegion[pid]) djdarea.curCitys = eleRegion[pid].citys;
        break;
        case "A":
        var pid = djdarea.provinceDom.val();
        var cid = djdarea.cityDom.val();
        djdarea.curAreaSku[0] = pid;
        djdarea.curAreaSku[1] = cid;
        djdarea.curAreaSku[2] = v;
        djdarea.curAreaSku[3] = djdarea.getSkuId(cid, "C");
        djdarea.curAreaSku[4] = djdarea.getKey(eleSkuIdKey, "SkuId", djdarea.curAreaSku[3]);
        if (djdarea.curAreaSku[3]) pageConfig.product.skuid = djdarea.curAreaSku[3];
        if (djdarea.curAreaSku[4]) pageConfig.product.skuidkey = djdarea.curAreaSku[4];
        if (pid == 0 || cid == 0) {
            djdarea.areaDom.html("<option value='0'>--请选择--</option>").val(v);
            return;
        }
        if (djdarea.cacheArea[cid]) {
            getAreaList_callback(djdarea.cacheArea[cid]);
            return;

        }
        //$.getJSONP("http://d.360buy.com/area/get?fid=" + cid + "&callback=getAreaList_callback", getAreaList_callback);
        break;
        case "A-B":
        if (v == "0") return;
        djdarea.curAreaSku[2] = v;
        setCookie("ipLoc-djd", [djdarea.curAreaSku[0], djdarea.curAreaSku[1], djdarea.curAreaSku[2]].join("-"), 30, "/", "360buy.com", false);
        var proname = djdarea.getNameById(djdarea.curAreaSku[0]);
        setCookie("ipLocation", proname, 30, "/", "360buy.com", false);
        djdarea.djdStockDom.removeClass('hover');
        DataBulider();
        break;

    }

};
function getAreaList_callback(obj) {
    djdarea.selecthtm = "<option value='0'>--请选择--</option>";
    var v = djdarea.curAreaSku[2];
    var cid = djdarea.curAreaSku[1];
    for (var i = 0, j = obj.length; i < j; i++) {
        if (v == "-1") v = obj[i].id;
        djdarea.selecthtm += "<option value=\"" + obj[i].id + "\" title='" + obj[i].name + "'>" + obj[i].name + "</option>";

    }
    if (cid == 84) djdarea.selecthtm += "<option value=\"84\" title='钓鱼岛'>钓鱼岛</option>";
    djdarea.areaDom.html(djdarea.selecthtm).val(v);
    djdarea.curAreaSku[2] = v;
    if (cid && obj && obj.length > 0) djdarea.cacheArea[cid] = obj;
    if (v != "0") DataBulider();

}
djdarea.getKey = function(l, k, v) {
    if (!l) return djdarea.skuKey;
    for (var i = 0, j = l.length; i < j; i++) {
        if (l[i][k] == v) return l[i].Key;

    }
    return "";

};
djdarea.getSkuId = function(id, t) {
    if (!eleRegion) return djdarea.skuId;
    if (t == "P") {
        if (eleRegion[id]) return eleRegion[id].sid;

    }
    if (t == "C" && djdarea.curCitys) {
        for (var o in djdarea.curCitys) {
            if (djdarea.curCitys[o].IdCity == id) return djdarea.curCitys[o].SkuId;

        }

    }
    return 0;

};
djdarea.initStock = function(v) {
    $("#store-selector .content").html("<select id='djdStockOpt' class='select1' size='10'></select><select id='djdCityOpt' class='select2' size='10'></select><select id='djdAreaOpt' class='select3' size='10'></select><span class='clr'></span>");
    djdarea.provinceDom = $("#djdStockOpt");
    djdarea.cityDom = $("#djdCityOpt");
    djdarea.areaDom = $("#djdAreaOpt");
    djdarea.stockInfoDom = $("#store-prompt");
    djdarea.selectAreaDom = $("#store-selector .text div");
    djdarea.djdStockDom = $("#store-selector");
    djdarea.djdAreaDom = $("#store-selector .content");
    var array = v.split("-");
    djdarea.bindAreaDom("P", array.length > 0 ? array[0] : "1");
    djdarea.provinceDom.change(function() {
        djdarea.bindAreaDom("C", "0");
    });
    djdarea.bindAreaDom("C", array.length > 1 ? array[1] : "-1");
    djdarea.cityDom.change(function() {
        djdarea.bindAreaDom("A", "0");
    });
    djdarea.bindAreaDom("A", array.length > 2 ? array[2] : "-1");
    djdarea.areaDom.change(function() {
        djdarea.bindAreaDom("A-B", djdarea.areaDom.val());
    });

};
var DoOrder = function(pid) {
    $.login({
        modal: true,
        complete: function(result) {
            if (result != null && result.IsAuthenticated != null && result.IsAuthenticated) {
                var num = $.trim($("#buy-num").val());
                $.ajax({
                    url: "http://buy.360buy.com/purchase/flows/easybuy/FlowService.ashx",
                    type: "get",
                    data: {
                        action: "SubmitOrderByDefaultTemplate",
                        skuId: pid || pageConfig.product.skuid,
                        num: $("#buy-num").val()

                    },
                    dataType: "jsonp",
                    success: function(r) {
                        if (r.Flag) {
                            window.location = r.Obj;

                        }
                        else {
                            $.easybuy_button.show();
                            if (r.Message != null) {
                                alert(r.Message);

                            }
                            else {
                                alert("暂时无法提交,请您稍后重试!");

                            }

                        }

                    }

                })

            }
            else {
                $.easybuy_button.show();

            }

        }

    })

};
function initEasyBuy() {
    var productId = null;
    if ($("#choose-btn-append .btn-append").css("display") != "none") {
        productId = parseInt(pageConfig.product.skuid);
        var eb = readCookie("eb");
        if (eb == 1 || eb == null || eb == undefined) {
            $.ajax({
                url: "http://buy.360buy.com/purchase/flows/easybuy/FlowService.ashx",
                type: "get",
                data: {
                    action: "CanBuy",
                    skuId: productId

                },
                dataType: "jsonp",
                success: function(r) {
                    $.easybuy_button.html("");
                    if (r.Flag) {
                        $.easybuy_button.html("<a class='btn-easybuy' href='#'>轻松购<b></b></a>");
                        $("#choose-btn-easybuy .btn-easybuy").click(function() {
                            $.easybuy_button.hide();
                            $.extend(jdModelCallCenter.settings, {
                                clstag1: 0,
                                clstag2: 0,
                                id: productId,
                                fn: function() {
                                    DoOrder(this.id);

                                }

                            });
                            jdModelCallCenter.settings.fn()

                        })

                    }

                }

            })

        }

    }

};
function DataBulider() {
    var areaname = "",
    option = null;
    option = djdarea.provinceDom.find("option[value='" + djdarea.curAreaSku[0] + "']");
    if (option.length > 0) areaname = $(option[0]).html();
    option = djdarea.cityDom.find("option[value='" + djdarea.curAreaSku[1] + "']");
    if (option.length > 0) areaname += $(option[0]).html();
    option = djdarea.areaDom.find("option[value='" + djdarea.curAreaSku[2] + "']");
    if (option.length > 0) {
        var area = $(option[0]).html();
        areaname += area.substring(0, area.indexOf("(") == -1 ? area.length: area.indexOf("(")).substring(0, area.indexOf("（") == -1 ? area.length: area.indexOf("（"));

    }
    if (areaname.length > 16) areaname = areaname.substring(0, 16);
    djdarea.selectAreaDom.html(areaname);
    var skuid = djdarea.curAreaSku[3];
    var skuidkey = djdarea.curAreaSku[4];
    if (djdLimit[djdarea.curAreaSku[0]] && skuid.length == 6) {
        getProvinceStockCallback({
            stock: {
                S: ""
            }
        });
        djdarea.oldskuid = 0;
        $.divide_button.hide();
        if (djdarea.pageload) djdarea.pageload = false;
        return;

    }
    if (skuid == "0" || skuidkey == "") {
        getProvinceStockCallback({
            stock: {
                S: ""
            }
        });
        djdarea.oldskuid = 0;
        $.divide_button.hide();
        if (djdarea.pageload) djdarea.pageload = false;
        return;

    }
    setProviceStock(skuidkey, skuid);
    //库存信息
    if (!djdarea.oldskuid || djdarea.oldskuid != skuid) {
        setPriceData(skuid);
        //改变价格
        setCXAdvertisement(skuid, skuidkey);
        //广告词
        initEasyBuy();
        //轻松购

    }
    if (djdarea.pageload) {
        djdarea.pageload = false;

    } else {
        try {
            if (djdarea.oldskuid != skuid) {
                if (window.refreshPack) {
                    $("#choose-btn-subsidy").remove();
                    refreshPack();
                }
                //促销信息
                if (window.fq_init) fq_init();
                if ($("#Tip_apply").length > 0 && fq_serverSite) $("#Tip_apply").attr("href", fq_serverSite + "ShoppingCart_fqInit.aspx?skuId=" + pageConfig.product.skuid + "&skuCount=1");
                //分期
                $.divide_button.html("");
                if (window.setIM) setIM();

            }

        } catch(e) {
            }

    }
    djdarea.oldskuid = pageConfig.product.skuid;

}
function setPriceData(skuid) {
    $("#summary-price .p-price").html("<img src=\"http://price.360buyimg.com/gp" + skuid + ",3.png\" onerror=\"this.src='http://www.360buy.com/images/no2.gif';\" />");

}
function setProviceStock(skuidkey, skuid) {
    $.getJSONP("http://price.360buy.com/stocksoa/StockHandler.ashx?callback=getProvinceStockCallback&type=" + (!window.__special_type ? "pcastock": "ststock") + "&skuid=" + skuidkey + "&provinceid=" + djdarea.curAreaSku[0]
    + "&cityid=" + djdarea.curAreaSku[1] + "&areaid=" + djdarea.curAreaSku[2], getProvinceStockCallback);

}
// 标题广告词
function setAdvertisement(skuidkey) {
    $.ajax({
        url: 'http://www.360buy.com/ajaxService.aspx?stype=single&skuid=' + skuidkey,
        dataType: 'jsonp',
        success: function(data) {
            if (data && data.html) {
                $("#name strong").html(data.html);

            }

        }

    })

}
function setCXAdvertisement(skuid, skuidkey) {
    $("#name strong").html("");
    $.ajax({
        url: "http://price.360buy.com/AdWordHandler.ashx?callback=?&skuid=" + skuid,
        dataType: "jsonp",
        error: function() {
            setAdvertisement(skuidkey);

        },
        success: function(r) {
            if (r && r.result) {
                $("#name strong").html(r.result);

            }
            else {
                setAdvertisement(skuidkey);

            }

        }

    });

}
 (function() {
    var GeoIpService = "http://price.360buy.com/ows/GetIPLocation.aspx";
    var Location = "1-72-2799";
    var cName = "ipLoc-djd";
    var ck = getCookie(cName);
    if (ck) {
        var locarray = ck.split("-");
        if (locarray && locarray.length > 2 && locarray[2] == "0" && locarray[1] != "0" && locarray[0] != "0") {
            ck = locarray[0] + "-" + locarray[1];

        }
        else if (locarray && locarray.length > 1 && locarray[1] == "0" && locarray[0] != "0") {
            ck = Location;

        }
        else if (locarray && locarray.length > 0 && locarray[0] == "0") {
            ck = Location;

        }
        djdarea.initStock(ck);

    } else {
        $.ajax({
            type: "GET",
            url: GeoIpService,
            dataType: "jsonp",
            success: function(result) {
                if (result.ip) {
                    Location = djdarea.getProCitIdByName(result.ip);
                    if (Location) setCookie(cName, Location, 30, "/", "360buy.com", false);

                }
                djdarea.initStock(Location);

            }

        });

    }

})();
$.haveShow = 0;
$.getShopUrl = function(r) {
    if (r.url) return r.url;
    var id = r.id;
    return "http://mall.360buy.com/index-" + id + ".html";
};
$.getDeliver = function(r, s) {
    $("#summary-service").html("");
    $("#seller-enter").remove();
    if (pageConfig.product.skuid > 1000000000) {
        if (r && r.deliver) {
            var unshowtypes = "0,1,2,4,5";
            if (unshowtypes.indexOf(r.type) != -1) {
                if ($("#summary-service").length == 0) {
                    $("<li id='summary-service'></li>").insertAfter("#summary-stock");
                }
                if (r.type == 0) {
                    $("<div class='dt'>服\u3000\u3000务：</div><div class='dd'>此商品" + (pageConfig.product.yfinfo && pageConfig.product.yfinfo.nofree ? "运费": "") + "由<a href='"
                    + $.getShopUrl(r) + "' target='_blank' clstag='shangpin|keycount|product|bbtn'>" + r.vender + "</a>" + (pageConfig.product.yfinfo && pageConfig.product.yfinfo.nofree ? "收取": "提供") + "，并负责配送及开具发票</div>").appendTo("#summary-service");
                    if (r.linkphone) {
                        $("#sellerphone").remove();
                        $("#evaluate").after("<p id='sellerphone' style=' clear: both;overflow: hidden;padding: 10px 0 0 10px;'><em class='dt'>服务电话：</em><em>" + r.linkphone + "</em></p>");
                    }

                }
                else if (r.type == 1) {
                    $("<div class='dt'>服\u3000\u3000务：</div><div class='dd'>本商品由<a href='" + $.getShopUrl(r) + "' target='_blank' clstag='shangpin|keycount|product|bbtn'>" + r.vender + "</a>提供，由京东商城负责配送及开具发票</div>").appendTo("#summary-service");

                }
                else if (r.type == 2) {
                    $("<div class='dt'>服\u3000\u3000务：</div><div class='dd'>本商品由<a href='" + $.getShopUrl(r) + "' target='_blank' clstag='shangpin|keycount|product|bbtn'>" + r.vender + "</a>提供，由京东商城负责配送及开具发票</div>").appendTo("#summary-service");

                }
                else if (r.type == 5) {
                    $("<div class='dt'>服\u3000\u3000务：</div><div class='dd'>本商品发票由<a href='" + $.getShopUrl(r) + "' target='_blank' clstag='shangpin|keycount|product|bbtn'>" + r.vender + "</a>提供，由京东商城负责配送</div>").appendTo("#summary-service");

                }
                if (pageConfig.product.yfinfo && pageConfig.product.yfinfo.service) {
                    $("<div class='dt'>\u3000\u3000</div><div class='dd'>" + pageConfig.product.yfinfo.service + "</div>").appendTo("#summary-service");

                }
                if (r.type != 4) {
                    $("#summary-service").show();
                    $("#brand-bar .seller-link").html("<em class='dt'>卖&nbsp;&nbsp;&nbsp;&nbsp;家：</em><a href='" + $.getShopUrl(r) + "' target='_blank' clstag='shangpin|keycount|product|bbtn'>" + r.vender + "</a>");
                    if ($("#brand-bar .seller-btn").length == 0) $("<div class='seller-btn clearfix'></div>").appendTo("#brand-bar .seller");
                    $("<a id='seller-enter' href='" + $.getShopUrl(r) + "' target='_blank' clstag='shangpin|keycount|product|bbtn'>进入卖家店铺</a>").appendTo("#brand-bar .seller-btn");

                }
                $.changeServiceInfo(r.type == 0 ? 2: 3);

            }

        }

    }
    else {
        $("#brand-bar .seller-link").html("<em class='dt'>卖&nbsp;&nbsp;&nbsp;&nbsp;家：</em><a href='#none'>京东商城</a>");
        $("#summary-service").show();
        var array = s.split("-");
        if (array[5] && array[5] == "1") {
            $("<div class='dt'>服\u3000\u3000务：</div><div class='dd'>本商品由厂家提供和配送，由京东商城开具发票</div>").appendTo("#summary-service");

        } else if (array[5] && array[5] == "2") {
            $("<div class='dt'>服\u3000\u3000务：</div><div class='dd'>本商品由<a href='#'>京东商城</a>提供并配送，运营商开具发票</div>").appendTo("#summary-service");

        } else {
            $("<div class='dt'>服\u3000\u3000务：</div><div class='dd'>本商品由<a href='#'>京东商城</a>提供，并负责配送及开具发票</div>").appendTo("#summary-service");

        }
        $.changeServiceInfo(1);

    }
    $("#brand-bar .seller").show();

};
$.changeServiceInfo = function(type) {
    var txt1 = "<b></b><span>货到</span><span>付款</span>",
    txt3 = "<b></b><span>满39</span><span>免运费</span>",
    txt5 = "<b></b><span>售后</span><span>上门</span>";
    var url1 = "http://help.360buy.com/help/question-67.html",
    url3 = "http://help.360buy.com/help/question-65.html",
    url5 = "http://help.360buy.com/help/question-97.html",
    urlp3 = "_blank",
    urlp5 = "_blank";
    if (type == 1) {
        //self
        } else if (type == 2) {
        //sop
        txt1 = "<b></b><span>在线</span><span>支付</span>";
        txt3 = "<b></b><span>厂家</span><span>直送</span>";
        txt5 = "<b></b><span>7天</span><span>退换</span>";
        url1 = "http://help.360buy.com/help/question-68.html";
        url3 = "#none";
        url5 = "#none";
        urlp3 = "_self";
        urlp5 = "_self";

    } else if (type == 3) {
        //other
        txt1 = "<b></b><span>货到</span><span>付款</span>";
        txt3 = "<b></b><span>满39</span><span>免运费</span>";
        txt5 = "<b></b><span>7天</span><span>退换</span>";
        url1 = "http://help.360buy.com/help/question-67.html";
        url3 = "http://help.360buy.com/help/question-65.html";
        url5 = "#none";
        urlp5 = "_self";

    }
    $("#brand-bar .fore1 a").html(txt1).attr("href", url1);
    $("#brand-bar .fore3 a").html(txt3).attr("href", url3).attr("target", urlp3);
    $("#brand-bar .fore5 a").html(txt5).attr("href", url5).attr("target", urlp5);

}
//stock
function getProvinceStockCallback(result) {
    pageConfig.product.yfinfo = {
        nofree: false,
        cash: null
    };
    if (result.stock.D && result.stock.D.prompt) {
        var proarray = result.stock.D.prompt.split("|");
        if (proarray[0] && new Number(proarray[0]) > 0) {
            pageConfig.product.yfinfo = {
                nofree: true,
                cash: proarray[0]
            };

        }
        if (proarray[1]) {
            pageConfig.product.yfinfo.service = proarray[1];

        }

    }
    //if(result.stock.D&&result.stock.D.prompt&&(new Number(result.stock.D.prompt))>0)pageConfig.product.yfinfo={nofree:true,cash:result.stock.D.prompt};
    $.getDeliver(result.stock.D, result.stock.S);
    if (result.stock && !result.stock.S) {
        changeCart(false);
        djdarea.stockInfoDom.html("<strong>该地区暂不支持购买</strong>");
        setPriceData("noprice");

    }
    else if (result.stock && result.stock.S) {
        var array = result.stock.S.split("-");
        var cashdesc = pageConfig.product.yfinfo.nofree ? "，<span style='cursor:pointer' title='一个店铺购买多件商品，只收取一次运费'>运费：<span style='color:#f00;'>￥" + pageConfig.product.yfinfo.cash + "</span><span>": "";
        if (array[1] == "34" || array[1] == "18") {
            changeCart(false);
            djdarea.stockInfoDom.html("<strong class='store-over'>无货</strong>");

        }
        else if (array[1] == "0") {
            changeCart(false);
            djdarea.stockInfoDom.html("<strong class='store-over'>无货</strong>");

        }
        else if (array[2] == "0" && array[4] != "2") {
            changeCart(false);
            djdarea.stockInfoDom.html("很抱歉，该商品无法送至您选择的区域");

        }
        else if (array[1] == "33" || array[1] == "5") {
            changeCart(true);
            djdarea.stockInfoDom.html("<strong>现货</strong>" + (array[4] == "1" ? "，该区域" + (array[3] == "0" ? "不": "") + "支持货到付款": "") + cashdesc);

        }
        else if (array[1] == "36") {
            changeCart(true);
            djdarea.stockInfoDom.html("<strong>预订</strong>" + (array[4] == "1" ? "，该区域" + (array[3] == "0" ? "不": "") + "支持货到付款": "") + cashdesc);

        }
        else if (array[1] == "39") {
            changeCart(true);
            djdarea.stockInfoDom.html("<strong>在途</strong>" + (array[4] == "1" ? "，该区域" + (array[3] == "0" ? "不": "") + "支持货到付款": "") + cashdesc);

        }
        else if (array[1] == "40") {
            changeCart(true);
            djdarea.stockInfoDom.html("<strong>可配货</strong>" + (array[4] == "1" ? "，该区域" + (array[3] == "0" ? "不": "") + "支持货到付款": "") + cashdesc);

        }

    }
    $("#pop_temp_top").remove();
    $("#pop_temp_bottom").remove();
    if (pageConfig.product.skuid > 1000000000) {
        if (!window._showPopTemplete) {
            window._showPopTemplete = function(r) {
                if (r && r.wareTemplateContent) $("<div id='pop_temp_top'>" + r.wareTemplateContent + "</div>").insertBefore("#product-detail-1 .detail-content:first");
                if (r && r.wareTemplateBottomContent) $("<div id='pop_temp_bottom'>" + r.wareTemplateBottomContent + "</div>").insertAfter("#product-detail-1 .detail-content:last");

            };

        }
        $.getJSONP("http://rms.shop.360buy.com/json/wareTemplate/queryWareTemplateContent.action?skuId=" + pageConfig.product.skuid + "&jsoncallback=_showPopTemplete", _showPopTemplete);

    }

}
function chooseType() {
    var shoppingselect = $('#choose-type .item'),
    amount = $('#choose-amount'),
    buyLink = $('#choose-btn-append .btn-append'),
    selectItem = $('#choose-type .selected').eq(0);
    if (shoppingselect.length > 0) {
        amount.hide();

    }
    shoppingselect.bind('click', 
    function(i) {
        if ($('#choose-btn-append').hasClass('disabled')) {
            return false;

        }
        var data = $(this).attr('data').split('|'),
        link = buyLink.attr('href');
        var newlink = data[1].replace(/wid=\d{6,}/, 'wid=' + pageConfig.product.skuid);
        shoppingselect.removeClass('selected');
        $(this).addClass('selected');
        $('#choose .result').html(data[0]);
        amount.addClass(data[2]);
        buyLink.attr('href', newlink);

    });
    if (selectItem.length > 0) {
        var data = selectItem.attr('data').split('|'),
        newlink = data[1].replace(/wid=\d{6,}/, 'wid=' + pageConfig.product.skuid);
        buyLink.attr('href', newlink);

    }
    if (shoppingselect.length == 1 && selectItem.length < 1) {
        shoppingselect.addClass('selected');
        buyLink.attr('href', shoppingselect.attr('data').split('|')[1]);

    }

}
function changeCart(canbuy) {
    if (canbuy) {
        if (pageConfig && pageConfig.product) pageConfig.product.isStock = true;
        $("#choose-btn-append").removeClass("disabled");
        if ($("#choose-btn-subsidy .btn-subsidies").length > 0) $("#choose-btn-append").addClass("choose-btn-append-lite");
        $("#product-intro").attr("class", "");
        $.easybuy_button.show();
        $.divide_button.show();
        if ($("#choose-btn-append .btn-append").length > 0) {
            if ($('#choose-type .item').length > 0) {
                chooseType();
                $("#choose-btn-append .btn-append").attr("onclick", "").unbind("click").click(function() {
                    mark(djdarea.curAreaSku[3], 2)
                });
                //购物车

            }
            else {
                $("#choose-btn-append .btn-append").attr("href", "http://gate.360buy.com/InitCart.aspx?pid=" + djdarea.curAreaSku[3] + "&pcount=1&ptype=1").attr("onclick", "").unbind("click").click(function() {
                    /*BuyUrl(djdarea.curAreaSku[3]);*/
                    mark(djdarea.curAreaSku[3], 2)
                });
                //购物车

            }

        }
        if ($(".nav-minicart-btn").length > 0) $(".nav-minicart-btn").show();
        //mini购物车
        $("#choose-btn-subsidy").show();

    } else {
        if (pageConfig && pageConfig.product) pageConfig.product.isStock = false;
        $("#choose-btn-append").addClass("disabled").removeClass('choose-btn-append-lite');
        $("#product-intro").attr("class", "product-intro-noitem");
        $.easybuy_button.hide();
        $.divide_button.hide();
        if ($("#choose-btn-append .btn-append").length > 0) $("#choose-btn-append .btn-append").attr("href", "#none").attr("onclick", "").unbind("click");
        //购物车
        if ($(".nav-minicart-btn").length > 0) $(".nav-minicart-btn").hide();
        //mini购物车
        $("#choose-btn-subsidy").hide();

    }

}
//cookie operate
function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) return unescape(arr[2]);
    return null;
}
function setCookie(name, value, expires, path, domain, secure) {
    if (!path) {
        path = "/"
    }
    if (!domain) {
        domain = "360buy.com"
    }
    if (!secure) {
        secure = false
    }
    var today = new Date();
    today.setTime(today.getTime());
    if (expires) {
        expires = expires * 1000 * 60 * 60 * 24
    }
    var expires_date = new Date(today.getTime() + (expires));
    document.cookie = name + '=' + escape(value) + ((expires) ? ';expires=' + expires_date.toGMTString() : '') + ((path) ? ';path=' + path: '') + ((domain) ? ';domain=' + domain: '') + ((secure) ? ';secure': '')
};
function deleteCookie(name, path, domain) {
    if (getCookie(name)) document.cookie = name + '=' + ((path) ? ';path=' + path: '') + ((domain) ? ';domain=' + domain: '') + ';expires=Thu, 01-Jan-1970 00:00:01 GMT'
};
//颜色尺码
var choose_color = $("#choose-color a");
var choose_colori = $("#choose-color .item");
var choose_version = $("#choose-version .item");
var alert_choose_version = $("#choose-version .dt").html();
alert_choose_version = alert_choose_version ? alert_choose_version.replace("：", "") : "";
var alert_choose_color = $("#choose-color .dt").html();
alert_choose_color = alert_choose_color ? alert_choose_color.replace("：", "") : "";
var alert_choose = "所选" + alert_choose_color.replace("选择", "") + "该" + alert_choose_version.replace("选择", "") + "商品无货";
var csobj = {};
var scobj = {};
if (choose_color.length > 0 && choose_version.length > 0) {
    if (ColorSize && ColorSize.length > 0) {
        var cs = null;
        for (var i = 0, j = ColorSize.length; i < j; i++) {
            cs = ColorSize[i];
            if (!csobj[cs.Color]) csobj[cs.Color] = {};
            csobj[cs.Color][cs.Size] = cs.SkuId;
            if (!scobj[cs.Size]) scobj[cs.Size] = {};
            scobj[cs.Size][cs.Color] = cs.SkuId;

        }

    }
    function checkColorSize(c, s) {
        if (csobj[c] && csobj[c][s])
        return csobj[c][s];
        return 0;

    }
    function changeColorSize(flag) {
        var cur_color = $("#choose-color .selected a").attr("title");
        if (cur_color && csobj[cur_color]) {
            var version = null;
            var choose_version_obj = null;
            for (var i = 0, j = choose_version.length; i < j; i++) {
                choose_version_obj = $($(choose_version[i]).find("a")[0]);
                version = choose_version_obj.html();
                if (! (version && csobj[cur_color][version])) {
                    $(choose_version[i]).attr("class", "item disabled");
                    $(choose_version[i]).find("b").hide();
                    choose_version_obj.css("cursor", "not-allowed").attr("title", alert_choose);

                }
                else {
                    if ($(choose_version[i]).attr("class") == "item disabled") $(choose_version[i]).attr("class", "item");
                    $(choose_version[i]).find("b").show();
                    choose_version_obj.css("cursor", "pointer").attr("title", choose_version_obj.html());

                }
                $(choose_version[i]).find("i").remove();

            }

        }
        var cur_version = $("#choose-version .selected a").html();
        if (cur_version && scobj[cur_version]) {
            var color = null;
            for (var i = 0, j = choose_colori.length; i < j; i++) {
                color = $($(choose_colori[i]).find("a")[0]).attr("title");
                if (! (color && scobj[cur_version][color])) {
                    $(choose_colori[i]).attr("class", "item disabled");
                    $(choose_colori[i]).find("b").hide();

                }
                else {
                    if ($(choose_colori[i]).attr("class") == "item disabled") $(choose_colori[i]).attr("class", "item");
                    $(choose_colori[i]).find("b").show();

                }

            }

        }
        else {
            $("#choose-color .disabled").attr("class", "item");

        }
        $("<i></i>").insertBefore("#choose-version .disabled a");
        if (!flag) {
            $("#choose-result .dd").html("<em>已选择</em>" + (cur_color ? "<strong>“" + cur_color + "”</strong>": "") + (cur_color && cur_version ? "，": "") + (cur_version ? "<strong>“" + cur_version + "”</strong>": "")
            + (cur_color ? "": "<span class='item-warnning'><s></s>请" + alert_choose_color + "</span>") + (cur_version ? "": "<span class='item-warnning'><s></s>请" + alert_choose_version + "</span>"));
            $("#choose-color").attr("class", cur_color ? "": "item-hl-bg");
            $("#choose-version").attr("class", cur_version ? "": "item-hl-bg");
            if ($("#choose-noresult").length > 0) {
                $("#choose-noresult").remove();
            }
            $.easybuy_button.hide();
            $.divide_button.hide();
            $.notice_button.hide();
            if ($.append_button.length > 0) $.append_button.attr("href", "#none").attr("onclick", "").unbind("click");
            //购物车
            if ($(".nav-minicart-btn").length > 0) $(".nav-minicart-btn").hide();
            //mini购物车
            $("#choose-btn-subsidy").hide();

        }

    }
    changeColorSize(true);
    $("#choose-color a").attr("href", "#none").unbind("click").click(function() {
        $("#choose-color .selected").attr("class", "item");
        $($(this).parent()).attr("class", "item selected");
        var c = $(this).attr("title");
        var s = $("#choose-version .selected a");
        if (s.length > 0) {
            s = s.html()
        } else {
            s = null
        }
        var sid = 0;
        sid = checkColorSize(c, s);
        if (sid > 0) {
            window.location = "http://www.360buy.com/product/" + sid + ".html";
        } else {
            changeColorSize();

        }

    });
    $("#choose-version a").attr("href", "#none").unbind("click").click(function() {
        if ($($(this).parent()).attr("class") == "item disabled") return;
        var s = $(this).html();
        var c = $("#choose-color .selected a");
        if (c.length > 0) {
            c = c.attr("title")
        } else {
            c = null
        }
        var sid = 0;
        sid = checkColorSize(c, s);
        if (sid > 0) {
            window.location = "http://www.360buy.com/product/" + sid + ".html";
        } else {
            changeColorSize();

        }

    });

}
/***************/
/* 图片滚动 */
 (function(a) {
    a.fn.imgScroll = function(b) {
        return this.each(function() {
            var d = a.extend({
                evtType: "click",
                visible: 1,
                showControl: true,
                showNavItem: false,
                navItemEvtType: "click",
                navItemCurrent: "current",
                showStatus: false,
                direction: "x",
                next: ".next",
                prev: ".prev",
                disableClass: "disabled",
                speed: 300,
                loop: false,
                step: 1
            },
            b);
            var j = a(this),
            o = j.find("ul"),
            n = o.find("li"),
            s = n.length,
            c = d.visible,
            h = d.step,
            g = parseInt((s - c) / h),
            t = 0,
            k = j.css("position") == "absolute" ? "absolute": "relative",
            u = n.css("float") !== "none",
            r = a('<div class="scroll-nav-wrap"></div>'),
            e = d.direction == "x" ? "left": "top",
            i = d.direction == "x",
            p = typeof d.prev == "string" ? a(d.prev) : d.prev,
            q = typeof d.next == "string" ? a(d.next) : d.next;
            d.loop = false;
            function m() {
                if (!u) {
                    n.css("float", "left")
                }
                o.css({
                    position: "absolute",
                    left: 0,
                    top: 0
                });
                j.css({
                    position: k,
                    width: d.direction == "x" ? c * n.outerWidth() : n.outerWidth(),
                    height: d.direction == "x" ? n.outerHeight() : c * n.outerHeight(),
                    overflow: "hidden"
                });
                p.addClass(d.disableClass + " disableIE6");
                if (d.loop) {} else {
                    if ((s - c) % h !== 0 && s > c) {
                        var x = h - (s - c) % h;
                        o.append(n.slice(0, x).clone());
                        s = o.find("li").length;
                        g = parseInt((s - c) / h)
                    }
                }
                if (i) {
                    o.css("width", s * n.outerWidth())
                } else {
                    o.css("height", s * n.outerHeight())
                }
                if (!d.showControl && s <= c) {
                    a(d.next + "," + d.prev).hide()
                }
                if (s <= c) {
                    a(d.next + "," + d.next).addClass(d.disableClass)
                } else {
                    p.addClass(d.disableClass);
                    q.removeClass(d.disableClass)
                }
                if (d.showNavItem) {
                    for (var v = 0; v <= g; v++) {
                        var w = v == 0 ? d.navItemCurrent: "";
                        r.append('<em class="' + w + '">' + (v + 1) + "</em>")
                    }
                    j.after(r);
                    r.find("em").bind(d.navItemEvtType, 
                    function() {
                        var y = parseInt(this.innerHTML);
                        f((y - 1) * h)
                    })
                }
                if (d.showStatus) {
                    j.after('<span class="scroll-status">' + 1 + "/" + (g + 1) + "</span>")
                }
            }
            function f(v) {
                if (o.is(":animated")) {
                    return false
                }
                if (v < 0) {
                    p.addClass(d.disableClass + " disableIE6");
                    return false
                }
                if (v + c > s) {
                    q.addClass(d.disableClass);
                    return false
                }
                t = v;
                o.animate(d.direction == "x" ? {
                    left: -((v) * n.outerWidth())
                }: {
                    top: -((t) * n.outerHeight())
                },
                d.speed, 
                function() {
                    if (v > 0) {
                        p.removeClass(d.disableClass + " disableIE6")
                    } else {
                        p.addClass(d.disableClass + " disableIE6")
                    }
                    if (v + c < s) {
                        q.removeClass(d.disableClass)
                    } else {
                        q.addClass(d.disableClass)
                    }
                    l(v)
                })
            }
            function l(v) {
                r.find("em").removeClass(d.navItemCurrent).eq(v / h).addClass(d.navItemCurrent);
                if (d.showStatus) {
                    a(".scroll-status").html(((v / h) + 1) + "/" + (g + 1))
                }
            }
            m();
            if (s > c) {
                q.click(function() {
                    f(t + h)
                });
                p.click(function() {
                    f(t - h)
                })
            }
        })
    }
} (jQuery));
/* ---------- 埋点公用 ---------- */
function log(type1, type2, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
    var data = '';
    for (i = 2; i < arguments.length; i++) {
        data = data + arguments[i] + '|||';

    }
    var pin = decodeURIComponent(escape(getCookie("pin")));
    var loguri = "http://csc.360buy.com/log.ashx?type1=$type1$&type2=$type2$&data=$data$&pin=$pin$&referrer=$referrer$&jinfo=$jinfo$&callback=?";
    var url = loguri.replace(/\$type1\$/, escape(type1));
    url = url.replace(/\$type2\$/, escape(type2));
    url = url.replace(/\$data\$/, escape(data));
    url = url.replace(/\$pin\$/, escape(pin));
    url = url.replace(/\$referrer\$/, escape(document.referrer));
    url = url.replace(/\$jinfo\$/, escape(''));
    $.getJSON(url, 
    function() {});

}
/**
* 新版-点击流统计-页面pv和显示次数
* wpid 主商品三级分类，没有为空串''
* psku 主商品sku，没有为空串''，根据它来判断此商品为pop还是非pop
* markId 推荐位标记，找张斌要
* op s:显示、p:pv
*/
function clsPVAndShowLog(wpid, psku, markId, op) {
    var key = wpid + "." + markId + "." + skutype(psku) + "." + op;
    log('d', 'o', key);

}
function clsClickLog(wpid, psku, rsku, markId, num, reCookieName) {
    var key = wpid + "." + markId + "." + skutype(psku);
    appendCookie(reCookieName, rsku, key);
    log('d', 'o', key + ".c");

}
function appendCookie(reCookieName, sku, key) {
    var reWidsCookies = eval('(' + getCookie(reCookieName) + ')');
    if (reWidsCookies == null || reWidsCookies == '') {
        reWidsCookies = new Object();

    }
    if (reWidsCookies[key] == null) {
        reWidsCookies[key] = '';

    }
    var pos = reWidsCookies[key].indexOf(sku);
    if (pos < 0) {
        reWidsCookies[key] = reWidsCookies[key] + "," + sku;

    }
    setCookie(reCookieName, $.toJSON(reWidsCookies), 15);

}
function skutype(sku) {
    if (sku) {
        var len = sku.toString().length;
        return len == 10 ? 1: 0;

    }
    return 0;

}
function setCookie(name, value, date) {
    var Days = date;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/;domain=.360buy.com";

}
function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) return unescape(arr[2]);
    return null;

}
function reClick(type2, pwid, sku, num) {
    name = "reWids" + type2;
    reWids = getCookie(name);
    if (reWids != null) {
        reWids = reWids.toString();
        var pos = reWids.indexOf(sku);
        if (pos < 0) {
            reWids = reWids + "," + sku;

        }

    }
    else {
        reWids = sku;

    }
    setCookie(name, reWids, 15);
    sku = sku.split("#");
    log(3, type2, sku[0]);
    //log('RC', 'CK', type2, pwid, sku[0], num);

}
function readPinCookie(name) {
    //读取cookies函数
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) return arr[2];
    return '';

}
/**
* 点击流统计，调用例如：clsLog("3425&special","","174620#988",4,"reWidsBookSpecial")
* @param type2 三级分类
* @param pwid 当前商品wid，没有为空串''
* @param sku 推荐商品wid
* @param num 位置，从0开始
* @param reCookieName cookieName
*/
function clsLog(type2, pwid, sku, num, reCookieName) {
    //console.info(type2+"_"+pwid+"_"+sku+"_"+num + "_" + reCookieName);
    var reWidsClubCookies = eval('(' + getCookie(reCookieName) + ')');
    if (reWidsClubCookies == null || reWidsClubCookies == '') {
        reWidsClubCookies = new Object();

    }
    if (reWidsClubCookies[type2] == null) {
        reWidsClubCookies[type2] = '';

    }
    var pos = reWidsClubCookies[type2].indexOf(sku);
    if (pos < 0) {
        reWidsClubCookies[type2] = reWidsClubCookies[type2] + "," + sku;

    }
    setCookie(reCookieName, $.toJSON(reWidsClubCookies), 15);
    sku = sku.split("#");
    log(3, type2, sku[0]);
    //log('RC', 'CK', type2, pwid, sku[0], num);

}
function mark(b, a) {
    log(1, a, b);
}
/* ---------- 埋点公用 end ---------- */
