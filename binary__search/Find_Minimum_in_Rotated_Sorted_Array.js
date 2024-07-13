function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;
    let res = nums[0];

    while(left <= right) {

        if(nums[left] < nums[right]) {
            res = Math.min(res, nums[left]);
            break;
        }

        const mid = Math.floor((left + right) / 2);

        res = Math.min(res, nums[mid])
        if(nums[mid] >= nums[left]) {
            left = mid + 1;
        }else {
            right = mid - 1;
        }
    }

    return res;
}

// function findMin(nums) {
//     let left = 0;
//     let right = nums.length - 1;
//     let res = nums[0];
//
//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);
//
//         res = Math.min(res, nums[mid]);
//
//         if (nums[mid] > nums[right]) {  // Minimum is to the right of mid
//             left = mid + 1;
//         } else {  // Minimum is at mid or to the left of mid
//             console.log("entered");
//             console.log(nums[right], nums[mid])
//             right = mid - 1;
//         }
//     }
//
//     return res;
// }


const result = findMin([3,1,2])
console.log(result);