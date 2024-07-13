function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;
    let res = nums[0];

    while(left < right) {
        const mid = Math.floor((left + right) / 2);

        res = Math.min(res, nums[mid])
        if(nums[mid] > nums[left]) {
            left = mid + 1;
        }else if(nums[mid] < nums[left]) {
            right = mid - 1;
        }
    }

    return res;
}

const result = findMin([4,5,6,7,0,1,2])
console.log(result);