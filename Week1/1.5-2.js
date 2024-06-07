// To summarize 1.5,
// What is a promise - It is just a class that makes callbacks and async functions slightly more readable

// let p = new Promise();
// console.log(p);

// Output for this -

// let p = new Promise();

// TypeError: Promise resolver undefined is not a function
//     at new Promise (<anonymous>)
//     at Object.<anonymous> (D:\cohort\Week1\1.5-2.js:4:9)
//     at Module._compile (node:internal/modules/cjs/loader:1254:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
//     at Module.load (node:internal/modules/cjs/loader:1117:32)
//     at Module._load (node:internal/modules/cjs/loader:958:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
// at node:internal/main/run_main_module:23:47

// So, whenever we create a promise, we need to pass in a function as the first argument which has resolve as the first argument.

let p2 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("I am just testing this for Promises");
  }, 1000);
});

// console.log(p2);
p2.then(function (data) {
  console.log(data);
  //   console.log(p2);
});
// console.log(p2);
// Output -
// Promise { <pending> }

// Lets take an example of promise that gets resolved immediately

let p3 = new Promise(function (resolve) {
  resolve("Hello World"); // ALPHA
});

p3.then(function () {
  console.log(p3);
});

// Output - Promise { 'Hello World' }

// Whenever we are defining a promise, the goal is at high level. You do some asynchronous magic at place of line ALPHA, like database call, file read, etc. Once this is done, u call resolve.
// .then() gets called when async function resolves  !!!

// NEXT IMPORTANT CONCEPT - REAL BENEFIT OF PROMISES -

//                                             ***************************************** ASYNC - AWAIT SYNTAX *****************************************

// Acts as a substitute to PROMISES. Makes the syntax even more cleaner.
// So, if Promises = Syntactic Sugar
// Async-Await = Syntactic Saccharin 😅😅

// Syntax of async - await

const fs = require("fs");

function parthReadsFile() {
  return new Promise(function (resolve) {
    fs.readFile("sample.txt", "utf-8", function (err, data) {
      resolve(data);
    });
  });
}

async function main() {
  let val = await parthReadsFile();
  console.log("Hi There ");
  console.log(val);
}

main();

// Output - This is content from sample file

// We got rid of all .then() syntax
// No callbacks, No .then()

// IMPORTANT POINT - Usually used on the caller side, not on the side where you define an async function

// If a function wants to use await keyword, it has to be an async function

// Final Word - CALLBACK syntax, PROMISES (then) syntax, ASYNC - AWAIT syntax are behind the curtains same things and does similar ops
