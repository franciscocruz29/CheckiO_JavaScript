import assert from "assert";

/* You are given two words or phrase. Try to verify are they anagrams or not.

Input: Two arguments as strings.

Output: Are they anagrams or not as boolean (True or False)

Precondition: 
0 < |first_word| < 100;
0 < |second_word| < 100;
Words contain only ASCII latin letters and whitespaces. */

/* Understanding the problem 

An anagram is a type of word play, the result of rearranging the letters of a word or phrase to produce a new word or phrase, 
using all the original letters exactly once.

Two words are anagrams to each other if we can get one from another by rearranging the letters. 

Anagrams are case-insensitive and don't take account whitespaces.

Examples:

"Gram Ring Mop" and "Programming" are anagrams.
"Hello" and "Ole Oh" are not anagrams.

*/

function normalize(line: string): string {
  return Array.from(line.toLowerCase().replace(/\s+/g, "")).sort().join("");
}

function verifyAnagrams(line1: string, line2: string): boolean {
  return normalize(line1) === normalize(line2);
}

assert.strictEqual(verifyAnagrams("Programming", "Gram Ring Mop"), true);
assert.strictEqual(verifyAnagrams("Hello", "Ole Oh"), false);
assert.strictEqual(verifyAnagrams("Kyoto", "Tokyo"), true);
assert.strictEqual(verifyAnagrams("Kings Lead Hat", "Talking Heads"), true);
assert.strictEqual(
  verifyAnagrams(
    "abcdefghijklmnopqrstuvwxyz",
    "Cwm fjord bank glyphs vext quiz"
  ),
  true
);
assert.strictEqual(verifyAnagrams("A telephone girl", "Repeating allo"), false);

console.log("Coding complete!");
