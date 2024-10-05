import gsap from "gsap";
import SplitType from 'split-type'

class HomeBanner {
    constructor() {
        this.section = document.querySelector(".topHead");
        this.sectionTitle=this.section.querySelector(".topHead__title");
    }
    onInit() {
        this.titleSplit();
        this.handlePlayAnimate()
        return Promise.resolve();
    }

    titleSplit(){
        this.playAnimate='';
        this.elmToSplit= new SplitType(this.sectionTitle,{
            types:"lines, words",
            tagName:"span"
        });
        let titleWords=this.sectionTitle.querySelectorAll('.word');
        titleWords.forEach(titleWord => {
            // Create a new span element
            const span = document.createElement('span');
            
            // Set the text content of the span to the text of the word element
            span.textContent = titleWord.textContent;
            // Add the class name "word-inner" to the span
            span.classList.add('word-inner');
            
            // Clear the existing text in the word element
            titleWord.textContent = '';
            
            // Append the new span to the word element
            titleWord.appendChild(span);
        });
    }
    animateWord(){
        let wordInners=this.sectionTitle.querySelectorAll('.word-inner');
        let options = {
            fromY:"120%",
            toY:"0",
            type: "words",
            duration: 1.7,
            stagger: { amount: 0.6 },
            ease: "expo.out", 
        };
        const tl = new gsap.timeline({ paused: true });
        if (wordInners) {
            gsap.set(wordInners, { y: options.fromY });
            tl.set(wordInners, { willChange: "transform" }, 0);
            tl.fromTo(wordInners, { y: options.fromY }, { y: options.toY, duration: options.duration, stagger: options.stagger, ease: options.ease }, 0);
            tl.set(wordInners, { willChange: "auto" });
        }
        return tl;
    }

    play() {
        if (this.playAnimate) {
            this.playAnimate.play();
        }
        return Promise.resolve();
    }

    handlePlayAnimate() {
        this.playAnimate = this.animateWord();
    }
}
export default HomeBanner