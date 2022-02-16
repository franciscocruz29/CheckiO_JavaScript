import assert from "assert";

/* Find the nearest value to the given one. You are given a list of values as Array form and a value for which you need to find the nearest one.

A few clarifications:

  If 2 numbers are at the same distance, you need to choose the smallest one;
  The set of numbers is always non-empty, i.e. the size is >=1;
  The given value can be in this set, which means that it’s the answer;
  The set can contain both positive and negative numbers, but they are always integers;
  The set isn’t sorted and consists of unique numbers.

Input: Two arguments. A list of values in the Array form. The sought value is an int.

Output: Int. */

function nearestValue(arr, num) {
  return arr.sort((a, b) => Math.abs(num - a) - Math.abs(num - b) || a - b)[0];
}

console.log('Example:');
console.log(nearestValue([4, 7, 10, 11, 12, 17], 9));

assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 9), 10);
assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 8), 7);
assert.equal(nearestValue([4, 8, 10, 11, 12, 17], 9), 8);
assert.equal(nearestValue([4, 9, 10, 11, 12, 17], 9), 9);
assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 0), 4);
assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 100), 17);
assert.equal(nearestValue([5, 10, 8, 12, 89, 100], 7), 8);
assert.equal(nearestValue([-1, 2, 3], 0), -1);

console.log("Coding completed!");