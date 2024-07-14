// Input: nums1 = [1,3], nums2 = [2]
// Output: 2
// Explanation: merged array = [1,2,3] and median is 2.


// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.


function findMedianSortedArrays(nums1, nums2) {
    const b = nums1;
    const a = nums2;

    let left = 0;
    let right = b.length;
    let total = b.length;
    let half = Math.floor(total / 2);

    while(left < right) {
        const Amid = Math.floor((left + half) /  2);

        const Aleft = half - Amid;

        if(b[Aleft] < b[Amid + 1] && b[Aleft + 1] > a[Amid]) {

        }


    }
}

findMedianSortedArrays([1,2,3,4,5,6,7,8],[1,2,3,4]);

