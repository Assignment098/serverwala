/*! For license information please see 6.c01b38ac.chunk.js.LICENSE.txt */
(this["webpackJsonp@livechat/chat-widget"] = this["webpackJsonp@livechat/chat-widget"] || []).push([
    [6], {
        731: function(e, t, n) {
            (function(t, n) {
                var i;
                i = function() {
                    "use strict";

                    function e(t) {
                        return (e = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(t)
                    }

                    function i(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }

                    function r(e, t, n) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n, e
                    }

                    function o(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            "function" === typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            })))), i.forEach((function(t) {
                                r(e, t, n[t])
                            }))
                        }
                        return e
                    }
                    var s = "$default_instance",
                        a = 2,
                        u = 4096,
                        c = 1e3,
                        p = "$identify",
                        d = "$groupidentify",
                        l = "amplitude_cookie_test",
                        h = "amp",
                        f = "revenue_amount",
                        v = "$productId",
                        g = "$quantity",
                        m = "$price",
                        y = "$revenueType",
                        _ = "amp_device_id",
                        w = "referrer",
                        b = "utm_source",
                        I = "utm_medium",
                        S = "utm_campaign",
                        k = "utm_term",
                        E = "utm_content",
                        O = function(e) {
                            for (var t = "", n = 0; n < e.length; n++) {
                                var i = e.charCodeAt(n);
                                i < 128 ? t += String.fromCharCode(i) : i > 127 && i < 2048 ? (t += String.fromCharCode(i >> 6 | 192), t += String.fromCharCode(63 & i | 128)) : (t += String.fromCharCode(i >> 12 | 224), t += String.fromCharCode(i >> 6 & 63 | 128), t += String.fromCharCode(63 & i | 128))
                            }
                            return t
                        },
                        x = function(e) {
                            for (var t = "", n = 0, i = 0, r = 0, o = 0; n < e.length;)(i = e.charCodeAt(n)) < 128 ? (t += String.fromCharCode(i), n++) : i > 191 && i < 224 ? (r = e.charCodeAt(n + 1), t += String.fromCharCode((31 & i) << 6 | 63 & r), n += 2) : (r = e.charCodeAt(n + 1), o = e.charCodeAt(n + 2), t += String.fromCharCode((15 & i) << 12 | (63 & r) << 6 | 63 & o), n += 3);
                            return t
                        },
                        N = {
                            _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                            encode: function(e) {
                                try {
                                    if (window.btoa && window.atob) return window.btoa(unescape(encodeURIComponent(e)))
                                } catch (t) {}
                                return N._encode(e)
                            },
                            _encode: function(e) {
                                var t, n, i, r, o, s, a, u = "",
                                    c = 0;
                                for (e = O(e); c < e.length;) r = (t = e.charCodeAt(c++)) >> 2, o = (3 & t) << 4 | (n = e.charCodeAt(c++)) >> 4, s = (15 & n) << 2 | (i = e.charCodeAt(c++)) >> 6, a = 63 & i, isNaN(n) ? s = a = 64 : isNaN(i) && (a = 64), u = u + N._keyStr.charAt(r) + N._keyStr.charAt(o) + N._keyStr.charAt(s) + N._keyStr.charAt(a);
                                return u
                            },
                            decode: function(e) {
                                try {
                                    if (window.btoa && window.atob) return decodeURIComponent(escape(window.atob(e)))
                                } catch (t) {}
                                return N._decode(e)
                            },
                            _decode: function(e) {
                                var t, n, i, r, o, s, a = "",
                                    u = 0;
                                for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); u < e.length;) t = N._keyStr.indexOf(e.charAt(u++)) << 2 | (r = N._keyStr.indexOf(e.charAt(u++))) >> 4, n = (15 & r) << 4 | (o = N._keyStr.indexOf(e.charAt(u++))) >> 2, i = (3 & o) << 6 | (s = N._keyStr.indexOf(e.charAt(u++))), a += String.fromCharCode(t), 64 !== o && (a += String.fromCharCode(n)), 64 !== s && (a += String.fromCharCode(i));
                                return a = x(a)
                            }
                        },
                        A = Object.prototype.toString;

                    function C(n) {
                        switch (A.call(n)) {
                            case "[object Date]":
                                return "date";
                            case "[object RegExp]":
                                return "regexp";
                            case "[object Arguments]":
                                return "arguments";
                            case "[object Array]":
                                return "array";
                            case "[object Error]":
                                return "error"
                        }
                        return null === n ? "null" : void 0 === n ? "undefined" : n !== n ? "nan" : n && 1 === n.nodeType ? "element" : "undefined" !== typeof t && "function" === typeof t.isBuffer && t.isBuffer(n) ? "buffer" : e(n = n.valueOf ? n.valueOf() : Object.prototype.valueOf.apply(n))
                    }
                    var T, P = {
                            DISABLE: 0,
                            ERROR: 1,
                            WARN: 2,
                            INFO: 3
                        },
                        R = P.WARN,
                        q = {
                            error: function(e) {
                                R >= P.ERROR && D(e)
                            },
                            warn: function(e) {
                                R >= P.WARN && D(e)
                            },
                            info: function(e) {
                                R >= P.INFO && D(e)
                            }
                        },
                        D = function(e) {
                            try {
                                console.log("[Amplitude] " + e)
                            } catch (t) {}
                        },
                        j = function(e) {
                            return "string" === C(e) && e.length > u ? e.substring(0, u) : e
                        },
                        U = function(e) {
                            var t = C(e);
                            if ("object" !== t) return q.error("Error: invalid properties format. Expecting Javascript object, received " + t + ", ignoring"), {};
                            if (Object.keys(e).length > c) return q.error("Error: too many properties (more than 1000), ignoring"), {};
                            var n = {};
                            for (var i in e)
                                if (e.hasOwnProperty(i)) {
                                    var r = i,
                                        o = C(r);
                                    "string" !== o && (r = String(r), q.warn("WARNING: Non-string property key, received type " + o + ', coercing to string "' + r + '"'));
                                    var s = K(r, e[i]);
                                    null !== s && (n[r] = s)
                                }
                            return n
                        },
                        M = ["nan", "function", "arguments", "regexp", "element"],
                        K = function e(t, n) {
                            var i = C(n);
                            if (-1 !== M.indexOf(i)) q.warn('WARNING: Property key "' + t + '" with invalid value type ' + i + ", ignoring"), n = null;
                            else if ("undefined" === i) n = null;
                            else if ("error" === i) n = String(n), q.warn('WARNING: Property key "' + t + '" with value type error, coercing to ' + n);
                            else if ("array" === i) {
                                for (var r = [], o = 0; o < n.length; o++) {
                                    var s = n[o],
                                        a = C(s);
                                    "array" !== a ? "object" === a ? r.push(U(s)) : r.push(e(t, s)) : q.warn("WARNING: Cannot have " + a + " nested in an array property value, skipping")
                                }
                                n = r
                            } else "object" === i && (n = U(n));
                            return n
                        },
                        z = function(e, t) {
                            var n = C(t);
                            if ("string" === n) return t;
                            if ("date" === n || "number" === n || "boolean" === n) return t = String(t), q.warn("WARNING: Non-string groupName, received type " + n + ', coercing to string "' + t + '"'), t;
                            if ("array" === n) {
                                for (var i = [], r = 0; r < t.length; r++) {
                                    var o = t[r],
                                        s = C(o);
                                    "array" !== s && "object" !== s ? "string" === s ? i.push(o) : "date" !== s && "number" !== s && "boolean" !== s || (o = String(o), q.warn("WARNING: Non-string groupName, received type " + s + ', coercing to string "' + o + '"'), i.push(o)) : q.warn("WARNING: Skipping nested " + s + " in array groupName")
                                }
                                return i
                            }
                            q.warn("WARNING: Non-string groupName, received type " + n + ". Please use strings or array of strings for groupName")
                        },
                        G = function(e) {
                            P.hasOwnProperty(e) && (R = P[e])
                        },
                        B = q,
                        F = function(e) {
                            return !e || 0 === e.length
                        },
                        V = function(e, t) {
                            e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                            var n = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(t);
                            return null === n ? void 0 : decodeURIComponent(n[1].replace(/\+/g, " "))
                        },
                        L = function e(t) {
                            if ("array" === C(t))
                                for (var n = 0; n < t.length; n++) t[n] = e(t[n]);
                            else if ("object" === C(t))
                                for (var i in t) t.hasOwnProperty(i) && (t[i] = e(t[i]));
                            else t = j(t);
                            return t
                        },
                        W = function(e) {
                            var t = C(e);
                            if ("object" !== t) return q.error("Error: invalid groups format. Expecting Javascript object, received " + t + ", ignoring"), {};
                            var n = {};
                            for (var i in e)
                                if (e.hasOwnProperty(i)) {
                                    var r = i,
                                        o = C(r);
                                    "string" !== o && (r = String(r), q.warn("WARNING: Non-string groupType, received type " + o + ', coercing to string "' + r + '"'));
                                    var s = z(r, e[i]);
                                    null !== s && (n[r] = s)
                                }
                            return n
                        },
                        $ = function(e, t, n) {
                            return C(e) === n || (q.error("Invalid " + t + " input type. Expected " + n + " but received " + C(e)), !1)
                        },
                        J = U,
                        Q = function() {
                            return window.location
                        },
                        X = function(e) {
                            try {
                                for (var t = document.cookie.split(";"), n = null, i = 0; i < t.length; i++) {
                                    for (var r = t[i];
                                        " " === r.charAt(0);) r = r.substring(1, r.length);
                                    if (0 === r.indexOf(e)) {
                                        n = r.substring(e.length, r.length);
                                        break
                                    }
                                }
                                return n
                            } catch (o) {
                                return null
                            }
                        },
                        H = function(e, t, n) {
                            var i = null !== t ? n.expirationDays : -1;
                            if (i) {
                                var r = new Date;
                                r.setTime(r.getTime() + 24 * i * 60 * 60 * 1e3), i = r
                            }
                            var o = e + "=" + t;
                            i && (o += "; expires=" + i.toUTCString()), o += "; path=/", n.domain && (o += "; domain=" + n.domain), n.secure && (o += "; Secure"), n.sameSite && (o += "; SameSite=" + n.sameSite), document.cookie = o
                        },
                        Z = H,
                        Y = X,
                        ee = function() {
                            var e = String(new Date);
                            try {
                                H(l, e, {
                                    sameSite: "Strict"
                                });
                                var t = X(l + "=") === e;
                                return H(l, null, {
                                    sameSite: "Strict"
                                }), t
                            } catch (n) {}
                            return !1
                        },
                        te = function(e) {
                            for (var t = function(e) {
                                    var t = document.createElement("a");
                                    return t.href = e, t.hostname || location.hostname
                                }(e).split("."), n = [], i = t.length - 2; i >= 0; --i) n.push(t.slice(i).join("."));
                            for (var r = 0; r < n.length; ++r) {
                                var o = "__tld_test__",
                                    s = n[r],
                                    a = {
                                        domain: "." + s
                                    };
                                if (Z(o, 1, a), Y(o)) return Z(o, null, a), s
                            }
                            return ""
                        },
                        ne = {
                            expirationDays: void 0,
                            domain: void 0
                        },
                        ie = function(e) {
                            var t = "";
                            return ne.domain && (t = "." === ne.domain.charAt(0) ? ne.domain.substring(1) : ne.domain), e + t
                        },
                        re = function(e) {
                            var t = ie(e) + "=",
                                n = Y(t);
                            try {
                                if (n) return JSON.parse(N.decode(n))
                            } catch (i) {
                                return null
                            }
                            return null
                        },
                        oe = function(e, t) {
                            try {
                                return Z(ie(e), N.encode(JSON.stringify(t)), ne), !0
                            } catch (n) {
                                return !1
                            }
                        },
                        se = function(e) {
                            try {
                                return Z(ie(e), null, ne), !0
                            } catch (t) {
                                return !1
                            }
                        },
                        ae = {
                            reset: function() {
                                ne = {
                                    expirationDays: void 0,
                                    domain: void 0
                                }
                            },
                            options: function(e) {
                                if (0 === arguments.length) return ne;
                                e = e || {}, ne.expirationDays = e.expirationDays, ne.secure = e.secure, ne.sameSite = e.sameSite;
                                var t = F(e.domain) ? "." + te(Q().href) : e.domain,
                                    n = Math.random();
                                ne.domain = t, oe("amplitude_test", n);
                                var i = re("amplitude_test");
                                return i && i === n || (t = null), se("amplitude_test"), ne.domain = t, ne
                            },
                            get: re,
                            set: oe,
                            remove: se,
                            setRaw: function(e, t) {
                                try {
                                    return Z(ie(e), t, ne), !0
                                } catch (n) {
                                    return !1
                                }
                            },
                            getRaw: function(e) {
                                var t = ie(e) + "=";
                                return Y(t)
                            }
                        };
                    if (function() {
                            var e, t = new Date;
                            try {
                                return window.localStorage.setItem(t, t), e = window.localStorage.getItem(t) === String(t), window.localStorage.removeItem(t), e
                            } catch (n) {}
                            return !1
                        }()) T = window.localStorage;
                    else if (window.globalStorage) try {
                        T = window.globalStorage[window.location.hostname]
                    } catch (He) {} else if ("undefined" !== typeof document) {
                        var ue = document.createElement("div"),
                            ce = "localStorage";
                        ue.style.display = "none", document.getElementsByTagName("head")[0].appendChild(ue), ue.addBehavior && (ue.addBehavior("#default#userdata"), T = {
                            length: 0,
                            setItem: function(e, t) {
                                ue.load(ce), ue.getAttribute(e) || this.length++, ue.setAttribute(e, t), ue.save(ce)
                            },
                            getItem: function(e) {
                                return ue.load(ce), ue.getAttribute(e)
                            },
                            removeItem: function(e) {
                                ue.load(ce), ue.getAttribute(e) && this.length--, ue.removeAttribute(e), ue.save(ce)
                            },
                            clear: function() {
                                ue.load(ce);
                                for (var e, t = 0; e = ue.XMLDocument.documentElement.attributes[t++];) ue.removeAttribute(e.name);
                                ue.save(ce), this.length = 0
                            },
                            key: function(e) {
                                return ue.load(ce), ue.XMLDocument.documentElement.attributes[e]
                            }
                        }, ue.load(ce), T.length = ue.XMLDocument.documentElement.attributes.length)
                    }
                    T || (T = {
                        length: 0,
                        setItem: function(e, t) {},
                        getItem: function(e) {},
                        removeItem: function(e) {},
                        clear: function() {},
                        key: function(e) {}
                    });
                    var pe = T,
                        de = function() {
                            this.storage = null
                        };
                    de.prototype._cookiesEnabled = function() {
                        var e, t = String(new Date);
                        try {
                            return ae.set(l, t), e = ae.get(l) === t, ae.remove(l), e
                        } catch (He) {}
                        return !1
                    }, de.prototype.getStorage = function() {
                        if (null !== this.storage) return this.storage;
                        if (this._cookiesEnabled()) this.storage = ae;
                        else {
                            var e = "amp_cookiestore_";
                            this.storage = {
                                _options: {
                                    expirationDays: void 0,
                                    domain: void 0,
                                    secure: !1
                                },
                                reset: function() {
                                    this._options = {
                                        expirationDays: void 0,
                                        domain: void 0,
                                        secure: !1
                                    }
                                },
                                options: function(e) {
                                    return 0 === arguments.length ? this._options : (e = e || {}, this._options.expirationDays = e.expirationDays || this._options.expirationDays, this._options.domain = e.domain || this._options.domain || window && window.location && window.location.hostname, this._options.secure = e.secure || !1)
                                },
                                get: function(t) {
                                    try {
                                        return JSON.parse(pe.getItem(e + t))
                                    } catch (He) {}
                                    return null
                                },
                                set: function(t, n) {
                                    try {
                                        return pe.setItem(e + t, JSON.stringify(n)), !0
                                    } catch (He) {}
                                    return !1
                                },
                                remove: function(t) {
                                    try {
                                        pe.removeItem(e + t)
                                    } catch (He) {
                                        return !1
                                    }
                                }
                            }
                        }
                        return this.storage
                    };
                    var le = function() {
                            function e(t) {
                                var n = t.storageKey,
                                    i = t.disableCookies,
                                    r = t.domain,
                                    o = t.secure,
                                    s = t.sameSite,
                                    a = t.expirationDays;
                                ! function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                }(this, e), this.storageKey = n, this.disableCookieStorage = !ee() || i, this.domain = r, this.secure = o, this.sameSite = s, this.expirationDays = a, this.cookieDomain = "";
                                var u = te(Q().href);
                                this.cookieDomain = r || (u ? "." + u : null)
                            }
                            var t, n, r;
                            return t = e, (n = [{
                                key: "getCookieStorageKey",
                                value: function() {
                                    if (!this.domain) return this.storageKey;
                                    var e = "." === this.domain.charAt(0) ? this.domain.substring(1) : this.domain;
                                    return "".concat(this.storageKey).concat(e ? "_".concat(e) : "")
                                }
                            }, {
                                key: "save",
                                value: function(e) {
                                    var t = e.deviceId,
                                        n = e.userId,
                                        i = e.optOut,
                                        r = e.sessionId,
                                        o = e.lastEventTime,
                                        s = e.eventId,
                                        a = e.identifyId,
                                        u = e.sequenceNumber,
                                        c = [t, N.encode(n || ""), i ? "1" : "", r ? r.toString(32) : "0", o ? o.toString(32) : "0", s ? s.toString(32) : "0", a ? a.toString(32) : "0", u ? u.toString(32) : "0"].join(".");
                                    this.disableCookieStorage ? pe.setItem(this.storageKey, c) : Z(this.getCookieStorageKey(), c, {
                                        domain: this.cookieDomain,
                                        secure: this.secure,
                                        sameSite: this.sameSite,
                                        expirationDays: this.expirationDays
                                    })
                                }
                            }, {
                                key: "load",
                                value: function() {
                                    var e;
                                    if (this.disableCookieStorage || (e = Y(this.getCookieStorageKey() + "=")), e || (e = pe.getItem(this.storageKey)), !e) return null;
                                    var t = e.split("."),
                                        n = null;
                                    if (t[1]) try {
                                        n = N.decode(t[1])
                                    } catch (He) {
                                        n = null
                                    }
                                    return {
                                        deviceId: t[0],
                                        userId: n,
                                        optOut: "1" === t[2],
                                        sessionId: parseInt(t[3], 32),
                                        lastEventTime: parseInt(t[4], 32),
                                        eventId: parseInt(t[5], 32),
                                        identifyId: parseInt(t[6], 32),
                                        sequenceNumber: parseInt(t[7], 32)
                                    }
                                }
                            }]) && i(t.prototype, n), r && i(t, r), e
                        }(),
                        he = "$clearAll",
                        fe = function() {
                            this.userPropertiesOperations = {}, this.properties = []
                        };
                    fe.prototype.add = function(e, t) {
                        return "number" === C(t) || "string" === C(t) ? this._addOperation("$add", e, t) : B.error("Unsupported type for value: " + C(t) + ", expecting number or string"), this
                    }, fe.prototype.append = function(e, t) {
                        return this._addOperation("$append", e, t), this
                    }, fe.prototype.clearAll = function() {
                        return Object.keys(this.userPropertiesOperations).length > 0 ? (this.userPropertiesOperations.hasOwnProperty(he) || B.error("Need to send $clearAll on its own Identify object without any other operations, skipping $clearAll"), this) : (this.userPropertiesOperations.$clearAll = "-", this)
                    }, fe.prototype.prepend = function(e, t) {
                        return this._addOperation("$prepend", e, t), this
                    }, fe.prototype.set = function(e, t) {
                        return this._addOperation("$set", e, t), this
                    }, fe.prototype.setOnce = function(e, t) {
                        return this._addOperation("$setOnce", e, t), this
                    }, fe.prototype.unset = function(e) {
                        return this._addOperation("$unset", e, "-"), this
                    }, fe.prototype._addOperation = function(e, t, n) {
                        this.userPropertiesOperations.hasOwnProperty(he) ? B.error("This identify already contains a $clearAll operation, skipping operation " + e) : -1 === this.properties.indexOf(t) ? (this.userPropertiesOperations.hasOwnProperty(e) || (this.userPropertiesOperations[e] = {}), this.userPropertiesOperations[e][t] = n, this.properties.push(t)) : B.error('User property "' + t + '" already used in this identify, skipping operation ' + e)
                    };
                    var ve = "undefined" !== typeof window ? window : "undefined" !== typeof n ? n : "undefined" !== typeof self ? self : {};

                    function ge(e, t) {
                        return e(t = {
                            exports: {}
                        }, t.exports), t.exports
                    }
                    var me = ge((function(e) {
                            ! function(t) {
                                function n(e, t) {
                                    var n = (65535 & e) + (65535 & t);
                                    return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
                                }

                                function i(e, t, i, r, o, s) {
                                    return n((a = n(n(t, e), n(r, s))) << (u = o) | a >>> 32 - u, i);
                                    var a, u
                                }

                                function r(e, t, n, r, o, s, a) {
                                    return i(t & n | ~t & r, e, t, o, s, a)
                                }

                                function o(e, t, n, r, o, s, a) {
                                    return i(t & r | n & ~r, e, t, o, s, a)
                                }

                                function s(e, t, n, r, o, s, a) {
                                    return i(t ^ n ^ r, e, t, o, s, a)
                                }

                                function a(e, t, n, r, o, s, a) {
                                    return i(n ^ (t | ~r), e, t, o, s, a)
                                }

                                function u(e, t) {
                                    var i, u, c, p, d;
                                    e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                                    var l = 1732584193,
                                        h = -271733879,
                                        f = -1732584194,
                                        v = 271733878;
                                    for (i = 0; i < e.length; i += 16) u = l, c = h, p = f, d = v, l = r(l, h, f, v, e[i], 7, -680876936), v = r(v, l, h, f, e[i + 1], 12, -389564586), f = r(f, v, l, h, e[i + 2], 17, 606105819), h = r(h, f, v, l, e[i + 3], 22, -1044525330), l = r(l, h, f, v, e[i + 4], 7, -176418897), v = r(v, l, h, f, e[i + 5], 12, 1200080426), f = r(f, v, l, h, e[i + 6], 17, -1473231341), h = r(h, f, v, l, e[i + 7], 22, -45705983), l = r(l, h, f, v, e[i + 8], 7, 1770035416), v = r(v, l, h, f, e[i + 9], 12, -1958414417), f = r(f, v, l, h, e[i + 10], 17, -42063), h = r(h, f, v, l, e[i + 11], 22, -1990404162), l = r(l, h, f, v, e[i + 12], 7, 1804603682), v = r(v, l, h, f, e[i + 13], 12, -40341101), f = r(f, v, l, h, e[i + 14], 17, -1502002290), l = o(l, h = r(h, f, v, l, e[i + 15], 22, 1236535329), f, v, e[i + 1], 5, -165796510), v = o(v, l, h, f, e[i + 6], 9, -1069501632), f = o(f, v, l, h, e[i + 11], 14, 643717713), h = o(h, f, v, l, e[i], 20, -373897302), l = o(l, h, f, v, e[i + 5], 5, -701558691), v = o(v, l, h, f, e[i + 10], 9, 38016083), f = o(f, v, l, h, e[i + 15], 14, -660478335), h = o(h, f, v, l, e[i + 4], 20, -405537848), l = o(l, h, f, v, e[i + 9], 5, 568446438), v = o(v, l, h, f, e[i + 14], 9, -1019803690), f = o(f, v, l, h, e[i + 3], 14, -187363961), h = o(h, f, v, l, e[i + 8], 20, 1163531501), l = o(l, h, f, v, e[i + 13], 5, -1444681467), v = o(v, l, h, f, e[i + 2], 9, -51403784), f = o(f, v, l, h, e[i + 7], 14, 1735328473), l = s(l, h = o(h, f, v, l, e[i + 12], 20, -1926607734), f, v, e[i + 5], 4, -378558), v = s(v, l, h, f, e[i + 8], 11, -2022574463), f = s(f, v, l, h, e[i + 11], 16, 1839030562), h = s(h, f, v, l, e[i + 14], 23, -35309556), l = s(l, h, f, v, e[i + 1], 4, -1530992060), v = s(v, l, h, f, e[i + 4], 11, 1272893353), f = s(f, v, l, h, e[i + 7], 16, -155497632), h = s(h, f, v, l, e[i + 10], 23, -1094730640), l = s(l, h, f, v, e[i + 13], 4, 681279174), v = s(v, l, h, f, e[i], 11, -358537222), f = s(f, v, l, h, e[i + 3], 16, -722521979), h = s(h, f, v, l, e[i + 6], 23, 76029189), l = s(l, h, f, v, e[i + 9], 4, -640364487), v = s(v, l, h, f, e[i + 12], 11, -421815835), f = s(f, v, l, h, e[i + 15], 16, 530742520), l = a(l, h = s(h, f, v, l, e[i + 2], 23, -995338651), f, v, e[i], 6, -198630844), v = a(v, l, h, f, e[i + 7], 10, 1126891415), f = a(f, v, l, h, e[i + 14], 15, -1416354905), h = a(h, f, v, l, e[i + 5], 21, -57434055), l = a(l, h, f, v, e[i + 12], 6, 1700485571), v = a(v, l, h, f, e[i + 3], 10, -1894986606), f = a(f, v, l, h, e[i + 10], 15, -1051523), h = a(h, f, v, l, e[i + 1], 21, -2054922799), l = a(l, h, f, v, e[i + 8], 6, 1873313359), v = a(v, l, h, f, e[i + 15], 10, -30611744), f = a(f, v, l, h, e[i + 6], 15, -1560198380), h = a(h, f, v, l, e[i + 13], 21, 1309151649), l = a(l, h, f, v, e[i + 4], 6, -145523070), v = a(v, l, h, f, e[i + 11], 10, -1120210379), f = a(f, v, l, h, e[i + 2], 15, 718787259), h = a(h, f, v, l, e[i + 9], 21, -343485551), l = n(l, u), h = n(h, c), f = n(f, p), v = n(v, d);
                                    return [l, h, f, v]
                                }

                                function c(e) {
                                    var t, n = "",
                                        i = 32 * e.length;
                                    for (t = 0; t < i; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
                                    return n
                                }

                                function p(e) {
                                    var t, n = [];
                                    for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
                                    var i = 8 * e.length;
                                    for (t = 0; t < i; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
                                    return n
                                }

                                function d(e) {
                                    var t, n, i = "0123456789abcdef",
                                        r = "";
                                    for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n), r += i.charAt(t >>> 4 & 15) + i.charAt(15 & t);
                                    return r
                                }

                                function l(e) {
                                    return unescape(encodeURIComponent(e))
                                }

                                function h(e) {
                                    return function(e) {
                                        return c(u(p(e), 8 * e.length))
                                    }(l(e))
                                }

                                function f(e, t) {
                                    return function(e, t) {
                                        var n, i, r = p(e),
                                            o = [],
                                            s = [];
                                        for (o[15] = s[15] = void 0, r.length > 16 && (r = u(r, 8 * e.length)), n = 0; n < 16; n += 1) o[n] = 909522486 ^ r[n], s[n] = 1549556828 ^ r[n];
                                        return i = u(o.concat(p(t)), 512 + 8 * t.length), c(u(s.concat(i), 640))
                                    }(l(e), l(t))
                                }

                                function v(e, t, n) {
                                    return t ? n ? f(t, e) : d(f(t, e)) : n ? h(e) : d(h(e))
                                }
                                e.exports ? e.exports = v : t.md5 = v
                            }(ve)
                        })),
                        ye = Object.getOwnPropertySymbols,
                        _e = Object.prototype.hasOwnProperty,
                        we = Object.prototype.propertyIsEnumerable;

                    function be(e) {
                        if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
                        return Object(e)
                    }
                    var Ie = function() {
                            try {
                                if (!Object.assign) return !1;
                                var e = new String("abc");
                                if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                                for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                                if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                                        return t[e]
                                    })).join("")) return !1;
                                var i = {};
                                return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                                    i[e] = e
                                })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("")
                            } catch (r) {
                                return !1
                            }
                        }() ? Object.assign : function(e, t) {
                            for (var n, i, r = be(e), o = 1; o < arguments.length; o++) {
                                for (var s in n = Object(arguments[o])) _e.call(n, s) && (r[s] = n[s]);
                                if (ye) {
                                    i = ye(n);
                                    for (var a = 0; a < i.length; a++) we.call(n, i[a]) && (r[i[a]] = n[i[a]])
                                }
                            }
                            return r
                        },
                        Se = "%[a-f0-9]{2}";

                    function ke(e, t) {
                        return t.encode ? t.strict ? encodeURIComponent(e).replace(/[!'()*]/g, (function(e) {
                            return "%" + e.charCodeAt(0).toString(16).toUpperCase()
                        })) : encodeURIComponent(e) : e
                    }
                    new RegExp(Se, "gi"), new RegExp("(" + Se + ")+", "gi");
                    var Ee = function(e, t) {
                            !1 === (t = Ie({
                                encode: !0,
                                strict: !0,
                                arrayFormat: "none"
                            }, t)).sort && (t.sort = function() {});
                            var n = function(e) {
                                switch (e.arrayFormat) {
                                    case "index":
                                        return function(t, n, i) {
                                            return null === n ? [ke(t, e), "[", i, "]"].join("") : [ke(t, e), "[", ke(i, e), "]=", ke(n, e)].join("")
                                        };
                                    case "bracket":
                                        return function(t, n) {
                                            return null === n ? ke(t, e) : [ke(t, e), "[]=", ke(n, e)].join("")
                                        };
                                    default:
                                        return function(t, n) {
                                            return null === n ? ke(t, e) : [ke(t, e), "=", ke(n, e)].join("")
                                        }
                                }
                            }(t);
                            return e ? Object.keys(e).sort(t.sort).map((function(i) {
                                var r = e[i];
                                if (void 0 === r) return "";
                                if (null === r) return ke(i, t);
                                if (Array.isArray(r)) {
                                    var o = [];
                                    return r.slice().forEach((function(e) {
                                        void 0 !== e && o.push(n(i, e, o.length))
                                    })), o.join("&")
                                }
                                return ke(i, t) + "=" + ke(r, t)
                            })).filter((function(e) {
                                return e.length > 0
                            })).join("&") : ""
                        },
                        Oe = function(e, t) {
                            this.url = e, this.data = t || {}
                        };
                    Oe.prototype.send = function(e) {
                        if (window.XDomainRequest) {
                            var t = new window.XDomainRequest;
                            t.open("POST", this.url, !0), t.onload = function() {
                                e(200, t.responseText)
                            }, t.onerror = function() {
                                "Request Entity Too Large" === t.responseText ? e(413, t.responseText) : e(500, t.responseText)
                            }, t.ontimeout = function() {}, t.onprogress = function() {}, t.send(Ee(this.data))
                        } else {
                            var n = new XMLHttpRequest;
                            n.open("POST", this.url, !0), n.onreadystatechange = function() {
                                4 === n.readyState && e(n.status, n.responseText)
                            }, n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), n.send(Ee(this.data))
                        }
                    };
                    var xe = function() {
                        this._price = null, this._productId = null, this._quantity = 1, this._revenueType = null, this._properties = null
                    };
                    xe.prototype.setProductId = function(e) {
                        return "string" !== C(e) ? B.error("Unsupported type for productId: " + C(e) + ", expecting string") : F(e) ? B.error("Invalid empty productId") : this._productId = e, this
                    }, xe.prototype.setQuantity = function(e) {
                        return "number" !== C(e) ? B.error("Unsupported type for quantity: " + C(e) + ", expecting number") : this._quantity = parseInt(e), this
                    }, xe.prototype.setPrice = function(e) {
                        return "number" !== C(e) ? B.error("Unsupported type for price: " + C(e) + ", expecting number") : this._price = e, this
                    }, xe.prototype.setRevenueType = function(e) {
                        return "string" !== C(e) ? B.error("Unsupported type for revenueType: " + C(e) + ", expecting string") : this._revenueType = e, this
                    }, xe.prototype.setEventProperties = function(e) {
                        return "object" !== C(e) ? B.error("Unsupported type for eventProperties: " + C(e) + ", expecting object") : this._properties = J(e), this
                    }, xe.prototype._isValidRevenue = function() {
                        return "number" === C(this._price) || (B.error("Invalid revenue, need to set price field"), !1)
                    }, xe.prototype._toJSONObject = function() {
                        var e = "object" === C(this._properties) ? this._properties : {};
                        return null !== this._productId && (e[v] = this._productId), null !== this._quantity && (e[g] = this._quantity), null !== this._price && (e[m] = this._price), null !== this._revenueType && (e[y] = this._revenueType), e
                    };
                    var Ne, Ae = ge((function(e, t) {
                            ! function(n, i) {
                                var r = "function",
                                    o = "object",
                                    s = "model",
                                    a = "name",
                                    u = "type",
                                    c = "vendor",
                                    p = "version",
                                    d = "architecture",
                                    l = "console",
                                    h = "mobile",
                                    f = "tablet",
                                    v = "smarttv",
                                    g = "wearable",
                                    m = {
                                        extend: function(e, t) {
                                            var n = {};
                                            for (var i in e) t[i] && t[i].length % 2 === 0 ? n[i] = t[i].concat(e[i]) : n[i] = e[i];
                                            return n
                                        },
                                        has: function(e, t) {
                                            return "string" === typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
                                        },
                                        lowerize: function(e) {
                                            return e.toLowerCase()
                                        },
                                        major: function(e) {
                                            return "string" === typeof e ? e.replace(/[^\d\.]/g, "").split(".")[0] : i
                                        },
                                        trim: function(e) {
                                            return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                                        }
                                    },
                                    y = {
                                        rgx: function(e, t) {
                                            for (var n, s, a, u, c, p, d = 0; d < t.length && !c;) {
                                                var l = t[d],
                                                    h = t[d + 1];
                                                for (n = s = 0; n < l.length && !c;)
                                                    if (c = l[n++].exec(e))
                                                        for (a = 0; a < h.length; a++) p = c[++s], typeof(u = h[a]) === o && u.length > 0 ? 2 == u.length ? typeof u[1] == r ? this[u[0]] = u[1].call(this, p) : this[u[0]] = u[1] : 3 == u.length ? typeof u[1] !== r || u[1].exec && u[1].test ? this[u[0]] = p ? p.replace(u[1], u[2]) : i : this[u[0]] = p ? u[1].call(this, p, u[2]) : i : 4 == u.length && (this[u[0]] = p ? u[3].call(this, p.replace(u[1], u[2])) : i) : this[u] = p || i;
                                                d += 2
                                            }
                                        },
                                        str: function(e, t) {
                                            for (var n in t)
                                                if (typeof t[n] === o && t[n].length > 0) {
                                                    for (var r = 0; r < t[n].length; r++)
                                                        if (m.has(t[n][r], e)) return "?" === n ? i : n
                                                } else if (m.has(t[n], e)) return "?" === n ? i : n;
                                            return e
                                        }
                                    },
                                    _ = {
                                        browser: {
                                            oldsafari: {
                                                version: {
                                                    "1.0": "/8",
                                                    1.2: "/1",
                                                    1.3: "/3",
                                                    "2.0": "/412",
                                                    "2.0.2": "/416",
                                                    "2.0.3": "/417",
                                                    "2.0.4": "/419",
                                                    "?": "/"
                                                }
                                            },
                                            name: {
                                                "Opera Mobile": "Opera Mobi",
                                                "IE Mobile": "IEMobile"
                                            }
                                        },
                                        device: {
                                            amazon: {
                                                model: {
                                                    "Fire Phone": ["SD", "KF"]
                                                }
                                            },
                                            sprint: {
                                                model: {
                                                    "Evo Shift 4G": "7373KT"
                                                },
                                                vendor: {
                                                    HTC: "APA",
                                                    Sprint: "Sprint"
                                                }
                                            }
                                        },
                                        os: {
                                            windows: {
                                                version: {
                                                    ME: "4.90",
                                                    "NT 3.11": "NT3.51",
                                                    "NT 4.0": "NT4.0",
                                                    2e3: "NT 5.0",
                                                    XP: ["NT 5.1", "NT 5.2"],
                                                    Vista: "NT 6.0",
                                                    7: "NT 6.1",
                                                    8: "NT 6.2",
                                                    8.1: "NT 6.3",
                                                    10: ["NT 6.4", "NT 10.0"],
                                                    RT: "ARM"
                                                },
                                                name: {
                                                    "Windows Phone": "Windows Phone OS"
                                                }
                                            }
                                        }
                                    },
                                    w = {
                                        browser: [
                                            [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                                            [a, p],
                                            [/(opios)[\/\s]+([\w\.]+)/i],
                                            [
                                                [a, "Opera Mini"], p
                                            ],
                                            [/\s(opr)\/([\w\.]+)/i],
                                            [
                                                [a, "Opera"], p
                                            ],
                                            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],
                                            [a, p],
                                            [/(konqueror)\/([\w\.]+)/i],
                                            [
                                                [a, "Konqueror"], p
                                            ],
                                            [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                                            [
                                                [a, "IE"], p
                                            ],
                                            [/(edge|edgios|edga)\/((\d+)?[\w\.]+)/i],
                                            [
                                                [a, "Edge"], p
                                            ],
                                            [/(yabrowser)\/([\w\.]+)/i],
                                            [
                                                [a, "Yandex"], p
                                            ],
                                            [/(puffin)\/([\w\.]+)/i],
                                            [
                                                [a, "Puffin"], p
                                            ],
                                            [/(focus)\/([\w\.]+)/i],
                                            [
                                                [a, "Firefox Focus"], p
                                            ],
                                            [/(opt)\/([\w\.]+)/i],
                                            [
                                                [a, "Opera Touch"], p
                                            ],
                                            [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                                            [
                                                [a, "UCBrowser"], p
                                            ],
                                            [/(comodo_dragon)\/([\w\.]+)/i],
                                            [
                                                [a, /_/g, " "], p
                                            ],
                                            [/((?:android.+)crmo|crios)\/([\w\.]+)/i, /android.+(chrome)\/([\w\.]+)\s+(?:mobile\s?safari)/i],
                                            [
                                                [a, "Chrome Mobile"], p
                                            ],
                                            [/(micromessenger)\/([\w\.]+)/i],
                                            [
                                                [a, "WeChat"], p
                                            ],
                                            [/(brave)\/([\w\.]+)/i],
                                            [
                                                [a, "Brave"], p
                                            ],
                                            [/(qqbrowserlite)\/([\w\.]+)/i],
                                            [a, p],
                                            [/(QQ)\/([\d\.]+)/i],
                                            [a, p],
                                            [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                                            [a, p],
                                            [/(BIDUBrowser)[\/\s]?([\w\.]+)/i],
                                            [a, p],
                                            [/(2345Explorer)[\/\s]?([\w\.]+)/i],
                                            [a, p],
                                            [/(MetaSr)[\/\s]?([\w\.]+)/i],
                                            [a],
                                            [/(LBBROWSER)/i],
                                            [a],
                                            [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                                            [p, [a, "MIUI Browser"]],
                                            [/;fbav\/([\w\.]+);/i],
                                            [p, [a, "Facebook"]],
                                            [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i],
                                            [a, p],
                                            [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                                            [p, [a, "Chrome Headless"]],
                                            [/\swv\).+(chrome)\/([\w\.]+)/i],
                                            [
                                                [a, /(.+)/, "$1 WebView"], p
                                            ],
                                            [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                                            [
                                                [a, /(.+(?:g|us))(.+)/, "$1 $2"], p
                                            ],
                                            [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                                            [p, [a, "Android Browser"]],
                                            [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                                            [a, p],
                                            [/(dolfin)\/([\w\.]+)/i],
                                            [
                                                [a, "Dolphin"], p
                                            ],
                                            [/(coast)\/([\w\.]+)/i],
                                            [
                                                [a, "Opera Coast"], p
                                            ],
                                            [/fxios\/([\w\.-]+)/i],
                                            [p, [a, "Firefox"]],
                                            [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                                            [p, [a, "Mobile Safari"]],
                                            [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                                            [p, a],
                                            [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                                            [
                                                [a, "GSA"], p
                                            ],
                                            [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                                            [a, [p, y.str, _.browser.oldsafari.version]],
                                            [/(webkit|khtml)\/([\w\.]+)/i],
                                            [a, p],
                                            [/(navigator|netscape)\/([\w\.-]+)/i],
                                            [
                                                [a, "Netscape"], p
                                            ],
                                            [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                                            [a, p]
                                        ],
                                        cpu: [
                                            [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                                            [
                                                [d, "amd64"]
                                            ],
                                            [/(ia32(?=;))/i],
                                            [
                                                [d, m.lowerize]
                                            ],
                                            [/((?:i[346]|x)86)[;\)]/i],
                                            [
                                                [d, "ia32"]
                                            ],
                                            [/windows\s(ce|mobile);\sppc;/i],
                                            [
                                                [d, "arm"]
                                            ],
                                            [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                                            [
                                                [d, /ower/, "", m.lowerize]
                                            ],
                                            [/(sun4\w)[;\)]/i],
                                            [
                                                [d, "sparc"]
                                            ],
                                            [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                                            [
                                                [d, m.lowerize]
                                            ]
                                        ],
                                        device: [
                                            [/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],
                                            [s, c, [u, f]],
                                            [/applecoremedia\/[\w\.]+ \((ipad)/],
                                            [s, [c, "Apple"],
                                                [u, f]
                                            ],
                                            [/(apple\s{0,1}tv)/i],
                                            [
                                                [s, "Apple TV"],
                                                [c, "Apple"]
                                            ],
                                            [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                                            [c, s, [u, f]],
                                            [/(kf[A-z]+)\sbuild\/.+silk\//i],
                                            [s, [c, "Amazon"],
                                                [u, f]
                                            ],
                                            [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
                                            [
                                                [s, y.str, _.device.amazon.model],
                                                [c, "Amazon"],
                                                [u, h]
                                            ],
                                            [/android.+aft([bms])\sbuild/i],
                                            [s, [c, "Amazon"],
                                                [u, v]
                                            ],
                                            [/\((ip[honed|\s\w*]+);.+(apple)/i],
                                            [s, c, [u, h]],
                                            [/\((ip[honed|\s\w*]+);/i],
                                            [s, [c, "Apple"],
                                                [u, h]
                                            ],
                                            [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                                            [c, s, [u, h]],
                                            [/\(bb10;\s(\w+)/i],
                                            [s, [c, "BlackBerry"],
                                                [u, h]
                                            ],
                                            [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],
                                            [s, [c, "Asus"],
                                                [u, f]
                                            ],
                                            [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                                            [
                                                [c, "Sony"],
                                                [s, "Xperia Tablet"],
                                                [u, f]
                                            ],
                                            [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                                            [s, [c, "Sony"],
                                                [u, h]
                                            ],
                                            [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                                            [c, s, [u, l]],
                                            [/android.+;\s(shield)\sbuild/i],
                                            [s, [c, "Nvidia"],
                                                [u, l]
                                            ],
                                            [/(playstation\s[34portablevi]+)/i],
                                            [s, [c, "Sony"],
                                                [u, l]
                                            ],
                                            [/(sprint\s(\w+))/i],
                                            [
                                                [c, y.str, _.device.sprint.vendor],
                                                [s, y.str, _.device.sprint.model],
                                                [u, h]
                                            ],
                                            [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                                            [c, s, [u, f]],
                                            [/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                                            [c, [s, /_/g, " "],
                                                [u, h]
                                            ],
                                            [/(nexus\s9)/i],
                                            [s, [c, "HTC"],
                                                [u, f]
                                            ],
                                            [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i],
                                            [s, [c, "Huawei"],
                                                [u, h]
                                            ],
                                            [/(microsoft);\s(lumia[\s\w]+)/i],
                                            [c, s, [u, h]],
                                            [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                                            [s, [c, "Microsoft"],
                                                [u, l]
                                            ],
                                            [/(kin\.[onetw]{3})/i],
                                            [
                                                [s, /\./g, " "],
                                                [c, "Microsoft"],
                                                [u, h]
                                            ],
                                            [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                                            [s, [c, "Motorola"],
                                                [u, h]
                                            ],
                                            [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                                            [s, [c, "Motorola"],
                                                [u, f]
                                            ],
                                            [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                                            [
                                                [c, m.trim],
                                                [s, m.trim],
                                                [u, v]
                                            ],
                                            [/hbbtv.+maple;(\d+)/i],
                                            [
                                                [s, /^/, "SmartTV"],
                                                [c, "Samsung"],
                                                [u, v]
                                            ],
                                            [/\(dtv[\);].+(aquos)/i],
                                            [s, [c, "Sharp"],
                                                [u, v]
                                            ],
                                            [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                                            [
                                                [c, "Samsung"], s, [u, f]
                                            ],
                                            [/smart-tv.+(samsung)/i],
                                            [c, [u, v], s],
                                            [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i],
                                            [
                                                [c, "Samsung"], s, [u, h]
                                            ],
                                            [/sie-(\w*)/i],
                                            [s, [c, "Siemens"],
                                                [u, h]
                                            ],
                                            [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
                                            [
                                                [c, "Nokia"], s, [u, h]
                                            ],
                                            [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
                                            [s, [c, "Acer"],
                                                [u, f]
                                            ],
                                            [/android.+([vl]k\-?\d{3})\s+build/i],
                                            [s, [c, "LG"],
                                                [u, f]
                                            ],
                                            [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                                            [
                                                [c, "LG"], s, [u, f]
                                            ],
                                            [/(lg) netcast\.tv/i],
                                            [c, s, [u, v]],
                                            [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
                                            [s, [c, "LG"],
                                                [u, h]
                                            ],
                                            [/android.+(ideatab[a-z0-9\-\s]+)/i],
                                            [s, [c, "Lenovo"],
                                                [u, f]
                                            ],
                                            [/linux;.+((jolla));/i],
                                            [c, s, [u, h]],
                                            [/((pebble))app\/[\d\.]+\s/i],
                                            [c, s, [u, g]],
                                            [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                                            [c, s, [u, h]],
                                            [/crkey/i],
                                            [
                                                [s, "Chromecast"],
                                                [c, "Google"]
                                            ],
                                            [/android.+;\s(glass)\s\d/i],
                                            [s, [c, "Google"],
                                                [u, g]
                                            ],
                                            [/android.+;\s(pixel c)[\s)]/i],
                                            [s, [c, "Google"],
                                                [u, f]
                                            ],
                                            [/android.+;\s(pixel( [23])?( xl)?)\s/i],
                                            [s, [c, "Google"],
                                                [u, h]
                                            ],
                                            [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],
                                            [
                                                [s, /_/g, " "],
                                                [c, "Xiaomi"],
                                                [u, h]
                                            ],
                                            [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
                                            [
                                                [s, /_/g, " "],
                                                [c, "Xiaomi"],
                                                [u, f]
                                            ],
                                            [/android.+;\s(m[1-5]\snote)\sbuild/i],
                                            [s, [c, "Meizu"],
                                                [u, f]
                                            ],
                                            [/(mz)-([\w-]{2,})/i],
                                            [
                                                [c, "Meizu"], s, [u, h]
                                            ],
                                            [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i],
                                            [s, [c, "OnePlus"],
                                                [u, h]
                                            ],
                                            [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                                            [s, [c, "RCA"],
                                                [u, f]
                                            ],
                                            [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
                                            [s, [c, "Dell"],
                                                [u, f]
                                            ],
                                            [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                                            [s, [c, "Verizon"],
                                                [u, f]
                                            ],
                                            [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
                                            [
                                                [c, "Barnes & Noble"], s, [u, f]
                                            ],
                                            [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                                            [s, [c, "NuVision"],
                                                [u, f]
                                            ],
                                            [/android.+;\s(k88)\sbuild/i],
                                            [s, [c, "ZTE"],
                                                [u, f]
                                            ],
                                            [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                                            [s, [c, "Swiss"],
                                                [u, h]
                                            ],
                                            [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                                            [s, [c, "Swiss"],
                                                [u, f]
                                            ],
                                            [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                                            [s, [c, "Zeki"],
                                                [u, f]
                                            ],
                                            [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
                                            [
                                                [c, "Dragon Touch"], s, [u, f]
                                            ],
                                            [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
                                            [s, [c, "Insignia"],
                                                [u, f]
                                            ],
                                            [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
                                            [s, [c, "NextBook"],
                                                [u, f]
                                            ],
                                            [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
                                            [
                                                [c, "Voice"], s, [u, h]
                                            ],
                                            [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
                                            [
                                                [c, "LvTel"], s, [u, h]
                                            ],
                                            [/android.+;\s(PH-1)\s/i],
                                            [s, [c, "Essential"],
                                                [u, h]
                                            ],
                                            [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                                            [s, [c, "Envizen"],
                                                [u, f]
                                            ],
                                            [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
                                            [c, s, [u, f]],
                                            [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                                            [s, [c, "MachSpeed"],
                                                [u, f]
                                            ],
                                            [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                                            [c, s, [u, f]],
                                            [/android.+[;\/]\s*TU_(1491)\s+build/i],
                                            [s, [c, "Rotor"],
                                                [u, f]
                                            ],
                                            [/android.+(KS(.+))\s+build/i],
                                            [s, [c, "Amazon"],
                                                [u, f]
                                            ],
                                            [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
                                            [c, s, [u, f]],
                                            [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                                            [
                                                [u, m.lowerize], c, s
                                            ],
                                            [/[\s\/\(](smart-?tv)[;\)]/i],
                                            [
                                                [u, v]
                                            ],
                                            [/(android[\w\.\s\-]{0,9});.+build/i],
                                            [s, [c, "Generic"]]
                                        ],
                                        engine: [
                                            [/windows.+\sedge\/([\w\.]+)/i],
                                            [p, [a, "EdgeHTML"]],
                                            [/webkit\/537\.36.+chrome\/(?!27)/i],
                                            [
                                                [a, "Blink"]
                                            ],
                                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                                            [a, p],
                                            [/rv\:([\w\.]{1,9}).+(gecko)/i],
                                            [p, a]
                                        ],
                                        os: [
                                            [/microsoft\s(windows)\s(vista|xp)/i],
                                            [a, p],
                                            [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                                            [
                                                [a, y.str, _.os.windows.name],
                                                [p, y.str, _.os.windows.version]
                                            ],
                                            [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                                            [
                                                [a, "Windows"],
                                                [p, y.str, _.os.windows.version]
                                            ],
                                            [/\((bb)(10);/i],
                                            [
                                                [a, "BlackBerry"], p
                                            ],
                                            [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i, /linux;.+(sailfish);/i],
                                            [a, p],
                                            [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
                                            [
                                                [a, "Symbian"], p
                                            ],
                                            [/\((series40);/i],
                                            [a],
                                            [/mozilla.+\(mobile;.+gecko.+firefox/i],
                                            [
                                                [a, "Firefox OS"], p
                                            ],
                                            [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i],
                                            [
                                                [a, "Linux"], p
                                            ],
                                            [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                                            [
                                                [a, "Chromium OS"], p
                                            ],
                                            [/(sunos)\s?([\w\.\d]*)/i],
                                            [
                                                [a, "Solaris"], p
                                            ],
                                            [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
                                            [
                                                [a, "Linux"], p
                                            ],
                                            [/(iphone)(?:.*os\s*([\w]*)\slike\smac|;\sopera)/i],
                                            [
                                                [a, "iPhone"],
                                                [p, /_/g, "."]
                                            ],
                                            [/(ipad)(?:.*os\s*([\w]*)\slike\smac|;\sopera)/i],
                                            [
                                                [a, "iPad"],
                                                [p, /_/g, "."]
                                            ],
                                            [/(haiku)\s(\w+)/i],
                                            [a, p],
                                            [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
                                            [
                                                [p, /_/g, "."],
                                                [a, "iOS"]
                                            ],
                                            [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
                                            [
                                                [a, "Mac"],
                                                [p, /_/g, "."]
                                            ],
                                            [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i],
                                            [a, p]
                                        ]
                                    },
                                    b = function e(t, r) {
                                        if ("object" === typeof t && (r = t, t = i), !(this instanceof e)) return new e(t, r).getResult();
                                        var o = t || (n && n.navigator && n.navigator.userAgent ? n.navigator.userAgent : ""),
                                            s = r ? m.extend(w, r) : w;
                                        return this.getBrowser = function() {
                                            var e = {
                                                name: i,
                                                version: i
                                            };
                                            return y.rgx.call(e, o, s.browser), e.major = m.major(e.version), e
                                        }, this.getCPU = function() {
                                            var e = {
                                                architecture: i
                                            };
                                            return y.rgx.call(e, o, s.cpu), e
                                        }, this.getDevice = function() {
                                            var e = {
                                                vendor: i,
                                                model: i,
                                                type: i
                                            };
                                            return y.rgx.call(e, o, s.device), e
                                        }, this.getEngine = function() {
                                            var e = {
                                                name: i,
                                                version: i
                                            };
                                            return y.rgx.call(e, o, s.engine), e
                                        }, this.getOS = function() {
                                            var e = {
                                                name: i,
                                                version: i
                                            };
                                            return y.rgx.call(e, o, s.os), e
                                        }, this.getResult = function() {
                                            return {
                                                ua: this.getUA(),
                                                browser: this.getBrowser(),
                                                engine: this.getEngine(),
                                                os: this.getOS(),
                                                device: this.getDevice(),
                                                cpu: this.getCPU()
                                            }
                                        }, this.getUA = function() {
                                            return o
                                        }, this.setUA = function(e) {
                                            return o = e, this
                                        }, this
                                    };
                                b.VERSION = "0.7.19", b.BROWSER = {
                                    NAME: a,
                                    MAJOR: "major",
                                    VERSION: p
                                }, b.CPU = {
                                    ARCHITECTURE: d
                                }, b.DEVICE = {
                                    MODEL: s,
                                    VENDOR: c,
                                    TYPE: u,
                                    CONSOLE: l,
                                    MOBILE: h,
                                    SMARTTV: v,
                                    TABLET: f,
                                    WEARABLE: g,
                                    EMBEDDED: "embedded"
                                }, b.ENGINE = {
                                    NAME: a,
                                    VERSION: p
                                }, b.OS = {
                                    NAME: a,
                                    VERSION: p
                                }, e.exports && (t = e.exports = b), t.UAParser = b;
                                var I = n && (n.jQuery || n.Zepto);
                                if ("undefined" !== typeof I && !I.ua) {
                                    var S = new b;
                                    I.ua = S.getResult(), I.ua.get = function() {
                                        return S.getUA()
                                    }, I.ua.set = function(e) {
                                        S.setUA(e);
                                        var t = S.getResult();
                                        for (var n in t) I.ua[n] = t[n]
                                    }
                                }
                            }("object" === typeof window ? window : ve)
                        })),
                        Ce = (Ae.UAParser, function e(t) {
                            return t ? (t ^ 16 * Math.random() >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
                        }),
                        Te = function() {
                            for (var e = "", t = 0; t < 22; ++t) e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(Math.floor(64 * Math.random()));
                            return e
                        },
                        Pe = "6.2.0",
                        Re = {
                            apiEndpoint: "api.amplitude.com",
                            batchEvents: !1,
                            cookieExpiration: 3650,
                            cookieName: "amplitude_id",
                            sameSiteCookie: "None",
                            cookieForceUpgrade: !1,
                            deferInitialization: !1,
                            disableCookies: !1,
                            deviceIdFromUrlParam: !1,
                            domain: "",
                            eventUploadPeriodMillis: 3e4,
                            eventUploadThreshold: 30,
                            forceHttps: !0,
                            includeGclid: !1,
                            includeReferrer: !1,
                            includeUtm: !1,
                            language: navigator && (navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage) || "",
                            logLevel: "WARN",
                            optOut: !1,
                            onError: function() {},
                            platform: "Web",
                            savedMaxCount: 1e3,
                            saveEvents: !0,
                            saveParamsReferrerOncePerSession: !0,
                            secureCookie: !1,
                            sessionTimeout: 18e5,
                            trackingOptions: {
                                city: !0,
                                country: !0,
                                carrier: !0,
                                device_manufacturer: !0,
                                device_model: !0,
                                dma: !0,
                                ip_address: !0,
                                language: !0,
                                os_name: !0,
                                os_version: !0,
                                platform: !0,
                                region: !0,
                                version_name: !0
                            },
                            unsetParamsReferrerOnNewSession: !1,
                            unsentKey: "amplitude_unsent",
                            unsentIdentifyKey: "amplitude_unsent_identify",
                            uploadBatchSize: 100
                        },
                        qe = function(e) {
                            this._instanceName = F(e) ? s : e.toLowerCase(), this._unsentEvents = [], this._unsentIdentifys = [], this._ua = new Ae(navigator.userAgent).getResult(), this.options = o({}, Re, {
                                trackingOptions: o({}, Re.trackingOptions)
                            }), this.cookieStorage = (new de).getStorage(), this._q = [], this._sending = !1, this._updateScheduled = !1, this._onInit = [], this._eventId = 0, this._identifyId = 0, this._lastEventTime = null, this._newSession = !1, this._sequenceNumber = 0, this._sessionId = null, this._isInitialized = !1, this._userAgent = navigator && navigator.userAgent || null
                        };
                    qe.prototype.Identify = fe, qe.prototype.Revenue = xe, qe.prototype.init = function(e, t, n, i) {
                        var r = this;
                        if ("string" !== C(e) || F(e)) B.error("Invalid apiKey. Please re-initialize with a valid apiKey");
                        else try {
                            je(this.options, n), this.options.cookieName !== Re.cookieName && B.warn("The cookieName option is deprecated. We will be ignoring it for newer cookies"), this.options.apiKey = e, this._storageSuffix = "_" + e + (this._instanceName === s ? "" : "_" + this._instanceName), this._storageSuffixV5 = e.slice(0, 6), this._oldCookiename = this.options.cookieName + this._storageSuffix, this._unsentKey = this.options.unsentKey + this._storageSuffix, this._unsentIdentifyKey = this.options.unsentIdentifyKey + this._storageSuffix, this._cookieName = h + "_" + this._storageSuffixV5, this.cookieStorage.options({
                                expirationDays: this.options.cookieExpiration,
                                domain: this.options.domain,
                                secure: this.options.secureCookie,
                                sameSite: this.options.sameSiteCookie
                            }), this._metadataStorage = new le({
                                storageKey: this._cookieName,
                                disableCookies: this.options.disableCookies,
                                expirationDays: this.options.cookieExpiration,
                                domain: this.options.domain,
                                secure: this.options.secureCookie,
                                sameSite: this.options.sameSiteCookie
                            });
                            var o = !!this.cookieStorage.get(this._oldCookiename),
                                a = !!this._metadataStorage.load();
                            this._useOldCookie = !a && o && !this.options.cookieForceUpgrade;
                            var u = a || o;
                            if (this.options.domain = this.cookieStorage.options().domain, this.options.deferInitialization && !u) return void this._deferInitialization(e, t, n, i);
                            "string" === C(this.options.logLevel) && G(this.options.logLevel);
                            var c = Ve(this);
                            this._apiPropertiesTrackingOptions = Object.keys(c).length > 0 ? {
                                tracking_options: c
                            } : {}, this.options.cookieForceUpgrade && o && (a || Me(this), this.cookieStorage.remove(this._oldCookiename)), Ue(this), this._pendingReadStorage = !0;
                            var p = function(e) {
                                r.options.deviceId = "object" === C(n) && "string" === C(n.deviceId) && !F(n.deviceId) && n.deviceId || r.options.deviceIdFromUrlParam && r._getDeviceIdFromUrlParam(r._getUrlParams()) || r.options.deviceId || e || Te(), r.options.userId = "string" === C(t) && !F(t) && t || "number" === C(t) && t.toString() || r.options.userId || null;
                                var i = (new Date).getTime();
                                (!r._sessionId || !r._lastEventTime || i - r._lastEventTime > r.options.sessionTimeout) && (r.options.unsetParamsReferrerOnNewSession && r._unsetUTMParams(), r._newSession = !0, r._sessionId = i, r.options.saveParamsReferrerOncePerSession && r._trackParamsAndReferrer()), r.options.saveParamsReferrerOncePerSession || r._trackParamsAndReferrer(), r.options.saveEvents && (De(r._unsentEvents), De(r._unsentIdentifys)), r._lastEventTime = i, ze(r), r._pendingReadStorage = !1, r._sendEventsIfReady();
                                for (var o = 0; o < r._onInit.length; o++) r._onInit[o](r);
                                r._onInit = [], r._isInitialized = !0
                            };
                            this.options.saveEvents && (this._unsentEvents = this._loadSavedUnsentEvents(this.options.unsentKey).map((function(e) {
                                return {
                                    event: e
                                }
                            })).concat(this._unsentEvents), this._unsentIdentifys = this._loadSavedUnsentEvents(this.options.unsentIdentifyKey).map((function(e) {
                                return {
                                    event: e
                                }
                            })).concat(this._unsentIdentifys)), p(), this.runQueuedFunctions(), "function" === C(i) && i(this)
                        } catch (d) {
                            B.error(d), this.options.onError(d)
                        }
                    };
                    var De = function(e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t].event.user_properties,
                                i = e[t].event.event_properties,
                                r = e[t].event.groups;
                            e[t].event.user_properties = J(n), e[t].event.event_properties = J(i), e[t].event.groups = W(r)
                        }
                    };
                    qe.prototype._migrateUnsentEvents = function(e) {
                        var t = this;
                        Promise.all([Ne.getItem(this.options.unsentKey), Ne.getItem(this.options.unsentIdentifyKey)]).then((function(e) {
                            if (t.options.saveEvents) {
                                var n = e[0],
                                    i = e[1],
                                    r = [],
                                    o = [];
                                n && (r.push(Ne.setItem(t.options.unsentKey + t._storageSuffix, JSON.stringify(n))), o.push(Ne.removeItem(t.options.unsentKey))), i && (r.push(Ne.setItem(t.options.unsentIdentifyKey + t._storageSuffix, JSON.stringify(i))), o.push(Ne.removeItem(t.options.unsentIdentifyKey))), r.length > 0 && Promise.all(r).then((function() {})).catch((function(e) {
                                    t.options.onError(e)
                                }))
                            }
                        })).then(e).catch((function(e) {
                            t.options.onError(e)
                        }))
                    }, qe.prototype._trackParamsAndReferrer = function() {
                        this.options.includeUtm && this._initUtmData(), this.options.includeReferrer && this._saveReferrer(this._getReferrer()), this.options.includeGclid && this._saveGclid(this._getUrlParams())
                    };
                    var je = function e(t, n) {
                        if ("object" === C(n)) {
                            var i = function(i) {
                                if (t.hasOwnProperty(i)) {
                                    var r = n[i],
                                        o = C(t[i]);
                                    $(r, i + " option", o) && ("boolean" === o ? t[i] = !!r : "string" === o && !F(r) || "number" === o && r > 0 ? t[i] = r : "object" === o && e(t[i], r))
                                }
                            };
                            for (var r in n) n.hasOwnProperty(r) && i(r)
                        }
                    };
                    qe.prototype.runQueuedFunctions = function() {
                        var e = this._q;
                        this._q = [];
                        for (var t = 0; t < e.length; t++) {
                            var n = this[e[t][0]];
                            "function" === C(n) && n.apply(this, e[t].slice(1))
                        }
                    }, qe.prototype._apiKeySet = function(e) {
                        return !F(this.options.apiKey) || (B.error("Invalid apiKey. Please set a valid apiKey with init() before calling " + e), !1)
                    }, qe.prototype._loadSavedUnsentEvents = function(e) {
                        var t = this._getFromStorage(pe, e),
                            n = this._parseSavedUnsentEventsString(t, e);
                        return this._setInStorage(pe, e, JSON.stringify(n)), n
                    }, qe.prototype._parseSavedUnsentEventsString = function(e, t) {
                        if (F(e)) return [];
                        if ("string" === C(e)) try {
                            var n = JSON.parse(e);
                            if ("array" === C(n)) return n
                        } catch (He) {}
                        return B.error("Unable to load " + t + " events. Restart with a new empty queue."), []
                    }, qe.prototype.isNewSession = function() {
                        return this._newSession
                    }, qe.prototype.onInit = function(e) {
                        this._isInitialized ? e() : this._onInit.push(e)
                    }, qe.prototype.getSessionId = function() {
                        return this._sessionId
                    }, qe.prototype.nextEventId = function() {
                        return this._eventId++, this._eventId
                    }, qe.prototype.nextIdentifyId = function() {
                        return this._identifyId++, this._identifyId
                    }, qe.prototype.nextSequenceNumber = function() {
                        return this._sequenceNumber++, this._sequenceNumber
                    }, qe.prototype._unsentCount = function() {
                        return this._unsentEvents.length + this._unsentIdentifys.length
                    }, qe.prototype._sendEventsIfReady = function() {
                        return 0 !== this._unsentCount() && (this.options.batchEvents ? this._unsentCount() >= this.options.eventUploadThreshold ? (this.sendEvents(), !0) : (this._updateScheduled || (this._updateScheduled = !0, setTimeout(function() {
                            this._updateScheduled = !1, this.sendEvents()
                        }.bind(this), this.options.eventUploadPeriodMillis)), !1) : (this.sendEvents(), !0))
                    }, qe.prototype._getFromStorage = function(e, t) {
                        return e.getItem(t + this._storageSuffix)
                    }, qe.prototype._setInStorage = function(e, t, n) {
                        e.setItem(t + this._storageSuffix, n)
                    };
                    var Ue = function(e) {
                            if (e._useOldCookie) {
                                var t = e.cookieStorage.get(e._oldCookiename);
                                "object" !== C(t) || Ke(e, t)
                            } else {
                                var n = e._metadataStorage.load();
                                "object" === C(n) && Ke(e, n)
                            }
                        },
                        Me = function(e) {
                            var t = e.cookieStorage.get(e._oldCookiename);
                            "object" === C(t) && (Ke(e, t), ze(e))
                        },
                        Ke = function(e, t) {
                            t.deviceId && (e.options.deviceId = t.deviceId), t.userId && (e.options.userId = t.userId), null !== t.optOut && void 0 !== t.optOut && !1 !== t.optOut && (e.options.optOut = t.optOut), t.sessionId && (e._sessionId = parseInt(t.sessionId, 10)), t.lastEventTime && (e._lastEventTime = parseInt(t.lastEventTime, 10)), t.eventId && (e._eventId = parseInt(t.eventId, 10)), t.identifyId && (e._identifyId = parseInt(t.identifyId, 10)), t.sequenceNumber && (e._sequenceNumber = parseInt(t.sequenceNumber, 10))
                        },
                        ze = function(e) {
                            var t = {
                                deviceId: e.options.deviceId,
                                userId: e.options.userId,
                                optOut: e.options.optOut,
                                sessionId: e._sessionId,
                                lastEventTime: e._lastEventTime,
                                eventId: e._eventId,
                                identifyId: e._identifyId,
                                sequenceNumber: e._sequenceNumber
                            };
                            e._useOldCookie ? e.cookieStorage.set(e.options.cookieName + e._storageSuffix, t) : e._metadataStorage.save(t)
                        };
                    qe.prototype._initUtmData = function(e, t) {
                        e = e || this._getUrlParams();
                        var n = function(e, t) {
                            var n = e ? "?" + e.split(".").slice(-1)[0].replace(/\|/g, "&") : "",
                                i = function(e, t, n, i) {
                                    return V(e, t) || V(n, i)
                                },
                                r = i(b, t, "utmcsr", n),
                                o = i(I, t, "utmcmd", n),
                                s = i(S, t, "utmccn", n),
                                a = i(k, t, "utmctr", n),
                                u = i(E, t, "utmcct", n),
                                c = {},
                                p = function(e, t) {
                                    F(t) || (c[e] = t)
                                };
                            return p(b, r), p(I, o), p(S, s), p(k, a), p(E, u), c
                        }(t = t || this.cookieStorage.get("__utmz"), e);
                        Ge(this, n)
                    }, qe.prototype._unsetUTMParams = function() {
                        var e = new fe;
                        e.unset(w), e.unset(b), e.unset(I), e.unset(S), e.unset(k), e.unset(E), this.identify(e)
                    };
                    var Ge = function(e, t) {
                        if ("object" === C(t) && 0 !== Object.keys(t).length) {
                            var n = new fe;
                            for (var i in t) t.hasOwnProperty(i) && (n.setOnce("initial_" + i, t[i]), n.set(i, t[i]));
                            e.identify(n)
                        }
                    };
                    qe.prototype._getReferrer = function() {
                        return document.referrer
                    }, qe.prototype._getUrlParams = function() {
                        return location.search
                    }, qe.prototype._saveGclid = function(e) {
                        var t = V("gclid", e);
                        F(t) || Ge(this, {
                            gclid: t
                        })
                    }, qe.prototype._getDeviceIdFromUrlParam = function(e) {
                        return V(_, e)
                    }, qe.prototype._getReferringDomain = function(e) {
                        if (F(e)) return null;
                        var t = e.split("/");
                        return t.length >= 3 ? t[2] : null
                    }, qe.prototype._saveReferrer = function(e) {
                        if (!F(e)) {
                            var t = {
                                referrer: e,
                                referring_domain: this._getReferringDomain(e)
                            };
                            Ge(this, t)
                        }
                    }, qe.prototype.saveEvents = function() {
                        try {
                            var e = JSON.stringify(this._unsentEvents.map((function(e) {
                                return e.event
                            })));
                            this._setInStorage(pe, this.options.unsentKey, e)
                        } catch (He) {}
                        try {
                            var t = JSON.stringify(this._unsentIdentifys.map((function(e) {
                                return e.event
                            })));
                            this._setInStorage(pe, this.options.unsentIdentifyKey, t)
                        } catch (He) {}
                    }, qe.prototype.setDomain = function(e) {
                        if (this._shouldDeferCall()) return this._q.push(["setDomain"].concat(Array.prototype.slice.call(arguments, 0)));
                        if ($(e, "domain", "string")) try {
                            this.cookieStorage.options({
                                expirationDays: this.options.cookieExpiration,
                                secure: this.options.secureCookie,
                                domain: e,
                                sameSite: this.options.sameSiteCookie
                            }), this.options.domain = this.cookieStorage.options().domain, Ue(this), ze(this)
                        } catch (He) {
                            B.error(He)
                        }
                    }, qe.prototype.setUserId = function(e) {
                        if (this._shouldDeferCall()) return this._q.push(["setUserId"].concat(Array.prototype.slice.call(arguments, 0)));
                        try {
                            this.options.userId = void 0 !== e && null !== e && "" + e || null, ze(this)
                        } catch (He) {
                            B.error(He)
                        }
                    }, qe.prototype.setGroup = function(e, t) {
                        if (this._shouldDeferCall()) return this._q.push(["setGroup"].concat(Array.prototype.slice.call(arguments, 0)));
                        if (this._apiKeySet("setGroup()") && $(e, "groupType", "string") && !F(e)) {
                            var n = {};
                            n[e] = t;
                            var i = (new fe).set(e, t);
                            this._logEvent(p, null, null, i.userPropertiesOperations, n, null, null, null)
                        }
                    }, qe.prototype.setOptOut = function(e) {
                        if (this._shouldDeferCall()) return this._q.push(["setOptOut"].concat(Array.prototype.slice.call(arguments, 0)));
                        if ($(e, "enable", "boolean")) try {
                            this.options.optOut = e, ze(this)
                        } catch (He) {
                            B.error(He)
                        }
                    }, qe.prototype.setSessionId = function(e) {
                        if ($(e, "sessionId", "number")) try {
                            this._sessionId = e, ze(this)
                        } catch (He) {
                            B.error(He)
                        }
                    }, qe.prototype.resetSessionId = function() {
                        this.setSessionId((new Date).getTime())
                    }, qe.prototype.regenerateDeviceId = function() {
                        if (this._shouldDeferCall()) return this._q.push(["regenerateDeviceId"].concat(Array.prototype.slice.call(arguments, 0)));
                        this.setDeviceId(Te())
                    }, qe.prototype.setDeviceId = function(e) {
                        if (this._shouldDeferCall()) return this._q.push(["setDeviceId"].concat(Array.prototype.slice.call(arguments, 0)));
                        if ($(e, "deviceId", "string")) try {
                            F(e) || (this.options.deviceId = "" + e, ze(this))
                        } catch (He) {
                            B.error(He)
                        }
                    }, qe.prototype.setUserProperties = function(e) {
                        if (this._shouldDeferCall()) return this._q.push(["setUserProperties"].concat(Array.prototype.slice.call(arguments, 0)));
                        if (this._apiKeySet("setUserProperties()") && $(e, "userProperties", "object")) {
                            var t = L(J(e));
                            if (0 !== Object.keys(t).length) {
                                var n = new fe;
                                for (var i in t) t.hasOwnProperty(i) && n.set(i, t[i]);
                                this.identify(n)
                            }
                        }
                    }, qe.prototype.clearUserProperties = function() {
                        if (this._shouldDeferCall()) return this._q.push(["clearUserProperties"].concat(Array.prototype.slice.call(arguments, 0)));
                        if (this._apiKeySet("clearUserProperties()")) {
                            var e = new fe;
                            e.clearAll(), this.identify(e)
                        }
                    };
                    var Be = function(e, t) {
                        for (var n = 0; n < t._q.length; n++) {
                            var i = e[t._q[n][0]];
                            "function" === C(i) && i.apply(e, t._q[n].slice(1))
                        }
                        return e
                    };
                    qe.prototype.identify = function(e, t) {
                        if (this._shouldDeferCall()) return this._q.push(["identify"].concat(Array.prototype.slice.call(arguments, 0)));
                        if (this._apiKeySet("identify()"))
                            if ("object" === C(e) && e.hasOwnProperty("_q") && (e = Be(new fe, e)), e instanceof fe) {
                                if (Object.keys(e.userPropertiesOperations).length > 0) return this._logEvent(p, null, null, e.userPropertiesOperations, null, null, null, t);
                                "function" === C(t) && t(0, "No request sent", {
                                    reason: "No user property operations"
                                })
                            } else B.error("Invalid identify input type. Expected Identify object but saw " + C(e)), "function" === C(t) && t(0, "No request sent", {
                                reason: "Invalid identify input type"
                            });
                        else "function" === C(t) && t(0, "No request sent", {
                            reason: "API key is not set"
                        })
                    }, qe.prototype.groupIdentify = function(e, t, n, i) {
                        if (this._shouldDeferCall()) return this._q.push(["groupIdentify"].concat(Array.prototype.slice.call(arguments, 0)));
                        if (this._apiKeySet("groupIdentify()"))
                            if ($(e, "group_type", "string") && !F(e))
                                if (null !== t && void 0 !== t)
                                    if ("object" === C(n) && n.hasOwnProperty("_q") && (n = Be(new fe, n)), n instanceof fe) {
                                        if (Object.keys(n.userPropertiesOperations).length > 0) return this._logEvent(d, null, null, null, r({}, e, t), n.userPropertiesOperations, null, i);
                                        "function" === C(i) && i(0, "No request sent", {
                                            reason: "No group property operations"
                                        })
                                    } else B.error("Invalid identify input type. Expected Identify object but saw " + C(n)), "function" === C(i) && i(0, "No request sent", {
                                        reason: "Invalid identify input type"
                                    });
                        else "function" === C(i) && i(0, "No request sent", {
                            reason: "Invalid group name"
                        });
                        else "function" === C(i) && i(0, "No request sent", {
                            reason: "Invalid group type"
                        });
                        else "function" === C(i) && i(0, "No request sent", {
                            reason: "API key is not set"
                        })
                    }, qe.prototype.setVersionName = function(e) {
                        if (this._shouldDeferCall()) return this._q.push(["setVersionName"].concat(Array.prototype.slice.call(arguments, 0)));
                        $(e, "versionName", "string") && (this.options.versionName = e)
                    }, qe.prototype._logEvent = function(e, t, n, i, r, s, a, u) {
                        if (Ue(this), e)
                            if (this.options.optOut) "function" === C(u) && u(0, "No request sent", {
                                reason: "optOut is set to true"
                            });
                            else try {
                                var c;
                                c = e === p || e === d ? this.nextIdentifyId() : this.nextEventId();
                                var l = this.nextSequenceNumber(),
                                    h = "number" === C(a) ? a : (new Date).getTime();
                                (!this._sessionId || !this._lastEventTime || h - this._lastEventTime > this.options.sessionTimeout) && (this._sessionId = h), this._lastEventTime = h, ze(this);
                                var f = this._ua.browser.name,
                                    v = this._ua.browser.major,
                                    g = this._ua.device.model,
                                    m = this._ua.device.vendor;
                                i = i || {};
                                var y = o({}, this._apiPropertiesTrackingOptions);
                                n = o({}, n || {}, y), t = t || {}, r = r || {}, s = s || {};
                                var _ = {
                                    device_id: this.options.deviceId,
                                    user_id: this.options.userId,
                                    timestamp: h,
                                    event_id: c,
                                    session_id: this._sessionId || -1,
                                    event_type: e,
                                    version_name: Fe(this, "version_name") && this.options.versionName || null,
                                    platform: Fe(this, "platform") ? this.options.platform : null,
                                    os_name: Fe(this, "os_name") && f || null,
                                    os_version: Fe(this, "os_version") && v || null,
                                    device_model: Fe(this, "device_model") && g || null,
                                    device_manufacturer: Fe(this, "device_manufacturer") && m || null,
                                    language: Fe(this, "language") ? this.options.language : null,
                                    carrier: (Fe(this, "carrier"), null),
                                    api_properties: n,
                                    event_properties: L(J(t)),
                                    user_properties: L(J(i)),
                                    uuid: Ce(),
                                    library: {
                                        name: "amplitude-js",
                                        version: Pe
                                    },
                                    sequence_number: l,
                                    groups: L(W(r)),
                                    group_properties: L(J(s)),
                                    user_agent: this._userAgent
                                };
                                return e === p || e === d ? (this._unsentIdentifys.push({
                                    event: _,
                                    callback: u
                                }), this._limitEventsQueued(this._unsentIdentifys)) : (this._unsentEvents.push({
                                    event: _,
                                    callback: u
                                }), this._limitEventsQueued(this._unsentEvents)), this.options.saveEvents && this.saveEvents(), this._sendEventsIfReady(u), c
                            } catch (He) {
                                B.error(He)
                            } else "function" === C(u) && u(0, "No request sent", {
                                reason: "Missing eventType"
                            })
                    };
                    var Fe = function(e, t) {
                            return !!e.options.trackingOptions[t]
                        },
                        Ve = function(e) {
                            for (var t = ["city", "country", "dma", "ip_address", "region"], n = {}, i = 0; i < t.length; i++) {
                                var r = t[i];
                                Fe(e, r) || (n[r] = !1)
                            }
                            return n
                        };
                    qe.prototype._limitEventsQueued = function(e) {
                        e.length > this.options.savedMaxCount && e.splice(0, e.length - this.options.savedMaxCount)
                    }, qe.prototype.logEvent = function(e, t, n) {
                        return this._shouldDeferCall() ? this._q.push(["logEvent"].concat(Array.prototype.slice.call(arguments, 0))) : this.logEventWithTimestamp(e, t, null, n)
                    }, qe.prototype.logEventWithTimestamp = function(e, t, n, i) {
                        return this._shouldDeferCall() ? this._q.push(["logEventWithTimestamp"].concat(Array.prototype.slice.call(arguments, 0))) : this._apiKeySet("logEvent()") ? $(e, "eventType", "string") ? F(e) ? ("function" === C(i) && i(0, "No request sent", {
                            reason: "Missing eventType"
                        }), -1) : this._logEvent(e, t, null, null, null, null, n, i) : ("function" === C(i) && i(0, "No request sent", {
                            reason: "Invalid type for eventType"
                        }), -1) : ("function" === C(i) && i(0, "No request sent", {
                            reason: "API key not set"
                        }), -1)
                    }, qe.prototype.logEventWithGroups = function(e, t, n, i) {
                        return this._shouldDeferCall() ? this._q.push(["logEventWithGroups"].concat(Array.prototype.slice.call(arguments, 0))) : this._apiKeySet("logEventWithGroups()") ? $(e, "eventType", "string") ? this._logEvent(e, t, null, null, n, null, null, i) : ("function" === C(i) && i(0, "No request sent", {
                            reason: "Invalid type for eventType"
                        }), -1) : ("function" === C(i) && i(0, "No request sent", {
                            reason: "API key not set"
                        }), -1)
                    };
                    var Le = function(e) {
                        return !isNaN(parseFloat(e)) && isFinite(e)
                    };
                    qe.prototype.logRevenueV2 = function(e) {
                        if (this._shouldDeferCall()) return this._q.push(["logRevenueV2"].concat(Array.prototype.slice.call(arguments, 0)));
                        if (this._apiKeySet("logRevenueV2()"))
                            if ("object" === C(e) && e.hasOwnProperty("_q") && (e = Be(new xe, e)), e instanceof xe) {
                                if (e && e._isValidRevenue()) return this.logEvent(f, e._toJSONObject())
                            } else B.error("Invalid revenue input type. Expected Revenue object but saw " + C(e))
                    }, qe.prototype.logRevenue = function(e, t, n) {
                        return this._shouldDeferCall() ? this._q.push(["logRevenue"].concat(Array.prototype.slice.call(arguments, 0))) : this._apiKeySet("logRevenue()") && Le(e) && (void 0 === t || Le(t)) ? this._logEvent(f, {}, {
                            productId: n,
                            special: "revenue_amount",
                            quantity: t || 1,
                            price: e
                        }, null, null, null, null, null) : -1
                    }, qe.prototype.removeEvents = function(e, t, n, i) {
                        We(this, "_unsentEvents", e, n, i), We(this, "_unsentIdentifys", t, n, i)
                    };
                    var We = function(e, t, n, i, r) {
                        if (!(n < 0)) {
                            for (var o = [], s = 0; s < e[t].length; s++) {
                                var a = e[t][s];
                                a.event.event_id > n ? o.push(a) : a.callback && a.callback(i, r)
                            }
                            e[t] = o
                        }
                    };
                    qe.prototype.sendEvents = function() {
                        if (this._apiKeySet("sendEvents()")) {
                            if (this.options.optOut) this.removeEvents(1 / 0, 1 / 0, 0, "No request sent", {
                                reason: "Opt out is set to true"
                            });
                            else if (0 !== this._unsentCount() && !this._sending) {
                                this._sending = !0;
                                var e = (this.options.forceHttps || "https:" === window.location.protocol ? "https" : "http") + "://" + this.options.apiEndpoint,
                                    t = Math.min(this._unsentCount(), this.options.uploadBatchSize),
                                    n = this._mergeEventsAndIdentifys(t),
                                    i = n.maxEventId,
                                    r = n.maxIdentifyId,
                                    o = JSON.stringify(n.eventsToSend.map((function(e) {
                                        return e.event
                                    }))),
                                    s = (new Date).getTime(),
                                    u = {
                                        client: this.options.apiKey,
                                        e: o,
                                        v: a,
                                        upload_time: s,
                                        checksum: me(a + this.options.apiKey + o + s)
                                    },
                                    c = this;
                                new Oe(e, u).send((function(e, n) {
                                    c._sending = !1;
                                    try {
                                        200 === e && "success" === n ? (c.removeEvents(i, r, e, n), c.options.saveEvents && c.saveEvents(), c._sendEventsIfReady()) : 413 === e && (1 === c.options.uploadBatchSize && c.removeEvents(i, r, e, n), c.options.uploadBatchSize = Math.ceil(t / 2), c.sendEvents())
                                    } catch (He) {}
                                }))
                            }
                        } else this.removeEvents(1 / 0, 1 / 0, 0, "No request sent", {
                            reason: "API key not set"
                        })
                    }, qe.prototype._mergeEventsAndIdentifys = function(e) {
                        for (var t = [], n = 0, i = -1, r = 0, o = -1; t.length < e;) {
                            var s = void 0,
                                a = r >= this._unsentIdentifys.length,
                                u = n >= this._unsentEvents.length;
                            if (u && a) {
                                B.error("Merging Events and Identifys, less events and identifys than expected");
                                break
                            }
                            a ? i = (s = this._unsentEvents[n++]).event.event_id : u ? o = (s = this._unsentIdentifys[r++]).event.event_id : !("sequence_number" in this._unsentEvents[n].event) || this._unsentEvents[n].event.sequence_number < this._unsentIdentifys[r].event.sequence_number ? i = (s = this._unsentEvents[n++]).event.event_id : o = (s = this._unsentIdentifys[r++]).event.event_id, t.push(s)
                        }
                        return {
                            eventsToSend: t,
                            maxEventId: i,
                            maxIdentifyId: o
                        }
                    }, qe.prototype.setGlobalUserProperties = function(e) {
                        this.setUserProperties(e)
                    }, qe.prototype.__VERSION__ = Pe, qe.prototype._shouldDeferCall = function() {
                        return this._pendingReadStorage || this._initializationDeferred
                    }, qe.prototype._deferInitialization = function() {
                        this._initializationDeferred = !0, this._q.push(["init"].concat(Array.prototype.slice.call(arguments, 0)))
                    }, qe.prototype.enableTracking = function() {
                        this._initializationDeferred = !1, ze(this), this.runQueuedFunctions()
                    };
                    var $e = function() {
                        this.options = o({}, Re), this._q = [], this._instances = {}
                    };
                    $e.prototype.Identify = fe, $e.prototype.Revenue = xe, $e.prototype.getInstance = function(e) {
                        e = F(e) ? s : e.toLowerCase();
                        var t = this._instances[e];
                        return void 0 === t && (t = new qe(e), this._instances[e] = t), t
                    }, $e.prototype.runQueuedFunctions = function() {
                        for (var e = 0; e < this._q.length; e++) {
                            var t = this[this._q[e][0]];
                            "function" === C(t) && t.apply(this, this._q[e].slice(1))
                        }
                        for (var n in this._q = [], this._instances) this._instances.hasOwnProperty(n) && this._instances[n].runQueuedFunctions()
                    }, $e.prototype.init = function(e, t, n, i) {
                        this.getInstance().init(e, t, n, function(e) {
                            this.options = e.options, "function" === C(i) && i(e)
                        }.bind(this))
                    }, $e.prototype.isNewSession = function() {
                        return this.getInstance().isNewSession()
                    }, $e.prototype.getSessionId = function() {
                        return this.getInstance().getSessionId()
                    }, $e.prototype.nextEventId = function() {
                        return this.getInstance().nextEventId()
                    }, $e.prototype.nextIdentifyId = function() {
                        return this.getInstance().nextIdentifyId()
                    }, $e.prototype.nextSequenceNumber = function() {
                        return this.getInstance().nextSequenceNumber()
                    }, $e.prototype.saveEvents = function() {
                        this.getInstance().saveEvents()
                    }, $e.prototype.setDomain = function(e) {
                        this.getInstance().setDomain(e)
                    }, $e.prototype.setUserId = function(e) {
                        this.getInstance().setUserId(e)
                    }, $e.prototype.setGroup = function(e, t) {
                        this.getInstance().setGroup(e, t)
                    }, $e.prototype.setOptOut = function(e) {
                        this.getInstance().setOptOut(e)
                    }, $e.prototype.regenerateDeviceId = function() {
                        this.getInstance().regenerateDeviceId()
                    }, $e.prototype.setDeviceId = function(e) {
                        this.getInstance().setDeviceId(e)
                    }, $e.prototype.setUserProperties = function(e) {
                        this.getInstance().setUserProperties(e)
                    }, $e.prototype.clearUserProperties = function() {
                        this.getInstance().clearUserProperties()
                    }, $e.prototype.identify = function(e, t) {
                        this.getInstance().identify(e, t)
                    }, $e.prototype.setVersionName = function(e) {
                        this.getInstance().setVersionName(e)
                    }, $e.prototype.logEvent = function(e, t, n) {
                        return this.getInstance().logEvent(e, t, n)
                    }, $e.prototype.logEventWithGroups = function(e, t, n, i) {
                        return this.getInstance().logEventWithGroups(e, t, n, i)
                    }, $e.prototype.logRevenueV2 = function(e) {
                        return this.getInstance().logRevenueV2(e)
                    }, $e.prototype.logRevenue = function(e, t, n) {
                        return this.getInstance().logRevenue(e, t, n)
                    }, $e.prototype.removeEvents = function(e, t) {
                        this.getInstance().removeEvents(e, t)
                    }, $e.prototype.sendEvents = function(e) {
                        this.getInstance().sendEvents(e)
                    }, $e.prototype.setGlobalUserProperties = function(e) {
                        this.getInstance().setUserProperties(e)
                    }, $e.prototype.__VERSION__ = Pe;
                    var Je = window.amplitude || {},
                        Qe = new $e;
                    for (var Xe in Qe._q = Je._q || [], Je._iq) Je._iq.hasOwnProperty(Xe) && (Qe.getInstance(Xe)._q = Je._iq[Xe]._q || []);
                    return Qe.runQueuedFunctions(), Qe
                }, e.exports = i()
            }).call(this, n(74).Buffer, n(69))
        }
    }
]);