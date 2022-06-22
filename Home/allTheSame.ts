import assert from "assert";

/* In this mission you should check if all elements in the given Array are equal.

Input: Array.

Output: Bool. */

function allTheSame(elements: any[]): boolean {
  return elements.every(elem => elem === elements[0]);
}

console.log("Example:");
console.log(allTheSame([1, 1, 1]));

assert.strictEqual(allTheSame([1, 1, 1]), true);
assert.strictEqual(allTheSame([1, 2, 1]), false);
assert.strictEqual(allTheSame(["a", "a", "a"]), true);
assert.strictEqual(allTheSame([]), true);
assert.strictEqual(allTheSame([1]), true);
console.log("Coding complete!");
