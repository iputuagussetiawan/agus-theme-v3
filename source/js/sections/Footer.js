import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Divider from "../modules/Divider";
gsap.registerPlugin(ScrollTrigger);
class Footer { 

    constructor() {
        this.footer = document.querySelectorAll(".footer");
    }

    async onInit() {
        try {
            this.magicParallax();
            this. circleAnimation();
            this.footerDivider();
            return Promise.resolve();
        } catch (e) {
            return Promise.reject(e);
        }
    }

    magicParallax() {
        // Save styles and set up media query
        ScrollTrigger.saveStyles([this.main]);
        ScrollTrigger.matchMedia({
            "(min-width:1050px)": () => {
                // Create GSAP ScrollTrigger with animation
                ScrollTrigger.create({
                    animation: this.tlParallax(), // Use GSAP's ScrollTrigger
                    trigger: this.footer,
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: true,
                    //markers:true
                });
            }
        });
    }

    tlParallax() {
        const timeline = gsap.timeline(); // Use GSAP for creating the timeline
        // Define the GSAP animation sequence
        timeline.set(this.footer, { willChange: "transform" });
        timeline.fromTo(this.footer, { yPercent: -50 }, { yPercent: 0, ease: "none", force3D: true });
        timeline.set(this.footer, { willChange: "auto" });
        return timeline;
    }

    footerDivider(){
        const dividerElement = document.querySelector('.footer__divider-container');
        if (dividerElement) {
            const divider = new Divider(dividerElement);
            divider.onInit(); // This will start the animation and setup
        }
    }

    // overlap(){
    //     gsap.set('.footer', { yPercent: -50 })
    //     const footerTl = gsap.timeline({ paused:true })
    //     footerTl.to('.footer', { yPercent: 0, ease: 'none' });
    //     ScrollTrigger.create({  
    //         trigger: '.footer',
    //         start: 'top bottom',
    //         end: '+=100%',
    //         animation: footerTl,
    //         scrub: true,  
    //         // markers: true,
    //     })
    // }

    circleAnimation(){
        if (document.querySelector(".footer-footer-wrap")) {
            document.querySelectorAll(".footer-footer-wrap").forEach((triggerElement, index) => {
                const targetElementRound = document.querySelectorAll(".footer-rounded-div .rounded-div-wrap");
                const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: triggerElement,
                    start: "150 100%",
                    end: "100% 100%",
                    scrub: 0,
                    markers: true,
                }
                });
                tl.to(targetElementRound, {
                    height: 0,
                    ease: "none"
                }, 0)
            });
        }
    }
}
export default Footer