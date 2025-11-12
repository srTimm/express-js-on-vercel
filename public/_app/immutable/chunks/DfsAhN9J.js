import {S as i, i as o, s as r, n as a, d as n, b as d, m as x, e as f, o as v, j as h} from "./JQJQZOt7.js";
import "./IHki7fMi.js";
import {l as m} from "./N_WEJC7g.js";
function g(s) {
    let e, l = `<footer class="bg-primary_dark relative flex flex-col justify-center items-center w-full box-border p-5 mt-auto"><div class="flex flex-col lg:flex-row justify-between gap-6 max-w-screen-lg w-full"><div class="flex items-center lg:-ml-32"><img src="${m}" alt="logo" draggable="false" class="rounded-full flex items-center h-12 w-12 lg:h-20 lg:w-20 mr-3"/> <div class="flex flex-col"><h1 class="text-2xl lg:text-5xl font-bold flex items-center">PizzaHat</h1> <span class="text-accent_5 text-sm font-normal">Your Ultimate Discord Companion!</span></div></div> <div class="flex flex-col lg:flex-row gap-4 lg:gap-x-40"><div class="flex flex-col gap-y-3"><div class="font-medium">Navigation</div> <div class="flex flex-col gap-y-1 lg:gap-y-3"><a href="/" class="text-accent_5 hover:text-accent_4 hover:underline">Home</a> <a href="/about" class="text-accent_5 hover:text-accent_4 hover:underline">About</a> <a href="/dashboard" class="text-accent_5 hover:text-accent_4 hover:underline">Dashboard</a></div></div> <div class="flex flex-col gap-y-3"><div class="font-medium">PizzaHat</div> <div class="flex flex-col gap-y-1 lg:gap-y-3"><a href="https://discord.com/oauth2/authorize?client_id=860889936914677770&amp;permissions=10432416312438&amp;scope=bot" class="text-accent_5 hover:text-accent_4 hover:underline">Invite</a> <a href="https://discord.gg/WhNVDTF" class="text-accent_5 hover:text-accent_4 hover:underline">Support</a></div></div> <div class="flex flex-col gap-y-3"><div class="font-medium">Legal</div> <div class="flex flex-col gap-y-1 lg:gap-y-3"><a href="https://github.com/DTS-11/PizzaHat/blob/main/TERMS_OF_SERVICE.md" class="text-accent_5 hover:text-accent_4 hover:underline">Terms of Service</a> <a href="https://github.com/DTS-11/PizzaHat/blob/main/PRIVACY_POLICY.md" class="text-accent_5 hover:text-accent_4 hover:underline">Privacy Policy</a> <a href="https://github.com/DTS-11/PizzaHat/blob/main/LICENSE" class="text-accent_5 hover:text-accent_4">License</a></div></div></div></div> <div class="mt-6 lg:mt-14 text-accent_5 text-sm lg:text-base">© 2021-2024 DTS Development • Not affiliated with Discord Inc.</div></footer>`;
    return {
        c() {
            e = h("div"),
            e.innerHTML = l,
            this.h()
        },
        l(t) {
            e = f(t, "DIV", {
                class: !0,
                "data-svelte-h": !0
            }),
            v(e) !== "svelte-24s7qa" && (e.innerHTML = l),
            this.h()
        },
        h() {
            x(e, "class", "sticky top-[100vh]")
        },
        m(t, c) {
            d(t, e, c)
        },
        p: a,
        i: a,
        o: a,
        d(t) {
            t && n(e)
        }
    }
}
class b extends i {
    constructor(e) {
        super(),
        o(this, e, null, g, r, {})
    }
}
export {b as F};
