import assert from "assert";

/* You are given an expression with numbers, brackets and operators. For this task only the brackets matter. 
Brackets come in three flavors: "{}" "()" or "[]". Brackets are used to determine scope or to restrict some expression. 
If a bracket is open, then it must be closed with a closing bracket of the same type. 
The scope of a bracket must not intersected by another bracket. 
In this task you should make a decision, whether to correct an expression or not based on the brackets. Do not worry about operators and operands.

Input: An expression with different of types brackets as a string (unicode).

Output: A verdict on the correctness of the expression in boolean (True or False).

Precondition: 
There are only brackets ("{}" "()" or "[]"), digits or operators ("+" "-" "*" "/").
0 < len(expression) < 10^3 */

// Algorithm:
/* 
1. Create a stack to store the brackets.
2. Loop through the expression:
    a. If the current character is an open bracket, push it to the stack.
    b. If the current character is a close bracket, pop the stack and check if the popped character is the same as the current character.
    c. If the popped character is not the same as the current character, return false.
3. If the stack is empty, return true.
4. If the stack is not empty, return false.
*/

/* function brackets(expr: string): boolean {
  expr = expr.replace(/[^{}\[\]\(\)]/g, "");
  for (let len = -1; len !== expr.length; ) {
    len = expr.length;
    expr = expr.replace(/\{\}|\[\]|\(\)/g, "");
  }
  return expr.length === 0;
} */

function brackets(expr: string): boolean {
  let stack = [];
  for (let i = 0; i < expr.length; i++) {
    if (expr[i] == "(" || expr[i] == "{" || expr[i] == "[") {
      stack.push(expr[i]);
    } else if (expr[i] == ")" || expr[i] == "}" || expr[i] == "]") {
      let leftBracket = stack.pop();
      if (expr[i] == ")" && leftBracket != "(") {
        return false;
      } else if (expr[i] == "}" && leftBracket != "{") {
        return false;
      } else if (expr[i] == "]" && leftBracket != "[") {
        return false;
      }
    }
  }

  if (stack.length > 0) return false;

  return true;
}

console.log("Example:");
console.log(brackets("((5+3)*2+1)"));

assert.deepStrictEqual(brackets("((5+3)*2+1)"), true);
assert.deepStrictEqual(brackets("{[(3+1)+2]+}"), true);
assert.deepStrictEqual(brackets("(3+{1-1)}"), false);
assert.deepStrictEqual(brackets("[1+1]+(2*2)-{3/3}"), true);
assert.deepStrictEqual(brackets("(({[(((1)-2)+3)-3]/3}-3)"), false);
assert.deepStrictEqual(brackets("[(3)+(-1)]*{3}"), true);
assert.deepStrictEqual(brackets("(((([[[{{{3}}}]]]]))))"), false);
assert.deepStrictEqual(brackets("[1+202]*3*({4+3)}"), false);
assert.deepStrictEqual(brackets("({[3]})-[4/(3*{1001-1000}*3)/4]"), true);
assert.deepStrictEqual(brackets("[[[1+[1+1]]])"), false);
assert.deepStrictEqual(brackets("(((1+(1+1))))]"), false);
assert.deepStrictEqual(brackets("2+3"), true);

console.log("Coding complete!");
