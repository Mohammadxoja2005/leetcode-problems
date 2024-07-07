// Example 1:
//
// Input:
//     nums = [3,4,5,6], target = 7
//
// Output: [0,1]
// Explanation: nums[0] + nums[1] == 7, so we return [0, 1].
//
//     Example 2:
//
// Input: nums = [4,5,6], target = 10
//
// Output: [0,2]

function twoSum(nums, target) {
    const map = new Map();
    const result = [];

    for(let i = 0; i < nums.length; i++) {
        const diffNum = target - nums[i];

        if(map.has(diffNum)) {
            result.push(map.get(diffNum), i);
        }

        map.set(nums[i], i);
    }

    return result;
}

const result = twoSum([3,4,5,6], 7);

console.log(result);