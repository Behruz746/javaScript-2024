"use strict";
let numberOfSeries;
let num = 0;

const seriesDB = {
  count: numberOfSeries,
  series: {},
  actors: {},
  genres: [],
  privat: false,
  startApp: function () {
    this.count = +prompt("Nechta serial ko’rdingiz?", "");
    while (this.count == "" || this.count == null || isNaN(this.count)) {
      this.count = +prompt("Nechta serial ko’rdingiz?", "");
    }
  },
  remeberMySeries: () => {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Oxirgi ko’rgan serialingiz?"),
        b = prompt("Nechi baxo berasiz?");
      a != null && b != null && a != "" && b != ""
        ? (seriesDB.series[a] = b)
        : i--;
    }
  },
  visibleDB: function () {
    this.privat = !this.privat;
    console.log(this.privat);
  },
  showDb: function () {
    if (!this.privat) console.log(this);
  },
  writeGenres: function () {
    // for (let i = 1; i <= 3; i++) {
    // let askGaner = prompt(`Yaxshi ko’rgan janringiz? ${i}`, "");
    // if (askGaner != null && askGaner != "") {
    //   this.genres.push(askGaner);
    // } else {
    //   console.log("siz malumot kiritmadingiz( !");
    //   i--;
    // }
    // }
    let genres = prompt(
      "Yaxshi ko'rgan janiringizni vergul bilan yozing!",
      ""
    ).toLowerCase();
    
    if (genres != null && genres != "") {
      this.genres = genres.split(", ");
      this.genres.sort(); // alfavit boyicha sort method
    } else {
      console.log("siz malumot kiritmadingiz( !");
      i--;
    }

    this.genres.forEach((item, index) => {
      console.log(`Yaxshi ko’rgan janringiz: ${index + 1} - nomi: (${item})`);
    });
  },
  detectLvlSeries: () => {
    if (numberOfSeries < 5) {
      console.log("Kam serial ko’ripsiz");
    } else if (numberOfSeries >= 5 && numberOfSeries < 10) {
      console.log("Siz classik tamoshabin ekansiz");
    } else {
      console.log("Siz serialchi zvezda ekansiz");
    }
  },
};

seriesDB.detectLvlSeries();
seriesDB.startApp();
seriesDB.remeberMySeries();
seriesDB.writeGenres();
seriesDB.visibleDB();
seriesDB.showDb();
