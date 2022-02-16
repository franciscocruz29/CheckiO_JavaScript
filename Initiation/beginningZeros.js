import assert from "assert";

/* You have a string that consist only of digits. You need to find how many zero digits ("0") are at the beginning of the given string.

Input: A string, that consist of digits.

Output: An Int. */

function beginningZeros(text) {
  let count = 0;
  for(let index = 0; index < text.length; index+=1) {
      if(text[index] === '0'){
          count += 1;        
      } else {
          break;
      }
  }
  return count;
}

console.log('Example:');
console.log(beginningZeros('100'));

assert.equal(beginningZeros('100'), 0);
assert.equal(beginningZeros('001'), 2);
assert.equal(beginningZeros('100100'), 0);
assert.equal(beginningZeros('001001'), 2);
assert.equal(beginningZeros('012345679'), 1);
assert.equal(beginningZeros('0000'), 4);

console.log("Coding completed!");