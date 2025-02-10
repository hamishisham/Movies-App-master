document.addEventListener("DOMContentLoaded", () => {
  let landingPage = document.querySelector(".home");
  let imageArray = ["home1.jpg", "home2.jpg", "home3.jpg"];

  function randomizeImgs() {
      setInterval(() => {
          let randomNumber = Math.floor(Math.random() * imageArray.length);
          landingPage.style.backgroundImage = 'url("img/' + imageArray[randomNumber] + '")';
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
  };

  // Hide menu on scroll
  window.onscroll = () => {
      navbar.classList.add("hidden");
  };

  // Change header background on scroll
  window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
          header.classList.add("bg-white", "shadow-md", "text-black");
          header.classList.remove("bg-transparent");
      } else {
          header.classList.remove("bg-white", "shadow-md", "text-black");
          header.classList.add("bg-transparent");
      }
  });
});
