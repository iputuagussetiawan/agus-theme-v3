import Navbar from './modules/Navbar'
import Magnetic from './modules/Magnetic'
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import barba from '@barba/core';

gsap.registerPlugin(ScrollTrigger)
MouseFollower.registerGSAP(gsap);
let cbMenu=document.querySelector(".cb-menu")
const navbar=new Navbar(cbMenu);
navbar.onInit();

const magneticElm = document.querySelector(".magnetic");
const magnetic = new Magnetic(magneticElm);
magnetic.onInit();

function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function initNextWord(data) {
    // update Text Loading https://github.com/barbajs/barba/issues/507
    let parser = new DOMParser();
    let dom = parser.parseFromString(data.next.html, 'text/html');
    let nextProjects = dom.querySelector('.loading-words');

    console.log(nextProjects)
    document.querySelector('.loading-words').innerHTML = nextProjects.innerHTML;
}

function initLoaderHome() { 
    var tl = gsap.timeline();
    tl.set(".loading-screen", { 
        top: "0",
    });	
    tl.set(".loading-words", { 
        opacity: 0,
        y: -50
    });

    // tl.set(".loading-words .active", { 
    //     display: "none",
    // });

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

    tl.set("html", { 
        cursor: "auto"
    },"=-1.2");

    
}

function initLoader() { 
    var tl = gsap.timeline();
    tl.set(".loading-screen", { 
        top: "0",
    });	

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


    tl.set("html", { 
        cursor: "auto",
    },"=-.8");

}


// Animation - Page transition In
function pageTransitionIn(e) {
    //console.log(e);
	var tl = gsap.timeline();

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
	// var tl = gsap.timeline();
    // let LoadingActiveLast=document.querySelector('.home-active-last')
    // LoadingActiveLast.innerHTML=e.namespace;
}

function initPageTransitions() {
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
                //console.log(data.next)
                pageTransitionOut(data.next);
                initNextWord(data);
            },
            async beforeEnter(data) {
                // initScript(); 
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


