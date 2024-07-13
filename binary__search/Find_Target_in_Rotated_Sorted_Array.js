function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while(left <= right) {

        console.log("ffsd",nums[left], nums[right]);
        console.log("ffsd",left, right);

        const mid = Math.floor((left + right) / 2);
        console.log(mid, nums[mid]);

        if(nums[mid] === target) {
            return mid;
        }

        if (nums[left] <= nums[mid]) {
            console.log("entered first")
            if(nums[left] > target || target > nums[mid]) {
                console.log("we are gonna go with right side element")
                left = mid + 1;
            }else if(nums[left] <= target) {
                console.log("we are gonna go with left side element")
                right = mid - 1;
            }
        }else {
            console.log("entered second")
            if(target < nums[mid] || target > nums[right]) {
                console.log("we are gonna go with left side element")
                right = mid - 1;
            }else if(target > nums[mid] || target < nums[right]) {
                console.log("we are gonna go with right side element")
                left = mid + 1;
            }
        }

    }
    return -1;
}

const result = search([3,4,5,6,1,2], 6)
console.log(result);

function search(nums, target) {
    if (nums.length === 0) {
        return -1;
    }

    let left = 0;
    let right = nums.length - 1;

    // Finding the pivot
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    const pivot = left;
    left = 0;
    right = nums.length - 1;

    // Determining which part of the array to search in
    if (target >= nums[pivot] && target <= nums[right]) {
        left = pivot;
    } else {
        right = pivot - 1;
    }

    // Standard binary search
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

// Example usage
const result = search([3, 4, 5, 6, 1, 2], 6);
console.log(result);  // Output: 3
