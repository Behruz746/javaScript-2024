"use strict";

const btnEl = document.querySelector("#btn");

function myAnimtion() {
  const carEl = document.querySelector(".car");
  let pos = 0;
  const timerId = setInterval(freme, 10);
  function freme() {
    if (pos === 700) {
      clearInterval(timerId);
    } else {
      pos++;
      carEl.style.left = `${pos}px`;
    }
  }
}

btnEl.addEventListener("click", myAnimtion);

// btnEl.addEventListener("click", () => {
//   const timer = setTimeout(logger, 1000);
// });

// const timer = setTimeout(logger, 1000);
// clearInterval(timer);

// function logger() {
//   console.log("set time out");
// }

// let id = setTimeout(function log() {
//   console.log("Hello log def");
//   id = setTimeout(log, 1000);
// }, 1000);

// setTimeout(() => {
//   console.log("set time out");
// }, 1000);
