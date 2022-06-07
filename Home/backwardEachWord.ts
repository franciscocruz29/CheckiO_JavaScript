import assert from "assert";

/* In a given string you should reverse every word, but the words should stay in their places.

Input: A string.

Output: A string. */

function backwardStringByWord(text: string): string {
  let result = "";
  let words = text.split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let reversedWord = "";
    for (let j = word.length - 1; j >= 0; j--) {
      reversedWord += word[j];
    }
    result += reversedWord + " "; 
  }
  return result.trim();
}

console.log("Example:");
console.log(backwardStringByWord(""));

assert.strictEqual(backwardStringByWord(""), "");
assert.strictEqual(backwardStringByWord("world"), "dlrow");
assert.strictEqual(backwardStringByWord("hello world"), "olleh dlrow");
assert.strictEqual(backwardStringByWord("hello   world"), "olleh   dlrow");
assert.strictEqual(backwardStringByWord("welcome to a game"), "emoclew ot a emag");

console.log("Coding complete!");
