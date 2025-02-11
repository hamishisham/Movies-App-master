document.addEventListener("DOMContentLoaded", () => {
    let landingPage = document.querySelector(".home");
    let imageArray = ["home1.jpg", "home2.jpg", "home3.jpg"];

    function randomizeImgs() {
        setInterval(() => {
            let randomNumber = Math.floor(Math.random() * imageArray.length);
            landingPage.style.backgroundImage = `url("img/${imageArray[randomNumber]}")`;
        }, 4000);
    }

    randomizeImgs();

    let header = document.querySelector("header");
    let menuIcon = document.querySelector("#menu-icon");
    let navbar = document.querySelector("#navbar");

    // Mobile menu toggle
    menuIcon.onclick = () => {
        navbar.classList.toggle("flex");
        navbar.classList.toggle("hidden");
        navbar.classList.toggle("opacity-100"); // Smooth transition
    };

    // Hide menu on scroll
    window.onscroll = () => {
        navbar.classList.add("hidden");
        navbar.classList.remove("opacity-100");
    };

    // Change header background & text color on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.remove("text-red-500")
            header.classList.remove("bg-transparent");
            navbar.classList.add("text-black")
            header.classList.add("bg-white", "shadow-md", "text-black", "transition-all", "duration-300");
        } else {
            header.classList.remove("bg-white", "shadow-md", "text-black");
            header.classList.add("bg-transparent");
            navbar.classList.remove("text-black")
            navbar.classList.add("text-red-500")
        }
    });
});
