import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
import MouseFollower from "mouse-follower";
MouseFollower.registerGSAP(gsap);
class Navbar {
    constructor(el) {
        this.el = el;
        this.opened = false;
        this.toggleBtn = document.querySelector(".burger-menu__button");
        this.menu=document.querySelector(".cb-menu")
        this.box = document.querySelector(".cb-menu-box");
        this.backdrop = document.querySelector(".cb-menu-backdrop");
        this.fill = document.querySelector(".cb-menu-fill");
        this.content = document.querySelector(".cb-menu-content");
        this.tlClose = this.tlHide();
        this.tlOpen = this.tlShow();
        this.cursor = new MouseFollower({
            // stateDetection: {
            //     '-pointer': 'a,button',
            //     '-opaque': '.my-image',
            //     '-hidden': '.my-input'
            // },
            skewing: 1.5,
            skewingText: 2,
            skewingIcon: 2,
            skewingMedia: 2,
            skewingDelta: 0.001,
            skewingDeltaMax: 0.15,
            stickDelta: 0.15,
        });
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
        this.backdrop.addEventListener("click", () => this.hide());
        this.tlClose.eventCallback("onComplete", () => {
            this.box.classList.remove("-visible");
        });
        this.el.addEventListener("mouseenter", () => {
            if (this.classList.contains("-inverse") && this.cursor) {
                this.cursor.addState("-inverse");
            }
        });
        window.addEventListener("keyup", (e) => {
            if ("Escape" === e.key) {
                this.toggle();
            }
        });
        this.registerMagnetic(this.toggleBtn, { leaveSpeed: 2, leaveEase: "elastic.out(1,0.25)" })
    }
    toggle() {
        this.opened ? this.hide() : this.show();
    }
    show() {
        this.opened = true;
        this.menu.classList.add("-open");
        this.tlClose.pause();
        this.tlOpen.play(0);
    }
    hide(t = false) {
        this.opened = false;
        this.menu.classList.remove("-open");
        this.tlOpen.pause();
        this.tlClose.play(0);
    }
    tlShow() {
        const tl = new gsap.timeline({ paused: true });
        tl.set(this.box, { display: "block" }, 0);
        tl.fromTo(this.backdrop, { opacity: 0 }, { opacity: 1, duration: 0.5 }, 0);
        tl.fromTo(this.fill, { scaleX: 0 }, { scaleX: 1, ease: "expo.out", duration: 1 }, 0);
        tl.fromTo(this.content, { xPercent: 50 }, { xPercent: 0, ease: "expo.out", duration: 1 }, 0);
        tl.fromTo(this.content, { opacity: 0 }, { opacity: 1, duration: 0.5 }, 0.15);
        return tl;
    }
    tlHide() {
        const tl = new gsap.timeline({ paused: true });
        tl.fromTo(this.backdrop, { opacity: 1 }, { opacity: 0, duration: 0.4 }, 0);
        tl.fromTo(this.fill, { scaleX: 1 }, { scaleX: 0, duration: 0.4 }, 0);
        tl.fromTo(this.content, { xPercent: 0 }, { xPercent: 20, duration: 0.4 }, 0);
        tl.fromTo(this.content, { opacity: 1 }, { opacity: 0, duration: 0.1 }, 0);
        tl.set(this.box, { display: "none" });
        return tl;
    }

    magicInverse = () => {
        document.querySelectorAll("[data-menu-inverse]").forEach((e) => {
            ta.create({
                trigger: e,
                start: "top top+=50px",
                end: "bottom top+=70px",
                toggleClass: { targets: this.el, className: "-inverse" },
                refreshPriority: -99999
            });
        });
    }

    registerMagnetic(elm, options){
        let cursorPosition;
        const param = {
            box: elm,
            xDelta: 0.1,
            yDelta: 0.1,
            moveSpeed: 0.3,
            leaveSpeed: 0.3,
            moveEase: "power1.out",
            leaveEase: "power1.out",
            overwrite: true,
            ...options,
        };
        const rePosition = (xPosition , yPosition, params) => {
            gsap.to(elm, {
                x: xPosition,
                y: yPosition,
                overwrite: param.overwrite,
                onStart: () => {
                    gsap.set(elm, { willChange: "transform" });
                },
                onComplete: () => {
                    gsap.set(elm, { willChange: "auto" });
                },
                ...params,
            });
        };
        param.box.addEventListener("mouseenter", () => {
            cursorPosition = elm.getBoundingClientRect();
        });
        param.box.addEventListener("mousemove", (event) => {
            const currentXPosition = (event.clientX - cursorPosition.left - cursorPosition.width / 2) * param.xDelta;
            const currentYPosition = (event.clientY - cursorPosition.top - cursorPosition.height / 2) * param.yDelta;
            rePosition(currentXPosition, currentYPosition, { duration: param.moveSpeed, ease: param.moveEase });
        });
        param.box.addEventListener("mouseleave", () => {
            rePosition(0, 0, { duration: param.leaveSpeed, ease: param.leaveEase });
        });
    };
}
export default Navbar