import assert from "assert";

/* You are given a string where you have to find its first word.

When solving a task pay attention to the following points:

  There can be dots and commas in a string.
  A string can start with a letter or, for example, a dot or space.
  A word can contain an apostrophe and it's a part of a word.
  The whole text can be represented with one word and that's it.

Input: A string.

Output: A string. */

function firstWord(text: string): string {
  return text.match(/[A-Za-z']+/)[0];
  // return text.replace(/[.,]/g, " ").trim().split(" ")[0];
}

console.log("Example:");
console.log(firstWord("Hello world"));

assert.strictEqual(firstWord("Hello world"), "Hello");
assert.strictEqual(firstWord(" a word "), "a");
assert.strictEqual(firstWord("don't touch it"), "don't");
assert.strictEqual(firstWord("greetings, friends"), "greetings");
assert.strictEqual(firstWord("... and so on ..."), "and");
assert.strictEqual(firstWord("hi"), "hi");
console.log("Coding complete!");
