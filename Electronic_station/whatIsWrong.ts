import assert from "assert";

/* You have a list of family ties between father and son. Each element on this list has two elements. 
The first is the father's name, the second is the son's name. 
All names in the family are unique. Check if the family tree is correct. 
There are no strangers in the family tree. All connections in the family are natural.

Input: An array of arrays. Each element has two strings. The array has at least one element

Output: Bool. Is the family tree correct. 

Example:

isFamily([["Logan", "Mike"]]) => true

isFamily([
        ["Logan", "Mike"],
        ["Logan", "Jack"],
        ["Mike", "Alexander"],
    ]) => true

isFamily([
        ["Logan", "Mike"],
        ["Logan", "Jack"],
        ["Mike", "Logan"],
    ]) => false

Precondition: 1 <= len(tree) < 100
*/

/* Understanding the problem:

Rules:
* The father that isn’t also a son is the root of the tree
* Each son should have exactly one father
* There is only one root of the tree
* A father can't be a son of any of his children down the line
*/

function isFamily(tree: [string, string][]): boolean {
  let errors = 0;

  for (let r in tree) {
    let father = tree[r][0];
    let son = tree[r][1];
    let times = 0;
    let brothers = [];

    // TEST 1: SON CAN ONLY HAVE ONE FATHER
    for (let r1 in tree) {
      if (son === tree[r1][1] && father != tree[r1][0]) {
        errors++;
      }
    }

    // TEST 2: SON CANNOT BE A FATHER TO THEIR OWN FATHER
    for (let r2 in tree) {
      if (son === tree[r2][0] && father === tree[r2][1]) {
        errors++;
      }
      if (father === tree[r2][0] && son != tree[r2][1]) {
        brothers.push(tree[r2][1]);
      }
    }

    // TEST 3: SON CANNOT BE THE FATHER OF THEIR BROTHER
    for (let bro in brothers) {
      for (let r3 in tree) {
        if (brothers[bro] === tree[r3][1] && son === tree[r3][0]) {
          errors++;
        }
      }
    }

    // TEST 4: NOT A STRANGER
    for (let r4 in tree) {
      if (tree.length > 1) {
        if (father === tree[r4][0] || father === tree[r4][1]) {
          times++;
        } else if (son === tree[r4][0] || son === tree[r4][1]) {
          times++;
        }
      }
    }
    if (tree.length > 1 && times <= 1) {
      errors++;
    }
  }

  return errors > 0 ? false : true;
}

assert.strictEqual(isFamily([["Logan", "Mike"]]), true);
assert.strictEqual(
  isFamily([
    ["Logan", "Mike"],
    ["Logan", "Jack"],
  ]),
  true
);
assert.strictEqual(
  isFamily([
    ["Logan", "Mike"],
    ["Logan", "Jack"],
    ["Mike", "Alexander"],
  ]),
  true
);
assert.strictEqual(
  isFamily([
    ["Logan", "Mike"],
    ["Logan", "Jack"],
    ["Mike", "Logan"],
  ]),
  false
);
assert.strictEqual(
  isFamily([
    ["Logan", "Mike"],
    ["Logan", "Jack"],
    ["Mike", "Jack"],
  ]),
  false
);
assert.strictEqual(
  isFamily([
    ["Logan", "William"],
    ["Logan", "Jack"],
    ["Mike", "Alexander"],
  ]),
  false
);
assert.strictEqual(
  isFamily([
    ["Jack", "Mike"],
    ["Logan", "Mike"],
    ["Logan", "Jack"],
  ]),
  false
);

console.log("Coding complete!");
