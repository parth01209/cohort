const express = require("express");
const zod = require("zod");
const app = express();

// const schema = zod.array(zod.number());

const schema = zod.object({
  email: zod.string(),
  password: zod.string(),
  country: zod.literal("IN"),
});

app.use(express.json());

function userMiddleware(req, res, next) {
  const username = req.query.username;
  const password = req.query.password;
  if (username !== "parth" || password !== "sample") {
    res.status(403).json({
      msg: "User doesn't exist",
    });
  } else {
    next();
  }
}

function kidneyMiddleware(req, res, next) {
  const kidneyId = parseInt(req.query.kidneyID); // Conversion to integer
  if (kidneyId !== 1 && kidneyId !== 2) {
    res.status(411).json({
      msg: "Wrong inputs",
    });
  } else {
    next();
  }
}

// if things works fine, we will call next(), allowing control to reach next middleware or function in general

app.get("/checkup", function (req, res) {
  // const kidneyId = parseInt(req.query.kidneyID); // Conversion to integer
  // const username = req.query.username;
  // const password = req.query.password;

  // This is dumb way to do it.
  // The reason is that if we introduce 10 different routes, we'll have to do input validation for all of them, violating DRY principle
  // if (username !== "parth" || password !== "sample") {
  //   res.status(403).json({
  //     msg: "User doesn't exist",
  //   });
  //   return;
  // }

  // if (kidneyId !== 1 && kidneyId !== 2) {
  //   res.status(411).json({
  //     msg: "Wrong inputs",
  //   });
  //   return;
  // }

  res.send("It's all good and working");
});

app.get(
  "/sample-route1",
  userMiddleware,
  kidneyMiddleware,
  function (req, res) {
    res.send("Sample Route 1 working fine");
  }
);

app.get(
  "/sample-route2",
  userMiddleware,
  kidneyMiddleware,
  function (req, res) {
    res.send("Sample Route 2 working fine");
  }
);

app.post("/sample-route3", function (req, res) {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  if (!response.success) {
    res.status(411).json({
      msg: "Invalid",
    });
  }

  res.send(response);
});

// Global catches

app.use(function (err, req, res, next) {
  res.json({
    message: "Something's up with the server",
  });
});

// Errors does not propagate to users

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
