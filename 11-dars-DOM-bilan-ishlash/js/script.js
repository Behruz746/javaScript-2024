"use strict";

const boxEL = document.querySelector(".box");
const circleEL = document.querySelectorAll(".circle");
const btnEl = document.getElementsByTagName("button");

for (let i = 0; i < btnEl.length; i++) {
  btnEl[i].textContent = `index: ${i}`;
  console.log(btnEl[i].textContent);

  btnEl[i].addEventListener(
    "click",
    (e) => (e.target.textContent = `index: ${i++}`)
  );
}

circleEL.forEach((item) => {
  item.style.backgroundColor = "#000";
  console.log(item);
});
