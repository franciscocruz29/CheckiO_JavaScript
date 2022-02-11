import assert from "assert";

/* Not all of the elements are important. What you need to do here is to remove from the array all of the elements before the given one.

We have two edge cases here: 

(1) if a cutting element cannot be found, then the array shoudn't be changed. 
(2) if the array is empty, then it should remain empty.

Input: Array and the border element.

Output: Array. */

function removeAllBefore(values, b) {
  if (values.includes(b)) {
    let index = values.indexOf(b);
    return values.slice(index);
  } else {
    return values;
  }
}

console.log('Example:');
console.log(removeAllBefore([1, 2, 3, 4, 5], 3));

assert.deepEqual(removeAllBefore([1, 2, 3, 4, 5], 3), [3, 4, 5]);
assert.deepEqual(removeAllBefore([1, 1, 2, 2, 3, 3], 2), [2, 2, 3, 3]);
assert.deepEqual(removeAllBefore([1, 1, 2, 4, 2, 3, 4], 2), [2, 4, 2, 3, 4]);
assert.deepEqual(removeAllBefore([1, 1, 5, 6, 7], 2), [1, 1, 5, 6, 7]);
assert.deepEqual(removeAllBefore([], 0), []);
assert.deepEqual(removeAllBefore([7, 7, 7, 7, 7, 7, 7, 7, 7], 7), [7, 7, 7, 7, 7, 7, 7, 7, 7]);

console.log("Coding completed!");