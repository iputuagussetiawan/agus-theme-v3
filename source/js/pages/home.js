//1.Import
import gsap from "gsap";
import App from '../App';
import { SplitText } from "../modules/splitText";
import SectionFeatures from '../sections/SectionFeatures'
import SectionPortfolio from '../sections/SectionPortfolio'
import barba from '@barba/core';

//2.Initialization
const app=new App();
const featuredElm = document.querySelector(".featured");
const portfolioElm = document.querySelector(".portfolio");
const sectionFeatured = new SectionFeatures(featuredElm);
const sectionPortfolio = new SectionPortfolio(portfolioElm);
sectionFeatured.onInit()
sectionPortfolio.onInit()

//2.Event
document.addEventListener("DOMContentLoaded", () => {
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



// var elem = document.querySelector('.grid');
// var msnry = new Masonry( elem, {
//     // options
//     itemSelector: '.grid-item',
//     columnWidth: 100
// });
let fecthMasonry = function (container, items, columns) {
    let CONTAINER_EL = document.querySelector("#" + container);
    let WRAPPER_CONTAINER_EL = CONTAINER_EL.parentNode;
    let ITEMS_ELS = document.querySelectorAll("." + items);
    CONTAINER_EL.parentNode.removeChild(CONTAINER_EL);
    let NEW_CONTAINER_EL = document.createElement('div');
    NEW_CONTAINER_EL.setAttribute('id', container);
    NEW_CONTAINER_EL.classList.add('masonry-layout', "columns-" + columns);
    WRAPPER_CONTAINER_EL.appendChild(NEW_CONTAINER_EL);
    for (let i = 1; i <= columns; i++) {
        let COLUMN = document.createElement('div');
        COLUMN.classList.add("masonry-column-" + i);
        NEW_CONTAINER_EL.appendChild(COLUMN);
    }
    let countColumn = 1;
    ITEMS_ELS.forEach(function (item) {
        let col = document.querySelector("#" + container + " > .masonry-column-" + countColumn);
        col.appendChild(item);
        countColumn = countColumn < columns ? countColumn + 1 : 1;
    });
};

fecthMasonry('masonry', 'card-portfolio', 4);
