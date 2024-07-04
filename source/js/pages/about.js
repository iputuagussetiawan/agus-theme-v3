//1.Import

import App from '../App';
import ScrollLetters  from "../modules/ScrollLetters";
const app=new App();
const scrollLetters = new ScrollLetters();

//2.Event
document.addEventListener("DOMContentLoaded", () => {
    app.init();
    scrollLetters.init();
});
