const express = require("express"); // Importing the Express.js module
const jwt = require("jsonwebtoken"); // Importing the JSON Web Token module
const jwtPassword = "123456"; // Defining a secret key for JWT

const app = express(); // Creating an instance of Express
app.use(express.json()); // Middleware to parse JSON request bodies

// Hardcoded list of users
const users_list = [
  {
    username: "parth@gmail.com",
    password: "123",
    name: "parth",
  },
  {
    username: "rahul@gmail.com",
    password: "1234",
    name: "rahul",
  },
  {
    username: "sachin@gmail.com",
    password: "12345",
    name: "sachin",
  },
];

// Function to check if a user exists in the users list
function userExists(username, password) {
  for (let i = 0; i < users_list.length; i++) {
    if (
      users_list[i].username === username &&
      users_list[i].password === password
    )
      return true; // Return true if a matching user is found
  }
  return false; // Return false if no matching user is found
}

// Route to handle user sign-in
app.post("/signin", function (req, res) {
  const { username, password } = req.body; // Destructure username and password from the request body

  // Check if user exists with provided username and password
  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User not existing", // Respond with 403 if user does not exist
    });
  }

  // Generate a JWT token with the username payload
  var token = jwt.sign({ username: username }, "shhhhhh");
  return res.json({
    token, // Respond with the generated token
  });
});

// Route to get the list of users
app.get("/users", function (req, res) {
  const token = req.headers.authorization; // Get the token from the authorization header
  try {
    const decoded = jwt.verify(token, "shhhhhh"); // Verify the token using the secret key
    const username = decoded.username; // Extract the username from the decoded token
    return res.json(users_list); // Respond with the list of users
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token", // Respond with 403 if the token is invalid
    });
  }
});

app.listen(3000); // Start the Express server on port 3000
