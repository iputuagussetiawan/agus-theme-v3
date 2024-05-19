import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
class Footer { 
    overlap(){
        gsap.set('.footer', { yPercent: -50 })
        const footerTl = gsap.timeline({ paused:true })
        footerTl.to('.footer', { yPercent: 0, ease: 'none' });
        ScrollTrigger.create({  
            trigger: '.footer',
            start: 'top bottom',
            end: '+=100%',
            animation: footerTl,
            scrub: true,  
            // markers: true,
        })
    }

    circleAnimation(){
        if (document.querySelector(".footer-footer-wrap")) {
            document.querySelectorAll(".footer-footer-wrap").forEach((triggerElement, index) => {
                const targetElementRound = document.querySelectorAll(".footer-rounded-div .rounded-div-wrap");
                const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: triggerElement,
                    start: "100 100%",
                    end: "100% 100%",
                    scrub: 0,
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