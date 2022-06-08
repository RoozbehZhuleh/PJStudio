mobile = document.querySelector("#mobile");
process = document.querySelector("#our-process");
customize = document.querySelector("#customize");
webDev = document.querySelector("#web-development");

const mobileScrollFunc = function () {
    let y = window.scrollY;
    if (y >= 400) {
        mobile.classList.add("animate__fadeInRight");
        mobile.classList.remove("animate__fadeOutRight");
        process.classList.add("animate__fadeInLeft");
        process.classList.remove("animate__fadeOutLeft");
        customize.classList.add("animate__fadeInLeft");
        customize.classList.remove("animate__fadeOutLeft");
         webDev.classList.add("animate__fadeInLeft");
        webDev.classList.remove("animate__fadeOutLeft");
    } else if (y <= 100) {
        mobile.classList.add("animate__fadeOutRight");
        mobile.classList.remove("animate__fadeInRight");
        process.classList.add("animate__fadeOutLeft");
        process.classList.remove("animate__fadeInLeft");
        customize.classList.add("animate__fadeOutLeft");
        customize.classList.remove("animate__fadeInLeft");
        webDev.classList.add("animate__fadeOutLeft");
        webDev.classList.remove("animate__fadeInLeft");
    }
    else if (y >= 1000) {
       
    }
    else if (y >= 950) {
    }
}
window.addEventListener("scroll", mobileScrollFunc);




// const processScrollFunc = function () {
//     let y = window.scrollY;
// };
// window.addEventListener("scroll", processScrollFunc);



