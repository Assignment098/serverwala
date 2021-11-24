// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__cid"
            }],
            "tags": [{
                "function": "__rep",
                "once_per_event": true,
                "vtp_containerId": ["macro", 1],
                "tag_id": 1
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 0]
                ]
            ]
        },
        "runtime": []




    };


    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var h, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ea;
    if ("function" == typeof Object.setPrototypeOf) ea = Object.setPrototypeOf;
    else {
        var ha;
        a: {
            var ia = {
                    a: !0
                },
                ja = {};
            try {
                ja.__proto__ = ia;
                ha = ja.a;
                break a
            } catch (a) {}
            ha = !1
        }
        ea = ha ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var la = ea,
        ma = function(a, b) {
            a.prototype = ba(b.prototype);
            a.prototype.constructor = a;
            if (la) la(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Mj = b.prototype
        },
        na = this || self,
        qa = function(a) {
            return a
        };
    var ra = function() {},
        sa = function(a) {
            return "function" == typeof a
        },
        ta = function(a) {
            return "string" == typeof a
        },
        ua = function(a) {
            return "number" == typeof a && !isNaN(a)
        },
        wa = Array.isArray,
        xa = function(a, b) {
            if (a && wa(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        ya = function(a, b) {
            if (!ua(a) || !ua(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        Aa = function(a, b) {
            for (var c = new za, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        Ba = function(a,
            b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        Da = function(a) {
            return !!a && ("[object Arguments]" == Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        Ea = function(a) {
            return Math.round(Number(a)) || 0
        },
        Ha = function(a) {
            return "false" == String(a).toLowerCase() ? !1 : !!a
        },
        Ja = function(a) {
            var b = [];
            if (wa(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Na = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Oa = function() {
            return new Date(Date.now())
        },
        m = function() {
            return Oa().getTime()
        },
        za = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    za.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    za.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Pa = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Ra = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        Sa = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Ua = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        Va = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        Wa = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        Ya = /^\w{1,9}$/,
        Za = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            Ba(a, function(d, e) {
                Ya.test(d) && e && c.push(d)
            });
            return c.join(b)
        };
    var $a, ab = function() {
        if (void 0 === $a) {
            var a = null,
                b = na.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: qa,
                        createScript: qa,
                        createScriptURL: qa
                    })
                } catch (c) {
                    na.console && na.console.error(c.message)
                }
                $a = a
            } else $a = a
        }
        return $a
    };
    var cb = function(a, b) {
        this.m = b === bb ? a : ""
    };
    cb.prototype.toString = function() {
        return this.m + ""
    };
    var bb = {},
        db = function(a) {
            var b = ab(),
                c = b ? b.createScriptURL(a) : a;
            return new cb(c, bb)
        };
    var eb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var fb;
    a: {
        var gb = na.navigator;
        if (gb) {
            var hb = gb.userAgent;
            if (hb) {
                fb = hb;
                break a
            }
        }
        fb = ""
    }

    function ib(a) {
        return -1 != fb.indexOf(a)
    };
    var kb = {},
        lb = function(a, b, c) {
            this.m = c === kb ? a : ""
        };
    lb.prototype.toString = function() {
        return this.m.toString()
    };
    var mb = function(a) {
            return a instanceof lb && a.constructor === lb ? a.m : "type_error:SafeHtml"
        },
        nb = function(a) {
            var b = ab(),
                c = b ? b.createHTML(a) : a;
            return new lb(c, null, kb)
        },
        ob = new lb(na.trustedTypes && na.trustedTypes.emptyHTML || "", 0, kb);
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    function rb(a, b) {
        a.src = b instanceof cb && b.constructor === cb ? b.m : "type_error:TrustedResourceUrl";
        var c, d, e = (a.ownerDocument && a.ownerDocument.defaultView || window).document,
            f = null === (d = e.querySelector) || void 0 === d ? void 0 : d.call(e, "script[nonce]");
        (c = f ? f.nonce || f.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c)
    };
    var sb = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        tb = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };
    var ub = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        var c = a.firstChild.firstChild;
        a.innerHTML = mb(ob);
        return !c.parentElement
    });
    var B = window,
        G = document,
        vb = navigator,
        wb = G.currentScript && G.currentScript.src,
        xb = function(a, b) {
            var c = B[a];
            B[a] = void 0 === c ? b : c;
            return B[a]
        },
        yb = function(a) {
            var b = G.getElementsByTagName("script")[0] || G.body || G.head;
            b.parentNode.insertBefore(a, b)
        },
        Ab = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        Bb = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        Cb = function(a, b, c, d) {
            var e = G.createElement("script");
            d && Ba(d, function(f, g) {
                f = f.toLowerCase();
                Bb.hasOwnProperty(f) || e.setAttribute(f, g)
            });
            e.type = "text/javascript";
            e.async = !0;
            rb(e, db(a));
            Ab(e, b);
            c && (e.onerror = c);
            yb(e);
            return e
        },
        Db = function() {
            if (wb) {
                var a = wb.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        Eb = function(a, b) {
            var c = G.createElement("iframe");
            c.height = "0";
            c.width = "0";
            c.style.display = "none";
            c.style.visibility = "hidden";
            var d = G.body && G.body.lastChild || G.body || G.head;
            d.parentNode.insertBefore(c,
                d);
            Ab(c, b);
            void 0 !== a && (c.src = a);
            return c
        },
        Fb = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b()
            };
            d.onerror = function() {
                d.onerror = null;
                c && c()
            };
            d.src = a;
            return d
        },
        Gb = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        Hb = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        H = function(a) {
            B.setTimeout(a, 0)
        },
        Ib = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value :
                null
        },
        Jb = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        Kb = function(a) {
            var b = G.createElement("div"),
                c = nb("A<div>" + a + "</div>"),
                d = b;
            if (ub())
                for (; d.lastChild;) d.removeChild(d.lastChild);
            d.innerHTML = mb(c);
            b = b.lastChild;
            for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
            return e
        },
        Lb = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        Mb = function(a) {
            var b;
            try {
                b = vb.sendBeacon && vb.sendBeacon(a)
            } catch (c) {}
            b || Fb(a)
        },
        Nb = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        },
        Ob = function(a) {
            var b = G.featurePolicy;
            return b && sa(b.allowsFeature) ? b.allowsFeature(a) : !1
        },
        Rb = function() {
            return vb.userLanguage || vb.language
        };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Sb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Tb = function(a) {
            if (null == a) return String(a);
            var b = Sb.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Ub = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Vb = function(a) {
            if (!a || "object" != Tb(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Ub(a, "constructor") && !Ub(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || Ub(a, b)
        },
        O = function(a, b) {
            var c = b || ("array" == Tb(a) ? [] : {}),
                d;
            for (d in a)
                if (Ub(a, d)) {
                    var e = a[d];
                    "array" == Tb(e) ? ("array" != Tb(c[d]) && (c[d] = []), c[d] = O(e, c[d])) : Vb(e) ? (Vb(c[d]) || (c[d] = {}), c[d] = O(e, c[d])) : c[d] = e
                }
            return c
        };
    var Wb = function(a) {
        if (void 0 === a || wa(a) || Vb(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    };
    var Xb = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Xg: a("consent"),
            Yg: a("consent_always_fire"),
            $e: a("convert_case_to"),
            af: a("convert_false_to"),
            bf: a("convert_null_to"),
            cf: a("convert_true_to"),
            df: a("convert_undefined_to"),
            vj: a("debug_mode_metadata"),
            wj: a("event_data_overrides"),
            sb: a("function"),
            Ih: a("instance_name"),
            Mh: a("live_only"),
            Nh: a("malware_disabled"),
            Oh: a("metadata"),
            zj: a("original_activity_id"),
            Aj: a("original_vendor_template_id"),
            Sh: a("once_per_event"),
            Lf: a("once_per_load"),
            Cj: a("priority_override"),
            Dj: a("respected_consent_types"),
            Pf: a("setup_tags"),
            Qf: a("tag_id"),
            Rf: a("teardown_tags")
        }
    }();
    var wc;
    var xc = [],
        yc = [],
        zc = [],
        Ac = [],
        Bc = [],
        Cc = {},
        Dc, Ec, Fc, Gc = function(a, b) {
            var c = a["function"],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = Cc[c],
                f = {},
                g;
            for (g in a)
                if (a.hasOwnProperty(g))
                    if (0 === g.indexOf("vtp_")) e && d && d.bg && d.bg(a[g]), f[void 0 !== e ? g : g.substr(4)] = a[g];
                    else if (g === Xb.Yg.toString() && a[g]) {}
            e && d && d.ag && (f.vtp_gtmCachedValues = d.ag);
            return void 0 !== e ? e(f) : wc(c, f, b)
        },
        Ic = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = Hc(a[e], b, c));
            return d
        },
        Hc = function(a, b, c) {
            if (wa(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(Hc(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = xc[f];
                        if (!g || b.Ie(g)) return;
                        c[f] = !0;
                        try {
                            var l = Ic(g, b, c);
                            l.vtp_gtmEventId = b.id;
                            d = Gc(l, {
                                event: b,
                                index: f,
                                type: 2
                            });
                            Fc && (d = Fc.gi(d, l))
                        } catch (z) {
                            b.sg && b.sg(z, Number(f)), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var k = 1; k < a.length; k += 2) d[Hc(a[k], b, c)] = Hc(a[k + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var n = !1, p = 1; p < a.length; p++) {
                            var r = Hc(a[p], b, c);
                            Ec && (n = n || r === Ec.ad);
                            d.push(r)
                        }
                        return Ec && n ? Ec.ki(d) : d.join("");
                    case "escape":
                        d = Hc(a[1], b, c);
                        if (Ec && wa(a[1]) && "macro" === a[1][0] && Ec.Ji(a)) return Ec.Yi(d);
                        d = String(d);
                        for (var v = 2; v < a.length; v++) Yb[a[v]] && (d = Yb[a[v]](d));
                        return d;
                    case "tag":
                        var t =
                            a[1];
                        if (!Ac[t]) throw Error("Unable to resolve tag reference " + t + ".");
                        return d = {
                            ig: a[2],
                            index: t
                        };
                    case "zb":
                        var q = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        q["function"] = a[1];
                        var u = Jc(q, b, c),
                            x = !!a[4];
                        return x || 2 !== u ? x !== (1 === u) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        Jc = function(a, b, c) {
            try {
                return Dc(Ic(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        };
    var Mc = function(a) {
            function b(v) {
                for (var t = 0; t < v.length; t++) d[v[t]] = !0
            }
            for (var c = [], d = [], e = Kc(a), f = 0; f < yc.length; f++) {
                var g = yc[f],
                    l = Lc(g, e);
                if (l) {
                    for (var k = g.add || [], n = 0; n < k.length; n++) c[k[n]] = !0;
                    b(g.block || [])
                } else null === l && b(g.block || []);
            }
            for (var p = [], r = 0; r < Ac.length; r++) c[r] && !d[r] && (p[r] = !0);
            return p
        },
        Lc = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null
            }
            for (var f =
                    a.unless || [], g = 0; g < f.length; g++) {
                var l = b(f[g]);
                if (2 === l) return null;
                if (1 === l) return !1
            }
            return !0
        },
        Kc = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = Jc(zc[c], a));
                return b[c]
            }
        };
    var Tc = {
        gi: function(a, b) {
            b[Xb.$e] && "string" === typeof a && (a = 1 == b[Xb.$e] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Xb.bf) && null === a && (a = b[Xb.bf]);
            b.hasOwnProperty(Xb.df) && void 0 === a && (a = b[Xb.df]);
            b.hasOwnProperty(Xb.cf) && !0 === a && (a = b[Xb.cf]);
            b.hasOwnProperty(Xb.af) && !1 === a && (a = b[Xb.af]);
            return a
        }
    };

    var P = {
        Ob: "_ee",
        gd: "_syn_or_mod",
        Fj: "_uei",
        be: "_eu",
        Bj: "_pci",
        Jb: "event_callback",
        Qc: "event_timeout",
        xa: "gtag.config",
        Ja: "gtag.get",
        va: "purchase",
        Gb: "refund",
        ib: "begin_checkout",
        Eb: "add_to_cart",
        Fb: "remove_from_cart",
        hh: "view_cart",
        ff: "add_to_wishlist",
        wa: "view_item",
        jb: "view_promotion",
        Mc: "select_promotion",
        Fd: "select_item",
        Ua: "view_item_list",
        ef: "add_payment_info",
        gh: "add_shipping_info",
        Ka: "value_key",
        Wa: "value_callback",
        Ca: "allow_ad_personalization_signals",
        fc: "restricted_data_processing",
        $b: "allow_google_signals",
        na: "cookie_expires",
        Ib: "cookie_update",
        hc: "session_duration",
        Wc: "session_engaged_time",
        Ma: "user_properties",
        qa: "transport_url",
        T: "ads_data_redaction",
        ya: "user_data",
        cc: "first_party_collection",
        C: "ad_storage",
        H: "analytics_storage",
        Ye: "region",
        Ze: "wait_for_update",
        ma: "conversion_linker",
        Da: "conversion_cookie_prefix",
        da: "value",
        ca: "currency",
        Hf: "trip_type",
        Z: "items",
        zf: "passengers",
        Id: "allow_custom_scripts",
        ic: "session_id",
        Ef: "quantity",
        Ya: "transaction_id",
        nb: "language",
        Oc: "country",
        Nc: "allow_enhanced_conversions",
        Nd: "aw_merchant_id",
        Ld: "aw_feed_country",
        Md: "aw_feed_language",
        Kd: "discount",
        V: "developer_id",
        Xc: "delivery_postal_code",
        Td: "estimated_delivery_date",
        Rd: "shipping",
        Yd: "new_customer",
        Od: "customer_lifetime_value",
        Sd: "enhanced_conversions",
        Zb: "page_view",
        ia: "linker",
        N: "domains",
        ob: "decorate_forms",
        vf: "enhanced_conversions_automatic_settings",
        qh: "auto_detection_enabled",
        wf: "ga_temp_client_id",
        Gd: "user_engagement",
        ah: "app_remove",
        bh: "app_store_refund",
        dh: "app_store_subscription_cancel",
        eh: "app_store_subscription_convert",
        fh: "app_store_subscription_renew",
        ih: "first_open",
        jh: "first_visit",
        kh: "in_app_purchase",
        lh: "session_start",
        mh: "user_data_login",
        nh: "user_data_logout",
        oh: "allow_display_features",
        ac: "campaign",
        jf: "campaign_content",
        kf: "campaign_id",
        lf: "campaign_medium",
        nf: "campaign_name",
        pf: "campaign_source",
        qf: "campaign_term",
        kb: "client_id",
        fa: "cookie_domain",
        Hb: "cookie_name",
        Va: "cookie_path",
        Ea: "cookie_flags",
        bc: "custom_map",
        Vd: "groups",
        yf: "non_interaction",
        pb: "page_location",
        Zd: "page_path",
        La: "page_referrer",
        Uc: "page_title",
        Nb: "send_page_view",
        qb: "send_to",
        $d: "session_engaged",
        Tc: "_logged_in_state",
        ae: "session_number",
        Eh: "tracking_id",
        Za: "url_passthrough",
        Lb: "accept_incoming",
        Mb: "url_position",
        Cf: "phone_conversion_number",
        Af: "phone_conversion_callback",
        Bf: "phone_conversion_css_class",
        Df: "phone_conversion_options",
        Bh: "phone_conversion_ids",
        Ah: "phone_conversion_country_code",
        hf: "aw_remarketing",
        Jd: "aw_remarketing_only",
        Hd: "gclid",
        ph: "auid",
        vh: "affiliation",
        uf: "tax",
        Qd: "list_name",
        tf: "checkout_step",
        sf: "checkout_option",
        wh: "coupon",
        xh: "promotions",
        rb: "user_id",
        Ch: "retoken",
        oa: "cookie_prefix",
        rf: "disable_merchant_reported_purchases",
        uh: "dc_natural_search",
        th: "dc_custom_params",
        xf: "method",
        Dh: "search_term",
        sh: "content_type",
        zh: "optimize_id",
        yh: "experiments",
        Xa: "google_signals",
        Sc: "google_tld",
        Yc: "update",
        Ud: "firebase_id",
        Kb: "ga_restrict_domain",
        Pc: "event_settings",
        Pd: "dynamic_event_settings",
        jc: "user_data_settings",
        Ff: "screen_name",
        mb: "_x_19",
        lb: "_ecid",
        Rc: "_x_20",
        Xd: "internal_traffic_results",
        Gf: "traffic_type",
        Vc: "referral_exclusion_definition",
        Wd: "ignore_referrer",
        rh: "content_group"
    };
    var zd = {};
    P.Jf = Object.freeze((zd[P.ef] = 1, zd[P.gh] = 1, zd[P.Eb] = 1, zd[P.Fb] = 1, zd[P.hh] = 1, zd[P.ib] = 1, zd[P.Fd] = 1, zd[P.Ua] = 1, zd[P.Mc] = 1, zd[P.jb] = 1, zd[P.va] = 1, zd[P.Gb] = 1, zd[P.wa] = 1, zd[P.ff] = 1, zd));
    P.de = Object.freeze([P.Ca, P.$b, P.Ib]);
    P.Qh = Object.freeze([].concat(P.de));
    P.ee = Object.freeze([P.na, P.Qc, P.hc, P.Wc]);
    P.Rh = Object.freeze([].concat(P.ee));

    var Ad = {};
    P.Ug = Object.freeze((Ad[P.Ca] = 1, Ad[P.Nc] = 1, Ad[P.hf] = 1, Ad[P.Jd] = 1, Ad[P.Kd] = 1, Ad[P.Ld] = 1, Ad[P.Md] = 1, Ad[P.Z] = 1, Ad[P.Nd] = 1, Ad[P.Da] = 1, Ad[P.ma] = 1, Ad[P.fa] = 1, Ad[P.na] = 1, Ad[P.Ea] = 1, Ad[P.oa] = 1, Ad[P.ca] = 1, Ad[P.Od] = 1, Ad[P.V] = 1, Ad[P.rf] = 1, Ad[P.Sd] = 1, Ad[P.Td] = 1, Ad[P.Ud] = 1, Ad[P.cc] = 1, Ad[P.nb] = 1, Ad[P.Yd] = 1, Ad[P.pb] = 1, Ad[P.La] = 1, Ad[P.Af] = 1, Ad[P.Bf] = 1, Ad[P.Cf] = 1, Ad[P.Df] = 1, Ad[P.fc] = 1, Ad[P.Nb] = 1, Ad[P.qb] = 1, Ad[P.Xc] = 1, Ad[P.Ya] = 1, Ad[P.qa] = 1, Ad[P.Yc] = 1, Ad[P.Za] = 1, Ad[P.ya] = 1, Ad[P.rb] = 1, Ad[P.da] = 1, Ad));
    var Bd = {},
        Cd = function(a, b) {
            Bd[a] = Bd[a] || [];
            Bd[a][b] = !0
        },
        Dd = function(a) {
            for (var b = [], c = Bd[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
            for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
            return b.join("")
        };
    var Ed = function(a) {
        Cd("GTM", a)
    };
    var S = {},
        U = null,
        Fd = Math.random();
    S.J = "AW-804139102";
    S.ed = "ba1";
    S.U = "dataLayer";
    S.$g = "ChEIgPnnjAYQwvuuqru7wPrhARIlAJePehTm1U2nvoAtFyFBmm3X299dswLLEu/NmhRd1Q1yLZ+JWBoCoeI\x3d";
    var Gd = {
            __cl: !0,
            __ecl: !0,
            __ehl: !0,
            __evl: !0,
            __fal: !0,
            __fil: !0,
            __fsl: !0,
            __hl: !0,
            __jel: !0,
            __lcl: !0,
            __sdl: !0,
            __tl: !0,
            __ytl: !0
        },
        Hd = {
            __paused: !0,
            __tg: !0
        },
        Id;
    for (Id in Gd) Gd.hasOwnProperty(Id) && (Hd[Id] = !0);
    S.Dd = "www.googletagmanager.com";
    var Jd = S.Dd + "/gtm.js";
    Jd = S.Dd + "/gtag/js";
    var Kd = Jd,
        Ld = Ha(""),
        Md = null,
        Nd = null,
        Od = "https://www.googletagmanager.com/a?id=" + S.J + "&cv=1",
        Pd = {},
        Qd = {},
        Rd = function() {
            var a = U.sequence || 1;
            U.sequence = a + 1;
            return a
        };
    S.Zg = "";
    var $d = "";
    S.fd = $d;
    var ae = {},
        be = new za,
        ce = {},
        de = {},
        ge = {
            name: S.U,
            set: function(a, b) {
                O(Wa(a, b), ce);
                ee()
            },
            get: function(a) {
                return fe(a, 2)
            },
            reset: function() {
                be = new za;
                ce = {};
                ee()
            }
        },
        fe = function(a, b) {
            return 2 != b ? be.get(a) : he(a)
        },
        he = function(a) {
            var b, c = a.split(".");
            b = b || [];
            for (var d = ce, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return
            }
            return d
        },
        ie = function(a, b) {
            de.hasOwnProperty(a) || (be.set(a, b), O(Wa(a, b), ce), ee())
        },
        ee = function(a) {
            Ba(de, function(b, c) {
                be.set(b, c);
                O(Wa(b, void 0),
                    ce);
                O(Wa(b, c), ce);
                a && delete de[b]
            })
        },
        ke = function(a, b, c) {
            ae[a] = ae[a] || {};
            ae[a][b] = je(b, c)
        },
        je = function(a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? he(a) : be.get(a);
            "array" === Tb(d) || "object" === Tb(d) ? c = O(d) : c = d;
            return c
        },
        le = function(a, b) {
            if (ae[a]) return ae[a][b]
        },
        me = function(a, b) {
            ae[a] && delete ae[a][b]
        };
    var ne = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        oe = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        pe = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        qe = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var re = function() {
            var a = !1;
            a = !0;
            return a
        },
        te = function(a) {
            var b = fe("gtm.allowlist") || fe("gtm.whitelist");
            b && Ed(9);
            re() && (b = "google gtagfl lcl zone oid op".split(" "));
            var c = b && Va(Ja(b), oe),
                d = fe("gtm.blocklist") ||
                fe("gtm.blacklist");
            d || (d = fe("tagTypeBlacklist")) && Ed(3);
            d ? Ed(8) : d = [];
            se() && (d = Ja(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Ja(d).indexOf("google") && Ed(2);
            var e = d && Va(Ja(d), pe),
                f = {};
            return function(g) {
                var l = g && g[Xb.sb];
                if (!l || "string" != typeof l) return !0;
                l = l.replace(/^_*/, "");
                if (void 0 !== f[l]) return f[l];
                var k = Qd[l] || [],
                    n = a(l, k);
                if (b) {
                    var p;
                    if (p = n) a: {
                        if (0 > c.indexOf(l))
                            if (k && 0 < k.length)
                                for (var r = 0; r < k.length; r++) {
                                    if (0 > c.indexOf(k[r])) {
                                        Ed(11);
                                        p = !1;
                                        break a
                                    }
                                } else {
                                    p = !1;
                                    break a
                                }
                        p = !0
                    }
                    n = p
                }
                var v = !1;
                if (d) {
                    var t = 0 <= e.indexOf(l);
                    if (t) v = t;
                    else {
                        var q = Aa(e, k || []);
                        q && Ed(10);
                        v = q
                    }
                }
                var u = !n || v;
                u || !(0 <= k.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (u = Aa(e, qe));
                return f[l] = u
            }
        },
        se = function() {
            return ne.test(B.location && B.location.hostname)
        };
    var ue = {
            active: !0,
            isAllowed: function() {
                return !0
            }
        },
        ve = function(a) {
            var b = U.zones;
            return b ? b.checkState(S.J, a) : ue
        },
        we = function(a) {
            var b = U.zones;
            !b && a && (b = U.zones = a());
            return b
        };
    var xe = function(a) {
        this.m = a;
        this.defaultValue = !1
    };
    var ye = new xe(1933),
        ze = new xe(1956);
    var Be = function() {
        var a = Ae,
            b = "Ge";
        if (a.Ge && a.hasOwnProperty(b)) return a.Ge;
        var c = new a;
        a.Ge = c;
        a.hasOwnProperty(b);
        return c
    };
    var Ae = function() {
            var a = {};
            this.o = function(b, c) {
                return null != a[b] ? a[b] : c
            };
            this.m = function(b) {
                a[b] = !0
            }
        },
        Ce = function(a) {
            return Be().o(a.m, a.defaultValue)
        };
    var De = [];

    function Ee() {
        var a = xb("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: Fe,
            update: Ge,
            addListener: He,
            notifyListeners: Ie,
            active: !1,
            usedDefault: !1
        });
        return a.ics
    }

    function Fe(a, b, c, d, e, f) {
        var g = Ee();
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var l = g.entries,
                k = l[a] || {},
                n = k.region,
                p = c && ta(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var r = !!(f && 0 < f && void 0 === k.update),
                    v = {
                        region: p,
                        initial: "granted" === b,
                        update: k.update,
                        quiet: r
                    };
                if ("" !== d || !1 !== k.initial) l[a] = v;
                r && B.setTimeout(function() {
                    l[a] === v && v.quiet && (v.quiet = !1, Je(a), Ie(), Cd("TAGGING", 2))
                }, f)
            }
        }
    }

    function Ge(a, b) {
        var c = Ee();
        c.active = !0;
        if (void 0 != b) {
            var d = Ke(a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = Ke(a);
            f.quiet ? (f.quiet = !1, Je(a)) : g !== d && Je(a)
        }
    }

    function He(a, b) {
        De.push({
            xe: a,
            wi: b
        })
    }

    function Je(a) {
        for (var b = 0; b < De.length; ++b) {
            var c = De[b];
            wa(c.xe) && -1 !== c.xe.indexOf(a) && (c.yg = !0)
        }
    }

    function Ie(a) {
        for (var b = 0; b < De.length; ++b) {
            var c = De[b];
            if (c.yg) {
                c.yg = !1;
                try {
                    c.wi({
                        consentEventId: a
                    })
                } catch (d) {}
            }
        }
    }
    var Ke = function(a) {
            var b = Ee().entries[a] || {};
            return void 0 !== b.update ? b.update : b.initial
        },
        Le = function(a) {
            return (Ee().entries[a] || {}).initial
        },
        Me = function(a) {
            return !(Ee().entries[a] || {}).quiet
        },
        Ne = function() {
            return Ce(ye) ? Ee().active : !1
        },
        Oe = function() {
            return Ee().usedDefault
        },
        Pe = function(a, b) {
            Ee().addListener(a, b)
        },
        Qe = function(a) {
            Ee().notifyListeners(a)
        },
        Re = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!Me(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                Pe(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        Se = function(a, b) {
            function c() {
                for (var f = [], g = 0; g < d.length; g++) {
                    var l = d[g];
                    !1 === Ke(l) || e[l] || (f.push(l), e[l] = !0)
                }
                return f
            }
            var d = ta(b) ? [b] : b,
                e = {};
            c().length !== d.length && Pe(d, function(f) {
                var g = c();
                0 < g.length && (f.xe = g, a(f))
            })
        };

    function Te() {}

    function Ue() {};

    function Ve(a) {
        for (var b = [], c = 0; c < bf.length; c++) {
            var d = a(bf[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }
    var bf = [P.C, P.H],
        cf = function(a) {
            var b = a[P.Ye];
            b && Ed(40);
            var c = a[P.Ze];
            c && Ed(41);
            for (var d = wa(b) ? b : [b], e = {
                    Wb: 0
                }; e.Wb < d.length; e = {
                    Wb: e.Wb
                }, ++e.Wb) Ba(a, function(f) {
                return function(g, l) {
                    if (g !== P.Ye && g !== P.Ze) {
                        var k = d[f.Wb];
                        Ee().set(g, l, k, "PK", "PK-PB", c)
                    }
                }
            }(e))
        },
        df = 0,
        ef = function(a, b) {
            Ba(a, function(e, f) {
                Ee().update(e, f)
            });
            Qe(b);
            var c = m(),
                d = c - df;
            df && 0 <= d && 1E3 > d && Ed(66);
            df = c
        },
        ff = function(a) {
            var b = Ke(a);
            return void 0 != b ? b : !0
        },
        gf = function() {
            return "G1" + Ve(Ke)
        },
        hf = function() {
            return "G1" +
                Ve(Le)
        },
        jf = function(a, b) {
            Se(a, b)
        },
        kf = function(a, b) {
            Re(a, b)
        };
    var mf = function(a) {
            return lf ? G.querySelectorAll(a) : null
        },
        nf = function(a, b) {
            if (!lf) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!G.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        of = !1;
    if (G.querySelectorAll) try {
        var pf = G.querySelectorAll(":root");
        pf && 1 == pf.length && pf[0] == G.documentElement && ( of = !0)
    } catch (a) {}
    var lf = of ;
    var qf = function(a) {
            return void 0 === a || null === a ? "" : ta(a) ? Na(String(a)) : "e0"
        },
        sf = function(a) {
            return a.replace(rf, "")
        },
        uf = function(a) {
            return tf(a.replace(/\s/g, ""))
        },
        tf = function(a) {
            return Na(a.replace(vf, "").toLowerCase())
        },
        xf = function(a) {
            a = a.replace(/[\s-()/.]/g, "");
            "+" !== a.charAt(0) && (a = "+" + a);
            return wf.test(a) ? a : "e0"
        },
        zf = function(a) {
            var b = a.toLowerCase().split("@");
            if (2 == b.length) {
                var c = b[0];
                /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
                c = c + "@" + b[1];
                if (yf.test(c)) return c
            }
            return "e0"
        },
        Cf = function(a, b) {
            window.Promise || b([]);
            Promise.all(a.map(function(c) {
                return c.value && -1 !== Af.indexOf(c.name) ? Bf(c.value).then(function(d) {
                    c.value = d
                }) : Promise.resolve()
            })).then(function() {
                b(a)
            }).catch(function() {
                b([])
            })
        },
        Bf = function(a) {
            if ("" === a || "e0" === a) return Promise.resolve(a);
            if (B.crypto && B.crypto.subtle) try {
                var b = Df(a);
                return B.crypto.subtle.digest("SHA-256", b).then(function(c) {
                    var d = Array.from(new Uint8Array(c)).map(function(e) {
                        return String.fromCharCode(e)
                    }).join("");
                    return B.btoa(d).replace(/\+/g,
                        "-").replace(/\//g, "_").replace(/=+$/, "")
                }).catch(function() {
                    return "e2"
                })
            } catch (c) {
                return Promise.resolve("e2")
            } else return Promise.resolve("e1")
        },
        Df = function(a) {
            var b;
            if (B.TextEncoder) b = (new B.TextEncoder("utf-8")).encode(a);
            else {
                for (var c = [], d = 0; d < a.length; d++) {
                    var e = a.charCodeAt(d);
                    128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 | e >> 6 & 63, 128 | e & 63))
                }
                b = new Uint8Array(c)
            }
            return b
        },
        vf = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
        yf = /^\S+@\S+\.\S+$/,
        wf = /^\+\d{11,15}$/,
        rf = /[.~]/g,
        Ef = {},
        Ff = (Ef.email = "em", Ef.phone_number = "pn", Ef.first_name = "fn", Ef.last_name = "ln", Ef.street = "sa", Ef.city = "ct", Ef.region = "rg", Ef.country = "co", Ef.postal_code = "pc", Ef.error_code = "ec", Ef),
        Gf = function(a, b) {
            function c(n, p, r) {
                var v = n[p];
                wa(v) || (v = [v]);
                for (var t = 0; t < v.length; ++t) {
                    var q = qf(v[t]);
                    "" !== q && f.push({
                        name: p,
                        value: r(q),
                        index: void 0
                    })
                }
            }

            function d(n, p, r, v) {
                var t = qf(n[p]);
                "" !== t && f.push({
                    name: p,
                    value: r(t),
                    index: v
                })
            }

            function e(n) {
                return function(p) {
                    Ed(64);
                    return n(p)
                }
            }
            var f = [];
            if ("https:" === B.location.protocol) {
                c(a, "email", zf);
                c(a, "phone_number", xf);
                c(a, "first_name", e(uf));
                c(a, "last_name", e(uf));
                var g = a.home_address || {};
                c(g, "street", e(tf));
                c(g, "city", e(tf));
                c(g, "postal_code", e(sf));
                c(g, "region", e(tf));
                c(g, "country", e(sf));
                var l = a.address || {};
                wa(l) || (l = [l]);
                for (var k = 0; k < l.length; k++) d(l[k], "first_name", uf, k), d(l[k], "last_name", uf, k), d(l[k], "street", tf, k), d(l[k], "city", tf, k), d(l[k], "postal_code", sf, k), d(l[k],
                    "region", tf, k), d(l[k], "country", sf, k);
                Cf(f, b)
            } else f.push({
                name: "error_code",
                value: "e3",
                index: void 0
            }), b(f)
        },
        Hf = function(a, b) {
            Gf(a, function(c) {
                for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
                    var g = c[f].name,
                        l = c[f].value,
                        k = c[f].index,
                        n = Ff[g];
                    n && l && (-1 === Af.indexOf(g) || /^e\d+$/.test(l) || /^[0-9A-Za-z_-]{43}$/.test(l)) && (void 0 !== k && (n += k), d.push(n + "." + l), e++)
                }
                1 === c.length && "error_code" === c[0].name && (e = 0);
                b(encodeURIComponent(d.join("~")), e)
            })
        },
        If = function(a) {
            if (B.Promise) try {
                return new Promise(function(b) {
                    Hf(a,
                        function(c, d) {
                            b({
                                Ac: c,
                                Jj: d
                            })
                        })
                })
            } catch (b) {}
        },
        Af = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
    var Jf = function() {
            this.eventModel = {};
            this.targetConfig = {};
            this.containerConfig = {};
            this.globalConfig = {};
            this.remoteConfig = {};
            this.onSuccess = function() {};
            this.onFailure = function() {};
            this.setContainerTypeLoaded = function() {};
            this.getContainerTypeLoaded = function() {};
            this.eventId = void 0;
            this.isGtmEvent = !1
        },
        Kf = function(a) {
            var b = new Jf;
            b.eventModel = a;
            return b
        },
        Lf = function(a, b) {
            a.targetConfig = b;
            return a
        },
        Mf = function(a, b) {
            a.containerConfig = b;
            return a
        },
        Nf = function(a, b) {
            a.globalConfig = b;
            return a
        },
        Of = function(a,
            b) {
            a.remoteConfig = b;
            return a
        },
        Pf = function(a, b) {
            a.onSuccess = b;
            return a
        },
        Qf = function(a, b) {
            a.setContainerTypeLoaded = b;
            return a
        },
        Rf = function(a, b) {
            a.getContainerTypeLoaded = b;
            return a
        },
        Sf = function(a, b) {
            a.onFailure = b;
            return a
        };
    Jf.prototype.getWithConfig = function(a) {
        if (void 0 !== this.eventModel[a]) return this.eventModel[a];
        if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
        if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
        if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
        if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a]
    };
    var Tf = function(a) {
            function b(d) {
                for (var e = Object.keys(d), f = 0; f < e.length; ++f) c[e[f]] = 1
            }
            var c = {};
            b(a.eventModel);
            b(a.targetConfig);
            b(a.containerConfig);
            b(a.globalConfig);
            return Object.keys(c)
        },
        Uf = function(a, b, c) {
            function d(g) {
                Vb(g) && Ba(g, function(l, k) {
                    f = !0;
                    e[l] = k
                })
            }
            var e = {},
                f = !1;
            c && 1 !== c || (d(a.remoteConfig[b]), d(a.globalConfig[b]), d(a.containerConfig[b]), d(a.targetConfig[b]));
            c && 2 !== c || d(a.eventModel[b]);
            return f ? e : void 0
        },
        Vf = function(a) {
            var b = [P.ac, P.jf, P.kf, P.lf, P.nf, P.pf, P.qf],
                c = {},
                d = !1,
                e = function(f) {
                    for (var g =
                            0; g < b.length; g++) void 0 !== f[b[g]] && (c[b[g]] = f[b[g]], d = !0);
                    return d
                };
            if (e(a.eventModel) || e(a.targetConfig) || e(a.containerConfig) || e(a.globalConfig)) return c;
            e(a.remoteConfig);
            return c
        },
        Wf = function(a) {
            var b = [],
                c;
            for (c in a.eventModel) c !== P.Ob && a.eventModel.hasOwnProperty(c) && void 0 !== a.eventModel[c] && b.push(c);
            return b
        };
    var Xf, Yf = !1,
        Zf = function(a) {
            if (!Yf) {
                Yf = !0;
                Xf = Xf || {}
            }
            return Xf[a]
        };
    var $f = function(a) {
        if (G.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !B.getComputedStyle) return !0;
        var c = B.getComputedStyle(a, null);
        if ("hidden" === c.visibility) return !0;
        for (var d = a, e = c; d;) {
            if ("none" === e.display) return !0;
            var f = e.opacity,
                g = e.filter;
            if (g) {
                var l = g.indexOf("opacity(");
                0 <= l && (g = g.substring(l + 8, g.indexOf(")", l)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g, f))
            }
            if (void 0 !== f && 0 >= f) return !0;
            (d = d.parentElement) && (e = B.getComputedStyle(d,
                null))
        }
        return !1
    };
    var ig = /:[0-9]+$/,
        jg = function(a, b, c) {
            for (var d = a.split("&"), e = 0; e < d.length; e++) {
                var f = d[e].split("=");
                if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                    var g = f.slice(1).join("=");
                    return c ? g : decodeURIComponent(g).replace(/\+/g, " ")
                }
            }
        },
        mg = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = kg(a.protocol) || kg(B.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : B.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b &&
                (a.hostname = (a.hostname || B.location.hostname).replace(ig, "").toLowerCase());
            return lg(a, b, c, d, e)
        },
        lg = function(a, b, c, d, e) {
            var f, g = kg(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = ng(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(ig, "").toLowerCase();
                    if (c) {
                        var l = /^www\d*\./.exec(f);
                        l && l[0] && (f = f.substr(l[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" == g ? 80 : "https" == g ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || Cd("TAGGING",
                        1);
                    f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var k = f.split("/");
                    0 <= (d || []).indexOf(k[k.length - 1]) && (k[k.length - 1] = "");
                    f = k.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = jg(f, e, void 0));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        kg = function(a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        },
        ng = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        og = function(a) {
            var b = G.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || Cd("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(ig, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        },
        pg = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n : p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 != p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = og(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                l = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === l[0] && (l = l.substring(1));
            g = c(g);
            l = c(l);
            "" !== g && (g = "?" + g);
            "" !== l && (l = "#" + l);
            var k = "" + f + g + l;
            "/" === k[k.length - 1] && (k = k.substring(0, k.length - 1));
            return k
        };
    var qg = {};
    var tg = function(a) {
            if (0 == a.length) return null;
            var b;
            b = rg(a, function(c) {
                return !sg.test(c.Ra)
            });
            b = rg(b, function(c) {
                return "INPUT" === c.element.tagName.toUpperCase()
            });
            b = rg(b, function(c) {
                return !$f(c.element)
            });
            return b[0]
        },
        rg = function(a, b) {
            if (1 >= a.length) return a;
            var c = a.filter(b);
            return 0 == c.length ? a : c
        },
        ug = function(a) {
            var b;
            if (a === G.body) b = "body";
            else {
                var c;
                if (a.id) c = "#" + a.id;
                else {
                    var d;
                    if (a.parentElement) {
                        var e;
                        a: {
                            var f = a.parentElement;
                            if (f) {
                                for (var g = 0; g < f.childElementCount; g++)
                                    if (f.children[g] === a) {
                                        e =
                                            g + 1;
                                        break a
                                    }
                                e = -1
                            } else e = 1
                        }
                        d = ug(a.parentElement) + ">:nth-child(" + e + ")"
                    } else d = "";
                    c = d
                }
                b = c
            }
            return b
        },
        vg = !0,
        wg = !1;
    qg.Vg = "true";
    var xg = function(a) {
            if ("false" === qg.Vg || !vg) return !1;
            if (wg) return !0;
            var b = Zf("AW-" +
                a);
            return !!b && !!b.preAutoPii
        },
        yg = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),
        zg = new RegExp(/@(gmail|googlemail)\./i),
        sg = new RegExp(/support|noreply/i),
        Ag = "SCRIPT STYLE IMG SVG PATH BR".split(" "),
        Bg = ["BR"],
        Cg = {},
        Dg = function(a) {
            a = a || {
                Ee: !0,
                Fe: !0
            };
            a.cb = a.cb || {
                email: !0,
                phone: !0,
                Zf: !0
            };
            var b, c = a,
                d = !!c.Ee + "." + !!c.Fe;
            c && c.pd && c.pd.length && (d += "." + c.pd.join("."));
            c && c.cb && (d += "." + c.cb.email + "." + c.cb.phone + "." + c.cb.Zf);
            b = d;
            var e = Cg[b];
            if (e && 200 > m() - e.timestamp) return e.result;
            var f;
            var g = [],
                l = G.body;
            if (l) {
                for (var k = l.querySelectorAll("*"), n = 0; n < k.length && 1E4 > n; n++) {
                    var p = k[n];
                    if (!(0 <= Ag.indexOf(p.tagName.toUpperCase())) && p.children instanceof HTMLCollection) {
                        for (var r = !1, v = 0; v < p.childElementCount && 1E4 > v; v++)
                            if (!(0 <= Bg.indexOf(p.children[v].tagName.toUpperCase()))) {
                                r = !0;
                                break
                            }
                        r || g.push(p)
                    }
                }
                f = {
                    elements: g,
                    status: 1E4 < k.length ? "2" : "1"
                }
            } else f = {
                elements: g,
                status: "4"
            };
            var t = f,
                q = t.status,
                u;
            if (a.cb && a.cb.email) {
                for (var x = t.elements, z = [], w = 0; w < x.length; w++) {
                    var y = x[w],
                        A = y.textContent;
                    "INPUT" === y.tagName.toUpperCase() &&
                        y.value && (A = y.value);
                    if (A) {
                        var C = A.match(yg);
                        if (C) {
                            var F = C[0],
                                D;
                            if (B.location) {
                                var E = lg(B.location, "host", !0);
                                D = 0 <= F.toLowerCase().indexOf(E)
                            } else D = !1;
                            D || z.push({
                                element: y,
                                Ra: F
                            })
                        }
                    }
                }
                var L;
                var J = a && a.pd;
                if (J && 0 !== J.length) {
                    for (var N = [], M = 0; M < z.length; M++) {
                        for (var I = !0, K = 0; K < J.length; K++) {
                            var Q = J[K];
                            if (Q && nf(z[M].element, Q)) {
                                I = !1;
                                break
                            }
                        }
                        I && N.push(z[M])
                    }
                    L = N
                } else L = z;
                u = tg(L);
                10 < z.length && (q = "3")
            }
            var V = [];
            if (u) {
                var ca = u.element,
                    pa = {
                        Ra: u.Ra,
                        tagName: ca.tagName,
                        type: 1
                    };
                a.Ee && (pa.querySelector = ug(ca));
                a.Fe &&
                    (pa.isVisible = !$f(ca));
                V.push(pa)
            }
            var oa = {
                elements: V,
                status: q
            };
            Cg[b] = {
                timestamp: m(),
                result: oa
            };
            return oa
        },
        Eg = function(a) {
            return a.tagName + ":" + a.isVisible + ":" + a.Ra.length + ":" + zg.test(a.Ra)
        };
    var Fg = function(a, b, c) {
            if (c) {
                var d = c.selector_type,
                    e = String(c.value),
                    f;
                if ("js_variable" === d) {
                    e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
                    for (var g = e.split(","), l = 0; l < g.length; l++) {
                        var k = g[l].trim();
                        if (k) {
                            if (0 === k.indexOf("dataLayer.")) f = fe(k.substring(10));
                            else {
                                var n = k.split(".");
                                f = B[n.shift()];
                                for (var p = 0; p < n.length; p++) f = f && f[n[p]]
                            }
                            if (void 0 !== f) break
                        }
                    }
                } else if ("css_selector" === d && lf) {
                    var r = mf(e);
                    r && 0 < r.length && (f = Jb(r[0]) || Na(r[0].value))
                }
                f && (a[b] = f)
            }
        },
        Gg = function(a) {
            if (a) {
                var b = {};
                Fg(b, "email",
                    a.email);
                Fg(b, "phone_number", a.phone);
                b.address = [];
                for (var c = a.name_and_address || [], d = 0; d < c.length; d++) {
                    var e = {};
                    Fg(e, "first_name", c[d].first_name);
                    Fg(e, "last_name", c[d].last_name);
                    Fg(e, "street", c[d].street);
                    Fg(e, "city", c[d].city);
                    Fg(e, "region", c[d].region);
                    Fg(e, "country", c[d].country);
                    Fg(e, "postal_code", c[d].postal_code);
                    b.address.push(e)
                }
                return b
            }
        },
        Hg = function(a) {
            if (a) switch (a.mode) {
                case "selectors":
                    return Gg(a.selectors);
                case "auto_detect":
                    var b;
                    var c = a.auto_detect;
                    if (c) {
                        var d = Dg({
                                Ee: !1,
                                Fe: !1,
                                pd: c.exclude_element_selectors,
                                cb: {
                                    email: !!c.email,
                                    phone: !!c.phone,
                                    Zf: !!c.address
                                }
                            }).elements,
                            e = {};
                        if (0 < d.length)
                            for (var f = 0; f < d.length; f++) {
                                var g = d[f];
                                if (1 === g.type) {
                                    e.email = g.Ra;
                                    break
                                }
                            }
                        b = e
                    } else b = void 0;
                    return b
            }
        },
        Ig = function(a) {
            switch (a.enhanced_conversions_mode) {
                case "manual":
                    var b = a.enhanced_conversions_manual_var;
                    return void 0 !== b ? b : B.enhanced_conversion_data;
                case "automatic":
                    return Gg(a[P.vf])
            }
        };
    var Jg = {},
        Mg = function(a, b) {
            if (B._gtmexpgrp && B._gtmexpgrp.hasOwnProperty(a)) return B._gtmexpgrp[a];
            void 0 === Jg[a] && (Jg[a] = Math.floor(Math.random() * b));
            return Jg[a]
        };
    var Ng = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 != c ? b ^ c >> 21 : b;
        return b
    };
    var Og = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                l = g[0].replace(/^\s*|\s*$/g, "");
            if (l && l == a) {
                var k = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                k && c && (k = decodeURIComponent(k));
                d.push(k)
            }
        }
        return d
    };

    function Pg(a) {
        return "null" !== a.origin
    };
    var Sg = function(a, b, c, d) {
            return Qg(d) ? Og(a, String(b || Rg()), c) : []
        },
        Vg = function(a, b, c, d, e) {
            if (Qg(e)) {
                var f = Tg(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = Ug(f, function(g) {
                        return g.nd
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = Ug(f, function(g) {
                        return g.Bc
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function Wg(a, b, c, d) {
        var e = Rg(),
            f = window;
        Pg(f) && (f.document.cookie = a);
        var g = Rg();
        return e != g || void 0 != c && 0 <= Sg(b, g, !1, d).indexOf(c)
    }
    var $g = function(a, b, c) {
            function d(t, q, u) {
                if (null == u) return delete g[q], t;
                g[q] = u;
                return t + "; " + q + "=" + u
            }

            function e(t, q) {
                if (null == q) return delete g[q], t;
                g[q] = !0;
                return t + "; " + q
            }
            if (!Qg(c.Ha)) return 2;
            var f;
            void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Xg(b), f = a + "=" + b);
            var g = {};
            f = d(f, "path", c.path);
            var l;
            c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
            f = d(f, "expires", l);
            f = d(f, "max-age", c.Ij);
            f = d(f, "samesite",
                c.Kj);
            c.Lj && (f = e(f, "secure"));
            var k = c.domain;
            if (k && "auto" === k.toLowerCase()) {
                for (var n = Yg(), p = 0; p < n.length; ++p) {
                    var r = "none" !== n[p] ? n[p] : void 0,
                        v = d(f, "domain", r);
                    v = e(v, c.flags);
                    if (!Zg(r, c.path) && Wg(v, a, b, c.Ha)) return 0
                }
                return 1
            }
            k && "none" !== k.toLowerCase() && (f = d(f, "domain", k));
            f = e(f, c.flags);
            return Zg(k, c.path) ? 1 : Wg(f, a, b, c.Ha) ? 0 : 1
        },
        ah = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return $g(a, b, c)
        };

    function Ug(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var l = a[g],
                k = b(l);
            k === c ? d.push(l) : void 0 === f || k < f ? (e = [l], f = k) : k === f && e.push(l)
        }
        return 0 < d.length ? d : e
    }

    function Tg(a, b, c) {
        for (var d = [], e = Sg(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                l = g.shift();
            if (!b || -1 !== b.indexOf(l)) {
                var k = g.shift();
                k && (k = k.split("-"), d.push({
                    id: g.join("."),
                    nd: 1 * k[0] || 1,
                    Bc: 1 * k[1] || 1
                }))
            }
        }
        return d
    }
    var Xg = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        bh = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        ch = /(^|\.)doubleclick\.net$/i,
        Zg = function(a, b) {
            return ch.test(window.document.location.hostname) || "/" === b && bh.test(a)
        },
        Rg = function() {
            return Pg(window) ? window.document.cookie : ""
        },
        Yg = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            ch.test(e) || bh.test(e) || a.push("none");
            return a
        },
        Qg = function(a) {
            if (!Ce(ye) || !a || !Ne()) return !0;
            if (!Me(a)) return !1;
            var b = Ke(a);
            return null == b ? !0 : !!b
        };
    var dh = function(a) {
            var b = Math.round(2147483647 * Math.random()),
                c = b;
            a && (c = b ^ Ng(a) & 2147483647);
            return [c, Math.round(m() / 1E3)].join(".")
        },
        gh = function(a, b, c, d, e) {
            var f = eh(b);
            return Vg(a, f, fh(c), d, e)
        },
        hh = function(a, b, c, d) {
            var e = "" + eh(c),
                f = fh(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        eh = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        fh = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length - 1
        };

    function ih(a, b, c) {
        var d, e = Number(null != a.eb ? a.eb : void 0);
        0 !== e && (d = new Date((b || m()) + 1E3 * (e || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: d
        }
    };
    var jh = ["1"],
        kh = {},
        nh = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = lh(a.prefix);
            if (!kh[c] && !mh(c, a.path, a.domain) && b) {
                var d = lh(a.prefix),
                    e = dh(),
                    f = hh(e, "1", a.domain, a.path),
                    g = ih(a, void 0);
                g.Ha = "ad_storage";
                if (0 === ah(d, f, g)) {
                    var l = xb("google_tag_data", {});
                    l._gcl_au ? Cd("GTM", 57) : l._gcl_au = e
                }
                mh(c, a.path, a.domain)
            }
        };

    function mh(a, b, c) {
        var d = gh(a, b, c, jh, "ad_storage");
        if (!d) return !1;
        var e = d.split(".");
        5 === e.length ? (kh[a] = e.slice(0, 2).join("."), e.slice(2, 4).join(".")) : 3 === e.length ? e.slice(0, 2).join(".") : kh[a] = d;
        return !0
    }

    function lh(a) {
        return (a || "_gcl") + "_au"
    };
    var oh = function(a) {
        for (var b = [], c = G.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                Ve: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, l) {
            return l.timestamp - g.timestamp
        });
        return b
    };

    function ph(a, b) {
        var c = oh(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].Ve] || (d[c[e].Ve] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    ra: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].Ve].push(g)
            }
        }
        return d
    };

    function qh() {
        for (var a = rh, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function sh() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var rh, th;

    function uh(a) {
        rh = rh || sh();
        th = th || qh();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                g = d ? a.charCodeAt(c + 1) : 0,
                l = e ? a.charCodeAt(c + 2) : 0,
                k = f >> 2,
                n = (f & 3) << 4 | g >> 4,
                p = (g & 15) << 2 | l >> 6,
                r = l & 63;
            e || (r = 64, d || (p = 64));
            b.push(rh[k], rh[n], rh[p], rh[r])
        }
        return b.join("")
    }

    function vh(a) {
        function b(k) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = th[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return k
        }
        rh = rh || sh();
        th = th || qh();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                l = b(64);
            if (64 === l && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != l && (c += String.fromCharCode(g << 6 & 192 | l)))
        }
    };
    var wh, xh = function(a) {
        var b;
        if (!(b = wh)) {
            for (var c = Array(256), d = 0; 256 > d; d++) {
                for (var e = d, f = 0; 8 > f; f++) e = e & 1 ? e >>> 1 ^ 3988292384 : e >>> 1;
                c[d] = e
            }
            b = c
        }
        wh = b;
        for (var g = 4294967295, l = 0; l < a.length; l++) g = g >>> 8 ^ wh[(g ^ a.charCodeAt(l)) & 255];
        return (g ^ -1) >>> 0
    };
    var yh = {
            uj: 0,
            Ej: 1,
            yj: 2,
            xj: 3
        },
        zh = void 0,
        Dh = function() {
            var a = Ah,
                b = Bh,
                c = Ch(),
                d = function(g) {
                    a(g.target || g.srcElement || {})
                },
                e = function(g) {
                    b(g.target || g.srcElement || {})
                };
            if (!c.init) {
                Gb(G, "mousedown", d);
                Gb(G, "keyup", d);
                Gb(G, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        Eh = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            Ch().decorators.push(f)
        },
        Fh = function(a, b, c) {
            for (var d = Ch().decorators,
                    e = {}, f = 0; f < d.length; ++f) {
                var g = d[f],
                    l;
                if (l = !c || g.forms) a: {
                    var k = g.domains,
                        n = a,
                        p = !!g.sameHost;
                    if (k && (p || n !== G.location.hostname))
                        for (var r = 0; r < k.length; r++)
                            if (k[r] instanceof RegExp) {
                                if (k[r].test(n)) {
                                    l = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(k[r]) || p && 0 <= k[r].indexOf(n)) {
                        l = !0;
                        break a
                    }
                    l = !1
                }
                if (l) {
                    var v = g.placement;
                    void 0 == v && (v = g.fragment ? 2 : 1);
                    v === b && Sa(e, g.callback())
                }
            }
            return e
        };

    function Ch() {
        var a = xb("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var Gh = /(.*?)\*(.*?)\*(.*)/,
        Hh = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Ih = /^(?:www\.|m\.|amp\.)+/,
        Jh = /\*?xp_[0-3]\*?/,
        Kh = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function Lh(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var Mh = void 0,
        Ph = function(a, b) {
            var c = [],
                d;
            for (d in a)
                if (a.hasOwnProperty(d)) {
                    var e = a[d];
                    void 0 !== e && e === e && null !== e && "[object Object]" !== e.toString() && (c.push(d), c.push(uh(String(e))))
                }
            var f = c.join("*");
            if (void 0 !== b) {
                var g = "xp_" + b,
                    l = Nh[b](f);
                f = [f, g, uh(String(l))].join("*")
            }
            return ["1", Oh(f), f].join("*")
        };

    function Oh(a, b) {
        var c = [B.navigator.userAgent, (new Date).getTimezoneOffset(), Rb(), Math.floor(m() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*");
        return xh(c).toString(36)
    }
    var Qh = {},
        Nh = (Qh[0] = function() {
            return "BASELINE"
        }, Qh[1] = Rh, Qh[2] = Sh, Qh[3] = Th, Qh);

    function Rh(a, b) {
        var c = [(new Date).getTimezoneOffset(), Rb(), Math.floor(m() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*");
        return xh(c).toString(36)
    }

    function Sh(a, b) {
        if (!vb.userAgentData) return "UA_DATA_NOT_PRESENT";
        var c = [(new Date).getTimezoneOffset(), Rb(), Math.floor(m() / 60 / 1E3) - (void 0 === b ? 0 : b), vb.userAgentData.brands, vb.userAgentData.mobile, vb.userAgentData.platform, a].join("*");
        return xh(c).toString(36)
    }

    function Uh() {
        vb.userAgentData && vb.userAgentData.getHighEntropyValues(["architecture", "model", "bitness", "platformVersion", "uaFullVersion"]).then(function(a) {
            Mh = a
        })
    }

    function Th(a, b) {
        if (void 0 === Mh) return "UACH_ACCESSED_TOO_EARLY";
        var c = [(new Date).getTimezoneOffset(), Rb(), Math.floor(m() / 60 / 1E3) - (void 0 === b ? 0 : b), vb.userAgentData.brands, vb.userAgentData.mobile, vb.userAgentData.platform, Mh.architecture, Mh.bitness, Mh.model, Mh.platformVersion, Mh.uaFullVersion, a].join("*");
        return xh(c).toString(36)
    }

    function Vh() {
        return function(a) {
            var b = og(B.location.href),
                c = b.search.replace("?", ""),
                d = jg(c, "_gl", !0) || "";
            a.query = Wh(d) || {};
            var e = mg(b, "fragment").match(Lh("_gl"));
            a.fragment = Wh(e && e[3] || "") || {}
        }
    }
    var Xh = function(a) {
            var b = Vh(),
                c = Ch();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (Sa(d, e.query), a && Sa(d, e.fragment));
            return d
        },
        Wh = function(a) {
            var b;
            b = void 0 === b ? 3 : b;
            try {
                if (a) {
                    var c;
                    a: {
                        for (var d = a, e = 0; 3 > e; ++e) {
                            var f = Gh.exec(d);
                            if (f) {
                                c = f;
                                break a
                            }
                            d = decodeURIComponent(d)
                        }
                        c = void 0
                    }
                    var g = c;
                    if (g && "1" === g[1]) {
                        var l = g[2],
                            k = g[3],
                            n = null !== k.match(Jh),
                            p;
                        a: {
                            for (var r = 0; r < b; ++r)
                                if (l === Oh(k, r)) {
                                    p = !0;
                                    break a
                                }
                            p = !1
                        }
                        var v = p;
                        if (v || n) {
                            for (var t = {}, q = k ? k.split("*") : [], u = 0; u + 1 < q.length; u += 2) {
                                var x =
                                    q[u],
                                    z = null !== x.match(Jh);
                                if (v || z) {
                                    var w = vh(q[u + 1]);
                                    t[x] = w
                                }
                                if (z) {
                                    var y = x.split("_")[1];
                                    if (!(Number(y) < Object.keys(yh).length)) return;
                                    var A = b,
                                        C = t[x],
                                        F = k.slice(0, k.indexOf("*xp")),
                                        D = v;
                                    if (0 !== Number(y)) a: {
                                        var E = C,
                                            L = F,
                                            J = A;
                                        if ("undefined" !== E && "UA_DATA_NOT_PRESENT" !== E && "UACH_ACCESSED_TOO_EARLY" !== E)
                                            for (var N = 0; N < J; ++N)
                                                if (E === Nh[y](L, N)) {
                                                    D = !0;
                                                    break a
                                                }
                                        D = !1
                                    }
                                    t._z = "uaxp." + (v ? D === v ? "" + y + 0 : "" + y + 3 : D === v ? "" + y + 1 : "" + y + 2)
                                }
                            }
                            return t
                        }
                    }
                }
            } catch (M) {}
        };

    function Yh(a, b, c, d) {
        function e(p) {
            var r = p,
                v = Lh(a).exec(r),
                t = r;
            if (v) {
                var q = v[2],
                    u = v[4];
                t = v[1];
                u && (t = t + q + u)
            }
            p = t;
            var x = p.charAt(p.length - 1);
            p && "&" !== x && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = Kh.exec(c);
        if (!f) return "";
        var g = f[1],
            l = f[2] || "",
            k = f[3] || "",
            n = a + "=" + b;
        d ? k = "#" + e(k.substring(1)) : l = "?" + e(l.substring(1));
        return "" + g + l + k
    }

    function Zh(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = Fh(b, 1, c),
            e = Fh(b, 2, c),
            f = Fh(b, 3, c),
            g = zh;
        if (Ua(d)) {
            var l = Ph(d, g);
            c ? $h("_gl", l, a) : ai("_gl", l, a, !1)
        }
        if (!c && Ua(e)) {
            var k = Ph(e);
            ai("_gl", k, a, !0)
        }
        for (var n in f)
            if (f.hasOwnProperty(n)) a: {
                var p = n,
                    r = f[n],
                    v = a;
                if (v.tagName) {
                    if ("a" === v.tagName.toLowerCase()) {
                        ai(p, r, v, void 0);
                        break a
                    }
                    if ("form" === v.tagName.toLowerCase()) {
                        $h(p, r, v);
                        break a
                    }
                }
                "string" == typeof v && Yh(p, r, v, void 0)
            }
    }

    function ai(a, b, c, d) {
        if (c.href) {
            var e = Yh(a, b, c.href, void 0 === d ? !1 : d);
            eb.test(e) && (c.href = e)
        }
    }

    function $h(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var l = e[g];
                    if (l.name === a) {
                        l.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var k = G.createElement("input");
                    k.setAttribute("type", "hidden");
                    k.setAttribute("name", a);
                    k.setAttribute("value", b);
                    c.appendChild(k)
                }
            } else if ("post" === d) {
                var n = Yh(a, b, c.action);
                eb.test(n) && (c.action = n)
            }
        }
    }

    function Ah(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || Zh(e, e.hostname)
            }
        } catch (g) {}
    }

    function Bh(a) {
        try {
            if (a.action) {
                var b = mg(og(a.action), "host");
                Zh(a, b)
            }
        } catch (c) {}
    }
    var bi = function(a, b, c, d, e) {
            Dh();
            void 0 !== e && (zh = e);
            3 === e && Uh();
            Eh(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        ci = function(a, b) {
            Dh();
            Eh(a, [lg(B.location, "host", !0)], b, !0, !0)
        },
        di = function() {
            var a = G.location.hostname,
                b = Hh.exec(G.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var l = a.replace(Ih, ""),
                k = e.replace(Ih, ""),
                n;
            if (!(n = l === k)) {
                var p =
                    "." + k;
                n = l.substring(l.length - p.length, l.length) === p
            }
            return n
        },
        ei = function(a, b) {
            return !1 === a ? !1 : a || b || di()
        };
    var fi = {};
    var gi = /^\w+$/,
        hi = /^[\w-]+$/,
        ii = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        },
        ji = function() {
            if (!Ce(ye) || !Ne()) return !0;
            var a = Ke("ad_storage");
            return null == a ? !0 : !!a
        },
        ki = function(a, b) {
            Me("ad_storage") ? ji() ? a() : Se(a, "ad_storage") : b ? Cd("TAGGING", 3) : Re(function() {
                ki(a, !0)
            }, ["ad_storage"])
        },
        mi = function(a) {
            return li(a).map(function(b) {
                return b.ra
            })
        },
        li = function(a) {
            var b = [];
            if (!Pg(B) || !G.cookie) return b;
            var c = Sg(a, G.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = {
                    Ic: d.Ic
                }, e++) {
                var f = ni(c[e]);
                if (null != f) {
                    var g = f,
                        l = g.version;
                    d.Ic = g.ra;
                    var k = g.timestamp,
                        n = g.labels,
                        p = xa(b, function(r) {
                            return function(v) {
                                return v.ra === r.Ic
                            }
                        }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, k), p.labels = oi(p.labels, n || [])) : b.push({
                        version: l,
                        ra: d.Ic,
                        timestamp: k,
                        labels: n
                    })
                }
            }
            b.sort(function(r, v) {
                return v.timestamp - r.timestamp
            });
            return pi(b)
        };

    function oi(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function qi(a) {
        return a && "string" == typeof a && a.match(gi) ? a : "_gcl"
    }
    var si = function() {
            var a = og(B.location.href),
                b = mg(a, "query", !1, void 0, "gclid"),
                c = mg(a, "query", !1, void 0, "gclsrc"),
                d = mg(a, "query", !1, void 0, "wbraid"),
                e = mg(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || jg(f, "gclid", void 0);
                c = c || jg(f, "gclsrc", void 0);
                d = d || jg(f, "wbraid", void 0)
            }
            return ri(b, c, e, d)
        },
        ri = function(a, b, c, d) {
            var e = {},
                f = function(g, l) {
                    e[l] || (e[l] = []);
                    e[l].push(g)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && hi.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match(hi)) switch (b) {
                case void 0:
                    f(a,
                        "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        ui = function(a) {
            var b = si();
            ki(function() {
                ti(b, !1, a)
            })
        };

    function ti(a, b, c, d, e) {
        function f(x, z) {
            var w = vi(x, g);
            w && (ah(w, z, l), k = !0)
        }
        c = c || {};
        e = e || [];
        var g = qi(c.prefix);
        d = d || m();
        var l = ih(c, d, !0);
        l.Ha = "ad_storage";
        var k = !1,
            n = Math.round(d / 1E3),
            p = function(x) {
                var z = ["GCL", n, x];
                0 < e.length && z.push(e.join("."));
                return z.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if ((void 0 == fi.enable_gbraid_cookie_write ? 0 : fi.enable_gbraid_cookie_write) && !k && a.gb) {
            var r = a.gb[0],
                v = vi("gb", g),
                t = !1;
            if (!b)
                for (var q = li(v), u = 0; u < q.length; u++) q[u].ra === r && q[u].labels && 0 < q[u].labels.length && (t = !0);
            t || f("gb", p(r))
        }
    }
    var xi = function(a, b) {
            var c = Xh(!0);
            ki(function() {
                for (var d = qi(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== ii[f]) {
                        var g = vi(f, d),
                            l = c[g];
                        if (l) {
                            var k = Math.min(wi(l), m()),
                                n;
                            b: {
                                var p = k;
                                if (Pg(B))
                                    for (var r = Sg(g, G.cookie, void 0, "ad_storage"), v = 0; v < r.length; ++v)
                                        if (wi(r[v]) > p) {
                                            n = !0;
                                            break b
                                        }
                                n = !1
                            }
                            if (!n) {
                                var t = ih(b, k, !0);
                                t.Ha = "ad_storage";
                                ah(g, l, t)
                            }
                        }
                    }
                }
                ti(ri(c.gclid, c.gclsrc), !1, b)
            })
        },
        vi = function(a, b) {
            var c = ii[a];
            if (void 0 !== c) return b + c
        },
        wi = function(a) {
            return 0 !== yi(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
                0) : 0
        };

    function ni(a) {
        var b = yi(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            ra: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function yi(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !hi.test(a[2]) ? [] : a
    }
    var zi = function(a, b, c, d, e) {
            if (wa(b) && Pg(B)) {
                var f = qi(e),
                    g = function() {
                        for (var l = {}, k = 0; k < a.length; ++k) {
                            var n = vi(a[k], f);
                            if (n) {
                                var p = Sg(n, G.cookie, void 0, "ad_storage");
                                p.length && (l[n] = p.sort()[p.length - 1])
                            }
                        }
                        return l
                    };
                ki(function() {
                    bi(g, b, c, d)
                })
            }
        },
        pi = function(a) {
            return a.filter(function(b) {
                return hi.test(b.ra)
            })
        },
        Ai = function(a, b) {
            if (Pg(B)) {
                for (var c = qi(b.prefix), d = {}, e = 0; e < a.length; e++) ii[a[e]] && (d[a[e]] = ii[a[e]]);
                ki(function() {
                    Ba(d, function(f, g) {
                        var l = Sg(c + g, G.cookie, void 0, "ad_storage");
                        l.sort(function(t,
                            q) {
                            return wi(q) - wi(t)
                        });
                        if (l.length) {
                            var k = l[0],
                                n = wi(k),
                                p = 0 !== yi(k.split(".")).length ? k.split(".").slice(3) : [],
                                r = {},
                                v;
                            v = 0 !== yi(k.split(".")).length ? k.split(".")[2] : void 0;
                            r[f] = [v];
                            ti(r, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function Bi(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var Ci = function(a) {
        function b(e, f, g) {
            g && (e[f] = g)
        }
        if (Ne()) {
            var c = si();
            if (Bi(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.gbraid);
                ci(function() {
                    return d
                }, 3);
                ci(function() {
                    var e = {};
                    return e._up = "1", e
                }, 1)
            }
        }
    };

    function Di(a, b) {
        var c = qi(b),
            d = vi(a, c);
        if (!d) return 0;
        for (var e = li(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function Ei(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    };
    var Fi = function(a) {
            var b = [];
            Ba(a, function(c, d) {
                d = pi(d);
                for (var e = [], f = 0; f < d.length; f++) e.push(d[f].ra);
                e.length && b.push(c + ":" + e.join(","))
            });
            return b.join(";")
        },
        Hi = function(a, b, c) {
            if ("aw" === a || "dc" === a || "gb" === a) {
                var d = Gi("gcl" + a);
                if (d) return d.split(".")
            }
            var e = qi(b);
            if ("_gcl" == e) {
                c = void 0 === c ? !0 : c;
                var f = !ff(P.C) && c,
                    g;
                g = si()[a] || [];
                if (0 < g.length) return f ? ["0"] : g
            }
            var l = vi(a, e);
            return l ? mi(l) : []
        },
        Gi = function(a) {
            var b = og(B.location.href),
                c = mg(b, "host", !1);
            if (c && c.match(Ii)) {
                var d = mg(b, "path").split(a +
                    "=");
                if (1 < d.length) return d[1].split(";")[0].split("?")[0]
            }
        },
        Ji = function(a, b) {
            Me(P.C) ? ff(P.C) ? a() : Se(a, P.C) : b ? Ed(42) : kf(function() {
                Ji(a, !0)
            }, [P.C])
        },
        Ii = /^\d+\.fls\.doubleclick\.net$/,
        Ki = !1;
    var Li = function(a, b) {
            return Hi("aw", a, b)
        },
        Mi = function(a, b) {
            return Hi("dc", a, b)
        },
        Ni = function(a) {
            var b = Gi("gac");
            return b ? !ff(P.C) && a ? "0" : decodeURIComponent(b) : Fi(ji() ? ph() : {})
        },
        Oi = function(a) {
            var b = Gi("gacgb");
            return b ?
                !ff(P.C) && a ? "0" : decodeURIComponent(b) : Fi(ji() ? ph("_gac_gb", !0) : {})
        },
        Pi = function(a) {
            var b = si(),
                c = [],
                d = b.gclid,
                e = b.dclid,
                f = b.gclsrc || "aw";
            !d || "aw.ds" !== f && "aw" !== f && "ds" !== f || c.push({
                ra: d,
                Be: f
            });
            e && c.push({
                ra: e,
                Be: "ds"
            });
            if (!Ki) {}
            Ji(function() {
                nh(a);
                var g = kh[lh(a.prefix)];
                if (g && 0 < c.length)
                    for (var l = U.joined_auid = U.joined_auid || {}, k = 0; k < c.length; k++) {
                        var n = c[k],
                            p = n.ra,
                            r = n.Be,
                            v = (a.prefix || "_gcl") + "." + r + "." + p;
                        if (!l[v]) {
                            var t = "https://adservice.google.com/pagead/regclk";
                            t = "gb" === r ? t + "?gbraid=" + p + "&auid=" + g : t + "?gclid=" + p + "&auid=" + g + "&gclsrc=" + r;
                            Mb(t);
                            l[v] = !0
                        }
                    }
            })
        },
        Qi = function(a) {
            var b;
            if (Gi("gclaw") || Gi("gac") || 0 < (si().aw || []).length) b = !1;
            else {
                var c;
                if (0 < (si().gb || []).length) c = !0;
                else {
                    var d = Math.max(Di("aw", a), Ei(ji() ? ph() : {}));
                    c = Math.max(Di("gb", a), Ei(ji() ? ph("_gac_gb", !0) : {})) > d
                }
                b = c
            }
            return b
        };
    var Ri = function(a) {
        var b = vb && vb.userAgent || "";
        if (0 > b.indexOf("Safari") || /Chrome|Coast|Opera|Edg|Silk|Android/.test(b)) return !1;
        var c = (/Version\/([\d\.]+)/.exec(b) || [])[1] || "";
        if ("" === c) return !1;
        for (var d = a.split("."), e = c.split("."), f = 0; f < e.length; f++) {
            if (void 0 === d[f]) return !0;
            if (e[f] != d[f]) return Number(e[f]) > Number(d[f])
        }
        return e.length >= d.length
    };
    var Ti = function(a) {
            var b = a ? Ig(a) : B.enhanced_conversion_data,
                c = (a || {}).enhanced_conversions_mode,
                d = void 0;
            if ("manual" === c && b) switch (b._tag_mode) {
                case "CODE":
                    d = "c";
                    break;
                case "AUTO":
                    d = "a";
                    break;
                case "MANUAL":
                    d = "m";
                    break;
                default:
                    d = "c"
            } else d = "automatic" === c ? Si(a) ? "a" : "m" : "c";
            if (B.Promise) try {
                return b ? If(b).then(function(e) {
                    e.ze = d;
                    return e
                }) : Promise.resolve({
                    Ac: "",
                    ze: void 0
                })
            } catch (e) {}
        },
        Si = function(a) {
            var b = a && a[P.vf];
            return b && b[P.qh]
        },
        Ui = function(a) {
            return a
        },
        Vi = function(a) {
            if (ff(P.C)) return a;
            a = a.replace(/&url=([^&#]+)/, function(b, c) {
                var d = pg(decodeURIComponent(c));
                return "&url=" + encodeURIComponent(d)
            });
            a = a.replace(/&ref=([^&#]+)/, function(b, c) {
                var d = pg(decodeURIComponent(c));
                return "&ref=" + encodeURIComponent(d)
            });
            return a
        },
        Wi = function() {
            if (Ld || !0 !== B._gtmdgs && !Ri("11")) return -1;
            var a = Ea('1');
            return Mg(1, 100) < a ? Mg(2, 2) : -1
        },
        Xi = function() {
            return -1 !== vb.userAgent.toLowerCase().indexOf("firefox")
        },
        Yi = function(a) {
            var b;
            if (!a || !a.length) return;
            for (var c = [], d = 0; d < a.length; ++d) {
                var e = a[d];
                e && e.estimated_delivery_date ? c.push("" + e.estimated_delivery_date) : c.push("")
            }
            b = c.join(",");
            return b
        },
        Zi = function() {
            var a = !1;
            return a
        };
    var $i = !1,
        aj = 0,
        bj = [];

    function cj(a) {
        if (!$i) {
            var b = G.createEventObject,
                c = "complete" == G.readyState,
                d = "interactive" == G.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                $i = !0;
                for (var e = 0; e < bj.length; e++) H(bj[e])
            }
            bj.push = function() {
                for (var f = 0; f < arguments.length; f++) H(arguments[f]);
                return 0
            }
        }
    }

    function dj() {
        if (!$i && 140 > aj) {
            aj++;
            try {
                G.documentElement.doScroll("left"), cj()
            } catch (a) {
                B.setTimeout(dj, 50)
            }
        }
    }
    var ej = function(a) {
        $i ? a() : bj.push(a)
    };
    var gj = function(a, b) {
            this.m = !1;
            this.D = [];
            this.I = {
                tags: []
            };
            this.X = !1;
            this.o = this.s = 0;
            fj(this, a, b)
        },
        hj = function(a, b, c, d) {
            if (Hd.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            Vb(d) && (e = O(d, e));
            e.id = c;
            e.status = "timeout";
            return a.I.tags.push(e) - 1
        },
        ij = function(a, b, c, d) {
            var e = a.I.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        jj = function(a) {
            if (!a.m) {
                for (var b = a.D, c = 0; c < b.length; c++) b[c]();
                a.m = !0;
                a.D.length = 0
            }
        },
        fj = function(a, b, c) {
            sa(b) && kj(a, b);
            c && B.setTimeout(function() {
                return jj(a)
            }, Number(c))
        },
        kj = function(a,
            b) {
            var c = Ra(function() {
                return H(function() {
                    b(S.J, a.I)
                })
            });
            a.m ? c() : a.D.push(c)
        },
        lj = function(a) {
            a.s++;
            return Ra(function() {
                a.o++;
                a.X && a.o >= a.s && jj(a)
            })
        };
    var mj = function() {
            function a(d) {
                return !ua(d) || 0 > d ? 0 : d
            }
            if (!U._li && B.performance && B.performance.timing) {
                var b = B.performance.timing.navigationStart,
                    c = ua(ge.get("gtm.start")) ? ge.get("gtm.start") : 0;
                U._li = {
                    cst: a(c - b),
                    cbt: a(Nd - b)
                }
            }
        },
        nj = function(a) {
            B.performance && B.performance.mark(S.J + "_" + a + "_start")
        },
        oj = function(a) {
            if (B.performance) {
                var b = S.J + "_" + a + "_start",
                    c = S.J + "_" + a + "_duration";
                B.performance.measure(c, b);
                var d = B.performance.getEntriesByName(c)[0];
                B.performance.clearMarks(b);
                B.performance.clearMeasures(c);
                var e = U._p || {};
                void 0 === e[a] && (e[a] = d.duration, U._p = e);
                return d.duration
            }
        },
        pj = function() {
            if (B.performance && B.performance.now) {
                var a = U._p || {};
                a.PAGEVIEW = B.performance.now();
                U._p = a
            }
        };
    var qj = {},
        rj = function() {
            return B.GoogleAnalyticsObject && B[B.GoogleAnalyticsObject]
        },
        sj = !1;

    function wj() {
        return B.GoogleAnalyticsObject || "ga"
    }
    var xj = function(a) {},
        yj = function(a, b) {
            return function() {
                var c = rj(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            l = f.get("hitCallback"),
                            k = 0 > g.indexOf("&tid=" + b);
                        k && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        k && (f.set("hitPayload",
                            g, !0), f.set("hitCallback", l, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };
    var Fj = function(a) {},
        Jj = function(a) {},
        Kj =
        function() {
            return "&tc=" + Ac.filter(function(a) {
                return a
            }).length
        },
        Nj = function() {
            2022 <= Lj().length && Mj()
        },
        Oj = function(a) {
            return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*"
        },
        Qj = function() {
            Pj || (Pj = B.setTimeout(Mj, 500))
        },
        Mj = function() {
            Pj && (B.clearTimeout(Pj), Pj = void 0);
            void 0 === Rj || Sj[Rj] && !Tj && !Uj || (Vj[Rj] || Wj.Ki() || 0 >= Xj-- ? (Ed(1), Vj[Rj] = !0) : (Wj.ej(), Fb(Lj(!0)), Sj[Rj] = !0, Yj = Zj = ak = Uj = Tj = ""))
        },
        Lj = function(a) {
            var b = Rj;
            if (void 0 === b) return "";
            var c = Dd("GTM"),
                d = Dd("TAGGING");
            return [bk, Sj[b] ? "" : "&es=1",
                ck[b], Fj(b), c ? "&u=" + c : "", d ? "&ut=" + d : "", Kj(), Tj, Uj, ak, Zj, Jj(a), Yj, "&z=0"
            ].join("")
        },
        ek = function() {
            bk = dk()
        },
        dk = function() {
            return [Od, "&v=3&t=t", "&pid=" + ya(), "&rv=" + S.ed].join("")
        },
        Ij = ["L", "S", "Y"],
        Ej = ["S", "E"],
        fk = {
            sampleRate: "0.005000",
            Sg: "",
            Rg: Number("5")
        },
        gk = 0 <= G.location.search.indexOf("?gtm_latency=") || 0 <= G.location.search.indexOf("&gtm_latency="),
        hk;
    if (!(hk = gk)) {
        var ik = Math.random(),
            jk = fk.sampleRate;
        hk = ik < jk
    }
    var kk = hk,
        lk = {
            label: S.J + " Container",
            children: [{
                label: "Initialization",
                children: []
            }]
        },
        bk = dk(),
        Sj = {},
        Tj = "",
        Uj = "",
        Yj = "",
        Zj = "",
        Hj = {},
        Gj = !1,
        Dj = {},
        mk = {},
        ak = "",
        Rj = void 0,
        ck = {},
        Vj = {},
        Pj = void 0,
        nk = 5;
    0 < fk.Rg && (nk = fk.Rg);
    var Wj = function(a, b) {
            for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
            return {
                Ki: function() {
                    return c < a ? !1 : m() - d[c % a] < b
                },
                ej: function() {
                    var f = c++ % a;
                    d[f] = m()
                }
            }
        }(nk, 1E3),
        Xj = 1E3,
        pk = function(a, b) {
            if (kk && !Vj[a] && Rj !== a) {
                Mj();
                Rj = a;
                Yj = Tj = "";
                ck[a] = "&e=" + Oj(b) + "&eid=" + a;
                Qj();
            }
        },
        qk = function(a, b, c, d) {
            if (kk && b) {
                var e, f = String(b[Xb.sb] || "").replace(/_/g, "");
                0 === f.indexOf("cvt") && (f = "cvt");
                e = f;
                var g = c + e;
                if (!Vj[a]) {
                    a !== Rj && (Mj(), Rj = a);
                    Tj = Tj ? Tj + "." + g : "&tr=" + g;
                    var l = b["function"];
                    if (!l) throw Error("Error: No function name given for function call.");
                    var k = (Cc[l] ? "1" : "2") + e;
                    Yj = Yj ? Yj + "." + k : "&ti=" + k;
                    Qj();
                    Nj()
                }
            }
        };
    var xk = function(a, b, c) {
            if (kk && !Vj[a]) {
                a !== Rj && (Mj(), Rj = a);
                var d = c + b;
                Uj = Uj ? Uj + "." + d : "&epr=" + d;
                Qj();
                Nj()
            }
        },
        yk = function(a, b, c) {};

    function zk(a, b, c, d) {
        var e = Ac[a],
            f = Ak(a, b, c, d);
        if (!f) return null;
        var g = Hc(e[Xb.Pf], c, []);
        if (g && g.length) {
            var l = g[0];
            f = zk(l.index, {
                onSuccess: f,
                onFailure: 1 === l.ig ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function Ak(a, b, c, d) {
        function e() {
            if (f[Xb.Nh]) l();
            else {
                var x = Ic(f, c, []);
                var z = x[Xb.Xg];
                if (null != z)
                    for (var w = 0; w < z.length; w++)
                        if (!ff(z[w])) {
                            l();
                            return
                        }
                var y = hj(c.tb, String(f[Xb.sb]), Number(f[Xb.Qf]), x[Xb.Oh]),
                    A = !1;
                x.vtp_gtmOnSuccess = function() {
                    if (!A) {
                        A = !0;
                        var D = m() - F;
                        qk(c.id, Ac[a], "5", D);
                        ij(c.tb, y, "success",
                            D);
                        g()
                    }
                };
                x.vtp_gtmOnFailure = function() {
                    if (!A) {
                        A = !0;
                        var D = m() - F;
                        qk(c.id, Ac[a], "6", D);
                        ij(c.tb, y, "failure", D);
                        l()
                    }
                };
                x.vtp_gtmTagId = f.tag_id;
                x.vtp_gtmEventId = c.id;
                qk(c.id, f, "1");
                var C = function() {
                    var D = m() - F;
                    qk(c.id, f, "7", D);
                    ij(c.tb, y, "exception", D);
                    A || (A = !0, l())
                };
                var F = m();
                try {
                    Gc(x, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (D) {
                    C(D)
                }
            }
        }
        var f = Ac[a],
            g = b.onSuccess,
            l = b.onFailure,
            k = b.terminate;
        if (c.Ie(f)) return null;
        var n = Hc(f[Xb.Rf], c, []);
        if (n && n.length) {
            var p = n[0],
                r = zk(p.index, {
                    onSuccess: g,
                    onFailure: l,
                    terminate: k
                }, c, d);
            if (!r) return null;
            g = r;
            l = 2 === p.ig ? k : r
        }
        if (f[Xb.Lf] || f[Xb.Sh]) {
            var v =
                f[Xb.Lf] ? Bc : c.oj,
                t = g,
                q = l;
            if (!v[a]) {
                e = Ra(e);
                var u = Bk(a, v, e);
                g = u.onSuccess;
                l = u.onFailure
            }
            return function() {
                v[a](t, q)
            }
        }
        return e
    }

    function Bk(a, b, c) {
        var d = [],
            e = [];
        b[a] = Ck(d, e, c);
        return {
            onSuccess: function() {
                b[a] = Dk;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            onFailure: function() {
                b[a] = Ek;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function Ck(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function Dk(a) {
        a()
    }

    function Ek(a, b) {
        b()
    };
    var Hk = function(a, b) {
        for (var c = [], d = 0; d < Ac.length; d++)
            if (a[d]) {
                var e = Ac[d];
                var f = lj(b.tb);
                try {
                    var g = zk(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var l = c,
                            k = l.push,
                            n = d,
                            p = e["function"];
                        if (!p) throw "Error: No function name given for function call.";
                        var r = Cc[p];
                        k.call(l, {
                            Kg: n,
                            zg: r ? r.priorityOverride || 0 : 0,
                            execute: g
                        })
                    } else Fk(d, b), f()
                } catch (q) {
                    f()
                }
            }
        var v = b.tb;
        v.X = !0;
        v.o >= v.s && jj(v);
        c.sort(Gk);
        for (var t = 0; t < c.length; t++) c[t].execute();
        return 0 < c.length
    };

    function Gk(a, b) {
        var c, d = b.zg,
            e = a.zg;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var g = a.Kg,
                l = b.Kg;
            f = g > l ? 1 : g < l ? -1 : 0
        }
        return f
    }

    function Fk(a, b) {
        if (!kk) return;
        var c = function(d) {
            var e = b.Ie(Ac[d]) ? "3" : "4",
                f = Hc(Ac[d][Xb.Pf], b, []);
            f && f.length && c(f[0].index);
            qk(b.id, Ac[d], e);
            var g = Hc(Ac[d][Xb.Rf], b, []);
            g && g.length && c(g[0].index)
        };
        c(a);
    }
    var Ik = !1,
        Ok = function(a) {
            var b = m(),
                c = a["gtm.uniqueEventId"],
                d = a.event;
            if ("gtm.js" === d) {
                if (Ik) return !1;
                Ik = !0;
            }
            var g = ve(c),
                l = !1;
            if (!g.active) {
                if ("gtm.js" !== d) return !1;
                l = !0;
                g = ve(Number.MAX_SAFE_INTEGER)
            }
            pk(c, d);
            var k = a.eventCallback,
                n = a.eventTimeout,
                p = k;
            var r = {
                id: c,
                name: d,
                Ie: te(g.isAllowed),
                oj: [],
                sg: function() {
                    Ed(6)
                },
                bg: Jk(c),
                tb: new gj(p, n)
            };
            r.ag = Kk();
            Lk(c, r.tb);
            var v = Mc(r);
            l && (v = Mk(v));
            var t = Hk(v, r);
            "gtm.js" !== d && "gtm.sync" !== d || xj(S.J);
            return Nk(v, t)
        };

    function Jk(a) {
        return function(b) {
            kk && (Wb(b) || yk(a, "input", b))
        }
    }

    function Lk(a, b) {
        ke(a, "event", 1);
        ke(a, "ecommerce", 1);
        ke(a, "gtm");
        ke(a, "eventModel");
    }

    function Kk() {
        var a = {};
        a.event = je("event", 1);
        a.ecommerce = je("ecommerce", 1);
        a.gtm = je("gtm");
        a.eventModel = je("eventModel");
        return a
    }

    function Mk(a) {
        for (var b = [], c = 0; c < a.length; c++) a[c] && Gd[String(Ac[c][Xb.sb])] && (b[c] = !0);
        return b
    }

    function Nk(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && Ac[c] && !Hd[String(Ac[c][Xb.sb])]) return !0;
        return !1
    }

    function Pk(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return og("" + c + b).href
        }
    }

    function Qk(a, b) {
        return Rk() ? Pk(a, b) : void 0
    }

    function Rk() {
        var a = !1;
        return a
    }

    function Sk() {
        return !!S.fd && "SGTM_TOKEN" !== S.fd.replaceAll("@@", "")
    };
    var Tk = function() {
        var a = !1;
        return a
    };
    var Uk;
    if (3 === S.ed.length) Uk = "g";
    else {
        var Vk = "G";
        Vk = "g";
        Uk = Vk
    }
    var Wk = {
            "": "n",
            UA: "u",
            AW: "a",
            DC: "d",
            G: "e",
            GF: "f",
            HA: "h",
            GTM: Uk,
            OPT: "o"
        },
        Xk = function(a) {
            var b = S.J.split("-"),
                c = b[0].toUpperCase(),
                d = Wk[c] || "i",
                e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
                f;
            if (3 === S.ed.length) {
                var g = "w";
                g = Tk() ? "s" : "o";
                f = "2" + g
            } else f = "";
            return f + d + S.ed + e
        };

    function Yk(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var Zk = function(a, b) {
        a.addEventListener && a.addEventListener.call(a, "message", b, !1)
    };

    function $k() {
        return ib("iPhone") && !ib("iPod") && !ib("iPad")
    };
    ib("Opera");
    ib("Trident") || ib("MSIE");
    ib("Edge");
    !ib("Gecko") || -1 != fb.toLowerCase().indexOf("webkit") && !ib("Edge") || ib("Trident") || ib("MSIE") || ib("Edge"); - 1 != fb.toLowerCase().indexOf("webkit") && !ib("Edge") && ib("Mobile");
    ib("Macintosh");
    ib("Windows");
    ib("Linux") || ib("CrOS");
    var al = na.navigator || null;
    al && (al.appVersion || "").indexOf("X11");
    ib("Android");
    $k();
    ib("iPad");
    ib("iPod");
    $k() || ib("iPad") || ib("iPod");
    fb.toLowerCase().indexOf("kaios");
    var bl = function(a, b) {
            for (var c = a, d = 0; 50 > d; ++d) {
                var e;
                try {
                    e = !(!c.frames || !c.frames[b])
                } catch (l) {
                    e = !1
                }
                if (e) return c;
                var f;
                a: {
                    try {
                        var g = c.parent;
                        if (g && g != c) {
                            f = g;
                            break a
                        }
                    } catch (l) {}
                    f = null
                }
                if (!(c = f)) break
            }
            return null
        },
        cl = function(a) {
            var b = G;
            b = void 0 === b ? window.document : b;
            if (!a || !b.head) return null;
            var c, d;
            d = void 0 === d ? document : d;
            c = d.createElement("meta");
            b.head.appendChild(c);
            c.httpEquiv = "origin-trial";
            c.content = a;
            return c
        };
    var dl = function() {};
    var el = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        fl = function(a, b) {
            this.o = a;
            this.m = null;
            this.D = {};
            this.X = 0;
            this.I = void 0 === b ? 500 : b;
            this.s = null
        };
    ma(fl, dl);
    var hl = function(a) {
        return "function" === typeof a.o.__tcfapi || null != gl(a)
    };
    fl.prototype.addEventListener = function(a) {
        var b = {},
            c = tb(function() {
                return a(b)
            }),
            d = 0; - 1 !== this.I && (d = setTimeout(function() {
            b.tcString = "tcunavailable";
            b.internalErrorState = 1;
            c()
        }, this.I));
        var e = function(f, g) {
            clearTimeout(d);
            f ? (b = f, b.internalErrorState = el(b), g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
            a(b)
        };
        try {
            il(this, "addEventListener", e)
        } catch (f) {
            b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d),
                d = 0), c()
        }
    };
    fl.prototype.removeEventListener = function(a) {
        a && a.listenerId && il(this, "removeEventListener", null, a.listenerId)
    };
    var kl = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (0 === g) return !1;
            var l = c;
            2 === c ? (l = 0, 2 === g && (l = 1)) : 3 === c && (l = 1, 1 === g && (l = 0));
            var k;
            if (0 === l)
                if (a.purpose && a.vendor) {
                    var n = jl(a.vendor.consents, void 0 === d ? "755" : d);
                    k = n && "1" === b && a.purposeOneTreatment && ((Ce(ze) ? 0 : "DE" === a.publisherCC) || "CH" === a.publisherCC) ? !0 : n && jl(a.purpose.consents, b)
                } else k = !0;
            else k =
                1 === l ? a.purpose && a.vendor ? jl(a.purpose.legitimateInterests, b) && jl(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return k
        },
        jl = function(a, b) {
            return !(!a || !a[b])
        },
        il = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.o.__tcfapi) {
                var e = a.o.__tcfapi;
                e(b, 2, c, d)
            } else if (gl(a)) {
                ll(a);
                var f = ++a.X;
                a.D[f] = c;
                if (a.m) {
                    var g = {};
                    a.m.postMessage((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, g), "*")
                }
            } else c({}, !1)
        },
        gl = function(a) {
            if (a.m) return a.m;
            a.m = bl(a.o, "__tcfapiLocator");
            return a.m
        },
        ll = function(a) {
            a.s || (a.s = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.D[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, Zk(a.o, a.s))
        };
    var ml = !0;
    ml = !1;
    Be().m(ze.m);
    var nl = {
            1: 0,
            3: 0,
            4: 0,
            7: 3,
            9: 3,
            10: 3
        },
        ol = Yk("", 550),
        pl = Yk("", 500);

    function ql() {
        var a = U.tcf || {};
        return U.tcf = a
    }
    var rl = function(a, b) {
            this.s = a;
            this.m = b;
            this.o = m();
        },
        sl = function(a) {},
        tl = function(a) {},
        zl = function() {
            var a = ql(),
                b = new fl(B, ml ? 3E3 : -1),
                c = new rl(b, a);
            if ((ul() ? !0 === B.gtag_enable_tcf_support : !1 !== B.gtag_enable_tcf_support) && !a.active && ("function" === typeof B.__tcfapi || hl(b))) {
                a.active = !0;
                a.Dc = {};
                vl();
                var d = null;
                ml ? d = B.setTimeout(function() {
                    wl(a);
                    xl(a);
                    d = null
                }, pl) : a.tcString = "tcunavailable";
                try {
                    b.addEventListener(function(e) {
                        d && (clearTimeout(d), d = null);
                        if (0 !== e.internalErrorState) wl(a), xl(a), sl(c);
                        else {
                            var f;
                            a.gdprApplies = e.gdprApplies;
                            if (!1 === e.gdprApplies) f = yl(), b.removeEventListener(e);
                            else if ("tcloaded" === e.eventStatus || "useractioncomplete" === e.eventStatus || "cmpuishown" === e.eventStatus) {
                                var g = {},
                                    l;
                                for (l in nl)
                                    if (nl.hasOwnProperty(l))
                                        if ("1" === l) {
                                            var k, n = e,
                                                p = !0;
                                            p = void 0 === p ? !1 : p;
                                            var r;
                                            var v = n;
                                            !1 === v.gdprApplies ? r = !0 : (void 0 === v.internalErrorState && (v.internalErrorState = el(v)), r = "error" === v.cmpStatus || 0 !== v.internalErrorState || "loaded" === v.cmpStatus && ("tcloaded" === v.eventStatus || "useractioncomplete" ===
                                                v.eventStatus) ? !0 : !1);
                                            k = r ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : kl(n, "1", 0) : !1;
                                            g["1"] = k
                                        } else g[l] = kl(e, l, nl[l]);
                                f = g
                            }
                            f && (a.tcString = e.tcString || "tcempty", a.Dc = f, xl(a), sl(c))
                        }
                    }), tl(c)
                } catch (e) {
                    d && (clearTimeout(d), d = null), wl(a), xl(a)
                }
            }
        };

    function wl(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        ml && (a.Dc = yl())
    }

    function vl() {
        var a = {},
            b = (a.ad_storage = "denied", a.wait_for_update = ol, a);
        cf(b)
    }
    var ul = function() {
        var a = !1;
        a = !0;
        return a
    };

    function yl() {
        var a = {},
            b;
        for (b in nl) nl.hasOwnProperty(b) && (a[b] = !0);
        return a
    }

    function xl(a) {
        var b = {},
            c = (b.ad_storage = a.Dc["1"] ? "granted" : "denied", b);
        ef(c, 0, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: Al()
        })
    }
    var Bl = function() {
            var a = ql();
            if (a.active && void 0 !== a.loadTime) return Number(a.loadTime)
        },
        Al = function() {
            var a = ql();
            return a.active ? a.tcString || "" : ""
        },
        Cl = function() {
            var a = ql();
            return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
        },
        Dl = function(a) {
            if (!nl.hasOwnProperty(String(a))) return !0;
            var b = ql();
            return b.active && b.Dc ? !!b.Dc[String(a)] : !0
        };
    var El = function(a, b) {
            var c = a && !ff(P.C);
            return b && c ? "0" : b
        },
        Jl = function(a) {
            function b(q) {
                var u;
                U.reported_gclid || (U.reported_gclid = {});
                u = U.reported_gclid;
                var x, z = g;
                x = !g || Ne() && !ff(P.C) ? k + (q ? "gcu" : "gcs") : k + "." + (f.prefix || "_gcl") + (q ? "gcu" : "gcs");
                if (!u[x]) {
                    u[x] = !0;
                    var w = [],
                        y = {},
                        A = function(N, M) {
                            M && (w.push(N + "=" + encodeURIComponent(M)), y[N] = !0)
                        },
                        C = "https://www.google.com";
                    if (Ne()) {
                        var F = ff(P.C);
                        A("gcs", gf());
                        q && A("gcu", "1");
                        Oe() && A("gcd", hf());
                        U.dedupe_gclid || (U.dedupe_gclid = "" + dh());
                        A("rnd", U.dedupe_gclid);
                        if ((!k || n && "aw.ds" !== n) && ff(P.C)) {
                            var D = mi("_gcl_aw");
                            A("gclaw", D.join("."))
                        }
                        A("url", String(B.location).split(/[?#]/)[0]);
                        A("dclid", El(d, p));
                        var E = !1;
                        E = !0;
                        F || !d && !E || (C = "https://pagead2.googlesyndication.com")
                    }
                    A("gdpr_consent",
                        Al()), A("gdpr", Cl());
                    "1" === Xh(!1)._up && A("gtm_up", "1");
                    A("gclid", El(d, k));
                    A("gclsrc", n);
                    if (!(y.gclid || y.dclid || y.gclaw) && (A("gbraid", El(d, r)), y.gbraid && Gl && (z = !1), !y.gbraid && Ne() && ff(P.C))) {
                        var L = mi("_gcl_gb");
                        0 < L.length && (A("gclgb", L.join(".")), Gl && (z = !1))
                    }
                    A("gtm", Xk(!e));
                    g && ff(P.C) && (nh(f || {}), z && A("auid", kh[lh(f.prefix)] || ""));
                    Hl || a.md && A("did", a.md), Il && (a.Sb && A("gdid", a.Sb), a.Rb && A("edid", a.Rb));
                    var J = C + "/pagead/landing?" + w.join("&");
                    Mb(J)
                }
            }
            var c = !!a.we,
                d = !!a.Ga,
                e = a.R,
                f = void 0 === a.ub ? {} : a.ub,
                g = void 0 === a.vd ? !0 : a.vd,
                l = si(),
                k = l.gclid || "",
                n = l.gclsrc,
                p = l.dclid || "",
                r = l.gbraid || "",
                v = !c && ((!k || n && "aw.ds" !== n ? !1 : !0) || r),
                t = Ne();
            if (v || t) t ? kf(function() {
                b();
                ff(P.C) || jf(function(q) {
                    return b(!0, q.consentEventId)
                }, P.C)
            }, [P.C]) : b()
        },
        Fl = function(a) {
            var b = String(B.location).split(/[?#]/)[0],
                c = S.$g || B._CONSENT_MODE_SALT;
            return a ? c ? String(Ng(b + a + c)) : "0" : ""
        },
        Hl = !1;
    var Il = !1;
    Il = !0;
    var Gl = !1;
    var Ll = function(a) {
            if (!Ne() || Ke(P.C)) {
                var b = Kl(a);
                if (b && !(18E5 < m() - b.qg)) return b.gg
            }
        },
        Kl = function(a) {
            a = a || {};
            if (Pg(B) && G.cookie) {
                var b = gh(qi(a.prefix) + "_ec", a.domain, a.path, ["1"], P.C);
                if (b) {
                    var c = b.split(".");
                    if (3 === c.length) {
                        var d = 1E3 * Number(c[1]) || 0;
                        if (0 !== d) return {
                            gg: c[0] + "." + c[1],
                            li: d,
                            qg: 1E3 * Number(c[2]) || 0
                        }
                    }
                }
            }
        };
    var Ml = !1;
    Ml = !0;
    var Nl = !1;
    var Ol = function() {
            this.m = {}
        },
        Pl = function(a, b, c) {
            null != c && (a.m[b] = c)
        },
        Ql = function(a) {
            return Object.keys(a.m).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.m[b])
            }).join("&")
        },
        Sl = function(a, b, c, d, e) {
            if (!Ne()) {
                Rl(a, b, c, d, e);
                return
            }
            kf(function() {
                ff(P.C) ? Rl(a, b, c, d, e) : d && d()
            }, [P.C]);
        };
    var Tl = function(a, b, c) {
            c = void 0 === c ? !0 : c;
            var d = {
                    gclgb: function() {
                        return Hi("gb", b, c).join(".")
                    },
                    gacgb: function() {
                        return Oi(c)
                    },
                    gclaw: function() {
                        return Li(b, c).join(".")
                    },
                    gac: function() {
                        return Ni(c)
                    }
                },
                e = Qi(b);
            Nl && (e = !1);
            var f = e ? "gclgb" : "gclaw",
                g = e ? "gacgb" : "gac",
                l = d[g],
                k = (0, d[f])(),
                n = "_gcl" !== b ? "" : l();
            k && Pl(a, f, k);
            n && Pl(a, g, n)
        },
        Rl = function(a, b, c, d, e) {
            c = c || {};
            var f = c.ub || {},
                g = new Ol;
            Hf(b, function(l, k) {
                Pl(g, "em", l);
                Pl(g, "gtm", Xk());
                Ne() && (Pl(g, "gcs", gf()), Pl(g, "gcd", hf()));
                Tl(g, qi(f.prefix), c.Ga);
                Pl(g,
                    "auid", kh[lh(f.prefix)]);
                Ml && e && (e.rd && Pl(g, "gdid", e.rd), e.od && Pl(g, "edid", e.od));
                var z = Ql(g);
                Mb("https://google.com/pagead/form-data/" + a + "?" + z);
                d && d()
            })
        };
    var Ul = /[A-Z]+/,
        Vl = /\s/,
        Wl = function(a) {
            if (ta(a)) {
                a = Na(a);
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (Ul.test(c)) {
                        var d = !1;
                        d = !0;
                        for (var e = a.substring(b + 1).split("/"), f = 0; f < e.length; f++)
                            if (!e[f] || Vl.test(e[f]) && ("AW" !== c || 1 !== f || !d)) return;
                        return {
                            id: a,
                            prefix: c,
                            containerId: c + "-" + e[0],
                            M: e
                        }
                    }
                }
            }
        },
        Yl = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d =
                    Wl(a[c]);
                d && (b[d.id] = d)
            }
            Xl(b);
            var e = [];
            Ba(b, function(f, g) {
                e.push(g)
            });
            return e
        };

    function Xl(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.M[1] && b.push(d.containerId)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var $l = function(a, b, c, d) {
            return (2 === Zl() || d || "http:" != B.location.protocol ? a : b) + c
        },
        Zl = function() {
            var a = Db(),
                b;
            if (1 === a) a: {
                var c = Kd;c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, f = 1, g = G.getElementsByTagName("script"), l = 0; l < g.length && 100 > l; l++) {
                    var k = g[l].src;
                    if (k) {
                        k = k.toLowerCase();
                        if (0 === k.indexOf(e)) {
                            b = 3;
                            break a
                        }
                        1 === f && 0 === k.indexOf(d) && (f = 2)
                    }
                }
                b = f
            }
            else b = a;
            return b
        };
    var bm = function(a, b, c) {
            if (B[a.functionName]) return b.Ne && H(b.Ne), B[a.functionName];
            var d = am();
            B[a.functionName] = d;
            if (a.jd)
                for (var e = 0; e < a.jd.length; e++) B[a.jd[e]] = B[a.jd[e]] || am();
            a.ud && void 0 === B[a.ud] && (B[a.ud] = c);
            Cb($l("https://", "http://", a.Te), b.Ne, b.Vi);
            return d
        },
        am = function() {
            var a = function() {
                a.q = a.q || [];
                a.q.push(arguments)
            };
            return a
        },
        cm = {
            functionName: "_googWcmImpl",
            ud: "_googWcmAk",
            Te: "www.gstatic.com/wcm/loader.js"
        },
        dm = {
            functionName: "_gaPhoneImpl",
            ud: "ga_wpid",
            Te: "www.gstatic.com/gaphone/loader.js"
        },
        em = {
            Wg: "",
            Th: "5"
        },
        fm = {
            functionName: "_googCallTrackingImpl",
            jd: [dm.functionName, cm.functionName],
            Te: "www.gstatic.com/call-tracking/call-tracking_" + (em.Wg || em.Th) + ".js"
        },
        gm = {},
        hm = function(a, b, c, d) {
            Ed(22);
            if (c) {
                d = d || {};
                var e = bm(cm, d, a),
                    f = {
                        ak: a,
                        cl: b
                    };
                void 0 === d.Pa && (f.autoreplace = c);
                e(2, d.Pa, f, c, 0, Oa(), d.options)
            }
        },
        im = function(a, b, c, d) {
            Ed(21);
            if (b && c) {
                d = d || {};
                for (var e = {
                        countryNameCode: c,
                        destinationNumber: b,
                        retrievalTime: Oa()
                    }, f = 0; f < a.length; f++) {
                    var g = a[f];
                    gm[g.id] ||
                        (g && "AW" === g.prefix && !e.adData && 2 <= g.M.length ? (e.adData = {
                            ak: g.M[0],
                            cl: g.M[1]
                        }, gm[g.id] = !0) : g && "UA" === g.prefix && !e.gaData && (e.gaData = {
                            gaWpid: g.containerId
                        }, gm[g.id] = !0))
                }(e.gaData || e.adData) && bm(fm, d)(d.Pa, e, d.options)
            }
        },
        jm = function() {
            var a = !1;
            return a
        },
        km = function(a, b) {
            if (a)
                if (Tk()) {} else {
                    if (ta(a)) {
                        var c =
                            Wl(a);
                        if (!c) return;
                        a = c
                    }
                    var d = void 0,
                        e = !1,
                        f = b.getWithConfig(P.Bh);
                    if (f && wa(f)) {
                        d = [];
                        for (var g = 0; g < f.length; g++) {
                            var l = Wl(f[g]);
                            l && (d.push(l), (a.id === l.id || a.id === a.containerId && a.containerId === l.containerId) && (e = !0))
                        }
                    }
                    if (!d || e) {
                        var k = b.getWithConfig(P.Cf),
                            n;
                        if (k) {
                            wa(k) ? n = k : n = [k];
                            var p = b.getWithConfig(P.Af),
                                r = b.getWithConfig(P.Bf),
                                v = b.getWithConfig(P.Df),
                                t = b.getWithConfig(P.Ah),
                                q = p || r,
                                u = 1;
                            "UA" !== a.prefix || d || (u = 5);
                            for (var x = 0; x < n.length; x++)
                                if (x < u)
                                    if (d) im(d, n[x], t, {
                                        Pa: q,
                                        options: v
                                    });
                                    else if ("AW" === a.prefix &&
                                a.M[1]) jm() ? im([a], n[x], t || "US", {
                                Pa: q,
                                options: v
                            }) : hm(a.M[0], a.M[1], n[x], {
                                Pa: q,
                                options: v
                            });
                            else if ("UA" === a.prefix)
                                if (jm()) im([a], n[x], t || "US", {
                                    Pa: q
                                });
                                else {
                                    var z = a.containerId,
                                        w = n[x],
                                        y = {
                                            Pa: q
                                        };
                                    Ed(23);
                                    if (w) {
                                        y = y || {};
                                        var A = bm(dm, y, z),
                                            C = {};
                                        void 0 !== y.Pa ? C.receiver = y.Pa : C.replace = w;
                                        C.ga_wpid = z;
                                        C.destination = w;
                                        A(2, Oa(), C)
                                    }
                                }
                        }
                    }
                }
        };
    var mm = function() {
            var a = U.floc;
            if (a) {
                var b = a.ts,
                    c = a.floc;
                if (b && c && 1E3 > m() - b) return Promise.resolve(c)
            }
            var d = void 0;
            try {
                d = Promise.race([G.interestCohort().then(function(e) {
                    U.floc = {
                        ts: m(),
                        floc: e
                    };
                    return e
                }), new Promise(function(e) {
                    B.setTimeout(function() {
                        return e()
                    }, lm)
                })]).catch(function() {})
            } catch (e) {
                return
            }
            return d
        },
        om = function() {
            if (!B.Promise) return !1;
            sa(G.interestCohort) || nm || (nm = !0, cl("A489+ZNTpP/HCOD+k3I13nobRVH7eyh5fz5LGhYvQlNf9WauHk/0awCtXOEoWTIK9JN8bgzgn2SfPdaFXe5O9QkAAACKeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"));
            return sa(G.interestCohort)
        },
        nm = !1,
        lm = Number("200");
    var qm = function(a, b) {
            var c = a.rg,
                d = a.Og;
            a.ld && (ei(c[P.Lb], !!c[P.N]) && xi(pm, b), ui(b), Ai(pm, b), Pi(b));
            c[P.N] && zi(pm, c[P.N], c[P.Mb], !!c[P.ob], b.prefix);
            d && Ci(["aw", "dc", "gb"])
        },
        rm = function(a, b, c, d) {
            var e = a.Qg,
                f = a.callback,
                g = a.ug;
            if ("function" === typeof f)
                if (e === P.Hd && void 0 === g) {
                    var l = d(b.prefix, c);
                    0 === l.length ? f(void 0) : 1 === l.length ? f(l[0]) : f(l)
                } else e === P.ph ? (Ed(65), nh(b, !1), f(kh[lh(b.prefix)])) : f(g)
        },
        pm = ["aw", "dc", "gb"];
    var sm = function(a, b, c, d, e) {
            var f;
            if (f = !b && !a.m) {
                var g;
                if (g = !a.isGtmEvent) {
                    var l = a.s.remoteConfig[P.jc];
                    g = l ? "auto_detect" === l.mode || "selectors" === l.mode || "code" === l.mode : !1
                }
                f = g
            }
            if (f) {
                var k = a.F(P.ya);
                if (null !== k) {
                    var n;
                    k && Vb(k) ? n = k : n = Hg(a.getRemoteConfig(P.jc));
                    n && Sl(a.I, n, {
                        ub: e,
                        Ga: c
                    }, void 0, d)
                }
            }
        },
        tm = function(a, b) {},
        um = function(a, b) {
            a.ja("google_gtm_url_processor", function(c) {
                b && (c = Vi(c));
                return c = Ui(c)
            })
        },
        vm = function(a, b) {
            if (a.m || !a.isGtmEvent) {}
            a.ab("gdpr_consent", Al()), a.ab("gdpr", Cl());
            Ne() && a.m && (a.O("gcs", gf()), Oe() && a.O("gcd", hf()), b && a.O("gcu", "1"))
        },
        wm = function(a, b) {
            if (b || xg(a.I)) {
                var c = m(),
                    d = Dg();
                if (0 !== d.elements.length) {
                    for (var e = [], f = [], g = 0; g < d.elements.length; ++g) {
                        var l = d.elements[g];
                        e.push(l.querySelector);
                        f.push(Eg(l))
                    }
                    var k = m();
                    a.O("ec_sel", e.join(","));
                    a.O("ec_meta", f.join(","));
                    a.O("ec_lat", String(k - c));
                    a.O("ec_s", d.status)
                }
            }
        },
        xm = function(a) {
            if (!a.m) a.F(P.Z) && a.ja("google_gtag_event_data", {
                items: a.F(P.Z)
            });
            else if (a.eventName == P.va) {
                a.mc({
                    google_conversion_merchant_id: a.F(P.Nd),
                    google_basket_feed_country: a.F(P.Ld),
                    google_basket_feed_language: a.F(P.Md),
                    google_basket_discount: a.F(P.Kd),
                    google_basket_transaction_type: a.eventName,
                    google_disable_merchant_reported_conversions: !0 === a.F(P.rf)
                });
                Tk() && a.ja("google_disable_merchant_reported_conversions", !0);
                var b;
                var c = a.F(P.Z);
                if (c) {
                    for (var d = [], e = 0; e < c.length; ++e) {
                        var f = c[e];
                        f && d.push({
                            item_id: f.id,
                            quantity: f.quantity,
                            value: f.price,
                            start_date: f.start_date,
                            end_date: f.end_date
                        })
                    }
                    b = d
                } else b = void 0;
                var g = b;
                g && a.ja("google_conversion_items",
                    g)
            }
        },
        ym = function(a) {
            var b;
            var c = {};
            a.isGtmEvent && !a.m ? a.eventName && (c.event = a.eventName) : c.event = a.eventName;
            var d = a.s.eventModel;
            if (d) {
                O(d, c);
                for (var e in c) c.hasOwnProperty(e) && P.Ug[e.split(".")[0]] && delete c[e];
                b = c
            } else b = null;
            var f = b;
            f && a.ja("google_custom_params", f)
        },
        zm = function(a) {
            Tk() && (a.ja("opt_image_generator", function() {
                return new Image
            }), a.ja("google_enable_display_cookie_match", !1))
        },
        Am = function(a) {
            var b = Zi();
            b && a.qc("apcm");
            if (!b) {
                a.qc("capi");
                a.qc("capiorig");
            }
            if (!a.isGtmEvent) {
                var c = Wi();
                0 === c ? a.ab("dg", "c") : 1 === c && a.ab("dg", "e")
            }
        },
        Bm = function(a, b) {
            var c = Qk(a, "/pagead/conversion_async.js");
            if (c) return c;
            var d = $l("https://", "http://", "www.googleadservices.com"),
                e = !b.isGtmEvent && 1 === Wi();
            if (Xi() || e) d = "https://www.google.com";
            return d + "/pagead/conversion_async.js"
        },
        Cm = !1,
        Dm = !1;
    var Em = !1;
    var Fm = !1;
    Fm = !0;
    var Gm = !1;
    var Hm = [],
        Im = function(a) {
            var b = B.google_trackConversion,
                c = a.o.gtm_onFailure;
            "function" == typeof b ? b(a.o) || c() : c()
        },
        Jm = function() {
            for (; 0 < Hm.length;) Im(Hm.shift())
        },
        Km = function(a, b) {
            var c = Cm;
            Dm && (c = b.getContainerTypeLoaded("AW"));
            if (!c) {
                Cm = !0;
                mj();
                var d = function() {
                    Dm && b.setContainerTypeLoaded("AW", !0);
                    Jm();
                    Hm = {
                        push: Im
                    }
                };
                Tk() ?
                    d() : Cb(a, d, function() {
                        Jm();
                        Cm = !1;
                        Dm && b.setContainerTypeLoaded("AW", !1)
                    })
            }
        },
        Lm = function(a, b, c) {
            var d = Wl(a);
            this.R = a;
            this.I = d.M[0] || "";
            this.X = d.containerId === d.id;
            this.D = d.M[1];
            this.m = void 0 !== this.D;
            this.eventName = b;
            this.isGtmEvent = c.isGtmEvent;
            this.s = c;
            this.o = {
                google_conversion_id: this.I,
                google_conversion_label: this.D,
                google_conversion_format: "3",
                google_conversion_color: "ffffff",
                google_conversion_domain: "",
                google_gtm: Xk()
            }
        };
    h = Lm.prototype;
    h.ja = function(a, b) {
        this.o[a] = b
    };
    h.ij = function() {
        delete this.o.google_transport_url
    };
    h.mc = function(a) {
        for (var b in a) a.hasOwnProperty(b) && (this.o[b] = a[b])
    };
    h.O = function(a, b) {
        void 0 != b && "" !== b && (this.o.google_additional_conversion_params = this.o.google_additional_conversion_params || {}, this.o.google_additional_conversion_params[a] = b)
    };
    h.ab = function(a, b) {
        void 0 != b && "" !== b && (this.o.google_additional_params = this.o.google_additional_params || {}, this.o.google_additional_params[a] = b)
    };
    h.qc = function(a) {
        this.o.google_gtm_experiments = this.o.google_gtm_experiments || {};
        this.o.google_gtm_experiments[a] = !0
    };
    h.F = function(a) {
        return this.s.getWithConfig(a)
    };
    h.getRemoteConfig = function(a) {
        return this.s.remoteConfig[a]
    };
    var Nm = function(a, b, c, d) {
        function e(E, L) {
            function J() {
                Hm.push(E);
                Dm && d.getContainerTypeLoaded("AW") && Jm()
            }
            var N = [];
            if (L) {
                E.m && k && (nh(y), E.O("auid", kh[lh(n)]));
                var K = (g(P.Sd) || {})[E.D];
                wm(E, Si(K));
                var Q = !0 === g(P.Nc) || K;
                if (E.m && Q && (!Gm || !Qi())) {
                    var V = Ti(K);
                    V && N.push(V.then(function(ca) {
                        E.O("em", ca.Ac);
                        E.O("ec_mode", ca.ze)
                    }))
                }
            }
            if (N.length) try {
                Promise.all(N).then(function() {
                    J()
                });
                return
            } catch (ca) {}
            J()
        }
        var f = new Lm(a, b, d),
            g = function(E) {
                return d.getWithConfig(E)
            },
            l = void 0 != g(P.T) && !1 !== g(P.T),
            k = !1 !==
            g(P.ma),
            n = g(P.Da) || g(P.oa),
            p = g(P.fa),
            r = g(P.na),
            v = g(P.Ea),
            t = {};
        if (!Em) {
            var q = Uf(d, P.V);
            t.eg = Za(Vb(q) ? q : {})
        }
        if (Fm) {
            var u = Uf(d, P.V, 1),
                x = Uf(d, P.V, 2);
            t.rd = Za(Vb(u) ? u : {}, ".");
            t.od = Za(Vb(x) ? x : {}, ".")
        }
        var z = g(P.qa),
            w = Bm(z, f);
        Km(w, d);
        var y = {
                prefix: n,
                domain: p,
                eb: r,
                flags: v
            },
            A = b == P.xa;
        if (A && Mm(f, k, y, l, t), b === P.Ja) {
            var C = {};
            C.callback = f.F(P.Wa);
            var F = f.F(P.Ka);
            C.Qg = F;
            C.ug = f.F(String(F));
            rm(C, y, l, Li);
            return
        }
        var D = !1 === g(P.hf) || !1 === g(P.Nb);
        if (!A || !f.m &&
            !D)
            if (!0 === g(P.Jd) && (f.m = !1), !1 !== g(P.Ca) || f.m) {
                f.mc({
                    google_remarketing_only: !f.m,
                    google_conversion_language: f.F(P.nb),
                    google_conversion_value: f.F(P.da),
                    google_conversion_currency: f.F(P.ca),
                    google_conversion_order_id: f.F(P.Ya),
                    google_user_id: f.F(P.rb),
                    google_conversion_page_url: f.F(P.pb),
                    google_conversion_referrer_url: f.F(P.La)
                });
                f.mc({
                    onload_callback: f.s.onSuccess,
                    gtm_onFailure: f.s.onFailure
                });
                Am(f);
                f.m && f.ja("google_transport_url", Pk(f.F(P.qa), "/"));
                f.ja("google_restricted_data_processing", f.F(P.fc));
                zm(f);
                !1 === f.F(P.Ca) && f.ja("google_allow_ad_personalization_signals", !1);
                k ? f.mc({
                    google_gcl_cookie_prefix: y.prefix,
                    google_gcl_cookie_domain: y.domain,
                    google_gcl_cookie_max_age_seconds: y.eb,
                    google_gcl_cookie_flags: y.flags
                }) : f.ja("google_read_gcl_cookie_opt_out", !0);
                ym(f);
                xm(f);
                "1" === Xh(!1)._up && f.O("gtm_up", "1");
                f.m && (f.O("vdnc", f.F(P.Yd)), f.O("vdltv", f.F(P.Od)));
                vm(f);
                f.m && (f.O("delopc", f.F(P.Xc)), f.O("oedeld", f.F(P.Td)), f.O("delc", f.F(P.Oc)), f.O("shf",
                    f.F(P.Rd)), f.O("iedeld", Yi(f.F(P.Z))));
                Em || f.O("did", t.eg), Fm && (f.O("gdid", t.rd), f.O("edid", t.od));
                um(f, l);
                tm(f, y);
                sm(f, A, l, t, y);
                Ne() ? kf(function() {
                    vm(f);
                    var E = ff(P.C);
                    if (f.m) {
                        var L = !1;
                        L = !0;
                        E || z || !l && !L || f.ja("google_transport_url",
                            "https://pagead2.googlesyndication.com/");
                        e(f, E)
                    } else if (E) {
                        e(f, E);
                        return
                    }
                    E || jf(function() {
                        var J = new Lm(a, f.eventName, d);
                        J.m = f.m;
                        J.mc(O(f.o));
                        um(J, l);
                        !z && J.o.google_transport_url && J.ij();
                        vm(J, !0);
                        e(J, !0)
                    }, P.C)
                }, [P.C]) : e(f, !0)
            }
    };
    var Mm = function(a, b, c, d, e) {
        var f = a.F(P.Ib),
            g = a.F(P.ia) || {},
            l = a.F(P.Za);
        qm({
            ld: b,
            ji: f,
            rg: g,
            Og: l
        }, c);
        km(a.R, a.s);
        var k = {
            we: !1,
            Ga: d,
            R: a.R,
            eventId: a.s.eventId,
            ub: b ? c : void 0,
            vd: b,
            md: ""
        };
        Em ? k.md = void 0 : k.md = e.eg || "";
        Fm && (k.Sb = e.rd, k.Rb = e.od);
        Jl(k);
        !a.isGtmEvent && a.X && 0 < Wf(a.s).length && (Ed(68), 1 < U.configCount && Ed(69))
    };
    var sn = function() {
            var a = !0;
            Dl(7) && Dl(9) && Dl(10) || (a = !1);
            var b = !0;
            b = !1;
            b && !rn() && (a = !1);
            return a
        },
        rn = function() {
            var a = !0;
            Dl(3) && Dl(4) || (a = !1);
            return a
        };
    var no = !1;
    no = !0;

    function oo() {
        var a = U;
        return a.gcq = a.gcq || new po
    }
    var qo = function(a, b, c) {
            oo().register(a, b, c)
        },
        ro = function(a, b, c, d) {
            oo().push("event", [b, a], c, d)
        },
        so = function(a, b) {
            oo().push("config", [a], b)
        },
        to = function(a, b, c, d) {
            oo().push("get", [a, b], c, d)
        },
        uo = {},
        vo = function() {
            this.status = 1;
            this.containerConfig = {};
            this.targetConfig = {};
            this.remoteConfig = {};
            this.o = {};
            this.s = null;
            this.m = !1
        },
        wo = function(a, b, c, d, e) {
            this.type = a;
            this.s = b;
            this.R = c || "";
            this.m = d;
            this.o = e
        },
        po = function() {
            this.o = {};
            this.s = {};
            this.m = [];
            this.D = {
                AW: !1,
                UA: !1
            }
        },
        xo = function(a, b) {
            var c = Wl(b);
            return a.o[c.containerId] =
                a.o[c.containerId] || new vo
        },
        yo = function(a, b, c) {
            if (b) {
                var d = Wl(b);
                if (d && 1 === xo(a, b).status) {
                    xo(a, b).status = 2;
                    var e = {};
                    kk && (e.timeoutId = B.setTimeout(function() {
                        Ed(38);
                        Qj()
                    }, 3E3));
                    a.push("require", [e], d.containerId);
                    uo[d.containerId] = m();
                    if (Tk()) {} else {
                        var g =
                            "/gtag/js?id=" + encodeURIComponent(d.containerId) + "&l=" + S.U + "&cx=c";
                        Sk() && (g += "&sign=" + S.fd);
                        var l = ("http:" != B.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com" + g),
                            k = Qk(c, g) || l;
                        Cb(k)
                    }
                }
            }
        },
        zo = function(a, b, c, d) {
            if (d.R) {
                var e = xo(a, d.R),
                    f = e.s;
                if (f) {
                    var g = O(c),
                        l = O(e.targetConfig[d.R]),
                        k = O(e.containerConfig),
                        n = O(e.remoteConfig),
                        p = O(a.s),
                        r = fe("gtm.uniqueEventId"),
                        v = Wl(d.R).prefix,
                        t = Ra(function() {
                            var u = g[P.Jb];
                            u && H(u)
                        }),
                        q = Rf(Qf(Sf(Pf(Nf(Of(Mf(Lf(Kf(g), l), k), n), p), function() {
                            xk(r, v, "2");
                            no && t()
                        }), function() {
                            xk(r, v, "3");
                            no && t()
                        }), function(u, x) {
                            a.D[u] = x
                        }), function(u) {
                            return a.D[u]
                        });
                    try {
                        xk(r, v, "1");
                        f(d.R, b, d.s, q)
                    } catch (u) {
                        xk(r, v, "4");
                    }
                }
            }
        };
    po.prototype.register = function(a, b, c) {
        var d = xo(this, a);
        if (3 !== d.status) {
            d.s = b;
            d.status = 3;
            c && (O(d.remoteConfig, c), d.remoteConfig = c);
            var e = Wl(a),
                f = uo[e.containerId];
            if (void 0 !== f) {
                var g = U[e.containerId].bootstrap,
                    l = e.prefix.toUpperCase();
                U[e.containerId]._spx && (l = l.toLowerCase());
                var k = fe("gtm.uniqueEventId"),
                    n = l,
                    p = m() - g;
                if (kk && !Vj[k]) {
                    k !== Rj && (Mj(), Rj = k);
                    var r = n + "." + Math.floor(g - f) + "." + Math.floor(p);
                    Zj = Zj ? Zj + "," + r : "&cl=" + r
                }
                delete uo[e.containerId]
            }
            this.flush()
        }
    };
    po.prototype.push = function(a, b, c, d) {
        var e = Math.floor(m() / 1E3);
        yo(this, c, b[0][P.qa] || this.s[P.qa]);
        c && xo(this, c).m && (d = !1);
        this.m.push(new wo(a, e, c, b, d));
        d || this.flush()
    };
    po.prototype.insert = function(a, b, c) {
        var d = Math.floor(m() / 1E3);
        0 < this.m.length ? this.m.splice(1, 0, new wo(a, d, c, b, !1)) : this.m.push(new wo(a, d, c, b, !1))
    };
    po.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.m.length;) {
            var f = this.m[0];
            if (f.o) !f.R || xo(this, f.R).m ? (f.o = !1, this.m.push(f)) : c.push(f), this.m.shift();
            else {
                switch (f.type) {
                    case "require":
                        if (3 !== xo(this, f.R).status && !a) {
                            this.m.push.apply(this.m, c);
                            return
                        }
                        kk && B.clearTimeout(f.m[0].timeoutId);
                        break;
                    case "set":
                        Ba(f.m[0], function(v, t) {
                            O(Wa(v, t), b.s)
                        });
                        break;
                    case "config":
                        e.Ia = {};
                        Ba(f.m[0], function(v) {
                            return function(t, q) {
                                O(Wa(t, q), v.Ia)
                            }
                        }(e));
                        var g = !!e.Ia[P.Yc];
                        delete e.Ia[P.Yc];
                        var l =
                            xo(this, f.R),
                            k = Wl(f.R),
                            n = k.containerId === k.id;
                        g || (n ? l.containerConfig = {} : l.targetConfig[f.R] = {});
                        l.m && g || zo(this, P.xa, e.Ia, f);
                        l.m = !0;
                        delete e.Ia[P.Ob];
                        n ? O(e.Ia, l.containerConfig) : O(e.Ia, l.targetConfig[f.R]);
                        d = !0;
                        break;
                    case "event":
                        e.Hc = {};
                        Ba(f.m[0], function(v) {
                            return function(t, q) {
                                O(Wa(t, q), v.Hc)
                            }
                        }(e));
                        zo(this, f.m[1], e.Hc, f);
                        break;
                    case "get":
                        var p = {},
                            r = (p[P.Ka] = f.m[0], p[P.Wa] = f.m[1], p);
                        zo(this, P.Ja, r, f)
                }
                this.m.shift();
                Ao(this, f)
            }
            e = {
                Ia: e.Ia,
                Hc: e.Hc
            }
        }
        this.m.push.apply(this.m, c);
        d && this.flush()
    };
    var Ao = function(a, b) {
        if ("require" !== b.type)
            if (b.R)
                for (var c = a.getCommandListeners(b.R)[b.type] || [], d = 0; d < c.length; d++) c[d]();
            else
                for (var e in a.o)
                    if (a.o.hasOwnProperty(e)) {
                        var f = a.o[e];
                        if (f && f.o)
                            for (var g = f.o[b.type] || [], l = 0; l < g.length; l++) g[l]()
                    }
    };
    po.prototype.getRemoteConfig = function(a) {
        return xo(this, a).remoteConfig
    };
    po.prototype.getCommandListeners = function(a) {
        return xo(this, a).o
    };
    var Bo = {},
        Co = function(a, b) {
            b = b.toString().split(",");
            for (var c = 0; c < b.length; c++) {
                var d = Bo[b[c]] || [];
                Bo[b[c]] = d;
                0 > d.indexOf(a) && d.push(a)
            }
        },
        Do = function(a) {
            Ba(Bo, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        };
    var Eo = "HA GF G UA AW DC".split(" "),
        Fo = !1;
    Fo = !0;
    var Go = !1,
        Ho = !1,
        Io = 0;

    function Jo(a, b) {
        var c = {
            event: a
        };
        b && (c.eventModel = O(b), b[P.Jb] && (c.eventCallback = b[P.Jb]), b[P.Qc] && (c.eventTimeout = b[P.Qc]));
        return c
    }

    function Ko(a) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: Rd()
        });
        return a["gtm.uniqueEventId"]
    }

    function Lo() {
        if (!Go && !U.gtagRegistered) {
            Go = U.gtagRegistered = !0;
            U.addTargetToGroup = function(c) {
                Co(c, "default")
            };
            var a = U.pendingDefaultTargets;
            delete U.pendingDefaultTargets;
            if (wa(a))
                for (var b = 0; b < a.length; ++b) Co(a[b], "default")
        }
        return Go
    }
    var Mo = {
            config: function(a) {
                var b, c = Ko(a);
                if (2 > a.length || !ta(a[1])) return;
                var d = {};
                if (2 < a.length) {
                    if (void 0 != a[2] && !Vb(a[2]) || 3 < a.length) return;
                    d = a[2]
                }
                var e = Wl(a[1]);
                if (!e) return;
                Do(e.id);
                Co(e.id, d[P.Vd] || "default");
                delete d[P.Vd];
                Ho || Ed(43);
                if (Lo() && -1 !== Eo.indexOf(e.prefix)) {
                    "G" === e.prefix && (d[P.Ob] = !0);
                    Fo && delete d[P.Jb];
                    e.id === e.containerId && (U.configCount = ++Io);
                    so(d, e.id);
                    return
                }
                ie("gtag.targets." + e.id, void 0);
                ie("gtag.targets." + e.id, O(d));
                var f = {};
                f[P.qb] = e.id;
                b = Jo(P.xa, f);
                b["gtm.uniqueEventId"] = c;
                return b
            },
            consent: function(a) {
                function b() {
                    Lo() && O(a[2], {
                        subcommand: a[1]
                    })
                }
                if (3 === a.length) {
                    Ed(39);
                    var c = Rd(),
                        d = a[1];
                    "default" === d ? (b(), cf(a[2])) : "update" === d && (b(), ef(a[2], c))
                }
            },
            event: function(a) {
                var b = a[1];
                if (!(2 > a.length) && ta(b)) {
                    var c;
                    if (2 < a.length) {
                        if (!Vb(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        c = a[2]
                    }
                    var d = Jo(b, c),
                        e = Ko(a);
                    d["gtm.uniqueEventId"] = e;
                    var f;
                    var g = c && c[P.qb];
                    void 0 === g && (g = fe(P.qb, 2),
                        void 0 === g && (g = "default"));
                    if (ta(g) || wa(g)) {
                        for (var l = g.toString().replace(/\s+/g, "").split(","), k = [], n = 0; n < l.length; n++)
                            if (0 <= l[n].indexOf("-")) k.push(l[n]);
                            else {
                                var p = Bo[l[n]];
                                p && p.length && (k = k.concat(p))
                            }
                        f = Yl(k)
                    } else f = void 0;
                    var r = f;
                    if (!r) return;
                    for (var v = Lo(), t = [], q = 0; v && q < r.length; q++) {
                        var u = r[q];
                        if (-1 !== Eo.indexOf(u.prefix)) {
                            var x = O(c);
                            "G" === u.prefix && (x[P.Ob] = !0);
                            Fo && delete x[P.Jb];
                            ro(b, x, u.id)
                        }
                        t.push(u.id)
                    }
                    d.eventModel = d.eventModel || {};
                    0 < r.length ? d.eventModel[P.qb] = t.join() : delete d.eventModel[P.qb];
                    Ho || Ed(43);
                    return d
                }
            },
            get: function(a) {
                Ed(53);
                if (4 !== a.length || !ta(a[1]) || !ta(a[2]) || !sa(a[3])) return;
                var b = Wl(a[1]),
                    c = String(a[2]),
                    d = a[3];
                if (!b) return;
                Ho || Ed(43);
                if (!Lo() || -1 === Eo.indexOf(b.prefix)) return;
                Rd();
                var e = {};
                Te(O((e[P.Ka] = c, e[P.Wa] = d, e)));
                to(c, function(f) {
                    H(function() {
                        return d(f)
                    })
                }, b.id);
            },
            js: function(a) {
                if (2 == a.length && a[1].getTime) {
                    Ho = !0;
                    Lo();
                    var b = {};
                    return b.event = "gtm.js", b["gtm.start"] = a[1].getTime(),
                        b["gtm.uniqueEventId"] = Ko(a), b
                }
            },
            policy: function() {},
            set: function(a) {
                var b;
                2 == a.length && Vb(a[1]) ? b = O(a[1]) : 3 == a.length && ta(a[1]) && (b = {}, Vb(a[2]) || wa(a[2]) ? b[a[1]] = O(a[2]) : b[a[1]] = a[2]);
                if (b) {
                    if (Rd(), Lo()) {
                        O(b);
                        var c = O(b);
                        oo().push("set", [c])
                    }
                    b._clear = !0;
                    return b
                }
            }
        },
        No = {
            policy: !0
        };
    var Oo = function(a) {
            var b = B[S.U].hide;
            if (b && void 0 !== b[a] && b.end) {
                b[a] = !1;
                var c = !0,
                    d;
                for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) {
                        c = !1;
                        break
                    }
                c && (b.end(), b.end = null)
            }
        },
        Po = function(a) {
            var b = B[S.U],
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var Qo = !1,
        Ro = [];

    function So() {
        if (!Qo) {
            Qo = !0;
            for (var a = 0; a < Ro.length; a++) H(Ro[a])
        }
    }
    var To = function(a) {
        Qo ? H(a) : Ro.push(a)
    };
    var jp = function(a) {
        if (ip(a)) return a;
        this.m = a
    };
    jp.prototype.Ci = function() {
        return this.m
    };
    var ip = function(a) {
        return !a || "object" !== Tb(a) || Vb(a) ? !1 : "getUntrustedUpdateValue" in a
    };
    jp.prototype.getUntrustedUpdateValue = jp.prototype.Ci;
    var kp = [],
        lp = !1,
        mp = !1,
        np = function(a) {
            return B[S.U].push(a)
        },
        op = function(a, b) {
            var c = U[S.U],
                d = c ? c.subscribers : 1,
                e = 0,
                f = !1,
                g = void 0;
            b && (g = B.setTimeout(function() {
                f || (f = !0, a());
                g = void 0
            }, b));
            return function() {
                ++e === d && (g && (B.clearTimeout(g), g = void 0), f || (a(), f = !0))
            }
        };

    function pp(a) {
        var b = a._clear;
        Ba(a, function(d, e) {
            "_clear" !== d && (b && ie(d, void 0), ie(d, e))
        });
        Md || (Md = a["gtm.start"]);
        var c = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        c || (c = Rd(), a["gtm.uniqueEventId"] = c, ie("gtm.uniqueEventId", c));
        return Ok(a)
    }

    function qp() {
        var a = kp[0];
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (Da(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b) return !0
        }
        return !1
    }

    function rp() {
        for (var a = !1; !mp && 0 < kp.length;) {
            if (!lp && qp()) {
                var b = {},
                    c = (b.event = "gtm.init_consent", b),
                    d = {},
                    e = (d.event = "gtm.init", d),
                    f = kp[0]["gtm.uniqueEventId"];
                f && (c["gtm.uniqueEventId"] = f - 2, e["gtm.uniqueEventId"] = f - 1);
                kp.unshift(c, e);
                lp = !0
            }
            mp = !0;
            delete ce.eventModel;
            ee();
            var g = kp.shift();
            if (null != g) {
                var l = ip(g);
                if (l) {
                    var k = g;
                    g = ip(k) ? k.getUntrustedUpdateValue() : void 0;
                    for (var n = ["gtm.allowlist",
                            "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"
                        ], p = 0; p < n.length; p++) {
                        var r = n[p],
                            v = fe(r, 1);
                        if (wa(v) || Vb(v)) v = O(v);
                        de[r] = v
                    }
                }
                try {
                    if (sa(g)) try {
                        g.call(ge)
                    } catch (A) {} else if (wa(g)) {
                        var t = g;
                        if (ta(t[0])) {
                            var q = t[0].split("."),
                                u = q.pop(),
                                x = t.slice(1),
                                z = fe(q.join("."), 2);
                            if (void 0 !== z && null !== z) try {
                                z[u].apply(z, x)
                            } catch (A) {}
                        }
                    } else {
                        if (Da(g)) {
                            a: {
                                var w = g;
                                if (w.length && ta(w[0])) {
                                    var y = Mo[w[0]];
                                    if (y && (!l || !No[w[0]])) {
                                        g = y(w);
                                        break a
                                    }
                                }
                                g = void 0
                            }
                            if (!g) {
                                mp = !1;
                                continue
                            }
                        }
                        a = pp(g) || a
                    }
                } finally {
                    l && ee(!0)
                }
            }
            mp = !1
        }
        return !a
    }

    function sp() {
        var b = rp();
        try {
            Oo(S.J)
        } catch (c) {}
        return b
    }
    var up = function() {
            var a = xb(S.U, []),
                b = xb("google_tag_manager", {});
            b = b[S.U] = b[S.U] || {};
            ej(function() {
                b.gtmDom || (b.gtmDom = !0, a.push({
                    event: "gtm.dom"
                }))
            });
            To(function() {
                b.gtmLoad || (b.gtmLoad = !0, a.push({
                    event: "gtm.load"
                }))
            });
            b.subscribers = (b.subscribers || 0) + 1;
            var c = a.push;
            a.push = function() {
                var e;
                if (0 < U.SANDBOXED_JS_SEMAPHORE) {
                    e = [];
                    for (var f = 0; f < arguments.length; f++) e[f] = new jp(arguments[f])
                } else e = [].slice.call(arguments, 0);
                var g, l = !0;
                l = !1;
                g = l;
                !g && kp.push.apply(kp, e);
                var k = c.apply(a, e);
                g && kp.push.apply(kp, e);
                if (300 < this.length)
                    for (Ed(4); 300 < this.length;) this.shift();
                var n = "boolean" !== typeof k || k;
                return rp() && n
            };
            var d = a.slice(0);
            kp.push.apply(kp, d);
            if (tp()) {
                H(sp)
            }
        },
        tp = function() {
            var a = !0;
            return a
        };

    function vp(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = m();
        return b < c + 3E5 && b > c - 9E5
    };
    var wp = function(a) {
        U.addTargetToGroup ? U.addTargetToGroup(a) : (U.pendingDefaultTargets = U.pendingDefaultTargets || [], U.pendingDefaultTargets.push(a))
    };
    var xp = {};
    xp.ad = new String("undefined");
    var Yp = B.clearTimeout,
        Zp = B.setTimeout,
        W = function(a, b, c, d) {
            if (Tk()) {
                b && H(b)
            } else return Cb(a, b, c, d)
        },
        $p = function() {
            return new Date
        },
        aq = function() {
            return B.location.href
        },
        bq = function(a) {
            return mg(og(a), "fragment")
        },
        cq = function(a) {
            return ng(og(a))
        },
        dq = function(a, b) {
            return fe(a, b || 2)
        },
        eq = function(a, b, c) {
            var d;
            b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = np(a)) : d = np(a);
            return d
        },
        fq = function(a, b) {
            B[a] = b
        },
        X = function(a, b,
            c) {
            b && (void 0 === B[a] || c && !B[a]) && (B[a] = b);
            return B[a]
        },
        gq = function(a, b, c) {
            return Sg(a, b, void 0 === c ? !0 : !!c)
        },
        hq = function(a, b, c) {
            return 0 === ah(a, b, c)
        },
        iq = function(a, b) {
            if (Tk()) {
                b && H(b)
            } else Eb(a, b)
        },
        jq = function(a) {
            return !!Ep(a, "init", !1)
        },
        kq = function(a) {
            Cp(a, "init", !0)
        },
        lq = function(a) {
            var b = Kd,
                c = "?id=" + encodeURIComponent(a) + "&l=" + S.U;
            Sk() && (c += "&sign=" + S.fd, wb && (b = wb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]));
            var d = $l("https://", "http://", b + c);
            W(d)
        },
        mq = function(a, b, c) {
            kk && (Wb(a) || yk(c, b, a))
        };

    function Kq(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }
    var Lq = new za;

    function Mq(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = Lq.get(e);
            f || (f = new RegExp(b, d), Lq.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }

    function Nq(a, b) {
        function c(g) {
            var l = og(g),
                k = mg(l, "protocol"),
                n = mg(l, "host", !0),
                p = mg(l, "port"),
                r = mg(l, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === k || "http" == k && "80" == p || "https" == k && "443" == p) k = "web", p = "default";
            return [k, n, p, r]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function Oq(a) {
        return Pq(a) ? 1 : 0
    }

    function Pq(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && wa(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = O(a, {});
                O({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (Oq(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) {
                        var g = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
                        try {
                            for (var l = 0; l < g.length; l++)
                                if (b[g[l]]) {
                                    f = b[g[l]](c);
                                    break a
                                }
                        } catch (k) {}
                    }
                    f = !1
                }
                return f;
            case "_ew":
                return Kq(b, c);
            case "_eq":
                return String(b) ==
                    String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                return Mq(b, c, a.ignore_case);
            case "_sw":
                return 0 == String(b).indexOf(String(c));
            case "_um":
                return Nq(b, c)
        }
        return !1
    };
    Object.freeze({
        dl: 1,
        id: 1
    });
    Object.freeze(["config", "event", "get", "set"]);
    var Qq = encodeURI,
        Y = encodeURIComponent,
        Rq = Fb;
    var Sq = function(a, b) {
        if (!a) return !1;
        var c = mg(og(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f) return !0
            }
        }
        return !1
    };
    var Tq = function(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
        return e ? d : null
    };

    function ss() {
        return B.gaGlobal = B.gaGlobal || {}
    }
    var ts = function() {
            var a = ss();
            a.hid = a.hid || ya();
            return a.hid
        },
        us = function(a, b) {
            var c = ss();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var Ys = function() {
        if (sa(B.__uspapi)) {
            var a = "";
            try {
                B.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var xt = window,
        yt = document,
        zt = function(a) {
            var b = xt._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === xt["ga-disable-" + a]) return !0;
            try {
                var c = xt.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = Og("AMP_TOKEN", String(yt.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return yt.getElementById("__gaOptOutExtension") ? !0 : !1
        };
    var At = {};

    function Dt(a) {
        delete a.eventModel[P.Ob];
        Ft(a.eventModel)
    }
    var Ft = function(a) {
        Ba(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[P.Ma] || {};
        Ba(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var It = function(a, b, c) {
            ro(b, c, a)
        },
        Jt = function(a, b, c) {
            ro(b, c, a, !0)
        },
        Mt = function(a, b) {};

    function Kt(a, b) {}
    var Z = {
        g: {}
    };





    Z.g.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.h = "e";
                Z.__e.isVendorTemplate = !0;
                Z.__e.priorityOverride = 0
            })(function(a) {
                var b = String(le(a.vtp_gtmEventId, "event"));
                a.vtp_gtmCachedValues && (b = String(a.vtp_gtmCachedValues.event));
                return b
            })
        }();
    Z.g.v = ["google"],
        function() {
            (function(a) {
                Z.__v = a;
                Z.__v.h = "v";
                Z.__v.isVendorTemplate = !0;
                Z.__v.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = dq(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                    d = void 0 !== c ? c : a.vtp_defaultValue;
                mq(d, "v", a.vtp_gtmEventId);
                return d
            })
        }();
    Z.g.rep = ["google"],
        function() {
            (function(a) {
                Z.__rep = a;
                Z.__rep.h = "rep";
                Z.__rep.isVendorTemplate = !0;
                Z.__rep.priorityOverride = 0
            })(function(a) {
                var b;
                switch (Wl(a.vtp_containerId).prefix) {
                    case "AW":
                        b = Nm;
                        break;
                    case "DC":
                        b = cn;
                        break;
                    case "GF":
                        b = hn;
                        break;
                    case "HA":
                        b = nn;
                        break;
                    case "UA":
                        b = Mn;
                        break;
                    default:
                        H(a.vtp_gtmOnFailure);
                        return
                }
                H(a.vtp_gtmOnSuccess);
                qo(a.vtp_containerId, b, a.vtp_remoteConfig || {})
            })
        }();

    Z.g.cid = ["google"],
        function() {
            (function(a) {
                Z.__cid = a;
                Z.__cid.h = "cid";
                Z.__cid.isVendorTemplate = !0;
                Z.__cid.priorityOverride = 0
            })(function() {
                return S.J
            })
        }();







    Z.g.get = ["google"],
        function() {
            (function(a) {
                Z.__get = a;
                Z.__get.h = "get";
                Z.__get.isVendorTemplate = !0;
                Z.__get.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_settings;
                (a.vtp_deferrable ? Jt : It)(String(b.streamId), String(a.vtp_eventName), b.eventParameters || {});
                a.vtp_gtmOnSuccess()
            })
        }();








    var Nt = {};
    Nt.dataLayer = ge;
    Nt.callback = function(a) {
        Pd.hasOwnProperty(a) && sa(Pd[a]) && Pd[a]();
        delete Pd[a]
    };
    Nt.bootstrap = 0;
    Nt._spx = !1;

    function Ot() {
        U[S.J] = Nt;
        Sa(Qd, Z.g);
        Fc = Tc
    }

    function Pt() {
        var a = !1;
        a && nj("INIT");
        Be().m(ye.m);
        U = B.google_tag_manager = B.google_tag_manager || {};
        zl();
        fi.enable_gbraid_cookie_write = !0;
        var b = !!U[S.J];
        if (b) {
            var c = U.zones;
            c && c.unregisterChild(S.J);
        } else {
            for (var g = data.resource || {}, l = g.macros || [], k = 0; k < l.length; k++) xc.push(l[k]);
            for (var n = g.tags || [], p = 0; p < n.length; p++) Ac.push(n[p]);
            for (var r = g.predicates || [], v = 0; v < r.length; v++) zc.push(r[v]);
            for (var t = g.rules || [], q = 0; q < t.length; q++) {
                for (var u =
                        t[q], x = {}, z = 0; z < u.length; z++) x[u[z][0]] = Array.prototype.slice.call(u[z], 1);
                yc.push(x)
            }
            Cc = Z;
            Dc = Oq;
            Ot();
            up();
            $i = !1;
            aj = 0;
            if ("interactive" == G.readyState && !G.createEventObject || "complete" == G.readyState) cj();
            else {
                Gb(G, "DOMContentLoaded", cj);
                Gb(G, "readystatechange", cj);
                if (G.createEventObject && G.documentElement.doScroll) {
                    var w = !0;
                    try {
                        w = !B.frameElement
                    } catch (D) {}
                    w && dj()
                }
                Gb(B, "load", cj)
            }
            Qo = !1;
            "complete" === G.readyState ? So() : Gb(B, "load", So);
            kk && B.setInterval(ek, 864E5);
            Nd = (new Date).getTime();
            Nt.bootstrap =
                Nd;
            if (a) {
                var F = oj("INIT");
            }
        }
    }
    (function(a) {
        if (!B["__TAGGY_INSTALLED"]) {
            var b = !1;
            if (G.referrer) {
                var c = og(G.referrer);
                b = "cct.google" === lg(c, "host")
            }
            if (!b) {
                var d = Sg("googTaggyReferrer");
                b = d.length && d[0].length
            }
            b && (B["__TAGGY_INSTALLED"] = !0, Cb("https://cct.google/taggy/agent.js"))
        }
        var f = function(r) {
                var v = "GTM",
                    t = "GTM";
                v = "OGT", t = "GTAG";
                var q = B["google.tagmanager.debugui2.queue"];
                q || (q = [], B["google.tagmanager.debugui2.queue"] = q, Cb("https://" + S.Dd + "/debug/bootstrap?id=" + S.J + "&src=" + t + "&cond=" + r + "&gtm=" + Xk()));
                var u = {
                    messageType: "CONTAINER_STARTING",
                    data: {
                        scriptSource: wb,
                        containerProduct: v,
                        debug: !1,
                        id: S.J
                    }
                };
                u.data.resume = function() {
                    a()
                };
                S.Zg && (u.data.initialPublish = !0);
                q.push(u)
            },
            g = void 0,
            l = mg(B.location, "query", !1, void 0, "gtm_debug");
        vp(l) && (g = 2);
        if (!g && G.referrer) {
            var k = og(G.referrer);
            "tagassistant.google.com" === lg(k, "host") && (g = 3)
        }
        if (!g) {
            var n = Sg("__TAG_ASSISTANT");
            n.length && n[0].length && (g = 4)
        }
        if (!g) {
            var p = G.documentElement.getAttribute("data-tag-assistant-present");
            vp(p) && (g = 5)
        }
        g && wb ? f(g) : a()
    })(Pt);

})()