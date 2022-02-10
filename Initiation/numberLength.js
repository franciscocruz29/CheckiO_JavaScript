import assert from "assert";

/* You have a positive integer. Try to find out how many digits it has?

Input: A positive Int

Output: An Int. */

function numberLength(value) {
  return value.toString().length;
}

console.log('Example:');
console.log(numberLength(10));

assert.equal(numberLength(10), 2);
assert.equal(numberLength(0), 1);
assert.equal(numberLength(4), 1);
assert.equal(numberLength(44), 2);

console.log("Coding completed!");