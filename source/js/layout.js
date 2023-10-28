import Navbar from './modules/Navbar'
import Magnetic from './modules/Magnetic'
import MouseFollower from "mouse-follower";
import gsap from "gsap";
MouseFollower.registerGSAP(gsap);
let cbMenu=document.querySelector(".cb-menu")
const navbar=new Navbar(cbMenu);
navbar.onInit();

const magneticElm = document.querySelector(".magnetic");
const magnetic = new Magnetic(magneticElm);
magnetic.onInit();
