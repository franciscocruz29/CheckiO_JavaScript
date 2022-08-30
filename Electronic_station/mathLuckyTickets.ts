import assert from "assert";

/* Task: Given a 6-digit number of the ticket, the program should determine whether it is mathematically lucky or not.

The ticket is considered mathematically lucky if no combination of its digits evaluates to 100. 

Input: 6 digits as a string.
Output: Is it mathematically lucky or not as a boolean. 
Precondition: |digits| == 6 */

/* Understanding the problem:

The combination has to evaluate to 100 exactly to be counted as unlucky. Fractions can occur in intermediate calculations but the result must be an integer.

You are given a ticket number and the combination of its digits can become a mathematical expression by following these rules.

    1. The digits of the number can be split into groups of numbers.
    2. You cannot change the order of groups or digits.
    3. Each group is treated as a one integer number. (1 and 2 would become 12, etc.)
    4. Operational signs (+, -, * and /) are placed between the groups.
    5. Parenthesis are placed around subexpressions to eliminate any ambiguity in the evaluation order.

Examples:

  * 000000 is obviously lucky, no matter which combination you construct it always evaluates to zero
  * 707409 and 561709 are also lucky
  * 595347 is not lucky: (5 + ((9 * 5) + (3 + 47))) = 100
  * 593347 is not lucky: (5 + ((9 / (3 / 34)) - 7)) = 100
  * 271353 is not lucky: (2 - (7 * (((1 / 3) - 5) * 3))) = 100
*/

// Generate all possible ways to split up the number.
function split(numstr) {
  if (numstr.length === 0) return [[]];
  let result = [];
  for (let i = 1; i <= numstr.length; ++i) {
    for (let s of split(numstr.slice(i))) {
      result.push([Number(numstr.slice(0, i)), ...s]);
    }
  }
  return result;
}

// Check if unlucky, ignoring small floating point errors.
function isUnlucky(n) {
  return Math.abs(n - 100) < 1e-6;
}

// Try all possible ways to parenthesize and do math on the numbers.
function evalAll(numlist): Set<number> {
  if (numlist.length === 1) return new Set(numlist);

  let result = new Set<number>();
  for (let i = 1; i < numlist.length; ++i) {
    let lhsl = evalAll(numlist.slice(0, i));
    let rhsl = evalAll(numlist.slice(i));
    for (let lhs of lhsl) {
      for (let rhs of rhsl) {
        result.add(lhs + rhs);
        result.add(lhs - rhs);
        result.add(lhs * rhs);
        if (rhs !== 0) result.add(lhs / rhs);
      }
    }
  }
  return result;
}

function luckyTickets(value: string): boolean {
  let splits = split(value);

  for (let spl of splits) {
    if ([...evalAll(spl)].some(isUnlucky)) return false;
  }

  return true;
}

assert.strictEqual(luckyTickets("000000"), true);
assert.strictEqual(luckyTickets("707409"), true);
assert.strictEqual(luckyTickets("595347"), false);
assert.strictEqual(luckyTickets("271353"), false);
assert.strictEqual(luckyTickets("000955"), false);
assert.strictEqual(luckyTickets("100478"), true);
assert.strictEqual(luckyTickets("100479"), false);
assert.strictEqual(luckyTickets("725126"), true);
assert.strictEqual(luckyTickets("836403"), false);
assert.strictEqual(luckyTickets("240668"), false);
assert.strictEqual(luckyTickets("082140"), true);
assert.strictEqual(luckyTickets("574699"), false);
assert.strictEqual(luckyTickets("324347"), false);
assert.strictEqual(luckyTickets("064377"), true);
assert.strictEqual(luckyTickets("111111"), false);
assert.strictEqual(luckyTickets("555555"), false);
assert.strictEqual(luckyTickets("777777"), false);
assert.strictEqual(luckyTickets("392039"), false);

console.log("Coding complete!");
