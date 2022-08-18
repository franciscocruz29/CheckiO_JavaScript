import assert from "assert";

/* 

You need to check that the 2 given strings are isometric. 
This means that a character from one string can become a match for characters from another string.

One character from one string can correspond only to one character from another string. 
Two or more characters of one string can correspond to one character of another string, but not vice versa.

Input: Two arguments. Both strings.

Output: Boolean.

Precondition: both strings are the same size

-Understanding the problem:

Input: Two arguments. Both strings.
Output: Boolean.
The two strings are the same size

Isometric: of, relating to, or characterized by equality of measure. This means that a character from one string can become a match for characters from another string
Two strings are isomorphic if one-to-one mapping is possible for every character of the first string to every character of the second string.

-Examples:
'add' and 'egg' are isometric because 'a' is mapped to 'e' and 'd' is mapped to 'g'
'foo' and 'bar' are not isometric because 'f' is mapped to 'b' and 'o' is mapped to 'a', but 'o' is also mapped to 'r'

-Algorithm:
1. Create an object to store the mapping of the characters
2. Loop through the first string
3. If the character is not in the object, add it to the object with the corresponding character from the second string
4. If the character is in the object, check if the corresponding character from the second string is the same as the one in the object
5. If it is not the same, return false
6. If it is the same, continue looping
7. If the loop finishes, return true
*/

function isometricStrings(line1: string, line2: string): boolean {
  let obj = {};
  for (let i = 0; i < line1.length; i++) {
    if (!obj[line1[i]]) {
      obj[line1[i]] = line2[i];
    } else if (obj[line1[i]] !== line2[i]) {
      return false;
    }
  }
  return true;
}

console.log("Example:");
console.log(isometricStrings("add", "egg"));

assert.deepStrictEqual(isometricStrings("add", "egg"), true);
assert.deepStrictEqual(isometricStrings("foo", "bar"), false);
assert.deepStrictEqual(isometricStrings("", ""), true);
assert.deepStrictEqual(isometricStrings("all", "all"), true);
assert.deepStrictEqual(isometricStrings("gogopy", "doodle"), false);

console.log("Coding complete!");
