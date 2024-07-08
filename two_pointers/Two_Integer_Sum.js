// Example 1:
//
// Input: numbers = [1,2,3,4], target = 3
//
// Output: [1,2]

function twoSum(nums, target) {
    const result = [];
    let left = 0;
    let right = nums.length - 1;

    while(left < right) {
        let sum = nums[left] + nums[right];

        result.push(nums[left], nums[right]);

        if(result.includes(nums[left])) {
           left++;
           continue;
        }

        if(result.includes(nums[right])) {
            right--;
            continue;
        }

        if(sum === target) {
            return result;
        }else if(sum > target){
            right--;
        }else {
            left++;
        }
    }

    return undefined;

}

const result = twoSum([1,2,3,4], 3);
console.log(result);