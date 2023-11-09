import gsap from "gsap";
import { SplitText } from "../modules/splitText";
import SectionFeatures from '../sections/SectionFeatures'
import barba from '@barba/core';



function initSectionFeatured(){
    let cbFeaturedElm = document.querySelector(".featured");
    let sectionFeatured = new SectionFeatures(cbFeaturedElm);
    sectionFeatured.onInit()
}

initSectionFeatured();

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

// function pageTransition() {
//     var tl = gsap.timeline();
//     tl.to(".loading-screen", {
//         duration: 1.2,
//         width: "100%",
//         left: "0%",
//         ease: "Expo.easeInOut",
//     });

//     tl.to(".loading-screen", {
//         duration: 1,
//         width: "100%",
//         left: "100%",
//         ease: "Expo.easeInOut",
//         delay: 0.3,
//     });
//     tl.set(".loading-screen", { left: "-100%" });
// }


// barba.init({
//     sync: true,
//     views: [{
//         namespace: 'home',
//         beforeLeave() {

//         },
//         async beforeEnter() {
//             const text = new SplitText(".header");
//             var  textAnim=document.querySelectorAll(".aki__word");
//             Uc(textAnim);
//             initSectionFeatured();
//         }
//         }, {
//         namespace: 'whatwedo',
//         beforeLeave() {
//             // console.log(data)
//         },
//         beforeEnter(data) {
//             // console.log(data)
//         }
//     }],
//     transitions: [{
//         name: 'opacity-transition',
//         async leave(data) {
//             const done = this.async();
//             pageTransition();
//             await delay(1000);
//             done();
//         },

//         // async enter(data) {
//         //     contentAnimation();
//         // },

//         // async once(data) {
//         //     contentAnimation();
//         // },
//     }]
// });

// Animation - First Page Load
function initLoaderHome() { 
    var tl = gsap.timeline();
    tl.set(".loading-screen", { 
        top: "0",
    });	
    if (window.innerWidth > 540) { 
        tl.set("main .once-in", {
            y: "50vh"
        });
    } else {
        tl.set("main .once-in", {
            y: "10vh"
        });
    }
    tl.set(".loading-words", { 
        opacity: 0,
        y: -50
    });

    tl.set(".loading-words .active", { 
        display: "none",
    });

    tl.set(".loading-words .home-active, .loading-words .home-active-last", { 
        display: "block",
        opacity: 0
    });

    tl.set(".loading-words .home-active-first", { 
        opacity: 1,
    });
    if (window.innerWidth > 540) { 
        tl.set(".loading-screen .rounded-div-wrap.bottom", { 
            height: "10vh",
        });	
    } else {
        tl.set(".loading-screen .rounded-div-wrap.bottom", { 
            height: "5vh",
        });	
    }

    tl.set("html", { 
        cursor: "wait"
    });

    // tl.call(function() {
    //     scroll.stop();
    // });

    tl.to(".loading-words", {
        duration: .8,
        opacity: 1,
        y: -50,
        ease: "Power4.easeOut",
        delay: .5
    });

    tl.to(".loading-words .home-active", {
        duration: .01,
        opacity: 1,
        stagger: .15,
        ease: "none",
        onStart: homeActive
    },"=-.4");

    function homeActive() {
        gsap.to(".loading-words .home-active", {
            duration: .01,
            opacity: 0,
            stagger: .15,
            ease: "none",
            delay: .15
        });
    }
    tl.to(".loading-words .home-active-last", {
        duration: .01,
        opacity: 1,
        delay: .15
    });
    
    tl.to(".loading-screen", {
        duration: .8,
        top: "-100%",
        ease: "Power4.easeInOut",
        delay: .2
    });

    tl.to(".loading-screen .rounded-div-wrap.bottom", {
        duration: 1,
        height: "0vh",
        ease: "Power4.easeInOut"
    },"=-.8");

    tl.to(".loading-words", {
        duration: .3,
        opacity: 0,
        ease: "linear"
    },"=-.8");

    tl.set(".loading-screen", { 
        top: "calc(-100%)" 
    });	
    tl.set(".loading-screen .rounded-div-wrap.bottom", { 
        height: "0vh"
    });	

    tl.to("main .once-in", {
        duration: 1.5,
        y: "0vh",
        stagger: .07,
            ease: "Expo.easeOut",
        clearProps: true
    },"=-.8");

    tl.set("html", { 
        cursor: "auto"
    },"=-1.2");

    // tl.call(function() {
    //     scroll.start();
    // });
    
}

function initLoader() { 
    var tl = gsap.timeline();
    tl.set(".loading-screen", { 
        top: "0",
    });	

    if (window.innerWidth > 540) { 
        tl.set("main .once-in", {
            y: "50vh"
        });
    } else {
        tl.set("main .once-in", {
            y: "10vh"
        });
    }

    tl.set(".loading-words", { 
        opacity: 1,
        y: -50
    });

    if (window.innerWidth > 540) { 
        tl.set(".loading-screen .rounded-div-wrap.bottom", { 
            height: "10vh",
        });	
    } else {
        tl.set(".loading-screen .rounded-div-wrap.bottom", { 
            height: "5vh",
        });	
    }

    tl.set("html", { 
        cursor: "wait"
    });
    
    tl.to(".loading-screen", {
        duration: .8,
        top: "-100%",
        ease: "Power4.easeInOut",
        delay: .5
    });

    tl.to(".loading-screen .rounded-div-wrap.bottom", {
        duration: 1,
        height: "0vh",
        ease: "Power4.easeInOut"
    },"=-.8");

    tl.to(".loading-words", {
        duration: .3,
        opacity: 0,
        ease: "linear",
    },"=-.8");

    tl.set(".loading-screen", { 
        top: "calc(-100%)" 
    });	

    tl.set(".loading-screen .rounded-div-wrap.bottom", { 
        height: "0vh"
    });	

    tl.to("main .once-in", {
        duration: 1,
        y: "0vh",
        stagger: .05,
        ease: "Expo.easeOut",
        clearProps: "true"
    },"=-.8");

    tl.set("html", { 
        cursor: "auto",
    },"=-.8");

}


// Animation - Page transition In
function pageTransitionIn(e) {
    console.log(e);
	var tl = gsap.timeline();

    // tl.call(function() {
    //     scroll.stop();
    // });

    tl.set(".loading-screen", { 
        top: "100%" 
    });	

    tl.set(".loading-words", { 
        opacity: 0,
        y: 0
    });

    tl.set("html", { 
        cursor: "wait"
    });

    if (window.innerWidth > 540) { 
            tl.set(".loading-screen .rounded-div-wrap.bottom", { 
            height: "10vh",
        });	
    } else {
            tl.set(".loading-screen .rounded-div-wrap.bottom", { 
            height: "5vh",
        });	
    }

	tl.to(".loading-screen", {
		duration: .5,
		top: "0%",
		ease: "Power4.easeIn"
	});

    if (window.innerWidth > 540) { 
        tl.to(".loading-screen .rounded-div-wrap.top", {
        duration: .4,
        height: "10vh",
        ease: "Power4.easeIn"
        },"=-.5");
    } else {
        tl.to(".loading-screen .rounded-div-wrap.top", {
        duration: .4,
        height: "10vh",
        ease: "Power4.easeIn"
        },"=-.5");
    }

    tl.to(".loading-words", {
		duration: .8,
		opacity: 1,
        y: -50,
        ease: "Power4.easeOut",
        delay: .05
    });

    tl.set(".loading-screen .rounded-div-wrap.top", {
		height: "0vh"
	});

	tl.to(".loading-screen", {
		duration: .8,
		top: "-100%",
		ease: "Power3.easeInOut"
	},"=-.2");

    tl.to(".loading-words", {
		duration: .6,
		opacity: 0,
        ease: "linear"
	},"=-.8");

    tl.to(".loading-screen .rounded-div-wrap.bottom", {
		duration: .85,
		height: "0",
		ease: "Power3.easeInOut"
	},"=-.6");

    tl.set("html", { 
		cursor: "auto"
	},"=-0.6");

    if (window.innerWidth > 540) { 
        tl.set(".loading-screen .rounded-div-wrap.bottom", {
            height: "10vh"
        });
    } else {
        tl.set(".loading-screen .rounded-div-wrap.bottom", {
            height: "5vh"
        });
    }

    tl.set(".loading-screen", { 
        top: "100%" 
    });	

    tl.set(".loading-words", {
        opacity: 0,
    });
}


// Animation - Page transition Out
function pageTransitionOut(e) {
    // console.log('out animation')
    // console.log(e)
	var tl = gsap.timeline();
    let LoadingActiveLast=document.querySelector('.home-active-last')
    LoadingActiveLast.innerHTML=e.namespace;
    if (window.innerWidth > 540) { 
        tl.set("main .once-in", {
            y: "50vh",
        });
    } else {
        tl.set("main .once-in", {
            y: "20vh"
        });
    }
    tl.to("main .once-in", {
        duration: 1,
        y: "0vh",
        stagger: .05,
        ease: "Expo.easeOut",
        delay: .8,
        clearProps: "true"
    });
}

function initPageTransitions() {
    //let scroll;
    // do something before the transition starts
    // barba.hooks.before(() => {
    //     select('html').classList.add('is-transitioning');
    // });

    // // do something after the transition finishes
    // barba.hooks.after(() => {
    //     select('html').classList.remove('is-transitioning');
    // });
    barba.init({
        sync: true,
        debug: false,
        timeout:7000,
        transitions: [{
            name: 'default',
            once(data) {
                // do something once on the initial page load
                // initScript();
                initLoader();
            },
            async leave(data) {
                // animate loading screen in
                
                pageTransitionIn(data.current);
                await delay(495);
                data.current.container.remove();
            },
            async enter(data) {
                // animate loading screen away
                console.log(data.next)
                pageTransitionOut(data.next);
            },
            async beforeEnter(data) {
                // initScript(); 
                // initLoaderHome();
            },
        }, 
        {
            name: 'to-home',
            from: {
            },
            to: {
                namespace: ['home']
            },
            once(data) {
                // do something once on the initial page load
                // initScript();
                initLoaderHome();
            },
        }]
    });
}

initPageTransitions()

