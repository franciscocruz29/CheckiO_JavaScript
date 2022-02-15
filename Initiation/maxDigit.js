import assert from "assert";

/* You have a number and you need to determine which digit in this number is the biggest.

Input: A positive int.

Output: An Int (0-9). */

function maxDigit(value) {
  let numberArray = Array.from(String(value), Number);
  return Math.max(...numberArray);
}

console.log('Example:');
console.log(maxDigit(0));

assert.equal(maxDigit(0), 0);
assert.equal(maxDigit(52), 5);
assert.equal(maxDigit(634), 6);
assert.equal(maxDigit(1), 1);
assert.equal(maxDigit(10000), 1);

console.log("Coding completed!");