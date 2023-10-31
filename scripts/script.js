"use strict";

let hamburgerMenu = document.querySelector(".hamburger-menu");
let closeMenu = document.querySelector(".close-menu");
let mobileNav = document.querySelector(".mobile-nav");

function noscroll() {
  window.scrollTo(0, 0);
}

hamburgerMenu.addEventListener("click", function () {
  mobileNav.classList.add("open");
  window.addEventListener("scroll", noscroll);
});

closeMenu.addEventListener("click", function () {
  mobileNav.classList.remove("open");
  window.removeEventListener("scroll", noscroll);
});
