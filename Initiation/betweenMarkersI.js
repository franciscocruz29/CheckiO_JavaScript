import assert from "assert";

/* You are given a string and two markers (the initial one and final). You have to find a substring enclosed between these two markers. 

But there are a few important conditions:

  The initial and final markers are always different.
  The initial and final markers are always 1 char size.
  The initial and final markers always exist in a string and go one after another.

Input: Three arguments. All of them are strings. The second and third arguments are the initial and final markers.

Output: A string. */

function betweenMarkers(line, left, right) {
  return line.substring(line.indexOf(left) + 1, line.indexOf(right));
}

console.log('Example:');
console.log(betweenMarkers('What is >apple<', '>', '<'));

assert.equal(betweenMarkers('What is >apple<', '>', '<'), 'apple');
assert.equal(betweenMarkers('What is [apple]', '[', ']'), 'apple');
assert.equal(betweenMarkers('What is ><', '>', '<'), '');
assert.equal(betweenMarkers('[an apple]', '[', ']'), 'an apple');

console.log("Coding completed!");