// "use strict";

// contect this - kalit so'zi nimagadur qaram
// functionni contexti yani 'this' hardoyim windowga qaram bo'ladi
// agarda qatir rejim yoniq bolsa "use strict"; context = undefined ga teng
// faqatgina function declarationda ishlamaydi "use strict"; bilan
function logger(a, b) {
  console.log(this);
  function num() {
    console.log(this);
    return a + b;
  }
  console.log(num());
}

logger(99, 1);

const obj = {
  x: 10,
  y: 10,
  fun: function () {
    console.log(this);
    console.log(this.x);
    console.log(this.y);
  },
};

obj.fun();

function Car(name, color) {
  this.name = name;
  this.color = color;
  this.isAirbag = true;
}

const merc = new Car("MERC", "Black");
