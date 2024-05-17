//1.Import
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import App from '../App';
import { SplitText } from "../modules/splitText";
import MasonryLayout from "../modules/MasonryLayout";
//import SectionFeatures from '../sections/SectionFeatures'
import SectionPortfolio from '../sections/SectionPortfolio'
import barba from '@barba/core';

//2.Initialization
const app=new App();
const masonryLayout=new MasonryLayout();
//const featuredElm = document.querySelector(".featured");
const portfolioElm = document.querySelector(".portfolio");
//const sectionFeatured = new SectionFeatures(featuredElm);
const sectionPortfolio = new SectionPortfolio(portfolioElm);
// sectionFeatured.onInit()
sectionPortfolio.onInit()

//2.Event
document.addEventListener("DOMContentLoaded", () => {
    masonryLayout.fetchMasonry('masonry', 'card-portfolio', 4)
});

//3.Function
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
            const text = new SplitText(".topHead__title");
            var  textAnim=document.querySelectorAll(".aki__word");
            Uc(textAnim);
            // sectionFeatured.onInit()
            console.log('testees From Home')
            //pageTransition();
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

function initScrollLetters() {

    let direction = 1; // 1 = forward, -1 = backward scroll
  
      const roll1 = roll(".rollingText", {duration: 18}),
              roll2 = roll(".rollingText02", {duration: 10}, true),
  
      scroll = ScrollTrigger.create({
          trigger: document.querySelector('[data-scroll-container]'),
          onUpdate(self) {
          if (self.direction !== direction) {
              direction *= -1;
              gsap.to([roll1, roll2], {timeScale: direction, overwrite: true});
          }
          }
      });
  
    // helper function that clones the targets, places them next to the original, then animates the xPercent in a loop to make it appear to roll across the screen in a seamless loop.
    function roll(targets, vars, reverse) {
      vars = vars || {};
      vars.ease || (vars.ease = "none");
      const tl = gsap.timeline({
              repeat: -1,
              onReverseComplete() { 
                this.totalTime(this.rawTime() + this.duration() * 10); // otherwise when the playhead gets back to the beginning, it'd stop. So push the playhead forward 10 iterations (it could be any number)
              }
            }), 
            elements = gsap.utils.toArray(targets),
            clones = elements.map(el => {
              let clone = el.cloneNode(true);
              el.parentNode.appendChild(clone);
              return clone;
            }),
            positionClones = () => elements.forEach((el, i) => gsap.set(clones[i], {position: "absolute", overwrite: false, top: el.offsetTop, left: el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth)}));
      positionClones();
      elements.forEach((el, i) => tl.to([el, clones[i]], {xPercent: reverse ? 100 : -100, ...vars}, 0));
      window.addEventListener("resize", () => {
        let time = tl.totalTime(); // record the current time
        tl.totalTime(0); // rewind and clear out the timeline
        positionClones(); // reposition
        tl.totalTime(time); // jump back to the proper time
      });
      return tl;
    }
  
  }

  initScrollLetters()

