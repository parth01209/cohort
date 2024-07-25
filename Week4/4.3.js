// Databases usually allow access to 4 primitives
// 1. Create data
// 2. Read data
// 3. Update data
// 4. Delete data

const { default: mongoose } = require("mongoose");

// Defining schema is useful in MongoDB
// Ex:

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  purchasedCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
});

const User = mongoose.model("User", UserSchema);

User.create({
  username: req.body.username,
});
