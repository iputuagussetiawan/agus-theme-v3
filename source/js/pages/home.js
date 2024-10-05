//1.Import
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import App from '../App';
import Modal from "../modules/Modal";
import HomeBanner from "../sections/HomeBanner";
import HomePreviews from "../sections/HomePreviews";

const modal = new Modal();
const homeBanner = new HomeBanner();
const homePreviews = new HomePreviews();
const app=new App();
gsap.registerPlugin(ScrollTrigger);

homeBanner.onInit();
homeBanner.play();

homePreviews.onInit();






























// import MasonryLayout from "../modules/MasonryLayout";
//import SectionFeatures from '../sections/SectionFeatures'
// import SectionPortfolio from '../sections/SectionPortfolio'
// import ScrollLetters  from "../modules/ScrollLetters";
// import Divider from "../modules/Divider";

//2.Initialization

// const scrollLetters = new ScrollLetters();
// const masonryLayout=new MasonryLayout();
//const featuredElm = document.querySelector(".featured");
// const portfolioElm = document.querySelector(".portfolio");
//const sectionFeatured = new SectionFeatures(featuredElm);
// const sectionPortfolio = new SectionPortfolio(portfolioElm);
// sectionFeatured.onInit()
// sectionPortfolio.onInit()

//2.Event
document.addEventListener("DOMContentLoaded", () => {
    //portfolio()
    app.init();
    // scrollLetters.init();
});

//3.Function
// function Uc (elm, e = {}){
//     const n = {
//         duration: 1.7, 
//         stagger: { amount: 0.6 },
//         ease: "expo.out",
//         ...e,
//     };
//     const tl = new gsap.timeline();
//     gsap.set(elm, { overflow: "hidden", verticalAlign: "top" });
//     gsap.set(elm, { y: "200%" });
//     tl.set(elm, { willChange: "transform" }, 0);
//     tl.fromTo(elm, { y: "200%" }, { y: "0%", duration: n.duration, stagger: n.stagger, ease: n.ease }, 0);
//     tl.set(elm, { willChange: "auto" });
//     return tl;
// };


// if (document.querySelector(".span-lines.animate")) {
//     document.querySelectorAll(".span-lines.animate").forEach((triggerElement, index) => {
//         const targetElements = triggerElement.querySelectorAll(".span-line-inner");
//         const tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: triggerElement,
//             toggleActions: 'play none none reset', 
//             start: "0% 100%",
//             end: "100% 0%"
//         }
//         });
//         if (targetElements.length > 0) {
//         tl.from(targetElements, {
//             y: "100%",
//             stagger: 0.01,
//             ease: "power3.out",
//             duration: 1,
//             delay: 0
//         });
//         }
//     });
// }


// if (document.querySelector(".fade-in.animate")) {
//     document.querySelectorAll(".fade-in.animate").forEach((triggerElement, index) => {
//         const targetElement = triggerElement;
//         const tl = gsap.timeline({
//             scrollTrigger: {
//             trigger: triggerElement,
//             toggleActions: 'play none none reset',
//             start: "0% 110%",
//             end: "100% 0%",
//             }
//         });
//         if (targetElement) {
//             tl.from(targetElement, {
//                 y: "2em",
//                 opacity: 0,
//                 ease: "expo.out",
//                 duration: 1.75,
//                 delay: 0
//             });
//         }
//     });
// }

// function portfolio(){
//     const portfolioText = new SplitText(".portfolio  .section-description");
//     var  textAnim=document.querySelectorAll(".aki__word");
//     Uc(textAnim);

//     let masonryContainer=document.querySelectorAll('.wrapper-masonry')
//     let masonryContainerTotal=masonryContainer.length
//     for (let i = 0; i < masonryContainerTotal; i++) {
//         masonryLayout.fetchMasonry(`masonry${i}`, 'card-portfolio', 4);
//     }
// }

document.addEventListener("DOMContentLoaded", () => {
    const dividerElement = document.querySelector('.divider-container');
    if (dividerElement) {
        const divider = new Divider(dividerElement);
        divider.onInit(); // This will start the animation and setup
    }
});





