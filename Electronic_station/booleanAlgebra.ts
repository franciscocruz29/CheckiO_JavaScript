import assert from "assert";

/* In this mission you should implement some boolean operations:
- "conjunction" denoted x ∧ y, satisfies x ∧ y = 1 if x = y = 1 and x ∧ y = 0 otherwise.
- "disjunction" denoted x ∨ y, satisfies x ∨ y = 0 if x = y = 0 and x ∨ y = 1 otherwise.
- "implication" (material implication) denoted x→y and can be described as ¬ x ∨ y. If x is true then the value of x → y is taken to be that of y. But if x is false then the value of y can be ignored; however the operation must return some truth value and there are only two choices, so the return value is the one that entails less, namely true.
- "exclusive" (exclusive or) denoted x ⊕ y and can be described as (x ∨ y)∧ ¬ (x ∧ y). It excludes the possibility of both x and y. Defined in terms of arithmetic it is addition mod 2 where 1 + 1 = 0.
- "equivalence" denoted x ≡ y and can be described as ¬ (x ⊕ y). It's true just when x and y have the same value.

You are given two boolean values x and y as 1 or 0 and you are given an operation name as described earlier. You should calculate the value and return it as 1 or 0.

Input: Three arguments. X and Y as 0 or 1. An operation name as a string.

Output: The result as 1 or 0. */

function boolean(x: number, y: number, action: string): number {
  switch (action) {
    case "conjunction":
      return x == 1 && y == 1 ? 1 : 0;
    case "disjunction":
      return x == 0 && y == 0 ? 0 : 1;
    case "implication":
      return x === 1 ? y : 1;
    case "exclusive":
      return x !== y ? 1 : 0;
    case "equivalence":
      return x === y ? 1 : 0;
  }
}

console.log("Example:");
console.log(boolean(0, 0, "conjunction"));

assert.deepStrictEqual(boolean(0, 0, "conjunction"), 0);
assert.deepStrictEqual(boolean(0, 1, "conjunction"), 0);
assert.deepStrictEqual(boolean(1, 0, "conjunction"), 0);
assert.deepStrictEqual(boolean(1, 1, "conjunction"), 1);
assert.deepStrictEqual(boolean(0, 0, "disjunction"), 0);
assert.deepStrictEqual(boolean(0, 1, "disjunction"), 1);
assert.deepStrictEqual(boolean(1, 0, "disjunction"), 1);
assert.deepStrictEqual(boolean(1, 1, "disjunction"), 1);

console.log("Coding complete!");
