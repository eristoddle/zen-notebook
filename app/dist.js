/*
 AngularJS v1.3.4
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
 */
(function (U, V, u) {
    'use strict';
    function z(b) {
        return function () {
            var a = arguments[0], c;
            c = "[" + (b ? b + ":" : "") + a + "] http://errors.angularjs.org/1.3.4/" + (b ? b + "/" : "") + a;
            for (a = 1; a < arguments.length; a++) {
                c = c + (1 == a ? "?" : "&") + "p" + (a - 1) + "=";
                var d = encodeURIComponent, e;
                e = arguments[a];
                e = "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e;
                c += d(e)
            }
            return Error(c)
        }
    }

    function Ra(b) {
        if (null == b || Sa(b))return!1;
        var a = b.length;
        return b.nodeType ===
            na && a ? !0 : I(b) || D(b) || 0 === a || "number" === typeof a && 0 < a && a - 1 in b
    }

    function r(b, a, c) {
        var d, e;
        if (b)if (F(b))for (d in b)"prototype" == d || "length" == d || "name" == d || b.hasOwnProperty && !b.hasOwnProperty(d) || a.call(c, b[d], d, b); else if (D(b) || Ra(b)) {
            var f = "object" !== typeof b;
            d = 0;
            for (e = b.length; d < e; d++)(f || d in b) && a.call(c, b[d], d, b)
        } else if (b.forEach && b.forEach !== r)b.forEach(a, c, b); else for (d in b)b.hasOwnProperty(d) && a.call(c, b[d], d, b);
        return b
    }

    function Bd(b, a, c) {
        for (var d = Object.keys(b).sort(), e = 0; e < d.length; e++)a.call(c,
            b[d[e]], d[e]);
        return d
    }

    function kc(b) {
        return function (a, c) {
            b(c, a)
        }
    }

    function Cd() {
        return++kb
    }

    function lc(b, a) {
        a ? b.$$hashKey = a : delete b.$$hashKey
    }

    function C(b) {
        for (var a = b.$$hashKey, c = 1, d = arguments.length; c < d; c++) {
            var e = arguments[c];
            if (e)for (var f = Object.keys(e), g = 0, h = f.length; g < h; g++) {
                var k = f[g];
                b[k] = e[k]
            }
        }
        lc(b, a);
        return b
    }

    function $(b) {
        return parseInt(b, 10)
    }

    function x() {
    }

    function oa(b) {
        return b
    }

    function ca(b) {
        return function () {
            return b
        }
    }

    function G(b) {
        return"undefined" === typeof b
    }

    function y(b) {
        return"undefined" !== typeof b
    }

    function K(b) {
        return null !== b && "object" === typeof b
    }

    function I(b) {
        return"string" === typeof b
    }

    function X(b) {
        return"number" === typeof b
    }

    function fa(b) {
        return"[object Date]" === Ja.call(b)
    }

    function F(b) {
        return"function" === typeof b
    }

    function lb(b) {
        return"[object RegExp]" === Ja.call(b)
    }

    function Sa(b) {
        return b && b.window === b
    }

    function Ta(b) {
        return b && b.$evalAsync && b.$watch
    }

    function Ua(b) {
        return"boolean" === typeof b
    }

    function mc(b) {
        return!(!b || !(b.nodeName || b.prop && b.attr && b.find))
    }

    function Dd(b) {
        var a = {};
        b = b.split(",");
        var c;
        for (c = 0; c < b.length; c++)a[b[c]] = !0;
        return a
    }

    function ta(b) {
        return R(b.nodeName || b[0] && b[0].nodeName)
    }

    function Va(b, a) {
        var c = b.indexOf(a);
        0 <= c && b.splice(c, 1);
        return a
    }

    function Ca(b, a, c, d) {
        if (Sa(b) || Ta(b))throw Wa("cpws");
        if (a) {
            if (b === a)throw Wa("cpi");
            c = c || [];
            d = d || [];
            if (K(b)) {
                var e = c.indexOf(b);
                if (-1 !== e)return d[e];
                c.push(b);
                d.push(a)
            }
            if (D(b))for (var f = a.length = 0; f < b.length; f++)e = Ca(b[f], null, c, d), K(b[f]) && (c.push(b[f]), d.push(e)), a.push(e); else {
                var g = a.$$hashKey;
                D(a) ? a.length =
                    0 : r(a, function (b, c) {
                    delete a[c]
                });
                for (f in b)b.hasOwnProperty(f) && (e = Ca(b[f], null, c, d), K(b[f]) && (c.push(b[f]), d.push(e)), a[f] = e);
                lc(a, g)
            }
        } else if (a = b)D(b) ? a = Ca(b, [], c, d) : fa(b) ? a = new Date(b.getTime()) : lb(b) ? (a = new RegExp(b.source, b.toString().match(/[^\/]*$/)[0]), a.lastIndex = b.lastIndex) : K(b) && (e = Object.create(Object.getPrototypeOf(b)), a = Ca(b, e, c, d));
        return a
    }

    function ua(b, a) {
        if (D(b)) {
            a = a || [];
            for (var c = 0, d = b.length; c < d; c++)a[c] = b[c]
        } else if (K(b))for (c in a = a || {}, b)if ("$" !== c.charAt(0) || "$" !== c.charAt(1))a[c] =
            b[c];
        return a || b
    }

    function pa(b, a) {
        if (b === a)return!0;
        if (null === b || null === a)return!1;
        if (b !== b && a !== a)return!0;
        var c = typeof b, d;
        if (c == typeof a && "object" == c)if (D(b)) {
            if (!D(a))return!1;
            if ((c = b.length) == a.length) {
                for (d = 0; d < c; d++)if (!pa(b[d], a[d]))return!1;
                return!0
            }
        } else {
            if (fa(b))return fa(a) ? pa(b.getTime(), a.getTime()) : !1;
            if (lb(b) && lb(a))return b.toString() == a.toString();
            if (Ta(b) || Ta(a) || Sa(b) || Sa(a) || D(a))return!1;
            c = {};
            for (d in b)if ("$" !== d.charAt(0) && !F(b[d])) {
                if (!pa(b[d], a[d]))return!1;
                c[d] = !0
            }
            for (d in a)if (!c.hasOwnProperty(d) &&
                "$" !== d.charAt(0) && a[d] !== u && !F(a[d]))return!1;
            return!0
        }
        return!1
    }

    function Xa(b, a, c) {
        return b.concat(Ya.call(a, c))
    }

    function nc(b, a) {
        var c = 2 < arguments.length ? Ya.call(arguments, 2) : [];
        return!F(a) || a instanceof RegExp ? a : c.length ? function () {
            return arguments.length ? a.apply(b, Xa(c, arguments, 0)) : a.apply(b, c)
        } : function () {
            return arguments.length ? a.apply(b, arguments) : a.call(b)
        }
    }

    function Ed(b, a) {
        var c = a;
        "string" === typeof b && "$" === b.charAt(0) && "$" === b.charAt(1) ? c = u : Sa(a) ? c = "$WINDOW" : a && V === a ? c = "$DOCUMENT" : Ta(a) &&
            (c = "$SCOPE");
        return c
    }

    function Za(b, a) {
        return"undefined" === typeof b ? u : JSON.stringify(b, Ed, a ? "  " : null)
    }

    function oc(b) {
        return I(b) ? JSON.parse(b) : b
    }

    function va(b) {
        b = A(b).clone();
        try {
            b.empty()
        } catch (a) {
        }
        var c = A("<div>").append(b).html();
        try {
            return b[0].nodeType === mb ? R(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
                return"<" + R(b)
            })
        } catch (d) {
            return R(c)
        }
    }

    function pc(b) {
        try {
            return decodeURIComponent(b)
        } catch (a) {
        }
    }

    function qc(b) {
        var a = {}, c, d;
        r((b || "").split("&"), function (b) {
            b && (c = b.replace(/\+/g,
                "%20").split("="), d = pc(c[0]), y(d) && (b = y(c[1]) ? pc(c[1]) : !0, Jb.call(a, d) ? D(a[d]) ? a[d].push(b) : a[d] = [a[d], b] : a[d] = b))
        });
        return a
    }

    function Kb(b) {
        var a = [];
        r(b, function (b, d) {
            D(b) ? r(b, function (b) {
                a.push(Da(d, !0) + (!0 === b ? "" : "=" + Da(b, !0)))
            }) : a.push(Da(d, !0) + (!0 === b ? "" : "=" + Da(b, !0)))
        });
        return a.length ? a.join("&") : ""
    }

    function nb(b) {
        return Da(b, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function Da(b, a) {
        return encodeURIComponent(b).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g,
            "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, a ? "%20" : "+")
    }

    function Fd(b, a) {
        var c, d, e = ob.length;
        b = A(b);
        for (d = 0; d < e; ++d)if (c = ob[d] + a, I(c = b.attr(c)))return c;
        return null
    }

    function Gd(b, a) {
        var c, d, e = {};
        r(ob, function (a) {
            a += "app";
            !c && b.hasAttribute && b.hasAttribute(a) && (c = b, d = b.getAttribute(a))
        });
        r(ob, function (a) {
            a += "app";
            var e;
            !c && (e = b.querySelector("[" + a.replace(":", "\\:") + "]")) && (c = e, d = e.getAttribute(a))
        });
        c && (e.strictDi = null !== Fd(c, "strict-di"), a(c, d ? [d] : [], e))
    }

    function rc(b, a, c) {
        K(c) ||
        (c = {});
        c = C({strictDi: !1}, c);
        var d = function () {
            b = A(b);
            if (b.injector()) {
                var d = b[0] === V ? "document" : va(b);
                throw Wa("btstrpd", d.replace(/</, "&lt;").replace(/>/, "&gt;"));
            }
            a = a || [];
            a.unshift(["$provide", function (a) {
                a.value("$rootElement", b)
            }]);
            c.debugInfoEnabled && a.push(["$compileProvider", function (a) {
                a.debugInfoEnabled(!0)
            }]);
            a.unshift("ng");
            d = Lb(a, c.strictDi);
            d.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (a, b, c, d) {
                a.$apply(function () {
                    b.data("$injector", d);
                    c(b)(a)
                })
            }]);
            return d
        }, e =
            /^NG_ENABLE_DEBUG_INFO!/, f = /^NG_DEFER_BOOTSTRAP!/;
        U && e.test(U.name) && (c.debugInfoEnabled = !0, U.name = U.name.replace(e, ""));
        if (U && !f.test(U.name))return d();
        U.name = U.name.replace(f, "");
        ha.resumeBootstrap = function (b) {
            r(b, function (b) {
                a.push(b)
            });
            d()
        }
    }

    function Hd() {
        U.name = "NG_ENABLE_DEBUG_INFO!" + U.name;
        U.location.reload()
    }

    function Id(b) {
        return ha.element(b).injector().get("$$testability")
    }

    function Mb(b, a) {
        a = a || "_";
        return b.replace(Jd, function (b, d) {
            return(d ? a : "") + b.toLowerCase()
        })
    }

    function Kd() {
        var b;
        sc ||
        ((qa = U.jQuery) && qa.fn.on ? (A = qa, C(qa.fn, {scope: Ka.scope, isolateScope: Ka.isolateScope, controller: Ka.controller, injector: Ka.injector, inheritedData: Ka.inheritedData}), b = qa.cleanData, qa.cleanData = function (a) {
            var c;
            if (Nb)Nb = !1; else for (var d = 0, e; null != (e = a[d]); d++)(c = qa._data(e, "events")) && c.$destroy && qa(e).triggerHandler("$destroy");
            b(a)
        }) : A = S, ha.element = A, sc = !0)
    }

    function Ob(b, a, c) {
        if (!b)throw Wa("areq", a || "?", c || "required");
        return b
    }

    function pb(b, a, c) {
        c && D(b) && (b = b[b.length - 1]);
        Ob(F(b), a, "not a function, got " +
            (b && "object" === typeof b ? b.constructor.name || "Object" : typeof b));
        return b
    }

    function La(b, a) {
        if ("hasOwnProperty" === b)throw Wa("badname", a);
    }

    function tc(b, a, c) {
        if (!a)return b;
        a = a.split(".");
        for (var d, e = b, f = a.length, g = 0; g < f; g++)d = a[g], b && (b = (e = b)[d]);
        return!c && F(b) ? nc(e, b) : b
    }

    function qb(b) {
        var a = b[0];
        b = b[b.length - 1];
        var c = [a];
        do {
            a = a.nextSibling;
            if (!a)break;
            c.push(a)
        } while (a !== b);
        return A(c)
    }

    function ia() {
        return Object.create(null)
    }

    function Ld(b) {
        function a(a, b, c) {
            return a[b] || (a[b] = c())
        }

        var c = z("$injector"),
            d = z("ng");
        b = a(b, "angular", Object);
        b.$$minErr = b.$$minErr || z;
        return a(b, "module", function () {
            var b = {};
            return function (f, g, h) {
                if ("hasOwnProperty" === f)throw d("badname", "module");
                g && b.hasOwnProperty(f) && (b[f] = null);
                return a(b, f, function () {
                    function a(c, d, e, f) {
                        f || (f = b);
                        return function () {
                            f[e || "push"]([c, d, arguments]);
                            return t
                        }
                    }

                    if (!g)throw c("nomod", f);
                    var b = [], d = [], e = [], s = a("$injector", "invoke", "push", d), t = {_invokeQueue: b, _configBlocks: d, _runBlocks: e, requires: g, name: f, provider: a("$provide", "provider"), factory: a("$provide",
                        "factory"), service: a("$provide", "service"), value: a("$provide", "value"), constant: a("$provide", "constant", "unshift"), animation: a("$animateProvider", "register"), filter: a("$filterProvider", "register"), controller: a("$controllerProvider", "register"), directive: a("$compileProvider", "directive"), config: s, run: function (a) {
                        e.push(a);
                        return this
                    }};
                    h && s(h);
                    return t
                })
            }
        })
    }

    function Md(b) {
        C(b, {bootstrap: rc, copy: Ca, extend: C, equals: pa, element: A, forEach: r, injector: Lb, noop: x, bind: nc, toJson: Za, fromJson: oc, identity: oa, isUndefined: G,
            isDefined: y, isString: I, isFunction: F, isObject: K, isNumber: X, isElement: mc, isArray: D, version: Nd, isDate: fa, lowercase: R, uppercase: rb, callbacks: {counter: 0}, getTestability: Id, $$minErr: z, $$csp: $a, reloadWithDebugInfo: Hd});
        ab = Ld(U);
        try {
            ab("ngLocale")
        } catch (a) {
            ab("ngLocale", []).provider("$locale", Od)
        }
        ab("ng", ["ngLocale"], ["$provide", function (a) {
            a.provider({$$sanitizeUri: Pd});
            a.provider("$compile", uc).directive({a: Qd, input: vc, textarea: vc, form: Rd, script: Sd, select: Td, style: Ud, option: Vd, ngBind: Wd, ngBindHtml: Xd, ngBindTemplate: Yd,
                ngClass: Zd, ngClassEven: $d, ngClassOdd: ae, ngCloak: be, ngController: ce, ngForm: de, ngHide: ee, ngIf: fe, ngInclude: ge, ngInit: he, ngNonBindable: ie, ngPluralize: je, ngRepeat: ke, ngShow: le, ngStyle: me, ngSwitch: ne, ngSwitchWhen: oe, ngSwitchDefault: pe, ngOptions: qe, ngTransclude: re, ngModel: se, ngList: te, ngChange: ue, pattern: wc, ngPattern: wc, required: xc, ngRequired: xc, minlength: yc, ngMinlength: yc, maxlength: zc, ngMaxlength: zc, ngValue: ve, ngModelOptions: we}).directive({ngInclude: xe}).directive(sb).directive(Ac);
            a.provider({$anchorScroll: ye,
                $animate: ze, $browser: Ae, $cacheFactory: Be, $controller: Ce, $document: De, $exceptionHandler: Ee, $filter: Bc, $interpolate: Fe, $interval: Ge, $http: He, $httpBackend: Ie, $location: Je, $log: Ke, $parse: Le, $rootScope: Me, $q: Ne, $$q: Oe, $sce: Pe, $sceDelegate: Qe, $sniffer: Re, $templateCache: Se, $templateRequest: Te, $$testability: Ue, $timeout: Ve, $window: We, $$rAF: Xe, $$asyncCallback: Ye})
        }])
    }

    function bb(b) {
        return b.replace(Ze, function (a, b, d, e) {
            return e ? d.toUpperCase() : d
        }).replace($e, "Moz$1")
    }

    function Cc(b) {
        b = b.nodeType;
        return b ===
            na || !b || 9 === b
    }

    function Dc(b, a) {
        var c, d, e = a.createDocumentFragment(), f = [];
        if (Pb.test(b)) {
            c = c || e.appendChild(a.createElement("div"));
            d = (af.exec(b) || ["", ""])[1].toLowerCase();
            d = ja[d] || ja._default;
            c.innerHTML = d[1] + b.replace(bf, "<$1></$2>") + d[2];
            for (d = d[0]; d--;)c = c.lastChild;
            f = Xa(f, c.childNodes);
            c = e.firstChild;
            c.textContent = ""
        } else f.push(a.createTextNode(b));
        e.textContent = "";
        e.innerHTML = "";
        r(f, function (a) {
            e.appendChild(a)
        });
        return e
    }

    function S(b) {
        if (b instanceof S)return b;
        var a;
        I(b) && (b = P(b), a = !0);
        if (!(this instanceof
            S)) {
            if (a && "<" != b.charAt(0))throw Qb("nosel");
            return new S(b)
        }
        if (a) {
            a = V;
            var c;
            b = (c = cf.exec(b)) ? [a.createElement(c[1])] : (c = Dc(b, a)) ? c.childNodes : []
        }
        Ec(this, b)
    }

    function Rb(b) {
        return b.cloneNode(!0)
    }

    function tb(b, a) {
        a || ub(b);
        if (b.querySelectorAll)for (var c = b.querySelectorAll("*"), d = 0, e = c.length; d < e; d++)ub(c[d])
    }

    function Fc(b, a, c, d) {
        if (y(d))throw Qb("offargs");
        var e = (d = vb(b)) && d.events, f = d && d.handle;
        if (f)if (a)r(a.split(" "), function (a) {
            if (y(c)) {
                var d = e[a];
                Va(d || [], c);
                if (d && 0 < d.length)return
            }
            b.removeEventListener(a,
                f, !1);
            delete e[a]
        }); else for (a in e)"$destroy" !== a && b.removeEventListener(a, f, !1), delete e[a]
    }

    function ub(b, a) {
        var c = b.ng339, d = c && wb[c];
        d && (a ? delete d.data[a] : (d.handle && (d.events.$destroy && d.handle({}, "$destroy"), Fc(b)), delete wb[c], b.ng339 = u))
    }

    function vb(b, a) {
        var c = b.ng339, c = c && wb[c];
        a && !c && (b.ng339 = c = ++df, c = wb[c] = {events: {}, data: {}, handle: u});
        return c
    }

    function Sb(b, a, c) {
        if (Cc(b)) {
            var d = y(c), e = !d && a && !K(a), f = !a;
            b = (b = vb(b, !e)) && b.data;
            if (d)b[a] = c; else {
                if (f)return b;
                if (e)return b && b[a];
                C(b, a)
            }
        }
    }

    function Tb(b, a) {
        return b.getAttribute ? -1 < (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + a + " ") : !1
    }

    function Ub(b, a) {
        a && b.setAttribute && r(a.split(" "), function (a) {
            b.setAttribute("class", P((" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + P(a) + " ", " ")))
        })
    }

    function Vb(b, a) {
        if (a && b.setAttribute) {
            var c = (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            r(a.split(" "), function (a) {
                a = P(a);
                -1 === c.indexOf(" " + a + " ") && (c += a + " ")
            });
            b.setAttribute("class",
                P(c))
        }
    }

    function Ec(b, a) {
        if (a)if (a.nodeType)b[b.length++] = a; else {
            var c = a.length;
            if ("number" === typeof c && a.window !== a) {
                if (c)for (var d = 0; d < c; d++)b[b.length++] = a[d]
            } else b[b.length++] = a
        }
    }

    function Gc(b, a) {
        return xb(b, "$" + (a || "ngController") + "Controller")
    }

    function xb(b, a, c) {
        9 == b.nodeType && (b = b.documentElement);
        for (a = D(a) ? a : [a]; b;) {
            for (var d = 0, e = a.length; d < e; d++)if ((c = A.data(b, a[d])) !== u)return c;
            b = b.parentNode || 11 === b.nodeType && b.host
        }
    }

    function Hc(b) {
        for (tb(b, !0); b.firstChild;)b.removeChild(b.firstChild)
    }

    function Ic(b, a) {
        a || tb(b);
        var c = b.parentNode;
        c && c.removeChild(b)
    }

    function ef(b, a) {
        a = a || U;
        if ("complete" === a.document.readyState)a.setTimeout(b); else A(a).on("load", b)
    }

    function Jc(b, a) {
        var c = yb[a.toLowerCase()];
        return c && Kc[ta(b)] && c
    }

    function ff(b, a) {
        var c = b.nodeName;
        return("INPUT" === c || "TEXTAREA" === c) && Lc[a]
    }

    function gf(b, a) {
        var c = function (c, e) {
            c.isDefaultPrevented = function () {
                return c.defaultPrevented
            };
            var f = a[e || c.type], g = f ? f.length : 0;
            if (g) {
                if (G(c.immediatePropagationStopped)) {
                    var h = c.stopImmediatePropagation;
                    c.stopImmediatePropagation = function () {
                        c.immediatePropagationStopped = !0;
                        c.stopPropagation && c.stopPropagation();
                        h && h.call(c)
                    }
                }
                c.isImmediatePropagationStopped = function () {
                    return!0 === c.immediatePropagationStopped
                };
                1 < g && (f = ua(f));
                for (var k = 0; k < g; k++)c.isImmediatePropagationStopped() || f[k].call(b, c)
            }
        };
        c.elem = b;
        return c
    }

    function Ma(b, a) {
        var c = b && b.$$hashKey;
        if (c)return"function" === typeof c && (c = b.$$hashKey()), c;
        c = typeof b;
        return c = "function" == c || "object" == c && null !== b ? b.$$hashKey = c + ":" + (a || Cd)() : c + ":" + b
    }

    function cb(b, a) {
        if (a) {
            var c = 0;
            this.nextUid = function () {
                return++c
            }
        }
        r(b, this.put, this)
    }

    function hf(b) {
        return(b = b.toString().replace(Mc, "").match(Nc)) ? "function(" + (b[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }

    function Wb(b, a, c) {
        var d;
        if ("function" === typeof b) {
            if (!(d = b.$inject)) {
                d = [];
                if (b.length) {
                    if (a)throw I(c) && c || (c = b.name || hf(b)), Ea("strictdi", c);
                    a = b.toString().replace(Mc, "");
                    a = a.match(Nc);
                    r(a[1].split(jf), function (a) {
                        a.replace(kf, function (a, b, c) {
                            d.push(c)
                        })
                    })
                }
                b.$inject = d
            }
        } else D(b) ? (a = b.length - 1, pb(b[a], "fn"),
            d = b.slice(0, a)) : pb(b, "fn", !0);
        return d
    }

    function Lb(b, a) {
        function c(a) {
            return function (b, c) {
                if (K(b))r(b, kc(a)); else return a(b, c)
            }
        }

        function d(a, b) {
            La(a, "service");
            if (F(b) || D(b))b = s.instantiate(b);
            if (!b.$get)throw Ea("pget", a);
            return p[a + "Provider"] = b
        }

        function e(a, b) {
            return function () {
                var c = q.invoke(b, this, u, a);
                if (G(c))throw Ea("undef", a);
                return c
            }
        }

        function f(a, b, c) {
            return d(a, {$get: !1 !== c ? e(a, b) : b})
        }

        function g(a) {
            var b = [], c;
            r(a, function (a) {
                function d(a) {
                    var b, c;
                    b = 0;
                    for (c = a.length; b < c; b++) {
                        var e = a[b],
                            f = s.get(e[0]);
                        f[e[1]].apply(f, e[2])
                    }
                }

                if (!m.get(a)) {
                    m.put(a, !0);
                    try {
                        I(a) ? (c = ab(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : F(a) ? b.push(s.invoke(a)) : D(a) ? b.push(s.invoke(a)) : pb(a, "module")
                    } catch (e) {
                        throw D(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Ea("modulerr", a, e.stack || e.message || e);
                    }
                }
            });
            return b
        }

        function h(b, c) {
            function d(a) {
                if (b.hasOwnProperty(a)) {
                    if (b[a] === k)throw Ea("cdep", a + " <- " + l.join(" <- "));
                    return b[a]
                }
                try {
                    return l.unshift(a), b[a] = k, b[a] = c(a)
                } catch (e) {
                    throw b[a] === k && delete b[a], e;
                } finally {
                    l.shift()
                }
            }

            function e(b, c, f, g) {
                "string" === typeof f && (g = f, f = null);
                var k = [];
                g = Wb(b, a, g);
                var h, l, q;
                l = 0;
                for (h = g.length; l < h; l++) {
                    q = g[l];
                    if ("string" !== typeof q)throw Ea("itkn", q);
                    k.push(f && f.hasOwnProperty(q) ? f[q] : d(q))
                }
                D(b) && (b = b[h]);
                return b.apply(c, k)
            }

            return{invoke: e, instantiate: function (a, b, c) {
                var d = Object.create((D(a) ? a[a.length - 1] : a).prototype);
                a = e(a, d, b, c);
                return K(a) || F(a) ? a : d
            }, get: d, annotate: Wb,
                has: function (a) {
                    return p.hasOwnProperty(a + "Provider") || b.hasOwnProperty(a)
                }}
        }

        a = !0 === a;
        var k = {}, l = [], m = new cb([], !0), p = {$provide: {provider: c(d), factory: c(f), service: c(function (a, b) {
            return f(a, ["$injector", function (a) {
                return a.instantiate(b)
            }])
        }), value: c(function (a, b) {
            return f(a, ca(b), !1)
        }), constant: c(function (a, b) {
            La(a, "constant");
            p[a] = b;
            t[a] = b
        }), decorator: function (a, b) {
            var c = s.get(a + "Provider"), d = c.$get;
            c.$get = function () {
                var a = q.invoke(d, c);
                return q.invoke(b, null, {$delegate: a})
            }
        }}}, s = p.$injector =
            h(p, function () {
                throw Ea("unpr", l.join(" <- "));
            }), t = {}, q = t.$injector = h(t, function (a) {
            var b = s.get(a + "Provider");
            return q.invoke(b.$get, b, u, a)
        });
        r(g(b), function (a) {
            q.invoke(a || x)
        });
        return q
    }

    function ye() {
        var b = !0;
        this.disableAutoScrolling = function () {
            b = !1
        };
        this.$get = ["$window", "$location", "$rootScope", function (a, c, d) {
            function e(a) {
                var b = null;
                Array.prototype.some.call(a, function (a) {
                    if ("a" === ta(a))return b = a, !0
                });
                return b
            }

            function f(b) {
                if (b) {
                    b.scrollIntoView();
                    var c;
                    c = g.yOffset;
                    F(c) ? c = c() : mc(c) ? (c = c[0],
                        c = "fixed" !== a.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : X(c) || (c = 0);
                    c && (b = b.getBoundingClientRect().top, a.scrollBy(0, b - c))
                } else a.scrollTo(0, 0)
            }

            function g() {
                var a = c.hash(), b;
                a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ? f(b) : "top" === a && f(null) : f(null)
            }

            var h = a.document;
            b && d.$watch(function () {
                return c.hash()
            }, function (a, b) {
                a === b && "" === a || ef(function () {
                    d.$evalAsync(g)
                })
            });
            return g
        }]
    }

    function Ye() {
        this.$get = ["$$rAF", "$timeout", function (b, a) {
            return b.supported ? function (a) {
                return b(a)
            } :
                function (b) {
                    return a(b, 0, !1)
                }
        }]
    }

    function lf(b, a, c, d) {
        function e(a) {
            try {
                a.apply(null, Ya.call(arguments, 1))
            } finally {
                if (v--, 0 === v)for (; w.length;)try {
                    w.pop()()
                } catch (b) {
                    c.error(b)
                }
            }
        }

        function f(a, b) {
            (function ya() {
                r(O, function (a) {
                    a()
                });
                E = b(ya, a)
            })()
        }

        function g() {
            h();
            k()
        }

        function h() {
            H = b.history.state;
            H = G(H) ? null : H;
            pa(H, Q) && (H = Q);
            Q = H
        }

        function k() {
            if (B !== m.url() || M !== H)B = m.url(), M = H, r(W, function (a) {
                a(m.url(), H)
            })
        }

        function l(a) {
            try {
                return decodeURIComponent(a)
            } catch (b) {
                return a
            }
        }

        var m = this, p = a[0], s = b.location,
            t = b.history, q = b.setTimeout, N = b.clearTimeout, n = {};
        m.isMock = !1;
        var v = 0, w = [];
        m.$$completeOutstandingRequest = e;
        m.$$incOutstandingRequestCount = function () {
            v++
        };
        m.notifyWhenNoOutstandingRequests = function (a) {
            r(O, function (a) {
                a()
            });
            0 === v ? a() : w.push(a)
        };
        var O = [], E;
        m.addPollFn = function (a) {
            G(E) && f(100, q);
            O.push(a);
            return a
        };
        var H, M, B = s.href, ea = a.find("base"), L = null;
        h();
        M = H;
        m.url = function (a, c, e) {
            G(e) && (e = null);
            s !== b.location && (s = b.location);
            t !== b.history && (t = b.history);
            if (a) {
                var f = M === e;
                if (B === a && (!d.history ||
                    f))return m;
                var g = B && Fa(B) === Fa(a);
                B = a;
                M = e;
                !d.history || g && f ? (g || (L = a), c ? s.replace(a) : s.href = a) : (t[c ? "replaceState" : "pushState"](e, "", a), h(), M = H);
                return m
            }
            return L || s.href.replace(/%27/g, "'")
        };
        m.state = function () {
            return H
        };
        var W = [], ba = !1, Q = null;
        m.onUrlChange = function (a) {
            if (!ba) {
                if (d.history)A(b).on("popstate", g);
                A(b).on("hashchange", g);
                ba = !0
            }
            W.push(a);
            return a
        };
        m.$$checkUrlChange = k;
        m.baseHref = function () {
            var a = ea.attr("href");
            return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        };
        var aa = {}, y = "", da = m.baseHref();
        m.cookies = function (a, b) {
            var d, e, f, g;
            if (a)b === u ? p.cookie = encodeURIComponent(a) + "=;path=" + da + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : I(b) && (d = (p.cookie = encodeURIComponent(a) + "=" + encodeURIComponent(b) + ";path=" + da).length + 1, 4096 < d && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + d + " > 4096 bytes)!")); else {
                if (p.cookie !== y)for (y = p.cookie, d = y.split("; "), aa = {}, f = 0; f < d.length; f++)e = d[f], g = e.indexOf("="), 0 < g && (a = l(e.substring(0, g)), aa[a] === u && (aa[a] = l(e.substring(g + 1))));
                return aa
            }
        };
        m.defer = function (a, b) {
            var c;
            v++;
            c = q(function () {
                delete n[c];
                e(a)
            }, b || 0);
            n[c] = !0;
            return c
        };
        m.defer.cancel = function (a) {
            return n[a] ? (delete n[a], N(a), e(x), !0) : !1
        }
    }

    function Ae() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function (b, a, c, d) {
            return new lf(b, d, a, c)
        }]
    }

    function Be() {
        this.$get = function () {
            function b(b, d) {
                function e(a) {
                    a != p && (s ? s == a && (s = a.n) : s = a, f(a.n, a.p), f(a, p), p = a, p.n = null)
                }

                function f(a, b) {
                    a != b && (a && (a.p = b), b && (b.n = a))
                }

                if (b in a)throw z("$cacheFactory")("iid", b);
                var g = 0,
                    h = C({}, d, {id: b}), k = {}, l = d && d.capacity || Number.MAX_VALUE, m = {}, p = null, s = null;
                return a[b] = {put: function (a, b) {
                    if (l < Number.MAX_VALUE) {
                        var c = m[a] || (m[a] = {key: a});
                        e(c)
                    }
                    if (!G(b))return a in k || g++, k[a] = b, g > l && this.remove(s.key), b
                }, get: function (a) {
                    if (l < Number.MAX_VALUE) {
                        var b = m[a];
                        if (!b)return;
                        e(b)
                    }
                    return k[a]
                }, remove: function (a) {
                    if (l < Number.MAX_VALUE) {
                        var b = m[a];
                        if (!b)return;
                        b == p && (p = b.p);
                        b == s && (s = b.n);
                        f(b.n, b.p);
                        delete m[a]
                    }
                    delete k[a];
                    g--
                }, removeAll: function () {
                    k = {};
                    g = 0;
                    m = {};
                    p = s = null
                }, destroy: function () {
                    m =
                        h = k = null;
                    delete a[b]
                }, info: function () {
                    return C({}, h, {size: g})
                }}
            }

            var a = {};
            b.info = function () {
                var b = {};
                r(a, function (a, e) {
                    b[e] = a.info()
                });
                return b
            };
            b.get = function (b) {
                return a[b]
            };
            return b
        }
    }

    function Se() {
        this.$get = ["$cacheFactory", function (b) {
            return b("templates")
        }]
    }

    function uc(b, a) {
        function c(a, b) {
            var c = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/, d = {};
            r(a, function (a, e) {
                var f = a.match(c);
                if (!f)throw ka("iscp", b, e, a);
                d[e] = {mode: f[1][0], collection: "*" === f[2], optional: "?" === f[3], attrName: f[4] || e}
            });
            return d
        }

        var d =
        {}, e = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/, f = /(([\w\-]+)(?:\:([^;]+))?;?)/, g = Dd("ngSrc,ngSrcset,src,srcset"), h = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, k = /^(on[a-z]+|formaction)$/;
        this.directive = function p(a, e) {
            La(a, "directive");
            I(a) ? (Ob(e, "directiveFactory"), d.hasOwnProperty(a) || (d[a] = [], b.factory(a + "Directive", ["$injector", "$exceptionHandler", function (b, e) {
                var f = [];
                r(d[a], function (d, g) {
                    try {
                        var h = b.invoke(d);
                        F(h) ? h = {compile: ca(h)} : !h.compile && h.link && (h.compile = ca(h.link));
                        h.priority = h.priority || 0;
                        h.index =
                            g;
                        h.name = h.name || a;
                        h.require = h.require || h.controller && h.name;
                        h.restrict = h.restrict || "EA";
                        K(h.scope) && (h.$$isolateBindings = c(h.scope, h.name));
                        f.push(h)
                    } catch (k) {
                        e(k)
                    }
                });
                return f
            }])), d[a].push(e)) : r(a, kc(p));
            return this
        };
        this.aHrefSanitizationWhitelist = function (b) {
            return y(b) ? (a.aHrefSanitizationWhitelist(b), this) : a.aHrefSanitizationWhitelist()
        };
        this.imgSrcSanitizationWhitelist = function (b) {
            return y(b) ? (a.imgSrcSanitizationWhitelist(b), this) : a.imgSrcSanitizationWhitelist()
        };
        var l = !0;
        this.debugInfoEnabled =
            function (a) {
                return y(a) ? (l = a, this) : l
            };
        this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function (a, b, c, q, N, n, v, w, O, E, H) {
            function M(a, b) {
                try {
                    a.addClass(b)
                } catch (c) {
                }
            }

            function B(a, b, c, d, e) {
                a instanceof A || (a = A(a));
                r(a, function (b, c) {
                    b.nodeType == mb && b.nodeValue.match(/\S+/) && (a[c] = A(b).wrap("<span></span>").parent()[0])
                });
                var f = ea(a, b, a, c, d, e);
                B.$$addScopeClass(a);
                var g = null;
                return function (b, c, d) {
                    Ob(b, "scope");
                    d = d || {};
                    var e = d.parentBoundTranscludeFn, h = d.transcludeControllers;
                    d = d.futureParentElement;
                    e && e.$$boundTransclude && (e = e.$$boundTransclude);
                    g || (g = (d = d && d[0]) ? "foreignobject" !== ta(d) && d.toString().match(/SVG/) ? "svg" : "html" : "html");
                    d = "html" !== g ? A(U(g, A("<div>").append(a).html())) : c ? Ka.clone.call(a) : a;
                    if (h)for (var k in h)d.data("$" + k + "Controller", h[k].instance);
                    B.$$addScopeInfo(d, b);
                    c && c(d, b);
                    f && f(b, d, d, e);
                    return d
                }
            }

            function ea(a, b, c, d, e, f) {
                function g(a, c, d, e) {
                    var f, k, l, q, s, n, w;
                    if (p)for (w =
                                   Array(c.length), q = 0; q < h.length; q += 3)f = h[q], w[f] = c[f]; else w = c;
                    q = 0;
                    for (s = h.length; q < s;)k = w[h[q++]], c = h[q++], f = h[q++], c ? (c.scope ? (l = a.$new(), B.$$addScopeInfo(A(k), l)) : l = a, n = c.transcludeOnThisElement ? L(a, c.transclude, e, c.elementTranscludeOnThisElement) : !c.templateOnThisElement && e ? e : !e && b ? L(a, b) : null, c(f, l, k, d, n)) : f && f(a, k.childNodes, u, e)
                }

                for (var h = [], k, l, q, s, p, n = 0; n < a.length; n++) {
                    k = new X;
                    l = W(a[n], [], k, 0 === n ? d : u, e);
                    (f = l.length ? aa(l, a[n], k, b, c, null, [], [], f) : null) && f.scope && B.$$addScopeClass(k.$$element);
                    k = f && f.terminal || !(q = a[n].childNodes) || !q.length ? null : ea(q, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);
                    if (f || k)h.push(n, f, k), s = !0, p = p || f;
                    f = null
                }
                return s ? g : null
            }

            function L(a, b, c, d) {
                return function (d, e, f, g, h) {
                    d || (d = a.$new(!1, h), d.$$transcluded = !0);
                    return b(d, e, {parentBoundTranscludeFn: c, transcludeControllers: f, futureParentElement: g})
                }
            }

            function W(b, c, g, h, k) {
                var l = g.$attr, q;
                switch (b.nodeType) {
                    case na:
                        da(c, wa(ta(b)), "E", h, k);
                        for (var s, n, w, N = b.attributes, t = 0, O = N && N.length; t <
                            O; t++) {
                            var H = !1, v = !1;
                            s = N[t];
                            q = s.name;
                            s = P(s.value);
                            n = wa(q);
                            if (w = za.test(n))q = Mb(n.substr(6), "-");
                            var M = n.replace(/(Start|End)$/, ""), E;
                            a:{
                                var B = M;
                                if (d.hasOwnProperty(B)) {
                                    E = void 0;
                                    for (var B = a.get(B + "Directive"), W = 0, r = B.length; W < r; W++)if (E = B[W], E.multiElement) {
                                        E = !0;
                                        break a
                                    }
                                }
                                E = !1
                            }
                            E && n === M + "Start" && (H = q, v = q.substr(0, q.length - 5) + "end", q = q.substr(0, q.length - 6));
                            n = wa(q.toLowerCase());
                            l[n] = q;
                            if (w || !g.hasOwnProperty(n))g[n] = s, Jc(b, n) && (g[n] = !0);
                            S(b, c, s, n, w);
                            da(c, n, "A", h, k, H, v)
                        }
                        b = b.className;
                        if (I(b) && "" !== b)for (; q =
                                                        f.exec(b);)n = wa(q[2]), da(c, n, "C", h, k) && (g[n] = P(q[3])), b = b.substr(q.index + q[0].length);
                        break;
                    case mb:
                        T(c, b.nodeValue);
                        break;
                    case 8:
                        try {
                            if (q = e.exec(b.nodeValue))n = wa(q[1]), da(c, n, "M", h, k) && (g[n] = P(q[2]))
                        } catch (Q) {
                        }
                }
                c.sort(z);
                return c
            }

            function ba(a, b, c) {
                var d = [], e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) {
                    do {
                        if (!a)throw ka("uterdir", b, c);
                        a.nodeType == na && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
                        d.push(a);
                        a = a.nextSibling
                    } while (0 < e)
                } else d.push(a);
                return A(d)
            }

            function Q(a, b, c) {
                return function (d, e, f, g, h) {
                    e = ba(e[0], b, c);
                    return a(d, e, f, g, h)
                }
            }

            function aa(a, d, e, f, g, k, l, q, p) {
                function w(a, b, c, d) {
                    if (a) {
                        c && (a = Q(a, c, d));
                        a.require = J.require;
                        a.directiveName = ga;
                        if (L === J || J.$$isolateScope)a = Y(a, {isolateScope: !0});
                        l.push(a)
                    }
                    if (b) {
                        c && (b = Q(b, c, d));
                        b.require = J.require;
                        b.directiveName = ga;
                        if (L === J || J.$$isolateScope)b = Y(b, {isolateScope: !0});
                        q.push(b)
                    }
                }

                function O(a, b, c, d) {
                    var e, f = "data", g = !1, k = c, l;
                    if (I(b)) {
                        l = b.match(h);
                        b = b.substring(l[0].length);
                        l[3] && (l[1] ? l[3] = null : l[1] = l[3]);
                        "^" === l[1] ? f = "inheritedData" : "^^" ===
                            l[1] && (f = "inheritedData", k = c.parent());
                        "?" === l[2] && (g = !0);
                        e = null;
                        d && "data" === f && (e = d[b]) && (e = e.instance);
                        e = e || k[f]("$" + b + "Controller");
                        if (!e && !g)throw ka("ctreq", b, a);
                        return e || null
                    }
                    D(b) && (e = [], r(b, function (b) {
                        e.push(O(a, b, c, d))
                    }));
                    return e
                }

                function H(a, c, f, g, h) {
                    function k(a, b, c) {
                        var d;
                        Ta(a) || (c = b, b = a, a = u);
                        C && (d = M);
                        c || (c = C ? W.parent() : W);
                        return h(a, b, d, c, Xb)
                    }

                    var p, w, t, v, M, db, W, Q;
                    d === f ? (Q = e, W = e.$$element) : (W = A(f), Q = new X(W, e));
                    L && (v = c.$new(!0));
                    h && (db = k, db.$$boundTransclude = h);
                    E && (ea = {}, M = {}, r(E, function (a) {
                        var b =
                        {$scope: a === L || a.$$isolateScope ? v : c, $element: W, $attrs: Q, $transclude: db};
                        t = a.controller;
                        "@" == t && (t = Q[a.name]);
                        b = n(t, b, !0, a.controllerAs);
                        M[a.name] = b;
                        C || W.data("$" + a.name + "Controller", b.instance);
                        ea[a.name] = b
                    }));
                    if (L) {
                        B.$$addScopeInfo(W, v, !0, !(aa && (aa === L || aa === L.$$originalDirective)));
                        B.$$addScopeClass(W, !0);
                        g = ea && ea[L.name];
                        var ba = v;
                        g && g.identifier && !0 === L.bindToController && (ba = g.instance);
                        r(v.$$isolateBindings = L.$$isolateBindings, function (a, d) {
                            var e = a.attrName, f = a.optional, g, h, k, l;
                            switch (a.mode) {
                                case "@":
                                    Q.$observe(e,
                                        function (a) {
                                            ba[d] = a
                                        });
                                    Q.$$observers[e].$$scope = c;
                                    Q[e] && (ba[d] = b(Q[e])(c));
                                    break;
                                case "=":
                                    if (f && !Q[e])break;
                                    h = N(Q[e]);
                                    l = h.literal ? pa : function (a, b) {
                                        return a === b || a !== a && b !== b
                                    };
                                    k = h.assign || function () {
                                        g = ba[d] = h(c);
                                        throw ka("nonassign", Q[e], L.name);
                                    };
                                    g = ba[d] = h(c);
                                    f = function (a) {
                                        l(a, ba[d]) || (l(a, g) ? k(c, a = ba[d]) : ba[d] = a);
                                        return g = a
                                    };
                                    f.$stateful = !0;
                                    f = a.collection ? c.$watchCollection(Q[e], f) : c.$watch(N(Q[e], f), null, h.literal);
                                    v.$on("$destroy", f);
                                    break;
                                case "&":
                                    h = N(Q[e]), ba[d] = function (a) {
                                        return h(c, a)
                                    }
                            }
                        })
                    }
                    ea &&
                    (r(ea, function (a) {
                        a()
                    }), ea = null);
                    g = 0;
                    for (p = l.length; g < p; g++)w = l[g], Z(w, w.isolateScope ? v : c, W, Q, w.require && O(w.directiveName, w.require, W, M), db);
                    var Xb = c;
                    L && (L.template || null === L.templateUrl) && (Xb = v);
                    a && a(Xb, f.childNodes, u, h);
                    for (g = q.length - 1; 0 <= g; g--)w = q[g], Z(w, w.isolateScope ? v : c, W, Q, w.require && O(w.directiveName, w.require, W, M), db)
                }

                p = p || {};
                for (var v = -Number.MAX_VALUE, M, E = p.controllerDirectives, ea, L = p.newIsolateScopeDirective, aa = p.templateDirective, da = p.nonTlbTranscludeDirective, x = !1, Na = !1, C = p.hasElementTranscludeDirective,
                         T = e.$$element = A(d), J, ga, z, Ga = f, R, S = 0, za = a.length; S < za; S++) {
                    J = a[S];
                    var zb = J.$$start, $ = J.$$end;
                    zb && (T = ba(d, zb, $));
                    z = u;
                    if (v > J.priority)break;
                    if (z = J.scope)J.templateUrl || (K(z) ? (ya("new/isolated scope", L || M, J, T), L = J) : ya("new/isolated scope", L, J, T)), M = M || J;
                    ga = J.name;
                    !J.templateUrl && J.controller && (z = J.controller, E = E || {}, ya("'" + ga + "' controller", E[ga], J, T), E[ga] = J);
                    if (z = J.transclude)x = !0, J.$$tlb || (ya("transclusion", da, J, T), da = J), "element" == z ? (C = !0, v = J.priority, z = T, T = e.$$element = A(V.createComment(" " + ga + ": " +
                        e[ga] + " ")), d = T[0], Ab(g, Ya.call(z, 0), d), Ga = B(z, f, v, k && k.name, {nonTlbTranscludeDirective: da})) : (z = A(Rb(d)).contents(), T.empty(), Ga = B(z, f));
                    if (J.template)if (Na = !0, ya("template", aa, J, T), aa = J, z = F(J.template) ? J.template(T, e) : J.template, z = Pc(z), J.replace) {
                        k = J;
                        z = Pb.test(z) ? Qc(U(J.templateNamespace, P(z))) : [];
                        d = z[0];
                        if (1 != z.length || d.nodeType !== na)throw ka("tplrt", ga, "");
                        Ab(g, T, d);
                        za = {$attr: {}};
                        z = W(d, [], za);
                        var mf = a.splice(S + 1, a.length - (S + 1));
                        L && y(z);
                        a = a.concat(z).concat(mf);
                        Oc(e, za);
                        za = a.length
                    } else T.html(z);
                    if (J.templateUrl)Na = !0, ya("template", aa, J, T), aa = J, J.replace && (k = J), H = G(a.splice(S, a.length - S), T, e, g, x && Ga, l, q, {controllerDirectives: E, newIsolateScopeDirective: L, templateDirective: aa, nonTlbTranscludeDirective: da}), za = a.length; else if (J.compile)try {
                        R = J.compile(T, e, Ga), F(R) ? w(null, R, zb, $) : R && w(R.pre, R.post, zb, $)
                    } catch (ca) {
                        c(ca, va(T))
                    }
                    J.terminal && (H.terminal = !0, v = Math.max(v, J.priority))
                }
                H.scope = M && !0 === M.scope;
                H.transcludeOnThisElement = x;
                H.elementTranscludeOnThisElement = C;
                H.templateOnThisElement = Na;
                H.transclude =
                    Ga;
                p.hasElementTranscludeDirective = C;
                return H
            }

            function y(a) {
                for (var b = 0, c = a.length; b < c; b++) {
                    var d = b, e;
                    e = C(Object.create(a[b]), {$$isolateScope: !0});
                    a[d] = e
                }
            }

            function da(b, e, f, g, h, k, l) {
                if (e === h)return null;
                h = null;
                if (d.hasOwnProperty(e)) {
                    var q;
                    e = a.get(e + "Directive");
                    for (var s = 0, n = e.length; s < n; s++)try {
                        if (q = e[s], (g === u || g > q.priority) && -1 != q.restrict.indexOf(f)) {
                            if (k) {
                                var w = {$$start: k, $$end: l};
                                q = C(Object.create(q), w)
                            }
                            b.push(q);
                            h = q
                        }
                    } catch (N) {
                        c(N)
                    }
                }
                return h
            }

            function Oc(a, b) {
                var c = b.$attr, d = a.$attr, e = a.$$element;
                r(a, function (d, e) {
                    "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                });
                r(b, function (b, f) {
                    "class" == f ? (M(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
                })
            }

            function G(a, b, c, d, e, f, g, h) {
                var k = [], l, s, p = b[0], n = a.shift(), w = C({}, n, {templateUrl: null, transclude: null, replace: null, $$originalDirective: n}), N = F(n.templateUrl) ? n.templateUrl(b,
                    c) : n.templateUrl, t = n.templateNamespace;
                b.empty();
                q(O.getTrustedResourceUrl(N)).then(function (q) {
                    var v, O;
                    q = Pc(q);
                    if (n.replace) {
                        q = Pb.test(q) ? Qc(U(t, P(q))) : [];
                        v = q[0];
                        if (1 != q.length || v.nodeType !== na)throw ka("tplrt", n.name, N);
                        q = {$attr: {}};
                        Ab(d, b, v);
                        var H = W(v, [], q);
                        K(n.scope) && y(H);
                        a = H.concat(a);
                        Oc(c, q)
                    } else v = p, b.html(q);
                    a.unshift(w);
                    l = aa(a, v, c, e, b, n, f, g, h);
                    r(d, function (a, c) {
                        a == v && (d[c] = b[0])
                    });
                    for (s = ea(b[0].childNodes, e); k.length;) {
                        q = k.shift();
                        O = k.shift();
                        var E = k.shift(), B = k.shift(), H = b[0];
                        if (!q.$$destroyed) {
                            if (O !==
                                p) {
                                var Q = O.className;
                                h.hasElementTranscludeDirective && n.replace || (H = Rb(v));
                                Ab(E, A(O), H);
                                M(A(H), Q)
                            }
                            O = l.transcludeOnThisElement ? L(q, l.transclude, B) : B;
                            l(s, q, H, d, O)
                        }
                    }
                    k = null
                });
                return function (a, b, c, d, e) {
                    a = e;
                    b.$$destroyed || (k ? k.push(b, c, d, a) : (l.transcludeOnThisElement && (a = L(b, l.transclude, e)), l(s, b, c, d, a)))
                }
            }

            function z(a, b) {
                var c = b.priority - a.priority;
                return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
            }

            function ya(a, b, c, d) {
                if (b)throw ka("multidir", b.name, c.name, a, va(d));
            }

            function T(a, c) {
                var d =
                    b(c, !0);
                d && a.push({priority: 0, compile: function (a) {
                    a = a.parent();
                    var b = !!a.length;
                    b && B.$$addBindingClass(a);
                    return function (a, c) {
                        var e = c.parent();
                        b || B.$$addBindingClass(e);
                        B.$$addBindingInfo(e, d.expressions);
                        a.$watch(d, function (a) {
                            c[0].nodeValue = a
                        })
                    }
                }})
            }

            function U(a, b) {
                a = R(a || "html");
                switch (a) {
                    case "svg":
                    case "math":
                        var c = V.createElement("div");
                        c.innerHTML = "<" + a + ">" + b + "</" + a + ">";
                        return c.childNodes[0].childNodes;
                    default:
                        return b
                }
            }

            function Ga(a, b) {
                if ("srcdoc" == b)return O.HTML;
                var c = ta(a);
                if ("xlinkHref" ==
                    b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b))return O.RESOURCE_URL
            }

            function S(a, c, d, e, f) {
                var h = b(d, !0);
                if (h) {
                    if ("multiple" === e && "select" === ta(a))throw ka("selmulti", va(a));
                    c.push({priority: 100, compile: function () {
                        return{pre: function (c, d, l) {
                            d = l.$$observers || (l.$$observers = {});
                            if (k.test(e))throw ka("nodomevents");
                            l[e] && (h = b(l[e], !0, Ga(a, e), g[e] || f)) && (l[e] = h(c), (d[e] || (d[e] = [])).$$inter = !0, (l.$$observers && l.$$observers[e].$$scope || c).$watch(h, function (a, b) {
                                "class" === e && a != b ? l.$updateClass(a,
                                    b) : l.$set(e, a)
                            }))
                        }}
                    }})
                }
            }

            function Ab(a, b, c) {
                var d = b[0], e = b.length, f = d.parentNode, g, h;
                if (a)for (g = 0, h = a.length; g < h; g++)if (a[g] == d) {
                    a[g++] = c;
                    h = g + e - 1;
                    for (var k = a.length; g < k; g++, h++)h < k ? a[g] = a[h] : delete a[g];
                    a.length -= e - 1;
                    a.context === d && (a.context = c);
                    break
                }
                f && f.replaceChild(c, d);
                a = V.createDocumentFragment();
                a.appendChild(d);
                A(c).data(A(d).data());
                qa ? (Nb = !0, qa.cleanData([d])) : delete A.cache[d[A.expando]];
                d = 1;
                for (e = b.length; d < e; d++)f = b[d], A(f).remove(), a.appendChild(f), delete b[d];
                b[0] = c;
                b.length = 1
            }

            function Y(a, b) {
                return C(function () {
                    return a.apply(null, arguments)
                }, a, b)
            }

            function Z(a, b, d, e, f, g) {
                try {
                    a(b, d, e, f, g)
                } catch (h) {
                    c(h, va(d))
                }
            }

            var X = function (a, b) {
                if (b) {
                    var c = Object.keys(b), d, e, f;
                    d = 0;
                    for (e = c.length; d < e; d++)f = c[d], this[f] = b[f]
                } else this.$attr = {};
                this.$$element = a
            };
            X.prototype = {$normalize: wa, $addClass: function (a) {
                a && 0 < a.length && E.addClass(this.$$element, a)
            }, $removeClass: function (a) {
                a && 0 < a.length && E.removeClass(this.$$element, a)
            }, $updateClass: function (a, b) {
                var c = Rc(a, b);
                c && c.length && E.addClass(this.$$element,
                    c);
                (c = Rc(b, a)) && c.length && E.removeClass(this.$$element, c)
            }, $set: function (a, b, d, e) {
                var f = this.$$element[0], g = Jc(f, a), h = ff(f, a), f = a;
                g ? (this.$$element.prop(a, b), e = g) : h && (this[h] = b, f = h);
                this[a] = b;
                e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = Mb(a, "-"));
                g = ta(this.$$element);
                if ("a" === g && "href" === a || "img" === g && "src" === a)this[a] = b = H(b, "src" === a); else if ("img" === g && "srcset" === a) {
                    for (var g = "", h = P(b), k = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, k = /\s/.test(h) ? k : /(,)/, h = h.split(k), k = Math.floor(h.length / 2),
                             l = 0; l < k; l++)var q = 2 * l, g = g + H(P(h[q]), !0), g = g + (" " + P(h[q + 1]));
                    h = P(h[2 * l]).split(/\s/);
                    g += H(P(h[0]), !0);
                    2 === h.length && (g += " " + P(h[1]));
                    this[a] = b = g
                }
                !1 !== d && (null === b || b === u ? this.$$element.removeAttr(e) : this.$$element.attr(e, b));
                (a = this.$$observers) && r(a[f], function (a) {
                    try {
                        a(b)
                    } catch (d) {
                        c(d)
                    }
                })
            }, $observe: function (a, b) {
                var c = this, d = c.$$observers || (c.$$observers = ia()), e = d[a] || (d[a] = []);
                e.push(b);
                v.$evalAsync(function () {
                    !e.$$inter && c.hasOwnProperty(a) && b(c[a])
                });
                return function () {
                    Va(e, b)
                }
            }};
            var Na = b.startSymbol(),
                ga = b.endSymbol(), Pc = "{{" == Na || "}}" == ga ? oa : function (a) {
                    return a.replace(/\{\{/g, Na).replace(/}}/g, ga)
                }, za = /^ngAttr[A-Z]/;
            B.$$addBindingInfo = l ? function (a, b) {
                var c = a.data("$binding") || [];
                D(b) ? c = c.concat(b) : c.push(b);
                a.data("$binding", c)
            } : x;
            B.$$addBindingClass = l ? function (a) {
                M(a, "ng-binding")
            } : x;
            B.$$addScopeInfo = l ? function (a, b, c, d) {
                a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b)
            } : x;
            B.$$addScopeClass = l ? function (a, b) {
                M(a, b ? "ng-isolate-scope" : "ng-scope")
            } : x;
            return B
        }]
    }

    function wa(b) {
        return bb(b.replace(nf,
            ""))
    }

    function Rc(b, a) {
        var c = "", d = b.split(/\s+/), e = a.split(/\s+/), f = 0;
        a:for (; f < d.length; f++) {
            for (var g = d[f], h = 0; h < e.length; h++)if (g == e[h])continue a;
            c += (0 < c.length ? " " : "") + g
        }
        return c
    }

    function Qc(b) {
        b = A(b);
        var a = b.length;
        if (1 >= a)return b;
        for (; a--;)8 === b[a].nodeType && of.call(b, a, 1);
        return b
    }

    function Ce() {
        var b = {}, a = !1, c = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function (a, c) {
            La(a, "controller");
            K(a) ? C(b, a) : b[a] = c
        };
        this.allowGlobals = function () {
            a = !0
        };
        this.$get = ["$injector", "$window", function (d, e) {
            function f(a, b, c, d) {
                if (!a || !K(a.$scope))throw z("$controller")("noscp", d, b);
                a.$scope[b] = c
            }

            return function (g, h, k, l) {
                var m, p, s;
                k = !0 === k;
                l && I(l) && (s = l);
                I(g) && (l = g.match(c), p = l[1], s = s || l[3], g = b.hasOwnProperty(p) ? b[p] : tc(h.$scope, p, !0) || (a ? tc(e, p, !0) : u), pb(g, p, !0));
                if (k)return k = (D(g) ? g[g.length - 1] : g).prototype, m = Object.create(k), s && f(h, s, m, p || g.name), C(function () {
                    d.invoke(g, m, h, p);
                    return m
                }, {instance: m, identifier: s});
                m = d.instantiate(g, h, p);
                s && f(h, s, m, p || g.name);
                return m
            }
        }]
    }

    function De() {
        this.$get = ["$window", function (b) {
            return A(b.document)
        }]
    }

    function Ee() {
        this.$get = ["$log", function (b) {
            return function (a, c) {
                b.error.apply(b, arguments)
            }
        }]
    }

    function Yb(b, a) {
        if (I(b)) {
            b = b.replace(pf, "");
            var c = a("Content-Type");
            if (c && 0 === c.indexOf(Sc) && b.trim() || qf.test(b) && rf.test(b))b = oc(b)
        }
        return b
    }

    function Tc(b) {
        var a = ia(), c, d, e;
        if (!b)return a;
        r(b.split("\n"), function (b) {
            e = b.indexOf(":");
            c = R(P(b.substr(0, e)));
            d = P(b.substr(e + 1));
            c && (a[c] = a[c] ? a[c] + ", " + d : d)
        });
        return a
    }

    function Uc(b) {
        var a = K(b) ? b : u;
        return function (c) {
            a || (a = Tc(b));
            return c ? (c = a[R(c)], void 0 ===
                c && (c = null), c) : a
        }
    }

    function Vc(b, a, c) {
        if (F(c))return c(b, a);
        r(c, function (c) {
            b = c(b, a)
        });
        return b
    }

    function He() {
        var b = this.defaults = {transformResponse: [Yb], transformRequest: [function (a) {
            return K(a) && "[object File]" !== Ja.call(a) && "[object Blob]" !== Ja.call(a) ? Za(a) : a
        }], headers: {common: {Accept: "application/json, text/plain, */*"}, post: ua(Zb), put: ua(Zb), patch: ua(Zb)}, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN"}, a = !1;
        this.useApplyAsync = function (b) {
            return y(b) ? (a = !!b, this) : a
        };
        var c = this.interceptors =
            [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function (d, e, f, g, h, k) {
            function l(a) {
                function c(a) {
                    var b = C({}, a);
                    b.data = a.data ? Vc(a.data, a.headers, d.transformResponse) : a.data;
                    a = a.status;
                    return 200 <= a && 300 > a ? b : h.reject(b)
                }

                var d = {method: "get", transformRequest: b.transformRequest, transformResponse: b.transformResponse}, e = function (a) {
                    var c = b.headers, d = C({}, a.headers), e, f, c = C({}, c.common, c[R(a.method)]);
                    a:for (e in c) {
                        a = R(e);
                        for (f in d)if (R(f) === a)continue a;
                        d[e] = c[e]
                    }
                    (function (a) {
                        var b;
                        r(a, function (c, d) {
                            F(c) && (b = c(), null != b ? a[d] = b : delete a[d])
                        })
                    })(d);
                    return d
                }(a);
                if (!ha.isObject(a))throw z("$http")("badreq", a);
                C(d, a);
                d.headers = e;
                d.method = rb(d.method);
                var f = [function (a) {
                    e = a.headers;
                    var d = Vc(a.data, Uc(e), a.transformRequest);
                    G(d) && r(e, function (a, b) {
                        "content-type" === R(b) && delete e[b]
                    });
                    G(a.withCredentials) && !G(b.withCredentials) && (a.withCredentials = b.withCredentials);
                    return m(a, d, e).then(c, c)
                }, u], g = h.when(d);
                for (r(t, function (a) {
                    (a.request || a.requestError) && f.unshift(a.request, a.requestError);
                    (a.response || a.responseError) && f.push(a.response, a.responseError)
                }); f.length;) {
                    a = f.shift();
                    var k = f.shift(), g = g.then(a, k)
                }
                g.success = function (a) {
                    g.then(function (b) {
                        a(b.data, b.status, b.headers, d)
                    });
                    return g
                };
                g.error = function (a) {
                    g.then(null, function (b) {
                        a(b.data, b.status, b.headers, d)
                    });
                    return g
                };
                return g
            }

            function m(c, f, k) {
                function m(b, c, d, e) {
                    function f() {
                        w(c, b, d, e)
                    }

                    M && (200 <= b && 300 > b ? M.put(r, [b, c, Tc(d), e]) : M.remove(r));
                    a ? g.$applyAsync(f) : (f(), g.$$phase || g.$apply())
                }

                function w(a, b, d, e) {
                    b = Math.max(b, 0);
                    (200 <=
                        b && 300 > b ? E.resolve : E.reject)({data: a, status: b, headers: Uc(d), config: c, statusText: e})
                }

                function t() {
                    var a = l.pendingRequests.indexOf(c);
                    -1 !== a && l.pendingRequests.splice(a, 1)
                }

                var E = h.defer(), H = E.promise, M, B, r = p(c.url, c.params);
                l.pendingRequests.push(c);
                H.then(t, t);
                !c.cache && !b.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (M = K(c.cache) ? c.cache : K(b.cache) ? b.cache : s);
                if (M)if (B = M.get(r), y(B)) {
                    if (B && F(B.then))return B.then(t, t), B;
                    D(B) ? w(B[1], B[0], ua(B[2]), B[3]) : w(B, 200, {}, "OK")
                } else M.put(r, H);
                G(B) && ((B = Wc(c.url) ? e.cookies()[c.xsrfCookieName || b.xsrfCookieName] : u) && (k[c.xsrfHeaderName || b.xsrfHeaderName] = B), d(c.method, r, f, m, k, c.timeout, c.withCredentials, c.responseType));
                return H
            }

            function p(a, b) {
                if (!b)return a;
                var c = [];
                Bd(b, function (a, b) {
                    null === a || G(a) || (D(a) || (a = [a]), r(a, function (a) {
                        K(a) && (a = fa(a) ? a.toISOString() : Za(a));
                        c.push(Da(b) + "=" + Da(a))
                    }))
                });
                0 < c.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + c.join("&"));
                return a
            }

            var s = f("$http"), t = [];
            r(c, function (a) {
                t.unshift(I(a) ? k.get(a) : k.invoke(a))
            });
            l.pendingRequests = [];
            (function (a) {
                r(arguments, function (a) {
                    l[a] = function (b, c) {
                        return l(C(c || {}, {method: a, url: b}))
                    }
                })
            })("get", "delete", "head", "jsonp");
            (function (a) {
                r(arguments, function (a) {
                    l[a] = function (b, c, d) {
                        return l(C(d || {}, {method: a, url: b, data: c}))
                    }
                })
            })("post", "put", "patch");
            l.defaults = b;
            return l
        }]
    }

    function sf() {
        return new U.XMLHttpRequest
    }

    function Ie() {
        this.$get = ["$browser", "$window", "$document", function (b, a, c) {
            return tf(b, sf, b.defer, a.angular.callbacks, c[0])
        }]
    }

    function tf(b, a, c, d, e) {
        function f(a, b, c) {
            var f = e.createElement("script"), m = null;
            f.type = "text/javascript";
            f.src = a;
            f.async = !0;
            m = function (a) {
                f.removeEventListener("load", m, !1);
                f.removeEventListener("error", m, !1);
                e.body.removeChild(f);
                f = null;
                var g = -1, t = "unknown";
                a && ("load" !== a.type || d[b].called || (a = {type: "error"}), t = a.type, g = "error" === a.type ? 404 : 200);
                c && c(g, t)
            };
            f.addEventListener("load", m, !1);
            f.addEventListener("error", m, !1);
            e.body.appendChild(f);
            return m
        }

        return function (e, h, k, l, m, p, s, t) {
            function q() {
                v && v();
                w && w.abort()
            }

            function N(a, d, e, f, g) {
                E && c.cancel(E);
                v = w = null;
                a(d, e, f, g);
                b.$$completeOutstandingRequest(x)
            }

            b.$$incOutstandingRequestCount();
            h = h || b.url();
            if ("jsonp" == R(e)) {
                var n = "_" + (d.counter++).toString(36);
                d[n] = function (a) {
                    d[n].data = a;
                    d[n].called = !0
                };
                var v = f(h.replace("JSON_CALLBACK", "angular.callbacks." + n), n, function (a, b) {
                    N(l, a, d[n].data, "", b);
                    d[n] = x
                })
            } else {
                var w = a();
                w.open(e, h, !0);
                r(m, function (a, b) {
                    y(a) && w.setRequestHeader(b, a)
                });
                w.onload = function () {
                    var a = w.statusText || "", b = "response"in w ? w.response : w.responseText, c = 1223 ===
                        w.status ? 204 : w.status;
                    0 === c && (c = b ? 200 : "file" == Aa(h).protocol ? 404 : 0);
                    N(l, c, b, w.getAllResponseHeaders(), a)
                };
                e = function () {
                    N(l, -1, null, null, "")
                };
                w.onerror = e;
                w.onabort = e;
                s && (w.withCredentials = !0);
                if (t)try {
                    w.responseType = t
                } catch (O) {
                    if ("json" !== t)throw O;
                }
                w.send(k || null)
            }
            if (0 < p)var E = c(q, p); else p && F(p.then) && p.then(q)
        }
    }

    function Fe() {
        var b = "{{", a = "}}";
        this.startSymbol = function (a) {
            return a ? (b = a, this) : b
        };
        this.endSymbol = function (b) {
            return b ? (a = b, this) : a
        };
        this.$get = ["$parse", "$exceptionHandler", "$sce", function (c, d, e) {
            function f(a) {
                return"\\\\\\" + a
            }

            function g(f, g, t, q) {
                function N(c) {
                    return c.replace(l, b).replace(m, a)
                }

                function n(a) {
                    try {
                        var b = a;
                        a = t ? e.getTrusted(t, b) : e.valueOf(b);
                        var c;
                        if (q && !y(a))c = a; else if (null == a)c = ""; else {
                            switch (typeof a) {
                                case "string":
                                    break;
                                case "number":
                                    a = "" + a;
                                    break;
                                default:
                                    a = Za(a)
                            }
                            c = a
                        }
                        return c
                    } catch (g) {
                        c = $b("interr", f, g.toString()), d(c)
                    }
                }

                q = !!q;
                for (var v, w, O = 0, E = [], H = [], M = f.length, B = [], r = []; O < M;)if (-1 != (v = f.indexOf(b, O)) && -1 != (w = f.indexOf(a, v + h)))O !== v && B.push(N(f.substring(O, v))), O = f.substring(v +
                    h, w), E.push(O), H.push(c(O, n)), O = w + k, r.push(B.length), B.push(""); else {
                    O !== M && B.push(N(f.substring(O)));
                    break
                }
                if (t && 1 < B.length)throw $b("noconcat", f);
                if (!g || E.length) {
                    var L = function (a) {
                        for (var b = 0, c = E.length; b < c; b++) {
                            if (q && G(a[b]))return;
                            B[r[b]] = a[b]
                        }
                        return B.join("")
                    };
                    return C(function (a) {
                        var b = 0, c = E.length, e = Array(c);
                        try {
                            for (; b < c; b++)e[b] = H[b](a);
                            return L(e)
                        } catch (g) {
                            a = $b("interr", f, g.toString()), d(a)
                        }
                    }, {exp: f, expressions: E, $$watchDelegate: function (a, b, c) {
                        var d;
                        return a.$watchGroup(H, function (c, e) {
                            var f =
                                L(c);
                            F(b) && b.call(this, f, c !== e ? d : f, a);
                            d = f
                        }, c)
                    }})
                }
            }

            var h = b.length, k = a.length, l = new RegExp(b.replace(/./g, f), "g"), m = new RegExp(a.replace(/./g, f), "g");
            g.startSymbol = function () {
                return b
            };
            g.endSymbol = function () {
                return a
            };
            return g
        }]
    }

    function Ge() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", function (b, a, c, d) {
            function e(e, h, k, l) {
                var m = a.setInterval, p = a.clearInterval, s = 0, t = y(l) && !l, q = (t ? d : c).defer(), N = q.promise;
                k = y(k) ? k : 0;
                N.then(null, null, e);
                N.$$intervalId = m(function () {
                    q.notify(s++);
                    0 < k && s >= k && (q.resolve(s),
                        p(N.$$intervalId), delete f[N.$$intervalId]);
                    t || b.$apply()
                }, h);
                f[N.$$intervalId] = q;
                return N
            }

            var f = {};
            e.cancel = function (b) {
                return b && b.$$intervalId in f ? (f[b.$$intervalId].reject("canceled"), a.clearInterval(b.$$intervalId), delete f[b.$$intervalId], !0) : !1
            };
            return e
        }]
    }

    function Od() {
        this.$get = function () {
            return{id: "en-us", NUMBER_FORMATS: {DECIMAL_SEP: ".", GROUP_SEP: ",", PATTERNS: [
                {minInt: 1, minFrac: 0, maxFrac: 3, posPre: "", posSuf: "", negPre: "-", negSuf: "", gSize: 3, lgSize: 3},
                {minInt: 1, minFrac: 2, maxFrac: 2, posPre: "\u00a4",
                    posSuf: "", negPre: "(\u00a4", negSuf: ")", gSize: 3, lgSize: 3}
            ], CURRENCY_SYM: "$"}, DATETIME_FORMATS: {MONTH: "January February March April May June July August September October November December".split(" "), SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "), AMPMS: ["AM", "PM"], medium: "MMM d, y h:mm:ss a", "short": "M/d/yy h:mm a", fullDate: "EEEE, MMMM d, y", longDate: "MMMM d, y",
                mediumDate: "MMM d, y", shortDate: "M/d/yy", mediumTime: "h:mm:ss a", shortTime: "h:mm a"}, pluralCat: function (b) {
                return 1 === b ? "one" : "other"
            }}
        }
    }

    function ac(b) {
        b = b.split("/");
        for (var a = b.length; a--;)b[a] = nb(b[a]);
        return b.join("/")
    }

    function Xc(b, a) {
        var c = Aa(b);
        a.$$protocol = c.protocol;
        a.$$host = c.hostname;
        a.$$port = $(c.port) || uf[c.protocol] || null
    }

    function Yc(b, a) {
        var c = "/" !== b.charAt(0);
        c && (b = "/" + b);
        var d = Aa(b);
        a.$$path = decodeURIComponent(c && "/" === d.pathname.charAt(0) ? d.pathname.substring(1) : d.pathname);
        a.$$search =
            qc(d.search);
        a.$$hash = decodeURIComponent(d.hash);
        a.$$path && "/" != a.$$path.charAt(0) && (a.$$path = "/" + a.$$path)
    }

    function xa(b, a) {
        if (0 === a.indexOf(b))return a.substr(b.length)
    }

    function Fa(b) {
        var a = b.indexOf("#");
        return-1 == a ? b : b.substr(0, a)
    }

    function bc(b) {
        return b.substr(0, Fa(b).lastIndexOf("/") + 1)
    }

    function cc(b, a) {
        this.$$html5 = !0;
        a = a || "";
        var c = bc(b);
        Xc(b, this);
        this.$$parse = function (a) {
            var b = xa(c, a);
            if (!I(b))throw eb("ipthprfx", a, c);
            Yc(b, this);
            this.$$path || (this.$$path = "/");
            this.$$compose()
        };
        this.$$compose =
            function () {
                var a = Kb(this.$$search), b = this.$$hash ? "#" + nb(this.$$hash) : "";
                this.$$url = ac(this.$$path) + (a ? "?" + a : "") + b;
                this.$$absUrl = c + this.$$url.substr(1)
            };
        this.$$parseLinkUrl = function (d, e) {
            if (e && "#" === e[0])return this.hash(e.slice(1)), !0;
            var f, g;
            (f = xa(b, d)) !== u ? (g = f, g = (f = xa(a, f)) !== u ? c + (xa("/", f) || f) : b + g) : (f = xa(c, d)) !== u ? g = c + f : c == d + "/" && (g = c);
            g && this.$$parse(g);
            return!!g
        }
    }

    function dc(b, a) {
        var c = bc(b);
        Xc(b, this);
        this.$$parse = function (d) {
            var e = xa(b, d) || xa(c, d), e = "#" == e.charAt(0) ? xa(a, e) : this.$$html5 ? e :
                "";
            if (!I(e))throw eb("ihshprfx", d, a);
            Yc(e, this);
            d = this.$$path;
            var f = /^\/[A-Z]:(\/.*)/;
            0 === e.indexOf(b) && (e = e.replace(b, ""));
            f.exec(e) || (d = (e = f.exec(d)) ? e[1] : d);
            this.$$path = d;
            this.$$compose()
        };
        this.$$compose = function () {
            var c = Kb(this.$$search), e = this.$$hash ? "#" + nb(this.$$hash) : "";
            this.$$url = ac(this.$$path) + (c ? "?" + c : "") + e;
            this.$$absUrl = b + (this.$$url ? a + this.$$url : "")
        };
        this.$$parseLinkUrl = function (a, c) {
            return Fa(b) == Fa(a) ? (this.$$parse(a), !0) : !1
        }
    }

    function Zc(b, a) {
        this.$$html5 = !0;
        dc.apply(this, arguments);
        var c = bc(b);
        this.$$parseLinkUrl = function (d, e) {
            if (e && "#" === e[0])return this.hash(e.slice(1)), !0;
            var f, g;
            b == Fa(d) ? f = d : (g = xa(c, d)) ? f = b + a + g : c === d + "/" && (f = c);
            f && this.$$parse(f);
            return!!f
        };
        this.$$compose = function () {
            var c = Kb(this.$$search), e = this.$$hash ? "#" + nb(this.$$hash) : "";
            this.$$url = ac(this.$$path) + (c ? "?" + c : "") + e;
            this.$$absUrl = b + a + this.$$url
        }
    }

    function Bb(b) {
        return function () {
            return this[b]
        }
    }

    function $c(b, a) {
        return function (c) {
            if (G(c))return this[b];
            this[b] = a(c);
            this.$$compose();
            return this
        }
    }

    function Je() {
        var b =
            "", a = {enabled: !1, requireBase: !0, rewriteLinks: !0};
        this.hashPrefix = function (a) {
            return y(a) ? (b = a, this) : b
        };
        this.html5Mode = function (b) {
            return Ua(b) ? (a.enabled = b, this) : K(b) ? (Ua(b.enabled) && (a.enabled = b.enabled), Ua(b.requireBase) && (a.requireBase = b.requireBase), Ua(b.rewriteLinks) && (a.rewriteLinks = b.rewriteLinks), this) : a
        };
        this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", function (c, d, e, f) {
            function g(a, b, c) {
                var e = k.url(), f = k.$$state;
                try {
                    d.url(a, b, c), k.$$state = d.state()
                } catch (g) {
                    throw k.url(e), k.$$state =
                        f, g;
                }
            }

            function h(a, b) {
                c.$broadcast("$locationChangeSuccess", k.absUrl(), a, k.$$state, b)
            }

            var k, l;
            l = d.baseHref();
            var m = d.url(), p;
            if (a.enabled) {
                if (!l && a.requireBase)throw eb("nobase");
                p = m.substring(0, m.indexOf("/", m.indexOf("//") + 2)) + (l || "/");
                l = e.history ? cc : Zc
            } else p = Fa(m), l = dc;
            k = new l(p, "#" + b);
            k.$$parseLinkUrl(m, m);
            k.$$state = d.state();
            var s = /^\s*(javascript|mailto):/i;
            f.on("click", function (b) {
                if (a.rewriteLinks && !b.ctrlKey && !b.metaKey && 2 != b.which) {
                    for (var e = A(b.target); "a" !== ta(e[0]);)if (e[0] === f[0] || !(e = e.parent())[0])return;
                    var g = e.prop("href"), h = e.attr("href") || e.attr("xlink:href");
                    K(g) && "[object SVGAnimatedString]" === g.toString() && (g = Aa(g.animVal).href);
                    s.test(g) || !g || e.attr("target") || b.isDefaultPrevented() || !k.$$parseLinkUrl(g, h) || (b.preventDefault(), k.absUrl() != d.url() && (c.$apply(), U.angular["ff-684208-preventDefault"] = !0))
                }
            });
            k.absUrl() != m && d.url(k.absUrl(), !0);
            var t = !0;
            d.onUrlChange(function (a, b) {
                c.$evalAsync(function () {
                    var d = k.absUrl(), e = k.$$state, f;
                    k.$$parse(a);
                    k.$$state = b;
                    f = c.$broadcast("$locationChangeStart",
                        a, d, b, e).defaultPrevented;
                    k.absUrl() === a && (f ? (k.$$parse(d), k.$$state = e, g(d, !1, e)) : (t = !1, h(d, e)))
                });
                c.$$phase || c.$digest()
            });
            c.$watch(function () {
                var a = d.url(), b = d.state(), f = k.$$replace, l = a !== k.absUrl() || k.$$html5 && e.history && b !== k.$$state;
                if (t || l)t = !1, c.$evalAsync(function () {
                    var d = k.absUrl(), e = c.$broadcast("$locationChangeStart", d, a, k.$$state, b).defaultPrevented;
                    k.absUrl() === d && (e ? (k.$$parse(a), k.$$state = b) : (l && g(d, f, b === k.$$state ? null : k.$$state), h(a, b)))
                });
                k.$$replace = !1
            });
            return k
        }]
    }

    function Ke() {
        var b =
            !0, a = this;
        this.debugEnabled = function (a) {
            return y(a) ? (b = a, this) : b
        };
        this.$get = ["$window", function (c) {
            function d(a) {
                a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
                return a
            }

            function e(a) {
                var b = c.console || {}, e = b[a] || b.log || x;
                a = !1;
                try {
                    a = !!e.apply
                } catch (k) {
                }
                return a ? function () {
                    var a = [];
                    r(arguments, function (b) {
                        a.push(d(b))
                    });
                    return e.apply(b, a)
                } : function (a, b) {
                    e(a, null == b ? "" : b)
                }
            }

            return{log: e("log"),
                info: e("info"), warn: e("warn"), error: e("error"), debug: function () {
                    var c = e("debug");
                    return function () {
                        b && c.apply(a, arguments)
                    }
                }()}
        }]
    }

    function ra(b, a) {
        if ("__defineGetter__" === b || "__defineSetter__" === b || "__lookupGetter__" === b || "__lookupSetter__" === b || "__proto__" === b)throw la("isecfld", a);
        return b
    }

    function sa(b, a) {
        if (b) {
            if (b.constructor === b)throw la("isecfn", a);
            if (b.window === b)throw la("isecwindow", a);
            if (b.children && (b.nodeName || b.prop && b.attr && b.find))throw la("isecdom", a);
            if (b === Object)throw la("isecobj",
                a);
        }
        return b
    }

    function ec(b) {
        return b.constant
    }

    function Oa(b, a, c, d) {
        sa(b, d);
        a = a.split(".");
        for (var e, f = 0; 1 < a.length; f++) {
            e = ra(a.shift(), d);
            var g = sa(b[e], d);
            g || (g = {}, b[e] = g);
            b = g
        }
        e = ra(a.shift(), d);
        sa(b[e], d);
        return b[e] = c
    }

    function Pa(b) {
        return"constructor" == b
    }

    function ad(b, a, c, d, e, f, g) {
        ra(b, f);
        ra(a, f);
        ra(c, f);
        ra(d, f);
        ra(e, f);
        var h = function (a) {
            return sa(a, f)
        }, k = g || Pa(b) ? h : oa, l = g || Pa(a) ? h : oa, m = g || Pa(c) ? h : oa, p = g || Pa(d) ? h : oa, s = g || Pa(e) ? h : oa;
        return function (f, g) {
            var h = g && g.hasOwnProperty(b) ? g : f;
            if (null ==
                h)return h;
            h = k(h[b]);
            if (!a)return h;
            if (null == h)return u;
            h = l(h[a]);
            if (!c)return h;
            if (null == h)return u;
            h = m(h[c]);
            if (!d)return h;
            if (null == h)return u;
            h = p(h[d]);
            return e ? null == h ? u : h = s(h[e]) : h
        }
    }

    function vf(b, a) {
        return function (c, d) {
            return b(c, d, sa, a)
        }
    }

    function bd(b, a, c) {
        var d = a.expensiveChecks, e = d ? wf : xf, f = e[b];
        if (f)return f;
        var g = b.split("."), h = g.length;
        if (a.csp)f = 6 > h ? ad(g[0], g[1], g[2], g[3], g[4], c, d) : function (a, b) {
            var e = 0, f;
            do f = ad(g[e++], g[e++], g[e++], g[e++], g[e++], c, d)(a, b), b = u, a = f; while (e < h);
            return f
        };
        else {
            var k = "";
            d && (k += "s = eso(s, fe);\nl = eso(l, fe);\n");
            var l = d;
            r(g, function (a, b) {
                ra(a, c);
                var e = (b ? "s" : '((l&&l.hasOwnProperty("' + a + '"))?l:s)') + "." + a;
                if (d || Pa(a))e = "eso(" + e + ", fe)", l = !0;
                k += "if(s == null) return undefined;\ns=" + e + ";\n"
            });
            k += "return s;";
            a = new Function("s", "l", "eso", "fe", k);
            a.toString = ca(k);
            l && (a = vf(a, c));
            f = a
        }
        f.sharedGetter = !0;
        f.assign = function (a, c) {
            return Oa(a, b, c, b)
        };
        return e[b] = f
    }

    function fc(b) {
        return F(b.valueOf) ? b.valueOf() : yf.call(b)
    }

    function Le() {
        var b = ia(), a = ia();
        this.$get =
            ["$filter", "$sniffer", function (c, d) {
                function e(a) {
                    var b = a;
                    a.sharedGetter && (b = function (b, c) {
                        return a(b, c)
                    }, b.literal = a.literal, b.constant = a.constant, b.assign = a.assign);
                    return b
                }

                function f(a, b) {
                    for (var c = 0, d = a.length; c < d; c++) {
                        var e = a[c];
                        e.constant || (e.inputs ? f(e.inputs, b) : -1 === b.indexOf(e) && b.push(e))
                    }
                    return b
                }

                function g(a, b) {
                    return null == a || null == b ? a === b : "object" === typeof a && (a = fc(a), "object" === typeof a) ? !1 : a === b || a !== a && b !== b
                }

                function h(a, b, c, d) {
                    var e = d.$$inputs || (d.$$inputs = f(d.inputs, [])), h;
                    if (1 ===
                        e.length) {
                        var k = g, e = e[0];
                        return a.$watch(function (a) {
                            var b = e(a);
                            g(b, k) || (h = d(a), k = b && fc(b));
                            return h
                        }, b, c)
                    }
                    for (var l = [], s = 0, m = e.length; s < m; s++)l[s] = g;
                    return a.$watch(function (a) {
                        for (var b = !1, c = 0, f = e.length; c < f; c++) {
                            var k = e[c](a);
                            if (b || (b = !g(k, l[c])))l[c] = k && fc(k)
                        }
                        b && (h = d(a));
                        return h
                    }, b, c)
                }

                function k(a, b, c, d) {
                    var e, f;
                    return e = a.$watch(function (a) {
                        return d(a)
                    }, function (a, c, d) {
                        f = a;
                        F(b) && b.apply(this, arguments);
                        y(a) && d.$$postDigest(function () {
                            y(f) && e()
                        })
                    }, c)
                }

                function l(a, b, c, d) {
                    function e(a) {
                        var b = !0;
                        r(a, function (a) {
                            y(a) || (b = !1)
                        });
                        return b
                    }

                    var f, g;
                    return f = a.$watch(function (a) {
                        return d(a)
                    }, function (a, c, d) {
                        g = a;
                        F(b) && b.call(this, a, c, d);
                        e(a) && d.$$postDigest(function () {
                            e(g) && f()
                        })
                    }, c)
                }

                function m(a, b, c, d) {
                    var e;
                    return e = a.$watch(function (a) {
                        return d(a)
                    }, function (a, c, d) {
                        F(b) && b.apply(this, arguments);
                        e()
                    }, c)
                }

                function p(a, b) {
                    if (!b)return a;
                    var c = a.$$watchDelegate, c = c !== l && c !== k ? function (c, d) {
                        var e = a(c, d);
                        return b(e, c, d)
                    } : function (c, d) {
                        var e = a(c, d), f = b(e, c, d);
                        return y(e) ? f : e
                    };
                    a.$$watchDelegate && a.$$watchDelegate !==
                        h ? c.$$watchDelegate = a.$$watchDelegate : b.$stateful || (c.$$watchDelegate = h, c.inputs = [a]);
                    return c
                }

                var s = {csp: d.csp, expensiveChecks: !1}, t = {csp: d.csp, expensiveChecks: !0};
                return function (d, f, g) {
                    var v, w, O;
                    switch (typeof d) {
                        case "string":
                            O = d = d.trim();
                            var E = g ? a : b;
                            v = E[O];
                            v || (":" === d.charAt(0) && ":" === d.charAt(1) && (w = !0, d = d.substring(2)), g = g ? t : s, v = new gc(g), v = (new fb(v, c, g)).parse(d), v.constant ? v.$$watchDelegate = m : w ? (v = e(v), v.$$watchDelegate = v.literal ? l : k) : v.inputs && (v.$$watchDelegate = h), E[O] = v);
                            return p(v, f);
                        case "function":
                            return p(d, f);
                        default:
                            return p(x, f)
                    }
                }
            }]
    }

    function Ne() {
        this.$get = ["$rootScope", "$exceptionHandler", function (b, a) {
            return cd(function (a) {
                b.$evalAsync(a)
            }, a)
        }]
    }

    function Oe() {
        this.$get = ["$browser", "$exceptionHandler", function (b, a) {
            return cd(function (a) {
                b.defer(a)
            }, a)
        }]
    }

    function cd(b, a) {
        function c(a, b, c) {
            function d(b) {
                return function (c) {
                    e || (e = !0, b.call(a, c))
                }
            }

            var e = !1;
            return[d(b), d(c)]
        }

        function d() {
            this.$$state = {status: 0}
        }

        function e(a, b) {
            return function (c) {
                b.call(a, c)
            }
        }

        function f(c) {
            !c.processScheduled &&
            c.pending && (c.processScheduled = !0, b(function () {
                var b, d, e;
                e = c.pending;
                c.processScheduled = !1;
                c.pending = u;
                for (var f = 0, g = e.length; f < g; ++f) {
                    d = e[f][0];
                    b = e[f][c.status];
                    try {
                        F(b) ? d.resolve(b(c.value)) : 1 === c.status ? d.resolve(c.value) : d.reject(c.value)
                    } catch (h) {
                        d.reject(h), a(h)
                    }
                }
            }))
        }

        function g() {
            this.promise = new d;
            this.resolve = e(this, this.resolve);
            this.reject = e(this, this.reject);
            this.notify = e(this, this.notify)
        }

        var h = z("$q", TypeError);
        d.prototype = {then: function (a, b, c) {
            var d = new g;
            this.$$state.pending = this.$$state.pending ||
                [];
            this.$$state.pending.push([d, a, b, c]);
            0 < this.$$state.status && f(this.$$state);
            return d.promise
        }, "catch": function (a) {
            return this.then(null, a)
        }, "finally": function (a, b) {
            return this.then(function (b) {
                return l(b, !0, a)
            }, function (b) {
                return l(b, !1, a)
            }, b)
        }};
        g.prototype = {resolve: function (a) {
            this.promise.$$state.status || (a === this.promise ? this.$$reject(h("qcycle", a)) : this.$$resolve(a))
        }, $$resolve: function (b) {
            var d, e;
            e = c(this, this.$$resolve, this.$$reject);
            try {
                if (K(b) || F(b))d = b && b.then;
                F(d) ? (this.promise.$$state.status = -1, d.call(b, e[0], e[1], this.notify)) : (this.promise.$$state.value = b, this.promise.$$state.status = 1, f(this.promise.$$state))
            } catch (g) {
                e[1](g), a(g)
            }
        }, reject: function (a) {
            this.promise.$$state.status || this.$$reject(a)
        }, $$reject: function (a) {
            this.promise.$$state.value = a;
            this.promise.$$state.status = 2;
            f(this.promise.$$state)
        }, notify: function (c) {
            var d = this.promise.$$state.pending;
            0 >= this.promise.$$state.status && d && d.length && b(function () {
                for (var b, e, f = 0, g = d.length; f < g; f++) {
                    e = d[f][0];
                    b = d[f][3];
                    try {
                        e.notify(F(b) ?
                            b(c) : c)
                    } catch (h) {
                        a(h)
                    }
                }
            })
        }};
        var k = function (a, b) {
            var c = new g;
            b ? c.resolve(a) : c.reject(a);
            return c.promise
        }, l = function (a, b, c) {
            var d = null;
            try {
                F(c) && (d = c())
            } catch (e) {
                return k(e, !1)
            }
            return d && F(d.then) ? d.then(function () {
                return k(a, b)
            }, function (a) {
                return k(a, !1)
            }) : k(a, b)
        }, m = function (a, b, c, d) {
            var e = new g;
            e.resolve(a);
            return e.promise.then(b, c, d)
        }, p = function t(a) {
            if (!F(a))throw h("norslvr", a);
            if (!(this instanceof t))return new t(a);
            var b = new g;
            a(function (a) {
                b.resolve(a)
            }, function (a) {
                b.reject(a)
            });
            return b.promise
        };
        p.defer = function () {
            return new g
        };
        p.reject = function (a) {
            var b = new g;
            b.reject(a);
            return b.promise
        };
        p.when = m;
        p.all = function (a) {
            var b = new g, c = 0, d = D(a) ? [] : {};
            r(a, function (a, e) {
                c++;
                m(a).then(function (a) {
                    d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
                }, function (a) {
                    d.hasOwnProperty(e) || b.reject(a)
                })
            });
            0 === c && b.resolve(d);
            return b.promise
        };
        return p
    }

    function Xe() {
        this.$get = ["$window", "$timeout", function (b, a) {
            var c = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame, d = b.cancelAnimationFrame ||
                b.webkitCancelAnimationFrame || b.mozCancelAnimationFrame || b.webkitCancelRequestAnimationFrame, e = !!c, f = e ? function (a) {
                var b = c(a);
                return function () {
                    d(b)
                }
            } : function (b) {
                var c = a(b, 16.66, !1);
                return function () {
                    a.cancel(c)
                }
            };
            f.supported = e;
            return f
        }]
    }

    function Me() {
        var b = 10, a = z("$rootScope"), c = null, d = null;
        this.digestTtl = function (a) {
            arguments.length && (b = a);
            return b
        };
        this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function (e, f, g, h) {
            function k() {
                this.$id = ++kb;
                this.$$phase = this.$parent = this.$$watchers =
                    this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                this.$root = this;
                this.$$destroyed = !1;
                this.$$listeners = {};
                this.$$listenerCount = {};
                this.$$isolateBindings = null
            }

            function l(b) {
                if (q.$$phase)throw a("inprog", q.$$phase);
                q.$$phase = b
            }

            function m(a, b, c) {
                do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent)
            }

            function p() {
            }

            function s() {
                for (; v.length;)try {
                    v.shift()()
                } catch (a) {
                    f(a)
                }
                d = null
            }

            function t() {
                null === d && (d = h.defer(function () {
                    q.$apply(s)
                }))
            }

            k.prototype = {constructor: k, $new: function (a, b) {
                function c() {
                    d.$$destroyed = !0
                }

                var d;
                b = b || this;
                a ? (d = new k, d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = function () {
                    this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
                    this.$$listeners = {};
                    this.$$listenerCount = {};
                    this.$id = ++kb;
                    this.$$ChildScope = null
                }, this.$$ChildScope.prototype = this), d = new this.$$ChildScope);
                d.$parent = b;
                d.$$prevSibling = b.$$childTail;
                b.$$childHead ? (b.$$childTail.$$nextSibling = d, b.$$childTail = d) : b.$$childHead =
                    b.$$childTail = d;
                (a || b != this) && d.$on("$destroy", c);
                return d
            }, $watch: function (a, b, d) {
                var e = g(a);
                if (e.$$watchDelegate)return e.$$watchDelegate(this, b, d, e);
                var f = this.$$watchers, h = {fn: b, last: p, get: e, exp: a, eq: !!d};
                c = null;
                F(b) || (h.fn = x);
                f || (f = this.$$watchers = []);
                f.unshift(h);
                return function () {
                    Va(f, h);
                    c = null
                }
            }, $watchGroup: function (a, b) {
                function c() {
                    h = !1;
                    k ? (k = !1, b(e, e, g)) : b(e, d, g)
                }

                var d = Array(a.length), e = Array(a.length), f = [], g = this, h = !1, k = !0;
                if (!a.length) {
                    var l = !0;
                    g.$evalAsync(function () {
                        l && b(e, e, g)
                    });
                    return function () {
                        l = !1
                    }
                }
                if (1 === a.length)return this.$watch(a[0], function (a, c, f) {
                    e[0] = a;
                    d[0] = c;
                    b(e, a === c ? e : d, f)
                });
                r(a, function (a, b) {
                    var k = g.$watch(a, function (a, f) {
                        e[b] = a;
                        d[b] = f;
                        h || (h = !0, g.$evalAsync(c))
                    });
                    f.push(k)
                });
                return function () {
                    for (; f.length;)f.shift()()
                }
            }, $watchCollection: function (a, b) {
                function c(a) {
                    e = a;
                    var b, d, g, h;
                    if (!G(e)) {
                        if (K(e))if (Ra(e))for (f !== p && (f = p, n = f.length = 0, l++), a = e.length, n !== a && (l++, f.length = n = a), b = 0; b < a; b++)h = f[b], g = e[b], d = h !== h && g !== g, d || h === g || (l++, f[b] = g); else {
                            f !== s && (f = s = {}, n = 0, l++);
                            a = 0;
                            for (b in e)e.hasOwnProperty(b) &&
                            (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, d || h === g || (l++, f[b] = g)) : (n++, f[b] = g, l++));
                            if (n > a)for (b in l++, f)e.hasOwnProperty(b) || (n--, delete f[b])
                        } else f !== e && (f = e, l++);
                        return l
                    }
                }

                c.$stateful = !0;
                var d = this, e, f, h, k = 1 < b.length, l = 0, m = g(a, c), p = [], s = {}, q = !0, n = 0;
                return this.$watch(m, function () {
                    q ? (q = !1, b(e, e, d)) : b(e, h, d);
                    if (k)if (K(e))if (Ra(e)) {
                        h = Array(e.length);
                        for (var a = 0; a < e.length; a++)h[a] = e[a]
                    } else for (a in h = {}, e)Jb.call(e, a) && (h[a] = e[a]); else h = e
                })
            }, $digest: function () {
                var e, g, k, m, t, v, r = b, L, u = [], y, Q;
                l("$digest");
                h.$$checkUrlChange();
                this === q && null !== d && (h.defer.cancel(d), s());
                c = null;
                do {
                    v = !1;
                    for (L = this; N.length;) {
                        try {
                            Q = N.shift(), Q.scope.$eval(Q.expression)
                        } catch (z) {
                            f(z)
                        }
                        c = null
                    }
                    a:do {
                        if (m = L.$$watchers)for (t = m.length; t--;)try {
                            if (e = m[t])if ((g = e.get(L)) !== (k = e.last) && !(e.eq ? pa(g, k) : "number" === typeof g && "number" === typeof k && isNaN(g) && isNaN(k)))v = !0, c = e, e.last = e.eq ? Ca(g, null) : g, e.fn(g, k === p ? g : k, L), 5 > r && (y = 4 - r, u[y] || (u[y] = []), u[y].push({msg: F(e.exp) ? "fn: " + (e.exp.name || e.exp.toString()) : e.exp, newVal: g, oldVal: k}));
                            else if (e === c) {
                                v = !1;
                                break a
                            }
                        } catch (A) {
                            f(A)
                        }
                        if (!(m = L.$$childHead || L !== this && L.$$nextSibling))for (; L !== this && !(m = L.$$nextSibling);)L = L.$parent
                    } while (L = m);
                    if ((v || N.length) && !r--)throw q.$$phase = null, a("infdig", b, u);
                } while (v || N.length);
                for (q.$$phase = null; n.length;)try {
                    n.shift()()
                } catch (da) {
                    f(da)
                }
            }, $destroy: function () {
                if (!this.$$destroyed) {
                    var a = this.$parent;
                    this.$broadcast("$destroy");
                    this.$$destroyed = !0;
                    if (this !== q) {
                        for (var b in this.$$listenerCount)m(this, this.$$listenerCount[b], b);
                        a.$$childHead == this &&
                        (a.$$childHead = this.$$nextSibling);
                        a.$$childTail == this && (a.$$childTail = this.$$prevSibling);
                        this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);
                        this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
                        this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = x;
                        this.$on = this.$watch = this.$watchGroup = function () {
                            return x
                        };
                        this.$$listeners = {};
                        this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers =
                            null
                    }
                }
            }, $eval: function (a, b) {
                return g(a)(this, b)
            }, $evalAsync: function (a) {
                q.$$phase || N.length || h.defer(function () {
                    N.length && q.$digest()
                });
                N.push({scope: this, expression: a})
            }, $$postDigest: function (a) {
                n.push(a)
            }, $apply: function (a) {
                try {
                    return l("$apply"), this.$eval(a)
                } catch (b) {
                    f(b)
                } finally {
                    q.$$phase = null;
                    try {
                        q.$digest()
                    } catch (c) {
                        throw f(c), c;
                    }
                }
            }, $applyAsync: function (a) {
                function b() {
                    c.$eval(a)
                }

                var c = this;
                a && v.push(b);
                t()
            }, $on: function (a, b) {
                var c = this.$$listeners[a];
                c || (this.$$listeners[a] = c = []);
                c.push(b);
                var d = this;
                do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
                var e = this;
                return function () {
                    var d = c.indexOf(b);
                    -1 !== d && (c[d] = null, m(e, 1, a))
                }
            }, $emit: function (a, b) {
                var c = [], d, e = this, g = !1, h = {name: a, targetScope: e, stopPropagation: function () {
                    g = !0
                }, preventDefault: function () {
                    h.defaultPrevented = !0
                }, defaultPrevented: !1}, k = Xa([h], arguments, 1), l, m;
                do {
                    d = e.$$listeners[a] || c;
                    h.currentScope = e;
                    l = 0;
                    for (m = d.length; l < m; l++)if (d[l])try {
                        d[l].apply(null, k)
                    } catch (p) {
                        f(p)
                    } else d.splice(l,
                        1), l--, m--;
                    if (g)return h.currentScope = null, h;
                    e = e.$parent
                } while (e);
                h.currentScope = null;
                return h
            }, $broadcast: function (a, b) {
                var c = this, d = this, e = {name: a, targetScope: this, preventDefault: function () {
                    e.defaultPrevented = !0
                }, defaultPrevented: !1};
                if (!this.$$listenerCount[a])return e;
                for (var g = Xa([e], arguments, 1), h, k; c = d;) {
                    e.currentScope = c;
                    d = c.$$listeners[a] || [];
                    h = 0;
                    for (k = d.length; h < k; h++)if (d[h])try {
                        d[h].apply(null, g)
                    } catch (l) {
                        f(l)
                    } else d.splice(h, 1), h--, k--;
                    if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this &&
                        c.$$nextSibling))for (; c !== this && !(d = c.$$nextSibling);)c = c.$parent
                }
                e.currentScope = null;
                return e
            }};
            var q = new k, N = q.$$asyncQueue = [], n = q.$$postDigestQueue = [], v = q.$$applyAsyncQueue = [];
            return q
        }]
    }

    function Pd() {
        var b = /^\s*(https?|ftp|mailto|tel|file):/, a = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function (a) {
            return y(a) ? (b = a, this) : b
        };
        this.imgSrcSanitizationWhitelist = function (b) {
            return y(b) ? (a = b, this) : a
        };
        this.$get = function () {
            return function (c, d) {
                var e = d ? a : b, f;
                f = Aa(c).href;
                return"" === f || f.match(e) ? c : "unsafe:" + f
            }
        }
    }

    function zf(b) {
        if ("self" === b)return b;
        if (I(b)) {
            if (-1 < b.indexOf("***"))throw Ba("iwcard", b);
            b = dd(b).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");
            return new RegExp("^" + b + "$")
        }
        if (lb(b))return new RegExp("^" + b.source + "$");
        throw Ba("imatcher");
    }

    function ed(b) {
        var a = [];
        y(b) && r(b, function (b) {
            a.push(zf(b))
        });
        return a
    }

    function Qe() {
        this.SCE_CONTEXTS = ma;
        var b = ["self"], a = [];
        this.resourceUrlWhitelist = function (a) {
            arguments.length && (b = ed(a));
            return b
        };
        this.resourceUrlBlacklist =
            function (b) {
                arguments.length && (a = ed(b));
                return a
            };
        this.$get = ["$injector", function (c) {
            function d(a, b) {
                return"self" === a ? Wc(b) : !!a.exec(b.href)
            }

            function e(a) {
                var b = function (a) {
                    this.$$unwrapTrustedValue = function () {
                        return a
                    }
                };
                a && (b.prototype = new a);
                b.prototype.valueOf = function () {
                    return this.$$unwrapTrustedValue()
                };
                b.prototype.toString = function () {
                    return this.$$unwrapTrustedValue().toString()
                };
                return b
            }

            var f = function (a) {
                throw Ba("unsafe");
            };
            c.has("$sanitize") && (f = c.get("$sanitize"));
            var g = e(), h = {};
            h[ma.HTML] =
                e(g);
            h[ma.CSS] = e(g);
            h[ma.URL] = e(g);
            h[ma.JS] = e(g);
            h[ma.RESOURCE_URL] = e(h[ma.URL]);
            return{trustAs: function (a, b) {
                var c = h.hasOwnProperty(a) ? h[a] : null;
                if (!c)throw Ba("icontext", a, b);
                if (null === b || b === u || "" === b)return b;
                if ("string" !== typeof b)throw Ba("itype", a);
                return new c(b)
            }, getTrusted: function (c, e) {
                if (null === e || e === u || "" === e)return e;
                var g = h.hasOwnProperty(c) ? h[c] : null;
                if (g && e instanceof g)return e.$$unwrapTrustedValue();
                if (c === ma.RESOURCE_URL) {
                    var g = Aa(e.toString()), p, s, t = !1;
                    p = 0;
                    for (s = b.length; p < s; p++)if (d(b[p],
                        g)) {
                        t = !0;
                        break
                    }
                    if (t)for (p = 0, s = a.length; p < s; p++)if (d(a[p], g)) {
                        t = !1;
                        break
                    }
                    if (t)return e;
                    throw Ba("insecurl", e.toString());
                }
                if (c === ma.HTML)return f(e);
                throw Ba("unsafe");
            }, valueOf: function (a) {
                return a instanceof g ? a.$$unwrapTrustedValue() : a
            }}
        }]
    }

    function Pe() {
        var b = !0;
        this.enabled = function (a) {
            arguments.length && (b = !!a);
            return b
        };
        this.$get = ["$parse", "$sceDelegate", function (a, c) {
            if (b && 8 > Ha)throw Ba("iequirks");
            var d = ua(ma);
            d.isEnabled = function () {
                return b
            };
            d.trustAs = c.trustAs;
            d.getTrusted = c.getTrusted;
            d.valueOf =
                c.valueOf;
            b || (d.trustAs = d.getTrusted = function (a, b) {
                return b
            }, d.valueOf = oa);
            d.parseAs = function (b, c) {
                var e = a(c);
                return e.literal && e.constant ? e : a(c, function (a) {
                    return d.getTrusted(b, a)
                })
            };
            var e = d.parseAs, f = d.getTrusted, g = d.trustAs;
            r(ma, function (a, b) {
                var c = R(b);
                d[bb("parse_as_" + c)] = function (b) {
                    return e(a, b)
                };
                d[bb("get_trusted_" + c)] = function (b) {
                    return f(a, b)
                };
                d[bb("trust_as_" + c)] = function (b) {
                    return g(a, b)
                }
            });
            return d
        }]
    }

    function Re() {
        this.$get = ["$window", "$document", function (b, a) {
            var c = {}, d = $((/android (\d+)/.exec(R((b.navigator ||
            {}).userAgent)) || [])[1]), e = /Boxee/i.test((b.navigator || {}).userAgent), f = a[0] || {}, g, h = /^(Moz|webkit|ms)(?=[A-Z])/, k = f.body && f.body.style, l = !1, m = !1;
            if (k) {
                for (var p in k)if (l = h.exec(p)) {
                    g = l[0];
                    g = g.substr(0, 1).toUpperCase() + g.substr(1);
                    break
                }
                g || (g = "WebkitOpacity"in k && "webkit");
                l = !!("transition"in k || g + "Transition"in k);
                m = !!("animation"in k || g + "Animation"in k);
                !d || l && m || (l = I(f.body.style.webkitTransition), m = I(f.body.style.webkitAnimation))
            }
            return{history: !(!b.history || !b.history.pushState || 4 > d || e), hasEvent: function (a) {
                if ("input" ==
                    a && 9 == Ha)return!1;
                if (G(c[a])) {
                    var b = f.createElement("div");
                    c[a] = "on" + a in b
                }
                return c[a]
            }, csp: $a(), vendorPrefix: g, transitions: l, animations: m, android: d}
        }]
    }

    function Te() {
        this.$get = ["$templateCache", "$http", "$q", function (b, a, c) {
            function d(e, f) {
                d.totalPendingRequests++;
                var g = a.defaults && a.defaults.transformResponse;
                if (D(g))for (var h = g, g = [], k = 0; k < h.length; ++k) {
                    var l = h[k];
                    l !== Yb && g.push(l)
                } else g === Yb && (g = null);
                return a.get(e, {cache: b, transformResponse: g}).then(function (a) {
                    a = a.data;
                    d.totalPendingRequests--;
                    b.put(e, a);
                    return a
                }, function () {
                    d.totalPendingRequests--;
                    if (!f)throw ka("tpload", e);
                    return c.reject()
                })
            }

            d.totalPendingRequests = 0;
            return d
        }]
    }

    function Ue() {
        this.$get = ["$rootScope", "$browser", "$location", function (b, a, c) {
            return{findBindings: function (a, b, c) {
                a = a.getElementsByClassName("ng-binding");
                var g = [];
                r(a, function (a) {
                    var d = ha.element(a).data("$binding");
                    d && r(d, function (d) {
                        c ? (new RegExp("(^|\\s)" + dd(b) + "(\\s|\\||$)")).test(d) && g.push(a) : -1 != d.indexOf(b) && g.push(a)
                    })
                });
                return g
            }, findModels: function (a, b, c) {
                for (var g = ["ng-", "data-ng-", "ng\\:"], h = 0; h < g.length; ++h) {
                    var k = a.querySelectorAll("[" + g[h] + "model" + (c ? "=" : "*=") + '"' + b + '"]');
                    if (k.length)return k
                }
            }, getLocation: function () {
                return c.url()
            }, setLocation: function (a) {
                a !== c.url() && (c.url(a), b.$digest())
            }, whenStable: function (b) {
                a.notifyWhenNoOutstandingRequests(b)
            }}
        }]
    }

    function Ve() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (b, a, c, d, e) {
            function f(f, k, l) {
                var m = y(l) && !l, p = (m ? d : c).defer(), s = p.promise;
                k = a.defer(function () {
                    try {
                        p.resolve(f())
                    } catch (a) {
                        p.reject(a),
                            e(a)
                    } finally {
                        delete g[s.$$timeoutId]
                    }
                    m || b.$apply()
                }, k);
                s.$$timeoutId = k;
                g[k] = p;
                return s
            }

            var g = {};
            f.cancel = function (b) {
                return b && b.$$timeoutId in g ? (g[b.$$timeoutId].reject("canceled"), delete g[b.$$timeoutId], a.defer.cancel(b.$$timeoutId)) : !1
            };
            return f
        }]
    }

    function Aa(b) {
        Ha && (Y.setAttribute("href", b), b = Y.href);
        Y.setAttribute("href", b);
        return{href: Y.href, protocol: Y.protocol ? Y.protocol.replace(/:$/, "") : "", host: Y.host, search: Y.search ? Y.search.replace(/^\?/, "") : "", hash: Y.hash ? Y.hash.replace(/^#/, "") : "", hostname: Y.hostname,
            port: Y.port, pathname: "/" === Y.pathname.charAt(0) ? Y.pathname : "/" + Y.pathname}
    }

    function Wc(b) {
        b = I(b) ? Aa(b) : b;
        return b.protocol === fd.protocol && b.host === fd.host
    }

    function We() {
        this.$get = ca(U)
    }

    function Bc(b) {
        function a(c, d) {
            if (K(c)) {
                var e = {};
                r(c, function (b, c) {
                    e[c] = a(c, b)
                });
                return e
            }
            return b.factory(c + "Filter", d)
        }

        this.register = a;
        this.$get = ["$injector", function (a) {
            return function (b) {
                return a.get(b + "Filter")
            }
        }];
        a("currency", gd);
        a("date", hd);
        a("filter", Af);
        a("json", Bf);
        a("limitTo", Cf);
        a("lowercase", Df);
        a("number",
            id);
        a("orderBy", jd);
        a("uppercase", Ef)
    }

    function Af() {
        return function (b, a, c) {
            if (!D(b))return b;
            var d = typeof c, e = [];
            e.check = function (a, b) {
                for (var c = 0; c < e.length; c++)if (!e[c](a, b))return!1;
                return!0
            };
            "function" !== d && (c = "boolean" === d && c ? function (a, b) {
                return ha.equals(a, b)
            } : function (a, b) {
                if (a && b && "object" === typeof a && "object" === typeof b) {
                    for (var d in a)if ("$" !== d.charAt(0) && Jb.call(a, d) && c(a[d], b[d]))return!0;
                    return!1
                }
                b = ("" + b).toLowerCase();
                return-1 < ("" + a).toLowerCase().indexOf(b)
            });
            var f = function (a, b) {
                if ("string" === typeof b && "!" === b.charAt(0))return!f(a, b.substr(1));
                switch (typeof a) {
                    case "boolean":
                    case "number":
                    case "string":
                        return c(a, b);
                    case "object":
                        switch (typeof b) {
                            case "object":
                                return c(a, b);
                            default:
                                for (var d in a)if ("$" !== d.charAt(0) && f(a[d], b))return!0
                        }
                        return!1;
                    case "array":
                        for (d = 0; d < a.length; d++)if (f(a[d], b))return!0;
                        return!1;
                    default:
                        return!1
                }
            };
            switch (typeof a) {
                case "boolean":
                case "number":
                case "string":
                    a = {$: a};
                case "object":
                    for (var g in a)(function (b) {
                        "undefined" !== typeof a[b] && e.push(function (c) {
                            return f("$" ==
                                b ? c : c && c[b], a[b])
                        })
                    })(g);
                    break;
                case "function":
                    e.push(a);
                    break;
                default:
                    return b
            }
            d = [];
            for (g = 0; g < b.length; g++) {
                var h = b[g];
                e.check(h, g) && d.push(h)
            }
            return d
        }
    }

    function gd(b) {
        var a = b.NUMBER_FORMATS;
        return function (b, d, e) {
            G(d) && (d = a.CURRENCY_SYM);
            G(e) && (e = a.PATTERNS[1].maxFrac);
            return null == b ? b : kd(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, e).replace(/\u00A4/g, d)
        }
    }

    function id(b) {
        var a = b.NUMBER_FORMATS;
        return function (b, d) {
            return null == b ? b : kd(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d)
        }
    }

    function kd(b, a, c, d, e) {
        if (!isFinite(b) || K(b))return"";
        var f = 0 > b;
        b = Math.abs(b);
        var g = b + "", h = "", k = [], l = !1;
        if (-1 !== g.indexOf("e")) {
            var m = g.match(/([\d\.]+)e(-?)(\d+)/);
            m && "-" == m[2] && m[3] > e + 1 ? (g = "0", b = 0) : (h = g, l = !0)
        }
        if (l)0 < e && -1 < b && 1 > b && (h = b.toFixed(e)); else {
            g = (g.split(ld)[1] || "").length;
            G(e) && (e = Math.min(Math.max(a.minFrac, g), a.maxFrac));
            b = +(Math.round(+(b.toString() + "e" + e)).toString() + "e" + -e);
            0 === b && (f = !1);
            b = ("" + b).split(ld);
            g = b[0];
            b = b[1] || "";
            var m = 0, p = a.lgSize, s = a.gSize;
            if (g.length >= p + s)for (m = g.length - p, l = 0; l < m; l++)0 ===
                (m - l) % s && 0 !== l && (h += c), h += g.charAt(l);
            for (l = m; l < g.length; l++)0 === (g.length - l) % p && 0 !== l && (h += c), h += g.charAt(l);
            for (; b.length < e;)b += "0";
            e && "0" !== e && (h += d + b.substr(0, e))
        }
        k.push(f ? a.negPre : a.posPre, h, f ? a.negSuf : a.posSuf);
        return k.join("")
    }

    function Cb(b, a, c) {
        var d = "";
        0 > b && (d = "-", b = -b);
        for (b = "" + b; b.length < a;)b = "0" + b;
        c && (b = b.substr(b.length - a));
        return d + b
    }

    function Z(b, a, c, d) {
        c = c || 0;
        return function (e) {
            e = e["get" + b]();
            if (0 < c || e > -c)e += c;
            0 === e && -12 == c && (e = 12);
            return Cb(e, a, d)
        }
    }

    function Db(b, a) {
        return function (c, d) {
            var e = c["get" + b](), f = rb(a ? "SHORT" + b : b);
            return d[f][e]
        }
    }

    function md(b) {
        var a = (new Date(b, 0, 1)).getDay();
        return new Date(b, 0, (4 >= a ? 5 : 12) - a)
    }

    function nd(b) {
        return function (a) {
            var c = md(a.getFullYear());
            a = +new Date(a.getFullYear(), a.getMonth(), a.getDate() + (4 - a.getDay())) - +c;
            a = 1 + Math.round(a / 6048E5);
            return Cb(a, b)
        }
    }

    function hd(b) {
        function a(a) {
            var b;
            if (b = a.match(c)) {
                a = new Date(0);
                var f = 0, g = 0, h = b[8] ? a.setUTCFullYear : a.setFullYear, k = b[8] ? a.setUTCHours : a.setHours;
                b[9] && (f = $(b[9] + b[10]), g = $(b[9] + b[11]));
                h.call(a, $(b[1]), $(b[2]) - 1, $(b[3]));
                f = $(b[4] || 0) - f;
                g = $(b[5] || 0) - g;
                h = $(b[6] || 0);
                b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));
                k.call(a, f, g, h, b)
            }
            return a
        }

        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function (c, e, f) {
            var g = "", h = [], k, l;
            e = e || "mediumDate";
            e = b.DATETIME_FORMATS[e] || e;
            I(c) && (c = Ff.test(c) ? $(c) : a(c));
            X(c) && (c = new Date(c));
            if (!fa(c))return c;
            for (; e;)(l = Gf.exec(e)) ? (h = Xa(h, l, 1), e = h.pop()) : (h.push(e), e = null);
            f && "UTC" === f && (c =
                new Date(c.getTime()), c.setMinutes(c.getMinutes() + c.getTimezoneOffset()));
            r(h, function (a) {
                k = Hf[a];
                g += k ? k(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            });
            return g
        }
    }

    function Bf() {
        return function (b) {
            return Za(b, !0)
        }
    }

    function Cf() {
        return function (b, a) {
            X(b) && (b = b.toString());
            if (!D(b) && !I(b))return b;
            a = Infinity === Math.abs(Number(a)) ? Number(a) : $(a);
            if (I(b))return a ? 0 <= a ? b.slice(0, a) : b.slice(a, b.length) : "";
            var c = [], d, e;
            a > b.length ? a = b.length : a < -b.length && (a = -b.length);
            0 < a ? (d = 0, e = a) : (d =
                b.length + a, e = b.length);
            for (; d < e; d++)c.push(b[d]);
            return c
        }
    }

    function jd(b) {
        return function (a, c, d) {
            function e(a, b) {
                return b ? function (b, c) {
                    return a(c, b)
                } : a
            }

            function f(a, b) {
                var c = typeof a, d = typeof b;
                return c == d ? (fa(a) && fa(b) && (a = a.valueOf(), b = b.valueOf()), "string" == c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : a < b ? -1 : 1) : c < d ? -1 : 1
            }

            if (!Ra(a))return a;
            c = D(c) ? c : [c];
            0 === c.length && (c = ["+"]);
            c = c.map(function (a) {
                var c = !1, d = a || oa;
                if (I(a)) {
                    if ("+" == a.charAt(0) || "-" == a.charAt(0))c = "-" == a.charAt(0), a = a.substring(1);
                    if ("" === a)return e(function (a, b) {
                        return f(a, b)
                    }, c);
                    d = b(a);
                    if (d.constant) {
                        var l = d();
                        return e(function (a, b) {
                            return f(a[l], b[l])
                        }, c)
                    }
                }
                return e(function (a, b) {
                    return f(d(a), d(b))
                }, c)
            });
            return Ya.call(a).sort(e(function (a, b) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d](a, b);
                    if (0 !== e)return e
                }
                return 0
            }, d))
        }
    }

    function Ia(b) {
        F(b) && (b = {link: b});
        b.restrict = b.restrict || "AC";
        return ca(b)
    }

    function od(b, a, c, d, e) {
        var f = this, g = [], h = f.$$parentForm = b.parent().controller("form") || Eb;
        f.$error = {};
        f.$$success = {};
        f.$pending = u;
        f.$name = e(a.name || a.ngForm || "")(c);
        f.$dirty = !1;
        f.$pristine = !0;
        f.$valid = !0;
        f.$invalid = !1;
        f.$submitted = !1;
        h.$addControl(f);
        f.$rollbackViewValue = function () {
            r(g, function (a) {
                a.$rollbackViewValue()
            })
        };
        f.$commitViewValue = function () {
            r(g, function (a) {
                a.$commitViewValue()
            })
        };
        f.$addControl = function (a) {
            La(a.$name, "input");
            g.push(a);
            a.$name && (f[a.$name] = a)
        };
        f.$$renameControl = function (a, b) {
            var c = a.$name;
            f[c] === a && delete f[c];
            f[b] = a;
            a.$name = b
        };
        f.$removeControl = function (a) {
            a.$name && f[a.$name] === a && delete f[a.$name];
            r(f.$pending, function (b, c) {
                f.$setValidity(c, null, a)
            });
            r(f.$error, function (b, c) {
                f.$setValidity(c, null, a)
            });
            Va(g, a)
        };
        pd({ctrl: this, $element: b, set: function (a, b, c) {
            var d = a[b];
            d ? -1 === d.indexOf(c) && d.push(c) : a[b] = [c]
        }, unset: function (a, b, c) {
            var d = a[b];
            d && (Va(d, c), 0 === d.length && delete a[b])
        }, parentForm: h, $animate: d});
        f.$setDirty = function () {
            d.removeClass(b, Qa);
            d.addClass(b, Fb);
            f.$dirty = !0;
            f.$pristine = !1;
            h.$setDirty()
        };
        f.$setPristine = function () {
            d.setClass(b, Qa, Fb + " ng-submitted");
            f.$dirty = !1;
            f.$pristine = !0;
            f.$submitted = !1;
            r(g, function (a) {
                a.$setPristine()
            })
        };
        f.$setUntouched = function () {
            r(g, function (a) {
                a.$setUntouched()
            })
        };
        f.$setSubmitted = function () {
            d.addClass(b, "ng-submitted");
            f.$submitted = !0;
            h.$setSubmitted()
        }
    }

    function hc(b) {
        b.$formatters.push(function (a) {
            return b.$isEmpty(a) ? a : a.toString()
        })
    }

    function gb(b, a, c, d, e, f) {
        var g = a[0].placeholder, h = {}, k = R(a[0].type);
        if (!e.android) {
            var l = !1;
            a.on("compositionstart", function (a) {
                l = !0
            });
            a.on("compositionend", function () {
                l = !1;
                m()
            })
        }
        var m = function (b) {
            if (!l) {
                var e =
                    a.val(), f = b && b.type;
                Ha && "input" === (b || h).type && a[0].placeholder !== g ? g = a[0].placeholder : ("password" === k || c.ngTrim && "false" === c.ngTrim || (e = P(e)), (d.$viewValue !== e || "" === e && d.$$hasNativeValidators) && d.$setViewValue(e, f))
            }
        };
        if (e.hasEvent("input"))a.on("input", m); else {
            var p, s = function (a) {
                p || (p = f.defer(function () {
                    m(a);
                    p = null
                }))
            };
            a.on("keydown", function (a) {
                var b = a.keyCode;
                91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || s(a)
            });
            if (e.hasEvent("paste"))a.on("paste cut", s)
        }
        a.on("change", m);
        d.$render = function () {
            a.val(d.$isEmpty(d.$viewValue) ?
                "" : d.$viewValue)
        }
    }

    function Gb(b, a) {
        return function (c, d) {
            var e, f;
            if (fa(c))return c;
            if (I(c)) {
                '"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1));
                if (If.test(c))return new Date(c);
                b.lastIndex = 0;
                if (e = b.exec(c))return e.shift(), f = d ? {yyyy: d.getFullYear(), MM: d.getMonth() + 1, dd: d.getDate(), HH: d.getHours(), mm: d.getMinutes(), ss: d.getSeconds(), sss: d.getMilliseconds() / 1E3} : {yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0}, r(e, function (b, c) {
                    c < a.length && (f[a[c]] = +b)
                }), new Date(f.yyyy, f.MM - 1, f.dd,
                    f.HH, f.mm, f.ss || 0, 1E3 * f.sss || 0)
            }
            return NaN
        }
    }

    function hb(b, a, c, d) {
        return function (e, f, g, h, k, l, m) {
            function p(a) {
                return a && !(a.getTime && a.getTime() !== a.getTime())
            }

            function s(a) {
                return y(a) ? fa(a) ? a : c(a) : u
            }

            qd(e, f, g, h);
            gb(e, f, g, h, k, l);
            var t = h && h.$options && h.$options.timezone, q;
            h.$$parserName = b;
            h.$parsers.push(function (b) {
                return h.$isEmpty(b) ? null : a.test(b) ? (b = c(b, q), "UTC" === t && b.setMinutes(b.getMinutes() - b.getTimezoneOffset()), b) : u
            });
            h.$formatters.push(function (a) {
                if (a && !fa(a))throw Hb("datefmt", a);
                if (p(a)) {
                    if ((q =
                        a) && "UTC" === t) {
                        var b = 6E4 * q.getTimezoneOffset();
                        q = new Date(q.getTime() + b)
                    }
                    return m("date")(a, d, t)
                }
                q = null;
                return""
            });
            if (y(g.min) || g.ngMin) {
                var r;
                h.$validators.min = function (a) {
                    return!p(a) || G(r) || c(a) >= r
                };
                g.$observe("min", function (a) {
                    r = s(a);
                    h.$validate()
                })
            }
            if (y(g.max) || g.ngMax) {
                var n;
                h.$validators.max = function (a) {
                    return!p(a) || G(n) || c(a) <= n
                };
                g.$observe("max", function (a) {
                    n = s(a);
                    h.$validate()
                })
            }
        }
    }

    function qd(b, a, c, d) {
        (d.$$hasNativeValidators = K(a[0].validity)) && d.$parsers.push(function (b) {
            var c = a.prop("validity") ||
            {};
            return c.badInput && !c.typeMismatch ? u : b
        })
    }

    function rd(b, a, c, d, e) {
        if (y(d)) {
            b = b(d);
            if (!b.constant)throw z("ngModel")("constexpr", c, d);
            return b(a)
        }
        return e
    }

    function pd(b) {
        function a(a, b) {
            b && !f[a] ? (l.addClass(e, a), f[a] = !0) : !b && f[a] && (l.removeClass(e, a), f[a] = !1)
        }

        function c(b, c) {
            b = b ? "-" + Mb(b, "-") : "";
            a(ib + b, !0 === c);
            a(sd + b, !1 === c)
        }

        var d = b.ctrl, e = b.$element, f = {}, g = b.set, h = b.unset, k = b.parentForm, l = b.$animate;
        f[sd] = !(f[ib] = e.hasClass(ib));
        d.$setValidity = function (b, e, f) {
            e === u ? (d.$pending || (d.$pending = {}), g(d.$pending,
                b, f)) : (d.$pending && h(d.$pending, b, f), td(d.$pending) && (d.$pending = u));
            Ua(e) ? e ? (h(d.$error, b, f), g(d.$$success, b, f)) : (g(d.$error, b, f), h(d.$$success, b, f)) : (h(d.$error, b, f), h(d.$$success, b, f));
            d.$pending ? (a(ud, !0), d.$valid = d.$invalid = u, c("", null)) : (a(ud, !1), d.$valid = td(d.$error), d.$invalid = !d.$valid, c("", d.$valid));
            e = d.$pending && d.$pending[b] ? u : d.$error[b] ? !1 : d.$$success[b] ? !0 : null;
            c(b, e);
            k.$setValidity(b, e, d)
        }
    }

    function td(b) {
        if (b)for (var a in b)return!1;
        return!0
    }

    function ic(b, a) {
        b = "ngClass" + b;
        return["$animate",
            function (c) {
                function d(a, b) {
                    var c = [], d = 0;
                    a:for (; d < a.length; d++) {
                        for (var e = a[d], m = 0; m < b.length; m++)if (e == b[m])continue a;
                        c.push(e)
                    }
                    return c
                }

                function e(a) {
                    if (!D(a)) {
                        if (I(a))return a.split(" ");
                        if (K(a)) {
                            var b = [];
                            r(a, function (a, c) {
                                a && (b = b.concat(c.split(" ")))
                            });
                            return b
                        }
                    }
                    return a
                }

                return{restrict: "AC", link: function (f, g, h) {
                    function k(a, b) {
                        var c = g.data("$classCounts") || {}, d = [];
                        r(a, function (a) {
                            if (0 < b || c[a])c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a)
                        });
                        g.data("$classCounts", c);
                        return d.join(" ")
                    }

                    function l(b) {
                        if (!0 ===
                            a || f.$index % 2 === a) {
                            var l = e(b || []);
                            if (!m) {
                                var t = k(l, 1);
                                h.$addClass(t)
                            } else if (!pa(b, m)) {
                                var q = e(m), t = d(l, q), l = d(q, l), t = k(t, 1), l = k(l, -1);
                                t && t.length && c.addClass(g, t);
                                l && l.length && c.removeClass(g, l)
                            }
                        }
                        m = ua(b)
                    }

                    var m;
                    f.$watch(h[b], l, !0);
                    h.$observe("class", function (a) {
                        l(f.$eval(h[b]))
                    });
                    "ngClass" !== b && f.$watch("$index", function (c, d) {
                        var g = c & 1;
                        if (g !== (d & 1)) {
                            var l = e(f.$eval(h[b]));
                            g === a ? (g = k(l, 1), h.$addClass(g)) : (g = k(l, -1), h.$removeClass(g))
                        }
                    })
                }}
            }]
    }

    var Jf = /^\/(.+)\/([a-z]*)$/, R = function (b) {
        return I(b) ? b.toLowerCase() :
            b
    }, Jb = Object.prototype.hasOwnProperty, rb = function (b) {
        return I(b) ? b.toUpperCase() : b
    }, Ha, A, qa, Ya = [].slice, of = [].splice, Kf = [].push, Ja = Object.prototype.toString, Wa = z("ng"), ha = U.angular || (U.angular = {}), ab, kb = 0;
    Ha = V.documentMode;
    x.$inject = [];
    oa.$inject = [];
    var D = Array.isArray, P = function (b) {
        return I(b) ? b.trim() : b
    }, dd = function (b) {
        return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    }, $a = function () {
        if (y($a.isActive_))return $a.isActive_;
        var b = !(!V.querySelector("[ng-csp]") && !V.querySelector("[data-ng-csp]"));
        if (!b)try {
            new Function("")
        } catch (a) {
            b = !0
        }
        return $a.isActive_ = b
    }, ob = ["ng-", "data-ng-", "ng:", "x-ng-"], Jd = /[A-Z]/g, sc = !1, Nb, na = 1, mb = 3, Nd = {full: "1.3.4", major: 1, minor: 3, dot: 4, codeName: "highfalutin-petroglyph"};
    S.expando = "ng339";
    var wb = S.cache = {}, df = 1;
    S._data = function (b) {
        return this.cache[b[this.expando]] || {}
    };
    var Ze = /([\:\-\_]+(.))/g, $e = /^moz([A-Z])/, Lf = {mouseleave: "mouseout", mouseenter: "mouseover"}, Qb = z("jqLite"), cf = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Pb = /<|&#?\w+;/, af = /<([\w:]+)/, bf = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ja = {option: [1, '<select multiple="multiple">', "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""]};
    ja.optgroup = ja.option;
    ja.tbody = ja.tfoot = ja.colgroup = ja.caption = ja.thead;
    ja.th = ja.td;
    var Ka = S.prototype = {ready: function (b) {
        function a() {
            c || (c = !0, b())
        }

        var c = !1;
        "complete" === V.readyState ? setTimeout(a) : (this.on("DOMContentLoaded", a), S(U).on("load", a))
    },
        toString: function () {
            var b = [];
            r(this, function (a) {
                b.push("" + a)
            });
            return"[" + b.join(", ") + "]"
        }, eq: function (b) {
            return 0 <= b ? A(this[b]) : A(this[this.length + b])
        }, length: 0, push: Kf, sort: [].sort, splice: [].splice}, yb = {};
    r("multiple selected checked disabled readOnly required open".split(" "), function (b) {
        yb[R(b)] = b
    });
    var Kc = {};
    r("input select option textarea button form details".split(" "), function (b) {
        Kc[b] = !0
    });
    var Lc = {ngMinlength: "minlength", ngMaxlength: "maxlength", ngMin: "min", ngMax: "max", ngPattern: "pattern"};
    r({data: Sb, removeData: ub}, function (b, a) {
        S[a] = b
    });
    r({data: Sb, inheritedData: xb, scope: function (b) {
        return A.data(b, "$scope") || xb(b.parentNode || b, ["$isolateScope", "$scope"])
    }, isolateScope: function (b) {
        return A.data(b, "$isolateScope") || A.data(b, "$isolateScopeNoTemplate")
    }, controller: Gc, injector: function (b) {
        return xb(b, "$injector")
    }, removeAttr: function (b, a) {
        b.removeAttribute(a)
    }, hasClass: Tb, css: function (b, a, c) {
        a = bb(a);
        if (y(c))b.style[a] = c; else return b.style[a]
    }, attr: function (b, a, c) {
        var d = R(a);
        if (yb[d])if (y(c))c ?
            (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d)); else return b[a] || (b.attributes.getNamedItem(a) || x).specified ? d : u; else if (y(c))b.setAttribute(a, c); else if (b.getAttribute)return b = b.getAttribute(a, 2), null === b ? u : b
    }, prop: function (b, a, c) {
        if (y(c))b[a] = c; else return b[a]
    }, text: function () {
        function b(a, b) {
            if (G(b)) {
                var d = a.nodeType;
                return d === na || d === mb ? a.textContent : ""
            }
            a.textContent = b
        }

        b.$dv = "";
        return b
    }(), val: function (b, a) {
        if (G(a)) {
            if (b.multiple && "select" === ta(b)) {
                var c = [];
                r(b.options, function (a) {
                    a.selected &&
                    c.push(a.value || a.text)
                });
                return 0 === c.length ? null : c
            }
            return b.value
        }
        b.value = a
    }, html: function (b, a) {
        if (G(a))return b.innerHTML;
        tb(b, !0);
        b.innerHTML = a
    }, empty: Hc}, function (b, a) {
        S.prototype[a] = function (a, d) {
            var e, f, g = this.length;
            if (b !== Hc && (2 == b.length && b !== Tb && b !== Gc ? a : d) === u) {
                if (K(a)) {
                    for (e = 0; e < g; e++)if (b === Sb)b(this[e], a); else for (f in a)b(this[e], f, a[f]);
                    return this
                }
                e = b.$dv;
                g = e === u ? Math.min(g, 1) : g;
                for (f = 0; f < g; f++) {
                    var h = b(this[f], a, d);
                    e = e ? e + h : h
                }
                return e
            }
            for (e = 0; e < g; e++)b(this[e], a, d);
            return this
        }
    });
    r({removeData: ub, on: function a(c, d, e, f) {
        if (y(f))throw Qb("onargs");
        if (Cc(c)) {
            var g = vb(c, !0);
            f = g.events;
            var h = g.handle;
            h || (h = g.handle = gf(c, f));
            for (var g = 0 <= d.indexOf(" ") ? d.split(" ") : [d], k = g.length; k--;) {
                d = g[k];
                var l = f[d];
                l || (f[d] = [], "mouseenter" === d || "mouseleave" === d ? a(c, Lf[d], function (a) {
                    var c = a.relatedTarget;
                    c && (c === this || this.contains(c)) || h(a, d)
                }) : "$destroy" !== d && c.addEventListener(d, h, !1), l = f[d]);
                l.push(e)
            }
        }
    }, off: Fc, one: function (a, c, d) {
        a = A(a);
        a.on(c, function f() {
            a.off(c, d);
            a.off(c, f)
        });
        a.on(c,
            d)
    }, replaceWith: function (a, c) {
        var d, e = a.parentNode;
        tb(a);
        r(new S(c), function (c) {
            d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);
            d = c
        })
    }, children: function (a) {
        var c = [];
        r(a.childNodes, function (a) {
            a.nodeType === na && c.push(a)
        });
        return c
    }, contents: function (a) {
        return a.contentDocument || a.childNodes || []
    }, append: function (a, c) {
        var d = a.nodeType;
        if (d === na || 11 === d) {
            c = new S(c);
            for (var d = 0, e = c.length; d < e; d++)a.appendChild(c[d])
        }
    }, prepend: function (a, c) {
        if (a.nodeType === na) {
            var d = a.firstChild;
            r(new S(c), function (c) {
                a.insertBefore(c,
                    d)
            })
        }
    }, wrap: function (a, c) {
        c = A(c).eq(0).clone()[0];
        var d = a.parentNode;
        d && d.replaceChild(c, a);
        c.appendChild(a)
    }, remove: Ic, detach: function (a) {
        Ic(a, !0)
    }, after: function (a, c) {
        var d = a, e = a.parentNode;
        c = new S(c);
        for (var f = 0, g = c.length; f < g; f++) {
            var h = c[f];
            e.insertBefore(h, d.nextSibling);
            d = h
        }
    }, addClass: Vb, removeClass: Ub, toggleClass: function (a, c, d) {
        c && r(c.split(" "), function (c) {
            var f = d;
            G(f) && (f = !Tb(a, c));
            (f ? Vb : Ub)(a, c)
        })
    }, parent: function (a) {
        return(a = a.parentNode) && 11 !== a.nodeType ? a : null
    }, next: function (a) {
        return a.nextElementSibling
    },
        find: function (a, c) {
            return a.getElementsByTagName ? a.getElementsByTagName(c) : []
        }, clone: Rb, triggerHandler: function (a, c, d) {
            var e, f, g = c.type || c, h = vb(a);
            if (h = (h = h && h.events) && h[g])e = {preventDefault: function () {
                this.defaultPrevented = !0
            }, isDefaultPrevented: function () {
                return!0 === this.defaultPrevented
            }, stopImmediatePropagation: function () {
                this.immediatePropagationStopped = !0
            }, isImmediatePropagationStopped: function () {
                return!0 === this.immediatePropagationStopped
            }, stopPropagation: x, type: g, target: a}, c.type && (e = C(e,
                c)), c = ua(h), f = d ? [e].concat(d) : [e], r(c, function (c) {
                e.isImmediatePropagationStopped() || c.apply(a, f)
            })
        }}, function (a, c) {
        S.prototype[c] = function (c, e, f) {
            for (var g, h = 0, k = this.length; h < k; h++)G(g) ? (g = a(this[h], c, e, f), y(g) && (g = A(g))) : Ec(g, a(this[h], c, e, f));
            return y(g) ? g : this
        };
        S.prototype.bind = S.prototype.on;
        S.prototype.unbind = S.prototype.off
    });
    cb.prototype = {put: function (a, c) {
        this[Ma(a, this.nextUid)] = c
    }, get: function (a) {
        return this[Ma(a, this.nextUid)]
    }, remove: function (a) {
        var c = this[a = Ma(a, this.nextUid)];
        delete this[a];
        return c
    }};
    var Nc = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, jf = /,/, kf = /^\s*(_?)(\S+?)\1\s*$/, Mc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, Ea = z("$injector");
    Lb.$$annotate = Wb;
    var Mf = z("$animate"), ze = ["$provide", function (a) {
        this.$$selectors = {};
        this.register = function (c, d) {
            var e = c + "-animation";
            if (c && "." != c.charAt(0))throw Mf("notcsel", c);
            this.$$selectors[c.substr(1)] = e;
            a.factory(e, d)
        };
        this.classNameFilter = function (a) {
            1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null);
            return this.$$classNameFilter
        };
        this.$get = ["$$q", "$$asyncCallback", "$rootScope", function (a, d, e) {
            function f(d) {
                var f, g = a.defer();
                g.promise.$$cancelFn = function () {
                    f && f()
                };
                e.$$postDigest(function () {
                    f = d(function () {
                        g.resolve()
                    })
                });
                return g.promise
            }

            function g(a, c) {
                var d = [], e = [], f = ia();
                r((a.attr("class") || "").split(/\s+/), function (a) {
                    f[a] = !0
                });
                r(c, function (a, c) {
                    var g = f[c];
                    !1 === a && g ? e.push(c) : !0 !== a || g || d.push(c)
                });
                return 0 < d.length + e.length && [d.length ? d : null, e.length ? e : null]
            }

            function h(a, c, d) {
                for (var e = 0, f = c.length; e < f; ++e)a[c[e]] = d
            }

            function k() {
                m ||
                (m = a.defer(), d(function () {
                    m.resolve();
                    m = null
                }));
                return m.promise
            }

            function l(a, c) {
                if (ha.isObject(c)) {
                    var d = C(c.from || {}, c.to || {});
                    a.css(d)
                }
            }

            var m;
            return{animate: function (a, c, d) {
                l(a, {from: c, to: d});
                return k()
            }, enter: function (a, c, d, e) {
                l(a, e);
                d ? d.after(a) : c.prepend(a);
                return k()
            }, leave: function (a, c) {
                a.remove();
                return k()
            }, move: function (a, c, d, e) {
                return this.enter(a, c, d, e)
            }, addClass: function (a, c, d) {
                return this.setClass(a, c, [], d)
            }, $$addClassImmediately: function (a, c, d) {
                a = A(a);
                c = I(c) ? c : D(c) ? c.join(" ") : "";
                r(a, function (a) {
                    Vb(a, c)
                });
                l(a, d);
                return k()
            }, removeClass: function (a, c, d) {
                return this.setClass(a, [], c, d)
            }, $$removeClassImmediately: function (a, c, d) {
                a = A(a);
                c = I(c) ? c : D(c) ? c.join(" ") : "";
                r(a, function (a) {
                    Ub(a, c)
                });
                l(a, d);
                return k()
            }, setClass: function (a, c, d, e) {
                var k = this, l = !1;
                a = A(a);
                var m = a.data("$$animateClasses");
                m ? e && m.options && (m.options = ha.extend(m.options || {}, e)) : (m = {classes: {}, options: e}, l = !0);
                e = m.classes;
                c = D(c) ? c : c.split(" ");
                d = D(d) ? d : d.split(" ");
                h(e, c, !0);
                h(e, d, !1);
                l && (m.promise = f(function (c) {
                    var d =
                        a.data("$$animateClasses");
                    a.removeData("$$animateClasses");
                    if (d) {
                        var e = g(a, d.classes);
                        e && k.$$setClassImmediately(a, e[0], e[1], d.options)
                    }
                    c()
                }), a.data("$$animateClasses", m));
                return m.promise
            }, $$setClassImmediately: function (a, c, d, e) {
                c && this.$$addClassImmediately(a, c);
                d && this.$$removeClassImmediately(a, d);
                l(a, e);
                return k()
            }, enabled: x, cancel: x}
        }]
    }], ka = z("$compile");
    uc.$inject = ["$provide", "$$sanitizeUriProvider"];
    var nf = /^((?:x|data)[\:\-_])/i, Sc = "application/json", Zb = {"Content-Type": Sc + ";charset=utf-8"},
        qf = /^\s*(\[|\{[^\{])/, rf = /[\}\]]\s*$/, pf = /^\)\]\}',?\n/, $b = z("$interpolate"), Nf = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, uf = {http: 80, https: 443, ftp: 21}, eb = z("$location"), Of = {$$html5: !1, $$replace: !1, absUrl: Bb("$$absUrl"), url: function (a) {
            if (G(a))return this.$$url;
            var c = Nf.exec(a);
            (c[1] || "" === a) && this.path(decodeURIComponent(c[1]));
            (c[2] || c[1] || "" === a) && this.search(c[3] || "");
            this.hash(c[5] || "");
            return this
        }, protocol: Bb("$$protocol"), host: Bb("$$host"), port: Bb("$$port"), path: $c("$$path", function (a) {
            a = null !== a ?
                a.toString() : "";
            return"/" == a.charAt(0) ? a : "/" + a
        }), search: function (a, c) {
            switch (arguments.length) {
                case 0:
                    return this.$$search;
                case 1:
                    if (I(a) || X(a))a = a.toString(), this.$$search = qc(a); else if (K(a))a = Ca(a, {}), r(a, function (c, e) {
                        null == c && delete a[e]
                    }), this.$$search = a; else throw eb("isrcharg");
                    break;
                default:
                    G(c) || null === c ? delete this.$$search[a] : this.$$search[a] = c
            }
            this.$$compose();
            return this
        }, hash: $c("$$hash", function (a) {
            return null !== a ? a.toString() : ""
        }), replace: function () {
            this.$$replace = !0;
            return this
        }};
    r([Zc, dc, cc], function (a) {
        a.prototype = Object.create(Of);
        a.prototype.state = function (c) {
            if (!arguments.length)return this.$$state;
            if (a !== cc || !this.$$html5)throw eb("nostate");
            this.$$state = G(c) ? null : c;
            return this
        }
    });
    var la = z("$parse"), Pf = Function.prototype.call, Qf = Function.prototype.apply, Rf = Function.prototype.bind, Ib = ia();
    r({"null": function () {
        return null
    }, "true": function () {
        return!0
    }, "false": function () {
        return!1
    }, undefined: function () {
    }}, function (a, c) {
        a.constant = a.literal = a.sharedGetter = !0;
        Ib[c] = a
    });
    Ib["this"] =
        function (a) {
            return a
        };
    Ib["this"].sharedGetter = !0;
    var jb = C(ia(), {"+": function (a, c, d, e) {
        d = d(a, c);
        e = e(a, c);
        return y(d) ? y(e) ? d + e : d : y(e) ? e : u
    }, "-": function (a, c, d, e) {
        d = d(a, c);
        e = e(a, c);
        return(y(d) ? d : 0) - (y(e) ? e : 0)
    }, "*": function (a, c, d, e) {
        return d(a, c) * e(a, c)
    }, "/": function (a, c, d, e) {
        return d(a, c) / e(a, c)
    }, "%": function (a, c, d, e) {
        return d(a, c) % e(a, c)
    }, "===": function (a, c, d, e) {
        return d(a, c) === e(a, c)
    }, "!==": function (a, c, d, e) {
        return d(a, c) !== e(a, c)
    }, "==": function (a, c, d, e) {
        return d(a, c) == e(a, c)
    }, "!=": function (a, c, d, e) {
        return d(a,
            c) != e(a, c)
    }, "<": function (a, c, d, e) {
        return d(a, c) < e(a, c)
    }, ">": function (a, c, d, e) {
        return d(a, c) > e(a, c)
    }, "<=": function (a, c, d, e) {
        return d(a, c) <= e(a, c)
    }, ">=": function (a, c, d, e) {
        return d(a, c) >= e(a, c)
    }, "&&": function (a, c, d, e) {
        return d(a, c) && e(a, c)
    }, "||": function (a, c, d, e) {
        return d(a, c) || e(a, c)
    }, "!": function (a, c, d) {
        return!d(a, c)
    }, "=": !0, "|": !0}), Sf = {n: "\n", f: "\f", r: "\r", t: "\t", v: "\v", "'": "'", '"': '"'}, gc = function (a) {
        this.options = a
    };
    gc.prototype = {constructor: gc, lex: function (a) {
        this.text = a;
        this.index = 0;
        for (this.tokens =
                 []; this.index < this.text.length;)if (a = this.text.charAt(this.index), '"' === a || "'" === a)this.readString(a); else if (this.isNumber(a) || "." === a && this.isNumber(this.peek()))this.readNumber(); else if (this.isIdent(a))this.readIdent(); else if (this.is(a, "(){}[].,;:?"))this.tokens.push({index: this.index, text: a}), this.index++; else if (this.isWhitespace(a))this.index++; else {
            var c = a + this.peek(), d = c + this.peek(2), e = jb[c], f = jb[d];
            jb[a] || e || f ? (a = f ? d : e ? c : a, this.tokens.push({index: this.index, text: a, operator: !0}), this.index +=
                a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1)
        }
        return this.tokens
    }, is: function (a, c) {
        return-1 !== c.indexOf(a)
    }, peek: function (a) {
        a = a || 1;
        return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1
    }, isNumber: function (a) {
        return"0" <= a && "9" >= a && "string" === typeof a
    }, isWhitespace: function (a) {
        return" " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || "\u00a0" === a
    }, isIdent: function (a) {
        return"a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a
    }, isExpOperator: function (a) {
        return"-" ===
            a || "+" === a || this.isNumber(a)
    }, throwError: function (a, c, d) {
        d = d || this.index;
        c = y(c) ? "s " + c + "-" + this.index + " [" + this.text.substring(c, d) + "]" : " " + d;
        throw la("lexerr", a, c, this.text);
    }, readNumber: function () {
        for (var a = "", c = this.index; this.index < this.text.length;) {
            var d = R(this.text.charAt(this.index));
            if ("." == d || this.isNumber(d))a += d; else {
                var e = this.peek();
                if ("e" == d && this.isExpOperator(e))a += d; else if (this.isExpOperator(d) && e && this.isNumber(e) && "e" == a.charAt(a.length - 1))a += d; else if (!this.isExpOperator(d) ||
                    e && this.isNumber(e) || "e" != a.charAt(a.length - 1))break; else this.throwError("Invalid exponent")
            }
            this.index++
        }
        this.tokens.push({index: c, text: a, constant: !0, value: Number(a)})
    }, readIdent: function () {
        for (var a = this.index; this.index < this.text.length;) {
            var c = this.text.charAt(this.index);
            if (!this.isIdent(c) && !this.isNumber(c))break;
            this.index++
        }
        this.tokens.push({index: a, text: this.text.slice(a, this.index), identifier: !0})
    }, readString: function (a) {
        var c = this.index;
        this.index++;
        for (var d = "", e = a, f = !1; this.index < this.text.length;) {
            var g =
                this.text.charAt(this.index), e = e + g;
            if (f)"u" === g ? (f = this.text.substring(this.index + 1, this.index + 5), f.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + f + "]"), this.index += 4, d += String.fromCharCode(parseInt(f, 16))) : d += Sf[g] || g, f = !1; else if ("\\" === g)f = !0; else {
                if (g === a) {
                    this.index++;
                    this.tokens.push({index: c, text: e, constant: !0, value: d});
                    return
                }
                d += g
            }
            this.index++
        }
        this.throwError("Unterminated quote", c)
    }};
    var fb = function (a, c, d) {
        this.lexer = a;
        this.$filter = c;
        this.options = d
    };
    fb.ZERO = C(function () {
            return 0
        },
        {sharedGetter: !0, constant: !0});
    fb.prototype = {constructor: fb, parse: function (a) {
        this.text = a;
        this.tokens = this.lexer.lex(a);
        a = this.statements();
        0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
        a.literal = !!a.literal;
        a.constant = !!a.constant;
        return a
    }, primary: function () {
        var a;
        this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a =
            this.constant() : this.throwError("not a primary expression", this.peek());
        for (var c, d; c = this.expect("(", "[", ".");)"(" === c.text ? (a = this.functionCall(a, d), d = null) : "[" === c.text ? (d = a, a = this.objectIndex(a)) : "." === c.text ? (d = a, a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
        return a
    }, throwError: function (a, c) {
        throw la("syntax", c.text, a, c.index + 1, this.text, this.text.substring(c.index));
    }, peekToken: function () {
        if (0 === this.tokens.length)throw la("ueoe", this.text);
        return this.tokens[0]
    }, peek: function (a, c, d, e) {
        return this.peekAhead(0, a, c, d, e)
    }, peekAhead: function (a, c, d, e, f) {
        if (this.tokens.length > a) {
            a = this.tokens[a];
            var g = a.text;
            if (g === c || g === d || g === e || g === f || !(c || d || e || f))return a
        }
        return!1
    }, expect: function (a, c, d, e) {
        return(a = this.peek(a, c, d, e)) ? (this.tokens.shift(), a) : !1
    }, consume: function (a) {
        if (0 === this.tokens.length)throw la("ueoe", this.text);
        var c = this.expect(a);
        c || this.throwError("is unexpected, expecting [" + a + "]", this.peek());
        return c
    }, unaryFn: function (a, c) {
        var d = jb[a];
        return C(function (a, f) {
            return d(a,
                f, c)
        }, {constant: c.constant, inputs: [c]})
    }, binaryFn: function (a, c, d, e) {
        var f = jb[c];
        return C(function (c, e) {
            return f(c, e, a, d)
        }, {constant: a.constant && d.constant, inputs: !e && [a, d]})
    }, identifier: function () {
        for (var a = this.consume().text; this.peek(".") && this.peekAhead(1).identifier && !this.peekAhead(2, "(");)a += this.consume().text + this.consume().text;
        return Ib[a] || bd(a, this.options, this.text)
    }, constant: function () {
        var a = this.consume().value;
        return C(function () {
            return a
        }, {constant: !0, literal: !0})
    }, statements: function () {
        for (var a =
            []; ;)if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), !this.expect(";"))return 1 === a.length ? a[0] : function (c, d) {
            for (var e, f = 0, g = a.length; f < g; f++)e = a[f](c, d);
            return e
        }
    }, filterChain: function () {
        for (var a = this.expression(); this.expect("|");)a = this.filter(a);
        return a
    }, filter: function (a) {
        var c = this.$filter(this.consume().text), d, e;
        if (this.peek(":"))for (d = [], e = []; this.expect(":");)d.push(this.expression());
        var f = [a].concat(d || []);
        return C(function (f, h) {
            var k = a(f, h);
            if (e) {
                e[0] =
                    k;
                for (k = d.length; k--;)e[k + 1] = d[k](f, h);
                return c.apply(u, e)
            }
            return c(k)
        }, {constant: !c.$stateful && f.every(ec), inputs: !c.$stateful && f})
    }, expression: function () {
        return this.assignment()
    }, assignment: function () {
        var a = this.ternary(), c, d;
        return(d = this.expect("=")) ? (a.assign || this.throwError("implies assignment but [" + this.text.substring(0, d.index) + "] can not be assigned to", d), c = this.ternary(), C(function (d, f) {
            return a.assign(d, c(d, f), f)
        }, {inputs: [a, c]})) : a
    }, ternary: function () {
        var a = this.logicalOR(), c;
        if (this.expect("?") &&
            (c = this.assignment(), this.consume(":"))) {
            var d = this.assignment();
            return C(function (e, f) {
                return a(e, f) ? c(e, f) : d(e, f)
            }, {constant: a.constant && c.constant && d.constant})
        }
        return a
    }, logicalOR: function () {
        for (var a = this.logicalAND(), c; c = this.expect("||");)a = this.binaryFn(a, c.text, this.logicalAND(), !0);
        return a
    }, logicalAND: function () {
        var a = this.equality(), c;
        if (c = this.expect("&&"))a = this.binaryFn(a, c.text, this.logicalAND(), !0);
        return a
    }, equality: function () {
        var a = this.relational(), c;
        if (c = this.expect("==", "!=",
            "===", "!=="))a = this.binaryFn(a, c.text, this.equality());
        return a
    }, relational: function () {
        var a = this.additive(), c;
        if (c = this.expect("<", ">", "<=", ">="))a = this.binaryFn(a, c.text, this.relational());
        return a
    }, additive: function () {
        for (var a = this.multiplicative(), c; c = this.expect("+", "-");)a = this.binaryFn(a, c.text, this.multiplicative());
        return a
    }, multiplicative: function () {
        for (var a = this.unary(), c; c = this.expect("*", "/", "%");)a = this.binaryFn(a, c.text, this.unary());
        return a
    }, unary: function () {
        var a;
        return this.expect("+") ?
            this.primary() : (a = this.expect("-")) ? this.binaryFn(fb.ZERO, a.text, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.text, this.unary()) : this.primary()
    }, fieldAccess: function (a) {
        var c = this.text, d = this.consume().text, e = bd(d, this.options, c);
        return C(function (c, d, h) {
            return e(h || a(c, d))
        }, {assign: function (e, g, h) {
            (h = a(e, h)) || a.assign(e, h = {});
            return Oa(h, d, g, c)
        }})
    }, objectIndex: function (a) {
        var c = this.text, d = this.expression();
        this.consume("]");
        return C(function (e, f) {
            var g = a(e, f), h = d(e, f);
            ra(h, c);
            return g ? sa(g[h],
                c) : u
        }, {assign: function (e, f, g) {
            var h = ra(d(e, g), c);
            (g = sa(a(e, g), c)) || a.assign(e, g = {});
            return g[h] = f
        }})
    }, functionCall: function (a, c) {
        var d = [];
        if (")" !== this.peekToken().text) {
            do d.push(this.expression()); while (this.expect(","))
        }
        this.consume(")");
        var e = this.text, f = d.length ? [] : null;
        return function (g, h) {
            var k = c ? c(g, h) : g, l = a(g, h, k) || x;
            if (f)for (var m = d.length; m--;)f[m] = sa(d[m](g, h), e);
            sa(k, e);
            if (l) {
                if (l.constructor === l)throw la("isecfn", e);
                if (l === Pf || l === Qf || l === Rf)throw la("isecff", e);
            }
            k = l.apply ? l.apply(k,
                f) : l(f[0], f[1], f[2], f[3], f[4]);
            return sa(k, e)
        }
    }, arrayDeclaration: function () {
        var a = [];
        if ("]" !== this.peekToken().text) {
            do {
                if (this.peek("]"))break;
                a.push(this.expression())
            } while (this.expect(","))
        }
        this.consume("]");
        return C(function (c, d) {
            for (var e = [], f = 0, g = a.length; f < g; f++)e.push(a[f](c, d));
            return e
        }, {literal: !0, constant: a.every(ec), inputs: a})
    }, object: function () {
        var a = [], c = [];
        if ("}" !== this.peekToken().text) {
            do {
                if (this.peek("}"))break;
                var d = this.consume();
                d.constant ? a.push(d.value) : d.identifier ? a.push(d.text) :
                    this.throwError("invalid key", d);
                this.consume(":");
                c.push(this.expression())
            } while (this.expect(","))
        }
        this.consume("}");
        return C(function (d, f) {
            for (var g = {}, h = 0, k = c.length; h < k; h++)g[a[h]] = c[h](d, f);
            return g
        }, {literal: !0, constant: c.every(ec), inputs: c})
    }};
    var xf = ia(), wf = ia(), yf = Object.prototype.valueOf, Ba = z("$sce"), ma = {HTML: "html", CSS: "css", URL: "url", RESOURCE_URL: "resourceUrl", JS: "js"}, ka = z("$compile"), Y = V.createElement("a"), fd = Aa(U.location.href);
    Bc.$inject = ["$provide"];
    gd.$inject = ["$locale"];
    id.$inject =
        ["$locale"];
    var ld = ".", Hf = {yyyy: Z("FullYear", 4), yy: Z("FullYear", 2, 0, !0), y: Z("FullYear", 1), MMMM: Db("Month"), MMM: Db("Month", !0), MM: Z("Month", 2, 1), M: Z("Month", 1, 1), dd: Z("Date", 2), d: Z("Date", 1), HH: Z("Hours", 2), H: Z("Hours", 1), hh: Z("Hours", 2, -12), h: Z("Hours", 1, -12), mm: Z("Minutes", 2), m: Z("Minutes", 1), ss: Z("Seconds", 2), s: Z("Seconds", 1), sss: Z("Milliseconds", 3), EEEE: Db("Day"), EEE: Db("Day", !0), a: function (a, c) {
        return 12 > a.getHours() ? c.AMPMS[0] : c.AMPMS[1]
    }, Z: function (a) {
        a = -1 * a.getTimezoneOffset();
        return a = (0 <=
            a ? "+" : "") + (Cb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Cb(Math.abs(a % 60), 2))
    }, ww: nd(2), w: nd(1)}, Gf = /((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/, Ff = /^\-?\d+$/;
    hd.$inject = ["$locale"];
    var Df = ca(R), Ef = ca(rb);
    jd.$inject = ["$parse"];
    var Qd = ca({restrict: "E", compile: function (a, c) {
        if (!c.href && !c.xlinkHref && !c.name)return function (a, c) {
            var f = "[object SVGAnimatedString]" === Ja.call(c.prop("href")) ? "xlink:href" : "href";
            c.on("click", function (a) {
                c.attr(f) || a.preventDefault()
            })
        }
    }}), sb =
    {};
    r(yb, function (a, c) {
        if ("multiple" != a) {
            var d = wa("ng-" + c);
            sb[d] = function () {
                return{restrict: "A", priority: 100, link: function (a, f, g) {
                    a.$watch(g[d], function (a) {
                        g.$set(c, !!a)
                    })
                }}
            }
        }
    });
    r(Lc, function (a, c) {
        sb[c] = function () {
            return{priority: 100, link: function (a, e, f) {
                if ("ngPattern" === c && "/" == f.ngPattern.charAt(0) && (e = f.ngPattern.match(Jf))) {
                    f.$set("ngPattern", new RegExp(e[1], e[2]));
                    return
                }
                a.$watch(f[c], function (a) {
                    f.$set(c, a)
                })
            }}
        }
    });
    r(["src", "srcset", "href"], function (a) {
        var c = wa("ng-" + a);
        sb[c] = function () {
            return{priority: 99,
                link: function (d, e, f) {
                    var g = a, h = a;
                    "href" === a && "[object SVGAnimatedString]" === Ja.call(e.prop("href")) && (h = "xlinkHref", f.$attr[h] = "xlink:href", g = null);
                    f.$observe(c, function (c) {
                        c ? (f.$set(h, c), Ha && g && e.prop(g, f[h])) : "href" === a && f.$set(h, null)
                    })
                }}
        }
    });
    var Eb = {$addControl: x, $$renameControl: function (a, c) {
        a.$name = c
    }, $removeControl: x, $setValidity: x, $setDirty: x, $setPristine: x, $setSubmitted: x};
    od.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var vd = function (a) {
            return["$timeout", function (c) {
                return{name: "form",
                    restrict: a ? "EAC" : "E", controller: od, compile: function (a) {
                        a.addClass(Qa).addClass(ib);
                        return{pre: function (a, d, g, h) {
                            if (!("action"in g)) {
                                var k = function (c) {
                                    a.$apply(function () {
                                        h.$commitViewValue();
                                        h.$setSubmitted()
                                    });
                                    c.preventDefault()
                                };
                                d[0].addEventListener("submit", k, !1);
                                d.on("$destroy", function () {
                                    c(function () {
                                        d[0].removeEventListener("submit", k, !1)
                                    }, 0, !1)
                                })
                            }
                            var l = h.$$parentForm, m = h.$name;
                            m && (Oa(a, m, h, m), g.$observe(g.name ? "name" : "ngForm", function (c) {
                                m !== c && (Oa(a, m, u, m), m = c, Oa(a, m, h, m), l.$$renameControl(h,
                                    m))
                            }));
                            d.on("$destroy", function () {
                                l.$removeControl(h);
                                m && Oa(a, m, u, m);
                                C(h, Eb)
                            })
                        }}
                    }}
            }]
        }, Rd = vd(), de = vd(!0), If = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/, Tf = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, Uf = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, Vf = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, wd = /^(\d{4})-(\d{2})-(\d{2})$/, xd = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        jc = /^(\d{4})-W(\d\d)$/, yd = /^(\d{4})-(\d\d)$/, zd = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Wf = /(\s+|^)default(\s+|$)/, Hb = new z("ngModel"), Ad = {text: function (a, c, d, e, f, g) {
            gb(a, c, d, e, f, g);
            hc(e)
        }, date: hb("date", wd, Gb(wd, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"), "datetime-local": hb("datetimelocal", xd, Gb(xd, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"), time: hb("time", zd, Gb(zd, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"), week: hb("week", jc, function (a, c) {
            if (fa(a))return a;
            if (I(a)) {
                jc.lastIndex = 0;
                var d =
                    jc.exec(a);
                if (d) {
                    var e = +d[1], f = +d[2], g = d = 0, h = 0, k = 0, l = md(e), f = 7 * (f - 1);
                    c && (d = c.getHours(), g = c.getMinutes(), h = c.getSeconds(), k = c.getMilliseconds());
                    return new Date(e, 0, l.getDate() + f, d, g, h, k)
                }
            }
            return NaN
        }, "yyyy-Www"), month: hb("month", yd, Gb(yd, ["yyyy", "MM"]), "yyyy-MM"), number: function (a, c, d, e, f, g) {
            qd(a, c, d, e);
            gb(a, c, d, e, f, g);
            e.$$parserName = "number";
            e.$parsers.push(function (a) {
                return e.$isEmpty(a) ? null : Vf.test(a) ? parseFloat(a) : u
            });
            e.$formatters.push(function (a) {
                if (!e.$isEmpty(a)) {
                    if (!X(a))throw Hb("numfmt",
                        a);
                    a = a.toString()
                }
                return a
            });
            if (d.min || d.ngMin) {
                var h;
                e.$validators.min = function (a) {
                    return e.$isEmpty(a) || G(h) || a >= h
                };
                d.$observe("min", function (a) {
                    y(a) && !X(a) && (a = parseFloat(a, 10));
                    h = X(a) && !isNaN(a) ? a : u;
                    e.$validate()
                })
            }
            if (d.max || d.ngMax) {
                var k;
                e.$validators.max = function (a) {
                    return e.$isEmpty(a) || G(k) || a <= k
                };
                d.$observe("max", function (a) {
                    y(a) && !X(a) && (a = parseFloat(a, 10));
                    k = X(a) && !isNaN(a) ? a : u;
                    e.$validate()
                })
            }
        }, url: function (a, c, d, e, f, g) {
            gb(a, c, d, e, f, g);
            hc(e);
            e.$$parserName = "url";
            e.$validators.url = function (a, c) {
                var d = a || c;
                return e.$isEmpty(d) || Tf.test(d)
            }
        }, email: function (a, c, d, e, f, g) {
            gb(a, c, d, e, f, g);
            hc(e);
            e.$$parserName = "email";
            e.$validators.email = function (a, c) {
                var d = a || c;
                return e.$isEmpty(d) || Uf.test(d)
            }
        }, radio: function (a, c, d, e) {
            G(d.name) && c.attr("name", ++kb);
            c.on("click", function (a) {
                c[0].checked && e.$setViewValue(d.value, a && a.type)
            });
            e.$render = function () {
                c[0].checked = d.value == e.$viewValue
            };
            d.$observe("value", e.$render)
        }, checkbox: function (a, c, d, e, f, g, h, k) {
            var l = rd(k, a, "ngTrueValue", d.ngTrueValue, !0),
                m = rd(k, a, "ngFalseValue", d.ngFalseValue, !1);
            c.on("click", function (a) {
                e.$setViewValue(c[0].checked, a && a.type)
            });
            e.$render = function () {
                c[0].checked = e.$viewValue
            };
            e.$isEmpty = function (a) {
                return!1 === a
            };
            e.$formatters.push(function (a) {
                return pa(a, l)
            });
            e.$parsers.push(function (a) {
                return a ? l : m
            })
        }, hidden: x, button: x, submit: x, reset: x, file: x}, vc = ["$browser", "$sniffer", "$filter", "$parse", function (a, c, d, e) {
            return{restrict: "E", require: ["?ngModel"], link: {pre: function (f, g, h, k) {
                k[0] && (Ad[R(h.type)] || Ad.text)(f, g, h, k[0],
                    c, a, d, e)
            }}}
        }], ib = "ng-valid", sd = "ng-invalid", Qa = "ng-pristine", Fb = "ng-dirty", ud = "ng-pending", Xf = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function (a, c, d, e, f, g, h, k, l, m) {
            this.$modelValue = this.$viewValue = Number.NaN;
            this.$$rawModelValue = u;
            this.$validators = {};
            this.$asyncValidators = {};
            this.$parsers = [];
            this.$formatters = [];
            this.$viewChangeListeners = [];
            this.$untouched = !0;
            this.$touched = !1;
            this.$pristine = !0;
            this.$dirty = !1;
            this.$valid = !0;
            this.$invalid = !1;
            this.$error = {};
            this.$$success = {};
            this.$pending = u;
            this.$name = m(d.name || "", !1)(a);
            var p = f(d.ngModel), s = p.assign, t = p, q = s, N = null, n = this;
            this.$$setOptions = function (a) {
                if ((n.$options = a) && a.getterSetter) {
                    var c = f(d.ngModel + "()"), g = f(d.ngModel + "($$$p)");
                    t = function (a) {
                        var d = p(a);
                        F(d) && (d = c(a));
                        return d
                    };
                    q = function (a, c) {
                        F(p(a)) ? g(a, {$$$p: n.$modelValue}) : s(a, n.$modelValue)
                    }
                } else if (!p.assign)throw Hb("nonassign", d.ngModel, va(e));
            };
            this.$render = x;
            this.$isEmpty = function (a) {
                return G(a) || "" === a || null === a || a !==
                    a
            };
            var v = e.inheritedData("$formController") || Eb, w = 0;
            pd({ctrl: this, $element: e, set: function (a, c) {
                a[c] = !0
            }, unset: function (a, c) {
                delete a[c]
            }, parentForm: v, $animate: g});
            this.$setPristine = function () {
                n.$dirty = !1;
                n.$pristine = !0;
                g.removeClass(e, Fb);
                g.addClass(e, Qa)
            };
            this.$setDirty = function () {
                n.$dirty = !0;
                n.$pristine = !1;
                g.removeClass(e, Qa);
                g.addClass(e, Fb);
                v.$setDirty()
            };
            this.$setUntouched = function () {
                n.$touched = !1;
                n.$untouched = !0;
                g.setClass(e, "ng-untouched", "ng-touched")
            };
            this.$setTouched = function () {
                n.$touched = !0;
                n.$untouched = !1;
                g.setClass(e, "ng-touched", "ng-untouched")
            };
            this.$rollbackViewValue = function () {
                h.cancel(N);
                n.$viewValue = n.$$lastCommittedViewValue;
                n.$render()
            };
            this.$validate = function () {
                if (!X(n.$modelValue) || !isNaN(n.$modelValue)) {
                    var a = n.$$rawModelValue, c = n.$valid, d = n.$modelValue, e = n.$options && n.$options.allowInvalid;
                    n.$$runValidators(n.$error[n.$$parserName || "parse"] ? !1 : u, a, n.$$lastCommittedViewValue, function (f) {
                        e || c === f || (n.$modelValue = f ? a : u, n.$modelValue !== d && n.$$writeModelToScope())
                    })
                }
            };
            this.$$runValidators =
                function (a, c, d, e) {
                    function f() {
                        var a = !0;
                        r(n.$validators, function (e, f) {
                            var g = e(c, d);
                            a = a && g;
                            h(f, g)
                        });
                        return a ? !0 : (r(n.$asyncValidators, function (a, c) {
                            h(c, null)
                        }), !1)
                    }

                    function g() {
                        var a = [], e = !0;
                        r(n.$asyncValidators, function (f, g) {
                            var k = f(c, d);
                            if (!k || !F(k.then))throw Hb("$asyncValidators", k);
                            h(g, u);
                            a.push(k.then(function () {
                                h(g, !0)
                            }, function (a) {
                                e = !1;
                                h(g, !1)
                            }))
                        });
                        a.length ? l.all(a).then(function () {
                            k(e)
                        }, x) : k(!0)
                    }

                    function h(a, c) {
                        m === w && n.$setValidity(a, c)
                    }

                    function k(a) {
                        m === w && e(a)
                    }

                    w++;
                    var m = w;
                    (function (a) {
                        var c =
                            n.$$parserName || "parse";
                        if (a === u)h(c, null); else if (h(c, a), !a)return r(n.$validators, function (a, c) {
                            h(c, null)
                        }), r(n.$asyncValidators, function (a, c) {
                            h(c, null)
                        }), !1;
                        return!0
                    })(a) ? f() ? g() : k(!1) : k(!1)
                };
            this.$commitViewValue = function () {
                var a = n.$viewValue;
                h.cancel(N);
                if (n.$$lastCommittedViewValue !== a || "" === a && n.$$hasNativeValidators)n.$$lastCommittedViewValue = a, n.$pristine && this.$setDirty(), this.$$parseAndValidate()
            };
            this.$$parseAndValidate = function () {
                var c = n.$$lastCommittedViewValue, d = c, e = G(d) ? u : !0;
                if (e)for (var f =
                    0; f < n.$parsers.length; f++)if (d = n.$parsers[f](d), G(d)) {
                    e = !1;
                    break
                }
                X(n.$modelValue) && isNaN(n.$modelValue) && (n.$modelValue = t(a));
                var g = n.$modelValue, h = n.$options && n.$options.allowInvalid;
                n.$$rawModelValue = d;
                h && (n.$modelValue = d, n.$modelValue !== g && n.$$writeModelToScope());
                n.$$runValidators(e, d, c, function (a) {
                    h || (n.$modelValue = a ? d : u, n.$modelValue !== g && n.$$writeModelToScope())
                })
            };
            this.$$writeModelToScope = function () {
                q(a, n.$modelValue);
                r(n.$viewChangeListeners, function (a) {
                    try {
                        a()
                    } catch (d) {
                        c(d)
                    }
                })
            };
            this.$setViewValue =
                function (a, c) {
                    n.$viewValue = a;
                    n.$options && !n.$options.updateOnDefault || n.$$debounceViewValueCommit(c)
                };
            this.$$debounceViewValueCommit = function (c) {
                var d = 0, e = n.$options;
                e && y(e.debounce) && (e = e.debounce, X(e) ? d = e : X(e[c]) ? d = e[c] : X(e["default"]) && (d = e["default"]));
                h.cancel(N);
                d ? N = h(function () {
                    n.$commitViewValue()
                }, d) : k.$$phase ? n.$commitViewValue() : a.$apply(function () {
                    n.$commitViewValue()
                })
            };
            a.$watch(function () {
                var c = t(a);
                if (c !== n.$modelValue) {
                    n.$modelValue = n.$$rawModelValue = c;
                    for (var d = n.$formatters, e = d.length,
                             f = c; e--;)f = d[e](f);
                    n.$viewValue !== f && (n.$viewValue = n.$$lastCommittedViewValue = f, n.$render(), n.$$runValidators(u, c, f, x))
                }
                return c
            })
        }], se = ["$rootScope", function (a) {
            return{restrict: "A", require: ["ngModel", "^?form", "^?ngModelOptions"], controller: Xf, priority: 1, compile: function (c) {
                c.addClass(Qa).addClass("ng-untouched").addClass(ib);
                return{pre: function (a, c, f, g) {
                    var h = g[0], k = g[1] || Eb;
                    h.$$setOptions(g[2] && g[2].$options);
                    k.$addControl(h);
                    f.$observe("name", function (a) {
                        h.$name !== a && k.$$renameControl(h, a)
                    });
                    a.$on("$destroy",
                        function () {
                            k.$removeControl(h)
                        })
                }, post: function (c, e, f, g) {
                    var h = g[0];
                    if (h.$options && h.$options.updateOn)e.on(h.$options.updateOn, function (a) {
                        h.$$debounceViewValueCommit(a && a.type)
                    });
                    e.on("blur", function (e) {
                        h.$touched || (a.$$phase ? c.$evalAsync(h.$setTouched) : c.$apply(h.$setTouched))
                    })
                }}
            }}
        }], ue = ca({restrict: "A", require: "ngModel", link: function (a, c, d, e) {
            e.$viewChangeListeners.push(function () {
                a.$eval(d.ngChange)
            })
        }}), xc = function () {
            return{restrict: "A", require: "?ngModel", link: function (a, c, d, e) {
                e && (d.required = !0, e.$validators.required = function (a, c) {
                    return!d.required || !e.$isEmpty(c)
                }, d.$observe("required", function () {
                    e.$validate()
                }))
            }}
        }, wc = function () {
            return{restrict: "A", require: "?ngModel", link: function (a, c, d, e) {
                if (e) {
                    var f, g = d.ngPattern || d.pattern;
                    d.$observe("pattern", function (a) {
                        I(a) && 0 < a.length && (a = new RegExp("^" + a + "$"));
                        if (a && !a.test)throw z("ngPattern")("noregexp", g, a, va(c));
                        f = a || u;
                        e.$validate()
                    });
                    e.$validators.pattern = function (a) {
                        return e.$isEmpty(a) || G(f) || f.test(a)
                    }
                }
            }}
        }, zc = function () {
            return{restrict: "A",
                require: "?ngModel", link: function (a, c, d, e) {
                    if (e) {
                        var f = -1;
                        d.$observe("maxlength", function (a) {
                            a = $(a);
                            f = isNaN(a) ? -1 : a;
                            e.$validate()
                        });
                        e.$validators.maxlength = function (a, c) {
                            return 0 > f || e.$isEmpty(a) || c.length <= f
                        }
                    }
                }}
        }, yc = function () {
            return{restrict: "A", require: "?ngModel", link: function (a, c, d, e) {
                if (e) {
                    var f = 0;
                    d.$observe("minlength", function (a) {
                        f = $(a) || 0;
                        e.$validate()
                    });
                    e.$validators.minlength = function (a, c) {
                        return e.$isEmpty(c) || c.length >= f
                    }
                }
            }}
        }, te = function () {
            return{restrict: "A", priority: 100, require: "ngModel",
                link: function (a, c, d, e) {
                    var f = c.attr(d.$attr.ngList) || ", ", g = "false" !== d.ngTrim, h = g ? P(f) : f;
                    e.$parsers.push(function (a) {
                        if (!G(a)) {
                            var c = [];
                            a && r(a.split(h), function (a) {
                                a && c.push(g ? P(a) : a)
                            });
                            return c
                        }
                    });
                    e.$formatters.push(function (a) {
                        return D(a) ? a.join(f) : u
                    });
                    e.$isEmpty = function (a) {
                        return!a || !a.length
                    }
                }}
        }, Yf = /^(true|false|\d+)$/, ve = function () {
            return{restrict: "A", priority: 100, compile: function (a, c) {
                return Yf.test(c.ngValue) ? function (a, c, f) {
                    f.$set("value", a.$eval(f.ngValue))
                } : function (a, c, f) {
                    a.$watch(f.ngValue,
                        function (a) {
                            f.$set("value", a)
                        })
                }
            }}
        }, we = function () {
            return{restrict: "A", controller: ["$scope", "$attrs", function (a, c) {
                var d = this;
                this.$options = a.$eval(c.ngModelOptions);
                this.$options.updateOn !== u ? (this.$options.updateOnDefault = !1, this.$options.updateOn = P(this.$options.updateOn.replace(Wf, function () {
                    d.$options.updateOnDefault = !0;
                    return" "
                }))) : this.$options.updateOnDefault = !0
            }]}
        }, Wd = ["$compile", function (a) {
            return{restrict: "AC", compile: function (c) {
                a.$$addBindingClass(c);
                return function (c, e, f) {
                    a.$$addBindingInfo(e,
                        f.ngBind);
                    e = e[0];
                    c.$watch(f.ngBind, function (a) {
                        e.textContent = a === u ? "" : a
                    })
                }
            }}
        }], Yd = ["$interpolate", "$compile", function (a, c) {
            return{compile: function (d) {
                c.$$addBindingClass(d);
                return function (d, f, g) {
                    d = a(f.attr(g.$attr.ngBindTemplate));
                    c.$$addBindingInfo(f, d.expressions);
                    f = f[0];
                    g.$observe("ngBindTemplate", function (a) {
                        f.textContent = a === u ? "" : a
                    })
                }
            }}
        }], Xd = ["$sce", "$parse", "$compile", function (a, c, d) {
            return{restrict: "A", compile: function (e, f) {
                var g = c(f.ngBindHtml), h = c(f.ngBindHtml, function (a) {
                    return(a || "").toString()
                });
                d.$$addBindingClass(e);
                return function (c, e, f) {
                    d.$$addBindingInfo(e, f.ngBindHtml);
                    c.$watch(h, function () {
                        e.html(a.getTrustedHtml(g(c)) || "")
                    })
                }
            }}
        }], Zd = ic("", !0), ae = ic("Odd", 0), $d = ic("Even", 1), be = Ia({compile: function (a, c) {
            c.$set("ngCloak", u);
            a.removeClass("ng-cloak")
        }}), ce = [function () {
            return{restrict: "A", scope: !0, controller: "@", priority: 500}
        }], Ac = {}, Zf = {blur: !0, focus: !0};
    r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
        function (a) {
            var c = wa("ng-" + a);
            Ac[c] = ["$parse", "$rootScope", function (d, e) {
                return{restrict: "A", compile: function (f, g) {
                    var h = d(g[c], null, !0);
                    return function (c, d) {
                        d.on(a, function (d) {
                            var f = function () {
                                h(c, {$event: d})
                            };
                            Zf[a] && e.$$phase ? c.$evalAsync(f) : c.$apply(f)
                        })
                    }
                }}
            }]
        });
    var fe = ["$animate", function (a) {
        return{multiElement: !0, transclude: "element", priority: 600, terminal: !0, restrict: "A", $$tlb: !0, link: function (c, d, e, f, g) {
            var h, k, l;
            c.$watch(e.ngIf, function (c) {
                c ? k || g(function (c, f) {
                    k = f;
                    c[c.length++] = V.createComment(" end ngIf: " +
                        e.ngIf + " ");
                    h = {clone: c};
                    a.enter(c, d.parent(), d)
                }) : (l && (l.remove(), l = null), k && (k.$destroy(), k = null), h && (l = qb(h.clone), a.leave(l).then(function () {
                    l = null
                }), h = null))
            })
        }}
    }], ge = ["$templateRequest", "$anchorScroll", "$animate", "$sce", function (a, c, d, e) {
        return{restrict: "ECA", priority: 400, terminal: !0, transclude: "element", controller: ha.noop, compile: function (f, g) {
            var h = g.ngInclude || g.src, k = g.onload || "", l = g.autoscroll;
            return function (f, g, s, r, q) {
                var u = 0, n, v, w, O = function () {
                    v && (v.remove(), v = null);
                    n && (n.$destroy(),
                        n = null);
                    w && (d.leave(w).then(function () {
                        v = null
                    }), v = w, w = null)
                };
                f.$watch(e.parseAsResourceUrl(h), function (e) {
                    var h = function () {
                        !y(l) || l && !f.$eval(l) || c()
                    }, s = ++u;
                    e ? (a(e, !0).then(function (a) {
                        if (s === u) {
                            var c = f.$new();
                            r.template = a;
                            a = q(c, function (a) {
                                O();
                                d.enter(a, null, g).then(h)
                            });
                            n = c;
                            w = a;
                            n.$emit("$includeContentLoaded", e);
                            f.$eval(k)
                        }
                    }, function () {
                        s === u && (O(), f.$emit("$includeContentError", e))
                    }), f.$emit("$includeContentRequested", e)) : (O(), r.template = null)
                })
            }
        }}
    }], xe = ["$compile", function (a) {
        return{restrict: "ECA",
            priority: -400, require: "ngInclude", link: function (c, d, e, f) {
                /SVG/.test(d[0].toString()) ? (d.empty(), a(Dc(f.template, V).childNodes)(c, function (a) {
                    d.append(a)
                }, {futureParentElement: d})) : (d.html(f.template), a(d.contents())(c))
            }}
    }], he = Ia({priority: 450, compile: function () {
        return{pre: function (a, c, d) {
            a.$eval(d.ngInit)
        }}
    }}), ie = Ia({terminal: !0, priority: 1E3}), je = ["$locale", "$interpolate", function (a, c) {
        var d = /{}/g, e = /^when(Minus)?(.+)$/;
        return{restrict: "EA", link: function (f, g, h) {
            function k(a) {
                g.text(a || "")
            }

            var l =
                h.count, m = h.$attr.when && g.attr(h.$attr.when), p = h.offset || 0, s = f.$eval(m) || {}, t = {}, m = c.startSymbol(), q = c.endSymbol(), u = m + l + "-" + p + q, n = ha.noop, v;
            r(h, function (a, c) {
                var d = e.exec(c);
                d && (d = (d[1] ? "-" : "") + R(d[2]), s[d] = g.attr(h.$attr[c]))
            });
            r(s, function (a, e) {
                t[e] = c(a.replace(d, u))
            });
            f.$watch(l, function (c) {
                c = parseFloat(c);
                var d = isNaN(c);
                d || c in s || (c = a.pluralCat(c - p));
                c === v || d && isNaN(v) || (n(), n = f.$watch(t[c], k), v = c)
            })
        }}
    }], ke = ["$parse", "$animate", function (a, c) {
        var d = z("ngRepeat"), e = function (a, c, d, e, l, m, p) {
            a[d] =
                e;
            l && (a[l] = m);
            a.$index = c;
            a.$first = 0 === c;
            a.$last = c === p - 1;
            a.$middle = !(a.$first || a.$last);
            a.$odd = !(a.$even = 0 === (c & 1))
        };
        return{restrict: "A", multiElement: !0, transclude: "element", priority: 1E3, terminal: !0, $$tlb: !0, compile: function (f, g) {
            var h = g.ngRepeat, k = V.createComment(" end ngRepeat: " + h + " "), l = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
            if (!l)throw d("iexp", h);
            var m = l[1], p = l[2], s = l[3], t = l[4], l = m.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
            if (!l)throw d("iidexp", m);
            var q = l[3] || l[1], y = l[2];
            if (s && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(s) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent)$/.test(s)))throw d("badident", s);
            var n, v, w, z, E = {$id: Ma};
            t ? n = a(t) : (w = function (a, c) {
                return Ma(c)
            }, z = function (a) {
                return a
            });
            return function (a, f, g, l, m) {
                n && (v = function (c, d, e) {
                    y && (E[y] = c);
                    E[q] = d;
                    E.$index = e;
                    return n(a, E)
                });
                var t = ia();
                a.$watchCollection(p, function (g) {
                    var l, n, p = f[0], B, E = ia(), C, x, G, T, D, F, I;
                    s && (a[s] = g);
                    if (Ra(g))D = g, n = v ||
                        w; else {
                        n = v || z;
                        D = [];
                        for (I in g)g.hasOwnProperty(I) && "$" != I.charAt(0) && D.push(I);
                        D.sort()
                    }
                    C = D.length;
                    I = Array(C);
                    for (l = 0; l < C; l++)if (x = g === D ? l : D[l], G = g[x], T = n(x, G, l), t[T])F = t[T], delete t[T], E[T] = F, I[l] = F; else {
                        if (E[T])throw r(I, function (a) {
                            a && a.scope && (t[a.id] = a)
                        }), d("dupes", h, T, G);
                        I[l] = {id: T, scope: u, clone: u};
                        E[T] = !0
                    }
                    for (B in t) {
                        F = t[B];
                        T = qb(F.clone);
                        c.leave(T);
                        if (T[0].parentNode)for (l = 0, n = T.length; l < n; l++)T[l].$$NG_REMOVED = !0;
                        F.scope.$destroy()
                    }
                    for (l = 0; l < C; l++)if (x = g === D ? l : D[l], G = g[x], F = I[l], F.scope) {
                        B =
                            p;
                        do B = B.nextSibling; while (B && B.$$NG_REMOVED);
                        F.clone[0] != B && c.move(qb(F.clone), null, A(p));
                        p = F.clone[F.clone.length - 1];
                        e(F.scope, l, q, G, y, x, C)
                    } else m(function (a, d) {
                        F.scope = d;
                        var f = k.cloneNode(!1);
                        a[a.length++] = f;
                        c.enter(a, null, A(p));
                        p = f;
                        F.clone = a;
                        E[F.id] = F;
                        e(F.scope, l, q, G, y, x, C)
                    });
                    t = E
                })
            }
        }}
    }], le = ["$animate", function (a) {
        return{restrict: "A", multiElement: !0, link: function (c, d, e) {
            c.$watch(e.ngShow, function (c) {
                a[c ? "removeClass" : "addClass"](d, "ng-hide", {tempClasses: "ng-hide-animate"})
            })
        }}
    }], ee = ["$animate",
        function (a) {
            return{restrict: "A", multiElement: !0, link: function (c, d, e) {
                c.$watch(e.ngHide, function (c) {
                    a[c ? "addClass" : "removeClass"](d, "ng-hide", {tempClasses: "ng-hide-animate"})
                })
            }}
        }], me = Ia(function (a, c, d) {
        a.$watch(d.ngStyle, function (a, d) {
            d && a !== d && r(d, function (a, d) {
                c.css(d, "")
            });
            a && c.css(a)
        }, !0)
    }), ne = ["$animate", function (a) {
        return{restrict: "EA", require: "ngSwitch", controller: ["$scope", function () {
            this.cases = {}
        }], link: function (c, d, e, f) {
            var g = [], h = [], k = [], l = [], m = function (a, c) {
                return function () {
                    a.splice(c,
                        1)
                }
            };
            c.$watch(e.ngSwitch || e.on, function (c) {
                var d, e;
                d = 0;
                for (e = k.length; d < e; ++d)a.cancel(k[d]);
                d = k.length = 0;
                for (e = l.length; d < e; ++d) {
                    var q = qb(h[d].clone);
                    l[d].$destroy();
                    (k[d] = a.leave(q)).then(m(k, d))
                }
                h.length = 0;
                l.length = 0;
                (g = f.cases["!" + c] || f.cases["?"]) && r(g, function (c) {
                    c.transclude(function (d, e) {
                        l.push(e);
                        var f = c.element;
                        d[d.length++] = V.createComment(" end ngSwitchWhen: ");
                        h.push({clone: d});
                        a.enter(d, f.parent(), f)
                    })
                })
            })
        }}
    }], oe = Ia({transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: !0,
        link: function (a, c, d, e, f) {
            e.cases["!" + d.ngSwitchWhen] = e.cases["!" + d.ngSwitchWhen] || [];
            e.cases["!" + d.ngSwitchWhen].push({transclude: f, element: c})
        }}), pe = Ia({transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: !0, link: function (a, c, d, e, f) {
        e.cases["?"] = e.cases["?"] || [];
        e.cases["?"].push({transclude: f, element: c})
    }}), re = Ia({restrict: "EAC", link: function (a, c, d, e, f) {
        if (!f)throw z("ngTransclude")("orphan", va(c));
        f(function (a) {
            c.empty();
            c.append(a)
        })
    }}), Sd = ["$templateCache", function (a) {
        return{restrict: "E",
            terminal: !0, compile: function (c, d) {
                "text/ng-template" == d.type && a.put(d.id, c[0].text)
            }}
    }], $f = z("ngOptions"), qe = ca({restrict: "A", terminal: !0}), Td = ["$compile", "$parse", function (a, c) {
        var d = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, e = {$setViewValue: x};
        return{restrict: "E", require: ["select", "?ngModel"], controller: ["$element", "$scope", "$attrs", function (a, c, d) {
            var k = this, l = {}, m = e, p;
            k.databound = d.ngModel;
            k.init = function (a, c, d) {
                m = a;
                p = d
            };
            k.addOption = function (c, d) {
                La(c, '"option value"');
                l[c] = !0;
                m.$viewValue == c && (a.val(c), p.parent() && p.remove());
                d && d[0].hasAttribute("selected") && (d[0].selected = !0)
            };
            k.removeOption = function (a) {
                this.hasOption(a) && (delete l[a], m.$viewValue == a && this.renderUnknownOption(a))
            };
            k.renderUnknownOption = function (c) {
                c = "? " + Ma(c) + " ?";
                p.val(c);
                a.prepend(p);
                a.val(c);
                p.prop("selected", !0)
            };
            k.hasOption = function (a) {
                return l.hasOwnProperty(a)
            };
            c.$on("$destroy", function () {
                k.renderUnknownOption = x
            })
        }], link: function (e, g, h, k) {
            function l(a, c, d, e) {
                d.$render = function () {
                    var a = d.$viewValue;
                    e.hasOption(a) ? (E.parent() && E.remove(), c.val(a), "" === a && n.prop("selected", !0)) : G(a) && n ? c.val("") : e.renderUnknownOption(a)
                };
                c.on("change", function () {
                    a.$apply(function () {
                        E.parent() && E.remove();
                        d.$setViewValue(c.val())
                    })
                })
            }

            function m(a, c, d) {
                var e;
                d.$render = function () {
                    var a = new cb(d.$viewValue);
                    r(c.find("option"), function (c) {
                        c.selected = y(a.get(c.value))
                    })
                };
                a.$watch(function () {
                    pa(e,
                        d.$viewValue) || (e = ua(d.$viewValue), d.$render())
                });
                c.on("change", function () {
                    a.$apply(function () {
                        var a = [];
                        r(c.find("option"), function (c) {
                            c.selected && a.push(c.value)
                        });
                        d.$setViewValue(a)
                    })
                })
            }

            function p(e, f, g) {
                function h(a, c, d) {
                    U[x] = d;
                    G && (U[G] = c);
                    return a(e, U)
                }

                function k(a) {
                    var c;
                    if (t)if (K && D(a)) {
                        c = new cb([]);
                        for (var d = 0; d < a.length; d++)c.put(h(K, null, a[d]), !0)
                    } else c = new cb(a); else K && (a = h(K, null, a));
                    return function (d, e) {
                        var f;
                        f = K ? K : C ? C : H;
                        return t ? y(c.remove(h(f, d, e))) : a === h(f, d, e)
                    }
                }

                function l() {
                    v || (e.$$postDigest(n),
                        v = !0)
                }

                function m(a, c, d) {
                    a[c] = a[c] || 0;
                    a[c] += d ? 1 : -1
                }

                function n() {
                    v = !1;
                    var a = {"": []}, c = [""], d, l, p, q, u;
                    p = g.$viewValue;
                    q = M(e) || [];
                    var C = G ? Object.keys(q).sort() : q, x, A, H, D, Q = {};
                    u = k(p);
                    var P = !1, V, X;
                    S = {};
                    for (D = 0; H = C.length, D < H; D++) {
                        x = D;
                        if (G && (x = C[D], "$" === x.charAt(0)))continue;
                        A = q[x];
                        d = h(I, x, A) || "";
                        (l = a[d]) || (l = a[d] = [], c.push(d));
                        d = u(x, A);
                        P = P || d;
                        A = h(E, x, A);
                        A = y(A) ? A : "";
                        X = K ? K(e, U) : G ? C[D] : D;
                        K && (S[X] = x);
                        l.push({id: X, label: A, selected: d})
                    }
                    t || (z || null === p ? a[""].unshift({id: "", label: "", selected: !P}) : P || a[""].unshift({id: "?",
                        label: "", selected: !0}));
                    x = 0;
                    for (C = c.length; x < C; x++) {
                        d = c[x];
                        l = a[d];
                        R.length <= x ? (p = {element: F.clone().attr("label", d), label: l.label}, q = [p], R.push(q), f.append(p.element)) : (q = R[x], p = q[0], p.label != d && p.element.attr("label", p.label = d));
                        P = null;
                        D = 0;
                        for (H = l.length; D < H; D++)d = l[D], (u = q[D + 1]) ? (P = u.element, u.label !== d.label && (m(Q, u.label, !1), m(Q, d.label, !0), P.text(u.label = d.label), P.prop("label", u.label)), u.id !== d.id && P.val(u.id = d.id), P[0].selected !== d.selected && (P.prop("selected", u.selected = d.selected), Ha && P.prop("selected",
                            u.selected))) : ("" === d.id && z ? V = z : (V = w.clone()).val(d.id).prop("selected", d.selected).attr("selected", d.selected).prop("label", d.label).text(d.label), q.push(u = {element: V, label: d.label, id: d.id, selected: d.selected}), m(Q, d.label, !0), P ? P.after(V) : p.element.append(V), P = V);
                        for (D++; q.length > D;)d = q.pop(), m(Q, d.label, !1), d.element.remove();
                        r(Q, function (a, c) {
                            0 < a ? s.addOption(c) : 0 > a && s.removeOption(c)
                        })
                    }
                    for (; R.length > x;)R.pop()[0].element.remove()
                }

                var p;
                if (!(p = q.match(d)))throw $f("iexp", q, va(f));
                var E = c(p[2] ||
                    p[1]), x = p[4] || p[6], A = / as /.test(p[0]) && p[1], C = A ? c(A) : null, G = p[5], I = c(p[3] || ""), H = c(p[2] ? p[1] : x), M = c(p[7]), K = p[8] ? c(p[8]) : null, S = {}, R = [
                    [
                        {element: f, label: ""}
                    ]
                ], U = {};
                z && (a(z)(e), z.removeClass("ng-scope"), z.remove());
                f.empty();
                f.on("change", function () {
                    e.$apply(function () {
                        var a = M(e) || [], c;
                        if (t)c = [], r(f.val(), function (d) {
                            d = K ? S[d] : d;
                            c.push("?" === d ? u : "" === d ? null : h(C ? C : H, d, a[d]))
                        }); else {
                            var d = K ? S[f.val()] : f.val();
                            c = "?" === d ? u : "" === d ? null : h(C ? C : H, d, a[d])
                        }
                        g.$setViewValue(c);
                        n()
                    })
                });
                g.$render = n;
                e.$watchCollection(M,
                    l);
                e.$watchCollection(function () {
                    var a = M(e), c;
                    if (a && D(a)) {
                        c = Array(a.length);
                        for (var d = 0, f = a.length; d < f; d++)c[d] = h(E, d, a[d])
                    } else if (a)for (d in c = {}, a)a.hasOwnProperty(d) && (c[d] = h(E, d, a[d]));
                    return c
                }, l);
                t && e.$watchCollection(function () {
                    return g.$modelValue
                }, l)
            }

            if (k[1]) {
                var s = k[0];
                k = k[1];
                var t = h.multiple, q = h.ngOptions, z = !1, n, v = !1, w = A(V.createElement("option")), F = A(V.createElement("optgroup")), E = w.clone();
                h = 0;
                for (var x = g.children(), C = x.length; h < C; h++)if ("" === x[h].value) {
                    n = z = x.eq(h);
                    break
                }
                s.init(k, z,
                    E);
                t && (k.$isEmpty = function (a) {
                    return!a || 0 === a.length
                });
                q ? p(e, g, k) : t ? m(e, g, k) : l(e, g, k, s)
            }
        }}
    }], Vd = ["$interpolate", function (a) {
        var c = {addOption: x, removeOption: x};
        return{restrict: "E", priority: 100, compile: function (d, e) {
            if (G(e.value)) {
                var f = a(d.text(), !0);
                f || e.$set("value", d.text())
            }
            return function (a, d, e) {
                var l = d.parent(), m = l.data("$selectController") || l.parent().data("$selectController");
                m && m.databound || (m = c);
                f ? a.$watch(f, function (a, c) {
                    e.$set("value", a);
                    c !== a && m.removeOption(c);
                    m.addOption(a, d)
                }) : m.addOption(e.value,
                    d);
                d.on("$destroy", function () {
                    m.removeOption(e.value)
                })
            }
        }}
    }], Ud = ca({restrict: "E", terminal: !1});
    U.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : (Kd(), Md(ha), A(V).ready(function () {
        Gd(V, rc)
    }))
})(window, document);
!window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map

/*
 AngularJS v1.3.4
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
 */
(function (n, h, p) {
    'use strict';
    function E(a) {
        var d = [];
        s(d, h.noop).chars(a);
        return d.join("")
    }

    function g(a) {
        var d = {};
        a = a.split(",");
        var c;
        for (c = 0; c < a.length; c++)d[a[c]] = !0;
        return d
    }

    function F(a, d) {
        function c(a, b, c, l) {
            b = h.lowercase(b);
            if (t[b])for (; f.last() && u[f.last()];)e("", f.last());
            v[b] && f.last() == b && e("", b);
            (l = w[b] || !!l) || f.push(b);
            var m = {};
            c.replace(G, function (a, b, d, c, e) {
                m[b] = r(d || c || e || "")
            });
            d.start && d.start(b, m, l)
        }

        function e(a, b) {
            var c = 0, e;
            if (b = h.lowercase(b))for (c = f.length - 1; 0 <= c && f[c] != b; c--);
            if (0 <= c) {
                for (e = f.length - 1; e >= c; e--)d.end && d.end(f[e]);
                f.length = c
            }
        }

        "string" !== typeof a && (a = null === a || "undefined" === typeof a ? "" : "" + a);
        var b, k, f = [], m = a, l;
        for (f.last = function () {
            return f[f.length - 1]
        }; a;) {
            l = "";
            k = !0;
            if (f.last() && x[f.last()])a = a.replace(new RegExp("(.*)<\\s*\\/\\s*" + f.last() + "[^>]*>", "i"), function (a, b) {
                b = b.replace(H, "$1").replace(I, "$1");
                d.chars && d.chars(r(b));
                return""
            }), e("", f.last()); else {
                if (0 === a.indexOf("\x3c!--"))b = a.indexOf("--", 4), 0 <= b && a.lastIndexOf("--\x3e", b) === b && (d.comment && d.comment(a.substring(4,
                    b)), a = a.substring(b + 3), k = !1); else if (y.test(a)) {
                    if (b = a.match(y))a = a.replace(b[0], ""), k = !1
                } else if (J.test(a)) {
                    if (b = a.match(z))a = a.substring(b[0].length), b[0].replace(z, e), k = !1
                } else K.test(a) && ((b = a.match(A)) ? (b[4] && (a = a.substring(b[0].length), b[0].replace(A, c)), k = !1) : (l += "<", a = a.substring(1)));
                k && (b = a.indexOf("<"), l += 0 > b ? a : a.substring(0, b), a = 0 > b ? "" : a.substring(b), d.chars && d.chars(r(l)))
            }
            if (a == m)throw L("badparse", a);
            m = a
        }
        e()
    }

    function r(a) {
        if (!a)return"";
        var d = M.exec(a);
        a = d[1];
        var c = d[3];
        if (d = d[2])q.innerHTML =
            d.replace(/</g, "&lt;"), d = "textContent"in q ? q.textContent : q.innerText;
        return a + d + c
    }

    function B(a) {
        return a.replace(/&/g, "&amp;").replace(N, function (a) {
            var c = a.charCodeAt(0);
            a = a.charCodeAt(1);
            return"&#" + (1024 * (c - 55296) + (a - 56320) + 65536) + ";"
        }).replace(O, function (a) {
            return"&#" + a.charCodeAt(0) + ";"
        }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function s(a, d) {
        var c = !1, e = h.bind(a, a.push);
        return{start: function (a, k, f) {
            a = h.lowercase(a);
            !c && x[a] && (c = a);
            c || !0 !== C[a] || (e("<"), e(a), h.forEach(k, function (c, f) {
                var k =
                    h.lowercase(f), g = "img" === a && "src" === k || "background" === k;
                !0 !== P[k] || !0 === D[k] && !d(c, g) || (e(" "), e(f), e('="'), e(B(c)), e('"'))
            }), e(f ? "/>" : ">"))
        }, end: function (a) {
            a = h.lowercase(a);
            c || !0 !== C[a] || (e("</"), e(a), e(">"));
            a == c && (c = !1)
        }, chars: function (a) {
            c || e(B(a))
        }}
    }

    var L = h.$$minErr("$sanitize"), A = /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/, z = /^<\/\s*([\w:-]+)[^>]*>/, G = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g, K = /^</,
        J = /^<\//, H = /\x3c!--(.*?)--\x3e/g, y = /<!DOCTYPE([^>]*?)>/i, I = /<!\[CDATA\[(.*?)]]\x3e/g, N = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, O = /([^\#-~| |!])/g, w = g("area,br,col,hr,img,wbr");
    n = g("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");
    p = g("rp,rt");
    var v = h.extend({}, p, n), t = h.extend({}, n, g("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")), u = h.extend({}, p, g("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var"));
    n = g("animate,animateColor,animateMotion,animateTransform,circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,set,stop,svg,switch,text,title,tspan,use");
    var x = g("script,style"), C = h.extend({}, w, t, u, v, n), D = g("background,cite,href,longdesc,src,usemap,xlink:href");
    n = g("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width");
    p = g("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,attributeName,attributeType,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan");
    var P = h.extend({}, D, p, n), q = document.createElement("pre"), M = /^(\s*)([\s\S]*?)(\s*)$/;
    h.module("ngSanitize", []).provider("$sanitize", function () {
        this.$get = ["$$sanitizeUri", function (a) {
            return function (d) {
                var c = [];
                F(d, s(c, function (c, b) {
                    return!/^unsafe/.test(a(c, b))
                }));
                return c.join("")
            }
        }]
    });
    h.module("ngSanitize").filter("linky", ["$sanitize", function (a) {
        var d = /((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"]/, c = /^mailto:/;
        return function (e, b) {
            function k(a) {
                a && g.push(E(a))
            }

            function f(a, c) {
                g.push("<a ");
                h.isDefined(b) && g.push('target="', b, '" ');
                g.push('href="', a.replace('"', "&quot;"), '">');
                k(c);
                g.push("</a>")
            }

            if (!e)return e;
            for (var m, l = e, g = [], n, p; m = l.match(d);)n = m[0], m[2] == m[3] && (n = "mailto:" + n), p = m.index, k(l.substr(0, p)), f(n, m[0].replace(c, "")), l = l.substring(p + m[0].length);
            k(l);
            return a(g.join(""))
        }
    }])
})(window, window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

// ----------------------------------------------------------------------------
// Buzz, a Javascript HTML5 Audio library
// v1.1.7 - Built 2014-10-13 21:18
// Licensed under the MIT license.
// http://buzz.jaysalvat.com/
// ----------------------------------------------------------------------------
// Copyright (C) 2010-2014 Jay Salvat
// http://jaysalvat.com/
// ----------------------------------------------------------------------------

(function (t, n) {
    "undefined" != typeof module && module.exports ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : t.buzz = n()
})(this, function () {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    var t = {audioCtx: window.AudioContext ? new AudioContext : null, defaults: {autoplay: !1, duration: 5e3, formats: [], loop: !1, placeholder: "--", preload: "metadata", volume: 80, webAudioApi: !1, document: window.document}, types: {mp3: "audio/mpeg", ogg: "audio/ogg", wav: "audio/wav", aac: "audio/aac", m4a: "audio/x-m4a"}, sounds: [], el: document.createElement("audio"), sound: function (n, e) {
        function i(t) {
            for (var n = [], e = t.length - 1, i = 0; e >= i; i++)n.push({start: t.start(i), end: t.end(i)});
            return n
        }

        function u(t) {
            return t.split(".").pop()
        }

        function s(n, e) {
            var i = r.createElement("source");
            i.src = e, t.types[u(e)] && (i.type = t.types[u(e)]), n.appendChild(i)
        }

        e = e || {};
        var r = e.document || t.defaults.document, o = 0, a = [], h = {}, d = t.isSupported();
        if (this.load = function () {
            return d ? (this.sound.load(), this) : this
        }, this.play = function () {
            return d ? (this.sound.play(), this) : this
        }, this.togglePlay = function () {
            return d ? (this.sound.paused ? this.sound.play() : this.sound.pause(), this) : this
        }, this.pause = function () {
            return d ? (this.sound.pause(), this) : this
        }, this.isPaused = function () {
            return d ? this.sound.paused : null
        }, this.stop = function () {
            return d ? (this.setTime(0), this.sound.pause(), this) : this
        }, this.isEnded = function () {
            return d ? this.sound.ended : null
        }, this.loop = function () {
            return d ? (this.sound.loop = "loop", this.bind("ended.buzzloop", function () {
                this.currentTime = 0, this.play()
            }), this) : this
        }, this.unloop = function () {
            return d ? (this.sound.removeAttribute("loop"), this.unbind("ended.buzzloop"), this) : this
        }, this.mute = function () {
            return d ? (this.sound.muted = !0, this) : this
        }, this.unmute = function () {
            return d ? (this.sound.muted = !1, this) : this
        }, this.toggleMute = function () {
            return d ? (this.sound.muted = !this.sound.muted, this) : this
        }, this.isMuted = function () {
            return d ? this.sound.muted : null
        }, this.setVolume = function (t) {
            return d ? (0 > t && (t = 0), t > 100 && (t = 100), this.volume = t, this.sound.volume = t / 100, this) : this
        }, this.getVolume = function () {
            return d ? this.volume : this
        }, this.increaseVolume = function (t) {
            return this.setVolume(this.volume + (t || 1))
        }, this.decreaseVolume = function (t) {
            return this.setVolume(this.volume - (t || 1))
        }, this.setTime = function (t) {
            if (!d)return this;
            var n = !0;
            return this.whenReady(function () {
                n === !0 && (n = !1, this.sound.currentTime = t)
            }), this
        }, this.getTime = function () {
            if (!d)return null;
            var n = Math.round(100 * this.sound.currentTime) / 100;
            return isNaN(n) ? t.defaults.placeholder : n
        }, this.setPercent = function (n) {
            return d ? this.setTime(t.fromPercent(n, this.sound.duration)) : this
        }, this.getPercent = function () {
            if (!d)return null;
            var n = Math.round(t.toPercent(this.sound.currentTime, this.sound.duration));
            return isNaN(n) ? t.defaults.placeholder : n
        }, this.setSpeed = function (t) {
            return d ? (this.sound.playbackRate = t, this) : this
        }, this.getSpeed = function () {
            return d ? this.sound.playbackRate : null
        }, this.getDuration = function () {
            if (!d)return null;
            var n = Math.round(100 * this.sound.duration) / 100;
            return isNaN(n) ? t.defaults.placeholder : n
        }, this.getPlayed = function () {
            return d ? i(this.sound.played) : null
        }, this.getBuffered = function () {
            return d ? i(this.sound.buffered) : null
        }, this.getSeekable = function () {
            return d ? i(this.sound.seekable) : null
        }, this.getErrorCode = function () {
            return d && this.sound.error ? this.sound.error.code : 0
        }, this.getErrorMessage = function () {
            if (!d)return null;
            switch (this.getErrorCode()) {
                case 1:
                    return"MEDIA_ERR_ABORTED";
                case 2:
                    return"MEDIA_ERR_NETWORK";
                case 3:
                    return"MEDIA_ERR_DECODE";
                case 4:
                    return"MEDIA_ERR_SRC_NOT_SUPPORTED";
                default:
                    return null
            }
        }, this.getStateCode = function () {
            return d ? this.sound.readyState : null
        }, this.getStateMessage = function () {
            if (!d)return null;
            switch (this.getStateCode()) {
                case 0:
                    return"HAVE_NOTHING";
                case 1:
                    return"HAVE_METADATA";
                case 2:
                    return"HAVE_CURRENT_DATA";
                case 3:
                    return"HAVE_FUTURE_DATA";
                case 4:
                    return"HAVE_ENOUGH_DATA";
                default:
                    return null
            }
        }, this.getNetworkStateCode = function () {
            return d ? this.sound.networkState : null
        }, this.getNetworkStateMessage = function () {
            if (!d)return null;
            switch (this.getNetworkStateCode()) {
                case 0:
                    return"NETWORK_EMPTY";
                case 1:
                    return"NETWORK_IDLE";
                case 2:
                    return"NETWORK_LOADING";
                case 3:
                    return"NETWORK_NO_SOURCE";
                default:
                    return null
            }
        }, this.set = function (t, n) {
            return d ? (this.sound[t] = n, this) : this
        }, this.get = function (t) {
            return d ? t ? this.sound[t] : this.sound : null
        }, this.bind = function (t, n) {
            if (!d)return this;
            t = t.split(" ");
            for (var e = this, i = function (t) {
                n.call(e, t)
            }, u = 0; t.length > u; u++) {
                var s = t[u], r = s;
                s = r.split(".")[0], a.push({idx: r, func: i}), this.sound.addEventListener(s, i, !0)
            }
            return this
        }, this.unbind = function (t) {
            if (!d)return this;
            t = t.split(" ");
            for (var n = 0; t.length > n; n++)for (var e = t[n], i = e.split(".")[0], u = 0; a.length > u; u++) {
                var s = a[u].idx.split(".");
                (a[u].idx == e || s[1] && s[1] == e.replace(".", "")) && (this.sound.removeEventListener(i, a[u].func, !0), a.splice(u, 1))
            }
            return this
        }, this.bindOnce = function (t, n) {
            if (!d)return this;
            var e = this;
            return h[o++] = !1, this.bind(t + "." + o, function () {
                h[o] || (h[o] = !0, n.call(e)), e.unbind(t + "." + o)
            }), this
        }, this.trigger = function (t) {
            if (!d)return this;
            t = t.split(" ");
            for (var n = 0; t.length > n; n++)for (var e = t[n], i = 0; a.length > i; i++) {
                var u = a[i].idx.split(".");
                if (a[i].idx == e || u[0] && u[0] == e.replace(".", "")) {
                    var s = r.createEvent("HTMLEvents");
                    s.initEvent(u[0], !1, !0), this.sound.dispatchEvent(s)
                }
            }
            return this
        }, this.fadeTo = function (n, e, i) {
            function u() {
                setTimeout(function () {
                    n > s && n > o.volume ? (o.setVolume(o.volume += 1), u()) : s > n && o.volume > n ? (o.setVolume(o.volume -= 1), u()) : i instanceof Function && i.apply(o)
                }, r)
            }

            if (!d)return this;
            e instanceof Function ? (i = e, e = t.defaults.duration) : e = e || t.defaults.duration;
            var s = this.volume, r = e / Math.abs(s - n), o = this;
            return this.play(), this.whenReady(function () {
                u()
            }), this
        }, this.fadeIn = function (t, n) {
            return d ? this.setVolume(0).fadeTo(100, t, n) : this
        }, this.fadeOut = function (t, n) {
            return d ? this.fadeTo(0, t, n) : this
        }, this.fadeWith = function (t, n) {
            return d ? (this.fadeOut(n, function () {
                this.stop()
            }), t.play().fadeIn(n), this) : this
        }, this.whenReady = function (t) {
            if (!d)return null;
            var n = this;
            0 === this.sound.readyState ? this.bind("canplay.buzzwhenready", function () {
                t.call(n)
            }) : t.call(n)
        }, d && n) {
            for (var l in t.defaults)t.defaults.hasOwnProperty(l) && void 0 === e[l] && (e[l] = t.defaults[l]);
            if (this.sound = r.createElement("audio"), e.webAudioApi && t.audioCtx && (this.source = t.audioCtx.createMediaElementSource(this.sound), this.source.connect(t.audioCtx.destination)), n instanceof Array)for (var c in n)n.hasOwnProperty(c) && s(this.sound, n[c]); else if (e.formats.length)for (var f in e.formats)e.formats.hasOwnProperty(f) && s(this.sound, n + "." + e.formats[f]); else s(this.sound, n);
            e.loop && this.loop(), e.autoplay && (this.sound.autoplay = "autoplay"), this.sound.preload = e.preload === !0 ? "auto" : e.preload === !1 ? "none" : e.preload, this.setVolume(e.volume), t.sounds.push(this)
        }
    }, group: function (t) {
        function n() {
            for (var n = e(null, arguments), i = n.shift(), u = 0; t.length > u; u++)t[u][i].apply(t[u], n)
        }

        function e(t, n) {
            return t instanceof Array ? t : Array.prototype.slice.call(n)
        }

        t = e(t, arguments), this.getSounds = function () {
            return t
        }, this.add = function (n) {
            n = e(n, arguments);
            for (var i = 0; n.length > i; i++)t.push(n[i])
        }, this.remove = function (n) {
            n = e(n, arguments);
            for (var i = 0; n.length > i; i++)for (var u = 0; t.length > u; u++)if (t[u] == n[i]) {
                t.splice(u, 1);
                break
            }
        }, this.load = function () {
            return n("load"), this
        }, this.play = function () {
            return n("play"), this
        }, this.togglePlay = function () {
            return n("togglePlay"), this
        }, this.pause = function (t) {
            return n("pause", t), this
        }, this.stop = function () {
            return n("stop"), this
        }, this.mute = function () {
            return n("mute"), this
        }, this.unmute = function () {
            return n("unmute"), this
        }, this.toggleMute = function () {
            return n("toggleMute"), this
        }, this.setVolume = function (t) {
            return n("setVolume", t), this
        }, this.increaseVolume = function (t) {
            return n("increaseVolume", t), this
        }, this.decreaseVolume = function (t) {
            return n("decreaseVolume", t), this
        }, this.loop = function () {
            return n("loop"), this
        }, this.unloop = function () {
            return n("unloop"), this
        }, this.setSpeed = function (t) {
            return n("setSpeed", t), this
        }, this.setTime = function (t) {
            return n("setTime", t), this
        }, this.set = function (t, e) {
            return n("set", t, e), this
        }, this.bind = function (t, e) {
            return n("bind", t, e), this
        }, this.unbind = function (t) {
            return n("unbind", t), this
        }, this.bindOnce = function (t, e) {
            return n("bindOnce", t, e), this
        }, this.trigger = function (t) {
            return n("trigger", t), this
        }, this.fade = function (t, e, i, u) {
            return n("fade", t, e, i, u), this
        }, this.fadeIn = function (t, e) {
            return n("fadeIn", t, e), this
        }, this.fadeOut = function (t, e) {
            return n("fadeOut", t, e), this
        }
    }, all: function () {
        return new t.group(t.sounds)
    }, isSupported: function () {
        return!!t.el.canPlayType
    }, isOGGSupported: function () {
        return!!t.el.canPlayType && t.el.canPlayType('audio/ogg; codecs="vorbis"')
    }, isWAVSupported: function () {
        return!!t.el.canPlayType && t.el.canPlayType('audio/wav; codecs="1"')
    }, isMP3Supported: function () {
        return!!t.el.canPlayType && t.el.canPlayType("audio/mpeg;")
    }, isAACSupported: function () {
        return!!t.el.canPlayType && (t.el.canPlayType("audio/x-m4a;") || t.el.canPlayType("audio/aac;"))
    }, toTimer: function (t, n) {
        var e, i, u;
        return e = Math.floor(t / 3600), e = isNaN(e) ? "--" : e >= 10 ? e : "0" + e, i = n ? Math.floor(t / 60 % 60) : Math.floor(t / 60), i = isNaN(i) ? "--" : i >= 10 ? i : "0" + i, u = Math.floor(t % 60), u = isNaN(u) ? "--" : u >= 10 ? u : "0" + u, n ? e + ":" + i + ":" + u : i + ":" + u
    }, fromTimer: function (t) {
        var n = ("" + t).split(":");
        return n && 3 == n.length && (t = 3600 * parseInt(n[0], 10) + 60 * parseInt(n[1], 10) + parseInt(n[2], 10)), n && 2 == n.length && (t = 60 * parseInt(n[0], 10) + parseInt(n[1], 10)), t
    }, toPercent: function (t, n, e) {
        var i = Math.pow(10, e || 0);
        return Math.round(100 * t / n * i) / i
    }, fromPercent: function (t, n, e) {
        var i = Math.pow(10, e || 0);
        return Math.round(n / 100 * t * i) / i
    }};
    return t
});
//
// showdown.js -- A javascript port of Markdown.
//
// Copyright (c) 2007 John Fraser.
//
// Original Markdown Copyright (c) 2004-2005 John Gruber
//   <http://daringfireball.net/projects/markdown/>
//
// Redistributable under a BSD-style open source license.
// See license.txt for more information.
//
// The full source distribution is at:
//
//				A A L
//				T C A
//				T K B
//
//   <http://www.attacklab.net/>
//
//
// Wherever possible, Showdown is a straight, line-by-line port
// of the Perl version of Markdown.
//
// This is not a normal parser design; it's basically just a
// series of string substitutions.  It's hard to read and
// maintain this way,  but keeping Showdown close to the original
// design makes it easier to port new features.
//
// More importantly, Showdown behaves like markdown.pl in most
// edge cases.  So web applications can do client-side preview
// in Javascript, and then build identical HTML on the server.
//
// This port needs the new RegExp functionality of ECMA 262,
// 3rd Edition (i.e. Javascript 1.5).  Most modern web browsers
// should do fine.  Even with the new regular expression features,
// We do a lot of work to emulate Perl's regex functionality.
// The tricky changes in this file mostly have the "attacklab:"
// label.  Major or self-explanatory changes don't.
//
// Smart diff tools like Araxis Merge will be able to match up
// this file with markdown.pl in a useful way.  A little tweaking
// helps: in a copy of markdown.pl, replace "#" with "//" and
// replace "$text" with "text".  Be sure to ignore whitespace
// and line endings.
//
//
// Showdown usage:
//
//   var text = "Markdown *rocks*.";
//
//   var converter = new Showdown.converter();
//   var html = converter.makeHtml(text);
//
//   alert(html);
//
// Note: move the sample code to the bottom of this
// file before uncommenting it.
//
//
// Showdown namespace
//
var Showdown = {extensions: {}}, forEach = Showdown.forEach = function (a, b) {
    if (typeof a.forEach == "function")a.forEach(b); else {
        var c, d = a.length;
        for (c = 0; c < d; c++)b(a[c], c, a)
    }
}, stdExtName = function (a) {
    return a.replace(/[_-]||\s/g, "").toLowerCase()
};
Showdown.converter = function (a) {
    var b, c, d, e = 0, f = [], g = [];
    if (typeof module != "undefind" && typeof exports != "undefined" && typeof require != "undefind") {
        var h = require("fs");
        if (h) {
            var i = h.readdirSync((__dirname || ".") + "/extensions").filter(function (a) {
                return~a.indexOf(".js")
            }).map(function (a) {
                return a.replace(/\.js$/, "")
            });
            Showdown.forEach(i, function (a) {
                var b = stdExtName(a);
                Showdown.extensions[b] = require("./extensions/" + a)
            })
        }
    }
    this.makeHtml = function (a) {
        return b = {}, c = {}, d = [], a = a.replace(/~/g, "~T"), a = a.replace(/\$/g, "~D"), a = a.replace(/\r\n/g, "\n"), a = a.replace(/\r/g, "\n"), a = "\n\n" + a + "\n\n", a = M(a), a = a.replace(/^[ \t]+$/mg, ""), Showdown.forEach(f, function (b) {
            a = k(b, a)
        }), a = z(a), a = m(a), a = l(a), a = o(a), a = K(a), a = a.replace(/~D/g, "$$"), a = a.replace(/~T/g, "~"), Showdown.forEach(g, function (b) {
            a = k(b, a)
        }), a
    };
    if (a && a.extensions) {
        var j = this;
        Showdown.forEach(a.extensions, function (a) {
            typeof a == "string" && (a = Showdown.extensions[stdExtName(a)]);
            if (typeof a != "function")throw"Extension '" + a + "' could not be loaded.  It was either not found or is not a valid extension.";
            Showdown.forEach(a(j), function (a) {
                a.type ? a.type === "language" || a.type === "lang" ? f.push(a) : (a.type === "output" || a.type === "html") && g.push(a) : g.push(a)
            })
        })
    }
    var k = function (a, b) {
        if (a.regex) {
            var c = new RegExp(a.regex, "g");
            return b.replace(c, a.replace)
        }
        if (a.filter)return a.filter(b)
    }, l = function (a) {
        return a += "~0", a = a.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+|(?=~0))/gm, function (a, d, e, f, g) {
            return d = d.toLowerCase(), b[d] = G(e), f ? f + g : (g && (c[d] = g.replace(/"/g, "&quot;")), "")
        }), a = a.replace(/~0/, ""), a
    }, m = function (a) {
        a = a.replace(/\n/g, "\n\n");
        var b = "p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del|style|section|header|footer|nav|article|aside", c = "p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside";
        return a = a.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm, n), a = a.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside)\b[^\r]*?<\/\2>[ \t]*(?=\n+)\n)/gm, n), a = a.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, n), a = a.replace(/(\n\n[ ]{0,3}<!(--[^\r]*?--\s*)+>[ \t]*(?=\n{2,}))/g, n), a = a.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, n), a = a.replace(/\n\n/g, "\n"), a
    }, n = function (a, b) {
        var c = b;
        return c = c.replace(/\n\n/g, "\n"), c = c.replace(/^\n/, ""), c = c.replace(/\n+$/g, ""), c = "\n\n~K" + (d.push(c) - 1) + "K\n\n", c
    }, o = function (a) {
        a = v(a);
        var b = A("<hr />");
        return a = a.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm, b), a = a.replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm, b), a = a.replace(/^[ ]{0,2}([ ]?\_[ ]?){3,}[ \t]*$/gm, b), a = x(a), a = y(a), a = E(a), a = m(a), a = F(a), a
    }, p = function (a) {
        return a = B(a), a = q(a), a = H(a), a = t(a), a = r(a), a = I(a), a = G(a), a = D(a), a = a.replace(/  +\n/g, " <br />\n"), a
    }, q = function (a) {
        var b = /(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;
        return a = a.replace(b, function (a) {
            var b = a.replace(/(.)<\/?code>(?=.)/g, "$1`");
            return b = N(b, "\\`*_"), b
        }), a
    }, r = function (a) {
        return a = a.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, s), a = a.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, s), a = a.replace(/(\[([^\[\]]+)\])()()()()()/g, s), a
    }, s = function (a, d, e, f, g, h, i, j) {
        j == undefined && (j = "");
        var k = d, l = e, m = f.toLowerCase(), n = g, o = j;
        if (n == "") {
            m == "" && (m = l.toLowerCase().replace(/ ?\n/g, " ")), n = "#" + m;
            if (b[m] != undefined)n = b[m], c[m] != undefined && (o = c[m]); else {
                if (!(k.search(/\(\s*\)$/m) > -1))return k;
                n = ""
            }
        }
        n = N(n, "*_");
        var p = '<a href="' + n + '"';
        return o != "" && (o = o.replace(/"/g, "&quot;"), o = N(o, "*_"), p += ' title="' + o + '"'), p += ">" + l + "</a>", p
    }, t = function (a) {
        return a = a.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, u), a = a.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, u), a
    }, u = function (a, d, e, f, g, h, i, j) {
        var k = d, l = e, m = f.toLowerCase(), n = g, o = j;
        o || (o = "");
        if (n == "") {
            m == "" && (m = l.toLowerCase().replace(/ ?\n/g, " ")), n = "#" + m;
            if (b[m] == undefined)return k;
            n = b[m], c[m] != undefined && (o = c[m])
        }
        l = l.replace(/"/g, "&quot;"), n = N(n, "*_");
        var p = '<img src="' + n + '" alt="' + l + '"';
        return o = o.replace(/"/g, "&quot;"), o = N(o, "*_"), p += ' title="' + o + '"', p += " />", p
    }, v = function (a) {
        function b(a) {
            return a.replace(/[^\w]/g, "").toLowerCase()
        }

        return a = a.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm, function (a, c) {
            return A('<h1 id="' + b(c) + '">' + p(c) + "</h1>")
        }), a = a.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm, function (a, c) {
            return A('<h2 id="' + b(c) + '">' + p(c) + "</h2>")
        }), a = a.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm, function (a, c, d) {
            var e = c.length;
            return A("<h" + e + ' id="' + b(d) + '">' + p(d) + "</h" + e + ">")
        }), a
    }, w, x = function (a) {
        a += "~0";
        var b = /^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;
        return e ? a = a.replace(b, function (a, b, c) {
            var d = b, e = c.search(/[*+-]/g) > -1 ? "ul" : "ol";
            d = d.replace(/\n{2,}/g, "\n\n\n");
            var f = w(d);
            return f = f.replace(/\s+$/, ""), f = "<" + e + ">" + f + "</" + e + ">\n", f
        }) : (b = /(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g, a = a.replace(b, function (a, b, c, d) {
            var e = b, f = c, g = d.search(/[*+-]/g) > -1 ? "ul" : "ol", f = f.replace(/\n{2,}/g, "\n\n\n"), h = w(f);
            return h = e + "<" + g + ">\n" + h + "</" + g + ">\n", h
        })), a = a.replace(/~0/, ""), a
    };
    w = function (a) {
        return e++, a = a.replace(/\n{2,}$/, "\n"), a += "~0", a = a.replace(/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+([^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm, function (a, b, c, d, e) {
            var f = e, g = b, h = c;
            return g || f.search(/\n{2,}/) > -1 ? f = o(L(f)) : (f = x(L(f)), f = f.replace(/\n$/, ""), f = p(f)), "<li>" + f + "</li>\n"
        }), a = a.replace(/~0/g, ""), e--, a
    };
    var y = function (a) {
        return a += "~0", a = a.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g, function (a, b, c) {
            var d = b, e = c;
            return d = C(L(d)), d = M(d), d = d.replace(/^\n+/g, ""), d = d.replace(/\n+$/g, ""), d = "<pre><code>" + d + "\n</code></pre>", A(d) + e
        }), a = a.replace(/~0/, ""), a
    }, z = function (a) {
        return a += "~0", a = a.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g, function (a, b, c) {
            var d = b, e = c;
            return e = C(e), e = M(e), e = e.replace(/^\n+/g, ""), e = e.replace(/\n+$/g, ""), e = "<pre><code" + (d ? ' class="' + d + '"' : "") + ">" + e + "\n</code></pre>", A(e)
        }), a = a.replace(/~0/, ""), a
    }, A = function (a) {
        return a = a.replace(/(^\n+|\n+$)/g, ""), "\n\n~K" + (d.push(a) - 1) + "K\n\n"
    }, B = function (a) {
        return a = a.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, function (a, b, c, d, e) {
            var f = d;
            return f = f.replace(/^([ \t]*)/g, ""), f = f.replace(/[ \t]*$/g, ""), f = C(f), b + "<code>" + f + "</code>"
        }), a
    }, C = function (a) {
        return a = a.replace(/&/g, "&amp;"), a = a.replace(/</g, "&lt;"), a = a.replace(/>/g, "&gt;"), a = N(a, "*_{}[]\\", !1), a
    }, D = function (a) {
        return a = a.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g, "<strong>$2</strong>"), a = a.replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g, "<em>$2</em>"), a
    }, E = function (a) {
        return a = a.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm, function (a, b) {
            var c = b;
            return c = c.replace(/^[ \t]*>[ \t]?/gm, "~0"), c = c.replace(/~0/g, ""), c = c.replace(/^[ \t]+$/gm, ""), c = o(c), c = c.replace(/(^|\n)/g, "$1  "), c = c.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function (a, b) {
                var c = b;
                return c = c.replace(/^  /mg, "~0"), c = c.replace(/~0/g, ""), c
            }), A("<blockquote>\n" + c + "\n</blockquote>")
        }), a
    }, F = function (a) {
        a = a.replace(/^\n+/g, ""), a = a.replace(/\n+$/g, "");
        var b = a.split(/\n{2,}/g), c = [], e = b.length;
        for (var f = 0; f < e; f++) {
            var g = b[f];
            g.search(/~K(\d+)K/g) >= 0 ? c.push(g) : g.search(/\S/) >= 0 && (g = p(g), g = g.replace(/^([ \t]*)/g, "<p>"), g += "</p>", c.push(g))
        }
        e = c.length;
        for (var f = 0; f < e; f++)while (c[f].search(/~K(\d+)K/) >= 0) {
            var h = d[RegExp.$1];
            h = h.replace(/\$/g, "$$$$"), c[f] = c[f].replace(/~K\d+K/, h)
        }
        return c.join("\n\n")
    }, G = function (a) {
        return a = a.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;"), a = a.replace(/<(?![a-z\/?\$!])/gi, "&lt;"), a
    }, H = function (a) {
        return a = a.replace(/\\(\\)/g, O), a = a.replace(/\\([`*_{}\[\]()>#+-.!])/g, O), a
    }, I = function (a) {
        return a = a.replace(/<((https?|ftp|dict):[^'">\s]+)>/gi, '<a href="$1">$1</a>'), a = a.replace(/<(?:mailto:)?([-.\w]+\@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, function (a, b) {
            return J(K(b))
        }), a
    }, J = function (a) {
        var b = [function (a) {
            return"&#" + a.charCodeAt(0) + ";"
        }, function (a) {
            return"&#x" + a.charCodeAt(0).toString(16) + ";"
        }, function (a) {
            return a
        }];
        return a = "mailto:" + a, a = a.replace(/./g, function (a) {
            if (a == "@")a = b[Math.floor(Math.random() * 2)](a); else if (a != ":") {
                var c = Math.random();
                a = c > .9 ? b[2](a) : c > .45 ? b[1](a) : b[0](a)
            }
            return a
        }), a = '<a href="' + a + '">' + a + "</a>", a = a.replace(/">.+:/g, '">'), a
    }, K = function (a) {
        return a = a.replace(/~E(\d+)E/g, function (a, b) {
            var c = parseInt(b);
            return String.fromCharCode(c)
        }), a
    }, L = function (a) {
        return a = a.replace(/^(\t|[ ]{1,4})/gm, "~0"), a = a.replace(/~0/g, ""), a
    }, M = function (a) {
        return a = a.replace(/\t(?=\t)/g, "    "), a = a.replace(/\t/g, "~A~B"), a = a.replace(/~B(.+?)~A/g, function (a, b, c) {
            var d = b, e = 4 - d.length % 4;
            for (var f = 0; f < e; f++)d += " ";
            return d
        }), a = a.replace(/~A/g, "    "), a = a.replace(/~B/g, ""), a
    }, N = function (a, b, c) {
        var d = "([" + b.replace(/([\[\]\\])/g, "\\$1") + "])";
        c && (d = "\\\\" + d);
        var e = new RegExp(d, "g");
        return a = a.replace(e, O), a
    }, O = function (a, b) {
        var c = b.charCodeAt(0);
        return"~E" + c + "E"
    }
}, typeof module != "undefined" && (module.exports = Showdown), typeof define == "function" && define.amd && define("showdown", function () {
    return Showdown
});
angular.module('zenNodeWebkitModule', [])
    .factory('fileDialog', [function () {
        var fs = require('fs');
        var callDialog = function (dialog, callback) {
            dialog.addEventListener('change', function () {
                callback(dialog.value);
            }, false);
            dialog.click();
        };

        var dialogs = {};

        dialogs.saveAs = function (callback, defaultFilename, acceptTypes) {
            var dialog = document.createElement('input');
            dialog.type = 'file';
            dialog.nwsaveas = defaultFilename || '';
            if (angular.isArray(acceptTypes)) {
                dialog.accept = acceptTypes.join(',');
            } else if (angular.isString(acceptTypes)) {
                dialog.accept = acceptTypes;
            }
            callDialog(dialog, callback);
        };

        dialogs.openFile = function (callback, multiple, acceptTypes) {
            var dialog = document.createElement('input');
            dialog.type = 'file';
            if (multiple === true) {
                dialog.multiple = 'multiple';
            }
            if (angular.isArray(acceptTypes)) {
                dialog.accept = acceptTypes.join(',');
            } else if (angular.isString(acceptTypes)) {
                dialog.accept = acceptTypes;
            }
            callDialog(dialog, callback);
        };

        dialogs.openDir = function (callback) {
            var dialog = document.createElement('input');
            dialog.type = 'file';
            dialog.nwdirectory = 'nwdirectory';
            callDialog(dialog, callback);
        };

        dialogs.writeFile = function (filename, content) {
            return fs.writeFileSync(filename, content);
        };

        dialogs.readFile = function (file) {
            var data;
            try {
                data = fs.readFileSync(file, 'utf8');
                return data;
            } catch (e) {
                if (e.code === 'ENOENT') {
                    console.log('File not found!');
                } else {
                    throw e;
                }
                return false;
            }
        };

        dialogs.readDir = function (dir) {
            var data;
            try {
                data = fs.readdirSync(dir);
                return data;
            } catch (e) {
                if (e.code === 'ENOENT') {
                    console.log('Directory not found!');
                } else {
                    throw e;
                }
                return false;
            }
        };

        return dialogs;
    }])
    .factory('updateFactory', ['$rootScope', function ($rootScope) {
        return {
            runUpdate: function () {
                //var gui = require('nw.gui');
                var pkg = require('./package.json');
                //TODO: This package is useless to me now unless it can self-update correctly
                var updater = require('node-webkit-updater');
                var upd = new updater(pkg);
                upd.checkNewVersion(function (error, newVersionExists, manifest) {
                    //$rootScope.version = gui.App.manifest.version;
                    $rootScope.update_available = newVersionExists;
                    //$rootScope.latest_version = manifest.version;
                });
            }
        };
    }])
    .run(function (updateFactory) {
        var gui = require('nw.gui');
        win = gui.Window.get();
        if (os == 'Mac') {
            var nativeMenuBar = new gui.Menu({ type: "menubar" });
            try {
                nativeMenuBar.createMacBuiltin("Zen Notebook");
                win.menu = nativeMenuBar;
            } catch (ex) {

            }
        }
        //TODO: I think Windows version has error if buzz is used
        if (os = "Windows") {
            mute = true;
        }
        updateFactory.runUpdate();
    });
angular.module('zenWebModule', [])
    .factory('fileDialog', [function () {
        var callDialog = function (dialog, callback) {
            dialog.addEventListener('change', function () {
                callback(dialog.value);
            }, false);
            dialog.click();
        };

        var dialogs = {};

        dialogs.saveAs = function (callback, defaultFilename, acceptTypes) {
            var dialog = document.createElement('input');
            dialog.type = 'file';
            dialog.nwsaveas = defaultFilename || '';
            if (angular.isArray(acceptTypes)) {
                dialog.accept = acceptTypes.join(',');
            } else if (angular.isString(acceptTypes)) {
                dialog.accept = acceptTypes;
            }
            callDialog(dialog, callback);
        };

        dialogs.openFile = function (callback, multiple, acceptTypes) {
            var dialog = document.createElement('input');
            dialog.type = 'file';
            if (multiple === true) {
                dialog.multiple = 'multiple';
            }
            if (angular.isArray(acceptTypes)) {
                dialog.accept = acceptTypes.join(',');
            } else if (angular.isString(acceptTypes)) {
                dialog.accept = acceptTypes;
            }
            callDialog(dialog, callback);
        };

        dialogs.openDir = function (callback) {
            var dialog = document.createElement('input');
            dialog.type = 'file';
            dialog.nwdirectory = 'nwdirectory';
            callDialog(dialog, callback);
        };

        dialogs.writeFile = function (filename, content) {
            //return fs.writeFileSync(filename, content);
        };

        dialogs.readFile = function (file) {
            //return fs.readFileSync(file);
        };

        return dialogs;
    }]);
/**
 * @description  Zen Notebook
 */
var os = "Unknown ";
if (navigator.appVersion.indexOf("Win") != -1) os = "Windows";
if (navigator.appVersion.indexOf("Mac") != -1) os = "Mac";
if (navigator.appVersion.indexOf("Linux") != -1) os = "Linux";
var isNodeWebkit = (typeof process == "object");
var platformModule = null;
//Global
var win;

//NW
if (isNodeWebkit) {
    platformModule = 'zenNodeWebkitModule';
} else {
    platformModule = 'zenWebModule';
}

//Initialize Application
var zenNotebook = angular.module("zenNotebook", ['ngSanitize', platformModule])
    .run(function ($rootScope, storageFactory) {
        //Sound
        $rootScope.mute = false;
        if (storageFactory.getStorage('mute')) {
            $rootScope.mute = storageFactory.getStorage('mute');
        }
        //Active Component
        $rootScope.active_component = storageFactory.getStorage('active_component');
        if (!$rootScope.active_component) {
            $rootScope.active_component = 'notebook';
        }
        $rootScope.update_available = false;
        $rootScope.version = null;
        $rootScope.latest_version = null;
        //TODO: Load Configuration and Features here

    });
//In order to use filter by, have to convert objects to an array
zenNotebook.filter('object2Array', function () {
    return function (input) {
        var out = [];
        for (i in input) {
            out.push(input[i]);
        }
        return out;
    }
});
//a global bus for clicks I guess
//adds nav menu buttons from component
//broadcasts messages to the controllers down the $rootScope
//TODO: could be replaced with a proper router?
//could be handle by the body controller?
//early implementation while learning angular that worked, so I haven't done the research to fix it
zenNotebook.factory('menuFactory', ['$rootScope', '$injector', function ($rootScope, $injector) {
    var app_nav = [
        {title: 'Export', action: 'export', class: 'fa fa-download', sub: 'foot'},
        {title: 'Theme', action: 'theme', class: 'fa fa-adjust', sub: 'body'},
        {title: 'Settings', action: 'settings', class: 'fa fa-gears', sub: 'foot'},
        {title: 'About', action: 'about', class: 'fa fa-question', sub: 'foot'},
        {title: 'Minimize', action: 'minimize', class: 'fa fa-arrow-down', sub: 'nw'},
        {title: 'Maximize', action: 'maximize', class: 'fa fa-arrows-alt', sub: 'nw'},
        {title: 'Exit', action: 'exit', class: 'fa fa-power-off', sub: 'nw'}
    ];

    var menus = {
        message: null,
        menus: null,
        factory: null,
        loadComponent: function () {
            this.factory = $injector.get($rootScope.active_component + 'Factory');
            var component_nav = this.factory.getMenu();
            this.menus = {
                nav: component_nav.concat(app_nav)
            }
        },
        publishClick: function (message) {
            this.message = message;
            if (message.sub == 'left') {
                $rootScope.$broadcast('toggleLeft');
            }
            if (message.sub == 'foot') {
                $rootScope.$broadcast('toggleFoot');
            }
            if (message.sub == 'body') {
                $rootScope.$broadcast('body');
            }
            if (message.sub == 'nw') {
                if (message.action == 'maximize') {
                    win.toggleFullscreen();
                }
                if (message.action == 'minimize') {
                    win.minimize();
                }
                if (message.action == 'exit') {
                    this.factory.onExit();
                    win.close();
                }
            }
        },
        subscribeClick: function () {
            var message = this.message;
            this.message = null;
            return message;
        }
    };

    menus.loadComponent();

    return menus;
}]);

//handle theme change events
//uses buzz: http://buzz.jaysalvat.com/documentation/sound/
//reacts to keypress events: http://www.w3.org/TR/2006/WD-DOM-Level-3-Events-20060413/keyset.html
//TODO: I think Windows version has error if buzz is used, file path?
zenNotebook.factory('themeFactory', ['$rootScope', function ($rootScope) {
    return {
        theme: window.localStorage && window.localStorage.getItem('theme'),
        relaxSound: new buzz.sound("./assets/relax/rain.ogg", {loop: true, volume: 80}),
        typeSounds: {
            spacebar: new buzz.sound("./assets/typewriter/spacebar.ogg", {volume: 60}),
            keyup: new buzz.sound("./assets/typewriter/keyup.ogg", {volume: 100}),
            bell: new buzz.sound("./assets/typewriter/bell.ogg", {volume: 100}),
            carriage_return_main: new buzz.sound("./assets/typewriter/carriage-return-main.ogg", {volume: 100}),
            carriage_return_stop: new buzz.sound("./assets/typewriter/carriage-return-stop.ogg", {volume: 100})
        },
        typeSound: function (key_code) {
            //Shift
            if (key_code == 'U+0051') {
                sound = 'spacebar';
                //Alt
            } else if (key_code == 'Alt') {
                sound = 'spacebar';
                //Caps Lock
            } else if (key_code == 'CapsLock') {
                sound = 'spacebar';
                //Space
            } else if (key_code == 'U+0020') {
                sound = 'spacebar';
                //Enter
            } else if (key_code == 'Enter') {
                sound = 'carriage_return_main';
                sound = 'carriage_return_stop';
                //Tab
            } else if (key_code == 'U+0009') {
                //sound = 'keyup';
                //sound = 'spacebar';
                sound = 'bell';
                //Backspace - Delete
            } else if (key_code == 'U+0008') {
                sound = 'spacebar';
                //Up Arrow
            } else if (key_code == 'Up') {
                sound = 'spacebar';
                //Down Arrow
            } else if (key_code == 'Down') {
                sound = 'spacebar';
                //Left Arrow
            } else if (key_code == 'Left') {
                sound = 'spacebar';
                //Right Arrow
            } else if (key_code == 'Right') {
                sound = 'spacebar';
            } else {
                sound = 'keyup';
            }
            this.typeSounds[sound].load();
            this.typeSounds[sound].play();
        },
        relaxStart: function () {
            this.relaxSound.load();
            this.relaxSound.play();
        },
        relaxStop: function () {
            this.relaxSound.stop();
        },
        themeSound: function (event) {
            var theme = window.localStorage && window.localStorage.getItem('theme');
            if (event instanceof KeyboardEvent && (theme == 'typewriter light' || theme == 'carbon dark')) {
                this.typeSound(event.keyIdentifier);
            }
            if (event instanceof FocusEvent && theme == 'relax dark') {
                this.relaxStart();
            } else if (event instanceof FocusEvent && theme != 'relax dark') {
                this.relaxStop();
            }
        }
    }
}]);

//handles non-file data storage
//TODO: should this handle file storage also?
//TODO: this needs to switch based on the platform because localStorage won't fly for all
zenNotebook.factory('storageFactory', ['$rootScope', function ($rootScope) {
    return {
        getStorage: function (key, component) {
            if (component) {
                key = component + '.' + key;
            }
            return window.localStorage.getItem(key);
        },
        setStorage: function (key, data, component) {
            if (component) {
                key = component + '.' + key;
            }
            window.localStorage.setItem(key, data);
        },
        deleteStorage: function (key, component) {
            if (component) {
                key = component + '.' + key;
            }
            window.localStorage.removeItem(key);
        }
    }
}]);

zenNotebook.factory('dropboxFactory', ['$rootScope', function ($rootScope) {
    return {

    }
}]);

//TODO: Have component factories inherit from a base componentFactory: http://blog.revolunet.com/blog/2014/02/14/angularjs-services-inheritance/
zenNotebook.factory('componentFactory', ['$rootScope', function ($rootScope) {
    console.log(this);
    return {
        factoryName: 'null',
        documents: {},
        onLoad: function () {

        },
        onWrite: function () {

        },
        onExit: function () {

        },
        getActiveContent: function () {

        },
        countWords: function () {

        },
        getSidebar: function () {

        },
        getMenus: function () {

        },
        saveData: function () {

        },
        loadData: function () {

        }
    }
}]);
//interact with contenteditable region
//special implementation because contenteditable region isn't currently two-way bindable in Angular
//so write my own by passing events back and forth to component
zenNotebook.directive("contenteditable", ['$rootScope', '$injector', function ($rootScope, $injector) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            //Choose component
            var factory = $injector.get($rootScope.active_component + 'Factory');
            //Load component
            //TODO: Hack to wait for file to load
            window.setTimeout(function () {
                element.html(factory.onLoad());
            }, 150);

            //Bind events to content
            //Calls component's onWrite method
            element.bind("blur keyup change focus", function (event) {
                scope.$apply(factory.onWrite(element.html()));
                if ($rootScope.mute == true) {
                    $injector.get('themeFactory').themeSound(event);
                }
            });

            //Event sent by component whenever content should change
            $rootScope.$on('changeContent', function (event, content) {
                factory.onWrite(element.html());
                element.html(content);
                factory.onWrite(element.html());
            });

            $rootScope.$on('loadComponent', function (event) {
                factory = $injector.get($rootScope.active_component + 'Factory');
                element.html(factory.onLoad());
            });
        }
    };
}]);
//controller for changes that effect the whole document at the body element level
//good for instantaneous changes from the the nav menu buttons
//currently only used for theme
zenNotebook.controller('BodyController', ['$scope', 'menuFactory', function ($scope, menuFactory) {
    //TODO: This can be part of the theme service
    $scope.themes = {
        zen_dark: 'zen dark',
        zen_light: 'zen light',
        terminal: 'terminal courier',
        igcognito: 'incognito',
        typewriter: 'typewriter light',
        carbon: 'carbon dark',
        relax: 'relax dark'
    };
    /*TODO: Implement theming system where there are classes in the template indicating
     where a theme class has to be applied: theme-font, theme-main-color, theme-text-color
     */
    $scope.theme = window.localStorage && window.localStorage.getItem('theme');
    if (!$scope.theme) {
        $scope.theme = 'zen dark';
    }
    $scope.count = 0;

    $scope.$on('body', function () {
        var message = menuFactory.subscribeClick(),
            nextCount,
            rowCount = 0;
        if ($scope.count == 7) {
            $scope.count = 0;
        }
        nextCount = $scope.count + 1;
        if (message.action == 'theme') {
            for (var key in $scope.themes) {
                rowCount = rowCount + 1;
                if (rowCount == nextCount) {
                    $scope.theme = $scope.themes[key];
                    window.localStorage && window.localStorage.setItem('theme', $scope.theme);
                    $scope.count = $scope.count + 1;
                    return;
                }
            }
        }
    });
}]);

//controller for the nav menu
//the menu factory handles the functionality
zenNotebook.controller('NavController', ['$scope', 'menuFactory', function ($scope, menuFactory) {
    $scope.menu = menuFactory.menus.nav;
    $scope.expr = function (locals) {
        menuFactory.publishClick(locals);
    }
}]);

//controller for component sidebar functionality
//the menu factory handles the functionality
zenNotebook.controller('ComponentController', ['$scope', '$rootScope', 'menuFactory', function ($scope, $rootScope, menuFactory) {
    $scope.left = {};

    $scope.$on('toggleLeft', function () {
        $scope.left.partial = 'components/' + $rootScope.active_component + '.html';
        $scope.leftChangeClass = !$scope.leftChangeClass;
        $scope.expr = function (locals) {
            menuFactory.publishClick(locals);
        };
    });
}]);

//handles application vs component based settings that come back from the footer
zenNotebook.controller('ApplicationController', ['$scope', '$rootScope', 'menuFactory', 'storageFactory', function ($scope, $rootScope, menuFactory, storageFactory) {
    $scope.foot = {};
    //TODO: Don't hard code the components
    $scope.components = [
        'notebook',
        'nanowrimo',
        'leanpub'
    ];
    $scope.$on('toggleFoot', function () {
        var message = menuFactory.subscribeClick();
        $scope.footChangeClass = !$scope.footChangeClass;
        $scope.foot.partial = 'footer/' + message.action + '.html';

        $scope.expr = function (locals) {
            menuFactory.publishClick(locals);
        };

        $scope.changeComponent = function (component) {
            //TODO: Hack just reloading the page to get new component button to show correct icon
            $rootScope.active_component = component;
            storageFactory.setStorage('active_component', component);
            $rootScope.$broadcast('loadComponent');
            window.location.reload();
        };
    });
}]);
zenNotebook.controller('NotebookController', ['$scope', '$rootScope', 'notebookFactory', 'fileDialog', function ($scope, $rootScope, notebookFactory, fileDialog) {
    $scope.buttons = [
        {title: 'Open Notebook', class: 'open', action: 'open'},
        {title: 'Save Notebook', class: 'save', action: 'save'}
    ];
    $scope.$on('toggleLeft', function () {
        var stats = notebookFactory.getSidebar();
        for (var key in stats) {
            $scope.left[key] = stats[key];
        }
    });
    $scope.expr = function (button) {
        if (button.action == 'open') {
            fileDialog.openFile(
                function (filename) {
                    notebookFactory.loadNotebook(filename);
                },
                false,
                '.json'
            );
        }
        if (button.action == 'save') {
            fileDialog.saveAs(
                function (filename) {
                    notebookFactory.saveNotebook(filename);
                },
                'notebook.json',
                '.json'
            );
        }
    };
}]);
//calendar
zenNotebook.directive('calendar', ['$compile', 'calendarFactory', function ($compile, calendarFactory) {
    return {
        restrict: 'A',
        replace: true,
        link: function (scope, element, attrs) {
            element.html(calendarFactory.getTemplate());
            $compile(element.contents())(scope);
        }
    };
}]);

//calendar click event
zenNotebook.directive("changedate", ['$rootScope', '$compile', 'calendarFactory', 'notebookFactory', function ($rootScope, $compile, calendarFactory, notebookFactory) {
    return function (scope, element, attrs) {
        //TODO: Clicking today should clear content if none exists
        element.bind("click", function () {
            if (attrs.action == 'set-date') {
                $rootScope.$broadcast('changeContent', notebookFactory.onChangeDate(notebookFactory.activeDateText(), attrs.date));
                notebookFactory.setActiveDate(attrs.date);
            }
            angular.element(
                document.getElementById('cal'))
                .replaceWith($compile(calendarFactory.getTemplate(parseInt(attrs.month), parseInt(attrs.year), [parseInt(attrs.day)]))(scope)
            );
        });
    };
}]);
//notebook
//TODO: Notice reuse between notebook and nanowrimo and refactor into base application
zenNotebook.factory('notebookFactory', ['$rootScope', 'storageFactory', 'fileDialog', function ($rootScope, storageFactory, fileDialog) {
    var notebook = {
        years: {},
        file: null,
        currentDate: null,
        activeDate: null,
        activeDateText: function () {
            return this.activeYear + '-' + this.activeMonth + '-' + this.activeDay
        },
        activeYear: null,
        activeMonth: null,
        activeDay: null,
        onLoad: function () {
            var file = storageFactory.getStorage('file');

            if (file) {
                this.loadNotebook(file);
                this.activeMonth = this.activeMonth + 1;
                var content = this.getDaysContent(this.activeDateText());
                storageFactory.setStorage('content', content);
            } else {
                this.setActiveDate(this.currentDate);
            }
            return this.getDaysContent(this.activeDateText())
        },
        onWrite: function (content) {
            var count = this.countWords(content);
            storageFactory.setStorage('content', content);
            storageFactory.setStorage('word_count', count);
        },
        onChangeDate: function (oldDate, newDate) {
            var old = oldDate.split('-');
            this.setDaysContent(old[0] + '-' + old[1] + '-' + old[2]);
            if (this.getDaysContent(newDate)) {
                return this.getDaysContent(newDate);
            } else {
                return '';
            }
        },
        onExit: function () {
            var file = storageFactory.getStorage('file');

            if (file) {
                this.setDaysContent(this.activeDateText());
                this.saveNotebook(file);
            } else {
                //TODO: Warning of lost data
            }
        },
        getDaysContent: function (dateText) {
            var dates = dateText.split('-');
            try {
                return this.years[parseInt(dates[0])][parseInt(dates[1])][parseInt(dates[2])]['content']
                    .replace(/\n/g, "<br>");
            } catch (err) {
                storageFactory.setStorage('error', err);
                return '';
            }
        },
        setDaysContent: function (dateText) {
            if (this.getActiveContent().length > 0) {
                dates = dateText.split('-');
                if (!this.years[parseInt(dates[0])][parseInt(dates[1])]) {
                    this.years[parseInt(dates[0])][parseInt(dates[1])] = {};
                }
                if (this.years[parseInt(dates[0])][parseInt(dates[1])][parseInt(dates[2])]) {
                    this.years[parseInt(dates[0])][parseInt(dates[1])][parseInt(dates[2])]['content'] = this.getActiveContent();
                    this.years[parseInt(dates[0])][parseInt(dates[1])][parseInt(dates[2])]['word_count'] = this.countWords(this.getActiveContent());
                } else {
                    this.years[parseInt(dates[0])][parseInt(dates[1])][parseInt(dates[2])] = {};
                    this.years[parseInt(dates[0])][parseInt(dates[1])][parseInt(dates[2])]['content'] = this.getActiveContent();
                    this.years[parseInt(dates[0])][parseInt(dates[1])][parseInt(dates[2])]['word_count'] = this.countWords(this.getActiveContent());
                }
            }
        },
        setActiveDate: function (rawDate) {
            var date;
            if (rawDate instanceof Date) {
                date = rawDate;
            } else {
                var dateList = rawDate.split('-');
                date = new Date(dateList[0], dateList[1], dateList[2]);
            }
            this.activeDate = date;
            this.activeMonth = this.activeDate.getMonth();
            this.activeYear = this.activeDate.getFullYear();
            this.activeDay = this.activeDate.getDate();
            if (!this.years[this.activeYear]) {
                this.years[this.activeYear] = {};
            }
            if (!this.years[this.activeYear][this.activeMonth]) {
                this.years[this.activeYear][this.activeMonth] = {};
            }
            if (!this.years[this.activeYear][this.activeMonth][this.activeDay]) {
                this.years[this.activeYear][this.activeMonth][this.activeDay] = {};
            }
        },
        //TODO:Parse before saving
        getActiveContent: function () {
            return storageFactory.getStorage('content')
                .replace(/<br>/g, "\n")
                .replace(/<div>/g, "\n")
                .replace(/<\/div>/g, "")
        },
        countWords: function (s) {
            s = s.replace(/(^\s*)|(\s*$)/gi, "");
            s = s.replace(/[ ]{2,}/gi, " ");
            s = s.replace(/\n /, "\n");
            return s.split(' ').length;
        },
        getMonthCount: function () {
            var count = 1000;

            return count;
        },
        getMonthAverage: function () {
            var average = 1000;

            return average;
        },
        getSidebar: function () {
            return {
                word_count: this.countWords(this.getActiveContent()),
                month_average: this.getMonthAverage(),
                month_count: this.getMonthCount()
            };
        },
        getMenu: function () {
            return [
                {title: 'Calendar', action: 'calendar', class: 'fa fa-calendar', sub: 'left'}
            ];
        },
        activeTags: '',
        saveNotebook: function (filename) {
            var journal;
            this.file = filename;
            this.setDaysContent(this.activeDateText());
            journal = JSON.stringify(this);
            try {
                fileDialog.writeFile(filename, journal);
                storageFactory.setStorage('file', this.file);
                return journal;
            } catch (err) {
                storageFactory.setStorage('error', err);
                storageFactory.setStorage('recovery', journal);
            }
        },
        loadNotebook: function (file) {
            var data = fileDialog.readFile(file);
            if (data) {
                tempJournal = JSON.parse(data);
                this.file = file;
                this.currentDate = new Date();
                this.years = tempJournal.years;
                storageFactory.setStorage('file', this.file);
            } else {
                storageFactory.deleteStorage('file');
            }
        }
    };
    if (!notebook.currentDate) {
        notebook.currentDate = new Date();
    }
    if (!notebook.activeDate) {
        notebook.setActiveDate(notebook.currentDate);
    }
    return notebook;
}]);

//calendar
zenNotebook.factory('calendarFactory', ['$rootScope', 'notebookFactory', function ($rootScope, notebookFactory) {
    return {
        monthNames: ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'],
        days: ['s', 'm', 't', 'w', 't', 'f', 's'],
        daysInMonth: function (date) {
            var isLeapYear = function (year) {
                return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
            };
            return [31, (isLeapYear(date.getYear()) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][date.getMonth()];
        },
        formatDateHeading: function (date) {
            var m = this.monthNames[date.getMonth()];
            return m.charAt(0).toUpperCase() + m.slice(1) + ' ' + date.getFullYear();
        },
        currentDate: new Date(),
        //TODO: Clean this up
        getTemplate: function (month, year, dates) {
            var month = ((isNaN(month) || month == null) ? this.currentDate.getMonth() + 1 : month) - 1,
                year = (isNaN(year) || year == null) ? this.currentDate.getFullYear() : year,
                firstDay = new Date(
                    year, month, 1),
                startDay = firstDay.getDay(),
                monthLength = this.daysInMonth(firstDay),
                heading = this.formatDateHeading(firstDay),
                tpl = [
                    '<div id="cal" class="cal">',
                    '<table class="cal">',
                        '<tr><th colspan="7">' + heading + '</th></tr>',
                    '<tr>'],
                day = 1,
                rows = Math.ceil((monthLength + startDay) / 7);
            if (!dates || !dates.length) dates = [this.currentDate.getDate()];
            this.days.forEach(function (day) {
                tpl.push('<td class="cal-head">' + day.toUpperCase() + '</td>');
            });
            tpl.push('</tr>');
            for (var i = 0; i < rows; i++) {
                var row = ['<tr>'];
                for (var j = 0; j < 7; j++) {
                    row.push('<td>');
                    if (day <= monthLength && (i > 0 || j >= startDay)) {
                        var trueYear = year;
                        var nextYear = year;
                        var date = year + '-' + month + '-' + day;
                        var trueMonth = month + 1;
                        if (trueMonth == 13) {
                            trueMonth = 1;
                            trueYear = year + 1;
                            nextYear = trueYear;
                        }
                        var nextMonth = trueMonth + 1;
                        if (nextMonth == 13) {
                            nextMonth = 1;
                            nextYear = year + 1;
                        }
                        var trueDate = year + '-' + trueMonth + '-' + day;
                        if (dates.indexOf(day) == -1) {
                            //TODO: Have a today custom class
                            //TODO: This check doesn't work on first load - need a notebook init function
                            if (notebookFactory.getDaysContent(trueDate).length > 0) {
                                row.push('<div class="cal-day cal-content" data-date="' + trueDate +
                                    '" data-month=' + trueMonth + ' data-day=' + day + ' data-year=' + year + ' data-action="set-date" changedate>');
                            } else {
                                row.push('<div class="cal-day" data-date="' + trueDate +
                                    '" data-month=' + trueMonth + ' data-day=' + day + ' data-year=' + year + ' data-action="set-date" changedate>');
                            }
                        } else {
                            row.push('<div class="cal-day cal-highlight" data-date="' + trueDate +
                                '" data-month=' + trueMonth + ' data-day=' + day + ' data-year=' + year + ' data-action="set-date" changedate>');
                        }
                        row.push(day + '</div>');
                        day++;
                    }
                    row.push('</td>');
                }
                row.push('</tr>');
                tpl.push(row.join(''));
            }
            tpl.push('</table><div class="navigation"><span class="fa fa-arrow-left" data-month=' + (trueMonth - 1) + ' data-year=' + year + ' data-action="month-back" changedate></span>' +
                '<span class="today" data-month=' + trueMonth + ' data-day=' + this.currentDate.getDate() + ' data-year=' + year + ' data-action="set-date" changedate>Today</span>' +
                '<span class="fa fa-arrow-right" data-month=' + nextMonth + ' data-year=' + nextYear + ' data-action="month-forward" changedate></span></div></div>');
            return tpl.join('');
        }
    }
}]);
zenNotebook.controller('NanowrimoController', ['$scope', '$rootScope', 'nanowrimoFactory', 'fileDialog', function ($scope, $rootScope, nanowrimoFactory, fileDialog) {
    $scope.chapters = nanowrimoFactory.documents;
    $scope.buttons = [
        {title: 'Open Book', class: 'open', action: 'open'},
        {title: 'Save Book', class: 'save', action: 'save'}
    ];
    $scope.editedChapter = null;

    $scope.toggleChapter = function (chapter) {
        if ($scope.isChapterShown(chapter)) {
            $scope.shownChapter = null;
        } else {
            $scope.shownChapter = chapter;
        }
    };

    $scope.isChapterShown = function (chapter) {
        return $scope.shownChapter === chapter;
    };
    $scope.$on('toggleLeft', function () {
//        var stats = nanowrimoFactory.getSidebar();
//        for (var key in stats) {
//            $scope.left[key] = stats[key];
//        }
    });

    $scope.expr = function (button) {
        if (button.action == 'open') {
            fileDialog.openFile(
                function (filename) {
                    nanowrimoFactory.loadBook(filename);
                },
                false,
                '.json'
            );
        }
        if (button.action == 'save') {
            fileDialog.saveAs(
                function (filename) {
                    nanowrimoFactory.saveBook(filename);
                },
                'book.json',
                '.json'
            );
        }
    };
    $scope.createChapter = function () {
        var chapter = nanowrimoFactory.createChapter();
        nanowrimoFactory.currentChapter = chapter;
        $scope.startEditing(chapter);
    };
    $scope.setChapter = function (chapter) {
        $rootScope.$broadcast('changeContent', nanowrimoFactory.onChangeChapter(nanowrimoFactory.currentChapter, chapter));
    };
    $scope.startEditing = function (chapter) {
        $scope.setChapter(chapter);
        $scope.chapters[chapter].editing = true;
        $scope.editedChapter = chapter;
    };
    $scope.doneEditing = function (oldChapter, newChapter) {
        nanowrimoFactory.editChapter(oldChapter, newChapter);
        $scope.editedChapter = null;
        $scope.chapters = nanowrimoFactory.documents;
    };
}]);

zenNotebook.factory('nanowrimoFactory', ['$rootScope', 'storageFactory', 'fileDialog', function ($rootScope, storageFactory, fileDialog) {
    return {
        documents: {},
        file: null,
        title: null,
        currentChapter: null,
        startDate: null,
        goalDate: null,
        goalWords: null,
        currentDate: null,
        currentWords: null,
        chapterCount: function () {
            var count = 0;
            for (var k in this.documents) if (this.documents.hasOwnProperty(k)) ++count;
            return count;
        },
        onLoad: function () {
            var file = storageFactory.getStorage('file', 'nanowrimo');
            var chapter = storageFactory.getStorage('chapter', 'nanowrimo');

            if (file) {
                this.loadBook(file);
            } else {

            }
            if (chapter) {
                this.currentChapter = chapter;
                return this.getChapterContent(chapter);
            }
        },
        onWrite: function (content) {
            var count = this.countWords(content);
            storageFactory.setStorage('content', content, 'nanowrimo');
            storageFactory.setStorage('word_count', count, 'nanowrimo');
        },
        onExit: function () {
            var file = storageFactory.getStorage('file', 'nanowrimo');
            if (file) {
                this.saveBook(file);
            } else {
                //TODO: Create file?
            }
        },
        createChapter: function () {
            var count = this.chapterCount() + 1,
                name = 'Chapter ' + (count);
            this.documents[name] = {
                name: name,
                old_name: name,
                editing: false,
                content: '',
                sort_order: count,
                word_count: 0
            };
            $rootScope.$broadcast('changeContent', this.onChangeChapter(this.currentChapter, name));
            return name;
        },
        editChapter: function (old_name, new_name) {
            if (old_name != new_name) {
                this.documents[new_name] = angular.copy(this.documents[old_name]);
                delete(this.documents[old_name]);
                this.documents[new_name].name = new_name;
                this.documents[new_name].old_name = new_name;
            }
            this.documents[new_name].editing = false;
        },
        setChapterContent: function (chapter) {
            if (this.getActiveContent().length > 0) {
                var content = this.getActiveContent();
                this.documents[chapter]['content'] = content;
                this.documents[chapter]['word_count'] = this.countWords(content);
            }
            this.currentChapter = chapter;
        },
        getChapterContent: function (chapter) {
            this.currentChapter = chapter;
            try {
                return this.documents[chapter]['content']
                    .replace(/\n/g, "<br>");
            } catch (err) {
                storageFactory.setStorage('error', err, 'nanowrimo');
                return '';
            }
        },
        onChangeChapter: function (oldChapter, newChapter) {
            if (oldChapter) {
                this.setChapterContent(oldChapter);
            }
            if (this.getChapterContent(newChapter)) {
                return this.getChapterContent(newChapter);
            } else {
                return '';
            }
        },
        //TODO:Parse before saving
        getActiveContent: function () {
            return storageFactory.getStorage('content', 'nanowrimo')
                .replace(/<br>/g, "\n")
                .replace(/<div>/g, "\n")
                .replace(/<\/div>/g, "")
        },
        countWords: function (s) {
            s = s.replace(/(^\s*)|(\s*$)/gi, "");
            s = s.replace(/[ ]{2,}/gi, " ");
            s = s.replace(/\n /, "\n");
            return s.split(' ').length;
        },
        getSidebar: function () {
            return {
                word_count: this.countWords(this.getActiveContent())
            };
        },
        getMenu: function () {
            return [
                {title: 'NanoWrimo', action: 'nanowrimo', class: 'fa fa-book', sub: 'left'}
            ];
        },
        saveBook: function (filename) {
            var book;
            this.file = filename;
            this.setChapterContent(this.currentChapter);
            book = JSON.stringify(this);
            try {
                fileDialog.writeFile(filename, book);
                storageFactory.setStorage('file', this.file, 'nanowrimo');
                storageFactory.setStorage('chapter', this.currentChapter, 'nanowrimo');
            } catch (err) {
                storageFactory.setStorage('error', err, 'nanowrimo');
                storageFactory.setStorage('recovery', book, 'nanowrimo');
            }
        },
        loadBook: function (file) {
            var data = fileDialog.readFile(file);
            if (data) {
                tempBook = JSON.parse(data);
                this.file = file;
                storageFactory.setStorage('file', this.file, 'nanowrimo');
                this.documents = tempBook.documents;
            } else {
                storageFactory.deleteStorage('file', 'nanowrimo');
            }
        }
    }
}]);
zenNotebook.controller('LeanpubController', ['$scope', '$rootScope', 'leanpubFactory', 'fileDialog', function ($scope, $rootScope, leanpubFactory, fileDialog) {
    $scope.chapters = leanpubFactory.documents.book;
    $scope.buttons = [
        {title: 'Open Book', class: 'open', action: 'open'}
    ];
    $scope.editedChapter = null;

    $scope.toggleChapter = function (chapter) {
        if ($scope.isChapterShown(chapter)) {
            $scope.shownChapter = null;
        } else {
            $scope.shownChapter = chapter;
        }
    };

    $scope.isChapterShown = function (chapter) {
        return $scope.shownChapter === chapter;
    };
    $scope.$on('toggleLeft', function () {
//        var stats = leanpubFactory.getSidebar();
//        for (var key in stats) {
//            $scope.left[key] = stats[key];
//        }
    });

    $scope.expr = function (button) {
        if (button.action == 'open') {
            fileDialog.openDir(
                function (dir) {
                    leanpubFactory.loadBook(dir);
                },
                false,
                '.json'
            );
        }
    };
    $scope.createChapter = function () {
        var chapter = leanpubFactory.createChapter();
        leanpubFactory.currentChapter = chapter;
        $scope.startEditing(chapter);
    };
    $scope.setChapter = function (chapter) {
        $rootScope.$broadcast('changeContent', leanpubFactory.onChangeChapter(leanpubFactory.currentChapter, chapter));
    };
    $scope.startEditing = function (chapter) {
        $scope.setChapter(chapter);
        $scope.chapters[chapter].editing = true;
        $scope.editedChapter = chapter;
    };
    $scope.doneEditing = function (oldChapter, newChapter) {
        leanpubFactory.editChapter(oldChapter, newChapter);
        $scope.editedChapter = null;
        $scope.chapters = leanpubFactory.documents;
    };
}]);

zenNotebook.factory('leanpubFactory', ['$rootScope', 'storageFactory', 'fileDialog', function ($rootScope, storageFactory, fileDialog) {
    return {
        documents: {},
        file: null,
        title: null,
        currentChapter: null,
        startDate: null,
        goalDate: null,
        goalWords: null,
        currentDate: null,
        currentWords: null,
        chapterCount: function () {
            var count = 0;
            for (var k in this.documents) if (this.documents.hasOwnProperty(k)) ++count;
            return count;
        },
        onLoad: function () {
            var file = storageFactory.getStorage('file', 'leanpub');
            var chapter = storageFactory.getStorage('chapter', 'leanpub');

            if (file) {
                this.loadBook(file);
            } else {

            }
            if (chapter) {
                this.currentChapter = chapter;
                return this.getChapterContent(chapter);
            }
        },
        onWrite: function (content) {
            var count = this.countWords(content);
            storageFactory.setStorage('content', content, 'leanpub');
            storageFactory.setStorage('word_count', count, 'leanpub');
        },
        onExit: function () {
            var file = storageFactory.getStorage('file', 'leanpub');
            if (file) {
                this.saveBook(file);
            } else {
                //TODO: Create file?
            }
        },
        createChapter: function () {
            var count = this.chapterCount() + 1,
                name = 'Chapter ' + (count);
            this.documents[name] = {
                name: name,
                old_name: name,
                editing: false,
                content: '',
                sort_order: count,
                word_count: 0
            };
            $rootScope.$broadcast('changeContent', this.onChangeChapter(this.currentChapter, name));
            return name;
        },
        editChapter: function (old_name, new_name) {
            if (old_name != new_name) {
                this.documents[new_name] = angular.copy(this.documents[old_name]);
                delete(this.documents[old_name]);
                this.documents[new_name].name = new_name;
                this.documents[new_name].old_name = new_name;
            }
            this.documents[new_name].editing = false;
        },
        setChapterContent: function (chapter) {
            if (this.getActiveContent().length > 0) {
                var content = this.getActiveContent();
                this.documents[chapter]['content'] = content;
                this.documents[chapter]['word_count'] = this.countWords(content);
            }
            this.currentChapter = chapter;
        },
        getChapterContent: function (chapter) {
            this.currentChapter = chapter;
            try {
                return this.documents[chapter]['content']
                    .replace(/\n/g, "<br>");
            } catch (err) {
                storageFactory.setStorage('error', err, 'leanpub');
                return '';
            }
        },
        onChangeChapter: function (oldChapter, newChapter) {
            if (oldChapter) {
                this.setChapterContent(oldChapter);
            }
            if (this.getChapterContent(newChapter)) {
                return this.getChapterContent(newChapter);
            } else {
                return '';
            }
        },
        //TODO:Parse before saving
        getActiveContent: function () {
            return storageFactory.getStorage('content', 'leanpub')
                .replace(/<br>/g, "\n")
                .replace(/<div>/g, "\n")
                .replace(/<\/div>/g, "")
        },
        countWords: function (s) {
            s = s.replace(/(^\s*)|(\s*$)/gi, "");
            s = s.replace(/[ ]{2,}/gi, " ");
            s = s.replace(/\n /, "\n");
            return s.split(' ').length;
        },
        getSidebar: function () {
            return {
                word_count: this.countWords(this.getActiveContent())
            };
        },
        getMenu: function () {
            return [
                {title: 'leanpub', action: 'leanpub', class: 'fa fa-book', sub: 'left'}
            ];
        },
        saveBook: function (filename) {

        },
        loadBook: function (dir) {
            var data = fileDialog.readDir(dir),
                book;
            if (data) {
                if (data.indexOf('manuscript') > -1) {
                    //TODO: This is not cross platform
                    this.file = dir + '/manuscript/';
                    book = fileDialog.readFile(this.file + 'Book.txt');
                    this.documents.book = book.split('\n');
                    console.log(this.documents);
                    storageFactory.setStorage('book', this.documents.book, 'leanpub');
                    storageFactory.setStorage('file', dir, 'leanpub');
                } else {
                    storageFactory.deleteStorage('file', 'leanpub');
                }
            } else {
                storageFactory.deleteStorage('file', 'leanpub');
            }
        }
    }
}]);