
//1.Import
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from './modules/Navbar'
import MouseFollower from "mouse-follower";
import Magnetic from './modules/Magnetic'
// import Footer from './sections/Footer'
import LazyImage from './modules/LazyImage';
import OverlapSection from './modules/OverlapSection';
import ImageParallax from './modules/ImageParallax';

//2.Initialization
gsap.registerPlugin(ScrollTrigger);
MouseFollower.registerGSAP(gsap);
let cbMenu=document.querySelector(".cb-menu")
const navbar=new Navbar(cbMenu);
// const footer=new Footer();
const lazyImage=new LazyImage();
const imageParallax=new ImageParallax();
const overlapSection=new OverlapSection();
// const magneticElm = document.querySelector(".magnetic");
// const magnetic = new Magnetic(magneticElm);

class App {
    constructor() {
        navbar.onInit();
        // footer.init();
        lazyImage.init();
        imageParallax.init();
        overlapSection.init();
        // magnetic.onInit();
    }
}
export default App

