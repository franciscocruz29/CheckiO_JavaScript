import assert from "assert";

/* In a given array the first element should become the last one. An empty array or array with only one element should stay the same.

example

Input: Array.

Output: Array. */

function replaceFirst(values) {
  return values.length > 0 ? values.slice(1).concat(values[0]) : [];
}

console.log('Example:');
console.log(replaceFirst([1, 2, 3, 4]));

assert.deepEqual(replaceFirst([1, 2, 3, 4]), [2, 3, 4, 1]);
assert.deepEqual(replaceFirst([1]), [1]);
assert.deepEqual(replaceFirst([]), []);

console.log("Coding completed!");