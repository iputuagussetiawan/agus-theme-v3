import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
class Navbar {
    constructor() {
        this.opened = false;
        this.toggleBtn = document.querySelector(".burger-menu__button");
        this.menu=document.querySelector(".cb-menu")
    }
    onInit() {
        try {
            this.bindToggle();
            return Promise.resolve();
        } catch (error) {
            return Promise.reject(error);
        }
    }
    onDestroy() {
        try {
            document.documentElement.classList.remove("menu-open");
            return Promise.resolve();
        } catch (error) {
            return Promise.reject(error);
        }
    }
    bindToggle() {
        this.toggleBtn.addEventListener("click", () => this.toggle());
        // this.backdrop.addEventListener("click", () => this.hide());
    }
    toggle() {
        this.opened ? this.hide() : this.show();
    }
    show() {
        this.opened = true;
        this.menu.classList.add("-open");
    }
    hide(t = false) {
        this.opened = false;
        this.menu.classList.remove("-open");
    }

    // tlShow() {
    //     const tl = new Zi.timeline({ paused: true });
    //     tl.set(this.box, { display: "block" }, 0);
    //     tl.fromTo(this.backdrop, { opacity: 0 }, { opacity: 1, duration: 0.5 }, 0);
    //     tl.fromTo(this.fill, { scaleX: 0 }, { scaleX: 1, ease: "expo.out", duration: 1 }, 0);
    //     tl.fromTo(this.content, { xPercent: 50 }, { xPercent: 0, ease: "expo.out", duration: 1 }, 0);
    //     tl.fromTo(this.content, { opacity: 0 }, { opacity: 1, duration: 0.5 }, 0.15);
    //     return tl;
    // }

    // tlHide() {
    //     const tl = new Zi.timeline({ paused: true });
    //     tl.fromTo(this.backdrop, { opacity: 1 }, { opacity: 0, duration: 0.4 }, 0);
    //     tl.fromTo(this.fill, { scaleX: 1 }, { scaleX: 0, duration: 0.4 }, 0);
    //     tl.fromTo(this.content, { xPercent: 0 }, { xPercent: 20, duration: 0.4 }, 0);
    //     tl.fromTo(this.content, { opacity: 1 }, { opacity: 0, duration: 0.1 }, 0);
    //     tl.set(this.box, { display: "none" });
    //     return tl;
    // }


}
export default Navbar