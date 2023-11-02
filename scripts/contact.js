"use strict";

// form validation variables
const form = document.getElementById("form");
const userName = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const message = document.getElementById("message");

// form validation
form.addEventListener("submit", (e) => {
  console.log("Submission");
  e.preventDefault();
  validateInputs();
  console.log("button works");
});

// evaluating the validation
const validateInputs = () => {
  const userNameValue = userName.value;
  const phoneValue = phone.value;
  const emailValue = email.value;
  const messageValue = message.value;
  console.log(userNameValue);
  if (userNameValue === "") {
    errorMessage(userName, "Name is required");
    console.log("its empty");
  } else {
    setSuccess(userName, "Success");
    console.log("not empty");
  }
  if (phoneValue === "") {
    errorMessage(phone, "Phone number is required");
  } else if (!isValidPhone(phoneValue)) {
    errorMessage(phone, "Provide a valid phone number");
  } else {
    setSuccess(phone, "Success");
    console.log("not empty");
  }

  if (emailValue === "") {
    errorMessage(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    errorMessage(email, "Provide a valid email address");
  } else {
    setSuccess(email, "Success");
    console.log("not empty");
  }

  if (messageValue === "") {
    errorMessage(message, "Message is required");
  } else {
    setSuccess(message, "Success");
    console.log("not empty");
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

// regex to define email validity
const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
  const re = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
  return re.test(String(phone));
};
