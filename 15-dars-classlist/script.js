const btnsEl = document.querySelectorAll("button");

// console.log(btnsEl[0].classList.length); // 2
// console.log(btnsEl[0].classList.item(1)); // same
// btnsEl[0].classList.remove("blue");
// btnsEl[1].classList.add("blue");
// btnsEl[2].classList.toggle("blue");

if (btnsEl[0].classList.contains("blue")) {
  console.log(true);
}
