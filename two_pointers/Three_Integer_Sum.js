/*Example 1:

Input: nums = [-1,0,1,2,-1,-4]

Output: [[-1,-1,2],[-1,0,1]]*/

// [-1,0,1,2,-1,-4] ->

// [ -4, -1, -1, 0, 1, 2 ]

function threeSum(nums) {
    nums.sort((a,b) => a - b);

    let result = [];

    for(let i = 0; i < nums.length; i++){

        let left = i + 1;
        let right = nums.length - 1;

        if(i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        while(left < right) {
            const sum = nums[left] + nums[right] + nums[i];

            if(sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;

                while(left < right && nums[left] === nums[left - 1]) {
                    left++;
                }
            }else if(sum > 0) {
                right--;
            }else if(sum < 0) {
                left++;
            }
        }
    }

    return result;
}

const result = threeSum([-1,0,1,2,-1,-4])
console.log(result)