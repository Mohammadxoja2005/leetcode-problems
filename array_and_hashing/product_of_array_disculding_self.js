// Example 1:
//
// Input: nums = [1,2,4,6]
//
// Output: [48,24,12,8]
// Example 2:
//
// Input: nums = [-1,0,1,2,3]
//
// Output: [0,-6,0,0,0]

function productExceptSelf(nums) {
    const answer = [1];
    let left = 1;
    let right = 1;

    for(let i = 0; i < nums.length - 1; ++i) {
        left*=nums[i];

        answer.push(left);
    }


    for(let i = nums.length - 1; i >= 0; --i) {
        answer[i]*=right;
        right*=nums[i];
    }

    return answer;

}

const result = productExceptSelf([1,2,4,6])
console.log(result)
