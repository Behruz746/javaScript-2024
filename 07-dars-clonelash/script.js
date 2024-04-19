"use strict";

// o'zgaruvchi malumotlarini clone qilish
// let x = 10;
// let y = x;
// y = y + 5;
// console.log(y, x);

// obj & massive clone qilish
// const numbers = {
//   x: 10,
//   y: 5,
//   z: {
//     a: 1,
//     b: 2,
//   },
// };

// function copyObject(mainObj) {
//   let obj = {};

//   for (let key in mainObj) {
//     obj[key] = mainObj[key];
//   }

//   return obj;
// }

// const obj = copyObject(numbers);
// obj.z.a = 100;
// console.log(obj, numbers);

// const numbers = {
//   x: 10,
//   y: 5,
//   z: {
//     a: 1,
//     b: 2,
//   },
// };

// const addNumbers = {
//   d: 25,
// };

// const newNumbers = Object.assign(numbers, addNumbers);
// newNumbers.z.a = 40;
// console.log(numbers);
// console.log(newNumbers);

// massivelar
const arr = [1, 2, 3];
let numbers = arr.slice();
numbers[0] = 5;
console.log(numbers, arr);

// SEREAD operator
const chelsea = ["Behruz", "Samar"];
const manCity = ["Mahrez"];
const mixPlayer = [...chelsea, ...manCity];
console.log(mixPlayer);
