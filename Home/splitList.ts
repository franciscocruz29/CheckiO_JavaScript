import assert from "assert";

/* You have to split a given array into two arrays. 
If it has an odd amount of elements, then the first array should have more elements. 
If it has no elements, then two empty arrays should be returned.

Input: List.

Output: List of two lists. */

function splitList(values: number[]): number[][] {
  /* if (values.length === 0) {
    return [[], []];
  }
  if (values.length % 2 === 0) {
    return [
      values.slice(0, values.length / 2),
      values.slice(values.length / 2),
    ];
  }
  if (values.length % 2 === 1) {
    return [
      values.slice(0, Math.floor(values.length / 2) + 1),
      values.slice(Math.floor(values.length / 2) + 1),
    ];
  } */

  const n = Math.floor((values.length + 1) / 2);
  return [values.slice(0, n), values.slice(n)];
}

console.log("Example:");
console.log(splitList([1, 2, 3, 4, 5, 6]));

assert.deepStrictEqual(splitList([1, 2, 3, 4, 5, 6]), [
  [1, 2, 3],
  [4, 5, 6],
]);
assert.deepStrictEqual(splitList([1, 2, 3]), [[1, 2], [3]]);
assert.deepStrictEqual(splitList([1, 2, 3, 4, 5]), [
  [1, 2, 3],
  [4, 5],
]);
assert.deepStrictEqual(splitList([1]), [[1], []]);
assert.deepStrictEqual(splitList([]), [[], []]);

console.log("Coding complete!");
