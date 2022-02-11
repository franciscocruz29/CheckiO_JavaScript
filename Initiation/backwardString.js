import assert from "assert";

/* You should return a given string in reverse order.

Input: A string.

Output: A string. */

function backwardString(value) {
  return value.split("").reverse().join("");
}

console.log('Example:');
console.log(backwardString('val'));

assert.equal(backwardString('val'), 'lav');
assert.equal(backwardString(''), '');
assert.equal(backwardString('ohho'), 'ohho');
assert.equal(backwardString('123456789'), '987654321');

console.log("Coding completed!");