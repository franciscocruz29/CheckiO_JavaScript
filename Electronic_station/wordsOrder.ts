import assert from "assert";

/* You have a text and a list of words. You need to check if the words in a list appear in the same order as in the given text.

Cases you should expect while solving this challenge:

  a word from the list is not in the text - your function should return False;
  any word can appear more than once in a text - use only the first one;
  two words in the given list are the same - your function should return False;
  the condition is case sensitive, which means 'hi' and 'Hi' are two different words;
  the text includes only English letters and spaces.

Input: Two arguments. The first one is a given text, the second is a list of words.

Output: A bool. */

function wordsOrder(text: string, words: string[]): boolean {
    if(new Set(words).size !== words.length) {
        return false;
    }
    text.split(' ').map(word => word === words[0] ? words.shift() : '');
    return !words.length;
}

console.log("Example:");
console.log(wordsOrder("hi world im here", ["world", "here"]));


assert.deepStrictEqual(wordsOrder("hi world im here", ["world", "here"]), true);
assert.deepStrictEqual(wordsOrder("hi world im here", ["here", "world"]), false);
assert.deepStrictEqual(wordsOrder("hi world im here", ["world"]), true);
assert.deepStrictEqual(wordsOrder("hi world im here", ["world", "here", "hi"]), false);
assert.deepStrictEqual(wordsOrder("hi world im here", ["world", "im", "here"]), true);
assert.deepStrictEqual(wordsOrder("hi world im here", ["world", "hi", "here"]), false);
assert.deepStrictEqual(wordsOrder("hi world im here", ["world", "world"]), false);
assert.deepStrictEqual(wordsOrder("hi world im here", ["country", "world"]), false);
assert.deepStrictEqual(wordsOrder("hi world im here", ["wo", "rld"]), false);
assert.deepStrictEqual(wordsOrder("", ["world", "here"]), false);
assert.deepStrictEqual(wordsOrder("hi world world im here", ["world", "world"]), false);

console.log("Coding complete!");
