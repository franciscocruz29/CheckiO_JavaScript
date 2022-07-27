import assert from "assert";

/* Check if a given string has all symbols in upper case. If the string is empty or doesn't have any letter in it - function should return False.

Input: A string.

Output: a boolean. */

function isAllUpper(text: string): boolean {
  return text === (text.match(/[a-zA-Z]/) && text.toUpperCase());
}

console.log("Example:");
console.log(isAllUpper("ALL UPPER"));

assert.deepStrictEqual(isAllUpper("ALL UPPER"), true);
assert.deepStrictEqual(isAllUpper("all lower"), false);
assert.deepStrictEqual(isAllUpper("mixed UPPER and lower"), false);
assert.deepStrictEqual(isAllUpper(""), false);

console.log("Coding complete!");
