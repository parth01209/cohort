// When we hit the run button on our JS program, something starts executing the code. That code does not have access to our complete machine. It asks the OS permission to read the file (For file reading example)
// JS does delegates some task so that it can work on next line
// It is good for the thread to delegate task to someone as the call stack remains available
// If a thread is busy doing something, it will keep doing it. If a callback is made during this tme. It will have to wait in callback queue.
// Example of async JS

function onDone() {
  console.log("Hi There");
}

setTimeout(onDone, 1000);
console.log("After setTimeout");

for (let i = 0; i < 100000; i++) {
  // Some looping logic
}

// Ideally if JS was completely synchronous, the single thread will wait at setTimeout for 1s and then log the next console.log line

// Output -
// After setTimeout
// Hi There

// So thread does not get stuck at something, if that something is Asynchronous function.

// Another example of asynchronous function is Sending a Network Request.

// Whenever we create our own async function, we basically create a wrapper around pre-existing async function provided by JS.

// Example of this approach:

function myOwnSetTimeout(fn, duration) {
  setTimeout(fn, duration);
}

myOwnSetTimeout(function () {
  console.log("Hi");
}, 1000);

// This is using callback. It may lead to callback hell if nested calls are made.

// Promises comes to the rescue here.

// Approach 2 : Using Promises

function myOwnSetTimeoutUsingPromises(duration) {
  return new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
}

myOwnSetTimeoutUsingPromises(1000).then(function () {
  console.log("Hello World!");
});

// This basically returns a Promise.

// In callback, we send something to our function. Like, Hey you have to do this after thing is done.
// In callback, Promise sends us a Promise, that the thing is done, tell me what u want me to do
