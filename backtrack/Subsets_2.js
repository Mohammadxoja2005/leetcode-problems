// Input: nums = [1,2,1]
//
// Output: [[],[1],[1,2],[1,1],[1,2,1],[2]]

function subsetsWithDup(nums) {
    const res = [];
    const sub = [];

    nums.sort((a, b) => a - b);

    function back(nums, start) {
        res.push([...sub]);

        for(let i = start; i < nums.length; ++i) {
            // console.log("before",i);

            if(i > start && nums[i] === nums[i - 1]) {
                continue;
            }

            sub.push(nums[i]);

            console.log(i, start);

            back(nums, i + 1);
            sub.pop();
        }

    }

    back(nums, 0);

    return res;
}

const res = subsetsWithDup([4,4,4,1,4])
console.log(res);