// Input: nums = [1,2,3,1]
// Output: true

// Example 2:

// Input: nums = [1,2,3,4]
// Output: false

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

function contains_duplicate(arr) {
    return new Set(arr).size !== arr.length;
}

const result = contains_duplicate([1,2,3,1])
console.log(result)