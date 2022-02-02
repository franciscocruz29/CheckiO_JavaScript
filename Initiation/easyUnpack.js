import assert from "assert";

/* Your mission here is to create a function that gets an array and 
returns an array with 3 elements - the first, third and second element from the last for the given array.

Input: An array, at least 3 elements long.

Output: An array. */

function easyUnpack(values) {
  return [values[0], values[2], values[values.length - 2]];
}

console.log('Example:');
console.log(easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]));


assert.deepEqual(easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]), [1, 3, 7]);
assert.deepEqual(easyUnpack([1, 1, 1, 1]), [1, 1, 1]);
assert.deepEqual(easyUnpack([6, 3, 7]), [6, 7, 3]);
assert.deepEqual(easyUnpack([5,5,5,5,5,5]), [5,5,5]);

console.log("Coding completed!");