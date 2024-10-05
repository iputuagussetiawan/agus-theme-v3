import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

class HomePreviews {
    constructor() {
        this.section= document.querySelector(".cb-screenshot");
        this.preview = document.querySelector(".cb-screenshot-preview");
        this.previewMedia = this.preview.querySelector(".cb-screenshot-preview-media");
    }
     // Initialization method
    onInit() {
        try {
            this.magicShow();
            this.magicParallax();
            return Promise.resolve();
        } catch (error) {
            return Promise.reject(error);
        }
    }

    // Show animation method
    magicShow() {
        ScrollTrigger.create({
            trigger: this.section,
            animation: this.tlShow(),
            once: true
        });
    }

    // Timeline for show animation
    tlShow() {
        const timeline = new gsap.timeline();
        gsap.set(this.previewMedia, { opacity: 0 });
        timeline.to(this.previewMedia, { opacity: 1, duration: 1 });
        return timeline;
    }

    // Parallax effect method
    magicParallax() {
        ScrollTrigger.create({
            trigger: this.section,
            animation: this.tlParallax(),
            start: "top bottom",
            end: "bottom top",
            scrub: true
        });
    }

    // Timeline for parallax animation
    tlParallax() {
        const timeline = new gsap.timeline();
        gsap.set(this.previewMedia, { scale: 1.05 });
        timeline.fromTo(this.previewMedia, { y: "-10%" }, { y: "10%", ease: "none" });
        return timeline;
    }
}
export default HomePreviews