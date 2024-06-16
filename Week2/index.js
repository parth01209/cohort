const express = require("express"); // Import the express module

const app = express(); // Call express function to create an app object
app.use(express.json()); // Middleware to parse JSON bodies in requests

// Define a GET route handler for "/route-handler"
app.get("/route-handler", function (req, res) {
  // Respond with a JSON object containing name and age
  res.json({
    name: "Parth",
    age: 25,
  });
});

// Define a GET route handler for the root URL "/"
app.get("/", (req, res) => {
  // Respond with a plain text "Hello world"
  res.send("Hello world");
});

// Define a POST route handler for "/backend-api/conversation"
app.post("/backend-api/conversation", function (req, res) {
  // Log the entire request body to check its structure
  console.log("Request body:", req.body);

  // Extract the message from the request body
  const message = req.body.message;
  console.log("Message:", message);

  // Respond with a JSON object containing a message
  res.json({
    message: message,
  });
});

// Start the server on port 3000
app.listen(3000, () => {
  // Log a message indicating that the server is running
  console.log("App running");
});
