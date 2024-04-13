let numberOfSeries = +prompt("Nechta serial ko’rdingiz?", "")
const seriesDB = {
  count: numberOfSeries,
  series: {},
  actors: {},
  genres: [],
  privat: false,
}

for (let i = 1; i <= Infinity; i++) {
  if (!numberOfSeries == 0) break
  numberOfSeries = +prompt(
    `index prompts: ${i} / Infinity Nechta serial ko’rdingiz?`,
    ""
  )
}

let num = 0

// do {
//   let a = prompt("Oxirgi ko’rgan serialingiz?"),
//     b = prompt("Nechi baxo berasiz?")
//   a != null && b != null && a != "" && b != ""
//     ? (seriesDB.series[a] = b)
//     : num--
//   num++
// } while (num < 2)

// while (num < 2) {
//   let a = prompt("Oxirgi ko’rgan serialingiz?"),
//     b = prompt("Nechi baxo berasiz?")
//   a != null && b != null && a != "" && b != ""
//     ? (seriesDB.series[a] = b)
//     : num--
//   num++
// }

for (let i = 0; i < 2; i++) {
  let a = prompt("Oxirgi ko’rgan serialingiz?"),
    b = prompt("Nechi baxo berasiz?")
  a != null && b != null && a != "" && b != "" ? (seriesDB.series[a] = b) : i--
}

if (numberOfSeries < 5) {
  console.log("Kam serial ko’ripsiz")
} else if (numberOfSeries >= 5 && numberOfSeries < 10) {
  console.log("Siz classik tamoshabin ekansiz")
} else {
  console.log("Siz serialchi zvezda ekansiz")
}

console.log(seriesDB)
