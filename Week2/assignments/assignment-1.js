// Try to code a counter in Javascript It should go up as time goes by in intervals of 1 second

let counter = 0;

function incrementCounter() {
  counter++;
  console.log(counter);
}

setInterval(incrementCounter, 1000);
