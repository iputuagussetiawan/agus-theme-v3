import gsap from "gsap";
import { SplitText } from "../modules/splitText";
import SectionFeatures from '../sections/SectionFeatures'
import barba from '@barba/core';

function initSectionFeatured(){
    let cbFeaturedElm = document.querySelector(".featured");
    let sectionFeatured = new SectionFeatures(cbFeaturedElm);
    sectionFeatured.onInit()
}

initSectionFeatured();

function Uc (elm, e = {}){
    const n = {
        type: "words", 
        duration: 1.7, 
        stagger: { amount: 0.6 },
        ease: "expo.out",
        ...e,
    };
    const tl = new gsap.timeline();
    gsap.set(elm, { overflow: "hidden", verticalAlign: "top", padding: "1.7rem", margin: "-0.15em" });
    gsap.set(elm, { y: "200%" });
    tl.set(elm, { willChange: "transform" }, 0);
    tl.fromTo(elm, { y: "200%" }, { y: "0%", duration: n.duration, stagger: n.stagger, ease: n.ease }, 0);
    tl.set(elm, { willChange: "auto" });
    return tl;
};