// Example 1:
//
// Input: s = "Was it a car or a cat I saw?"
//
// Output: true
// Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.
//
//     Example 2:
//
// Input: s = "tab a cat"
//
// Output: false

// Was it a car or a cat I saw?

function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;
    const exp = /[a-z0-9]/

    while(left < right) {
        if(!exp.test(s[left].toLowerCase())) {
            left++;
            continue;
        }
        if(!exp.test(s[right].toLowerCase())) {
            right--;
            continue;
        }

        if(s[left].toLowerCase() !== s[right].toLowerCase()){
          return false;
        }

        left++;
        right--;
    }

    return true;
}

const result = isPalindrome("A man, a plan, a canal: Panama")
console.log(result);

// function twoSortedSumArray(nums, target) {
//     nums.sort((a,b) => a - b);
//
//     let left = nums[0];
//     let right = nums[nums.length - 1];
//
//     while(left < right) {
//         let sum = nums[left] + nums[right];
//
//         if(sum === target){
//             return [nums[left], nums[right]];
//         }else if(sum > target) {
//             right--;
//         }else {
//             left++;
//         }
//     }
// }
// [3,2,5,4,7] -> [2,3,4,5,7] -> twoSortedSumArray([3,2,5,4,7], 7);