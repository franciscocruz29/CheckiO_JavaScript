import assert from "assert";

/* You are given a string with words and numbers separated by whitespaces (one space). 
The words contains only letters. You should check if the string contains three words in succession. 
For example, the string "start 5 one two three 7 end" contains three words in succession.

Input: A string with words.

Output: The answer as a boolean. */

/* function threeWords(text: string): boolean {
  let words = text.split(" ");
  let count = 0;
  for (let word of words) {
    if (isNaN(word as any)) {
      count++;
      if (count === 3) {
        return true;
      }
    } else {
      count = 0;
    }
  }
  return false;
} */

const threeWords = t => t.split(/ /).map(Number).join().includes('NaN,NaN,NaN')

console.log("Example:");
console.log(threeWords("Hello World hello"));

assert.strictEqual(threeWords("Hello World hello"), true);
assert.strictEqual(threeWords("He is 123 man"), false);
assert.strictEqual(threeWords("1 2 3 4"), false);
assert.strictEqual(threeWords("bla bla bla bla"), true);
assert.strictEqual(threeWords("Hi"), false);
assert.strictEqual(threeWords("one two 3 four five six 7 eight 9 ten eleven 12"), true);
console.log("Coding complete!");
