import assert from "assert";

/* Try to find out how many zeros a given number has at the end.

Input: A positive Int

Output: An Int. */

function endZeros(value) {
  let result = 0;
  
  while (value % 10 == 0){
      result += 1;
      if (value == 0){
          break;
      }
      value /= 10;
  }
  return result;
}

console.log('Example:');
console.log(endZeros(0));

assert.equal(endZeros(0), 1);
assert.equal(endZeros(1), 0);
assert.equal(endZeros(10), 1);
assert.equal(endZeros(101), 0);
assert.equal(endZeros(245), 0);
assert.equal(endZeros(100100), 2);

console.log("Coding completed!");