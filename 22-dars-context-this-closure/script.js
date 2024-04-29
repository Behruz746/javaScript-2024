// // "use strict";

// // contect this - kalit so'zi nimagadur qaram
// // functionni contexti yani 'this' hardoyim windowga qaram bo'ladi
// // agarda qatir rejim yoniq bolsa "use strict"; context = undefined ga teng
// // faqatgina function declarationda ishlamaydi "use strict"; bilan
// function logger(a, b) {
//   console.log(this);
//   function num() {
//     console.log(this);
//     return a + b;
//   }
//   console.log(num());
// }

// logger(99, 1);

// const obj = {
//   x: 10,
//   y: 10,
//   fun: function () {
//     console.log(this);
//     console.log(this.x);
//     console.log(this.y);
//   },
// };

// obj.fun();

// function Car(name, color) {
//   this.name = name;
//   this.color = color;
//   this.isAirbag = true;
// }

// const merc = new Car("MERC", "Black");

function logger(speed) {
  console.log(`car name: ${this.name}, car speed: ${speed}`);
  console.log(this);
}

const car = {
  name: "BMW",
  color: "Black",
};

// call, apply, bind
logger.call(car, 200);
logger.apply(car, [200]);

function calc(num) {
  return this * num;
}

const multilpe2 = calc.bind(2);
console.log(multilpe2(10));

const btnEl = document.querySelector("button");

btnEl.addEventListener("click", function () {
  console.log(this);
  this.style.width = "250px";
});

const obj = {
  x: 10,
  y: 10,
  sum: function () {
    const logger = () => {
      console.log(this);
    };

    logger();
  },
};

obj.sum();
