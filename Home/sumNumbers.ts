import assert from "assert";

/* In a given text you need to sum the numbers. 
Only separated numbers should be counted. If a number is part of a word it shouldn't be counted.

The text consists from numbers, spaces and english letters

Input: A string.

Output: An int. */

function sumNumbers(test: string): number {
  let count = 0;
  for (let word of test.split(" ")) {
    if (!isNaN(word as any)) {
      count += Number(word);
    }
  }
  return count;

  /* return test
    .split(/\s+/)
    .map(Number)
    .filter(isFinite)
    .reduce((accum, n) => accum + n, 0); */
}

console.log("Example:");
console.log(sumNumbers("hi"));

assert.strictEqual(sumNumbers("hi"), 0);
assert.strictEqual(sumNumbers("who is 1st here"), 0);
assert.strictEqual(sumNumbers("my numbers is 2"), 2);
assert.strictEqual(
  sumNumbers(
    "This picture is an oil on canvas " +
      "painting by Danish artist Anna " +
      "Petersen between 1845 and 1910 year"
  ),
  3755
);
assert.strictEqual(sumNumbers("5 plus 6 is"), 11);
assert.strictEqual(sumNumbers(""), 0);

console.log("Coding complete!");
