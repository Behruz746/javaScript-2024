"use strict";

// Function Inkapsulatsion constroctor
function Car(name, color, bonus) {
  this.name = name;
  this.color = color;
  let extrapBonus = bonus;
  this.info = function () {
    console.log(
      `Name of car ${this.name}, color is ${this.color}, there is some bonus ${extrapBonus}`
    );
  };

  this.getBonus = function () {
    return extrapBonus;
  };

  this.setBonus = function (bonus) {
    if (typeof bonus === "number" && bonus > 0 && bonus < 100) {
      extrapBonus = bonus;
    } else {
      console.log("Something went wrong");
    }
  };
}

const bmw = new Car("bmw", "#000", 10);
// console.log(bmw.getBonus());
// bmw.setBonus(20);
// bmw.info();

// Class Inkapsulatsion constroctor
class Cars {
  constructor(name, color, bonus) {
    this.name = name;
    this.color = color;
    this._extrapBonus = bonus; // _ Ladash
  }

  // Info function
  info() {
    console.log(
      `Name of car ${this.name}, color is ${this.color}, there is some bonus ${this._extrapBonus}`
    );
  }

  // getBonus function
  get bonus() {
    return this._extrapBonus;
  }

  // setBonus function
  set bonus(bonus) {
    if (typeof bonus === "number" && bonus > 0 && bonus < 100) {
      this._extrapBonus = bonus;
    } else {
      console.log("Something went wrong");
    }
  }
}

const merc = new Cars("MERC", "#fff", 10);
console.log(merc._extrapBonus);
console.log(merc.bonus);
merc.bonus = 50;
merc.info();
 