// LOOPS, FUNCTIONS AND CALLBACKS

// 1. LOOPS

// let ans = 1 + 2 + 3 + ....

// This becomes impractical after certain limit. This is where loops come into picture.
// When u know u want to do some repeated logic over certain range, u should prefer LOOPS to iterate the logic again and again

// Solution using loops

let ans = 0; // First line that runs

for (let i = 1; i <= 100; i++) {
  // 'let' part will run first (initialization). Then comparator section runs. If its true, Statement will execute, else, I'll break.
  ans += i; // Fourth this line runs
  // After body of loop is completed, we increment the value of i
  // Initialization happens only once. Rest steps keep happening until i becomes 101.
}

console.log(ans);
// Output - 5050

// 2. FUNCTIONS

// Set of statements that perform a task or calculates value. It does some logic. It takes some input, perform logic on input and return an output.

// Function Declaration - Assigning task to a helper named - findSum, while giving it tools to do so (input and body)
function findSum(n) {
  let ans = 0;
  for (let i = 1; i <= 100; i++) {
    ans += i;
  }
  return ans;
}

// Function Call - Instructing helper to perform the task now.
let sol = findSum(100);
console.log(sol);
// Output - 5050

// Need to use Function?
// 1. Makes the codebase look more cleaner
// 2. Use of Function resonates with fundamental principle of DRY
// 3. If question changed, only one change needs to be made in the logic, if a function is used.

// 3. CALLBACK FUNCTIONS

// Art of calling one function inside another function

function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function sumOfSquares(a, b) {
  const val1 = square(a);
  const val2 = square(b);

  const res = val1 + val2;
  return res;
}

function sumOfCubes(a, b) {
  const val1 = cube(a);
  const val2 = cube(b);

  const res = val1 + val2;
  return res;
}

console.log(sumOfSquares(1, 5));

// Above code violates DRY principle.
// Better approach to this is Callback function -

function modifiedSquare(n) {
  return n * n;
}

function modifiedSumOfSomething(a, b, fn) {
  const val1 = fn(a);
  const val2 = fn(b);
  return val1 + val2;
}

let res = modifiedSumOfSomething(3, 5, square); // Whoever is calling me, just tell me do u want square, cube , 4th power, etc as parameter
console.log(res);
// Output - 34

// ANONYMOUS FUNCTION

const answer = modifiedSumOfSomething(2, 2, function (n) {
  return n * n * n;
});

console.log(answer);
