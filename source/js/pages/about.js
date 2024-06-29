//1.Import
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import App from '../App';

gsap.registerPlugin(ScrollTrigger);

const app=new App();

//2.Event
document.addEventListener("DOMContentLoaded", () => {
    app.init();
});