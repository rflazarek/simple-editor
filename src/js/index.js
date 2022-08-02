import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */


// textarea.addEventListener("click", (e)=>{
//     console.log("dupa");
// })
save.addEventListener("click", (e) => {
e.preventDefault();
localStorage.setItem("entry", textarea.value);
})

load.addEventListener("click", (e) => {
    e.preventDefault();
    textarea.value = localStorage.getItem("entry");
    })