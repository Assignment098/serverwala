/*! TABOOLA-DEFAULT-VERSION-SNAPSHOT 2021-07-12 */

! function(t) {
    try {
        var e = "https://",
            n = "aHR0cHM6Ly9waXBzLnRhYm9vbGEuY29t";
        t.TRC.cds = {
            userId: null,
            getHttpsPrefix: function t() {
                return e
            },
            doNothing: function t() {
                return !0
            },
            safeGetTfaConfig: function e(n, r, s) {
                return t._tfa && t._tfa.config && t._tfa.config.safeGet && t._tfa.config.safeGet(n, r, s)
            },
            safeGetRboxConfig: function t(e) {
                var n;
                return (TRCImpl ? TRCImpl.global : {})[e]
            },
            prepareGenericRequest: function e(n, r) {
                var s, i = new(t.XDomainRequest || t.XMLHttpRequest);
                return i.open(n, r), i.onload = this.doNothing, i.onerror = this.doNothing, i.onprogress = this.doNothing, i
            },
            getUserId: function e() {
                var n = t.TFASC && t.TFASC.tfaUserId && "function" == typeof t.TFASC.tfaUserId.getUserId ? t.TFASC.tfaUserId.getUserId() : null,
                    r = t.TRC.pageManager && "function" == typeof t.TRC.pageManager.getUserId ? t.TRC.pageManager.getUserId() : null;
                return n || r
            },
            sendFinalReq: function t(e) {
                var n = "".concat(this.getHttpsPrefix(), "cds.taboola.com?uid=").concat(this.userId),
                    r;
                null !== e[0] && (n += "&uad=".concat(e[0])), this.prepareGenericRequest("GET", n).send()
            },
            sendSimpleReq: function t() {
                var e = "".concat(this.getHttpsPrefix(), "cds.taboola.com?uid=").concat(this.userId),
                    n;
                this.prepareGenericRequest("GET", e).send()
            },
            sendUadRequest: function e() {
                var r = this;
                return new Promise(function(e, s) {
                    if (r.safeGetTfaConfig("cds:send-uad-req", !1) || r.safeGetRboxConfig("cds:send-uad")) {
                        var i = r.prepareGenericRequest("GET", t.atob(n));
                        i.onreadystatechange = function() {
                            if (4 === this.readyState)
                                if (200 === this.status) {
                                    var t = i.responseText;
                                    t || __trcWarn("cds: error in pips - status ".concat(this.status, ", return null")), e("NULL" !== t ? t : null)
                                } else __trcWarn("cds: error in pips - status ".concat(this.status, ", return null")), e(null)
                        }, i.timeout = 3e4, i.ontimeout = function() {
                            __trcWarn("cds: error in pips - timeout"), e(null)
                        }, i.send()
                    } else e(null)
                })
            },
            init: function e() {
                var n = this;
                t.TRC.cdsInitialized || (t.Promise ? (t.__trcWarn = t.__trcWarn || function t() {}, this.userId = this.getUserId(), this.userId && Promise.all([this.sendUadRequest()]).then(function(t) {
                    return n.sendFinalReq(t)
                }, function() {
                    return n.sendSimpleReq()
                }), t.TRC.cdsInitialized = !0) : t.TRC.cdsInitialized = !0)
            }
        }, t.TRC.cds.init()
    } catch (t) {
        __trcError("Error running cds", t)
    }
}(window);