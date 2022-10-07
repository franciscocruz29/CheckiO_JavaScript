import assert from "assert";

/* For this mission, you need to determine whether the given point lies inside the polygon.

Input: Two arguments. Polygon coordinates as a tuple of tuples with two integers each. A checking point coordinates as a tuple of two integers.

Output: Whatever the point inside the polygon or not as a boolean.

Precondition:
all(x ≥ 0 and y ≥ 0 for x, y in polygon)
point[0] ≥ 0 and point[1] ≥ 0 */

/* Understanding the problem:

For the purpose of this mission, a city structure may be considered a polygon represented as a sequence of vertex coordinates on a plane or map. 
The vertices are connected sequentially with the last vertex in the list connecting to the first.

We are given the coordinates of the point which we need to check. 
If the point of impact lies on the edge of the polygon then it should be considered inside it.

Examples: 

isInside([[1, 1], [1, 3], [3, 3], [3, 1]], [2, 2]) == true

isInside([[1, 1], [1, 3], [3, 3], [3, 1]], [4, 2]) == false

isInside([[1, 1], [4, 1], [2, 3]], [3, 2]) == true

isInside([[1, 1], [4, 1], [1, 3]], [3, 3]) == false

isInside([[2, 1], [4, 1], [5, 3], [3, 4], [1, 3]], [4, 3]) == true

The point-in-polygon (PIP) problem asks whether a given point in the plane lies inside, outside, or on the boundary of a polygon.

https://www.geeksforgeeks.org/how-to-check-if-a-given-point-lies-inside-a-polygon/

*/

// https://www.algorithms-and-technologies.com/point_in_polygon/javascript
/**
 * Performs the even-odd-rule Algorithm (a raycasting algorithm) to find out whether a point is in a given polygon.
 * This runs in O(n) where n is the number of edges of the polygon.
 *
 * @param {Array} polygon an array representation of the polygon where polygon[i][0] is the x Value of the i-th point and polygon[i][1] is the y Value.
 * @param {Array} point   an array representation of the point where point[0] is its x Value and point[1] is its y Value
 * @return {boolean} whether the point is in the polygon (not on the edge, just turn < into <= and > into >= for that)
 */
const isInside = function (polygon, point) {
  //A point is in a polygon if a line from the point to infinity crosses the polygon an odd number of times
  let odd = false;
  //For each edge (In this case for each point of the polygon and the previous one)
  for (let i = 0, j = polygon.length - 1; i < polygon.length; i++) {
    //If a line from the point into infinity crosses this edge
    if (
      polygon[i][1] >= point[1] !== polygon[j][1] >= point[1] && // One point needs to be above, one below our y coordinate
      // ...and the edge doesn't cross our Y coordinate before our x coordinate (but between our x coordinate and infinity)
      point[0] <=
        ((polygon[j][0] - polygon[i][0]) * (point[1] - polygon[i][1])) /
          (polygon[j][1] - polygon[i][1]) +
          polygon[i][0]
    ) {
      // Invert odd
      odd = !odd;
    }
    j = i;
  }
  //If the number of crossings was odd, the point is in the polygon
  return odd;
};

assert.strictEqual(
  isInside(
    [
      [1, 1],
      [1, 3],
      [3, 3],
      [3, 1],
    ],
    [2, 2]
  ),
  true
);
assert.strictEqual(
  isInside(
    [
      [1, 1],
      [1, 3],
      [3, 3],
      [3, 1],
    ],
    [4, 2]
  ),
  false
);
assert.strictEqual(
  isInside(
    [
      [1, 1],
      [4, 1],
      [2, 3],
    ],
    [3, 2]
  ),
  true
);
assert.strictEqual(
  isInside(
    [
      [1, 1],
      [4, 1],
      [1, 3],
    ],
    [3, 3]
  ),
  false
);
assert.strictEqual(
  isInside(
    [
      [2, 1],
      [4, 1],
      [5, 3],
      [3, 4],
      [1, 3],
    ],
    [4, 3]
  ),
  true
);
assert.strictEqual(
  isInside(
    [
      [2, 1],
      [4, 1],
      [3, 2],
      [3, 4],
      [1, 3],
    ],
    [4, 3]
  ),
  false
);
assert.strictEqual(
  isInside(
    [
      [1, 1],
      [3, 2],
      [5, 1],
      [4, 3],
      [5, 5],
      [3, 4],
      [1, 5],
      [2, 3],
    ],
    [3, 3]
  ),
  true
);
assert.strictEqual(
  isInside(
    [
      [1, 1],
      [1, 5],
      [5, 5],
      [5, 4],
      [2, 4],
      [2, 2],
      [5, 2],
      [5, 1],
    ],
    [4, 3]
  ),
  false
);

console.log("Coding complete!");
