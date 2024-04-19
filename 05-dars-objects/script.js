"use strict"
let count = 0

const theif = {
  jacket: "Black",
  height: 1.7,
  colors: {
    hair: "gray",
    style: "curley",
  },
  howOut: function () {
    console.log("out in window")
  },
}
// theif.howOut()

// const { hair, style } = theif.colors
// console.log(hair, style)

// object uchun iteratsiya yani skil for loop
// for (let key in theif) {
//   count++
//   if (typeof theif[key] === "object") {
//     for (let i in theif.colors)
//       console.log(`Property: ${i} has value: ${theif[key][i]}`)
//   } else {
//     console.log(`Property: ${key} has value: ${theif[key]}`)
//   }
// }

// console.log(count) // 3

// get object length with object keys
// console.log(Object.keys(theif).length) // array

// delete obj data
// delete theif.jacket

const newUser = {
  userName: "Behruz",
  lastName: "Madaminov",
  age: 18,
  color: {
    bodySkin: "white",
    userHair: "brown",
    eyes: "brown",
  },
  heigth: 1.7,
  speed: "h/25km",
}

const { userName, lastName, age, color, heigth, speed } = newUser
const { bodySkin, userHair, eyes } = color
console.log(userName, lastName, age, bodySkin, userHair, eyes)
