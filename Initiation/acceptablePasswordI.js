import assert from "assert";

/* In this mission you need to create a password verification function.

Those are the verification conditions:

  the length should be bigger than 6.
  
Input: A string.

Output: A bool. */

function isAcceptablePassword(password){
  return password.length > 6;
}

console.log('Example:');
console.log(isAcceptablePassword('short'));

assert.equal(isAcceptablePassword('short'), false);
assert.equal(isAcceptablePassword('muchlonger'), true);
assert.equal(isAcceptablePassword('ashort'), false);

console.log("Coding completed!");