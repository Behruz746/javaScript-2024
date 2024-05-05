"use strict";

const emailIn = document.querySelector("#email"),
  firstName = document.querySelector("#name"),
  formEl = document.querySelector("#submit-form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = {
    email: emailIn.value,
    name: firstName.value,
  };

  localStorage.setItem("user", JSON.stringify(user));
});

console.log(JSON.parse(localStorage.getItem("user")));
