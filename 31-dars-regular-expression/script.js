"use strict";

// Eski usuli
// new RegExp("pattern", "flags");

// Yangi usuli
//   /pattern/flag

const firstName = prompt("What is your name", "");
const regex = /a/gi;
// pattern: a
// flag: g - g matini hammasini dan qidirsin degani yani 'Global'
// flag: i - i pattern kichin bolsa ham katta bolsa ham qidiradi 'Case-insensitive'

// berilgan stringni indexini topibberadi matindan
console.log(firstName.search(regex)); // 1: index

// berilgan malumotni matindan topsa array ichiga oliberadi
console.log(firstName.match(regex)); // ["a", "a"]: array

// berilgan malumotlarni o'zgartirish
console.log(firstName.replace(/./g, "*"));
// patter ichida nuqta /./g bolsa unda berilgan hamma malumot degani
// belgilarni topish uchun \ qilib belgi qilish kerak misol: firstName.replace(/\$/g, "*")
// endi faqat gini dollar belgsini yulduscha ozgartiradi

const newRegex = /mar/gi;
// agarda matinda 'mar' degan text bolsa test methodi true return qiladi
// agar yoq bolsa false
console.log(newRegex.test(firstName));

const num = "12-34-56-78-90";
// num ichidagi '-' belgini orniga bu belgini qo'yadi ':'
console.log(num.replace(/-/g, ":")); // 12:34:56:78:90

const newRegex2 = /\d/gi; // \w, \s, \D, \W, \S
console.log(firstName.match(newRegex2)); // ["1", "2"]: array
// \d - matindan faqat gini sonlarni qidiradi: number
// \w - matindan faqat gini stringni qidiradi: string
// \s - matindan faqat gini spase yani bo'sh joy qidiradi: bo'sh joy

// \D - matindan faqat gini sonlarni bolmaganlarni qidiradi: number
// \W - matindan faqat gini stringni bolmaganlarni qidiradi: string
// \S - matindan faqat gini spase yani bolmaganlarni bo'sh joy qidiradi: bo'sh joy
