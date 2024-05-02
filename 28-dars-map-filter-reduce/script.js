"use strict";

const cars = ["Merc", "Bmw", "RolCe RoyCe"];
const num = [4, 32, 1, 3];

// map - mehtod: massiveni ozgartirib yangi massive hosil qilibber adi
const arr = cars.map((item) => {
  return item.toLowerCase();
});

// filter - method: massiveni bironbir narsaga qarab filter qiladi va yangi massive hosil qiladi
// const arr = cars.filter((item) => {
//   return item.length < 5;
// });

// some/every - methods: boolean qitmat qaytaradi
// some massive ichida bitta malumot true bolsa yani korsatilgan malumot massive ichida bolsa
// bolmasa unda "true" return beradi agar bolmasa "false"
// console.log(cars.some((item) => typeof item === "number"));

// every massive dagi hammamalumotni tekshirib malumot true hammasi togri
// kelsa true qaytaradi lekin bitasi togri kelmsa false
// console.log(cars.every((item) => typeof item === "number"));

// reduce - method masiveni bitta bironbir malumotga aylantiradi
// const res = num.reduce((sum, current) => sum + current);
const strCar = arr.reduce((sum, current) => `${sum}, ${current}`);
console.log(strCar);

// console.log(arr);
