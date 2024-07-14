// Example 1:
//
// Input: s = "zxyzxyz"
//
// Output: 3
// Explanation: The string "xyz" is the longest without duplicate characters.

var lengthOfLongestSubstring = function(s) {
    let n = s.length;
    let charMap = new Map();
    let left = 0;
    let longestString = 0;

    for (let right = 0; right < n; right++) {
        if (charMap.has(s[right])) {
            left = Math.max(left, charMap.get(s[right]) + 1);

            console.log("left", left);
            console.log("right", right);
        }

        charMap.set(s[right], right);
        longestString = Math.max(longestString, right - left + 1);
    }

    return longestString;
};

const max = lengthOfLongestSubstring("pwwkwe")
console.log(max);