// function calculateSum(n) {
//   let ans = 0;
//   for (let i = 1; i <= n; i++) {
//     ans += i;
//   }
//   return ans;
// }

// This is Doctor logic. if we consider doctor example. Like Doctors degree

// let ans = calculateSum(10);
// console.log(ans); // Output: 55

// But its no fun if only this machine can use this
// This is like only doctor's relatives can access doctor's logic. They do not have to find address of doctor

// Writing logic is one thing. Exposing logic to world is whole another thing. This is where HTTP comes in play

// Helps to create a hospital where people can come and find you...

// So how do u create HTTP server?
// We can write HTTP in any language. Its just a protocol.

// For now, Lets consider EXPRESS

// ---------------------------------------------------------------------------------

const express = require("express");

const app = express();
app.use(express.json());

const users = [
  {
    name: "Parth",
    kidneys: [
      {
        healthy: true,
      },
    ],
  },
];

// req, res
app.get("/consultation", function (req, res) {
  const parthKidneys = users[0].kidneys;
  numberOfKidneys = parthKidneys.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < numberOfKidneys; i++) {
    if (parthKidneys[i].healthy) numberOfHealthyKidneys += 1;
  }

  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

app.post("/consultation", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done",
  });
});

app.listen(3000);
