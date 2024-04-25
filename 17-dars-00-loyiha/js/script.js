function initDom() {
  const tabParentEl = document.querySelector(".tabheader__items");
  const tabEl = document.querySelectorAll(".tabheader__item");
  const tabContentEl = document.querySelectorAll(".tabcontent");
  const loaderEl = document.querySelector(".loader");

  //  LOADER
  setTimeout(() => {
    loaderEl.style.opcity = "0";
    setTimeout(() => {
      loaderEl.style.display = "none";
    }, 500);
  }, 2000);

  // TAB
  function hideTabContent() {
    tabContentEl.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });
    tabEl.forEach((item) => {
      item.classList.remove("tabheader__item_active");
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

  // TIMER
  const deadline = "2024-12-31";
  function getTimeRemaining(endTime) {
    let days, hours, minutes, seconds;

    const timer = Date.parse(endTime) - Date.parse(new Date());

    if (timer <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      (days = Math.floor(timer / (1000 * 60 * 60 * 24))), // Kunni chiqarish
        (hours = Math.floor((timer / (1000 * 60 * 60)) % 24)), // Soatni olish uchun
        (minutes = Math.floor((timer / 1000 / 60) % 60)), // Minutlarni olish uchun
        (seconds = Math.floor((timer / 1000) % 60)); // seconds olish uchun
    }

    return { timer, days, hours, minutes, seconds };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endTime) {
    const timerEl = document.querySelector(selector),
      daysEl = timerEl.querySelector("#days"),
      hoursEl = timerEl.querySelector("#hours"),
      minutesEl = timerEl.querySelector("#minutes"),
      secondsEl = timerEl.querySelector("#seconds"),
      timeInterval = setInterval(upDateClock, 1000);

    function upDateClock() {
      const t = getTimeRemaining(endTime);
      daysEl.innerHTML = getZero(t.days);
      hoursEl.innerHTML = getZero(t.hours);
      minutesEl.innerHTML = getZero(t.minutes);
      secondsEl.innerHTML = getZero(t.seconds);
      if (t.timer < 0) clearInterval(timeInterval);
    }
  }
  setClock(".timer", deadline);

  // Modal
  const modalTrigger = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal"),
    modalClose = document.querySelector("[data-close]");

  function showModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    clearTimeout(modalTimer);
  }

  function removeModel() {
    modal.classList.remove("show");
    modal.classList.add("hide");
    document.body.style.overflow = "auto";
  }

  function removeInModal(e) {
    if (e.target && e.target === modal) removeModel();
  }

  function removeKeyModal(e) {
    if (e.keyCode === 27 && modal.classList.contains("show")) removeModel();
  }

  function showModalbyScroll() {
    const currentScrollPosition = +window.pageYOffset.toFixed();
    const windowScreen = document.documentElement.clientHeight;

    if (
      currentScrollPosition + windowScreen >=
      document.documentElement.scrollHeight
    ) {
      showModal();
      window.removeEventListener("scroll", showModalbyScroll);
    }
  }

  modalTrigger.forEach((item) => item.addEventListener("click", showModal));
  modalClose.addEventListener("click", removeModel);
  modal.addEventListener("click", removeInModal);
  window.addEventListener("keydown", removeKeyModal);
  window.addEventListener("scroll", showModalbyScroll);
  const modalTimer = setTimeout(showModal, 5000);
}

window.addEventListener("DOMContentLoaded", initDom);
