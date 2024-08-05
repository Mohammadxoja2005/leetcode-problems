function subsets(nums) {
    const subset = [];
    const res = [];

    function dfs(nums, i) {
        if (i >= nums.length) {
            res.push([...subset]);
            return;
        }

        subset.push(nums[i]); // 1,2,3, 1,2, 1,3
        dfs(nums, i + 1);
        subset.pop();
        dfs(nums, i + 1);
    }

    dfs(nums, 0);
    return res;
}

// Example usage:
const nums = [1, 2, 3];
console.log(subsets(nums));