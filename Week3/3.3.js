// Bank example

// I go to a bank. I create account.
// I deposit money.
// The bank manager hands me a cheque book and informs me to keep it safe
// Whenever I pay someone, I can just give him the cheque with my sign
// Everyone can see my sign
// People can try to do same sign on their cheque book or copy complete cheque book
// Bank won't accept theirs. It will only accept my cheque
// In this case, my cheque book ===> JWT

// 3 things to consider while using JWT

// 1. GENERATE  -  Creating a cheque book
// 2. DECODING  -  SomeOne else can look at my cheque book and generate their own. Other people can look and decode it.
// 3. Verification - SomeOne can not verify it. Only the backend which generated that cheque book (JWT). So backend machine + JWT ===> Tell me if its authentic.

// Example

const jwt = require("jsonwebtoken");

// decode, verify, generate

const value = {
  name: "Parth",
  accountNum: 675434565,
};

const token = jwt.sign(value, "secret");
// This token is generated by this secret key. So it can be verified using this secret only. This secret is the bank cheque book checker
// console.log(token);

// Output - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUGFydGgiLCJhY2NvdW50TnVtIjo2NzU0MzQ1NjUsImlhdCI6MTcxOTM4MzExOH0.7-b0UUkKAOwH5Rfs_UB8YLwPtms-7suojaBtyKUnSpE
// This is ur cheque book

// The intruder looks at token, copies it, decodes it, understands the structure and create their own variable

// const newVal = {
//   name: "Parth",
//   accountNum: 675434565,
// };

// const newToken = jwt.sign(newVal, "somesample"); // Intruder doesn't know secret, so he'll use some of his own
// console.log(newToken);
// Intruder gets the following token - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUGFydGgiLCJhY2NvdW50TnVtIjo2NzU0MzQ1NjUsImlhdCI6MTcxOTM4MzQ5Mn0.BRtq8OKvnku7xYoNJkYyZze3w3UF4VqG_qlneViXGHg

// Now lets take this intruder's token and see if we can verify it with our secret
// const token2 = jwt.verify(
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUGFydGgiLCJhY2NvdW50TnVtIjo2NzU0MzQ1NjUsImlhdCI6MTcxOTM4MzQ5Mn0.BRtq8OKvnku7xYoNJkYyZze3w3UF4VqG_qlneViXGHg",
//   "secret"
// );

// JsonWebTokenError: invalid signature

// But if we use token that was generated on this server using our secret key,

const token3 = jwt.verify(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUGFydGgiLCJhY2NvdW50TnVtIjo2NzU0MzQ1NjUsImlhdCI6MTcxOTM4MzgxM30.i1iJoUy492nT-JNNaB1t2vQH6oOCf7vRi5AqjS0HFj8",
  "secret"
);
