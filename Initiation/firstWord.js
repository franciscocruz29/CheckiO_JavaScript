import assert from "assert";

/* You are given a string where you have to find its first word.

Input string consists of only english letters and spaces.
There aren’t any spaces at the beginning and the end of the string.

Input: A string.

Output: A string. */

function firstWord(text) {
    return text.split(' ')[0];
}

console.log('Example:');
console.log(firstWord('Hello world'));


assert.equal(firstWord('Hello world'), 'Hello');
assert.equal(firstWord('a word'), 'a');
assert.equal(firstWord('hi'), 'hi');

console.log("Coding completed!");