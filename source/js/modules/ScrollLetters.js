import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

class ScrollLetters {
    constructor() {
        this.direction = 1; // 1 = forward, -1 = backward scroll
        this.roll1 = null;
        this.roll2 = null;
        this.scroll = null;
    }

    init() {
        this.roll1 = this.roll(".rollingText", { duration: 18 });
        this.roll2 = this.roll(".rollingText02", { duration: 10 }, true);

        this.scroll = ScrollTrigger.create({
            trigger: document.querySelector('[data-scroll-container]'),
            onUpdate: (self) => {
                if (self.direction !== this.direction) {
                    this.direction *= -1;
                    gsap.to([this.roll1, this.roll2], { timeScale: this.direction, overwrite: true });
                }
            }
        });
    }

    roll(targets, vars, reverse) {
        vars = vars || {};
        vars.ease || (vars.ease = "none");
        const tl = gsap.timeline({
            repeat: -1,
            onReverseComplete: function () {
                this.totalTime(this.rawTime() + this.duration() * 10); // otherwise when the playhead gets back to the beginning, it'd stop. So push the playhead forward 10 iterations (it could be any number)
            }
        });
        const elements = gsap.utils.toArray(targets);
        const clones = elements.map(el => {
            let clone = el.cloneNode(true);
            el.parentNode.appendChild(clone);
            return clone;
        });
        const positionClones = () => elements.forEach((el, i) => gsap.set(clones[i], { position: "absolute", overwrite: false, top: el.offsetTop, left: el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth) }));
        positionClones();
        elements.forEach((el, i) => tl.to([el, clones[i]], { xPercent: reverse ? 100 : -100, ...vars }, 0));
        window.addEventListener("resize", () => {
            let time = tl.totalTime(); // record the current time
            tl.totalTime(0); // rewind and clear out the timeline
            positionClones(); // reposition
            tl.totalTime(time); // jump back to the proper time
        });
        return tl;
    }
}

export default ScrollLetters