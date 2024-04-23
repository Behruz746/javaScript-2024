"use strict";

const adsEl = document.querySelectorAll(".promo__adv img"),
  promoGenreEl = document.querySelector(".promo__genre"),
  promoBGEl = document.querySelector(".promo__bg"),
  promoInteractiveListEl = document.querySelector(".promo__interactive-list"),
  formEl = document.querySelector(".add"),
  addingInputEl = document.querySelector(".adding__input"),
  checkboxEL = document.querySelector(".checkbox"),
  itemEl = document.querySelectorAll(".promo__interactive-item");

let seriesDB = {
  series: [
    "Omar",
    "The Final Legacy",
    "Ertugrul",
    "Magnificent Century",
    "The Great Seljuks: Guardians...",
  ],
};

function initDoc() {
  adsEl.forEach((item) => item.remove());
  promoGenreEl.textContent = "Comedy";
  promoBGEl.style.backgroundImage = `url("./img/1.jpg")`;
  promoInteractiveListEl.innerHTML = "";
}

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  if (addingInputEl.value) {
    checkboxEL.checked
      ? console.log("Sevimli serial qo'shildi")
      : console.log("Odiy serila qo'shildi");
    seriesDB.series.push(addingInputEl.value.toUpperCase());
  }

  addSerial(seriesDB.series, promoInteractiveListEl);
  addingInputEl.value = "";
});

function addSerial(serials, parent) {
  parent.innerHTML = "";
  let idx = 0;

  serials.sort().forEach((item, idx) => {
    parent.innerHTML += `
    <li class="promo__interactive-item">
        ${idx + 1} ${item.length > 18 ? item.substring(0, 18) + "..." : item}
        <div class="delete"></div>
    </li>
    `;
  });

  document.querySelectorAll(".delete").forEach((item, index) =>
    item.addEventListener("click", () => {
      idx = index;
      console.log(index);
    })
  );

  function deleteItems(e) {
    if (e.target.nodeName == "DIV") {
      e.target.parentElement.remove();
      seriesDB.series.splice(idx, 1);
      // addSerial(serials, parent);
    }
  }
  promoInteractiveListEl.addEventListener("click", (e) => deleteItems(e));
}

initDoc();
addSerial(seriesDB.series, promoInteractiveListEl);
