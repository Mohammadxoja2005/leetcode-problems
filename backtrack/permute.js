function permute(nums) {
    const result = [];

    function backtrack(start = 0) {
        if (start === nums.length) {
            result.push([...nums]);
            return;
        }

        for (let i = start; i < nums.length; i++) {
            console.log(start, i);
            [nums[start], nums[i]] = [nums[i], nums[start]]; // swap
            backtrack(start + 1);
            [nums[start], nums[i]] = [nums[i], nums[start]]; // swap back
        }
    }

    backtrack();
    return result;
}

// Example usage:
const nums = [1, 2, 3];
console.log(permute(nums));