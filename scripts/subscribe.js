"use strict";

const footerEmail = document.getElementById("footer-email");
const subscribe = document.getElementById("subscribe");

// footer form validation (subscribe)
subscribe.addEventListener("submit", (e) => {
  console.log("Submission");
  e.preventDefault();
  validateFooterInput();
  console.log("button works");
});

// function evaluating the validation
const validateFooterInput = () => {
  const footerEmailValue = footerEmail.value;

  if (footerEmailValue === "") {
    errorMessage(footerEmail, "Email is required");
  } else if (!isValidFooterEmail(footerEmailValue)) {
    errorMessage(footerEmail, "Provide a valid email address");
  } else {
    setSuccess(footerEmail, "Success");
  }
};

// toggles classes when input is invalid
const errorMessage = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  //   inputControl.classList.remove("success");
};

// toggles classes when input is valid
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.textContent = "";
  //   inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

// regex to define email validity for footer email
const isValidFooterEmail = (footerEmail) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(footerEmail).toLowerCase());
};
