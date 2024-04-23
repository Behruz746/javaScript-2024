"use strict";

const btnBlockEL = document.querySelector(".btn-block");

btnBlockEL.addEventListener("click", (e) => {
  if (e.target && e.target.nodeName === "BUTTON") {
    console.log("click button");
  }

  if (e.target && e.target.classList.contains("blue")) {
    console.log("click blue button");
  }

  if (e.target && e.target.matches("blue")) {
    console.log("click blue button");
  }

  if (e.target && e.target.classList.value === "") {
    console.log("click none class");
  }
});
