import assert from "assert";

/* You are given a non-empty list of integers (X). For this task, you should return a list consisting of only the non-unique elements in this list. 
To do so you will need to remove all unique elements (elements which are contained in a given list only once). 

When solving this task, do not change the order of the list. 
Example: [1, 2, 3, 1, 3] 1 and 3 non-unique elements and result will be [1, 3, 1, 3].

Input: A list of integers.

Output: An iterable of integers. */

function nonUniqueElements(data: number[]): number[] {
    /* let result: number[] = [];
    for (let i = 0; i < data.length; i++) {
        let count = 0;
        for (let j = 0; j < data.length; j++) {
            if (data[i] === data[j]) {
                count++;
            }
        }
        if (count > 1) {
            result.push(data[i]);
        }
    }
    return result; */
    
    return data.filter((x) => data.indexOf(x) != data.lastIndexOf(x));
}

console.log("Example:");
console.log(nonUniqueElements([1, 2, 3, 1, 3]));

assert.deepStrictEqual(nonUniqueElements([1, 2, 3, 1, 3]), [1, 3, 1, 3]);
assert.deepStrictEqual(nonUniqueElements([1, 2, 3, 4, 5]), []);
assert.deepStrictEqual(nonUniqueElements([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5]);
assert.deepStrictEqual(nonUniqueElements([10, 9, 10, 10, 9, 8]), [10, 9, 10, 10, 9]);
console.log(
  "Coding complete!"
);
