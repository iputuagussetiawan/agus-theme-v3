class StagerFadeUp {
    constructor(elm, e = {}) {
        // Define default parameters and merge with any passed-in options
        this.elm = elm;
        this.options = {
            type: "words",
            duration: 1.7,
            stagger: { amount: 0.6 },
            ease: "expo.out",
            ...e, // Merges additional options passed into the constructor
        };
        // Initialize GSAP timeline
        this.tl = new gsap.timeline();
        this.init();
    }

    // Method to initialize the animation
    init() {
        gsap.set(this.elm, { overflow: "hidden", verticalAlign: "top" });
        gsap.set(this.elm, { y: "200%" });
        this.tl.set(this.elm, { willChange: "transform" }, 0);
        this.tl.fromTo(
            this.elm, 
            { y: "200%" }, 
            { 
                y: "0%", 
                duration: this.options.duration, 
                stagger: this.options.stagger, 
                ease: this.options.ease 
            }, 
            0
        );
        this.tl.set(this.elm, { willChange: "auto" });
    }

    // Optional: You can add a method to return the timeline
    getTimeline() {
        return this.tl;
    }
}

export default StagerFadeUp