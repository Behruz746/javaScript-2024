"use strict"

function first(cb) {
  setTimeout(() => {
    console.log("Serverdan malumot keldi)")
    cb()
  }, 2000)
}

first(() => console.log("malumot tastiqlandi++"))

// function edu(subject, callback) {
//   console.log(`I wanna teach ${subject}`) // 1
//   callback()
// }

// function done() {
//   console.log("That's great") // 2
// }

// edu("JavaScript", done)
