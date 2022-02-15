import assert from "assert";

/* Check if a given string has all symbols in upper case. If the string is empty or doesn't have any letter in it - function should return True.

Input: A string.

Output: a boolean. */


function isAllUpper(text) {
    return text === text.toUpperCase();
}

console.log('Example:');
console.log(isAllUpper('ALL UPPER'));

assert.equal(isAllUpper('ALL UPPER'), true);
assert.equal(isAllUpper('all lower'), false);
assert.equal(isAllUpper('mixed UPPER and lower'), false);
assert.equal(isAllUpper(''), true);

console.log("Coding completed!");