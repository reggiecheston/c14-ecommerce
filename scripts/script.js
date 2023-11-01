"use strict";

// menu variables
let hamburgerMenu = document.querySelector(".hamburger-menu");
let closeMenu = document.querySelector(".close-menu");
let mobileNav = document.querySelector(".mobile-nav");

// form validation variables
const form = document.getElementById("form");
const userName = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const message = document.getElementById("message");

// disables scrolling
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

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const errorMessage = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
  // FIXME
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const userNameValue = userName.value.trim();
  const phoneValue = phone.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  if (userNameValue === "") {
    errorMessage(userName, "Name is required");
  } else {
    setSuccess(userName);
  }

  if (phoneValue === "") {
    errorMessage(phone, "Email is required");
  } else {
    setSuccess(phone);
  }

  if (emailValue === "") {
    errorMessage(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    errorMessage(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (messageValue === "") {
    errorMessage(message, "Email is required");
  } else {
    setSuccess(message);
  }
};
