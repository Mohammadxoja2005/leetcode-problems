// Example 1:

// Input: piles = [1,4,3,2], h = 9

// Output: 2

// [ 1, 2, 3, 4], h = 9

function minEatingSpeed(piles, h) {
    let left = 1;
    let right = Math.max(...piles);
    let best = right;

    while(left <= right) {
        const mid = Math.floor((left + right) / 2)
        let hours = 0;

        for(const e of piles) {
            hours += Math.ceil(e / mid);
        }

        if(hours <= h) {
            best = mid;
            right = mid - 1;
        }else if(hours > h) {
            left = mid + 1 ;
        }
    }

    return best;
}

const result = minEatingSpeed([3,6,7,11], 8)
console.log(result)