// Input: s = "AAABABB", k = 1
//
// Output: 5


// function characterReplacement(s, k){
//     const map = new Map();
//     let max = 0;
//     let l = 0;

//     for(let r = 0; r < s.length; ++r) {
//         let len = r - l + 1;
//         map.set(s[r], 1 + (map.get(s[r]) || 0));
//
//         while(len - Math.max(...map.values()) > k) {
//             map.set(s[l], map.get(s[l]) - 1);
//             l++;
//         }

//         len = r - l + 1;
//         max = Math.max(max, len);
//     }

//     return max;
// }

// var characterReplacement = function(s, k) {
//     let l = 0;
//     let max = 0;
//     let map = new Map();
//
//     for(let r = 0; r < s.length; r++) {
//         let len = r - l + 1;
//         map.set(s[r], 1 + (map.get(s[r]) || 0));

//         while(len - Math.max(...map.values()) > k) {
//             map.set(s[l], map.get(s[l]) - 1);
//             l++;
//         }

//         len = r - l + 1;
//         max = Math.max(max, len);
//     }

//     return max;
// };

// const result = characterReplacement("ABAA", 0)
// console.log(result);

function  checkInclusion(s1, s2) {
        if (s1.length > s2.length) {
            return false;
        }

        const s1Count = new Array(26).fill(0);
        const s2Count = new Array(26).fill(0);
        for (let i = 0; i < s1.length; i++) {
            s1Count[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            s2Count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }

        let matches = 0;

        // console.log(s1Count);
        // console.log(s2Count[24]++);

        for (let i = 0; i < 26; i++) {
            if (s1Count[i] === s2Count[i]) {
                matches++;
            }
        }

        let l = 0;
        for (let r = s1.length; r < s2.length; r++) {
            if (matches === 26) {
                return true;
            }

            let index = s2.charCodeAt(r) - 'a'.charCodeAt(0);
            // console.log("dsa", s2Count[index], index);
            // console.log(s2Count[index]);
            s2Count[index]++;

            console.log(s2Count[index]);

            if (s1Count[index] === s2Count[index]) {
                console.log("entered first",s1Count[index], s2[r])
                matches++; // for actual match
            } else if (s1Count[index] + 1 === s2Count[index]) {
                console.log("entered second",s1Count[index], s2[r])
                matches--;
            }

            index = s2.charCodeAt(l) - 'a'.charCodeAt(0);
            s2Count[index]--;

            // console.log("s2Count[index]--",s2Count[index]);
            if (s1Count[index] === s2Count[index]) {
                matches++; // for actual match
                console.log(s2Count[index], "s1Count[index]", s2[l])
            } else if (s1Count[index] - 1 === s2Count[index]) {
                matches--;
                console.log(s2Count[index], "s1Count[index] - 1", s2[l])
            }
            console.log(matches);
            l++;
        }
        console.log(s2Count)
        return matches === 26;
}

checkInclusion("abc", "baxyzabc")
