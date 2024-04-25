const boxEl = document.querySelector(".box"),
  btnEl = document.querySelector("button");

/// users see sizes
// const boxElWidth = boxEl.clientWidth;
// const boxElHeigth = boxEl.clientHeight;

/// users don't see sizes
// const boxElOffWidth = boxEl.offsetWidth;
// const boxElOffHeight = boxEl.offsetHeight;

/// scroll Height
// const boxElWidth = boxEl.scrollWidth;
const boxElHeigth = boxEl.scrollHeight;

// Computed styles
const styles = window.getComputedStyle(boxEl);

// console.log(styles); // Block

/// documentdan scroll width va heightlarni olish
console.log(document.documentElement.clientHeight);
console.log(document.documentElement.clientWidth);

btnEl.addEventListener("click", () => {
  boxEl.style.cssText = `
        height: ${boxElHeigth}px;
    `;
  console.log(boxElHeigth);
});

boxEl.addEventListener("scroll", (e) => {
  const scrollY = +e.target.scrollTop.toFixed();
  console.log(scrollY);
  btnEl.innerHTML = `${scrollY}px`;

  if (scrollY >= 100) {
    e.target.style.cssText = `
       background-color: red;
    `;
  } else {
    e.target.style.cssText = `
        background-color: white;
    `;
  }
});
