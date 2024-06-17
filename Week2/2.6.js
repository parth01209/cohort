// map, filter and arrow functions

// function sum(a, b) {
//   return a + b;
// }

// // Arrow functions
// const sum = (a, b) => {
//   return a + b;
// };

// Given an array, give me new array in which every value is twice of original
// [1, 2, 3, 4, 5]
// [2, 4, 6, 8, 10]

// Solution - Primitive approach

const input = [1, 2, 3, 4, 5];

// const newArray = [];

// for (let i = 0; i < input.length; i++) {
//   newArray.push(input[i] * 2);
// }

// console.log(newArray);
// yields : [ 2, 4, 6, 8, 10 ]

// Better way is to use MAP function

function transform(i) {
  return i * 2;
}

// One way to use map
// input.map(transform);
// console.log(input.map(transform));

// Other way to use map

const ans = input.map(function (i) {
  return i * 2;
});
console.log(ans);

// FILTERING
// Given an input array, give back all the even values
// [1, 2, 3, 4, 5]
// [2, 4]

// return true or false
// function filtering logic(n){
//     if (n%2 == 0) return true
//     else return false;
// }

function filterLogic(n) {
  if (n % 2 == 0) return true;
  else return false;
}

// const sol = input.filter(filterLogic);
// console.log(sol);
// yields - [ 2, 4 ]

// Using callback
const sol = input.filter((n) => {
  if (n % 2 == 0) return true;
  else return false;
});
console.log(sol);

// startsWith function

console.log("part".startsWith("p"));
// true
