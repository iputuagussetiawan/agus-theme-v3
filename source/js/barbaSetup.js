import barba from '@barba/core';
import gsap from "gsap";
import LazyImage from './modules/LazyImage';
const lazyImage=new LazyImage();

function loadjscssfile(filename, filetype) {
    if (filetype == "js") {
        //if filename is a external JavaScript file
        const existingScript = document.querySelector('script[src="${filename}"]');
        if (existingScript) {
            existingScript.remove();
        }
        var fileref = document.createElement("script");
        fileref.setAttribute("type", "text/javascript");
        fileref.setAttribute("src", filename);
    } else if (filetype == "css") {
        //if filename is an external CSS file
        const existingCSS = document.querySelector(`link[href='${filename}']`);
        if (existingCSS) {
            existingCSS.remove();
        }
        var fileref = document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", filename);
    }
    if (typeof fileref != "undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref);
}

var scripts = {
    init: function () {
        console.log(document.getElementsByTagName("body")[0]);
        if (document.getElementsByTagName("body")[0].classList.contains("home")) {
            console.log("This is home page");
            this.homepage();
        }
        else if (document.getElementsByTagName("body")[0].classList.contains("single-portfolio")) {
            console.log("This is single-portfolio");
            this.singlePortfolio();
            lazyImage.init();
        }
    },
    homepage: function () {
            const homepageCSS = "home.css";
            const homepageJS = "home.js";
            loadjscssfile(homepageCSS, "css");
           //loadjscssfile(homepageJS, "js");
    },

    singlePortfolio: function () {
        console.log("This is single-portfolio load asste");
        const singlePortfolioCSS = "singlePortfolio.css";
        const singlePortfolioJS = "singlePortfolio.js";
        loadjscssfile(singlePortfolioCSS, "css");
        //loadjscssfile(singlePortfolioJS, "js");
},
    // blog: function () {
    //     const blogCSS = link to your custom blog css file;
    //     loadjscssfile(blogCSS, "css");
    // }
};

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
    timeout:7000,
    transitions: [{
        name: 'opacity-transition',
        once(data) {
            // do something once on the initial page load
            lazyImage.init();
        },
        leave(data) {
            return gsap.to(data.current.container, {
                opacity: 0
            });
        },
        enter(data) {
            return gsap.from(data.next.container, {
                opacity: 0
            });
        },
        beforeEnter(data) {
            lazyImage.init(); 
        },
    }]
});

barba.hooks.beforeEnter((data) => {
    console.log(data)
    if (data.current.container) {
        // only run during a page transition - not initial load
        let nextHtml = data.next.html;
        let parser = new DOMParser();
        let htmlDoc = parser.parseFromString(nextHtml.replace(/(<\/?)body( .+?)?>/gi, '$1notbody$2>', nextHtml), 'text/html');
        let bodyClasses = htmlDoc.querySelector('notbody').getAttribute('class');
        document.getElementsByTagName("body")[0].setAttribute('class', bodyClasses);
            scripts.init();
    }
});