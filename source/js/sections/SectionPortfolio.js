import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
class SectionPortfolio {
    constructor(el) {
        this.el=el;
        this.header = this.el.querySelector(".featured__header");
        this.item = this.el.querySelectorAll(".card-portfolio");
    }
    onInit() {
        try {
            let t = this;
            return Promise.resolve(document.fonts.ready).then(() => {
                t.magicShow();
            });
        } catch (t) {
            return Promise.reject(t);
        }
    }
    magicShow() {
        //this.header && kc(this.header.firstElementChild, { type: "lines", stagger: 0.2 });
        this.item.length && this.stagerFadeUp(this.item);
    }

    stagerFadeUp = (elm, animeParam = {}, scrollParam = {}) => {
        const params = {
            onEnter: (elm) => this.fadeUp(elm, animeParam),
            once: true,
            ...scrollParam,
        };
        gsap.set(elm, { opacity: 0 });
        return ScrollTrigger.batch(
            elm,
            params
        );
    };
    
    fadeUp = (elm, animeParam = {}) => {
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
}
export default SectionPortfolio