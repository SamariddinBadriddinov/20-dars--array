"use strict";

const arr = [1, 2, 3, 4];

// arr.unshift(0);
// console.log(arr);

arr.shift();
console.log(arr);

// ---------- massivga qoshish va olip tashash
// arr.pop();
// arr.push(5);

//console.log(arr);

// ----------
// for (let i = 0; i < arr.length; i++) {
//  console.log(arr[i]);
//}

//for (let key of arr) {
//  console.log(key);
// }

// const colors = ["red", "black", "crimson"];

// colors.forEach(function (item, index, arr) {
//   console.log(item, index, arr);
// });

// ===================

// const questions = prompt("", "");

// const answers = questions.split(", ");

// console.log(answers);

// console.log(answers.join("; "));

// ======================

const number = [2, 10, 17, 24, 8];

number.sort(sortArr);
console.log(number);

function sortArr(a, b) {
  return a - b;
}
