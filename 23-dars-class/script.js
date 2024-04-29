"use strict";

// function Objer(name, color) {
//   this.name = name;
//   this.color = color;
// }

// const supra = new Objer("Supra", "#d00");
// console.log(supra);

class Car {
  // constructor class ichidagi obj malumotlarni olish uchun
  constructor(name, color, speed) {
    this.name = name;
    this.color = color;
    this.speed = speed;
  }

  // clacSpeed class ichidagi methodni nomi
  calcSpeed() {
    let speedTry = this.speed >= 5 ? "💀" : "🗿";
    let carsSpeed = `${this.speed * 100} ${speedTry}`;
    return carsSpeed;
  }
}

// Car classini extends vorisini yani malumotlarini Spark classiga otqazib ishlatish
class Spark extends Car {
  constructor(name, color, speed, isAirbag, extraBallon) {
    // bazi malumotlarni agar eski classdan olmoqchi bolsak unda super() methodini ishlatamiz va classni boshida turish kerak
    super(name, color, speed);
    this.isAirbag = isAirbag;
    this.extraBallon = extraBallon;
  }

  // method
  logger() {
    console.log(
      `name of car ${this.name} color is ${this.color}. Is car speed ${this.speed}. Is air bag there ${this.isAirbag}. Are there extra ballon ${this.extraBallon}`
    );
  }
}

const aboutCar = new Spark("Spark", "white", 160, true, 5);
aboutCar.logger();
console.log(aboutCar.calcSpeed());

// const bmw = new Car("BMW", "#000", 3);
// const merc = new Car("MERC", "#fff", 5);

// console.log(bmw);
// console.log(bmw.calcSpeed());

// console.log(merc);
// console.log(merc.calcSpeed());
