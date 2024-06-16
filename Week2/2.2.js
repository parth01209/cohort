// What is ECMAScript? - It is specification (document/ owners of JS standard) on which JavaScript is based

// What is JavaScript? - Scripting language that conforms to ECMAScript specification. It also includes DOM manipulation for web development, not defined in ECMAScript
// So when we want to use setTimeout, filesystem, we use web APIs. They are not defined INSIDE JS like int, var, Date(), etc.

// Common JS browser engines - V8, SpiderMonkey. These are written in C and Rust. They compile JS code to 0s and 1s

// What is HTTP server - Some code that follows HTTP protocol and is able to communicate with client device.

// 1. Client throwing some information at server (HTTP request)
// 2. Server doing something wth that information.
// 3. Server responding back with result (HTTP response)

// It can be thought of as function.\
// We take input, perform logic on it, return a value.
// HTTP is calling a function on someone else's machine

// Following are the things that client needs to worry about.
// 1. Protocol (HTTP/HTTPS)
// 2. Address (URL, IP, PORT)
// 3. Routes
// 4. Headers, Body message, query parameters
// 5. Method (GET, PUT, POST, etc)

// Express is used to communicate with server and establish communication
