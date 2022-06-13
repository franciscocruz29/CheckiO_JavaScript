import assert from "assert";

/* You are given two strings and you have to find an index of the second occurrence of the second string in the first one.

Input: Two strings.

Output: Int or undefined

Example: 

You need to find the second occurrence of "s" in a word "sims". 
It’s easy to find its first occurrence with a function indexOf which will point out that "s" is the first symbol in a word "sims" and therefore the index of the first occurrence is 0.
But we have to find the second "s" which is 4th in a row and that means that the index of the second occurrence (and the answer to a question) is 3. */

function secondIndex(text: string, symbol: string): number | undefined {
  let pos = text.indexOf(symbol, 1 + text.indexOf(symbol));
  return pos >= 0 ? pos : undefined;
}

console.log("Example");
console.log(secondIndex("sims", "s"));

assert.strictEqual(secondIndex("sims", "s"), 3);
assert.strictEqual(secondIndex("find the river", "e"), 12);
assert.strictEqual(secondIndex("hi", " "), undefined);
assert.strictEqual(secondIndex("hi mayor", " "), undefined);
assert.strictEqual(secondIndex("hi mr Mayor", " "), 5);
console.log("You are awesome! All tests are done!");
