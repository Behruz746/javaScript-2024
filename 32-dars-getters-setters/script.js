"use strict";

const car = {
  name: "BMW",
  color: "Black",
  get carName() {
    return this.name;
  },
  set carName(name) {
    this.name = name;
  },
};

console.log(car.carName); // BMW
console.log((car.carName = "MERC")); // MERC
console.log(car.carName); // MERC
