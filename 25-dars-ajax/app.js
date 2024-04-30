"use strict";

const usz = document.querySelector("#uzs"),
  usd = document.querySelector("#usd");

usz.addEventListener("input", (e) => {
  const request = new XMLHttpRequest();
  // open method malumot olinishi yoki yuklanishini yozish GET va malumot qayerga ketadi yoki boradi
  request.open("GET", "json/currnet.json");
  // malumotni qanday turdaligini yozish
  request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
  // malumot olish yoku yuborish
  request.send();

  request.addEventListener("load", () => {
    if (request.status === 200) {
      const data = JSON.parse(request.response); // keladigan malumot
      usd.value = (+usz.value / data.current.usd).toFixed();
      // keladigan malumot
      console.log(data);
      console.log((+usz.value / data.current.usd).toFixed());
    } else {
      usd.value = "Something went wrong";
    }
  });

  // send dan keladigan malumotlar)
  // status: 200 - current, 404 - error, 500 - server error
  // statusText:
  // response: keladigan malumot
  // readyState:  malumot ni holati yuborilyapti, yuklandi, yuklanyapti bo'lishi munkun 0, 1, 2, 3, 4
});
