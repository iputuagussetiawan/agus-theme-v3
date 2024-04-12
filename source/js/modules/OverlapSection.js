import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

class OverlapSection {
    constructor() {
        this.panels=document.querySelectorAll(".panel");
    }
    init(){
        if(this.panels){
            this.panels.forEach((panel) => {
                ScrollTrigger.create({
                    trigger: panel,
                    start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
                    pin: true, 
                    pinSpacing: false,
                });
            });
        }
    } 
}
export default OverlapSection