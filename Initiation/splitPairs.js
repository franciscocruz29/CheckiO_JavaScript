import assert from "assert";

/* Split the string into pairs of two characters. If the string contains an odd number of characters, then the missing second character of the final pair should be replaced with an underscore ('_').

Input: A string.

Output: An array of strings. */

function splitPairs(text) {
  let answer = [];
  if (text.length % 2 !== 0) {
    text += '_';
  }  
  for(let index = 0; index < text.length; index+=2){
    answer.push(text.slice(index,index + 2));
  }
  return answer;
}

console.log('Example:');
console.log(splitPairs('abcd'));

assert.deepEqual(splitPairs('abcd'), ['ab', 'cd']);
assert.deepEqual(splitPairs('abc'), ['ab', 'c_']);
assert.deepEqual(splitPairs('abcdf'), ['ab', 'cd', 'f_']);
assert.deepEqual(splitPairs('a'), ['a_']);
assert.deepEqual(splitPairs(''), []);

console.log("Coding completed!");

