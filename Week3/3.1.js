const express = require("express");
const app = express();

app.get("/checkup", function (req, res) {
  const kidneyId = parseInt(req.query.kidneyID); // Convert to integer
  const username = req.query.username;
  const password = req.query.password;

  if (username !== "parth" || password !== "sample") {
    res.status(403).json({
      msg: "User doesn't exist",
    });
    return;
  }

  if (kidneyId !== 1 && kidneyId !== 2) {
    res.status(411).json({
      msg: "Wrong inputs",
    });
    return;
  }

  res.send("It's all good and working");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
