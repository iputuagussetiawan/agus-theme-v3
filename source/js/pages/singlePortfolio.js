//1.Import
import SplitType from 'split-type'
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger)
import App from '../App';

//2.Initialization
const app=new App();
let text;

//2.Event
document.addEventListener("DOMContentLoaded", () => {
    app.init();
    runSplit()
    runTextOnScrollAnime();
});

window.addEventListener('resize', function(event) {
    // Your code here
    text.revert();
    runSplit();
    runTextOnScrollAnime();
});

//3.Function
function runSplit(){
    text= new SplitType(".split-lines",{types:"lines, words"});

    // Select all elements with the class 'line'
    let lines = document.querySelectorAll('.line');

    // Loop through each 'line' element
    lines.forEach(function(line) {
        // Create a new div element
        let textWrapper = document.createElement('div');
        
        // Add the class 'line-mask' to the new div
        textWrapper.classList.add('line-mask');
        
        // Append the new div as a child of the current 'line' element
        line.appendChild(textWrapper);
    });
}
// Select all elements with the class 'trigger-class'

function runTextOnScrollAnime(){
    let lines=document.querySelectorAll('.line');
    console.log(lines)
    lines.forEach(function(triggerElement, index) {
        // Find the target element with the class 'line-mask' within the current 'trigger-class' element
        let targetElement = triggerElement.querySelector('.line-mask');
        
        // Create the GSAP timeline with the ScrollTrigger plugin
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerElement,
                start: "top center",
                end: "bottom center",
                scrub: 1
            }
        });

        // Define the animation for the target element
        tl.to(targetElement, {
            width: "0%",
            duration: 1
        });
    });
}

