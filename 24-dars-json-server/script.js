const userObj = {
  name: "Behruz",
  lastName: "Madaminov",
  age: 18,
  job: "Web developer",
  sport: {
    box: true,
    football: false,
    pingpong: false,
  },
};

// chuqur clonelash
const clone = JSON.parse(JSON.stringify(userObj));
clone.sport.football = true;
console.log(clone.sport.football);
console.log(userObj.sport.football);

// objectni json formatga aylantirish
const objJson = JSON.stringify(userObj);
console.log(objJson);

// Json dan object formatiga aylantirish
const jsonObj = JSON.parse(objJson);
console.log(jsonObj);
