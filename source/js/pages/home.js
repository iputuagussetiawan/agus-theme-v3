import gsap from "gsap";
import { SplitText } from "../modules/splitText";
import SectionFeatures from '../sections/SectionFeatures'
import barba from '@barba/core';

const cbFeaturedElm = document.querySelector(".featured");
const sectionFeatured = new SectionFeatures(cbFeaturedElm);
sectionFeatured.onInit()

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


function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3,
    });
    tl.set(".loading-screen", { left: "-100%" });
}


barba.init({
    sync: true,
    views: [{
        namespace: 'home',
        beforeLeave() {
        },
        async beforeEnter() {
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
        async leave(data) {
            const done = this.async();
            pageTransition();
            await delay(1000);
            done();
        },

        // async enter(data) {
        //     contentAnimation();
        // },

        // async once(data) {
        //     contentAnimation();
        // },
    }]
});

