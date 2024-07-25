const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://parthprabhune:NEhqjHUPOnAvZ36H@cohort.1ikxavk.mongodb.net/cohortDB",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      tlsInsecure: true, // Add this option to bypass SSL/TLS issues (use with caution)
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  });

const UserSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);

app.post("/signup", async (req, res) => {
  const { name, username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).send("User already exists");
    }

    const user = new User({ name, username, password });
    await user.save();
    res.status(201).send("User created successfully");
  } catch (error) {
    console.error("Error during user signup:", error);
    res.status(500).send("Internal server error");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
