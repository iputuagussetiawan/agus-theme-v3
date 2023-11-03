// import Navbar from './modules/Navbar'
// import Magnetic from './modules/Magnetic'
// import SectionFeatures from './sections/SectionFeatures'
// import MouseFollower from "mouse-follower";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "../modules/splitText";
import SectionFeatures from '../sections/SectionFeatures'

const cbFeaturedElm = document.querySelector(".cb-featured");
const sectionFeatured = new SectionFeatures(cbFeaturedElm);
sectionFeatured.onInit()

import barba from '@barba/core';

function onEnterAnime(elm){
    console.log(elm)
}
function onLeaveAnime(){
    console.log('On Leave from home')
}

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



barba.init({
    views: [{
        namespace: 'home',
        beforeLeave() {
        },
        beforeEnter() {
            const text = new SplitText(".header");
            var  textAnim=document.querySelectorAll(".aki__word");
            Uc(textAnim);
        }
        }, {
        namespace: 'whatwedo',
        beforeLeave() {
            // console.log(data)
        },
        beforeEnter(data) {
            // console.log(data)
        }
    }],
    transitions: [{
        name: 'opacity-transition',
        leave(data) {   
            return gsap.to(data.current.container, {
                opacity: 0
            });
        },
        enter(data) {
            return gsap.from(data.next.container, {
                opacity: 0
            });
        }
    }]
});










// gsap.set(text.chars, {
//     perspective: "500",
//     transformOrigin: "50% 1em",
//     transformStyle: 'preserve-3d',
// })

// timeline.staggerFromTo(
//     text.chars,
//     0.5,
//     {
//         opacity:0,
//         rotateY: 45,
//         rotateZ: 360
//     },
//     {
//         opacity:1,
//         rotateY: 0,
//         rotateZ: 0
//     },
//     0.01
// )

