
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49

// [1, 2, 3, 4, 5, 6, 7, 8, 8]


function maxArea(nums) {
    let left = 0;
    let right =  nums.length - 1;
    let maxAmountWater = 0;

    while(left < right) {
        const width = right - left;

        const height = Math.min(nums[left], nums[right]);

        maxAmountWater = Math.max(maxAmountWater, width * height);

        if(nums[left] >= nums[right]) {
            right--;
        }else if(nums[left] < nums[right]) {
            left++;
        }
    }

    return maxAmountWater;
}

const result = maxArea([1,8,6,2,5,4,8,3,7]);
console.log(result);