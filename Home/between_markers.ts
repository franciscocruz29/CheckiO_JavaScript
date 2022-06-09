import assert from "assert";

/* You are given a string and two markers (the initial and final). You have to find a substring enclosed between these two markers. 

But there are a few important conditions:

  The initial and final markers are always different.
  If there is no initial marker, then the first character should be considered the beginning of a string.
  If there is no final marker, then the last character should be considered the ending of a string.
  If the initial and final markers are missing then simply return the whole string.
  If the final marker comes before the initial marker, then return an empty string.

Input: Three arguments. All of them are strings. The second and third arguments are the initial and final markers.

Output: A string. */

function betweenMarkers(text: string, begin: string, end: string): string {
  const p1 = text.includes(begin) ? text.indexOf(begin) + begin.length : 0;
  const p2 = text.includes(end) ? text.indexOf(end) : text.length;
  return text.slice(p1, p2);
}

console.log("Example:");
console.log(betweenMarkers("What is >apple<", ">", "<"), "apple");

assert.strictEqual(betweenMarkers("What is >apple<", ">", "<"), "apple");
assert.strictEqual(
  betweenMarkers(
    "<head><title>My new site</title></head>",
    "<title>",
    "</title>"
  ),
  "My new site"
);
assert.strictEqual(betweenMarkers("No[/b] hi", "[b]", "[/b]"), "No");
assert.strictEqual(betweenMarkers("No [b]hi", "[b]", "[/b]"), "hi");
assert.strictEqual(betweenMarkers("No hi", "[b]", "[/b]"), "No hi");
assert.strictEqual(betweenMarkers("No <hi>", ">", "<"), "");
console.log(
  "Coding complete!"
);
