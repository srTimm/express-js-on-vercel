import {d as Ht, w as xt, r as ot, a as Qt} from "./DZINsjB2.js";
import {R as ve, q as ke, a8 as Le, D as $e, a9 as Ie, aa as Me} from "./JQJQZOt7.js";
function qr(e, t) {
    const n = {}
      , r = {}
      , a = {
        $$scope: 1
    };
    let o = e.length;
    for (; o--; ) {
        const i = e[o]
          , c = t[o];
        if (c) {
            for (const s in i)
                s in c || (r[s] = 1);
            for (const s in c)
                a[s] || (n[s] = c[s],
                a[s] = 1);
            e[o] = c
        } else
            for (const s in i)
                a[s] = 1
    }
    for (const i in r)
        i in n || (n[i] = void 0);
    return n
}
function _e(e) {
    return e[e.length - 1]
}
function zr(e, t) {
    return e.map( (n, r) => e[(t + r) % e.length])
}
function We(e) {
    return Object.keys(e).reduce( (t, n) => e[n] === void 0 ? t : t + `${n}:${e[n]};`, "")
}
function Gr(e) {
    return e ? !0 : void 0
}
We({
    position: "absolute",
    opacity: 0,
    "pointer-events": "none",
    margin: 0,
    transform: "translateX(-100%)"
});
function Yr(e) {
    if (e !== null)
        return e
}
function te(e) {
    function t(n) {
        return n(e),
        () => {}
    }
    return {
        subscribe: t
    }
}
function Xr(e) {
    if (!je)
        return null;
    const t = document.querySelector(`[data-melt-id="${e}"]`);
    return G(t) ? t : null
}
const mt = e => new Proxy(e,{
    get(t, n, r) {
        return Reflect.get(t, n, r)
    },
    ownKeys(t) {
        return Reflect.ownKeys(t).filter(n => n !== "action")
    }
})
  , ee = e => typeof e == "function";
Be("empty");
function Be(e, t) {
    const {stores: n, action: r, returned: a} = t ?? {}
      , o = ( () => {
        if (n && a)
            return Ht(n, c => {
                const s = a(c);
                if (ee(s)) {
                    const l = (...u) => mt({
                        ...s(...u),
                        [`data-melt-${e}`]: "",
                        action: r ?? I
                    });
                    return l.action = r ?? I,
                    l
                }
                return mt({
                    ...s,
                    [`data-melt-${e}`]: "",
                    action: r ?? I
                })
            }
            );
        {
            const c = a
              , s = c == null ? void 0 : c();
            if (ee(s)) {
                const l = (...u) => mt({
                    ...s(...u),
                    [`data-melt-${e}`]: "",
                    action: r ?? I
                });
                return l.action = r ?? I,
                te(l)
            }
            return te(mt({
                ...s,
                [`data-melt-${e}`]: "",
                action: r ?? I
            }))
        }
    }
    )()
      , i = r ?? ( () => {}
    );
    return i.subscribe = o.subscribe,
    i
}
function Zr(e) {
    const t = o => o ? `${e}-${o}` : e
      , n = o => `data-melt-${e}${o ? `-${o}` : ""}`
      , r = o => `[data-melt-${e}${o ? `-${o}` : ""}]`;
    return {
        name: t,
        attribute: n,
        selector: r,
        getEl: o => document.querySelector(r(o))
    }
}
const je = typeof document < "u"
  , Ke = e => typeof e == "function";
function Ut(e) {
    return e instanceof Element
}
function G(e) {
    return e instanceof HTMLElement
}
function Jr(e) {
    const t = e.getAttribute("aria-disabled")
      , n = e.getAttribute("disabled")
      , r = e.hasAttribute("data-disabled");
    return !!(t === "true" || n !== null || r)
}
function Qr(e) {
    return e.pointerType === "touch"
}
function ti(e) {
    return e.matches(":focus-visible")
}
function Ve(e) {
    return e !== null && typeof e == "object"
}
function He(e) {
    return Ve(e) && "subscribe"in e
}
function Et(...e) {
    return (...t) => {
        for (const n of e)
            typeof n == "function" && n(...t)
    }
}
function I() {}
function X(e, t, n, r) {
    const a = Array.isArray(t) ? t : [t];
    return a.forEach(o => e.addEventListener(o, n, r)),
    () => {
        a.forEach(o => e.removeEventListener(o, n, r))
    }
}
function ei(e, t, n, r) {
    const a = Array.isArray(t) ? t : [t];
    if (typeof n == "function") {
        const o = qe(i => n(i));
        return a.forEach(i => e.addEventListener(i, o, r)),
        () => {
            a.forEach(i => e.removeEventListener(i, o, r))
        }
    }
    return () => void 0
}
function Ue(e) {
    const t = e.currentTarget;
    if (!G(t))
        return null;
    const n = new CustomEvent(`m-${e.type}`,{
        detail: {
            originalEvent: e
        },
        cancelable: !0
    });
    return t.dispatchEvent(n),
    n
}
function qe(e) {
    return t => {
        const n = Ue(t);
        if (!(n != null && n.defaultPrevented))
            return e(t)
    }
}
function ni(e, ...t) {
    const n = {};
    for (const r of Object.keys(e))
        t.includes(r) || (n[r] = e[r]);
    return n
}
function Dt(e) {
    return {
        ...e,
        get: () => ve(e)
    }
}
Dt.writable = function(e) {
    const t = xt(e);
    let n = e;
    return {
        subscribe: t.subscribe,
        set(r) {
            t.set(r),
            n = r
        },
        update(r) {
            const a = r(n);
            t.set(a),
            n = a
        },
        get() {
            return n
        }
    }
}
;
Dt.derived = function(e, t) {
    const n = new Map
      , r = () => {
        const o = Array.isArray(e) ? e.map(i => i.get()) : e.get();
        return t(o)
    }
    ;
    return {
        get: r,
        subscribe: o => {
            const i = [];
            return (Array.isArray(e) ? e : [e]).forEach(s => {
                i.push(s.subscribe( () => {
                    o(r())
                }
                ))
            }
            ),
            o(r()),
            n.set(o, i),
            () => {
                const s = n.get(o);
                if (s)
                    for (const l of s)
                        l();
                n.delete(o)
            }
        }
    }
}
;
const ri = (e, t) => {
    const n = Dt(e)
      , r = (o, i) => {
        n.update(c => {
            const s = o(c);
            let l = s;
            return t && (l = t({
                curr: c,
                next: s
            })),
            i == null || i(l),
            l
        }
        )
    }
    ;
    return {
        ...n,
        update: r,
        set: o => {
            r( () => o)
        }
    }
}
;
function ze(e) {
    return new Promise(t => setTimeout(t, e))
}
let Ge = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"
  , Ye = (e=21) => {
    let t = ""
      , n = e | 0;
    for (; n--; )
        t += Ge[Math.random() * 64 | 0];
    return t
}
;
function Xe() {
    return Ye(10)
}
function ii(e) {
    return e.reduce( (t, n) => (t[n] = Xe(),
    t), {})
}
const z = {
    ARROW_DOWN: "ArrowDown",
    ARROW_LEFT: "ArrowLeft",
    ARROW_RIGHT: "ArrowRight",
    ARROW_UP: "ArrowUp",
    END: "End",
    ENTER: "Enter",
    ESCAPE: "Escape",
    HOME: "Home",
    PAGE_DOWN: "PageDown",
    PAGE_UP: "PageUp",
    SPACE: " ",
    TAB: "Tab"
}
  , Ze = [z.ARROW_DOWN, z.PAGE_UP, z.HOME]
  , Je = [z.ARROW_UP, z.PAGE_DOWN, z.END]
  , oi = [...Ze, ...Je]
  , ai = [z.ENTER, z.SPACE];
function si(e) {
    const {open: t, forceVisible: n, activeTrigger: r} = e;
    return Ht([t, n, r], ([a,o,i]) => (a || o) && i !== null)
}
const ci = e => {
    try {
        ke(e)
    } catch {
        return e
    }
}
  , Qe = e => {
    try {
        Le(e)
    } catch {
        return e
    }
}
;
function tn(e, t) {
    let n;
    const r = Ht(e, o => {
        n == null || n(),
        n = t(o)
    }
    ).subscribe(I)
      , a = () => {
        r(),
        n == null || n()
    }
    ;
    return Qe(a),
    a
}
function li(e) {
    const t = {};
    return Object.keys(e).forEach(n => {
        const r = n
          , a = e[r];
        t[r] = Dt(xt(a))
    }
    ),
    t
}
function en(e) {
    let t = e.parentElement;
    for (; G(t) && !t.hasAttribute("data-portal"); )
        t = t.parentElement;
    return t || "body"
}
function ui(e, t) {
    return t !== void 0 ? t : en(e) === "body" ? document.body : null
}
ot(void 0, e => {
    function t(r) {
        e(r),
        e(void 0)
    }
    return X(document, "pointerup", t, {
        passive: !1,
        capture: !0
    })
}
);
const nn = ot(void 0, e => {
    function t(r) {
        r && r.key === z.ESCAPE && e(r),
        e(void 0)
    }
    return X(document, "keydown", t, {
        passive: !1
    })
}
)
  , rn = (e, t={}) => {
    let n = I;
    function r(a={}) {
        n();
        const o = {
            enabled: !0,
            ...a
        }
          , i = He(o.enabled) ? o.enabled : ot(o.enabled);
        n = Et(nn.subscribe(c => {
            var l;
            if (!c || !ve(i))
                return;
            const s = c.target;
            if (!(!G(s) || s.closest("[data-escapee]") !== e)) {
                if (c.preventDefault(),
                o.ignore) {
                    if (Ke(o.ignore)) {
                        if (o.ignore(c))
                            return
                    } else if (Array.isArray(o.ignore) && o.ignore.length > 0 && o.ignore.some(u => u && s === u))
                        return
                }
                (l = o.handler) == null || l.call(o, c)
            }
        }
        ), tn(i, c => {
            c ? e.dataset.escapee = "" : delete e.dataset.escapee
        }
        ))
    }
    return r(t),
    {
        update: r,
        destroy() {
            e.removeAttribute("data-escapee"),
            n()
        }
    }
}
  , Z = Math.min
  , M = Math.max
  , At = Math.round
  , gt = Math.floor
  , V = e => ({
    x: e,
    y: e
})
  , on = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , an = {
    start: "end",
    end: "start"
};
function Wt(e, t, n) {
    return M(e, Z(t, n))
}
function ct(e, t) {
    return typeof e == "function" ? e(t) : e
}
function J(e) {
    return e.split("-")[0]
}
function lt(e) {
    return e.split("-")[1]
}
function he(e) {
    return e === "x" ? "y" : "x"
}
function qt(e) {
    return e === "y" ? "height" : "width"
}
const sn = new Set(["top", "bottom"]);
function q(e) {
    return sn.has(J(e)) ? "y" : "x"
}
function zt(e) {
    return he(q(e))
}
function cn(e, t, n) {
    n === void 0 && (n = !1);
    const r = lt(e)
      , a = zt(e)
      , o = qt(a);
    let i = a === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[o] > t.floating[o] && (i = Tt(i)),
    [i, Tt(i)]
}
function ln(e) {
    const t = Tt(e);
    return [Bt(e), t, Bt(t)]
}
function Bt(e) {
    return e.replace(/start|end/g, t => an[t])
}
const ne = ["left", "right"]
  , re = ["right", "left"]
  , un = ["top", "bottom"]
  , fn = ["bottom", "top"];
function dn(e, t, n) {
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? re : ne : t ? ne : re;
    case "left":
    case "right":
        return t ? un : fn;
    default:
        return []
    }
}
function pn(e, t, n, r) {
    const a = lt(e);
    let o = dn(J(e), n === "start", r);
    return a && (o = o.map(i => i + "-" + a),
    t && (o = o.concat(o.map(Bt)))),
    o
}
function Tt(e) {
    return e.replace(/left|right|bottom|top/g, t => on[t])
}
function bn(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function me(e) {
    return typeof e != "number" ? bn(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function Ot(e) {
    const {x: t, y: n, width: r, height: a} = e;
    return {
        width: r,
        height: a,
        top: n,
        left: t,
        right: t + r,
        bottom: n + a,
        x: t,
        y: n
    }
}
function ie(e, t, n) {
    let {reference: r, floating: a} = e;
    const o = q(t)
      , i = zt(t)
      , c = qt(i)
      , s = J(t)
      , l = o === "y"
      , u = r.x + r.width / 2 - a.width / 2
      , p = r.y + r.height / 2 - a.height / 2
      , h = r[c] / 2 - a[c] / 2;
    let b;
    switch (s) {
    case "top":
        b = {
            x: u,
            y: r.y - a.height
        };
        break;
    case "bottom":
        b = {
            x: u,
            y: r.y + r.height
        };
        break;
    case "right":
        b = {
            x: r.x + r.width,
            y: p
        };
        break;
    case "left":
        b = {
            x: r.x - a.width,
            y: p
        };
        break;
    default:
        b = {
            x: r.x,
            y: r.y
        }
    }
    switch (lt(t)) {
    case "start":
        b[i] -= h * (n && l ? -1 : 1);
        break;
    case "end":
        b[i] += h * (n && l ? -1 : 1);
        break
    }
    return b
}
const vn = async (e, t, n) => {
    const {placement: r="bottom", strategy: a="absolute", middleware: o=[], platform: i} = n
      , c = o.filter(Boolean)
      , s = await (i.isRTL == null ? void 0 : i.isRTL(t));
    let l = await i.getElementRects({
        reference: e,
        floating: t,
        strategy: a
    })
      , {x: u, y: p} = ie(l, r, s)
      , h = r
      , b = {}
      , v = 0;
    for (let g = 0; g < c.length; g++) {
        const {name: w, fn: m} = c[g]
          , {x: T, y: R, data: F, reset: P} = await m({
            x: u,
            y: p,
            initialPlacement: r,
            placement: h,
            strategy: a,
            middlewareData: b,
            rects: l,
            platform: i,
            elements: {
                reference: e,
                floating: t
            }
        });
        u = T ?? u,
        p = R ?? p,
        b = {
            ...b,
            [w]: {
                ...b[w],
                ...F
            }
        },
        P && v <= 50 && (v++,
        typeof P == "object" && (P.placement && (h = P.placement),
        P.rects && (l = P.rects === !0 ? await i.getElementRects({
            reference: e,
            floating: t,
            strategy: a
        }) : P.rects),
        {x: u, y: p} = ie(l, h, s)),
        g = -1)
    }
    return {
        x: u,
        y: p,
        placement: h,
        strategy: a,
        middlewareData: b
    }
}
;
async function Gt(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: a, platform: o, rects: i, elements: c, strategy: s} = e
      , {boundary: l="clippingAncestors", rootBoundary: u="viewport", elementContext: p="floating", altBoundary: h=!1, padding: b=0} = ct(t, e)
      , v = me(b)
      , w = c[h ? p === "floating" ? "reference" : "floating" : p]
      , m = Ot(await o.getClippingRect({
        element: (n = await (o.isElement == null ? void 0 : o.isElement(w))) == null || n ? w : w.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(c.floating)),
        boundary: l,
        rootBoundary: u,
        strategy: s
    }))
      , T = p === "floating" ? {
        x: r,
        y: a,
        width: i.floating.width,
        height: i.floating.height
    } : i.reference
      , R = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c.floating))
      , F = await (o.isElement == null ? void 0 : o.isElement(R)) ? await (o.getScale == null ? void 0 : o.getScale(R)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , P = Ot(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: c,
        rect: T,
        offsetParent: R,
        strategy: s
    }) : T);
    return {
        top: (m.top - P.top + v.top) / F.y,
        bottom: (P.bottom - m.bottom + v.bottom) / F.y,
        left: (m.left - P.left + v.left) / F.x,
        right: (P.right - m.right + v.right) / F.x
    }
}
const hn = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: a, rects: o, platform: i, elements: c, middlewareData: s} = t
          , {element: l, padding: u=0} = ct(e, t) || {};
        if (l == null)
            return {};
        const p = me(u)
          , h = {
            x: n,
            y: r
        }
          , b = zt(a)
          , v = qt(b)
          , g = await i.getDimensions(l)
          , w = b === "y"
          , m = w ? "top" : "left"
          , T = w ? "bottom" : "right"
          , R = w ? "clientHeight" : "clientWidth"
          , F = o.reference[v] + o.reference[b] - h[b] - o.floating[v]
          , P = h[b] - o.reference[b]
          , L = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l));
        let C = L ? L[R] : 0;
        (!C || !await (i.isElement == null ? void 0 : i.isElement(L))) && (C = c.floating[R] || o.floating[v]);
        const W = F / 2 - P / 2
          , B = C / 2 - g[v] / 2 - 1
          , k = Z(p[m], B)
          , $ = Z(p[T], B)
          , O = k
          , f = C - g[v] - $
          , d = C / 2 - g[v] / 2 + W
          , y = Wt(O, d, f)
          , A = !s.arrow && lt(a) != null && d !== y && o.reference[v] / 2 - (d < O ? k : $) - g[v] / 2 < 0
          , x = A ? d < O ? d - O : d - f : 0;
        return {
            [b]: h[b] + x,
            data: {
                [b]: y,
                centerOffset: d - y - x,
                ...A && {
                    alignmentOffset: x
                }
            },
            reset: A
        }
    }
})
  , mn = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: a, middlewareData: o, rects: i, initialPlacement: c, platform: s, elements: l} = t
              , {mainAxis: u=!0, crossAxis: p=!0, fallbackPlacements: h, fallbackStrategy: b="bestFit", fallbackAxisSideDirection: v="none", flipAlignment: g=!0, ...w} = ct(e, t);
            if ((n = o.arrow) != null && n.alignmentOffset)
                return {};
            const m = J(a)
              , T = q(c)
              , R = J(c) === c
              , F = await (s.isRTL == null ? void 0 : s.isRTL(l.floating))
              , P = h || (R || !g ? [Tt(c)] : ln(c))
              , L = v !== "none";
            !h && L && P.push(...pn(c, g, v, F));
            const C = [c, ...P]
              , W = await Gt(t, w)
              , B = [];
            let k = ((r = o.flip) == null ? void 0 : r.overflows) || [];
            if (u && B.push(W[m]),
            p) {
                const d = cn(a, i, F);
                B.push(W[d[0]], W[d[1]])
            }
            if (k = [...k, {
                placement: a,
                overflows: B
            }],
            !B.every(d => d <= 0)) {
                var $, O;
                const d = ((($ = o.flip) == null ? void 0 : $.index) || 0) + 1
                  , y = C[d];
                if (y && (!(p === "alignment" ? T !== q(y) : !1) || k.every(S => q(S.placement) === T ? S.overflows[0] > 0 : !0)))
                    return {
                        data: {
                            index: d,
                            overflows: k
                        },
                        reset: {
                            placement: y
                        }
                    };
                let A = (O = k.filter(x => x.overflows[0] <= 0).sort( (x, S) => x.overflows[1] - S.overflows[1])[0]) == null ? void 0 : O.placement;
                if (!A)
                    switch (b) {
                    case "bestFit":
                        {
                            var f;
                            const x = (f = k.filter(S => {
                                if (L) {
                                    const E = q(S.placement);
                                    return E === T || E === "y"
                                }
                                return !0
                            }
                            ).map(S => [S.placement, S.overflows.filter(E => E > 0).reduce( (E, D) => E + D, 0)]).sort( (S, E) => S[1] - E[1])[0]) == null ? void 0 : f[0];
                            x && (A = x);
                            break
                        }
                    case "initialPlacement":
                        A = c;
                        break
                    }
                if (a !== A)
                    return {
                        reset: {
                            placement: A
                        }
                    }
            }
            return {}
        }
    }
}
  , gn = new Set(["left", "top"]);
async function yn(e, t) {
    const {placement: n, platform: r, elements: a} = e
      , o = await (r.isRTL == null ? void 0 : r.isRTL(a.floating))
      , i = J(n)
      , c = lt(n)
      , s = q(n) === "y"
      , l = gn.has(i) ? -1 : 1
      , u = o && s ? -1 : 1
      , p = ct(t, e);
    let {mainAxis: h, crossAxis: b, alignmentAxis: v} = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: p.mainAxis || 0,
        crossAxis: p.crossAxis || 0,
        alignmentAxis: p.alignmentAxis
    };
    return c && typeof v == "number" && (b = c === "end" ? v * -1 : v),
    s ? {
        x: b * u,
        y: h * l
    } : {
        x: h * l,
        y: b * u
    }
}
const wn = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: a, y: o, placement: i, middlewareData: c} = t
              , s = await yn(t, e);
            return i === ((n = c.offset) == null ? void 0 : n.placement) && (r = c.arrow) != null && r.alignmentOffset ? {} : {
                x: a + s.x,
                y: o + s.y,
                data: {
                    ...s,
                    placement: i
                }
            }
        }
    }
}
  , xn = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: a} = t
              , {mainAxis: o=!0, crossAxis: i=!1, limiter: c={
                fn: w => {
                    let {x: m, y: T} = w;
                    return {
                        x: m,
                        y: T
                    }
                }
            }, ...s} = ct(e, t)
              , l = {
                x: n,
                y: r
            }
              , u = await Gt(t, s)
              , p = q(J(a))
              , h = he(p);
            let b = l[h]
              , v = l[p];
            if (o) {
                const w = h === "y" ? "top" : "left"
                  , m = h === "y" ? "bottom" : "right"
                  , T = b + u[w]
                  , R = b - u[m];
                b = Wt(T, b, R)
            }
            if (i) {
                const w = p === "y" ? "top" : "left"
                  , m = p === "y" ? "bottom" : "right"
                  , T = v + u[w]
                  , R = v - u[m];
                v = Wt(T, v, R)
            }
            const g = c.fn({
                ...t,
                [h]: b,
                [p]: v
            });
            return {
                ...g,
                data: {
                    x: g.x - n,
                    y: g.y - r,
                    enabled: {
                        [h]: o,
                        [p]: i
                    }
                }
            }
        }
    }
}
  , En = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: a, rects: o, platform: i, elements: c} = t
              , {apply: s= () => {}
            , ...l} = ct(e, t)
              , u = await Gt(t, l)
              , p = J(a)
              , h = lt(a)
              , b = q(a) === "y"
              , {width: v, height: g} = o.floating;
            let w, m;
            p === "top" || p === "bottom" ? (w = p,
            m = h === (await (i.isRTL == null ? void 0 : i.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (m = p,
            w = h === "end" ? "top" : "bottom");
            const T = g - u.top - u.bottom
              , R = v - u.left - u.right
              , F = Z(g - u[w], T)
              , P = Z(v - u[m], R)
              , L = !t.middlewareData.shift;
            let C = F
              , W = P;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (W = R),
            (r = t.middlewareData.shift) != null && r.enabled.y && (C = T),
            L && !h) {
                const k = M(u.left, 0)
                  , $ = M(u.right, 0)
                  , O = M(u.top, 0)
                  , f = M(u.bottom, 0);
                b ? W = v - 2 * (k !== 0 || $ !== 0 ? k + $ : M(u.left, u.right)) : C = g - 2 * (O !== 0 || f !== 0 ? O + f : M(u.top, u.bottom))
            }
            await s({
                ...t,
                availableWidth: W,
                availableHeight: C
            });
            const B = await i.getDimensions(c.floating);
            return v !== B.width || g !== B.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function Ct() {
    return typeof window < "u"
}
function ut(e) {
    return ge(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function _(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function U(e) {
    var t;
    return (t = (ge(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function ge(e) {
    return Ct() ? e instanceof Node || e instanceof _(e).Node : !1
}
function j(e) {
    return Ct() ? e instanceof Element || e instanceof _(e).Element : !1
}
function H(e) {
    return Ct() ? e instanceof HTMLElement || e instanceof _(e).HTMLElement : !1
}
function oe(e) {
    return !Ct() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof _(e).ShadowRoot
}
const An = new Set(["inline", "contents"]);
function ht(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: a} = K(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !An.has(a)
}
const Tn = new Set(["table", "td", "th"]);
function On(e) {
    return Tn.has(ut(e))
}
const Sn = [":popover-open", ":modal"];
function Nt(e) {
    return Sn.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
const Rn = ["transform", "translate", "scale", "rotate", "perspective"]
  , Pn = ["transform", "translate", "scale", "rotate", "perspective", "filter"]
  , Fn = ["paint", "layout", "strict", "content"];
function Yt(e) {
    const t = Xt()
      , n = j(e) ? K(e) : e;
    return Rn.some(r => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Pn.some(r => (n.willChange || "").includes(r)) || Fn.some(r => (n.contain || "").includes(r))
}
function Dn(e) {
    let t = Q(e);
    for (; H(t) && !st(t); ) {
        if (Yt(t))
            return t;
        if (Nt(t))
            return null;
        t = Q(t)
    }
    return null
}
function Xt() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const Cn = new Set(["html", "body", "#document"]);
function st(e) {
    return Cn.has(ut(e))
}
function K(e) {
    return _(e).getComputedStyle(e)
}
function kt(e) {
    return j(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function Q(e) {
    if (ut(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || oe(e) && e.host || U(e);
    return oe(t) ? t.host : t
}
function ye(e) {
    const t = Q(e);
    return st(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : H(t) && ht(t) ? t : ye(t)
}
function vt(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const a = ye(e)
      , o = a === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , i = _(a);
    if (o) {
        const c = jt(i);
        return t.concat(i, i.visualViewport || [], ht(a) ? a : [], c && n ? vt(c) : [])
    }
    return t.concat(a, vt(a, [], n))
}
function jt(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function we(e) {
    const t = K(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const a = H(e)
      , o = a ? e.offsetWidth : n
      , i = a ? e.offsetHeight : r
      , c = At(n) !== o || At(r) !== i;
    return c && (n = o,
    r = i),
    {
        width: n,
        height: r,
        $: c
    }
}
function Zt(e) {
    return j(e) ? e : e.contextElement
}
function at(e) {
    const t = Zt(e);
    if (!H(t))
        return V(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: a, $: o} = we(t);
    let i = (o ? At(n.width) : n.width) / r
      , c = (o ? At(n.height) : n.height) / a;
    return (!i || !Number.isFinite(i)) && (i = 1),
    (!c || !Number.isFinite(c)) && (c = 1),
    {
        x: i,
        y: c
    }
}
const Nn = V(0);
function xe(e) {
    const t = _(e);
    return !Xt() || !t.visualViewport ? Nn : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function kn(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== _(e) ? !1 : t
}
function nt(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const a = e.getBoundingClientRect()
      , o = Zt(e);
    let i = V(1);
    t && (r ? j(r) && (i = at(r)) : i = at(e));
    const c = kn(o, n, r) ? xe(o) : V(0);
    let s = (a.left + c.x) / i.x
      , l = (a.top + c.y) / i.y
      , u = a.width / i.x
      , p = a.height / i.y;
    if (o) {
        const h = _(o)
          , b = r && j(r) ? _(r) : r;
        let v = h
          , g = jt(v);
        for (; g && r && b !== v; ) {
            const w = at(g)
              , m = g.getBoundingClientRect()
              , T = K(g)
              , R = m.left + (g.clientLeft + parseFloat(T.paddingLeft)) * w.x
              , F = m.top + (g.clientTop + parseFloat(T.paddingTop)) * w.y;
            s *= w.x,
            l *= w.y,
            u *= w.x,
            p *= w.y,
            s += R,
            l += F,
            v = _(g),
            g = jt(v)
        }
    }
    return Ot({
        width: u,
        height: p,
        x: s,
        y: l
    })
}
function Lt(e, t) {
    const n = kt(e).scrollLeft;
    return t ? t.left + n : nt(U(e)).left + n
}
function Ee(e, t) {
    const n = e.getBoundingClientRect()
      , r = n.left + t.scrollLeft - Lt(e, n)
      , a = n.top + t.scrollTop;
    return {
        x: r,
        y: a
    }
}
function Ln(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: a} = e;
    const o = a === "fixed"
      , i = U(r)
      , c = t ? Nt(t.floating) : !1;
    if (r === i || c && o)
        return n;
    let s = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , l = V(1);
    const u = V(0)
      , p = H(r);
    if ((p || !p && !o) && ((ut(r) !== "body" || ht(i)) && (s = kt(r)),
    H(r))) {
        const b = nt(r);
        l = at(r),
        u.x = b.x + r.clientLeft,
        u.y = b.y + r.clientTop
    }
    const h = i && !p && !o ? Ee(i, s) : V(0);
    return {
        width: n.width * l.x,
        height: n.height * l.y,
        x: n.x * l.x - s.scrollLeft * l.x + u.x + h.x,
        y: n.y * l.y - s.scrollTop * l.y + u.y + h.y
    }
}
function $n(e) {
    return Array.from(e.getClientRects())
}
function In(e) {
    const t = U(e)
      , n = kt(e)
      , r = e.ownerDocument.body
      , a = M(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , o = M(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let i = -n.scrollLeft + Lt(e);
    const c = -n.scrollTop;
    return K(r).direction === "rtl" && (i += M(t.clientWidth, r.clientWidth) - a),
    {
        width: a,
        height: o,
        x: i,
        y: c
    }
}
const ae = 25;
function Mn(e, t) {
    const n = _(e)
      , r = U(e)
      , a = n.visualViewport;
    let o = r.clientWidth
      , i = r.clientHeight
      , c = 0
      , s = 0;
    if (a) {
        o = a.width,
        i = a.height;
        const u = Xt();
        (!u || u && t === "fixed") && (c = a.offsetLeft,
        s = a.offsetTop)
    }
    const l = Lt(r);
    if (l <= 0) {
        const u = r.ownerDocument
          , p = u.body
          , h = getComputedStyle(p)
          , b = u.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0
          , v = Math.abs(r.clientWidth - p.clientWidth - b);
        v <= ae && (o -= v)
    } else
        l <= ae && (o += l);
    return {
        width: o,
        height: i,
        x: c,
        y: s
    }
}
const _n = new Set(["absolute", "fixed"]);
function Wn(e, t) {
    const n = nt(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , a = n.left + e.clientLeft
      , o = H(e) ? at(e) : V(1)
      , i = e.clientWidth * o.x
      , c = e.clientHeight * o.y
      , s = a * o.x
      , l = r * o.y;
    return {
        width: i,
        height: c,
        x: s,
        y: l
    }
}
function se(e, t, n) {
    let r;
    if (t === "viewport")
        r = Mn(e, n);
    else if (t === "document")
        r = In(U(e));
    else if (j(t))
        r = Wn(t, n);
    else {
        const a = xe(e);
        r = {
            x: t.x - a.x,
            y: t.y - a.y,
            width: t.width,
            height: t.height
        }
    }
    return Ot(r)
}
function Ae(e, t) {
    const n = Q(e);
    return n === t || !j(n) || st(n) ? !1 : K(n).position === "fixed" || Ae(n, t)
}
function Bn(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = vt(e, [], !1).filter(c => j(c) && ut(c) !== "body")
      , a = null;
    const o = K(e).position === "fixed";
    let i = o ? Q(e) : e;
    for (; j(i) && !st(i); ) {
        const c = K(i)
          , s = Yt(i);
        !s && c.position === "fixed" && (a = null),
        (o ? !s && !a : !s && c.position === "static" && !!a && _n.has(a.position) || ht(i) && !s && Ae(e, i)) ? r = r.filter(u => u !== i) : a = c,
        i = Q(i)
    }
    return t.set(e, r),
    r
}
function jn(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: a} = e;
    const i = [...n === "clippingAncestors" ? Nt(t) ? [] : Bn(t, this._c) : [].concat(n), r]
      , c = i[0]
      , s = i.reduce( (l, u) => {
        const p = se(t, u, a);
        return l.top = M(p.top, l.top),
        l.right = Z(p.right, l.right),
        l.bottom = Z(p.bottom, l.bottom),
        l.left = M(p.left, l.left),
        l
    }
    , se(t, c, a));
    return {
        width: s.right - s.left,
        height: s.bottom - s.top,
        x: s.left,
        y: s.top
    }
}
function Kn(e) {
    const {width: t, height: n} = we(e);
    return {
        width: t,
        height: n
    }
}
function Vn(e, t, n) {
    const r = H(t)
      , a = U(t)
      , o = n === "fixed"
      , i = nt(e, !0, o, t);
    let c = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const s = V(0);
    function l() {
        s.x = Lt(a)
    }
    if (r || !r && !o)
        if ((ut(t) !== "body" || ht(a)) && (c = kt(t)),
        r) {
            const b = nt(t, !0, o, t);
            s.x = b.x + t.clientLeft,
            s.y = b.y + t.clientTop
        } else
            a && l();
    o && !r && a && l();
    const u = a && !r && !o ? Ee(a, c) : V(0)
      , p = i.left + c.scrollLeft - s.x - u.x
      , h = i.top + c.scrollTop - s.y - u.y;
    return {
        x: p,
        y: h,
        width: i.width,
        height: i.height
    }
}
function Mt(e) {
    return K(e).position === "static"
}
function ce(e, t) {
    if (!H(e) || K(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return U(e) === n && (n = n.ownerDocument.body),
    n
}
function Te(e, t) {
    const n = _(e);
    if (Nt(e))
        return n;
    if (!H(e)) {
        let a = Q(e);
        for (; a && !st(a); ) {
            if (j(a) && !Mt(a))
                return a;
            a = Q(a)
        }
        return n
    }
    let r = ce(e, t);
    for (; r && On(r) && Mt(r); )
        r = ce(r, t);
    return r && st(r) && Mt(r) && !Yt(r) ? n : r || Dn(e) || n
}
const Hn = async function(e) {
    const t = this.getOffsetParent || Te
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: Vn(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function Un(e) {
    return K(e).direction === "rtl"
}
const qn = {
    convertOffsetParentRelativeRectToViewportRelativeRect: Ln,
    getDocumentElement: U,
    getClippingRect: jn,
    getOffsetParent: Te,
    getElementRects: Hn,
    getClientRects: $n,
    getDimensions: Kn,
    getScale: at,
    isElement: j,
    isRTL: Un
};
function Oe(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}
function zn(e, t) {
    let n = null, r;
    const a = U(e);
    function o() {
        var c;
        clearTimeout(r),
        (c = n) == null || c.disconnect(),
        n = null
    }
    function i(c, s) {
        c === void 0 && (c = !1),
        s === void 0 && (s = 1),
        o();
        const l = e.getBoundingClientRect()
          , {left: u, top: p, width: h, height: b} = l;
        if (c || t(),
        !h || !b)
            return;
        const v = gt(p)
          , g = gt(a.clientWidth - (u + h))
          , w = gt(a.clientHeight - (p + b))
          , m = gt(u)
          , R = {
            rootMargin: -v + "px " + -g + "px " + -w + "px " + -m + "px",
            threshold: M(0, Z(1, s)) || 1
        };
        let F = !0;
        function P(L) {
            const C = L[0].intersectionRatio;
            if (C !== s) {
                if (!F)
                    return i();
                C ? i(!1, C) : r = setTimeout( () => {
                    i(!1, 1e-7)
                }
                , 1e3)
            }
            C === 1 && !Oe(l, e.getBoundingClientRect()) && i(),
            F = !1
        }
        try {
            n = new IntersectionObserver(P,{
                ...R,
                root: a.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(P,R)
        }
        n.observe(e)
    }
    return i(!0),
    o
}
function Gn(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: a=!0, ancestorResize: o=!0, elementResize: i=typeof ResizeObserver == "function", layoutShift: c=typeof IntersectionObserver == "function", animationFrame: s=!1} = r
      , l = Zt(e)
      , u = a || o ? [...l ? vt(l) : [], ...vt(t)] : [];
    u.forEach(m => {
        a && m.addEventListener("scroll", n, {
            passive: !0
        }),
        o && m.addEventListener("resize", n)
    }
    );
    const p = l && c ? zn(l, n) : null;
    let h = -1
      , b = null;
    i && (b = new ResizeObserver(m => {
        let[T] = m;
        T && T.target === l && b && (b.unobserve(t),
        cancelAnimationFrame(h),
        h = requestAnimationFrame( () => {
            var R;
            (R = b) == null || R.observe(t)
        }
        )),
        n()
    }
    ),
    l && !s && b.observe(l),
    b.observe(t));
    let v, g = s ? nt(e) : null;
    s && w();
    function w() {
        const m = nt(e);
        g && !Oe(g, m) && n(),
        g = m,
        v = requestAnimationFrame(w)
    }
    return n(),
    () => {
        var m;
        u.forEach(T => {
            a && T.removeEventListener("scroll", n),
            o && T.removeEventListener("resize", n)
        }
        ),
        p == null || p(),
        (m = b) == null || m.disconnect(),
        b = null,
        s && cancelAnimationFrame(v)
    }
}
const Yn = wn
  , Xn = xn
  , Zn = mn
  , Jn = En
  , Qn = hn
  , tr = (e, t, n) => {
    const r = new Map
      , a = {
        platform: qn,
        ...n
    }
      , o = {
        ...a.platform,
        _c: r
    };
    return vn(e, t, {
        ...a,
        platform: o
    })
}
  , er = {
    strategy: "absolute",
    placement: "top",
    gutter: 5,
    flip: !0,
    sameWidth: !1,
    overflowPadding: 8
}
  , nr = {
    bottom: "rotate(45deg)",
    left: "rotate(135deg)",
    top: "rotate(225deg)",
    right: "rotate(315deg)"
};
function rr(e, t, n={}) {
    if (!t || !e || n === null)
        return {
            destroy: I
        };
    const r = {
        ...er,
        ...n
    }
      , a = t.querySelector("[data-arrow=true]")
      , o = [];
    r.flip && o.push(Zn({
        boundary: r.boundary,
        padding: r.overflowPadding
    }));
    const i = G(a) ? a.offsetHeight / 2 : 0;
    if (r.gutter || r.offset) {
        const s = r.gutter ? {
            mainAxis: r.gutter
        } : r.offset;
        (s == null ? void 0 : s.mainAxis) != null && (s.mainAxis += i),
        o.push(Yn(s))
    }
    o.push(Xn({
        boundary: r.boundary,
        crossAxis: r.overlap,
        padding: r.overflowPadding
    })),
    a && o.push(Qn({
        element: a,
        padding: 8
    })),
    o.push(Jn({
        padding: r.overflowPadding,
        apply({rects: s, availableHeight: l, availableWidth: u}) {
            r.sameWidth && Object.assign(t.style, {
                width: `${Math.round(s.reference.width)}px`,
                minWidth: "unset"
            }),
            r.fitViewport && Object.assign(t.style, {
                maxWidth: `${u}px`,
                maxHeight: `${l}px`
            })
        }
    }));
    function c() {
        if (!e || !t)
            return;
        const {placement: s, strategy: l} = r;
        tr(e, t, {
            placement: s,
            middleware: o,
            strategy: l
        }).then(u => {
            const p = Math.round(u.x)
              , h = Math.round(u.y);
            if (Object.assign(t.style, {
                position: r.strategy,
                top: `${h}px`,
                left: `${p}px`
            }),
            G(a) && u.middlewareData.arrow) {
                const {x: b, y: v} = u.middlewareData.arrow
                  , g = u.placement.split("-")[0];
                Object.assign(a.style, {
                    position: "absolute",
                    left: b != null ? `${b}px` : "",
                    top: v != null ? `${v}px` : "",
                    [g]: `calc(100% - ${i}px)`,
                    transform: nr[g],
                    backgroundColor: "inherit",
                    zIndex: "inherit"
                })
            }
            return u
        }
        )
    }
    return Object.assign(t.style, {
        position: r.strategy
    }),
    {
        destroy: Gn(e, t, c)
    }
}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var Se = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"]
  , St = Se.join(",")
  , Re = typeof Element > "u"
  , rt = Re ? function() {}
: Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector
  , Rt = !Re && Element.prototype.getRootNode ? function(e) {
    var t;
    return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e)
}
: function(e) {
    return e == null ? void 0 : e.ownerDocument
}
  , Pt = function e(t, n) {
    var r;
    n === void 0 && (n = !0);
    var a = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "inert")
      , o = a === "" || a === "true"
      , i = o || n && t && e(t.parentNode);
    return i
}
  , ir = function(t) {
    var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
    return r === "" || r === "true"
}
  , Pe = function(t, n, r) {
    if (Pt(t))
        return [];
    var a = Array.prototype.slice.apply(t.querySelectorAll(St));
    return n && rt.call(t, St) && a.unshift(t),
    a = a.filter(r),
    a
}
  , Fe = function e(t, n, r) {
    for (var a = [], o = Array.from(t); o.length; ) {
        var i = o.shift();
        if (!Pt(i, !1))
            if (i.tagName === "SLOT") {
                var c = i.assignedElements()
                  , s = c.length ? c : i.children
                  , l = e(s, !0, r);
                r.flatten ? a.push.apply(a, l) : a.push({
                    scopeParent: i,
                    candidates: l
                })
            } else {
                var u = rt.call(i, St);
                u && r.filter(i) && (n || !t.includes(i)) && a.push(i);
                var p = i.shadowRoot || typeof r.getShadowRoot == "function" && r.getShadowRoot(i)
                  , h = !Pt(p, !1) && (!r.shadowRootFilter || r.shadowRootFilter(i));
                if (p && h) {
                    var b = e(p === !0 ? i.children : p.children, !0, r);
                    r.flatten ? a.push.apply(a, b) : a.push({
                        scopeParent: i,
                        candidates: b
                    })
                } else
                    o.unshift.apply(o, i.children)
            }
    }
    return a
}
  , De = function(t) {
    return !isNaN(parseInt(t.getAttribute("tabindex"), 10))
}
  , et = function(t) {
    if (!t)
        throw new Error("No node provided");
    return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || ir(t)) && !De(t) ? 0 : t.tabIndex
}
  , or = function(t, n) {
    var r = et(t);
    return r < 0 && n && !De(t) ? 0 : r
}
  , ar = function(t, n) {
    return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex
}
  , Ce = function(t) {
    return t.tagName === "INPUT"
}
  , sr = function(t) {
    return Ce(t) && t.type === "hidden"
}
  , cr = function(t) {
    var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
        return r.tagName === "SUMMARY"
    });
    return n
}
  , lr = function(t, n) {
    for (var r = 0; r < t.length; r++)
        if (t[r].checked && t[r].form === n)
            return t[r]
}
  , ur = function(t) {
    if (!t.name)
        return !0;
    var n = t.form || Rt(t), r = function(c) {
        return n.querySelectorAll('input[type="radio"][name="' + c + '"]')
    }, a;
    if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
        a = r(window.CSS.escape(t.name));
    else
        try {
            a = r(t.name)
        } catch (i) {
            return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", i.message),
            !1
        }
    var o = lr(a, t.form);
    return !o || o === t
}
  , fr = function(t) {
    return Ce(t) && t.type === "radio"
}
  , dr = function(t) {
    return fr(t) && !ur(t)
}
  , pr = function(t) {
    var n, r = t && Rt(t), a = (n = r) === null || n === void 0 ? void 0 : n.host, o = !1;
    if (r && r !== t) {
        var i, c, s;
        for (o = !!((i = a) !== null && i !== void 0 && (c = i.ownerDocument) !== null && c !== void 0 && c.contains(a) || t != null && (s = t.ownerDocument) !== null && s !== void 0 && s.contains(t)); !o && a; ) {
            var l, u, p;
            r = Rt(a),
            a = (l = r) === null || l === void 0 ? void 0 : l.host,
            o = !!((u = a) !== null && u !== void 0 && (p = u.ownerDocument) !== null && p !== void 0 && p.contains(a))
        }
    }
    return o
}
  , le = function(t) {
    var n = t.getBoundingClientRect()
      , r = n.width
      , a = n.height;
    return r === 0 && a === 0
}
  , br = function(t, n) {
    var r = n.displayCheck
      , a = n.getShadowRoot;
    if (getComputedStyle(t).visibility === "hidden")
        return !0;
    var o = rt.call(t, "details>summary:first-of-type")
      , i = o ? t.parentElement : t;
    if (rt.call(i, "details:not([open]) *"))
        return !0;
    if (!r || r === "full" || r === "legacy-full") {
        if (typeof a == "function") {
            for (var c = t; t; ) {
                var s = t.parentElement
                  , l = Rt(t);
                if (s && !s.shadowRoot && a(s) === !0)
                    return le(t);
                t.assignedSlot ? t = t.assignedSlot : !s && l !== t.ownerDocument ? t = l.host : t = s
            }
            t = c
        }
        if (pr(t))
            return !t.getClientRects().length;
        if (r !== "legacy-full")
            return !0
    } else if (r === "non-zero-area")
        return le(t);
    return !1
}
  , vr = function(t) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
        for (var n = t.parentElement; n; ) {
            if (n.tagName === "FIELDSET" && n.disabled) {
                for (var r = 0; r < n.children.length; r++) {
                    var a = n.children.item(r);
                    if (a.tagName === "LEGEND")
                        return rt.call(n, "fieldset[disabled] *") ? !0 : !a.contains(t)
                }
                return !0
            }
            n = n.parentElement
        }
    return !1
}
  , Ft = function(t, n) {
    return !(n.disabled || Pt(n) || sr(n) || br(n, t) || cr(n) || vr(n))
}
  , Kt = function(t, n) {
    return !(dr(n) || et(n) < 0 || !Ft(t, n))
}
  , hr = function(t) {
    var n = parseInt(t.getAttribute("tabindex"), 10);
    return !!(isNaN(n) || n >= 0)
}
  , mr = function e(t) {
    var n = []
      , r = [];
    return t.forEach(function(a, o) {
        var i = !!a.scopeParent
          , c = i ? a.scopeParent : a
          , s = or(c, i)
          , l = i ? e(a.candidates) : c;
        s === 0 ? i ? n.push.apply(n, l) : n.push(c) : r.push({
            documentOrder: o,
            tabIndex: s,
            item: a,
            isScope: i,
            content: l
        })
    }),
    r.sort(ar).reduce(function(a, o) {
        return o.isScope ? a.push.apply(a, o.content) : a.push(o.content),
        a
    }, []).concat(n)
}
  , gr = function(t, n) {
    n = n || {};
    var r;
    return n.getShadowRoot ? r = Fe([t], n.includeContainer, {
        filter: Kt.bind(null, n),
        flatten: !1,
        getShadowRoot: n.getShadowRoot,
        shadowRootFilter: hr
    }) : r = Pe(t, n.includeContainer, Kt.bind(null, n)),
    mr(r)
}
  , yr = function(t, n) {
    n = n || {};
    var r;
    return n.getShadowRoot ? r = Fe([t], n.includeContainer, {
        filter: Ft.bind(null, n),
        flatten: !0,
        getShadowRoot: n.getShadowRoot
    }) : r = Pe(t, n.includeContainer, Ft.bind(null, n)),
    r
}
  , it = function(t, n) {
    if (n = n || {},
    !t)
        throw new Error("No node provided");
    return rt.call(t, St) === !1 ? !1 : Kt(n, t)
}
  , wr = Se.concat("iframe").join(",")
  , _t = function(t, n) {
    if (n = n || {},
    !t)
        throw new Error("No node provided");
    return rt.call(t, wr) === !1 ? !1 : Ft(n, t)
};
/*!
* focus-trap 7.6.5
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function Vt(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++)
        r[n] = e[n];
    return r
}
function xr(e) {
    if (Array.isArray(e))
        return Vt(e)
}
function Er(e, t, n) {
    return (t = Rr(t))in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function Ar(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
        return Array.from(e)
}
function Tr() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function ue(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(a) {
            return Object.getOwnPropertyDescriptor(e, a).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
}
function fe(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? ue(Object(n), !0).forEach(function(r) {
            Er(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ue(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
function Or(e) {
    return xr(e) || Ar(e) || Pr(e) || Tr()
}
function Sr(e, t) {
    if (typeof e != "object" || !e)
        return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t);
        if (typeof r != "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function Rr(e) {
    var t = Sr(e, "string");
    return typeof t == "symbol" ? t : t + ""
}
function Pr(e, t) {
    if (e) {
        if (typeof e == "string")
            return Vt(e, t);
        var n = {}.toString.call(e).slice(8, -1);
        return n === "Object" && e.constructor && (n = e.constructor.name),
        n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Vt(e, t) : void 0
    }
}
var de = {
    activateTrap: function(t, n) {
        if (t.length > 0) {
            var r = t[t.length - 1];
            r !== n && r._setPausedState(!0)
        }
        var a = t.indexOf(n);
        a === -1 || t.splice(a, 1),
        t.push(n)
    },
    deactivateTrap: function(t, n) {
        var r = t.indexOf(n);
        r !== -1 && t.splice(r, 1),
        t.length > 0 && !t[t.length - 1]._isManuallyPaused() && t[t.length - 1]._setPausedState(!1)
    }
}
  , Fr = function(t) {
    return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function"
}
  , Dr = function(t) {
    return (t == null ? void 0 : t.key) === "Escape" || (t == null ? void 0 : t.key) === "Esc" || (t == null ? void 0 : t.keyCode) === 27
}
  , bt = function(t) {
    return (t == null ? void 0 : t.key) === "Tab" || (t == null ? void 0 : t.keyCode) === 9
}
  , Cr = function(t) {
    return bt(t) && !t.shiftKey
}
  , Nr = function(t) {
    return bt(t) && t.shiftKey
}
  , pe = function(t) {
    return setTimeout(t, 0)
}
  , pt = function(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
        r[a - 1] = arguments[a];
    return typeof t == "function" ? t.apply(void 0, r) : t
}
  , yt = function(t) {
    return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target
}
  , kr = []
  , Lr = function(t, n) {
    var r = (n == null ? void 0 : n.document) || document, a = (n == null ? void 0 : n.trapStack) || kr, o = fe({
        returnFocusOnDeactivate: !0,
        escapeDeactivates: !0,
        delayInitialFocus: !0,
        isKeyForward: Cr,
        isKeyBackward: Nr
    }, n), i = {
        containers: [],
        containerGroups: [],
        tabbableGroups: [],
        nodeFocusedBeforeActivation: null,
        mostRecentlyFocusedNode: null,
        active: !1,
        paused: !1,
        manuallyPaused: !1,
        delayInitialFocusTimer: void 0,
        recentNavEvent: void 0
    }, c, s = function(f, d, y) {
        return f && f[d] !== void 0 ? f[d] : o[y || d]
    }, l = function(f, d) {
        var y = typeof (d == null ? void 0 : d.composedPath) == "function" ? d.composedPath() : void 0;
        return i.containerGroups.findIndex(function(A) {
            var x = A.container
              , S = A.tabbableNodes;
            return x.contains(f) || (y == null ? void 0 : y.includes(x)) || S.find(function(E) {
                return E === f
            })
        })
    }, u = function(f) {
        var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
          , y = d.hasFallback
          , A = y === void 0 ? !1 : y
          , x = d.params
          , S = x === void 0 ? [] : x
          , E = o[f];
        if (typeof E == "function" && (E = E.apply(void 0, Or(S))),
        E === !0 && (E = void 0),
        !E) {
            if (E === void 0 || E === !1)
                return E;
            throw new Error("`".concat(f, "` was specified but was not a node, or did not return a node"))
        }
        var D = E;
        if (typeof E == "string") {
            try {
                D = r.querySelector(E)
            } catch (N) {
                throw new Error("`".concat(f, '` appears to be an invalid selector; error="').concat(N.message, '"'))
            }
            if (!D && !A)
                throw new Error("`".concat(f, "` as selector refers to no known node"))
        }
        return D
    }, p = function() {
        var f = u("initialFocus", {
            hasFallback: !0
        });
        if (f === !1)
            return !1;
        if (f === void 0 || f && !_t(f, o.tabbableOptions))
            if (l(r.activeElement) >= 0)
                f = r.activeElement;
            else {
                var d = i.tabbableGroups[0]
                  , y = d && d.firstTabbableNode;
                f = y || u("fallbackFocus")
            }
        else
            f === null && (f = u("fallbackFocus"));
        if (!f)
            throw new Error("Your focus-trap needs to have at least one focusable element");
        return f
    }, h = function() {
        if (i.containerGroups = i.containers.map(function(f) {
            var d = gr(f, o.tabbableOptions)
              , y = yr(f, o.tabbableOptions)
              , A = d.length > 0 ? d[0] : void 0
              , x = d.length > 0 ? d[d.length - 1] : void 0
              , S = y.find(function(N) {
                return it(N)
            })
              , E = y.slice().reverse().find(function(N) {
                return it(N)
            })
              , D = !!d.find(function(N) {
                return et(N) > 0
            });
            return {
                container: f,
                tabbableNodes: d,
                focusableNodes: y,
                posTabIndexesFound: D,
                firstTabbableNode: A,
                lastTabbableNode: x,
                firstDomTabbableNode: S,
                lastDomTabbableNode: E,
                nextTabbableNode: function(tt) {
                    var ft = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0
                      , Y = d.indexOf(tt);
                    return Y < 0 ? ft ? y.slice(y.indexOf(tt) + 1).find(function(dt) {
                        return it(dt)
                    }) : y.slice(0, y.indexOf(tt)).reverse().find(function(dt) {
                        return it(dt)
                    }) : d[Y + (ft ? 1 : -1)]
                }
            }
        }),
        i.tabbableGroups = i.containerGroups.filter(function(f) {
            return f.tabbableNodes.length > 0
        }),
        i.tabbableGroups.length <= 0 && !u("fallbackFocus"))
            throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
        if (i.containerGroups.find(function(f) {
            return f.posTabIndexesFound
        }) && i.containerGroups.length > 1)
            throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")
    }, b = function(f) {
        var d = f.activeElement;
        if (d)
            return d.shadowRoot && d.shadowRoot.activeElement !== null ? b(d.shadowRoot) : d
    }, v = function(f) {
        if (f !== !1 && f !== b(document)) {
            if (!f || !f.focus) {
                v(p());
                return
            }
            f.focus({
                preventScroll: !!o.preventScroll
            }),
            i.mostRecentlyFocusedNode = f,
            Fr(f) && f.select()
        }
    }, g = function(f) {
        var d = u("setReturnFocus", {
            params: [f]
        });
        return d || (d === !1 ? !1 : f)
    }, w = function(f) {
        var d = f.target
          , y = f.event
          , A = f.isBackward
          , x = A === void 0 ? !1 : A;
        d = d || yt(y),
        h();
        var S = null;
        if (i.tabbableGroups.length > 0) {
            var E = l(d, y)
              , D = E >= 0 ? i.containerGroups[E] : void 0;
            if (E < 0)
                x ? S = i.tabbableGroups[i.tabbableGroups.length - 1].lastTabbableNode : S = i.tabbableGroups[0].firstTabbableNode;
            else if (x) {
                var N = i.tabbableGroups.findIndex(function($t) {
                    var It = $t.firstTabbableNode;
                    return d === It
                });
                if (N < 0 && (D.container === d || _t(d, o.tabbableOptions) && !it(d, o.tabbableOptions) && !D.nextTabbableNode(d, !1)) && (N = E),
                N >= 0) {
                    var tt = N === 0 ? i.tabbableGroups.length - 1 : N - 1
                      , ft = i.tabbableGroups[tt];
                    S = et(d) >= 0 ? ft.lastTabbableNode : ft.lastDomTabbableNode
                } else
                    bt(y) || (S = D.nextTabbableNode(d, !1))
            } else {
                var Y = i.tabbableGroups.findIndex(function($t) {
                    var It = $t.lastTabbableNode;
                    return d === It
                });
                if (Y < 0 && (D.container === d || _t(d, o.tabbableOptions) && !it(d, o.tabbableOptions) && !D.nextTabbableNode(d)) && (Y = E),
                Y >= 0) {
                    var dt = Y === i.tabbableGroups.length - 1 ? 0 : Y + 1
                      , Jt = i.tabbableGroups[dt];
                    S = et(d) >= 0 ? Jt.firstTabbableNode : Jt.firstDomTabbableNode
                } else
                    bt(y) || (S = D.nextTabbableNode(d))
            }
        } else
            S = u("fallbackFocus");
        return S
    }, m = function(f) {
        var d = yt(f);
        if (!(l(d, f) >= 0)) {
            if (pt(o.clickOutsideDeactivates, f)) {
                c.deactivate({
                    returnFocus: o.returnFocusOnDeactivate
                });
                return
            }
            pt(o.allowOutsideClick, f) || f.preventDefault()
        }
    }, T = function(f) {
        var d = yt(f)
          , y = l(d, f) >= 0;
        if (y || d instanceof Document)
            y && (i.mostRecentlyFocusedNode = d);
        else {
            f.stopImmediatePropagation();
            var A, x = !0;
            if (i.mostRecentlyFocusedNode)
                if (et(i.mostRecentlyFocusedNode) > 0) {
                    var S = l(i.mostRecentlyFocusedNode)
                      , E = i.containerGroups[S].tabbableNodes;
                    if (E.length > 0) {
                        var D = E.findIndex(function(N) {
                            return N === i.mostRecentlyFocusedNode
                        });
                        D >= 0 && (o.isKeyForward(i.recentNavEvent) ? D + 1 < E.length && (A = E[D + 1],
                        x = !1) : D - 1 >= 0 && (A = E[D - 1],
                        x = !1))
                    }
                } else
                    i.containerGroups.some(function(N) {
                        return N.tabbableNodes.some(function(tt) {
                            return et(tt) > 0
                        })
                    }) || (x = !1);
            else
                x = !1;
            x && (A = w({
                target: i.mostRecentlyFocusedNode,
                isBackward: o.isKeyBackward(i.recentNavEvent)
            })),
            v(A || i.mostRecentlyFocusedNode || p())
        }
        i.recentNavEvent = void 0
    }, R = function(f) {
        var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        i.recentNavEvent = f;
        var y = w({
            event: f,
            isBackward: d
        });
        y && (bt(f) && f.preventDefault(),
        v(y))
    }, F = function(f) {
        (o.isKeyForward(f) || o.isKeyBackward(f)) && R(f, o.isKeyBackward(f))
    }, P = function(f) {
        Dr(f) && pt(o.escapeDeactivates, f) !== !1 && (f.preventDefault(),
        c.deactivate())
    }, L = function(f) {
        var d = yt(f);
        l(d, f) >= 0 || pt(o.clickOutsideDeactivates, f) || pt(o.allowOutsideClick, f) || (f.preventDefault(),
        f.stopImmediatePropagation())
    }, C = function() {
        if (i.active)
            return de.activateTrap(a, c),
            i.delayInitialFocusTimer = o.delayInitialFocus ? pe(function() {
                v(p())
            }) : v(p()),
            r.addEventListener("focusin", T, !0),
            r.addEventListener("mousedown", m, {
                capture: !0,
                passive: !1
            }),
            r.addEventListener("touchstart", m, {
                capture: !0,
                passive: !1
            }),
            r.addEventListener("click", L, {
                capture: !0,
                passive: !1
            }),
            r.addEventListener("keydown", F, {
                capture: !0,
                passive: !1
            }),
            r.addEventListener("keydown", P),
            c
    }, W = function() {
        if (i.active)
            return r.removeEventListener("focusin", T, !0),
            r.removeEventListener("mousedown", m, !0),
            r.removeEventListener("touchstart", m, !0),
            r.removeEventListener("click", L, !0),
            r.removeEventListener("keydown", F, !0),
            r.removeEventListener("keydown", P),
            c
    }, B = function(f) {
        var d = f.some(function(y) {
            var A = Array.from(y.removedNodes);
            return A.some(function(x) {
                return x === i.mostRecentlyFocusedNode
            })
        });
        d && v(p())
    }, k = typeof window < "u" && "MutationObserver"in window ? new MutationObserver(B) : void 0, $ = function() {
        k && (k.disconnect(),
        i.active && !i.paused && i.containers.map(function(f) {
            k.observe(f, {
                subtree: !0,
                childList: !0
            })
        }))
    };
    return c = {
        get active() {
            return i.active
        },
        get paused() {
            return i.paused
        },
        activate: function(f) {
            if (i.active)
                return this;
            var d = s(f, "onActivate")
              , y = s(f, "onPostActivate")
              , A = s(f, "checkCanFocusTrap");
            A || h(),
            i.active = !0,
            i.paused = !1,
            i.nodeFocusedBeforeActivation = b(r),
            d == null || d();
            var x = function() {
                A && h(),
                C(),
                $(),
                y == null || y()
            };
            return A ? (A(i.containers.concat()).then(x, x),
            this) : (x(),
            this)
        },
        deactivate: function(f) {
            if (!i.active)
                return this;
            var d = fe({
                onDeactivate: o.onDeactivate,
                onPostDeactivate: o.onPostDeactivate,
                checkCanReturnFocus: o.checkCanReturnFocus
            }, f);
            clearTimeout(i.delayInitialFocusTimer),
            i.delayInitialFocusTimer = void 0,
            W(),
            i.active = !1,
            i.paused = !1,
            $(),
            de.deactivateTrap(a, c);
            var y = s(d, "onDeactivate")
              , A = s(d, "onPostDeactivate")
              , x = s(d, "checkCanReturnFocus")
              , S = s(d, "returnFocus", "returnFocusOnDeactivate");
            y == null || y();
            var E = function() {
                pe(function() {
                    S && v(g(i.nodeFocusedBeforeActivation)),
                    A == null || A()
                })
            };
            return S && x ? (x(g(i.nodeFocusedBeforeActivation)).then(E, E),
            this) : (E(),
            this)
        },
        pause: function(f) {
            return i.active ? (i.manuallyPaused = !0,
            this._setPausedState(!0, f)) : this
        },
        unpause: function(f) {
            return i.active ? (i.manuallyPaused = !1,
            a[a.length - 1] !== this ? this : this._setPausedState(!1, f)) : this
        },
        updateContainerElements: function(f) {
            var d = [].concat(f).filter(Boolean);
            return i.containers = d.map(function(y) {
                return typeof y == "string" ? r.querySelector(y) : y
            }),
            i.active && h(),
            $(),
            this
        }
    },
    Object.defineProperties(c, {
        _isManuallyPaused: {
            value: function() {
                return i.manuallyPaused
            }
        },
        _setPausedState: {
            value: function(f, d) {
                if (i.paused === f)
                    return this;
                if (i.paused = f,
                f) {
                    var y = s(d, "onPause")
                      , A = s(d, "onPostPause");
                    y == null || y(),
                    W(),
                    $(),
                    A == null || A()
                } else {
                    var x = s(d, "onUnpause")
                      , S = s(d, "onPostUnpause");
                    x == null || x(),
                    h(),
                    C(),
                    $(),
                    S == null || S()
                }
                return this
            }
        }
    }),
    c.updateContainerElements(t),
    c
};
function $r(e={}) {
    let t;
    const {immediate: n, ...r} = e
      , a = xt(!1)
      , o = xt(!1)
      , i = p => t == null ? void 0 : t.activate(p)
      , c = p => {
        t == null || t.deactivate(p)
    }
      , s = () => {
        t && (t.pause(),
        o.set(!0))
    }
      , l = () => {
        t && (t.unpause(),
        o.set(!1))
    }
    ;
    return {
        useFocusTrap: p => (t = Lr(p, {
            ...r,
            onActivate() {
                var h;
                a.set(!0),
                (h = e.onActivate) == null || h.call(e)
            },
            onDeactivate() {
                var h;
                a.set(!1),
                (h = e.onDeactivate) == null || h.call(e)
            }
        }),
        n && i(),
        {
            destroy() {
                c(),
                t = void 0
            }
        }),
        hasFocus: Qt(a),
        isPaused: Qt(o),
        activate: i,
        deactivate: c,
        pause: s,
        unpause: l
    }
}
const wt = [];
function Ir(e, t) {
    let n = I;
    function r() {
        const o = wt.indexOf(e);
        o >= 0 && wt.splice(o, 1)
    }
    function a(o) {
        n();
        const {open: i, onClose: c, shouldCloseOnInteractOutside: s, closeOnInteractOutside: l} = o;
        ze(100).then( () => {
            i ? wt.push(e) : r()
        }
        );
        function u() {
            return _e(wt) === e
        }
        function p() {
            u() && c && (c(),
            r())
        }
        function h(v) {
            const g = v.target;
            Ut(g) && g && u() && (v.preventDefault(),
            v.stopPropagation(),
            v.stopImmediatePropagation())
        }
        function b(v) {
            s != null && s(v) && u() && (v.preventDefault(),
            v.stopPropagation(),
            v.stopImmediatePropagation(),
            p())
        }
        n = Wr(e, {
            onInteractOutsideStart: h,
            onInteractOutside: l ? b : void 0,
            enabled: i
        }).destroy
    }
    return a(t),
    {
        update: a,
        destroy() {
            r(),
            n()
        }
    }
}
const Mr = {
    floating: {},
    focusTrap: {},
    modal: {},
    escapeKeydown: {},
    portal: "body"
}
  , fi = (e, t) => {
    e.dataset.escapee = "";
    const {anchorElement: n, open: r, options: a} = t;
    if (!n || !r || !a)
        return {
            destroy: I
        };
    const o = {
        ...Mr,
        ...a
    }
      , i = [];
    if (o.portal !== null) {
        const s = _r(e, o.portal);
        s != null && s.destroy && i.push(s.destroy)
    }
    if (i.push(rr(n, e, o.floating).destroy),
    o.focusTrap !== null) {
        const {useFocusTrap: s} = $r({
            immediate: !0,
            escapeDeactivates: !1,
            allowOutsideClick: !0,
            returnFocusOnDeactivate: !1,
            fallbackFocus: e,
            ...o.focusTrap
        })
          , l = s(e);
        l != null && l.destroy && i.push(l.destroy)
    }
    o.modal !== null && i.push(Ir(e, {
        onClose: () => {
            G(n) && (r.set(!1),
            n.focus())
        }
        ,
        shouldCloseOnInteractOutside: s => !(s.defaultPrevented || G(n) && n.contains(s.target)),
        ...o.modal
    }).destroy),
    o.escapeKeydown !== null && i.push(rn(e, {
        enabled: r,
        handler: () => {
            r.set(!1)
        }
        ,
        ...o.escapeKeydown
    }).destroy);
    const c = Et(...i);
    return {
        destroy() {
            c()
        }
    }
}
  , _r = (e, t="body") => {
    let n;
    if (!G(t) && typeof t != "string")
        return {
            destroy: I
        };
    async function r(o) {
        if (t = o,
        typeof t == "string") {
            if (n = document.querySelector(t),
            n === null && (await $e(),
            n = document.querySelector(t)),
            n === null)
                throw new Error(`No element found matching css selector: "${t}"`)
        } else if (t instanceof HTMLElement)
            n = t;
        else
            throw new TypeError(`Unknown portal target type: ${t === null ? "null" : typeof t}. Allowed types: string (CSS selector) or HTMLElement.`);
        e.dataset.portal = "",
        n.appendChild(e),
        e.hidden = !1
    }
    function a() {
        e.remove()
    }
    return r(t),
    {
        update: r,
        destroy: a
    }
}
;
function Wr(e, t) {
    let n = I
      , r = !1
      , a = !1
      , o = !1;
    function i(l) {
        n();
        const {onInteractOutside: u, onInteractOutsideStart: p, enabled: h} = l;
        if (!h)
            return;
        function b(w) {
            u && be(w, e) && (p == null || p(w));
            const m = w.target;
            Ut(m) && Ne(e, m) && (a = !0),
            r = !0
        }
        function v(w) {
            u == null || u(w)
        }
        const g = Br(e);
        if (typeof PointerEvent < "u") {
            const w = m => {
                c(m) && v(m),
                s()
            }
            ;
            n = Et(X(g, "pointerdown", b, !0), X(g, "pointerup", w, !0))
        } else {
            const w = T => {
                o ? o = !1 : c(T) && v(T),
                s()
            }
              , m = T => {
                o = !0,
                c(T) && v(T),
                s()
            }
            ;
            n = Et(X(g, "mousedown", b, !0), X(g, "mouseup", w, !0), X(g, "touchstart", b, !0), X(g, "touchend", m, !0))
        }
    }
    function c(l) {
        return !!(r && !a && be(l, e))
    }
    function s() {
        r = !1,
        a = !1
    }
    return i(t),
    {
        update: i,
        destroy: n
    }
}
function be(e, t) {
    if ("button"in e && e.button > 0)
        return !1;
    const n = e.target;
    if (!Ut(n))
        return !1;
    const r = n.ownerDocument;
    return !r || !r.documentElement.contains(n) ? !1 : t && !Ne(t, n)
}
function Ne(e, t) {
    return e === t || e.contains(t)
}
function Br(e) {
    return (e == null ? void 0 : e.ownerDocument) ?? document
}
ot(!1),
ot(!1),
ot(void 0);
function di(e, t) {
    const n = {};
    return t.forEach(r => {
        n[r] = {
            [`data-${e}-${r}`]: ""
        }
    }
    ),
    r => n[r]
}
function pi(e) {
    return e ? {
        "aria-disabled": "true",
        "data-disabled": ""
    } : {
        "aria-disabled": void 0,
        "data-disabled": void 0
    }
}
function bi() {
    const e = Ie();
    return t => {
        const {originalEvent: n} = t.detail
          , {cancelable: r} = t
          , a = n.type;
        e(a, {
            originalEvent: n,
            currentTarget: n.currentTarget
        }, {
            cancelable: r
        }) || t.preventDefault()
    }
}
function vi(e) {
    const t = {};
    for (const n in e) {
        const r = e[n];
        r !== void 0 && (t[n] = r)
    }
    return t
}
function hi(e) {
    return function(t, n) {
        if (n === void 0)
            return;
        const r = e[t];
        r && r.set(n)
    }
}
function mi(e) {
    return (t={}) => jr(e, t)
}
function jr(e, t) {
    const r = {
        ...{
            side: "bottom",
            align: "center",
            sideOffset: 0,
            alignOffset: 0,
            sameWidth: !1,
            avoidCollisions: !0,
            collisionPadding: 8,
            fitViewport: !1,
            strategy: "absolute",
            overlap: !1
        },
        ...t
    };
    e.update(a => ({
        ...a,
        placement: Kr(r.side, r.align),
        offset: {
            ...a.offset,
            mainAxis: r.sideOffset,
            crossAxis: r.alignOffset
        },
        gutter: 0,
        sameWidth: r.sameWidth,
        flip: r.avoidCollisions,
        overflowPadding: r.collisionPadding,
        boundary: r.collisionBoundary,
        fitViewport: r.fitViewport,
        strategy: r.strategy,
        overlap: r.overlap
    }))
}
function Kr(e, t) {
    return t === "center" ? e : `${e}-${t}`
}
function Vr(e) {
    const t = e - 1;
    return t * t * t + 1
}
function gi(e, {delay: t=0, duration: n=400, easing: r=Me}={}) {
    const a = +getComputedStyle(e).opacity;
    return {
        delay: t,
        duration: n,
        easing: r,
        css: o => `opacity: ${o * a}`
    }
}
function yi(e, {delay: t=0, duration: n=400, easing: r=Vr, axis: a="y"}={}) {
    const o = getComputedStyle(e)
      , i = +o.opacity
      , c = a === "y" ? "height" : "width"
      , s = parseFloat(o[c])
      , l = a === "y" ? ["top", "bottom"] : ["left", "right"]
      , u = l.map(m => `${m[0].toUpperCase()}${m.slice(1)}`)
      , p = parseFloat(o[`padding${u[0]}`])
      , h = parseFloat(o[`padding${u[1]}`])
      , b = parseFloat(o[`margin${u[0]}`])
      , v = parseFloat(o[`margin${u[1]}`])
      , g = parseFloat(o[`border${u[0]}Width`])
      , w = parseFloat(o[`border${u[1]}Width`]);
    return {
        delay: t,
        duration: n,
        easing: r,
        css: m => `overflow: hidden;opacity: ${Math.min(m * 20, 1) * i};${c}: ${m * s}px;padding-${l[0]}: ${m * p}px;padding-${l[1]}: ${m * h}px;margin-${l[0]}: ${m * b}px;margin-${l[1]}: ${m * v}px;border-${l[0]}-width: ${m * g}px;border-${l[1]}-width: ${m * w}px;`
    }
}
export {ui as A, di as B, vi as C, hi as D, mi as E, oi as F, bi as G, pi as H, qr as I, gi as J, Xe as K, Xr as L, Ut as M, ti as N, Qr as O, ai as S, ze as a, G as b, zr as c, Ke as d, si as e, tn as f, ii as g, Et as h, je as i, ei as j, z as k, We as l, Be as m, I as n, Zr as o, Yr as p, Jr as q, ci as r, yi as s, li as t, X as u, ri as v, Dt as w, Gr as x, ni as y, fi as z};
