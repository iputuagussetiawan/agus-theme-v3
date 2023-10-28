import { gsap } from "gsap";

class Magnetic {
    constructor(el) {
        this.el=el;
        this.magneticTargetElm = this.el.querySelector(".magnetic__elm");
    }
    onInit() {
        try {
            this.initMagnetic();
            return Promise.resolve();
        } catch (error) {
            return Promise.reject(error);
        }
    }
    initMagnetic() {
        this.registerMagnetic(this.magneticTargetElm, {
            box: this.el,
            xDelta: 0.08,
            yDelta: 0.08,
            leaveSpeed: 2,
            leaveEase: "elastic.out(1,0.25)"
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
export default Magnetic