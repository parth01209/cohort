// Basic implementation of Zod

const zod = require("zod");
const express = require("express");
const app = express();
function validateInput(obj) {
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
  });

  const response = schema.safeParse(obj);
  console.log(response);
}

app.post("/login", function (req, res) {
  const input = req.body;
  const response = validateInput(input);

  if (!response.success) {
    res.json({
      msg: "Invalid",
    });
    return;
  }
});
