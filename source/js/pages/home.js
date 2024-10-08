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

import MasonryLayout from "../modules/MasonryLayout";
import SectionFeatures from '../sections/SectionFeatures'
import SectionPortfolio from '../sections/SectionPortfolio'
import ScrollLetters  from "../modules/ScrollLetters";
import Divider from "../modules/Divider";

//2.Initialization

const scrollLetters = new ScrollLetters();
const masonryLayout=new MasonryLayout();
const featuredElm = document.querySelector(".featured");
const portfolioElm = document.querySelector(".portfolio");
const sectionFeatured = new SectionFeatures(featuredElm);
const sectionPortfolio = new SectionPortfolio(portfolioElm);
sectionFeatured.onInit()
sectionPortfolio.onInit()

//2.Event
document.addEventListener("DOMContentLoaded", () => {
    portfolio()
    app.init();
    scrollLetters.init();
});

//3.Function

function portfolio(){
    let masonryContainer=document.querySelectorAll('.wrapper-masonry')
    let masonryContainerTotal=masonryContainer.length
    for (let i = 0; i < masonryContainerTotal; i++) {
        masonryLayout.fetchMasonry(`masonry${i}`, 'card-portfolio', 3);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const dividerElement = document.querySelector('.divider-container');
    if (dividerElement) {
        const divider = new Divider(dividerElement);
        divider.onInit(); // This will start the animation and setup
    }
});





