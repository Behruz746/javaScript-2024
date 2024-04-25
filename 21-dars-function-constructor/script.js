// "use strict";

// const number = new Function();
// console.dir(number);

// function constructor
function Car(name, color, mph) {
  this.name = name;
  this.color = color;
  this.isAirbag = true;
  this.mph = mph;
  this.speedFun = function () {
    console.log(`speed: ${mph}`);
  };
}

const bmw = new Car("BMW", "Black", 250);
const merc = new Car("MERC", "White", 280);
// function ga yana method berish 'prototype' orqali
// yangi qoshilgan methodlar obj Prototype da saqlanadi
Car.prototype.sayHello = function (name) {
  console.log(`Car name of ${this.name} say hello`);
};

console.log(bmw);
console.log(merc);

bmw.speedFun();
merc.speedFun();
bmw.sayHello();
