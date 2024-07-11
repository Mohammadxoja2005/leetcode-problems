// Input: height = [0,2,0,3,1,0,1,3,2,1]
//
// Output: 9

function trap(nums) {
    let left = 0;
    let right = nums.length - 1;
    let maxAreaOfTrappedWater = 0;
    let leftMax =  nums[left];
    let rightMax = nums[right];

    while(left < right) {
        if(nums[left] <= nums[right]) {
            left++;
            leftMax = Math.max(leftMax, nums[left]);
            maxAreaOfTrappedWater+= leftMax - nums[left];
        }else if(nums[left] > nums[right]) {
            right--;
            rightMax = Math.max(rightMax, nums[right]);
            maxAreaOfTrappedWater+= rightMax - nums[right];
        }
    }

    return maxAreaOfTrappedWater;

}

const result = trap([0,2,0,3,1,0,1,3,2,1]);
console.log(result);