/* Sort the given Array so that its elements end up in the decreasing frequency order, that is, the number of times they appear in elements. 
If two elements have the same frequency, they should end up in the same order as the first appearance in the Array.

Input: Iterable

Output: Iterable */

import assert from "assert";

function frequencySort(items: any[]): any[] {
  /* const counts = {};

  items.forEach((item) => {
    if (item in counts) {
      counts[item]++;
    } else {
      counts[item] = 1 / (items.indexOf(item) + 1);
    }
  });

  items.sort(function (a, b) {
    return counts[b] - counts[a];
  });

  return items; */

  let counts = {};
  items.forEach((item) => (counts[item] ? counts[item]++ : (counts[item] = 1)));
  items.sort(
    (a, b) => counts[b] - counts[a] || items.indexOf(a) - items.indexOf(b)
  );
  return items;
}

console.log("Example:");
console.log(frequencySort([4, 6, 2, 2, 6, 4, 4, 4]));

assert.deepStrictEqual(
  frequencySort([4, 6, 2, 2, 6, 4, 4, 4]),
  [4, 4, 4, 4, 6, 6, 2, 2]
);
assert.deepStrictEqual(frequencySort(["bob", "bob", "carl", "alex", "bob"]), [
  "bob",
  "bob",
  "bob",
  "carl",
  "alex",
]);
assert.deepStrictEqual(frequencySort([17, 99, 42]), [17, 99, 42]);
assert.deepStrictEqual(frequencySort([]), []);
assert.deepStrictEqual(frequencySort([1]), [1]);

console.log("Coding complete!");
