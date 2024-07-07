// Example 1:
//
// Input: strs = ["act","pots","tops","cat","stop","hat"]
//
// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
// Example 2:
//
// Input: strs = ["x"]
//
// Output: [["x"]]
// Example 3:
//
// Input: strs = [""]
//
// Output: [[""]]

// function groupAnagrams(strs) {
//     const sortedStrs = [];
//
//     for(const str of strs) {
//         const result = sortedStrs.push(str.split("").sort().join(""))
//     }
// }

function groupAnagrams(strs) {
    const map = new Map();

    for(const str of strs) {
        const sortedStr = str.split("").sort().join("");

        if(!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }

        map.get(sortedStr).push(str);
    }

    return Array.from(map.values());
}

const result = groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
console.log(result)