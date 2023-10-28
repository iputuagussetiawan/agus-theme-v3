import Navbar from './modules/Navbar'
import Magnetic from './modules/Magnetic'
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
MouseFollower.registerGSAP(gsap);
let cbMenu=document.querySelector(".cb-menu")
const navbar=new Navbar(cbMenu);
navbar.onInit();

const magneticElm = document.querySelector(".magnetic");
const magnetic = new Magnetic(magneticElm);
magnetic.onInit();


class SectionFeatured  {
    constructor(el) {
        this.el=el;
        this.header = this.el.querySelector(".cb-featured-header");
        this.item = this.el.querySelectorAll(".cb-featured-item");
    }
    onInit() {
        try {
            let t = this;
            return Promise.resolve(document.fonts.ready).then(() => {
                t.bindVideoPlay();
                t.magicShow();
            });
        } catch (t) {
            return Promise.reject(t);
        }
    }
    bindVideoPlay() {
        this.item.forEach((t) => {
            let e = t.querySelector("video");
            t.addEventListener("mouseenter", () => e.play());
            t.addEventListener("mouseleave", () => e.pause());
        });
    }
    magicShow() {
        //this.header && kc(this.header.firstElementChild, { type: "lines", stagger: 0.2 });
        this.item.length && stagerFadeUp(this.item);
    }
}

const stagerFadeUp = (elm, animeParam = {}, scrollParam = {}) => {
    const params = {
        onEnter: (elm) => fadeUp(elm, animeParam),
        once: true,
        ...scrollParam,
    };
    gsap.set(elm, { opacity: 0 });
    return ScrollTrigger.batch(
        elm,
        params
    );
};

const fadeUp = (elm, animeParam = {}) => {
    const params={
        fromY: 70, 
        toY: 0, 
        fromX: 0, 
        toX: 0, 
        duration: 2, 
        opacityDuration: 1, 
        stagger: 0.1, 
        ease: "expo.out",
        ...animeParam,
    };
    const tl = new gsap.timeline();
    gsap.set(elm, { opacity: 0, y: params.fromY });
    tl.set(elm, { willChange: 'transform' });
    tl.fromTo(elm, { opacity: 0 }, { opacity: 1, duration: params.opacityDuration, stagger: params.stagger }, 0);
    tl.fromTo(elm, { y: params.fromY, x: params.fromX }, { y: params.toY, x: params.toX, duration: params.duration, stagger: params.stagger, ease: params.ease }, 0);
    tl.set(elm, { willChange: 'auto' });
    return tl;
};

const cbFeaturedElm = document.querySelector(".cb-featured");
const sectionFeatured = new SectionFeatured(cbFeaturedElm);
sectionFeatured.onInit()
