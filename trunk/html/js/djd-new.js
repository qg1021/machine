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
    "����": {
        id: 1,
        c: {
            "������": 72,
            "������": 2800,
            "������": 2801,
            "������": 2802,
            "������": 2803,
            "������": 2804,
            "��̨��": 2805,
            "ʯ��ɽ��": 2806,
            "��ͷ��": 2807,
            "��ɽ��": 2808,
            "ͨ����": 2809,
            "������": 2810,
            "˳����": 2812,
            "������": 2814,
            "������": 2816,
            "��ƽ��": 2901,
            "ƽ����": 2953,
            "������": 3065
        }
    },
    "�Ϻ�": {
        id: 2,
        c: {
            "������": 78,
            "¬����": 2811,
            "�����": 2813,
            "������": 2815,
            "������": 2817,
            "բ����": 2820,
            "�����": 2822,
            "������": 2823,
            "��ɽ��": 2824,
            "������": 2825,
            "�ζ���": 2826,
            "�ֶ�����": 2830,
            "������": 2833,
            "�ɽ���": 2834,
            "��ɽ��": 2835,
            "�ϻ���": 2836,
            "������": 2837,
            "������": 2841,
            "������": 2919
        }
    },
    "���": {
        id: 3,
        c: {
            "�����": 83
        }
    },
    "����": {
        id: 4,
        c: {
            "������": 87
        }
    },
    "�ӱ�": {
        id: 5,
        c: {
            "ʯ��ׯ��": 142,
            "������": 148,
            "��̨��": 164,
            "������": 199,
            "�żҿ���": 224,
            "�е���": 239,
            "�ػʵ���": 248,
            "��ɽ��": 258,
            "������": 264,
            "�ȷ���": 274,
            "��ˮ��": 275
        }
    },
    "ɽ��": {
        id: 6,
        c: {
            "̫ԭ��": 303,
            "��ͬ��": 309,
            "��Ȫ��": 318,
            "������": 325,
            "˷����": 330,
            "������": 336,
            "������": 350,
            "������": 368,
            "�ٷ���": 379,
            "�˳���": 398,
            "������": 3074
        }
    },
    "����": {
        id: 7,
        c: {
            "֣����": 412,
            "������": 420,
            "������": 427,
            "ƽ��ɽ��": 438,
            "������": 446,
            "�ױ���": 454,
            "������": 458,
            "������": 468,
            "�����": 475,
            "�����": 482,
            "�����": 489,
            "����Ͽ��": 495,
            "������": 502,
            "������": 517,
            "�ܿ���": 527,
            "פ�����": 538,
            "������": 549,
            "��Դ��": 2780
        }
    },
    "����": {
        id: 8,
        c: {
            "������": 560,
            "������": 573,
            "��ɽ��": 579,
            "��˳��": 584,
            "��Ϫ��": 589,
            "������": 593,
            "������": 598,
            "��«����": 604,
            "Ӫ����": 609,
            "�̽���": 613,
            "������": 617,
            "������": 621,
            "������": 625,
            "������": 632,
            "������": 4184
        }
    },
    "����": {
        id: 9,
        c: {
            "������": 639,
            "������": 644,
            "��ƽ��": 651,
            "ͨ����": 657,
            "��ɽ��": 664,
            "��ԭ��": 674,
            "�׳���": 681,
            "�ӱ߳�����������": 687,
            "�Ӽ���": 689,
            "��������": 2978,
            "��Դ��": 2992,
            "������": 4094
        }
    },
    "������": {
        id: 10,
        c: {
            "��������": 698,
            "���������": 712,
            "�׸���": 727,
            "˫Ѽɽ��": 731,
            "������": 737,
            "������": 742,
            "������": 753,
            "ĵ������": 757,
            "��ľ˹��": 765,
            "��̨����": 773,
            "�ں���": 776,
            "�绯��": 782,
            "���˰������": 793,
            "������": 2898,
            "������": 4099
        }
    },
    "���ɹ�": {
        id: 11,
        c: {
            "���ͺ�����": 799,
            "��ͷ��": 805,
            "�ں���": 810,
            "�����": 812,
            "�����첼��": 823,
            "���ֹ�����": 835,
            "���ױ�����": 848,
            "����ľ��": 862,
            "������˹��": 870,
            "�����׶���": 880,
            "��������": 891,
            "�˰���": 895,
            "ͨ����": 902
        }
    },
    "����": {
        id: 12,
        c: {
            "�Ͼ���": 904,
            "������": 911,
            "���Ƹ���": 919,
            "������": 925,
            "��Ǩ��": 933,
            "�γ���": 939,
            "������": 951,
            "̩����": 959,
            "��ͨ��": 965,
            "����": 972,
            "������": 978,
            "������": 984,
            "������": 988
        }
    },
    "ɽ��": {
        id: 13,
        c: {
            "������": 1000,
            "�ൺ��": 1007,
            "�Ͳ���": 1016,
            "��ׯ��": 1022,
            "��Ӫ��": 1025,
            "Ϋ����": 1032,
            "��̨��": 1042,
            "������": 1053,
            "������": 1058,
            "������": 1060,
            "������": 1072,
            "�ĳ���": 1081,
            "������": 1090,
            "������": 1099,
            "������": 1108,
            "̩����": 1112,
            "������": 2900
        }
    },
    "����": {
        id: 14,
        c: {
            "ͭ����": 1114,
            "�Ϸ���": 1116,
            "������": 1121,
            "������": 1124,
            "�ߺ���": 1127,
            "������": 1132,
            "��ɽ��": 1137,
            "��Ϳ��": 1139,
            "������": 1140,
            "��ɽ��": 1151,
            "������": 1159,
            "������": 1167,
            "������": 1174,
            "������": 1180,
            "�˳���": 1193,
            "������": 1201,
            "������": 1206,
            "������": 2971,
            "������": 4037
        }
    },
    "�㽭": {
        id: 15,
        c: {
            "������": 1158,
            "������": 1213,
            "������": 1233,
            "������": 1243,
            "������": 1250,
            "������": 1255,
            "����": 1262,
            "������": 1273,
            "��ˮ��": 1280,
            "̨����": 1290,
            "��ɽ��": 1298
        }
    },
    "����": {
        id: 16,
        c: {
            "������": 1303,
            "������": 1315,
            "������": 1317,
            "������": 1329,
            "Ȫ����": 1332,
            "������": 1341,
            "��ƽ��": 1352,
            "������": 1362,
            "������": 1370
        }
    },
    "����": {
        id: 17,
        c: {
            "�人��": 1381,
            "��ʯ��": 1387,
            "�差��": 1396,
            "ʮ����": 1405,
            "������": 1413,
            "�˲���": 1421,
            "Т����": 1432,
            "�Ƹ���": 1441,
            "������": 1458,
            "��ʩ����������������": 1466,
            "������": 1475,
            "������": 1477,
            "������": 1479,
            "Ǳ����": 2922,
            "������": 2980,
            "������": 2983,
            "�˶���": 2998,
            "������": 3063,
            "��ũ������": 3154,
            "��ʩ��": 4030,
            "�����": 4098
        }
    },
    "����": {
        id: 18,
        c: {
            "��ɳ��": 1482,
            "������": 1488,
            "��̶��": 1495,
            "��ɽ��": 1499,
            "������": 1501,
            "������": 1511,
            "������": 1522,
            "������": 1530,
            "�żҽ���": 1540,
            "������": 1544,
            "������": 1555,
            "������": 1560,
            "������": 1574,
            "¦����": 1586,
            "��������������": 1592,
            "������": 4250
        }
    },
    "�㶫": {
        id: 19,
        c: {
            "������": 1601,
            "������": 1607,
            "�麣��": 1609,
            "��ͷ��": 1611,
            "�ع���": 1617,
            "��Դ��": 1627,
            "÷����": 1634,
            "������": 1643,
            "��β��": 1650,
            "��ݸ��": 1655,
            "��ɽ��": 1657,
            "������": 1659,
            "��ɽ��": 1666,
            "������": 1672,
            "տ����": 1677,
            "ï����": 1684,
            "������": 1690,
            "�Ƹ���": 1698,
            "��Զ��": 1704,
            "������": 1705,
            "������": 1709
        }
    },
    "����": {
        id: 20,
        c: {
            "������": 1715,
            "������": 1720,
            "������": 1726,
            "������": 1740,
            "������": 1746,
            "���Ǹ���": 1749,
            "������": 1753,
            "�����": 1757,
            "������": 1761,
            "��������": 1768,
            "���ݵ���": 1781,
            "������": 1792,
            "��ɫ��": 1806,
            "�ӳ���": 1818,
            " ������": 3044,
            "������": 3168
        }
    },
    "����": {
        id: 21,
        c: {
            "�ϲ���": 1827,
            "��������": 1832,
            "Ƽ����": 1836,
            "������": 1842,
            "�Ž���": 1845,
            "ӥ̶��": 1857,
            "������": 1861,
            "�˴���": 1874,
            "������": 1885,
            "������": 1898,
            "������": 1911
        }
    },
    "�Ĵ�": {
        id: 22,
        c: {
            "�ɶ���": 1930,
            "�Թ���": 1946,
            "��֦����": 1950,
            "������": 1954,
            "������": 1960,
            "������": 1962,
            "��Ԫ��": 1977,
            "������": 1983,
            "�ڽ���": 1988,
            "��ɽ��": 1993,
            "�˱���": 2005,
            "�㰲��": 2016,
            "�ϳ���": 2022,
            "������": 2033,
            "������": 2042,
            "�Ű���": 2047,
            "üɽ��": 2058,
            "������": 2065,
            "���Ӳ���Ǽ��������": 2070,
            "���β���������": 2084,
            "��ɽ����������": 2103,
            "������": 4149,
            "�㺺��": 4249
        }
    },
    "����": {
        id: 23,
        c: {
            "������": 2121,
            "������": 3034,
            "����": 3115,
            "������": 3137,
            "������": 3173,
            "������": 3690,
            "�Ĳ���": 3698,
            "��ָɽ��": 3699,
            "�ٸ���": 3701,
            "������": 3702,
            "������": 3703,
            "�Ͳ���": 3704,
            "��������������": 3705,
            "��ɳ���������ء�": 3706,
            "������������������": 3707,
            "��ˮ����������": 3708,
            "��ͤ��������������": 3709,
            "�ֶ�����������": 3710,
            "������ɳȺ�����´����ؼ���": 3711
        }
    },
    "����": {
        id: 24,
        c: {
            "������": 2144,
            "����ˮ��": 2150,
            "������": 2155,
            "ͭ�ʵ���": 2169,
            "�Ͻڵ���": 2180,
            "��˳��": 2189,
            "ǭ���ϲ���������": 2196,
            "ǭ�������嶱��������": 2205,
            "ǭ�ϲ���������������": 2222
        }
    },
    "����": {
        id: 25,
        c: {
            "������": 2235,
            "������": 2247,
            "��Ϫ��": 2258,
            "��ͨ��": 2270,
            "�ն���": 2281,
            "�ٲ���": 2291,
            "��ɽ��": 2298,
            "��������": 2304,
            "��ɽ׳������������": 2309,
            "������������������": 2318,
            "��˫���ɴ���������": 2332,
            "��������������": 2336,
            "�������������": 2347,
            "�º���徰����������": 2360,
            "ŭ��������������": 2366,
            "�������������": 4108
        }
    },
    "����": {
        id: 26,
        c: {
            "����": 2951,
            "��������": 3107,
            "ɽ�ϵ���": 3129,
            "��������": 3138,
            "�տ������": 3144,
            "�������": 3970,
            "��֥����": 3971
        }
    },
    "����": {
        id: 27,
        c: {
            "������": 2376,
            "ͭ����": 2386,
            "������": 2390,
            "������": 2402,
            "μ����": 2416,
            "�Ӱ���": 2428,
            "������": 2442,
            "������": 2454,
            "������": 2468,
            "������": 2476
        }
    },
    "����": {
        id: 28,
        c: {
            "������": 2487,
            "�����": 2492,
            "������": 2495,
            "��ˮ��": 2501,
            "��������": 2509,
            "��������": 2510,
            "ƽ����": 2518,
            "������": 2525,
            "¤����": 2534,
            "������": 2544,
            "��Ҵ��": 2549,
            "��Ȫ��": 2556,
            "���ϲ���������": 2564,
            "������": 2573,
            "������": 3080,
            "������": 3122
        }
    },
    "�ຣ": {
        id: 29,
        c: {
            "������": 2580,
            "��������": 2585,
            "������": 2592,
            "������": 2597,
            "������": 2603,
            "�������������": 2605,
            "��������������": 2612,
            "������": 2620
        }
    },
    "����": {
        id: 30,
        c: {
            "������": 2628,
            "ʯ��ɽ��": 2632,
            "������": 2637,
            "��ԭ��": 2644,
            "������": 3071
        }
    },
    "�½�": {
        id: 31,
        c: {
            "��³ľ����": 2652,
            "����������": 2654,
            "ʯ������": 2656,
            "��³������": 2658,
            "���ܵ���": 2662,
            "�������": 2666,
            "�����յ���": 2675,
            "��ʲ����": 2686,
            "�������տ¶���": 2699,
            "���������ɹ���������": 2704,
            "��������������": 2714,
            "���������ɹ�������": 2723,
            "���������������": 2727,
            "���ǵ���": 2736,
            "����̩����": 2744,
            "�½�ά���������": 4091,
            "�������": 4110,
            "���������ɹ������ݰ���ɽ�ڿڰ�": 4163
        }
    },
    "̨��": {
        id: 32,
        c: {
            "̨����": 2768
        }
    },
    "���": {
        id: 42,
        c: {
            "����ر�������": 2754
        }
    },
    "����": {
        id: 43,
        c: {
            "������": 2770
        }
    },
    "���㵺": {
        id: 84,
        c: {
            "���㵺": 84
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
    return "����";

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
        djdarea.selecthtm = ["<option value='0'>--��ѡ��--</option>"];
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
        djdarea.areaDom.html("<option value='0'>--��ѡ��--</option>");
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
            djdarea.areaDom.html("<option value='0'>--��ѡ��--</option>").val(v);
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
    djdarea.selecthtm = "<option value='0'>--��ѡ��--</option>";
    var v = djdarea.curAreaSku[2];
    var cid = djdarea.curAreaSku[1];
    for (var i = 0, j = obj.length; i < j; i++) {
        if (v == "-1") v = obj[i].id;
        djdarea.selecthtm += "<option value=\"" + obj[i].id + "\" title='" + obj[i].name + "'>" + obj[i].name + "</option>";

    }
    if (cid == 84) djdarea.selecthtm += "<option value=\"84\" title='���㵺'>���㵺</option>";
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
                                alert("��ʱ�޷��ύ,�����Ժ�����!");

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
                        $.easybuy_button.html("<a class='btn-easybuy' href='#'>���ɹ�<b></b></a>");
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
        areaname += area.substring(0, area.indexOf("(") == -1 ? area.length: area.indexOf("(")).substring(0, area.indexOf("��") == -1 ? area.length: area.indexOf("��"));

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
    //�����Ϣ
    if (!djdarea.oldskuid || djdarea.oldskuid != skuid) {
        setPriceData(skuid);
        //�ı�۸�
        setCXAdvertisement(skuid, skuidkey);
        //����
        initEasyBuy();
        //���ɹ�

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
                //������Ϣ
                if (window.fq_init) fq_init();
                if ($("#Tip_apply").length > 0 && fq_serverSite) $("#Tip_apply").attr("href", fq_serverSite + "ShoppingCart_fqInit.aspx?skuId=" + pageConfig.product.skuid + "&skuCount=1");
                //����
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
// �������
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
                    $("<div class='dt'>��\u3000\u3000��</div><div class='dd'>����Ʒ" + (pageConfig.product.yfinfo && pageConfig.product.yfinfo.nofree ? "�˷�": "") + "��<a href='"
                    + $.getShopUrl(r) + "' target='_blank' clstag='shangpin|keycount|product|bbtn'>" + r.vender + "</a>" + (pageConfig.product.yfinfo && pageConfig.product.yfinfo.nofree ? "��ȡ": "�ṩ") + "�����������ͼ����߷�Ʊ</div>").appendTo("#summary-service");
                    if (r.linkphone) {
                        $("#sellerphone").remove();
                        $("#evaluate").after("<p id='sellerphone' style=' clear: both;overflow: hidden;padding: 10px 0 0 10px;'><em class='dt'>����绰��</em><em>" + r.linkphone + "</em></p>");
                    }

                }
                else if (r.type == 1) {
                    $("<div class='dt'>��\u3000\u3000��</div><div class='dd'>����Ʒ��<a href='" + $.getShopUrl(r) + "' target='_blank' clstag='shangpin|keycount|product|bbtn'>" + r.vender + "</a>�ṩ���ɾ����̳Ǹ������ͼ����߷�Ʊ</div>").appendTo("#summary-service");

                }
                else if (r.type == 2) {
                    $("<div class='dt'>��\u3000\u3000��</div><div class='dd'>����Ʒ��<a href='" + $.getShopUrl(r) + "' target='_blank' clstag='shangpin|keycount|product|bbtn'>" + r.vender + "</a>�ṩ���ɾ����̳Ǹ������ͼ����߷�Ʊ</div>").appendTo("#summary-service");

                }
                else if (r.type == 5) {
                    $("<div class='dt'>��\u3000\u3000��</div><div class='dd'>����Ʒ��Ʊ��<a href='" + $.getShopUrl(r) + "' target='_blank' clstag='shangpin|keycount|product|bbtn'>" + r.vender + "</a>�ṩ���ɾ����̳Ǹ�������</div>").appendTo("#summary-service");

                }
                if (pageConfig.product.yfinfo && pageConfig.product.yfinfo.service) {
                    $("<div class='dt'>\u3000\u3000</div><div class='dd'>" + pageConfig.product.yfinfo.service + "</div>").appendTo("#summary-service");

                }
                if (r.type != 4) {
                    $("#summary-service").show();
                    $("#brand-bar .seller-link").html("<em class='dt'>��&nbsp;&nbsp;&nbsp;&nbsp;�ң�</em><a href='" + $.getShopUrl(r) + "' target='_blank' clstag='shangpin|keycount|product|bbtn'>" + r.vender + "</a>");
                    if ($("#brand-bar .seller-btn").length == 0) $("<div class='seller-btn clearfix'></div>").appendTo("#brand-bar .seller");
                    $("<a id='seller-enter' href='" + $.getShopUrl(r) + "' target='_blank' clstag='shangpin|keycount|product|bbtn'>�������ҵ���</a>").appendTo("#brand-bar .seller-btn");

                }
                $.changeServiceInfo(r.type == 0 ? 2: 3);

            }

        }

    }
    else {
        $("#brand-bar .seller-link").html("<em class='dt'>��&nbsp;&nbsp;&nbsp;&nbsp;�ң�</em><a href='#none'>�����̳�</a>");
        $("#summary-service").show();
        var array = s.split("-");
        if (array[5] && array[5] == "1") {
            $("<div class='dt'>��\u3000\u3000��</div><div class='dd'>����Ʒ�ɳ����ṩ�����ͣ��ɾ����̳ǿ��߷�Ʊ</div>").appendTo("#summary-service");

        } else if (array[5] && array[5] == "2") {
            $("<div class='dt'>��\u3000\u3000��</div><div class='dd'>����Ʒ��<a href='#'>�����̳�</a>�ṩ�����ͣ���Ӫ�̿��߷�Ʊ</div>").appendTo("#summary-service");

        } else {
            $("<div class='dt'>��\u3000\u3000��</div><div class='dd'>����Ʒ��<a href='#'>�����̳�</a>�ṩ�����������ͼ����߷�Ʊ</div>").appendTo("#summary-service");

        }
        $.changeServiceInfo(1);

    }
    $("#brand-bar .seller").show();

};
$.changeServiceInfo = function(type) {
    var txt1 = "<b></b><span>����</span><span>����</span>",
    txt3 = "<b></b><span>��39</span><span>���˷�</span>",
    txt5 = "<b></b><span>�ۺ�</span><span>����</span>";
    var url1 = "http://help.360buy.com/help/question-67.html",
    url3 = "http://help.360buy.com/help/question-65.html",
    url5 = "http://help.360buy.com/help/question-97.html",
    urlp3 = "_blank",
    urlp5 = "_blank";
    if (type == 1) {
        //self
        } else if (type == 2) {
        //sop
        txt1 = "<b></b><span>����</span><span>֧��</span>";
        txt3 = "<b></b><span>����</span><span>ֱ��</span>";
        txt5 = "<b></b><span>7��</span><span>�˻�</span>";
        url1 = "http://help.360buy.com/help/question-68.html";
        url3 = "#none";
        url5 = "#none";
        urlp3 = "_self";
        urlp5 = "_self";

    } else if (type == 3) {
        //other
        txt1 = "<b></b><span>����</span><span>����</span>";
        txt3 = "<b></b><span>��39</span><span>���˷�</span>";
        txt5 = "<b></b><span>7��</span><span>�˻�</span>";
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
        djdarea.stockInfoDom.html("<strong>�õ����ݲ�֧�ֹ���</strong>");
        setPriceData("noprice");

    }
    else if (result.stock && result.stock.S) {
        var array = result.stock.S.split("-");
        var cashdesc = pageConfig.product.yfinfo.nofree ? "��<span style='cursor:pointer' title='һ�����̹�������Ʒ��ֻ��ȡһ���˷�'>�˷ѣ�<span style='color:#f00;'>��" + pageConfig.product.yfinfo.cash + "</span><span>": "";
        if (array[1] == "34" || array[1] == "18") {
            changeCart(false);
            djdarea.stockInfoDom.html("<strong class='store-over'>�޻�</strong>");

        }
        else if (array[1] == "0") {
            changeCart(false);
            djdarea.stockInfoDom.html("<strong class='store-over'>�޻�</strong>");

        }
        else if (array[2] == "0" && array[4] != "2") {
            changeCart(false);
            djdarea.stockInfoDom.html("�ܱ�Ǹ������Ʒ�޷�������ѡ�������");

        }
        else if (array[1] == "33" || array[1] == "5") {
            changeCart(true);
            djdarea.stockInfoDom.html("<strong>�ֻ�</strong>" + (array[4] == "1" ? "��������" + (array[3] == "0" ? "��": "") + "֧�ֻ�������": "") + cashdesc);

        }
        else if (array[1] == "36") {
            changeCart(true);
            djdarea.stockInfoDom.html("<strong>Ԥ��</strong>" + (array[4] == "1" ? "��������" + (array[3] == "0" ? "��": "") + "֧�ֻ�������": "") + cashdesc);

        }
        else if (array[1] == "39") {
            changeCart(true);
            djdarea.stockInfoDom.html("<strong>��;</strong>" + (array[4] == "1" ? "��������" + (array[3] == "0" ? "��": "") + "֧�ֻ�������": "") + cashdesc);

        }
        else if (array[1] == "40") {
            changeCart(true);
            djdarea.stockInfoDom.html("<strong>�����</strong>" + (array[4] == "1" ? "��������" + (array[3] == "0" ? "��": "") + "֧�ֻ�������": "") + cashdesc);

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
                //���ﳵ

            }
            else {
                $("#choose-btn-append .btn-append").attr("href", "http://gate.360buy.com/InitCart.aspx?pid=" + djdarea.curAreaSku[3] + "&pcount=1&ptype=1").attr("onclick", "").unbind("click").click(function() {
                    /*BuyUrl(djdarea.curAreaSku[3]);*/
                    mark(djdarea.curAreaSku[3], 2)
                });
                //���ﳵ

            }

        }
        if ($(".nav-minicart-btn").length > 0) $(".nav-minicart-btn").show();
        //mini���ﳵ
        $("#choose-btn-subsidy").show();

    } else {
        if (pageConfig && pageConfig.product) pageConfig.product.isStock = false;
        $("#choose-btn-append").addClass("disabled").removeClass('choose-btn-append-lite');
        $("#product-intro").attr("class", "product-intro-noitem");
        $.easybuy_button.hide();
        $.divide_button.hide();
        if ($("#choose-btn-append .btn-append").length > 0) $("#choose-btn-append .btn-append").attr("href", "#none").attr("onclick", "").unbind("click");
        //���ﳵ
        if ($(".nav-minicart-btn").length > 0) $(".nav-minicart-btn").hide();
        //mini���ﳵ
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
//��ɫ����
var choose_color = $("#choose-color a");
var choose_colori = $("#choose-color .item");
var choose_version = $("#choose-version .item");
var alert_choose_version = $("#choose-version .dt").html();
alert_choose_version = alert_choose_version ? alert_choose_version.replace("��", "") : "";
var alert_choose_color = $("#choose-color .dt").html();
alert_choose_color = alert_choose_color ? alert_choose_color.replace("��", "") : "";
var alert_choose = "��ѡ" + alert_choose_color.replace("ѡ��", "") + "��" + alert_choose_version.replace("ѡ��", "") + "��Ʒ�޻�";
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
            $("#choose-result .dd").html("<em>��ѡ��</em>" + (cur_color ? "<strong>��" + cur_color + "��</strong>": "") + (cur_color && cur_version ? "��": "") + (cur_version ? "<strong>��" + cur_version + "��</strong>": "")
            + (cur_color ? "": "<span class='item-warnning'><s></s>��" + alert_choose_color + "</span>") + (cur_version ? "": "<span class='item-warnning'><s></s>��" + alert_choose_version + "</span>"));
            $("#choose-color").attr("class", cur_color ? "": "item-hl-bg");
            $("#choose-version").attr("class", cur_version ? "": "item-hl-bg");
            if ($("#choose-noresult").length > 0) {
                $("#choose-noresult").remove();
            }
            $.easybuy_button.hide();
            $.divide_button.hide();
            $.notice_button.hide();
            if ($.append_button.length > 0) $.append_button.attr("href", "#none").attr("onclick", "").unbind("click");
            //���ﳵ
            if ($(".nav-minicart-btn").length > 0) $(".nav-minicart-btn").hide();
            //mini���ﳵ
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
/* ͼƬ���� */
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
/* ---------- ��㹫�� ---------- */
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
* �°�-�����ͳ��-ҳ��pv����ʾ����
* wpid ����Ʒ�������࣬û��Ϊ�մ�''
* psku ����Ʒsku��û��Ϊ�մ�''�����������жϴ���ƷΪpop���Ƿ�pop
* markId �Ƽ�λ��ǣ����ű�Ҫ
* op s:��ʾ��p:pv
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
    //��ȡcookies����
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) return arr[2];
    return '';

}
/**
* �����ͳ�ƣ��������磺clsLog("3425&special","","174620#988",4,"reWidsBookSpecial")
* @param type2 ��������
* @param pwid ��ǰ��Ʒwid��û��Ϊ�մ�''
* @param sku �Ƽ���Ʒwid
* @param num λ�ã���0��ʼ
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
/* ---------- ��㹫�� end ---------- */
