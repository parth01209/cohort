const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Syntax to connect the mongo database to backend
mongoose.connect(
  "mongodb+srv://parthprabhune:NEhqjHUPOnAvZ36H@cohort.1ikxavk.mongodb.net/cohortDB"
);
// Creating schema (structure)
const UserSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
});
// modelling that schema into User model
const User = mongoose.model("User", UserSchema);

app.post("/signup", async function (req, res) {
  const name = req.body.name;
  const username = req.body.username;
  const password = req.body.password;

  // Checking if user with username in body already exists. reason for using await is that findOne returns promise
  const existingUser = await User.findOne({ username: username });

  if (existingUser) return res.status(400).send("User already exists");

  // Creating new user if no user with given username exists
  const user = new User({
    name: name,
    username: username,
    password: password,
  });
  // Adding it to DB
  await user.save();
  res.status(201).send("User created successfully");
});

app.listen(3000);
