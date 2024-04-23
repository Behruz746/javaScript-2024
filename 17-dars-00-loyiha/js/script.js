function initDom() {
  const tabParentEl = document.querySelector(".tabheader__items");
  const tabEl = document.querySelectorAll(".tabheader__item");
  const tabContentEl = document.querySelectorAll(".tabcontent");

  function hideTabContent() {
    tabContentEl.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });
    tabEl.forEach((item) => {
      item.classList.remove("tabheader__item_active");
      console.dir(item.classList);
    });
  }

  function showTabContent(i = 0) {
    tabContentEl[i].classList.add("show", "fade");
    tabContentEl[i].classList.remove("hide");
    tabEl[i].classList.add("tabheader__item_active");
  }

  function getTab(event) {
    const target = event.target;
    if (target && target.classList.contains("tabheader__item")) {
      tabEl.forEach((item, index) => {
        if (target === item) {
          hideTabContent();
          showTabContent(index);
        }
      });
    }
  }

  showTabContent();
  hideTabContent();
  tabParentEl.addEventListener("click", (event) => getTab(event));
}

window.addEventListener("DOMContentLoaded", initDom);
