const jwt = require("jsonwebtoken");
const zod = require("zod");
const jwtPassword = "secret";

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJWT(username, password) {
  const userNameResponse = emailSchema.safeParse(username);
  const passwordResponse = passwordSchema.safeParse(password);

  if (!userNameResponse.success || !passwordResponse.success) return null;

  const signature = jwt.sign(
    {
      username,
    },
    jwtPassword
  );

  return signature;
}

function decode(token) {
  const decoded = jwt.decode(token);
  if (decoded) return true;
  return false;
}

function verifyJWT(token) {
  try {
    const verified = jwt.verify(token, jwtPassword);
    if (verified) return true;
  } catch (e) {
    console.log("Error");
  }
  return false;
}

console.log(
  verifyJWT(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBhcnRoQGdtYWlsLmNvbSIsImlhdCI6MTcxOTU4NTcxNH0.YxHjNoo7DZ5mpXum3ZFy3W9cwTqzWojTTp5tkN7pixE",
    "sret"
  )
);
// console.log(decode("ssacsdfsrdf"));
