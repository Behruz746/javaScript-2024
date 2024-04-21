"use strict";

// OOP asoslari
let cars = {
  mator: true,
  color: "black",
  isAirBag: true,
  isSpeed: () => console.log(320),
};

let GM = {
  isAirBag: false,
};

let bmw = Object.create(cars);
Object.setPrototypeOf(GM, cars);
GM.isSpeed();
console.log(bmw.color);

// GM.__proto__ = cars;

// console.log(GM.isSpeed());
