import { watch as $, onScopeDispose as $n, effectScope as Fn, reactive as Q, computed as h, watchEffect as X, toRefs as Ne, capitalize as En, Fragment as fe, warn as Et, ref as I, inject as J, unref as P, provide as q, shallowRef as L, defineComponent as me, getCurrentInstance as Pn, toRaw as An, h as Bn, createVNode as p, mergeProps as Pt, onBeforeUnmount as ge, readonly as Ln, nextTick as At, openBlock as Ve, createElementBlock as Bt, createElementVNode as S, toDisplayString as _e, pushScopeId as Lt, popScopeId as Nt, createTextVNode as V, isRef as ve, toRef as E, onMounted as Nn, Text as Vn, resolveDynamicComponent as Rn, withDirectives as Hn, resolveDirective as Wn, createBlock as jn, normalizeProps as zn, guardReactiveProps as Gn, withCtx as Yn, createApp as Un } from "vue";
function Zn(e, t) {
  let n;
  function r() {
    n = Fn(), n.run(() => t.length ? t(() => {
      n == null || n.stop(), r();
    }) : t());
  }
  $(e, (a) => {
    a && !n ? r() : a || (n == null || n.stop(), n = void 0);
  }, {
    immediate: !0
  }), $n(() => {
    n == null || n.stop();
  });
}
const M = typeof window < "u", Kn = M && "IntersectionObserver" in window, Qn = M && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0);
function Xn(e, t, n) {
  const r = t.length - 1;
  if (r < 0)
    return e === void 0 ? n : e;
  for (let a = 0; a < r; a++) {
    if (e == null)
      return n;
    e = e[t[a]];
  }
  return e == null || e[t[r]] === void 0 ? n : e[t[r]];
}
function Re(e, t) {
  if (e === t)
    return !0;
  if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t))
    return !1;
  const n = Object.keys(e);
  return n.length !== Object.keys(t).length ? !1 : n.every((r) => Re(e[r], t[r]));
}
function Je(e, t, n) {
  return e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), Xn(e, t.split("."), n));
}
function Vt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({
    length: e
  }, (n, r) => t + r);
}
function _(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (!(e == null || e === ""))
    return isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${t}` : void 0;
}
function Me(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function qe(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
const et = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34,
  shift: 16
});
function Se(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function Jn(e, t) {
  const n = {}, r = new Set(Object.keys(e));
  for (const a of t)
    r.has(a) && (n[a] = e[a]);
  return n;
}
function qn(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function er(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function tt(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function nt(e, t) {
  return (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, t - e.length)) + e;
}
function tr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const n = [];
  let r = 0;
  for (; r < e.length; )
    n.push(e.substr(r, t)), r += t;
  return n;
}
function x() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const r = {};
  for (const a in e)
    r[a] = e[a];
  for (const a in t) {
    const s = e[a], o = t[a];
    if (Me(s) && Me(o)) {
      r[a] = x(s, o, n);
      continue;
    }
    if (Array.isArray(s) && Array.isArray(o) && n) {
      r[a] = n(s, o);
      continue;
    }
    r[a] = o;
  }
  return r;
}
function Rt(e) {
  return e.map((t) => t.type === fe ? Rt(t.children) : t).flat();
}
function N() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (N.cache.has(e))
    return N.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return N.cache.set(e, t), t;
}
N.cache = /* @__PURE__ */ new Map();
function oe(e, t) {
  if (!t || typeof t != "object")
    return [];
  if (Array.isArray(t))
    return t.map((n) => oe(e, n)).flat(1);
  if (Array.isArray(t.children))
    return t.children.map((n) => oe(e, n)).flat(1);
  if (t.component) {
    if (Object.getOwnPropertySymbols(t.component.provides).includes(e))
      return [t.component];
    if (t.component.subTree)
      return oe(e, t.component.subTree).flat(1);
  }
  return [];
}
function Ht(e) {
  const t = Q({}), n = h(e);
  return X(() => {
    for (const r in n.value)
      t[r] = n.value[r];
  }, {
    flush: "sync"
  }), Ne(t);
}
function Te(e, t) {
  return e.includes(t);
}
function rt(e, t) {
  return t = "on" + En(t), !!(e[t] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
const nr = ["top", "bottom"], rr = ["start", "end", "left", "right"];
function ar(e, t) {
  let [n, r] = e.split(" ");
  return r || (r = Te(nr, n) ? "start" : Te(rr, n) ? "top" : "center"), {
    side: at(n, t),
    align: at(r, t)
  };
}
function at(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
const W = 2.4, st = 0.2126729, ot = 0.7151522, it = 0.072175, sr = 0.55, or = 0.58, ir = 0.57, lr = 0.62, re = 0.03, lt = 1.45, ur = 5e-4, cr = 1.25, dr = 1.25, ut = 0.078, ct = 12.82051282051282, ae = 0.06, dt = 1e-3;
function ft(e, t) {
  const n = (e.r / 255) ** W, r = (e.g / 255) ** W, a = (e.b / 255) ** W, s = (t.r / 255) ** W, o = (t.g / 255) ** W, l = (t.b / 255) ** W;
  let i = n * st + r * ot + a * it, u = s * st + o * ot + l * it;
  if (i <= re && (i += (re - i) ** lt), u <= re && (u += (re - u) ** lt), Math.abs(u - i) < ur)
    return 0;
  let f;
  if (u > i) {
    const d = (u ** sr - i ** or) * cr;
    f = d < dt ? 0 : d < ut ? d - d * ct * ae : d - ae;
  } else {
    const d = (u ** lr - i ** ir) * dr;
    f = d > -dt ? 0 : d > -ut ? d - d * ct * ae : d + ae;
  }
  return f * 100;
}
function z(e) {
  Et(`Vuetify: ${e}`);
}
function mt(e) {
  Et(`Vuetify error: ${e}`);
}
const le = 0.20689655172413793, fr = (e) => e > le ** 3 ? Math.cbrt(e) : e / (3 * le ** 2) + 4 / 29, mr = (e) => e > le ? e ** 3 : 3 * le ** 2 * (e - 4 / 29);
function Wt(e) {
  const t = fr, n = t(e[1]);
  return [116 * n - 16, 500 * (t(e[0] / 0.95047) - n), 200 * (n - t(e[2] / 1.08883))];
}
function jt(e) {
  const t = mr, n = (e[0] + 16) / 116;
  return [t(n + e[1] / 500) * 0.95047, t(n), t(n - e[2] / 200) * 1.08883];
}
const gr = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]], vr = (e) => e <= 31308e-7 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055, hr = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], yr = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function zt(e) {
  const t = Array(3), n = vr, r = gr;
  for (let a = 0; a < 3; ++a)
    t[a] = Math.round(er(n(r[a][0] * e[0] + r[a][1] * e[1] + r[a][2] * e[2])) * 255);
  return {
    r: t[0],
    g: t[1],
    b: t[2]
  };
}
function He(e) {
  let {
    r: t,
    g: n,
    b: r
  } = e;
  const a = [0, 0, 0], s = yr, o = hr;
  t = s(t / 255), n = s(n / 255), r = s(r / 255);
  for (let l = 0; l < 3; ++l)
    a[l] = o[l][0] * t + o[l][1] * n + o[l][2] * r;
  return a;
}
function Oe(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function pr(e) {
  return Oe(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const gt = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, br = {
  rgb: (e, t, n, r) => ({
    r: e,
    g: t,
    b: n,
    a: r
  }),
  rgba: (e, t, n, r) => ({
    r: e,
    g: t,
    b: n,
    a: r
  }),
  hsl: (e, t, n, r) => vt({
    h: e,
    s: t,
    l: n,
    a: r
  }),
  hsla: (e, t, n, r) => vt({
    h: e,
    s: t,
    l: n,
    a: r
  }),
  hsv: (e, t, n, r) => U({
    h: e,
    s: t,
    v: n,
    a: r
  }),
  hsva: (e, t, n, r) => U({
    h: e,
    s: t,
    v: n,
    a: r
  })
};
function O(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && z(`'${e}' is not a valid hex color`), {
      r: (e & 16711680) >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  if (typeof e == "string" && gt.test(e)) {
    const {
      groups: t
    } = e.match(gt), {
      fn: n,
      values: r
    } = t, a = r.split(/,\s*/).map((s) => s.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(s) / 100 : parseFloat(s));
    return br[n](...a);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(t.length) ? t = t.split("").map((r) => r + r).join("") : [6, 8].includes(t.length) || z(`'${e}' is not a valid hex(a) color`);
    const n = parseInt(t, 16);
    return (isNaN(n) || n < 0 || n > 4294967295) && z(`'${e}' is not a valid hex(a) color`), Cr(t);
  } else if (typeof e == "object") {
    if (Se(e, ["r", "g", "b"]))
      return e;
    if (Se(e, ["h", "s", "l"]))
      return U(Gt(e));
    if (Se(e, ["h", "s", "v"]))
      return U(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function U(e) {
  const {
    h: t,
    s: n,
    v: r,
    a
  } = e, s = (l) => {
    const i = (l + t / 60) % 6;
    return r - r * n * Math.max(Math.min(i, 4 - i, 1), 0);
  }, o = [s(5), s(3), s(1)].map((l) => Math.round(l * 255));
  return {
    r: o[0],
    g: o[1],
    b: o[2],
    a
  };
}
function vt(e) {
  return U(Gt(e));
}
function Gt(e) {
  const {
    h: t,
    s: n,
    l: r,
    a
  } = e, s = r + n * Math.min(r, 1 - r), o = s === 0 ? 0 : 2 - 2 * r / s;
  return {
    h: t,
    s: o,
    v: s,
    a
  };
}
function se(e) {
  const t = Math.round(e).toString(16);
  return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function wr(e) {
  let {
    r: t,
    g: n,
    b: r,
    a
  } = e;
  return `#${[se(t), se(n), se(r), a !== void 0 ? se(Math.round(a * 255)) : ""].join("")}`;
}
function Cr(e) {
  e = kr(e);
  let [t, n, r, a] = tr(e, 2).map((s) => parseInt(s, 16));
  return a = a === void 0 ? a : a / 255, {
    r: t,
    g: n,
    b: r,
    a
  };
}
function kr(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = tt(tt(e, 6), 8, "F")), e;
}
function Sr(e, t) {
  const n = Wt(He(e));
  return n[0] = n[0] + t * 10, zt(jt(n));
}
function Dr(e, t) {
  const n = Wt(He(e));
  return n[0] = n[0] - t * 10, zt(jt(n));
}
function xr(e) {
  const t = O(e);
  return He(t)[1];
}
function Yt(e) {
  const t = Math.abs(ft(O(0), O(e)));
  return Math.abs(ft(O(16777215), O(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function w(e, t) {
  return (n) => Object.keys(e).reduce((r, a) => {
    const o = typeof e[a] == "object" && e[a] != null && !Array.isArray(e[a]) ? e[a] : {
      type: e[a]
    };
    return n && a in n ? r[a] = {
      ...o,
      default: n[a]
    } : r[a] = o, t && !r[a].source && (r[a].source = t), r;
  }, {});
}
const he = w({
  class: [String, Array],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component"), G = Symbol.for("vuetify:defaults");
function Ir(e) {
  return I(e);
}
function We() {
  const e = J(G);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function Ut(e, t) {
  const n = We(), r = I(e), a = h(() => {
    if (P(t == null ? void 0 : t.disabled))
      return n.value;
    const o = P(t == null ? void 0 : t.scoped), l = P(t == null ? void 0 : t.reset), i = P(t == null ? void 0 : t.root);
    if (r.value == null && !(o || l || i))
      return n.value;
    let u = x(r.value, {
      prev: n.value
    });
    if (o)
      return u;
    if (l || i) {
      const f = Number(l || 1 / 0);
      for (let d = 0; d <= f && !(!u || !("prev" in u)); d++)
        u = u.prev;
      return u && typeof i == "string" && i in u && (u = x(x(u, {
        prev: u
      }), u[i])), u;
    }
    return u.prev ? x(u.prev, u) : u;
  });
  return q(G, a), a;
}
function _r(e, t) {
  var n, r;
  return typeof ((n = e.props) == null ? void 0 : n[t]) < "u" || typeof ((r = e.props) == null ? void 0 : r[N(t)]) < "u";
}
function Mr() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : We();
  const r = F("useDefaults");
  if (t = t ?? r.type.name ?? r.type.__name, !t)
    throw new Error("[Vuetify] Could not determine component name");
  const a = h(() => {
    var i;
    return (i = n.value) == null ? void 0 : i[e._as ?? t];
  }), s = new Proxy(e, {
    get(i, u) {
      var d, c, m, g;
      const f = Reflect.get(i, u);
      return u === "class" || u === "style" ? [(d = a.value) == null ? void 0 : d[u], f].filter((v) => v != null) : typeof u == "string" && !_r(r.vnode, u) ? ((c = a.value) == null ? void 0 : c[u]) ?? ((g = (m = n.value) == null ? void 0 : m.global) == null ? void 0 : g[u]) ?? f : f;
    }
  }), o = L();
  X(() => {
    if (a.value) {
      const i = Object.entries(a.value).filter((u) => {
        let [f] = u;
        return f.startsWith(f[0].toUpperCase());
      });
      o.value = i.length ? Object.fromEntries(i) : void 0;
    } else
      o.value = void 0;
  });
  function l() {
    const i = Tr(G, r);
    q(G, h(() => o.value ? x((i == null ? void 0 : i.value) ?? {}, o.value) : i == null ? void 0 : i.value));
  }
  return {
    props: s,
    provideSubDefaults: l
  };
}
function ee(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return z("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = w(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(r) {
      return Jn(r, t);
    }, e.props._as = String, e.setup = function(r, a) {
      const s = We();
      if (!s.value)
        return e._setup(r, a);
      const {
        props: o,
        provideSubDefaults: l
      } = Mr(r, r._as ?? e.name, s), i = e._setup(o, a);
      return l(), i;
    };
  }
  return e;
}
function R() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (t) => (e ? ee : me)(t);
}
function F(e, t) {
  const n = Pn();
  if (!n)
    throw new Error(`[Vuetify] ${e} ${t || "must be called from inside a setup function"}`);
  return n;
}
function H() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = F(e).type;
  return N((t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name));
}
let Zt = 0, ie = /* @__PURE__ */ new WeakMap();
function je() {
  const e = F("getUid");
  if (ie.has(e))
    return ie.get(e);
  {
    const t = Zt++;
    return ie.set(e, t), t;
  }
}
je.reset = () => {
  Zt = 0, ie = /* @__PURE__ */ new WeakMap();
};
function Tr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : F("injectSelf");
  const {
    provides: n
  } = t;
  if (n && e in n)
    return n[e];
}
function te(e) {
  const t = F("useRender");
  t.render = e;
}
function Kt(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (d) => d, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (d) => d;
  const s = F("useProxiedModel"), o = I(e[t] !== void 0 ? e[t] : n), l = N(t), u = l !== t ? h(() => {
    var d, c, m, g;
    return e[t], !!(((d = s.vnode.props) != null && d.hasOwnProperty(t) || (c = s.vnode.props) != null && c.hasOwnProperty(l)) && ((m = s.vnode.props) != null && m.hasOwnProperty(`onUpdate:${t}`) || (g = s.vnode.props) != null && g.hasOwnProperty(`onUpdate:${l}`)));
  }) : h(() => {
    var d, c;
    return e[t], !!((d = s.vnode.props) != null && d.hasOwnProperty(t) && ((c = s.vnode.props) != null && c.hasOwnProperty(`onUpdate:${t}`)));
  });
  Zn(() => !u.value, () => {
    $(() => e[t], (d) => {
      o.value = d;
    });
  });
  const f = h({
    get() {
      const d = e[t];
      return r(u.value ? d : o.value);
    },
    set(d) {
      const c = a(d), m = An(u.value ? e[t] : o.value);
      m === c || r(m) === d || (o.value = c, s == null || s.emit(`update:${t}`, c));
    }
  });
  return Object.defineProperty(f, "externalValue", {
    get: () => u.value ? e[t] : o.value
  }), f;
}
const Or = {
  badge: "Badge",
  open: "Open",
  close: "Close",
  confirmEdit: {
    ok: "OK",
    cancel: "Cancel"
  },
  dataIterator: {
    noResultsText: "No matching records found",
    loadingText: "Loading items..."
  },
  dataTable: {
    itemsPerPageText: "Rows per page:",
    ariaLabel: {
      sortDescending: "Sorted descending.",
      sortAscending: "Sorted ascending.",
      sortNone: "Not sorted.",
      activateNone: "Activate to remove sorting.",
      activateDescending: "Activate to sort descending.",
      activateAscending: "Activate to sort ascending."
    },
    sortBy: "Sort by"
  },
  dataFooter: {
    itemsPerPageText: "Items per page:",
    itemsPerPageAll: "All",
    nextPage: "Next page",
    prevPage: "Previous page",
    firstPage: "First page",
    lastPage: "Last page",
    pageText: "{0}-{1} of {2}"
  },
  dateRangeInput: {
    divider: "to"
  },
  datePicker: {
    itemsSelected: "{0} selected",
    range: {
      title: "Select dates",
      header: "Enter dates"
    },
    title: "Select date",
    header: "Enter date",
    input: {
      placeholder: "Enter date"
    }
  },
  noDataText: "No data available",
  carousel: {
    prev: "Previous visual",
    next: "Next visual",
    ariaLabel: {
      delimiter: "Carousel slide {0} of {1}"
    }
  },
  calendar: {
    moreEvents: "{0} more",
    today: "Today"
  },
  input: {
    clear: "Clear {0}",
    prependAction: "{0} prepended action",
    appendAction: "{0} appended action",
    otp: "Please enter OTP character {0}"
  },
  fileInput: {
    counter: "{0} files",
    counterSize: "{0} files ({1} in total)"
  },
  timePicker: {
    am: "AM",
    pm: "PM"
  },
  pagination: {
    ariaLabel: {
      root: "Pagination Navigation",
      next: "Next page",
      previous: "Previous page",
      page: "Go to page {0}",
      currentPage: "Page {0}, Current page",
      first: "First page",
      last: "Last page"
    }
  },
  stepper: {
    next: "Next",
    prev: "Previous"
  },
  rating: {
    ariaLabel: {
      item: "Rating {0} of {1}"
    }
  },
  loading: "Loading...",
  infiniteScroll: {
    loadMore: "Load more",
    empty: "No more"
  }
}, ht = "$vuetify.", yt = (e, t) => e.replace(/\{(\d+)\}/g, (n, r) => String(t[+r])), Qt = (e, t, n) => function(r) {
  for (var a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++)
    s[o - 1] = arguments[o];
  if (!r.startsWith(ht))
    return yt(r, s);
  const l = r.replace(ht, ""), i = e.value && n.value[e.value], u = t.value && n.value[t.value];
  let f = Je(i, l, null);
  return f || (z(`Translation key "${r}" not found in "${e.value}", trying fallback locale`), f = Je(u, l, null)), f || (mt(`Translation key "${r}" not found in fallback`), f = r), typeof f != "string" && (mt(`Translation key "${r}" has a non-string value`), f = r), yt(f, s);
};
function Xt(e, t) {
  return (n, r) => new Intl.NumberFormat([e.value, t.value], r).format(n);
}
function De(e, t, n) {
  const r = Kt(e, t, e[t] ?? n.value);
  return r.value = e[t] ?? n.value, $(n, (a) => {
    e[t] == null && (r.value = n.value);
  }), r;
}
function Jt(e) {
  return (t) => {
    const n = De(t, "locale", e.current), r = De(t, "fallback", e.fallback), a = De(t, "messages", e.messages);
    return {
      name: "vuetify",
      current: n,
      fallback: r,
      messages: a,
      t: Qt(n, r, a),
      n: Xt(n, r),
      provide: Jt({
        current: n,
        fallback: r,
        messages: a
      })
    };
  };
}
function $r(e) {
  const t = L((e == null ? void 0 : e.locale) ?? "en"), n = L((e == null ? void 0 : e.fallback) ?? "en"), r = I({
    en: Or,
    ...e == null ? void 0 : e.messages
  });
  return {
    name: "vuetify",
    current: t,
    fallback: n,
    messages: r,
    t: Qt(t, n, r),
    n: Xt(t, n),
    provide: Jt({
      current: t,
      fallback: n,
      messages: r
    })
  };
}
const $e = Symbol.for("vuetify:locale");
function Fr(e) {
  return e.name != null;
}
function Er(e) {
  const t = e != null && e.adapter && Fr(e == null ? void 0 : e.adapter) ? e == null ? void 0 : e.adapter : $r(e), n = Ar(t, e);
  return {
    ...t,
    ...n
  };
}
function Pr() {
  return {
    af: !1,
    ar: !0,
    bg: !1,
    ca: !1,
    ckb: !1,
    cs: !1,
    de: !1,
    el: !1,
    en: !1,
    es: !1,
    et: !1,
    fa: !0,
    fi: !1,
    fr: !1,
    hr: !1,
    hu: !1,
    he: !0,
    id: !1,
    it: !1,
    ja: !1,
    km: !1,
    ko: !1,
    lv: !1,
    lt: !1,
    nl: !1,
    no: !1,
    pl: !1,
    pt: !1,
    ro: !1,
    ru: !1,
    sk: !1,
    sl: !1,
    srCyrl: !1,
    srLatn: !1,
    sv: !1,
    th: !1,
    tr: !1,
    az: !1,
    uk: !1,
    vi: !1,
    zhHans: !1,
    zhHant: !1
  };
}
function Ar(e, t) {
  const n = I((t == null ? void 0 : t.rtl) ?? Pr()), r = h(() => n.value[e.current.value] ?? !1);
  return {
    isRtl: r,
    rtl: n,
    rtlClasses: h(() => `v-locale--is-${r.value ? "rtl" : "ltr"}`)
  };
}
function Br() {
  const e = J($e);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: e.isRtl,
    rtlClasses: e.rtlClasses
  };
}
const Fe = {
  "001": 1,
  AD: 1,
  AE: 6,
  AF: 6,
  AG: 0,
  AI: 1,
  AL: 1,
  AM: 1,
  AN: 1,
  AR: 1,
  AS: 0,
  AT: 1,
  AU: 1,
  AX: 1,
  AZ: 1,
  BA: 1,
  BD: 0,
  BE: 1,
  BG: 1,
  BH: 6,
  BM: 1,
  BN: 1,
  BR: 0,
  BS: 0,
  BT: 0,
  BW: 0,
  BY: 1,
  BZ: 0,
  CA: 0,
  CH: 1,
  CL: 1,
  CM: 1,
  CN: 1,
  CO: 0,
  CR: 1,
  CY: 1,
  CZ: 1,
  DE: 1,
  DJ: 6,
  DK: 1,
  DM: 0,
  DO: 0,
  DZ: 6,
  EC: 1,
  EE: 1,
  EG: 6,
  ES: 1,
  ET: 0,
  FI: 1,
  FJ: 1,
  FO: 1,
  FR: 1,
  GB: 1,
  "GB-alt-variant": 0,
  GE: 1,
  GF: 1,
  GP: 1,
  GR: 1,
  GT: 0,
  GU: 0,
  HK: 0,
  HN: 0,
  HR: 1,
  HU: 1,
  ID: 0,
  IE: 1,
  IL: 0,
  IN: 0,
  IQ: 6,
  IR: 6,
  IS: 1,
  IT: 1,
  JM: 0,
  JO: 6,
  JP: 0,
  KE: 0,
  KG: 1,
  KH: 0,
  KR: 0,
  KW: 6,
  KZ: 1,
  LA: 0,
  LB: 1,
  LI: 1,
  LK: 1,
  LT: 1,
  LU: 1,
  LV: 1,
  LY: 6,
  MC: 1,
  MD: 1,
  ME: 1,
  MH: 0,
  MK: 1,
  MM: 0,
  MN: 1,
  MO: 0,
  MQ: 1,
  MT: 0,
  MV: 5,
  MX: 0,
  MY: 1,
  MZ: 0,
  NI: 0,
  NL: 1,
  NO: 1,
  NP: 0,
  NZ: 1,
  OM: 6,
  PA: 0,
  PE: 0,
  PH: 0,
  PK: 0,
  PL: 1,
  PR: 0,
  PT: 0,
  PY: 0,
  QA: 6,
  RE: 1,
  RO: 1,
  RS: 1,
  RU: 1,
  SA: 0,
  SD: 6,
  SE: 1,
  SG: 0,
  SI: 1,
  SK: 1,
  SM: 1,
  SV: 0,
  SY: 6,
  TH: 0,
  TJ: 1,
  TM: 1,
  TR: 1,
  TT: 0,
  TW: 0,
  UA: 1,
  UM: 0,
  US: 0,
  UY: 1,
  UZ: 1,
  VA: 1,
  VE: 0,
  VI: 0,
  VN: 1,
  WS: 0,
  XK: 1,
  YE: 0,
  ZA: 0,
  ZW: 0
};
function Lr(e, t) {
  const n = [];
  let r = [];
  const a = qt(e), s = en(e), o = (a.getDay() - Fe[t.slice(-2).toUpperCase()] + 7) % 7, l = (s.getDay() - Fe[t.slice(-2).toUpperCase()] + 7) % 7;
  for (let i = 0; i < o; i++) {
    const u = new Date(a);
    u.setDate(u.getDate() - (o - i)), r.push(u);
  }
  for (let i = 1; i <= s.getDate(); i++) {
    const u = new Date(e.getFullYear(), e.getMonth(), i);
    r.push(u), r.length === 7 && (n.push(r), r = []);
  }
  for (let i = 1; i < 7 - l; i++) {
    const u = new Date(s);
    u.setDate(u.getDate() + i), r.push(u);
  }
  return r.length > 0 && n.push(r), n;
}
function Nr(e) {
  const t = new Date(e);
  for (; t.getDay() !== 0; )
    t.setDate(t.getDate() - 1);
  return t;
}
function Vr(e) {
  const t = new Date(e);
  for (; t.getDay() !== 6; )
    t.setDate(t.getDate() + 1);
  return t;
}
function qt(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function en(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
function Rr(e) {
  const t = e.split("-").map(Number);
  return new Date(t[0], t[1] - 1, t[2]);
}
const Hr = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function tn(e) {
  if (e == null)
    return /* @__PURE__ */ new Date();
  if (e instanceof Date)
    return e;
  if (typeof e == "string") {
    let t;
    if (Hr.test(e))
      return Rr(e);
    if (t = Date.parse(e), !isNaN(t))
      return new Date(t);
  }
  return null;
}
const pt = new Date(2e3, 0, 2);
function Wr(e) {
  const t = Fe[e.slice(-2).toUpperCase()];
  return Vt(7).map((n) => {
    const r = new Date(pt);
    return r.setDate(pt.getDate() + t + n), new Intl.DateTimeFormat(e, {
      weekday: "narrow"
    }).format(r);
  });
}
function jr(e, t, n, r) {
  const a = tn(e) ?? /* @__PURE__ */ new Date(), s = r == null ? void 0 : r[t];
  if (typeof s == "function")
    return s(a, t, n);
  let o = {};
  switch (t) {
    case "fullDateWithWeekday":
      o = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
      };
      break;
    case "hours12h":
      o = {
        hour: "numeric",
        hour12: !0
      };
      break;
    case "normalDateWithWeekday":
      o = {
        weekday: "short",
        day: "numeric",
        month: "short"
      };
      break;
    case "keyboardDate":
      o = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      };
      break;
    case "monthAndDate":
      o = {
        month: "long",
        day: "numeric"
      };
      break;
    case "monthAndYear":
      o = {
        month: "long",
        year: "numeric"
      };
      break;
    case "month":
      o = {
        month: "long"
      };
      break;
    case "monthShort":
      o = {
        month: "short"
      };
      break;
    case "dayOfMonth":
      return new Intl.NumberFormat(n).format(a.getDate());
    case "shortDate":
      o = {
        year: "2-digit",
        month: "numeric",
        day: "numeric"
      };
      break;
    case "weekdayShort":
      o = {
        weekday: "short"
      };
      break;
    case "year":
      o = {
        year: "numeric"
      };
      break;
    default:
      o = s ?? {
        timeZone: "UTC",
        timeZoneName: "short"
      };
  }
  return new Intl.DateTimeFormat(n, o).format(a);
}
function zr(e, t) {
  const n = e.toJsDate(t), r = n.getFullYear(), a = nt(String(n.getMonth() + 1), 2, "0"), s = nt(String(n.getDate()), 2, "0");
  return `${r}-${a}-${s}`;
}
function Gr(e) {
  const [t, n, r] = e.split("-").map(Number);
  return new Date(t, n - 1, r);
}
function Yr(e, t) {
  const n = new Date(e);
  return n.setMinutes(n.getMinutes() + t), n;
}
function Ur(e, t) {
  const n = new Date(e);
  return n.setHours(n.getHours() + t), n;
}
function Zr(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t), n;
}
function Kr(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t * 7), n;
}
function Qr(e, t) {
  const n = new Date(e);
  return n.setMonth(n.getMonth() + t), n;
}
function Xr(e) {
  return e.getFullYear();
}
function Jr(e) {
  return e.getMonth();
}
function qr(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 1);
}
function ea(e) {
  return e.getHours();
}
function ta(e) {
  return e.getMinutes();
}
function na(e) {
  return new Date(e.getFullYear(), 0, 1);
}
function ra(e) {
  return new Date(e.getFullYear(), 11, 31);
}
function aa(e, t) {
  return Ee(e, t[0]) && oa(e, t[1]);
}
function sa(e) {
  const t = new Date(e);
  return t instanceof Date && !isNaN(t.getTime());
}
function Ee(e, t) {
  return e.getTime() > t.getTime();
}
function oa(e, t) {
  return e.getTime() < t.getTime();
}
function bt(e, t) {
  return e.getTime() === t.getTime();
}
function ia(e, t) {
  return e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function la(e, t) {
  return e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function ua(e, t, n) {
  const r = new Date(e), a = new Date(t);
  return n === "month" ? r.getMonth() - a.getMonth() + (r.getFullYear() - a.getFullYear()) * 12 : Math.floor((r.getTime() - a.getTime()) / (1e3 * 60 * 60 * 24));
}
function ca(e, t) {
  const n = new Date(e);
  return n.setHours(t), n;
}
function da(e, t) {
  const n = new Date(e);
  return n.setMinutes(t), n;
}
function fa(e, t) {
  const n = new Date(e);
  return n.setMonth(t), n;
}
function ma(e, t) {
  const n = new Date(e);
  return n.setFullYear(t), n;
}
function ga(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate());
}
function va(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999);
}
class ha {
  constructor(t) {
    this.locale = t.locale, this.formats = t.formats;
  }
  date(t) {
    return tn(t);
  }
  toJsDate(t) {
    return t;
  }
  toISO(t) {
    return zr(this, t);
  }
  parseISO(t) {
    return Gr(t);
  }
  addMinutes(t, n) {
    return Yr(t, n);
  }
  addHours(t, n) {
    return Ur(t, n);
  }
  addDays(t, n) {
    return Zr(t, n);
  }
  addWeeks(t, n) {
    return Kr(t, n);
  }
  addMonths(t, n) {
    return Qr(t, n);
  }
  getWeekArray(t) {
    return Lr(t, this.locale);
  }
  startOfWeek(t) {
    return Nr(t);
  }
  endOfWeek(t) {
    return Vr(t);
  }
  startOfMonth(t) {
    return qt(t);
  }
  endOfMonth(t) {
    return en(t);
  }
  format(t, n) {
    return jr(t, n, this.locale, this.formats);
  }
  isEqual(t, n) {
    return bt(t, n);
  }
  isValid(t) {
    return sa(t);
  }
  isWithinRange(t, n) {
    return aa(t, n);
  }
  isAfter(t, n) {
    return Ee(t, n);
  }
  isBefore(t, n) {
    return !Ee(t, n) && !bt(t, n);
  }
  isSameDay(t, n) {
    return ia(t, n);
  }
  isSameMonth(t, n) {
    return la(t, n);
  }
  setMinutes(t, n) {
    return da(t, n);
  }
  setHours(t, n) {
    return ca(t, n);
  }
  setMonth(t, n) {
    return fa(t, n);
  }
  setYear(t, n) {
    return ma(t, n);
  }
  getDiff(t, n, r) {
    return ua(t, n, r);
  }
  getWeekdays() {
    return Wr(this.locale);
  }
  getYear(t) {
    return Xr(t);
  }
  getMonth(t) {
    return Jr(t);
  }
  getNextMonth(t) {
    return qr(t);
  }
  getHours(t) {
    return ea(t);
  }
  getMinutes(t) {
    return ta(t);
  }
  startOfDay(t) {
    return ga(t);
  }
  endOfDay(t) {
    return va(t);
  }
  startOfYear(t) {
    return na(t);
  }
  endOfYear(t) {
    return ra(t);
  }
}
const ya = Symbol.for("vuetify:date-options"), wt = Symbol.for("vuetify:date-adapter");
function pa(e, t) {
  const n = x({
    adapter: ha,
    locale: {
      af: "af-ZA",
      // ar: '', # not the same value for all variants
      bg: "bg-BG",
      ca: "ca-ES",
      ckb: "",
      cs: "cs-CZ",
      de: "de-DE",
      el: "el-GR",
      en: "en-US",
      // es: '', # not the same value for all variants
      et: "et-EE",
      fa: "fa-IR",
      fi: "fi-FI",
      // fr: '', #not the same value for all variants
      hr: "hr-HR",
      hu: "hu-HU",
      he: "he-IL",
      id: "id-ID",
      it: "it-IT",
      ja: "ja-JP",
      ko: "ko-KR",
      lv: "lv-LV",
      lt: "lt-LT",
      nl: "nl-NL",
      no: "no-NO",
      pl: "pl-PL",
      pt: "pt-PT",
      ro: "ro-RO",
      ru: "ru-RU",
      sk: "sk-SK",
      sl: "sl-SI",
      srCyrl: "sr-SP",
      srLatn: "sr-SP",
      sv: "sv-SE",
      th: "th-TH",
      tr: "tr-TR",
      az: "az-AZ",
      uk: "uk-UA",
      vi: "vi-VN",
      zhHans: "zh-CN",
      zhHant: "zh-TW"
    }
  }, e);
  return {
    options: n,
    instance: ba(n, t)
  };
}
function ba(e, t) {
  const n = Q(typeof e.adapter == "function" ? new e.adapter({
    locale: e.locale[t.current.value] ?? t.current.value,
    formats: e.formats
  }) : e.adapter);
  return $(t.current, (r) => {
    n.locale = e.locale[r] ?? r ?? n.locale;
  }), n;
}
const Ct = Symbol.for("vuetify:display"), kt = {
  mobileBreakpoint: "lg",
  thresholds: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
    xxl: 2560
  }
}, wa = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : kt;
  return x(kt, e);
};
function St(e) {
  return M && !e ? window.innerWidth : typeof e == "object" && e.clientWidth || 0;
}
function Dt(e) {
  return M && !e ? window.innerHeight : typeof e == "object" && e.clientHeight || 0;
}
function xt(e) {
  const t = M && !e ? window.navigator.userAgent : "ssr";
  function n(g) {
    return !!t.match(g);
  }
  const r = n(/android/i), a = n(/iphone|ipad|ipod/i), s = n(/cordova/i), o = n(/electron/i), l = n(/chrome/i), i = n(/edge/i), u = n(/firefox/i), f = n(/opera/i), d = n(/win/i), c = n(/mac/i), m = n(/linux/i);
  return {
    android: r,
    ios: a,
    cordova: s,
    electron: o,
    chrome: l,
    edge: i,
    firefox: u,
    opera: f,
    win: d,
    mac: c,
    linux: m,
    touch: Qn,
    ssr: t === "ssr"
  };
}
function Ca(e, t) {
  const {
    thresholds: n,
    mobileBreakpoint: r
  } = wa(e), a = L(Dt(t)), s = L(xt(t)), o = Q({}), l = L(St(t));
  function i() {
    a.value = Dt(), l.value = St();
  }
  function u() {
    i(), s.value = xt();
  }
  return X(() => {
    const f = l.value < n.sm, d = l.value < n.md && !f, c = l.value < n.lg && !(d || f), m = l.value < n.xl && !(c || d || f), g = l.value < n.xxl && !(m || c || d || f), v = l.value >= n.xxl, y = f ? "xs" : d ? "sm" : c ? "md" : m ? "lg" : g ? "xl" : "xxl", C = typeof r == "number" ? r : n[r], b = l.value < C;
    o.xs = f, o.sm = d, o.md = c, o.lg = m, o.xl = g, o.xxl = v, o.smAndUp = !f, o.mdAndUp = !(f || d), o.lgAndUp = !(f || d || c), o.xlAndUp = !(f || d || c || m), o.smAndDown = !(c || m || g || v), o.mdAndDown = !(m || g || v), o.lgAndDown = !(g || v), o.xlAndDown = !v, o.name = y, o.height = a.value, o.width = l.value, o.mobile = b, o.mobileBreakpoint = r, o.platform = s.value, o.thresholds = n;
  }), M && window.addEventListener("resize", i, {
    passive: !0
  }), {
    ...Ne(o),
    update: u,
    ssr: !!t
  };
}
const ka = Symbol.for("vuetify:goto");
function Sa() {
  return {
    container: void 0,
    duration: 300,
    layout: !1,
    offset: 0,
    easing: "easeInOutCubic",
    patterns: {
      linear: (e) => e,
      easeInQuad: (e) => e ** 2,
      easeOutQuad: (e) => e * (2 - e),
      easeInOutQuad: (e) => e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e,
      easeInCubic: (e) => e ** 3,
      easeOutCubic: (e) => --e ** 3 + 1,
      easeInOutCubic: (e) => e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
      easeInQuart: (e) => e ** 4,
      easeOutQuart: (e) => 1 - --e ** 4,
      easeInOutQuart: (e) => e < 0.5 ? 8 * e ** 4 : 1 - 8 * --e ** 4,
      easeInQuint: (e) => e ** 5,
      easeOutQuint: (e) => 1 + --e ** 5,
      easeInOutQuint: (e) => e < 0.5 ? 16 * e ** 5 : 1 + 16 * --e ** 5
    }
  };
}
function Da(e, t) {
  return {
    rtl: t.isRtl,
    options: x(Sa(), e)
  };
}
const xa = {
  collapse: "mdi-chevron-up",
  complete: "mdi-check",
  cancel: "mdi-close-circle",
  close: "mdi-close",
  delete: "mdi-close-circle",
  // delete (e.g. v-chip close)
  clear: "mdi-close-circle",
  success: "mdi-check-circle",
  info: "mdi-information",
  warning: "mdi-alert-circle",
  error: "mdi-close-circle",
  prev: "mdi-chevron-left",
  next: "mdi-chevron-right",
  checkboxOn: "mdi-checkbox-marked",
  checkboxOff: "mdi-checkbox-blank-outline",
  checkboxIndeterminate: "mdi-minus-box",
  delimiter: "mdi-circle",
  // for carousel
  sortAsc: "mdi-arrow-up",
  sortDesc: "mdi-arrow-down",
  expand: "mdi-chevron-down",
  menu: "mdi-menu",
  subgroup: "mdi-menu-down",
  dropdown: "mdi-menu-down",
  radioOn: "mdi-radiobox-marked",
  radioOff: "mdi-radiobox-blank",
  edit: "mdi-pencil",
  ratingEmpty: "mdi-star-outline",
  ratingFull: "mdi-star",
  ratingHalf: "mdi-star-half-full",
  loading: "mdi-cached",
  first: "mdi-page-first",
  last: "mdi-page-last",
  unfold: "mdi-unfold-more-horizontal",
  file: "mdi-paperclip",
  plus: "mdi-plus",
  minus: "mdi-minus",
  calendar: "mdi-calendar",
  eyeDropper: "mdi-eyedropper"
}, Ia = {
  // Not using mergeProps here, functional components merge props by default (?)
  component: (e) => Bn(rn, {
    ...e,
    class: "mdi"
  })
}, ue = [String, Function, Object, Array], Pe = Symbol.for("vuetify:icons"), ye = w({
  icon: {
    type: ue
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: String,
    required: !0
  }
}, "icon"), It = R()({
  name: "VComponentIcon",
  props: ye(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return () => {
      const r = e.icon;
      return p(e.tag, null, {
        default: () => {
          var a;
          return [e.icon ? p(r, null, null) : (a = n.default) == null ? void 0 : a.call(n)];
        }
      });
    };
  }
}), nn = ee({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: ye(),
  setup(e, t) {
    let {
      attrs: n
    } = t;
    return () => p(e.tag, Pt(n, {
      style: null
    }), {
      default: () => [p("svg", {
        class: "v-icon__svg",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-hidden": "true"
      }, [Array.isArray(e.icon) ? e.icon.map((r) => Array.isArray(r) ? p("path", {
        d: r[0],
        "fill-opacity": r[1]
      }, null) : p("path", {
        d: r
      }, null)) : p("path", {
        d: e.icon
      }, null)])]
    });
  }
});
ee({
  name: "VLigatureIcon",
  props: ye(),
  setup(e) {
    return () => p(e.tag, null, {
      default: () => [e.icon]
    });
  }
});
const rn = ee({
  name: "VClassIcon",
  props: ye(),
  setup(e) {
    return () => p(e.tag, {
      class: e.icon
    }, null);
  }
}), _a = {
  svg: {
    component: nn
  },
  class: {
    component: rn
  }
};
function Ma(e) {
  return x({
    defaultSet: "mdi",
    sets: {
      ..._a,
      mdi: Ia
    },
    aliases: {
      ...xa,
      /* eslint-disable max-len */
      vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", 0.6]],
      "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z"
      /* eslint-enable max-len */
    }
  }, e);
}
const Ta = (e) => {
  const t = J(Pe);
  if (!t)
    throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: h(() => {
      var i;
      const r = P(e);
      if (!r)
        return {
          component: It
        };
      let a = r;
      if (typeof a == "string" && (a = a.trim(), a.startsWith("$") && (a = (i = t.aliases) == null ? void 0 : i[a.slice(1)])), !a)
        throw new Error(`Could not find aliased icon "${r}"`);
      if (Array.isArray(a))
        return {
          component: nn,
          icon: a
        };
      if (typeof a != "string")
        return {
          component: It,
          icon: a
        };
      const s = Object.keys(t.sets).find((u) => typeof a == "string" && a.startsWith(`${u}:`)), o = s ? a.slice(s.length + 1) : a;
      return {
        component: t.sets[s ?? t.defaultSet].component,
        icon: o
      };
    })
  };
}, ce = Symbol.for("vuetify:theme"), pe = w({
  theme: String
}, "theme");
function _t() {
  return {
    defaultTheme: "light",
    variations: {
      colors: [],
      lighten: 0,
      darken: 0
    },
    themes: {
      light: {
        dark: !1,
        colors: {
          background: "#FFFFFF",
          surface: "#FFFFFF",
          "surface-bright": "#FFFFFF",
          "surface-light": "#EEEEEE",
          "surface-variant": "#424242",
          "on-surface-variant": "#EEEEEE",
          primary: "#1867C0",
          "primary-darken-1": "#1F5592",
          secondary: "#48A9A6",
          "secondary-darken-1": "#018786",
          error: "#B00020",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00"
        },
        variables: {
          "border-color": "#000000",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 0.87,
          "medium-emphasis-opacity": 0.6,
          "disabled-opacity": 0.38,
          "idle-opacity": 0.04,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.12,
          "dragged-opacity": 0.08,
          "theme-kbd": "#212529",
          "theme-on-kbd": "#FFFFFF",
          "theme-code": "#F5F5F5",
          "theme-on-code": "#000000"
        }
      },
      dark: {
        dark: !0,
        colors: {
          background: "#121212",
          surface: "#212121",
          "surface-bright": "#ccbfd6",
          "surface-light": "#424242",
          "surface-variant": "#a3a3a3",
          "on-surface-variant": "#424242",
          primary: "#2196F3",
          "primary-darken-1": "#277CC1",
          secondary: "#54B6B2",
          "secondary-darken-1": "#48A9A6",
          error: "#CF6679",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00"
        },
        variables: {
          "border-color": "#FFFFFF",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 1,
          "medium-emphasis-opacity": 0.7,
          "disabled-opacity": 0.5,
          "idle-opacity": 0.1,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.16,
          "dragged-opacity": 0.08,
          "theme-kbd": "#212529",
          "theme-on-kbd": "#FFFFFF",
          "theme-code": "#343434",
          "theme-on-code": "#CCCCCC"
        }
      }
    }
  };
}
function Oa() {
  var r, a;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _t();
  const t = _t();
  if (!e)
    return {
      ...t,
      isDisabled: !0
    };
  const n = {};
  for (const [s, o] of Object.entries(e.themes ?? {})) {
    const l = o.dark || s === "dark" ? (r = t.themes) == null ? void 0 : r.dark : (a = t.themes) == null ? void 0 : a.light;
    n[s] = x(l, o);
  }
  return x(t, {
    ...e,
    themes: n
  });
}
function $a(e) {
  const t = Oa(e), n = I(t.defaultTheme), r = I(t.themes), a = h(() => {
    const f = {};
    for (const [d, c] of Object.entries(r.value)) {
      const m = f[d] = {
        ...c,
        colors: {
          ...c.colors
        }
      };
      if (t.variations)
        for (const g of t.variations.colors) {
          const v = m.colors[g];
          if (v)
            for (const y of ["lighten", "darken"]) {
              const C = y === "lighten" ? Sr : Dr;
              for (const b of Vt(t.variations[y], 1))
                m.colors[`${g}-${y}-${b}`] = wr(C(O(v), b));
            }
        }
      for (const g of Object.keys(m.colors)) {
        if (/^on-[a-z]/.test(g) || m.colors[`on-${g}`])
          continue;
        const v = `on-${g}`, y = O(m.colors[g]);
        m.colors[v] = Yt(y);
      }
    }
    return f;
  }), s = h(() => a.value[n.value]), o = h(() => {
    const f = [];
    s.value.dark && B(f, ":root", ["color-scheme: dark"]), B(f, ":root", Mt(s.value));
    for (const [g, v] of Object.entries(a.value))
      B(f, `.v-theme--${g}`, [`color-scheme: ${v.dark ? "dark" : "normal"}`, ...Mt(v)]);
    const d = [], c = [], m = new Set(Object.values(a.value).flatMap((g) => Object.keys(g.colors)));
    for (const g of m)
      /^on-[a-z]/.test(g) ? B(c, `.${g}`, [`color: rgb(var(--v-theme-${g})) !important`]) : (B(d, `.bg-${g}`, [`--v-theme-overlay-multiplier: var(--v-theme-${g}-overlay-multiplier)`, `background-color: rgb(var(--v-theme-${g})) !important`, `color: rgb(var(--v-theme-on-${g})) !important`]), B(c, `.text-${g}`, [`color: rgb(var(--v-theme-${g})) !important`]), B(c, `.border-${g}`, [`--v-border-color: var(--v-theme-${g})`]));
    return f.push(...d, ...c), f.map((g, v) => v === 0 ? g : `    ${g}`).join("");
  });
  function l() {
    return {
      style: [{
        children: o.value,
        id: "vuetify-theme-stylesheet",
        nonce: t.cspNonce || !1
      }]
    };
  }
  function i(f) {
    if (t.isDisabled)
      return;
    const d = f._context.provides.usehead;
    if (d)
      if (d.push) {
        const c = d.push(l);
        M && $(o, () => {
          c.patch(l);
        });
      } else
        M ? (d.addHeadObjs(h(l)), X(() => d.updateDOM())) : d.addHeadObjs(l());
    else {
      let m = function() {
        if (typeof document < "u" && !c) {
          const g = document.createElement("style");
          g.type = "text/css", g.id = "vuetify-theme-stylesheet", t.cspNonce && g.setAttribute("nonce", t.cspNonce), c = g, document.head.appendChild(c);
        }
        c && (c.innerHTML = o.value);
      }, c = M ? document.getElementById("vuetify-theme-stylesheet") : null;
      M ? $(o, m, {
        immediate: !0
      }) : m();
    }
  }
  const u = h(() => t.isDisabled ? void 0 : `v-theme--${n.value}`);
  return {
    install: i,
    isDisabled: t.isDisabled,
    name: n,
    themes: r,
    current: s,
    computedThemes: a,
    themeClasses: u,
    styles: o,
    global: {
      name: n,
      current: s
    }
  };
}
function be(e) {
  F("provideTheme");
  const t = J(ce, null);
  if (!t)
    throw new Error("Could not find Vuetify theme injection");
  const n = h(() => e.theme ?? t.name.value), r = h(() => t.themes.value[n.value]), a = h(() => t.isDisabled ? void 0 : `v-theme--${n.value}`), s = {
    ...t,
    name: n,
    current: r,
    themeClasses: a
  };
  return q(ce, s), s;
}
function B(e, t, n) {
  e.push(`${t} {
`, ...n.map((r) => `  ${r};
`), `}
`);
}
function Mt(e) {
  const t = e.dark ? 2 : 1, n = e.dark ? 1 : 2, r = [];
  for (const [a, s] of Object.entries(e.colors)) {
    const o = O(s);
    r.push(`--v-theme-${a}: ${o.r},${o.g},${o.b}`), a.startsWith("on-") || r.push(`--v-theme-${a}-overlay-multiplier: ${xr(s) > 0.18 ? t : n}`);
  }
  for (const [a, s] of Object.entries(e.variables)) {
    const o = typeof s == "string" && s.startsWith("#") ? O(s) : void 0, l = o ? `${o.r}, ${o.g}, ${o.b}` : void 0;
    r.push(`--v-${a}: ${l ?? s}`);
  }
  return r;
}
function Fa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = I(), r = I();
  if (M) {
    const a = new ResizeObserver((s) => {
      e == null || e(s, a), s.length && (t === "content" ? r.value = s[0].contentRect : r.value = s[0].target.getBoundingClientRect());
    });
    ge(() => {
      a.disconnect();
    }), $(n, (s, o) => {
      o && (a.unobserve(qe(o)), r.value = void 0), s && a.observe(qe(s));
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef: n,
    contentRect: Ln(r)
  };
}
function an() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    blueprint: t,
    ...n
  } = e, r = x(t, n), {
    aliases: a = {},
    components: s = {},
    directives: o = {}
  } = r, l = Ir(r.defaults), i = Ca(r.display, r.ssr), u = $a(r.theme), f = Ma(r.icons), d = Er(r.locale), c = pa(r.date, d), m = Da(r.goTo, d);
  return {
    install: (v) => {
      for (const y in o)
        v.directive(y, o[y]);
      for (const y in s)
        v.component(y, s[y]);
      for (const y in a)
        v.component(y, ee({
          ...a[y],
          name: y,
          aliasName: a[y].name
        }));
      if (u.install(v), v.provide(G, l), v.provide(Ct, i), v.provide(ce, u), v.provide(Pe, f), v.provide($e, d), v.provide(ya, c.options), v.provide(wt, c.instance), v.provide(ka, m), M && r.ssr)
        if (v.$nuxt)
          v.$nuxt.hook("app:suspense:resolve", () => {
            i.update();
          });
        else {
          const {
            mount: y
          } = v;
          v.mount = function() {
            const C = y(...arguments);
            return At(() => i.update()), v.mount = y, C;
          };
        }
      je.reset(), v.mixin({
        computed: {
          $vuetify() {
            return Q({
              defaults: j.call(this, G),
              display: j.call(this, Ct),
              theme: j.call(this, ce),
              icons: j.call(this, Pe),
              locale: j.call(this, $e),
              date: j.call(this, wt)
            });
          }
        }
      });
    },
    defaults: l,
    display: i,
    theme: u,
    icons: f,
    locale: d,
    date: c,
    goTo: m
  };
}
const Ea = "3.5.2";
an.version = Ea;
function j(e) {
  var r, a;
  const t = this.$, n = ((r = t.parent) == null ? void 0 : r.provides) ?? ((a = t.vnode.appContext) == null ? void 0 : a.provides);
  if (n && e in n)
    return n[e];
}
const Pa = "/vite.svg", Aa = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1sb2dvcyIgd2lkdGg9IjM3LjA3IiBoZWlnaHQ9IjM2IiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMjU2IDE5OCI+PHBhdGggZmlsbD0iIzQxQjg4MyIgZD0iTTIwNC44IDBIMjU2TDEyOCAyMjAuOEwwIDBoOTcuOTJMMTI4IDUxLjJMMTU3LjQ0IDBoNDcuMzZaIj48L3BhdGg+PHBhdGggZmlsbD0iIzQxQjg4MyIgZD0ibTAgMGwxMjggMjIwLjhMMjU2IDBoLTUxLjJMMTI4IDEzMi40OEw1MC41NiAwSDBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzM1NDk1RSIgZD0iTTUwLjU2IDBMMTI4IDEzMy4xMkwyMDQuOCAwaC00Ny4zNkwxMjggNTEuMkw5Ny45MiAwSDUwLjU2WiI+PC9wYXRoPjwvc3ZnPg==", we = (e) => (Lt("data-v-1d5be6d4"), e = e(), Nt(), e), Ba = { class: "card" }, La = /* @__PURE__ */ we(() => /* @__PURE__ */ S("p", null, [
  /* @__PURE__ */ V(" Edit "),
  /* @__PURE__ */ S("code", null, "components/HelloWorld.vue"),
  /* @__PURE__ */ V(" to test HMR ")
], -1)), Na = /* @__PURE__ */ we(() => /* @__PURE__ */ S("p", null, [
  /* @__PURE__ */ V(" Check out "),
  /* @__PURE__ */ S("a", {
    href: "https://vuejs.org/guide/quick-start.html#local",
    target: "_blank"
  }, "create-vue"),
  /* @__PURE__ */ V(", the official Vue + Vite starter ")
], -1)), Va = /* @__PURE__ */ we(() => /* @__PURE__ */ S("p", null, [
  /* @__PURE__ */ V(" Install "),
  /* @__PURE__ */ S("a", {
    href: "https://github.com/vuejs/language-tools",
    target: "_blank"
  }, "Volar"),
  /* @__PURE__ */ V(" in your IDE for a better DX ")
], -1)), Ra = /* @__PURE__ */ we(() => /* @__PURE__ */ S("p", { class: "read-the-docs" }, "Click on the Vite and Vue logos to learn more", -1)), Ha = /* @__PURE__ */ me({
  __name: "HelloWorld",
  props: {
    msg: {}
  },
  setup(e) {
    const t = I(0);
    return (n, r) => (Ve(), Bt(fe, null, [
      S("h1", null, _e(n.msg), 1),
      S("div", Ba, [
        S("button", {
          type: "button",
          onClick: r[0] || (r[0] = (a) => t.value++)
        }, "count is " + _e(t.value), 1),
        La
      ]),
      Na,
      Va,
      Ra
    ], 64));
  }
});
const sn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, Wa = /* @__PURE__ */ sn(Ha, [["__scopeId", "data-v-1d5be6d4"]]), ja = (e) => (Lt("data-v-58aba71c"), e = e(), Nt(), e), za = /* @__PURE__ */ ja(() => /* @__PURE__ */ S("div", null, [
  /* @__PURE__ */ S("a", {
    href: "https://vitejs.dev",
    target: "_blank"
  }, [
    /* @__PURE__ */ S("img", {
      src: Pa,
      class: "logo",
      alt: "Vite logo"
    })
  ]),
  /* @__PURE__ */ S("a", {
    href: "https://vuejs.org/",
    target: "_blank"
  }, [
    /* @__PURE__ */ S("img", {
      src: Aa,
      class: "logo vue",
      alt: "Vue logo"
    })
  ])
], -1)), Ga = /* @__PURE__ */ me({
  __name: "App",
  setup(e) {
    return (t, n) => (Ve(), Bt(fe, null, [
      za,
      p(Wa, { msg: "Vite + Vue" })
    ], 64));
  }
});
const Ya = /* @__PURE__ */ sn(Ga, [["__scopeId", "data-v-58aba71c"]]);
const on = w({
  border: [Boolean, Number, String]
}, "border");
function ln(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : H();
  return {
    borderClasses: h(() => {
      const r = ve(e) ? e.value : e.border, a = [];
      if (r === !0 || r === "")
        a.push(`${t}--border`);
      else if (typeof r == "string" || r === 0)
        for (const s of String(r).split(" "))
          a.push(`border-${s}`);
      return a;
    })
  };
}
const Ua = [null, "default", "comfortable", "compact"], un = w({
  density: {
    type: String,
    default: "default",
    validator: (e) => Ua.includes(e)
  }
}, "density");
function cn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : H();
  return {
    densityClasses: h(() => `${t}--density-${e.density}`)
  };
}
const dn = w({
  elevation: {
    type: [Number, String],
    validator(e) {
      const t = parseInt(e);
      return !isNaN(t) && t >= 0 && // Material Design has a maximum elevation of 24
      // https://material.io/design/environment/elevation.html#default-elevations
      t <= 24;
    }
  }
}, "elevation");
function fn(e) {
  return {
    elevationClasses: h(() => {
      const n = ve(e) ? e.value : e.elevation, r = [];
      return n == null || r.push(`elevation-${n}`), r;
    })
  };
}
const mn = w({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  }
}, "rounded");
function gn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : H();
  return {
    roundedClasses: h(() => {
      const r = ve(e) ? e.value : e.rounded, a = [];
      if (r === !0 || r === "")
        a.push(`${t}--rounded`);
      else if (typeof r == "string" || r === 0)
        for (const s of String(r).split(" "))
          a.push(`rounded-${s}`);
      return a;
    })
  };
}
const Ce = w({
  tag: {
    type: String,
    default: "div"
  }
}, "tag");
function vn(e) {
  return Ht(() => {
    const t = [], n = {};
    if (e.value.background)
      if (Oe(e.value.background)) {
        if (n.backgroundColor = e.value.background, !e.value.text && pr(e.value.background)) {
          const r = O(e.value.background);
          if (r.a == null || r.a === 1) {
            const a = Yt(r);
            n.color = a, n.caretColor = a;
          }
        }
      } else
        t.push(`bg-${e.value.background}`);
    return e.value.text && (Oe(e.value.text) ? (n.color = e.value.text, n.caretColor = e.value.text) : t.push(`text-${e.value.text}`)), {
      colorClasses: t,
      colorStyles: n
    };
  });
}
function Ae(e, t) {
  const n = h(() => ({
    text: ve(e) ? e.value : t ? e[t] : null
  })), {
    colorClasses: r,
    colorStyles: a
  } = vn(n);
  return {
    textColorClasses: r,
    textColorStyles: a
  };
}
const Za = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function Ka(e, t) {
  return p(fe, null, [e && p("span", {
    key: "overlay",
    class: `${t}__overlay`
  }, null), p("span", {
    key: "underlay",
    class: `${t}__underlay`
  }, null)]);
}
const hn = w({
  color: String,
  variant: {
    type: String,
    default: "elevated",
    validator: (e) => Za.includes(e)
  }
}, "variant");
function Qa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : H();
  const n = h(() => {
    const {
      variant: s
    } = P(e);
    return `${t}--variant-${s}`;
  }), {
    colorClasses: r,
    colorStyles: a
  } = vn(h(() => {
    const {
      variant: s,
      color: o
    } = P(e);
    return {
      [["elevated", "flat"].includes(s) ? "background" : "text"]: o
    };
  }));
  return {
    colorClasses: r,
    colorStyles: a,
    variantClasses: n
  };
}
const yn = w({
  divided: Boolean,
  ...on(),
  ...he(),
  ...un(),
  ...dn(),
  ...mn(),
  ...Ce(),
  ...pe(),
  ...hn()
}, "VBtnGroup"), Tt = R()({
  name: "VBtnGroup",
  props: yn(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: r
    } = be(e), {
      densityClasses: a
    } = cn(e), {
      borderClasses: s
    } = ln(e), {
      elevationClasses: o
    } = fn(e), {
      roundedClasses: l
    } = gn(e);
    Ut({
      VBtn: {
        height: "auto",
        color: E(e, "color"),
        density: E(e, "density"),
        flat: !0,
        variant: E(e, "variant")
      }
    }), te(() => p(e.tag, {
      class: ["v-btn-group", {
        "v-btn-group--divided": e.divided
      }, r.value, s.value, a.value, o.value, l.value, e.class],
      style: e.style
    }, n));
  }
}), Xa = w({
  modelValue: {
    type: null,
    default: void 0
  },
  multiple: Boolean,
  mandatory: [Boolean, String],
  max: Number,
  selectedClass: String,
  disabled: Boolean
}, "group"), Ja = w({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, "group-item");
function qa(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  const r = F("useGroupItem");
  if (!r)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const a = je();
  q(Symbol.for(`${t.description}:id`), a);
  const s = J(t, null);
  if (!s) {
    if (!n)
      return s;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`);
  }
  const o = E(e, "value"), l = h(() => !!(s.disabled.value || e.disabled));
  s.register({
    id: a,
    value: o,
    disabled: l
  }, r), ge(() => {
    s.unregister(a);
  });
  const i = h(() => s.isSelected(a)), u = h(() => i.value && [s.selectedClass.value, e.selectedClass]);
  return $(i, (f) => {
    r.emit("group:selected", {
      value: f
    });
  }), {
    id: a,
    isSelected: i,
    toggle: () => s.select(a, !i.value),
    select: (f) => s.select(a, f),
    selectedClass: u,
    value: o,
    disabled: l,
    group: s
  };
}
function es(e, t) {
  let n = !1;
  const r = Q([]), a = Kt(e, "modelValue", [], (c) => c == null ? [] : pn(r, qn(c)), (c) => {
    const m = ns(r, c);
    return e.multiple ? m : m[0];
  }), s = F("useGroup");
  function o(c, m) {
    const g = c, v = Symbol.for(`${t.description}:id`), C = oe(v, s == null ? void 0 : s.vnode).indexOf(m);
    P(g.value) == null && (g.value = C), C > -1 ? r.splice(C, 0, g) : r.push(g);
  }
  function l(c) {
    if (n)
      return;
    i();
    const m = r.findIndex((g) => g.id === c);
    r.splice(m, 1);
  }
  function i() {
    const c = r.find((m) => !m.disabled);
    c && e.mandatory === "force" && !a.value.length && (a.value = [c.id]);
  }
  Nn(() => {
    i();
  }), ge(() => {
    n = !0;
  });
  function u(c, m) {
    const g = r.find((v) => v.id === c);
    if (!(m && (g != null && g.disabled)))
      if (e.multiple) {
        const v = a.value.slice(), y = v.findIndex((b) => b === c), C = ~y;
        if (m = m ?? !C, C && e.mandatory && v.length <= 1 || !C && e.max != null && v.length + 1 > e.max)
          return;
        y < 0 && m ? v.push(c) : y >= 0 && !m && v.splice(y, 1), a.value = v;
      } else {
        const v = a.value.includes(c);
        if (e.mandatory && v)
          return;
        a.value = m ?? !v ? [c] : [];
      }
  }
  function f(c) {
    if (e.multiple && z('This method is not supported when using "multiple" prop'), a.value.length) {
      const m = a.value[0], g = r.findIndex((C) => C.id === m);
      let v = (g + c) % r.length, y = r[v];
      for (; y.disabled && v !== g; )
        v = (v + c) % r.length, y = r[v];
      if (y.disabled)
        return;
      a.value = [r[v].id];
    } else {
      const m = r.find((g) => !g.disabled);
      m && (a.value = [m.id]);
    }
  }
  const d = {
    register: o,
    unregister: l,
    selected: a,
    select: u,
    disabled: E(e, "disabled"),
    prev: () => f(r.length - 1),
    next: () => f(1),
    isSelected: (c) => a.value.includes(c),
    selectedClass: h(() => e.selectedClass),
    items: h(() => r),
    getItemIndex: (c) => ts(r, c)
  };
  return q(t, d), d;
}
function ts(e, t) {
  const n = pn(e, [t]);
  return n.length ? e.findIndex((r) => r.id === n[0]) : -1;
}
function pn(e, t) {
  const n = [];
  return t.forEach((r) => {
    const a = e.find((o) => Re(r, o.value)), s = e[r];
    (a == null ? void 0 : a.value) != null ? n.push(a.id) : s != null && n.push(s.id);
  }), n;
}
function ns(e, t) {
  const n = [];
  return t.forEach((r) => {
    const a = e.findIndex((s) => s.id === r);
    if (~a) {
      const s = e[a];
      n.push(s.value != null ? s.value : a);
    }
  }), n;
}
const bn = Symbol.for("vuetify:v-btn-toggle"), rs = w({
  ...yn(),
  ...Xa()
}, "VBtnToggle");
R()({
  name: "VBtnToggle",
  props: rs(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isSelected: r,
      next: a,
      prev: s,
      select: o,
      selected: l
    } = es(e, bn);
    return te(() => {
      const i = Tt.filterProps(e);
      return p(Tt, Pt({
        class: ["v-btn-toggle", e.class]
      }, i, {
        style: e.style
      }), {
        default: () => {
          var u;
          return [(u = n.default) == null ? void 0 : u.call(n, {
            isSelected: r,
            next: a,
            prev: s,
            select: o,
            selected: l
          })];
        }
      });
    }), {
      next: a,
      prev: s,
      select: o
    };
  }
});
const as = w({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider"), xe = R(!1)({
  name: "VDefaultsProvider",
  props: as(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      defaults: r,
      disabled: a,
      reset: s,
      root: o,
      scoped: l
    } = Ne(e);
    return Ut(r, {
      reset: s,
      root: o,
      scoped: l,
      disabled: a
    }), () => {
      var i;
      return (i = n.default) == null ? void 0 : i.call(n);
    };
  }
});
const ss = ["x-small", "small", "default", "large", "x-large"], ze = w({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function Ge(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : H();
  return Ht(() => {
    let n, r;
    return Te(ss, e.size) ? n = `${t}--size-${e.size}` : e.size && (r = {
      width: _(e.size),
      height: _(e.size)
    }), {
      sizeClasses: n,
      sizeStyles: r
    };
  });
}
const os = w({
  color: String,
  start: Boolean,
  end: Boolean,
  icon: ue,
  ...he(),
  ...ze(),
  ...Ce({
    tag: "i"
  }),
  ...pe()
}, "VIcon"), Ie = R()({
  name: "VIcon",
  props: os(),
  setup(e, t) {
    let {
      attrs: n,
      slots: r
    } = t;
    const a = I(), {
      themeClasses: s
    } = be(e), {
      iconData: o
    } = Ta(h(() => a.value || e.icon)), {
      sizeClasses: l
    } = Ge(e), {
      textColorClasses: i,
      textColorStyles: u
    } = Ae(E(e, "color"));
    return te(() => {
      var d, c;
      const f = (d = r.default) == null ? void 0 : d.call(r);
      return f && (a.value = (c = Rt(f).filter((m) => m.type === Vn && m.children && typeof m.children == "string")[0]) == null ? void 0 : c.children), p(o.value.component, {
        tag: e.tag,
        icon: o.value.icon,
        class: ["v-icon", "notranslate", s.value, l.value, i.value, {
          "v-icon--clickable": !!n.onClick,
          "v-icon--start": e.start,
          "v-icon--end": e.end
        }, e.class],
        style: [l.value ? void 0 : {
          fontSize: _(e.size),
          height: _(e.size),
          width: _(e.size)
        }, u.value, e.style],
        role: n.onClick ? "button" : void 0,
        "aria-hidden": !n.onClick
      }, {
        default: () => [f]
      });
    }), {};
  }
});
function is(e, t) {
  const n = I(), r = L(!1);
  if (Kn) {
    const a = new IntersectionObserver((s) => {
      e == null || e(s, a), r.value = !!s.find((o) => o.isIntersecting);
    }, t);
    ge(() => {
      a.disconnect();
    }), $(n, (s, o) => {
      o && (a.unobserve(o), r.value = !1), s && a.observe(s);
    }, {
      flush: "post"
    });
  }
  return {
    intersectionRef: n,
    isIntersecting: r
  };
}
const ls = w({
  bgColor: String,
  color: String,
  indeterminate: [Boolean, String],
  modelValue: {
    type: [Number, String],
    default: 0
  },
  rotate: {
    type: [Number, String],
    default: 0
  },
  width: {
    type: [Number, String],
    default: 4
  },
  ...he(),
  ...ze(),
  ...Ce({
    tag: "div"
  }),
  ...pe()
}, "VProgressCircular"), us = R()({
  name: "VProgressCircular",
  props: ls(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const r = 20, a = 2 * Math.PI * r, s = I(), {
      themeClasses: o
    } = be(e), {
      sizeClasses: l,
      sizeStyles: i
    } = Ge(e), {
      textColorClasses: u,
      textColorStyles: f
    } = Ae(E(e, "color")), {
      textColorClasses: d,
      textColorStyles: c
    } = Ae(E(e, "bgColor")), {
      intersectionRef: m,
      isIntersecting: g
    } = is(), {
      resizeRef: v,
      contentRect: y
    } = Fa(), C = h(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), b = h(() => Number(e.width)), k = h(() => i.value ? Number(e.size) : y.value ? y.value.width : Math.max(b.value, 32)), Y = h(() => r / (1 - b.value / k.value) * 2), A = h(() => b.value / k.value * Y.value), ke = h(() => _((100 - C.value) / 100 * a));
    return X(() => {
      m.value = s.value, v.value = s.value;
    }), te(() => p(e.tag, {
      ref: s,
      class: ["v-progress-circular", {
        "v-progress-circular--indeterminate": !!e.indeterminate,
        "v-progress-circular--visible": g.value,
        "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink"
      }, o.value, l.value, u.value, e.class],
      style: [i.value, f.value, e.style],
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": e.indeterminate ? void 0 : C.value
    }, {
      default: () => [p("svg", {
        style: {
          transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))`
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${Y.value} ${Y.value}`
      }, [p("circle", {
        class: ["v-progress-circular__underlay", d.value],
        style: c.value,
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r,
        "stroke-width": A.value,
        "stroke-dasharray": a,
        "stroke-dashoffset": 0
      }, null), p("circle", {
        class: "v-progress-circular__overlay",
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r,
        "stroke-width": A.value,
        "stroke-dasharray": a,
        "stroke-dashoffset": ke.value
      }, null)]), n.default && p("div", {
        class: "v-progress-circular__content"
      }, [n.default({
        value: C.value
      })])]
    })), {};
  }
}), cs = w({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function ds(e) {
  return {
    dimensionStyles: h(() => ({
      height: _(e.height),
      maxHeight: _(e.maxHeight),
      maxWidth: _(e.maxWidth),
      minHeight: _(e.minHeight),
      minWidth: _(e.minWidth),
      width: _(e.width)
    }))
  };
}
const Ot = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, fs = w({
  location: String
}, "location");
function ms(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl: r
  } = Br();
  return {
    locationStyles: h(() => {
      if (!e.location)
        return {};
      const {
        side: s,
        align: o
      } = ar(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, r.value);
      function l(u) {
        return n ? n(u) : 0;
      }
      const i = {};
      return s !== "center" && (t ? i[Ot[s]] = `calc(100% - ${l(s)}px)` : i[s] = 0), o !== "center" ? t ? i[Ot[o]] = `calc(100% - ${l(o)}px)` : i[o] = 0 : (s === "center" ? i.top = i.left = "50%" : i[{
        top: "left",
        bottom: "left",
        left: "top",
        right: "top"
      }[s]] = "50%", i.transform = {
        top: "translateX(-50%)",
        bottom: "translateX(-50%)",
        left: "translateY(-50%)",
        right: "translateY(-50%)",
        center: "translate(-50%, -50%)"
      }[s]), i;
    })
  };
}
const gs = w({
  loading: [Boolean, String]
}, "loader");
function vs(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : H();
  return {
    loaderClasses: h(() => ({
      [`${t}--loading`]: e.loading
    }))
  };
}
const hs = ["static", "relative", "fixed", "absolute", "sticky"], ys = w({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (e) => hs.includes(e)
    )
  }
}, "position");
function ps(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : H();
  return {
    positionClasses: h(() => e.position ? `${t}--${e.position}` : void 0)
  };
}
function bs() {
  const e = F("useRoute");
  return h(() => {
    var t;
    return (t = e == null ? void 0 : e.proxy) == null ? void 0 : t.$route;
  });
}
function ws(e, t) {
  const n = Rn("RouterLink"), r = h(() => !!(e.href || e.to)), a = h(() => (r == null ? void 0 : r.value) || rt(t, "click") || rt(e, "click"));
  if (typeof n == "string")
    return {
      isLink: r,
      isClickable: a,
      href: E(e, "href")
    };
  const s = e.to ? n.useLink(e) : void 0, o = bs();
  return {
    isLink: r,
    isClickable: a,
    route: s == null ? void 0 : s.route,
    navigate: s == null ? void 0 : s.navigate,
    isActive: s && h(() => {
      var l, i, u;
      return e.exact ? o.value ? ((u = s.isExactActive) == null ? void 0 : u.value) && Re(s.route.value.query, o.value.query) : (i = s.isExactActive) == null ? void 0 : i.value : (l = s.isActive) == null ? void 0 : l.value;
    }),
    href: h(() => e.to ? s == null ? void 0 : s.route.value.href : e.href)
  };
}
const Cs = w({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
}, "router");
function ks(e, t) {
  $(() => {
    var n;
    return (n = e.isActive) == null ? void 0 : n.value;
  }, (n) => {
    e.isLink.value && n && t && At(() => {
      t(!0);
    });
  }, {
    immediate: !0
  });
}
const Be = Symbol("rippleStop"), Ss = 80;
function $t(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function Le(e) {
  return e.constructor.name === "TouchEvent";
}
function wn(e) {
  return e.constructor.name === "KeyboardEvent";
}
const Ds = function(e, t) {
  var d;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = 0, a = 0;
  if (!wn(e)) {
    const c = t.getBoundingClientRect(), m = Le(e) ? e.touches[e.touches.length - 1] : e;
    r = m.clientX - c.left, a = m.clientY - c.top;
  }
  let s = 0, o = 0.3;
  (d = t._ripple) != null && d.circle ? (o = 0.15, s = t.clientWidth / 2, s = n.center ? s : s + Math.sqrt((r - s) ** 2 + (a - s) ** 2) / 4) : s = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
  const l = `${(t.clientWidth - s * 2) / 2}px`, i = `${(t.clientHeight - s * 2) / 2}px`, u = n.center ? l : `${r - s}px`, f = n.center ? i : `${a - s}px`;
  return {
    radius: s,
    scale: o,
    x: u,
    y: f,
    centerX: l,
    centerY: i
  };
}, de = {
  /* eslint-disable max-statements */
  show(e, t) {
    var m;
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!((m = t == null ? void 0 : t._ripple) != null && m.enabled))
      return;
    const r = document.createElement("span"), a = document.createElement("span");
    r.appendChild(a), r.className = "v-ripple__container", n.class && (r.className += ` ${n.class}`);
    const {
      radius: s,
      scale: o,
      x: l,
      y: i,
      centerX: u,
      centerY: f
    } = Ds(e, t, n), d = `${s * 2}px`;
    a.className = "v-ripple__animation", a.style.width = d, a.style.height = d, t.appendChild(r);
    const c = window.getComputedStyle(t);
    c && c.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), a.classList.add("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--visible"), $t(a, `translate(${l}, ${i}) scale3d(${o},${o},${o})`), a.dataset.activated = String(performance.now()), setTimeout(() => {
      a.classList.remove("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--in"), $t(a, `translate(${u}, ${f}) scale3d(1,1,1)`);
    }, 0);
  },
  hide(e) {
    var s;
    if (!((s = e == null ? void 0 : e._ripple) != null && s.enabled))
      return;
    const t = e.getElementsByClassName("v-ripple__animation");
    if (t.length === 0)
      return;
    const n = t[t.length - 1];
    if (n.dataset.isHiding)
      return;
    n.dataset.isHiding = "true";
    const r = performance.now() - Number(n.dataset.activated), a = Math.max(250 - r, 0);
    setTimeout(() => {
      n.classList.remove("v-ripple__animation--in"), n.classList.add("v-ripple__animation--out"), setTimeout(() => {
        var l;
        e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((l = n.parentNode) == null ? void 0 : l.parentNode) === e && e.removeChild(n.parentNode);
      }, 300);
    }, a);
  }
};
function Cn(e) {
  return typeof e > "u" || !!e;
}
function Z(e) {
  const t = {}, n = e.currentTarget;
  if (!(!(n != null && n._ripple) || n._ripple.touched || e[Be])) {
    if (e[Be] = !0, Le(e))
      n._ripple.touched = !0, n._ripple.isTouch = !0;
    else if (n._ripple.isTouch)
      return;
    if (t.center = n._ripple.centered || wn(e), n._ripple.class && (t.class = n._ripple.class), Le(e)) {
      if (n._ripple.showTimerCommit)
        return;
      n._ripple.showTimerCommit = () => {
        de.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var r;
        (r = n == null ? void 0 : n._ripple) != null && r.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, Ss);
    } else
      de.show(e, n, t);
  }
}
function Ft(e) {
  e[Be] = !0;
}
function D(e) {
  const t = e.currentTarget;
  if (t != null && t._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit) {
      t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, t._ripple.showTimer = window.setTimeout(() => {
        D(e);
      });
      return;
    }
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = !1);
    }), de.hide(t);
  }
}
function kn(e) {
  const t = e.currentTarget;
  t != null && t._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let K = !1;
function Sn(e) {
  !K && (e.keyCode === et.enter || e.keyCode === et.space) && (K = !0, Z(e));
}
function Dn(e) {
  K = !1, D(e);
}
function xn(e) {
  K && (K = !1, D(e));
}
function In(e, t, n) {
  const {
    value: r,
    modifiers: a
  } = t, s = Cn(r);
  if (s || de.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = s, e._ripple.centered = a.center, e._ripple.circle = a.circle, Me(r) && r.class && (e._ripple.class = r.class), s && !n) {
    if (a.stop) {
      e.addEventListener("touchstart", Ft, {
        passive: !0
      }), e.addEventListener("mousedown", Ft);
      return;
    }
    e.addEventListener("touchstart", Z, {
      passive: !0
    }), e.addEventListener("touchend", D, {
      passive: !0
    }), e.addEventListener("touchmove", kn, {
      passive: !0
    }), e.addEventListener("touchcancel", D), e.addEventListener("mousedown", Z), e.addEventListener("mouseup", D), e.addEventListener("mouseleave", D), e.addEventListener("keydown", Sn), e.addEventListener("keyup", Dn), e.addEventListener("blur", xn), e.addEventListener("dragstart", D, {
      passive: !0
    });
  } else
    !s && n && _n(e);
}
function _n(e) {
  e.removeEventListener("mousedown", Z), e.removeEventListener("touchstart", Z), e.removeEventListener("touchend", D), e.removeEventListener("touchmove", kn), e.removeEventListener("touchcancel", D), e.removeEventListener("mouseup", D), e.removeEventListener("mouseleave", D), e.removeEventListener("keydown", Sn), e.removeEventListener("keyup", Dn), e.removeEventListener("dragstart", D), e.removeEventListener("blur", xn);
}
function xs(e, t) {
  In(e, t, !1);
}
function Is(e) {
  delete e._ripple, _n(e);
}
function _s(e, t) {
  if (t.value === t.oldValue)
    return;
  const n = Cn(t.oldValue);
  In(e, t, n);
}
const Ms = {
  mounted: xs,
  unmounted: Is,
  updated: _s
}, Ts = w({
  active: {
    type: Boolean,
    default: void 0
  },
  symbol: {
    type: null,
    default: bn
  },
  flat: Boolean,
  icon: [Boolean, String, Function, Object],
  prependIcon: ue,
  appendIcon: ue,
  block: Boolean,
  slim: Boolean,
  stacked: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: String,
  ...on(),
  ...he(),
  ...un(),
  ...cs(),
  ...dn(),
  ...Ja(),
  ...gs(),
  ...fs(),
  ...ys(),
  ...mn(),
  ...Cs(),
  ...ze(),
  ...Ce({
    tag: "button"
  }),
  ...pe(),
  ...hn({
    variant: "elevated"
  })
}, "VBtn"), Os = R()({
  name: "VBtn",
  directives: {
    Ripple: Ms
  },
  props: Ts(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: r
    } = t;
    const {
      themeClasses: a
    } = be(e), {
      borderClasses: s
    } = ln(e), {
      colorClasses: o,
      colorStyles: l,
      variantClasses: i
    } = Qa(e), {
      densityClasses: u
    } = cn(e), {
      dimensionStyles: f
    } = ds(e), {
      elevationClasses: d
    } = fn(e), {
      loaderClasses: c
    } = vs(e), {
      locationStyles: m
    } = ms(e), {
      positionClasses: g
    } = ps(e), {
      roundedClasses: v
    } = gn(e), {
      sizeClasses: y,
      sizeStyles: C
    } = Ge(e), b = qa(e, e.symbol, !1), k = ws(e, n), Y = h(() => {
      var T;
      return e.active !== void 0 ? e.active : k.isLink.value ? (T = k.isActive) == null ? void 0 : T.value : b == null ? void 0 : b.isSelected.value;
    }), A = h(() => (b == null ? void 0 : b.disabled.value) || e.disabled), ke = h(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), Mn = h(() => {
      if (!(e.value === void 0 || typeof e.value == "symbol"))
        return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
    });
    function Tn(T) {
      var ne;
      A.value || k.isLink.value && (T.metaKey || T.ctrlKey || T.shiftKey || T.button !== 0 || n.target === "_blank") || ((ne = k.navigate) == null || ne.call(k, T), b == null || b.toggle());
    }
    return ks(k, b == null ? void 0 : b.select), te(() => {
      var Ze, Ke;
      const T = k.isLink.value ? "a" : e.tag, ne = !!(e.prependIcon || r.prepend), On = !!(e.appendIcon || r.append), Ye = !!(e.icon && e.icon !== !0), Ue = (b == null ? void 0 : b.isSelected.value) && (!k.isLink.value || ((Ze = k.isActive) == null ? void 0 : Ze.value)) || !b || ((Ke = k.isActive) == null ? void 0 : Ke.value);
      return Hn(p(T, {
        type: T === "a" ? void 0 : "button",
        class: ["v-btn", b == null ? void 0 : b.selectedClass.value, {
          "v-btn--active": Y.value,
          "v-btn--block": e.block,
          "v-btn--disabled": A.value,
          "v-btn--elevated": ke.value,
          "v-btn--flat": e.flat,
          "v-btn--icon": !!e.icon,
          "v-btn--loading": e.loading,
          "v-btn--slim": e.slim,
          "v-btn--stacked": e.stacked
        }, a.value, s.value, Ue ? o.value : void 0, u.value, d.value, c.value, g.value, v.value, y.value, i.value, e.class],
        style: [Ue ? l.value : void 0, f.value, m.value, C.value, e.style],
        disabled: A.value || void 0,
        href: k.href.value,
        onClick: Tn,
        value: Mn.value
      }, {
        default: () => {
          var Qe;
          return [Ka(!0, "v-btn"), !e.icon && ne && p("span", {
            key: "prepend",
            class: "v-btn__prepend"
          }, [r.prepend ? p(xe, {
            key: "prepend-defaults",
            disabled: !e.prependIcon,
            defaults: {
              VIcon: {
                icon: e.prependIcon
              }
            }
          }, r.prepend) : p(Ie, {
            key: "prepend-icon",
            icon: e.prependIcon
          }, null)]), p("span", {
            class: "v-btn__content",
            "data-no-activator": ""
          }, [!r.default && Ye ? p(Ie, {
            key: "content-icon",
            icon: e.icon
          }, null) : p(xe, {
            key: "content-defaults",
            disabled: !Ye,
            defaults: {
              VIcon: {
                icon: e.icon
              }
            }
          }, {
            default: () => {
              var Xe;
              return [((Xe = r.default) == null ? void 0 : Xe.call(r)) ?? e.text];
            }
          })]), !e.icon && On && p("span", {
            key: "append",
            class: "v-btn__append"
          }, [r.append ? p(xe, {
            key: "append-defaults",
            disabled: !e.appendIcon,
            defaults: {
              VIcon: {
                icon: e.appendIcon
              }
            }
          }, r.append) : p(Ie, {
            key: "append-icon",
            icon: e.appendIcon
          }, null)]), !!e.loading && p("span", {
            key: "loader",
            class: "v-btn__loader"
          }, [((Qe = r.loader) == null ? void 0 : Qe.call(r)) ?? p(us, {
            color: typeof e.loading == "boolean" ? void 0 : e.loading,
            indeterminate: !0,
            size: "23",
            width: "2"
          }, null)])];
        }
      }), [[Wn("ripple"), !A.value && e.ripple, null]]);
    }), {
      group: b
    };
  }
}), Es = /* @__PURE__ */ me({
  __name: "Button",
  props: {
    label: {
      type: String,
      default: "Button"
    }
  },
  setup(e) {
    return (t, n) => (Ve(), jn(Os, zn(Gn(t.$props)), {
      default: Yn(() => [
        V(_e(e.label), 1)
      ]),
      _: 1
    }, 16));
  }
}), $s = an();
Un(Ya).use($s).mount("#app");
export {
  Es as MyButton,
  $s as vuetify
};
