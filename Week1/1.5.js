// ASYNC AWAIT & PROMISES

// Meaning of Synchronous : Sequential execution of a certain task
// Meaning of Asynchronous : Happens in parts. Multiple things are context switching with each other

// Even we are single threaded, we can do multiple tasks by context switching or delegating

// How does JS performs this?

// Lets introduce setTimeOut function

function findSum(n) {
  let ans = 0;
  for (let i = 1; i <= 100; i++) {
    ans += i;
  }
  return ans;
}

function findSumTill100() {
  console.log(findSum(100));
}

let result = setTimeout(findSumTill100, 1000); // Calling an async function. When JS reaches here, JS doesn't wait here for 1s. It just goes on with next line
console.log("Sample Line to be logged");

// Busy Waiting - making an async function

function syncSleep() {
  let a = 1;
  for (let i = 0; i < 1000000000; i++) {
    a++;
  }
}

syncSleep();
console.log("Hello World!");

// Some common async functions
// 1. setTimeout
// 2. fs.readFile - to read file from filesystem
// 3. Fetch - to fetch some data from an API endpoint

// Code to read the file locally

const fs = require("fs"); // Filesystem module

fs.readFile("sample.txt", "utf-8", function (err, data) {
  console.log(data);
});

console.log("Hi"); // This will be executed before fs

// ******************************** Important point to note: If a thread is busy somewhere, it doesn't matter if another callback gets resolved. The thread will complete its operation and then will move to next resolved callback... ****************************

// CALLBACKS as a concept makes real sense in async functions. They are NEEDED in async functions. Like we used in fs function

console.log(
  "____________________________________________________________________________________________________"
);

// 2. PROMISES

// Promises are syntactical sugar that makes a code slightly more readable. In the background, it still uses Callback queue to handle callbacks.
// The reason to introduce Promises was to get rid of Callbacks.

// My own way to create asynchronous function:

// Creating a wrapper around js-provided asynchronous function (fs)

// function parthReadsFile(cb) {
//   fs.readFile("sample.txt", "utf-8", function (err, data) {
//     cb(data);
//   });
// }

// function onDone(data) {
//   console.log(data);
// }

// parthReadsFile(onDone);

// This was ugly way👆👆.

// Now, Cleaner way : Using Promises -

function parthReadsFileUsingPromise() {
  return new Promise(function (resolve) {
    fs.readFile("sample.txt", "utf-8", function (err, data) {
      resolve(data);
    });
  });
}

function onDone2(data) {
  console.log(data);
}

parthReadsFileUsingPromise().then(onDone2);

// Output -
// Inside func
// Inside Promise
// Before resolve
// This is content from sample file

// whatever we pass into then, it would basically replace the resolve function. Here onDone2(data) will take place of resolve(data)

//  SO whats happening here is that onDone2 is calling the promise to do its job

// The promise returns synchronously when JS thread reaches to it.
// On the contrary, The data of the promise comes asynchronously

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// There are 2 characters : A and B                                                                                                                                                      |
// A asks to B : Can u read this file for me B?                                                                                                                                          |
// B answers : Sure, Here's a promise. I amy or may not resolve this promise, but i will return it immediately. Please add .then() on this promise, so that i know where to send data.   |
// So B does her thing and reads file and returns the promise. It returns data to onDone2(), which gets executed on A's end                                                              |
//                                                                                                                                                                                       |
//                                                                                                                                                                                       |
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Understanding the Promise syntax:

var d = new Promise(function (onDone) {
  onDone();
});

console.log(d);

//
// Promise can be pending, resolved, rejected

// To summarize :

// What is a promise - It is just a class that makes callbacks and async functions slightly more readable

let p = new Promise();
console.log(p);
