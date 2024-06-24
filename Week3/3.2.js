// Database (MongoDB, SQL), Fetch and Authentication

// Authentication
// 1. Hashing :

// when we sign in on any website, the passwords are generally hashed while storing
// The password is converted into some weird format
// But a certain password will always generate the same hash code.
// Given a Hash, u can never tell what the original string was

// JSON WEB TOKENS (JWT)
// a) JSON - It will take some json as input and gives u a long string.
// b) Web - It is used in web applications
// c) Token - Ex: When u log in to chatgpt and check for Headers in networks tab, u will c an Authorization Header, which is a very long string.
//                This is a JWT token. It is used to verify that u are logged in.

// Local Storage -
// When we sign up on any website, the backend hands us a JWT. But how is this token stored and used when needed each time.
// It can be stored in Local storage
