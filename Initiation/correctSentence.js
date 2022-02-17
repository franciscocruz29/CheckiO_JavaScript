import assert from "assert";

/* For the input of your function, you will be given one sentence. You have to return a corrected version, that starts with a capital letter and ends with a period (dot).

Pay attention to the fact that not all of the fixes are necessary. If a sentence already ends with a period (dot), then adding another one will be a mistake.

Input: A string.

Output: A string. */

function correctSentence(text) {
  return text.includes('.') ? text[0].toUpperCase() + text.slice(1) : text[0].toUpperCase() + text.slice(1) + '.';
}

console.log('Example:');
console.log(correctSentence('greetings, friends'));

assert.equal(correctSentence('greetings, friends'), 'Greetings, friends.');
assert.equal(correctSentence('Greetings, friends'), 'Greetings, friends.');
assert.equal(correctSentence('Greetings, friends.'), 'Greetings, friends.');

console.log("Coding completed!");