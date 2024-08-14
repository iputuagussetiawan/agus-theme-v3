import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

class Divider {
    constructor(el) {
        this.el = el;
        this.svg = this.el.querySelector("svg");
        this.injectSvg();
        this.bindMouseMove();
        this.bindResizeObserver();
    }

    onInit() {
        try {
            this.magicShow();
            return Promise.resolve();
        } catch (e) {
            return Promise.reject(e);
        }
    }

    magicShow() {
        const timeline = gsap.timeline();
        // Set the initial state of the element
        timeline.set(this.svg, {
            transformOrigin: "left center"
        });

        // Animate the element with GSAP
        timeline.from(this.svg, {
            scaleX: 0,
            duration: 3,
            ease: "expo.out"
        });
    
    }

    getPathD(controlX, controlY, endX) {
        controlX = controlX || this.el.offsetWidth / 2;
        controlY = controlY || 100;
        endX = endX === undefined ? this.el.offsetWidth : endX;
        return `M0,100 Q${controlX},${controlY} ${endX},100`;
    }

    injectSvg() {
        this.el.innerHTML = `<svg><path d='${this.getPathD()}'/></svg>`;
        this.svg = this.el.querySelector("svg");
        this.path = this.el.querySelector("path");
    }

    update() {
        gsap.killTweensOf(this.path);
        this.path.setAttribute("d", this.getPathD());
    }

    bindMouseMove() {
        if ('ontouchstart' in window) return;

        let controlYOffset = 0;
        this.el.addEventListener("mousemove", (event) => {
            const rect = this.svg.getBoundingClientRect();
            const mouseX = event.pageX - window.pageXOffset - rect.left;
            const mouseY = event.pageY - window.pageYOffset - rect.top;

            controlYOffset = controlYOffset || (mouseY < 100 ? 50 : -50);

            const controlX = mouseX;
            const controlY = 2 * mouseY - 100 + controlYOffset;

            gsap.to(this.path, {
                attr: { d: this.getPathD(controlX, controlY) },
                duration: 0.2,
                overwrite: true
            });
        });

        this.el.addEventListener("mouseleave", () => {
            controlYOffset = 0;
            gsap.to(this.path, {
                attr: { d: this.getPathD() },
                duration: 2,
                ease: "elastic.out(1, 0.2)"
            });
        });
    }

    bindResizeObserver() {
        this.updateDebounced = debounce(this.update.bind(this), 30);

        this.resizeObserver = new ResizeObserver(() => this.updateDebounced());
        this.resizeObserver.observe(this.el);
    }
}

// Utility function: Debounce implementation for update throttling
function debounce(func, wait, options = {}) {
    let timeout, lastArgs, lastThis, result;
    let lastCallTime, lastInvokeTime = 0;
    let leading = options.leading || false;
    let maxWait = options.maxWait || false;
    let trailing = options.trailing !== false;
    
    function invokeFunc(time) {
        const args = lastArgs;
        const thisArg = lastThis;
        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
    }

    function leadingEdge(time) {
        lastInvokeTime = time;
        timeout = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time) : result;
    }

    function remainingWait(time) {
        const timeSinceLastCall = time - lastCallTime;
        const timeSinceLastInvoke = time - lastInvokeTime;
        const timeWaiting = wait - timeSinceLastCall;

        return maxWait ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }

    function shouldInvoke(time) {
        const timeSinceLastCall = time - lastCallTime;
        const timeSinceLastInvoke = time - lastInvokeTime;

        return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || (maxWait && timeSinceLastInvoke >= maxWait);
    }

    function timerExpired() {
        const time = Date.now();
        if (shouldInvoke(time)) {
            return trailingEdge(time);
        }
        timeout = setTimeout(timerExpired, remainingWait(time));
    }

    function trailingEdge(time) {
        timeout = undefined;

        if (trailing && lastArgs) {
            return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
    }

    function cancel() {
        if (timeout !== undefined) {
            clearTimeout(timeout);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timeout = undefined;
    }

    function flush() {
        return timeout === undefined ? result : trailingEdge(Date.now());
    }

    function debounced(...args) {
        const time = Date.now();
        const isInvoking = shouldInvoke(time);

        lastArgs = args;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
            if (timeout === undefined) {
                return leadingEdge(lastCallTime);
            }
            if (maxWait) {
                timeout = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
            }
        }
        if (timeout === undefined) {
            timeout = setTimeout(timerExpired, wait);
        }
        return result;
    }

    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
}

export default Divider;