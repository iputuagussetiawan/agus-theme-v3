// import Navbar from './modules/Navbar'
// import Magnetic from './modules/Magnetic'
// import SectionFeatures from './sections/SectionFeatures'
// import MouseFollower from "mouse-follower";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

var fc,
mc,
gc,
vc = /(?:\r|\n|\t\t)/g,
_c = /(?:\s\s+)/g

const yc = (t) => mc.getComputedStyle(t);

const xc = Array.isArray;

const bc = Array.prototype.slice;

const Sc = (t, e) => {
    const n = typeof t;
    return xc(t)
        ? t
        : n === 'string' && !e && t
        ? Array.from(fc.querySelectorAll(t))
        : t && typeof t === 'object' && 'length' in t
        ? Array.from(t)
        : t ? [t] : [];
};

const Ec = (t) => t.position === 'absolute' || t.absolute === true;

const Tc = (t, e) => {
    for (let i = e.length; i-- > 0;) {
        const n = e[i];
        if (t.substr(0, n.length) === n) return n.length;
    }
};

const Mc = (t = '', e) => {
    const n = ~t.indexOf('++');
    let i = 1;

    if (n) {
        t = t.split('++').join('');
    }

    return () => `<${e} style='position:relative;display:inline-block;'${t ? " class='" + t + (n ? i++ : '') + "'>" : '>'}`;
};

const wc = (t, n, i) => {
    const r = t.nodeType;
    if (r === 1 || r === 9 || r === 11) {
        for (let e = t.firstChild; e; e = e.nextSibling) {
            wc(e, n, i);
        }
    } else if (r === 3 || r === 4) {
        t.nodeValue = t.nodeValue.split(n).join(i);
    }
};

const Dc = (t, e) => {
    for (let n = e.length; n-- > 0;) {
        t.push(e[n]);
    }
};

const Ac = (t, e, n) => {
    let i;
    while (t && t !== e) {
        if ((i = t._next || t.nextSibling)) {
            return i.textContent.charAt(0) === n;
        }
        t = t.parentNode || t._parent;
    }
};

const Cc = (e) => {
    const r = Sc(e.childNodes);
    const s = r.length;
    for (let i = 0; i < s; i++) {
        const n = r[i];
        if (n._isSplit) {
            Cc(n);
        } else if (i && n.previousSibling && n.previousSibling.nodeType === 3) {
            n.previousSibling.nodeValue += (n.nodeType === 3 ? n.nodeValue : n.firstChild.nodeValue);
            e.removeChild(n);
        } else if (n.nodeType !== 3) {
            e.insertBefore(n.firstChild, n);
            e.removeChild(n);
        }
    }
};

const Pc = (t, e) => {
    return parseFloat(e[t]) || 0;
};

const Rc = (t, e, n, i, r, s, o) => {
    const yc = (t) => mc.getComputedStyle(t);
    const Pc = (t, e) => parseFloat(e[t]) || 0;
    const Ec = (t) => t.position === 'absolute' || t.absolute === true;
    const Ac = (t, e, n) => {
        let i;
        while (t && t !== e) {
            if ((i = t._next || t.nextSibling)) {
                return i.textContent.charAt(0) === n;
            }
            t = t.parentNode || t._parent;
        }
    };
    
    let a, l, c, u, h, d, p, f, m, g, v, _, y = yc(t);
    let x = Pc("paddingLeft", y);
    let b = -999;
    let S = Pc("borderBottomWidth", y) + Pc("borderTopWidth", y);
    let E = Pc("borderLeftWidth", y) + Pc("borderRightWidth", y);
    let T = Pc("paddingTop", y) + Pc("paddingBottom", y);
    let M = Pc("paddingLeft", y) + Pc("paddingRight", y);
    let w = Pc("fontSize", y) * (e.lineThreshold || 0.2);
    let D = y.textAlign;
    let A = [];
    let C = [];
    let P = [];
    let R = e.wordDelimiter || " ";
    let L = e.tag ? e.tag : e.span ? "span" : "div";
    let O = e.type || e.split || "chars,words,lines";
    let I = r && ~O.indexOf("lines") ? [] : null;
    let F = ~O.indexOf("words");
    let N = ~O.indexOf("chars");
    let U = Ec(e);
    let k = e.linesClass;
    let z = ~(k || "").indexOf("++");
    let B = [];
    let H = yc(t).display === "flex";
    let V = t.style.display;

    if (z > -1) k = k.split("++").join("");

    if (H) t.style.display = "block";

    l = t.getElementsByTagName("*");
    c = l.length;
    h = Array(c).fill(0).map((_, index) => l[index]);

    if (I || U) {
        for (let a = 0; a < c; a++) {
            d = (u = h[a]).parentNode === t;
            if (d || U || (N && !F)) {
                _ = u.offsetTop;
                if (I && d && Math.abs(_ - b) > w && ("BR" !== u.nodeName || a === 0)) {
                    p = [];
                    I.push(p);
                    b = _;
                }
                if (U) {
                    u._x = u.offsetLeft;
                    u._y = _;
                    u._w = u.offsetWidth;
                    u._h = u.offsetHeight;
                }
                if (I) {
                    if ((u._isSplit && d) || (!N && d) || (F && d) || (!F && u.parentNode.parentNode === t && !u.parentNode._isSplit)) {
                        p.push(u);
                        u._x -= x;
                        if (Ac(u, t, R)) u._wordEnd = true;
                    }
                    if ("BR" === u.nodeName && (u.nextSibling && "BR" === u.nextSibling.nodeName || a === 0)) {
                        I.push([]);
                    }
                }
            }
        }
    }
    
    for (let a = 0; a < c; a++) {
        d = (u = h[a]).parentNode === t;
        if ("BR" !== u.nodeName) {
            if (U) {
                m = u.style;
                if (!F && !d) {
                    u._x += u.parentNode._x;
                    u._y += u.parentNode._y;
                }
                m.left = u._x + "px";
                m.top = u._y + "px";
                m.position = "absolute";
                m.display = "block";
                m.width = u._w + 1 + "px";
                m.height = u._h + "px";
            }
            if (!F && N) {
                if (u._isSplit) {
                    for (u._next = l = u.nextSibling; l && l.nodeType === 3 && l.textContent.trim() === "";) {
                        u._next = l.nextSibling;
                        u.parentNode.appendChild(l);
                        l = l.nextSibling;
                    }
                } else {
                    if (u.parentNode._isSplit) {
                        u._parent = u.parentNode;
                        if (!u.previousSibling && u.firstChild) {
                            u.firstChild._isFirst = true;
                        }
                        if (u.nextSibling && u.nextSibling.textContent === " " && !u.nextSibling.nextSibling) {
                            B.push(u.nextSibling);
                        }
                        u._next = u.nextSibling && u.nextSibling._isFirst ? null : u.nextSibling;
                        u.parentNode.removeChild(u);
                        h.splice(a--, 1);
                        c--;
                    } else if (!d) {
                        _ = !u.nextSibling && Ac(u.parentNode, t, R);
                        if (u.parentNode._parent) {
                            u.parentNode._parent.appendChild(u);
                        }
                        if (_) {
                            u.parentNode.appendChild(fc.createTextNode(" "));
                        }
                        if (L === "span") {
                            u.style.display = "inline";
                        }
                        A.push(u);
                    }
                }
            } else {
                if (u.parentNode._isSplit && !u._isSplit && u.innerHTML !== "") {
                    C.push(u);
                } else if (N && !u._isSplit) {
                    if (L === "span") {
                        u.style.display = "inline";
                    }
                    A.push(u);
                }
            }
        } else {
            if (!I && !U) {
                u.parentNode.removeChild(u);
                h.splice(a--, 1);
                c--;
            } else if (I || U) {
                continue;
            } else {
                t.appendChild(u);
            }
        }
    }
    
    for (let a = B.length - 1; a >= 0; a--) {
        B[a].parentNode.removeChild(B[a]);
    }
    
    if (I) {
        let g, v, _, f;
        if (U) {
            g = fc.createElement(L);
            t.appendChild(g);
            v = g.offsetWidth + "px";
            _ = g.offsetParent === t ? 0 : t.offsetLeft;
            t.removeChild(g);
        }
        
        let m = t.style.cssText;
        t.style.cssText = "display:none;";
        while (t.firstChild) {
            t.removeChild(t.firstChild);
        }
        
        for (let a = 0; a < I.length; a++) {
            let p = I[a];
            let g = fc.createElement(L);
            g.style.cssText = `display:block;text-align:${D};position:${U ? "absolute;" : "relative;"}`;
            if (k) {
                g.className = k + (z ? a + 1 : "");
            }
            P.push(g);
            let c = p.length;
            for (let l = 0; l < c; l++) {
                let u = p[l];
                g.appendChild(u);
                if (f && u._wordEnd) {
                    g.appendChild(fc.createTextNode(" "));
                }
                if (U) {
                    if (l === 0) {
                        g.style.top = u._y + "px";
                        g.style.left = x + _ + "px";
                    }
                    u.style.top = "0px";
                    if (_) {
                        u.style.left = u._x - _ + "px";
                    }
                }
            }
            if (c === 0) {
                g.innerHTML = "&nbsp;";
            } else if (!F && !N) {
                Cc(g);
                wc(g, String.fromCharCode(160), " ");
            }
            if (U) {
                g.style.width = v;
                g.style.height = u._h + "px";
            }
            t.appendChild(g);
        }
        t.style.cssText = m;
    }
    
    if (U) {
        if (o > t.clientHeight) {
            t.style.height = o - T + "px";
            if (t.clientHeight < o) {
                t.style.height = o + S + "px";
            }
        }
        if (s > t.clientWidth) {
            t.style.width = s - M + "px";
            if (t.clientWidth < s) {
                t.style.width = s + E + "px";
            }
        }
    }
    
    if (H) {
        if (V) {
            t.style.display = V;
        } else {
            t.style.removeProperty("display");
        }
    }
    
    Dc(n, A);
    if (F) {
        Dc(i, C);
    }
    Dc(r, P);
};


const Uc = (t, e = {}) => {
    // const n = Fc({ type: "words", duration: 1.7, stagger: { amount: 0.6 }, ease: "expo.out" }, e);
    const n = {
        type: "words", 
        duration: 1.7, 
        stagger: { amount: 0.6 }, 
        ease: "expo.out",
        ...e,
    };
    const i = new gsap.timeline();
    const r = t.querySelectorAll(".cb-coin, img, video");
    const s = new Ic(t, { type: n.type });
    const o = new Ic(s[n.type], { type: n.type });
    gsap.set(s[n.type], { overflow: "hidden", verticalAlign: "top", padding: "0.15em", margin: "-0.15em" });
    gsap.set(o[n.type], { y: "120%" });
    i.set(o[n.type], { willChange: "transform" }, 0);
    i.fromTo(o[n.type], { y: "120%" }, { y: "0%", duration: n.duration, stagger: n.stagger, ease: n.ease }, 0);
    if (r.length) {
        Zi.set(r, { scale: 0 });
        i.fromTo(r, { scale: 0 }, { scale: 1, duration: n.duration, stagger: n.stagger, ease: n.ease }, 0.2);
    }
    i.set(o[n.type], { willChange: "auto" });
    return i;
};

class Ic {
    constructor(t, e) {
        if (!gc) {
            fc = document;
            mc = window;
            gc = 1;
        }
        this.elements = Sc(t);
        this.chars = [];
        this.words = [];
        this.lines = [];
        this._originals = [];
        this.vars = e || {};
        this.split(e);
    }

    split(t) {
        this.isSplit && this.revert();
        this.vars = t = t || this.vars;
        this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;

        const s = t.tag ? t.tag : t.span ? "span" : "div";
        const o = Mc(t.wordsClass, s);
        const a = Mc(t.charsClass, s);

        for (let r = this.elements.length; --r > -1;) {
            const i = this.elements[r];
            this._originals[r] = i.innerHTML;
            const e = i.clientHeight;
            const n = i.clientWidth;
            Oc(i, t, o, a);
            Rc(i, t, this.chars, this.words, this.lines, n, e);
        }

        this.chars.reverse();
        this.words.reverse();
        this.lines.reverse();
        this.isSplit = true;

        return this;
    }

    revert() {
        const t = this._originals;
        if (!t) throw new Error("revert() call wasn't scoped properly.");

        this.elements.forEach((e, n) => {
            e.innerHTML = t[n];
        });

        this.chars = [];
        this.words = [];
        this.lines = [];
        this.isSplit = false;

        return this;
    }

    static create(e, n) {
        return new Ic(e, n);
    }
}


const Oc = (e, n, i, r) => {
    const a = Sc(e.childNodes);
    const l = a.length;
    const c = Ec(n);

    if (e.nodeType !== 3 || l > 1) {
        n.absolute = false;
        for (let s = 0; s < l; s++) {
            const o = a[s];
            o._next = o._isFirst = o._parent = o._wordEnd = null;
            if (o.nodeType !== 3 || /\S+/.test(o.nodeValue)) {
                if (c && o.nodeType !== 3 && yc(o).display === "inline" ) {
                    o.style.display = "inline-block";
                    o.style.position = "relative";
                }
                o._isSplit = true;
                Oc(o, n, i, r);
            }
        }
        e._isSplit = true;
        n.absolute = c;
    } else {
        Lc(e, n, i, r);
    }
};

const Lc = (t, e, n, i) => {
    const d = e.tag ? e.tag : e.span ? "span" : "div";
    const p = ~((e.type || e.split || "chars,words,lines").indexOf("chars"));
    const f = Ec(e);
    const m = e.wordDelimiter || " ";
    const g = " " !== m ? "" : f ? "&#173; " : " ";
    const v = `</${d}>`;
    let _ = 1;
    const y = e.specialChars ? (typeof e.specialChars === "function" ? e.specialChars : Tc) : null;
    const x = fc.createElement("div");
    const b = t.parentNode;
    
    b.insertBefore(x, t);
    x.textContent = t.nodeValue;
    b.removeChild(t);
    
    const u = x.textContent.indexOf("<") !== -1;
    let r = u ? x.textContent.split("<").join("{{LT}}") : x.textContent;
    
    if (!false !== e.reduceWhiteSpace) {
        r = r.replace(_c, " ").replace(vc, "");
    }
    
    const l = r.length;
    let s = (" " === r.charAt(0) ? g : "") + n();
    
    for (let o = 0; o < l; o++) {
        const c = r.charAt(o);
        if (y && (h = y(r.substr(o), e.specialChars))) {
            c = r.substr(o, h || 1);
            s += p && " " !== c ? i() + c + `</${d}>` : c;
            o += h - 1;
        } else if (c === m && r.charAt(o - 1) !== m && o) {
            s += _ ? v : "";
            _ = 0;
            while (r.charAt(o + 1) === m) {
                s += g;
                o++;
            }
            if (o === l - 1) {
                s += g;
            } else if (r.charAt(o + 1) !== ")" && r.charAt(o + 1) !== m) {
                s += g + n();
                _ = 1;
            }
        } else if (c === "{" && r.substr(o, 6) === "{{LT}}") {
            s += p ? i() + "{{LT}}</" + d + ">" : "{{LT}}";
            o += 5;
        } else if (
            c.charCodeAt(0) >= 55296 && c.charCodeAt(0) <= 56319 ||
            (r.charCodeAt(o + 1) >= 65024 && r.charCodeAt(o + 1) <= 65039)
        ) {
            a = ((r.substr(o, 12).split(dc) || [])[1] || "").length || 2;
            s += p && " " !== c ? i() + r.substr(o, a) + `</${d}>` : r.substr(o, a);
            o += a - 1;
        } else {
            s += p && " " !== c ? i() + c + `</${d}>` : c;
        }
    }
    t.outerHTML = s + (_ ? v : "");
    
    if (u) {
        wc(b, "{{LT}}", "<");
    }
};

class GU  {
    constructor(el) {
        this.el=el;
        this.fill = this.el.querySelector(".cb-tophead-fill");
        this.header = this.el.querySelector(".cb-tophead-header");
        this.title = this.el.querySelector(".cb-tophead-title");
    }
    onInit() {
        try {
            this.handleEnter();
            return Promise.resolve();
        } catch (t) {
            return Promise.reject(t);
        }
    }
    onEnter() {
        try {
            this.enterTl && this.enterTl.play();
            return Promise.resolve();
        } catch (t) {
            return Promise.reject(t);
        }
    }
    handleEnter() {
        this.enterTl = this.tlEnter();
    }
    tlEnter() {
        const tl = new gsap.timeline({ paused: true, delay: 0.4 });
        if (this.header) tl.add(Uc(this.header.firstElementChild, { stagger: 0.1 }), 0);
        if (this.title) tl.add(Uc(this.title.firstElementChild), 0.1);
        if (this.fill) {
            tl.set(this.fill, { willChange: "transform" });
            tl.fromTo(this.fill, { scaleY: window.innerHeight / this.el.offsetHeight, transformOrigin: "top center" }, { scaleY: 1, transformOrigin: "top center", duration: 3, ease: "expo.out" }, 0.5);
            tl.set(this.fill, { willChange: "auto" });
        }
        return tl;
    }
};

const cbTopHeadElm = document.querySelector(".cb-tophead");
const gu = new GU(cbTopHeadElm);
gu.onInit()






