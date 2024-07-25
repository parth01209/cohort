// Try catch block

function getLength(name) {
  return name.length;
}

try {
  const ans = getLength();
  console.log(ans);
} catch (e) {
  console.log("An error is caught"); // If any error is caught, control reaches here
}

console.log("After try catch block");

// Benefit : Line 14 will always run
