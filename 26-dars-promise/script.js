"use strict";

// const isFrendCome = true;

// const meetingRequest = new Promise((resolve, reject) => {
//   if (isFrendCome) {
//     const smg = "Frend i'm there";
//     resolve(smg);
//   } else {
//     const err = "I can not come there";
//     reject(err);
//   }
// });

// meetingRequest
//   .then((smg) => console.log(smg))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("I'm calling you"));
console.log("Request data...");

const req = new Promise((resolve, reject) => {
  setTimeout(() => {
    const product = {
      name: "car",
      color: "#000",
    };

    console.log("Procesting data...");
    resolve(product);
  }, 2000);
});

req
  .then((data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        data.status = "ordered";
        console.log("Get data...");
        resolve(data);
      }, 2000);
    });
  })
  .then((result) => console.log(result))
  .finally(() => console.log("Fetching end)"));
