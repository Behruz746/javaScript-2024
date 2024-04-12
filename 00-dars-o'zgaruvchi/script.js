"use strict"
man = 10

const borderStyle = "solid"
const person = {
  name: "Behruz",
  age: 18,
}
// Old versions
var name = "Behruz"
number = 20
person.age = 19

// Number data in js
let number = 1.6
console.log(8 / 0)
console.log("Behruz" * 19)

// String
let String = "Behruz"

// Bollean
const isMarred = true
if (isMarred) console.log(`Marred: ${isMarred}`)

// Null
// console.log(clientAge) // clientAge is not defined

// Undefined
let und
console.log(und) // undefined

// Object
const thief = {
  // key: value
  age: 30,
  jacket: "Black",
  isLong: false,
  func: () => console.log("function"),
}

thief.func()
console.table(thief)

// Array
const arrColors = ["Red", "Black", "Green"]
console.log(arrColors[0]) // Red