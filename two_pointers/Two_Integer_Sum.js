// Example 1:
//
// Input: numbers = [1,2,3,4], target = 3
//
// Output: [1,2]

function twoSum(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while(left < right) {
        let sum = nums[left] + nums[right];

        if(sum === target) {
            return [left + 1, right + 1];
        }else if(sum > target){
            right--;
        }else {
            left++;
        }
    }

    return [];

}

const result = twoSum([1,2,3,4], 3);
console.log(result);