import {b as u} from "./BkwsH6bi.js";
async function m(r, c, a) {
    const {callbackUrl: s, ...l} = c ?? {}
      , {redirect: n=!0, redirectTo: e=s ?? window.location.href, ...w} = l
      , h = `${u ?? ""}/auth/signin/${r}`
      , o = await fetch(`${h}?${new URLSearchParams(a)}`, {
        method: "post",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Auth-Return-Redirect": "1"
        },
        body: new URLSearchParams({
            ...w,
            callbackUrl: e
        })
    })
      , t = await o.json();
    if (n) {
        const d = t.url ?? e;
        window.location.href = d,
        d.includes("#") && window.location.reload();
        return
    }
    const i = new URL(t.url).searchParams.get("error") ?? void 0
      , f = new URL(t.url).searchParams.get("code") ?? void 0;
    return {
        error: i,
        code: f,
        status: o.status,
        ok: o.ok,
        url: i ? null : t.url
    }
}
async function R(r) {
    const {redirect: c=!0, redirectTo: a=r == null ? void 0 : r.callbackUrl} = r ?? {}
      , n = await (await fetch(`${u ?? ""}/auth/signout`, {
        method: "post",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Auth-Return-Redirect": "1"
        },
        body: new URLSearchParams({
            callbackUrl: a
        })
    })).json();
    if (c) {
        const e = n.url ?? a;
        window.location.href = e,
        e.includes("#") && window.location.reload();
        return
    }
    return n
}
export {R as a, m as s};
