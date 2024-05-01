"use strict";

const request = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time);
  });
};

// promise hammasi 1 2 3 sekunt oraligida ishlaydi
// request(1000).then(() => console.log("request 1000ms"));
// request(2000).then(() => console.log("request 2000ms"));
// request(3000).then(() => console.log("request 3000ms"));

// all method: hamma requestlar bajarilganidan song promis.all ishlaydi yani 3 sekuntdan so'ng
// Promise.all([request(1000), request(2000), request(3000)]).then(() => {
//   console.log("All");
// });

// race method: qaysi serverdan birinchi malumot kelsa osha promisni thenin ishga tushuradi hozirda 1 sekunda
Promise.race([request(1000), request(2000), request(3000)]).then(() => {
  console.log("Race");
});
