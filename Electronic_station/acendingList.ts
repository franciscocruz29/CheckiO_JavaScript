import assert from "assert";

/* Determine whether the sequence of elements items is ascending so that its each element is strictly larger 
than (and not merely equal to) the element that precedes it.

Input: Iterable with ints.

Output: Bool. */

function isAscending(values: number[]): boolean {
    const len: number = values.length;

    if (len === 0 || len === 1) {
      return true;
    }

    for (let i = 0; i < len - 1; i += 1) {
      if (values[i] >= values[i + 1]) {
        return false;
      }
    }
    return true;
}

console.log("Example:");
console.log(isAscending([-5, 10, 99, 123456]));

assert.deepStrictEqual(isAscending([-5, 10, 99, 123456]), true);
assert.deepStrictEqual(isAscending([99]), true);
assert.deepStrictEqual(isAscending([4, 5, 6, 7, 3, 7, 9]), false);
assert.deepStrictEqual(isAscending([]), true);
assert.deepStrictEqual(isAscending([1, 1, 1, 1]), false);

console.log("Coding complete!");
