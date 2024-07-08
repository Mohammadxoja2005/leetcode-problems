// Example 1:
//
// Input: nums = [2,20,4,10,3,4,5]
//
// Output: 4
// Explanation: The longest consecutive sequence is [2, 3, 4, 5].
//
//     Example 2:
//
// Input: nums = [0,3,2,5,4,6,1,1]
//
// Output: 7

function longestConsecutive(nums) {
    const set = new Set(nums);
    let longestConsecutive = 1;

    for(let i = 0; i < nums.length; i++){
        if(!set.has(nums[i] - 1)){
            let length = 1;

            while(set.has(nums[i] + length)) {
                length++;
            }

            longestConsecutive = Math.max(longestConsecutive, length);
        }
    }

    return longestConsecutive;
}

const result = longestConsecutive([2,20,4,10,3,4,5]);
console.log(result);