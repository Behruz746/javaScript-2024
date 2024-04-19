"use strict"
let numberOfSeries
let num = 0

function startApp() {
  numberOfSeries = +prompt("Nechta serial ko’rdingiz?", "")
  while (
    numberOfSeries == "" ||
    numberOfSeries == null ||
    isNaN(numberOfSeries)
  ) {
    numberOfSeries = +prompt("Nechta serial ko’rdingiz?", "")
  }
}

const seriesDB = {
  count: numberOfSeries,
  series: {},
  actors: {},
  genres: [],
  privat: false,
}

function remeberMySeries() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Oxirgi ko’rgan serialingiz?"),
      b = prompt("Nechi baxo berasiz?")
    a != null && b != null && a != "" && b != ""
      ? (seriesDB.series[a] = b)
      : i--
  }
}

function showDb(val) {
  if (!val.privat) console.log(val)
}

function writeGenres() {
  for (let i = 1; i <= 3; i++) {
    let askGaner = prompt(`Yaxshi ko’rgan janringiz? ${i}`, "")
    seriesDB.genres.push(askGaner)
  }
}

function detectLvlSeries() {
  if (numberOfSeries < 5) {
    console.log("Kam serial ko’ripsiz")
  } else if (numberOfSeries >= 5 && numberOfSeries < 10) {
    console.log("Siz classik tamoshabin ekansiz")
  } else {
    console.log("Siz serialchi zvezda ekansiz")
  }
}

startApp()
remeberMySeries()
detectLvlSeries()
writeGenres()
showDb(seriesDB)
