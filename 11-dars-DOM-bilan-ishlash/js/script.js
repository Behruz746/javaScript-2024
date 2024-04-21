"use strict";

const boxEL = document.querySelector(".box");
const circleEL = document.querySelectorAll(".circle");
const btnEl = document.querySelectorAll("button");
const heartEl = document.querySelectorAll(".heart");

// New elements
let btn = document.createElement("button");
let myCircleEl = document.createElement("div");
myCircleEl.classList.add("circle");
myCircleEl.textContent = "F";

console.dir(boxEL);

boxEL.style.cssText = `background-color: red; 
  border-radius: 20px;`;

heartEl.forEach((item) => {
  item.style.cssText = `background-color: green;`;
});

document.querySelector(".circle__wrapper").append(myCircleEl);
circleEL[1].replaceWith(myCircleEl);

document
  .querySelector(".circle__wrapper")
  .insertAdjacentHTML("beforeend", `<h1>1</h1>`);

// for (let i = 0; i < btnEl.length; i++) {
//   btnEl[i].textContent = `index: ${i}`;
//   console.log(btnEl[i].textContent);

//   btnEl[i].addEventListener(
//     "click",
//     (e) => (e.target.textContent = `count: ${i++}`)
//   );
// }

// circleEL.forEach((item) => {
//   item.style.backgroundColor = "#000";
//   console.log(item);
// });
