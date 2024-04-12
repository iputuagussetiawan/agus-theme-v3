import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
class Footer {
    init(){
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
}
export default Footer