
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

class ImageParallax {
    init(){
        gsap.utils.toArray('.image-parallax').forEach(container => {
            const img = container.querySelector('img');
            const tlImageParallax = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                scrub: true,
                pin: false,
            }
            });
            tlImageParallax.fromTo(img, {
                yPercent: -50,
                ease: 'none'
            }, {
                yPercent: 50,
                ease: 'none'
            });
        });
    } 
}
export default ImageParallax