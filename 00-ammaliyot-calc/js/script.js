"use strict"
const InputEl = document.getElementById("calc-input")
let runnigTotal = 0
let buffer = "0"
let previousOperater

function btnClick(value) {
  if (isNaN(value)) {
    handleSymbol(value)
  } else {
    handleNumber(value)
  }
  InputEl.innerHTML = buffer
}

function handleSymbol(sybel) {
  switch (sybel) {
    case "C":
    case "CE":
      buffer = "0"
      runnigTotal = 0
      break
    case "=":
      if (previousOperater === null) return
      flushOperation(parseInt(buffer))
      previousOperater = null
      buffer = runnigTotal
      runnigTotal = 0
      break
    case "←":
      buffer.length === 1
        ? (buffer = "0")
        : (buffer = buffer.substring(0, buffer.length - 1))
      break
    case "+":
    case "-":
    case "×":
    case "÷":
    case "%":
      handleMath(sybel)
      break
  }
}

function handleNumber(numberString) {
  buffer === "0" ? (buffer = numberString) : (buffer += numberString)
}

function flushOperation(intBuffer) {
  if (previousOperater === "+") {
    runnigTotal += intBuffer
  } else if (previousOperater === "-") {
    runnigTotal -= intBuffer
  } else if (previousOperater === "×") {
    runnigTotal *= intBuffer
  } else if (previousOperater === "÷") {
    runnigTotal /= intBuffer
  } else if (previousOperater === "%") {
    runnigTotal %= intBuffer
  }
}

function handleMath(symbol) {
  if (buffer === "0") return
  const intBuffer = parseInt(buffer)
  runnigTotal === 0 ? (runnigTotal = intBuffer) : flushOperation(intBuffer)
  previousOperater = symbol
  buffer = "0"
}

function calcSmilled(toggle) {
  if (toggle) {
    document
      .querySelector(".calc__container")
      .classList.toggle("calc__container--smill")
  } else {
    document
      .querySelector(".calc__container")
      .classList.toggle("calc__container--delete")
    InputEl.innerHTML = "0"
  }
}

function init() {
  document
    .querySelector(".calc__methods__container")
    .addEventListener("click", (event) => btnClick(event.target.innerHTML))
}
document
  .querySelector(".calc__smil")
  .addEventListener("click", () => calcSmilled(true))
document
  .querySelector(".calc__delete")
  .addEventListener("click", () => calcSmilled(false))
document
  .querySelector(".clac__icon")
  .addEventListener("click", () => calcSmilled(false))

init()
