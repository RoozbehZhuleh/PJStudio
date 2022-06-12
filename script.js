let width = screen.width;
const mobile = document.querySelector("#mobile");
const process = document.querySelector("#our-process");
const customize = document.querySelector("#customize");
const webDev = document.querySelector("#web-development");

const mobileScrollFunc = function () {
    let y = window.scrollY;
    if (y >= 400 && width > 1000) {

        mobile.classList.add("animate__fadeInRight");
        mobile.classList.remove("animate__fadeOutRight");
        process.classList.add("animate__fadeInLeft");
        process.classList.remove("animate__fadeOutLeft");
        customize.classList.add("animate__fadeInLeft");
        customize.classList.remove("animate__fadeOutLeft");
         webDev.classList.add("animate__fadeInLeft");
        webDev.classList.remove("animate__fadeOutLeft");
    } else if (y <= 100 && width > 1000) {
        mobile.classList.add("animate__fadeOutRight");
        mobile.classList.remove("animate__fadeInRight");
        process.classList.add("animate__fadeOutLeft");
        process.classList.remove("animate__fadeInLeft");
        customize.classList.add("animate__fadeOutLeft");
        customize.classList.remove("animate__fadeInLeft");
        webDev.classList.add("animate__fadeOutLeft");
        webDev.classList.remove("animate__fadeInLeft");
    }

    else if (width < 900) {
        mobile.classList.remove("animate__animated");
        customize.classList.remove("animate__animated");
        process.classList.remove("animate__animated");
        webDev.classList.remove("animate__animated");
    }
}
window.addEventListener("scroll", mobileScrollFunc);



// burger menu
const burgerIcon = document.querySelector(".burger__icon");
const burgerMenu = document.querySelector(".burger__menu");

burgerIcon.addEventListener("click", () => {
    burgerIcon.classList.toggle("rotate");
    burgerMenu.classList.toggle("display--block")
})
