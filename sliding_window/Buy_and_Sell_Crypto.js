// Example 1:
//
// Input: prices = [10,1,5,6,7,1]
//
// Output: 6
// Explanation: Buy prices[1] and sell prices[4], profit = 7 - 1 = 6.
//
// Example 2:
//
// Input: prices = [10,8,7,5,2]
//
// Output: 0

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// function maxProfit(prices) {
//     let maxProfit = 0;
//
//     for(let i = 0; i < prices.length; i++) {
//         let price = prices[i];
//         let length = i + 1;
//
//         while(price < prices[length]) {
//             maxProfit = Math.max(maxProfit, prices[length] - price);
//             length++;
//         }
//     }
//
//     return maxProfit;
// }

function maxProfit(prices) {
    let left = 0;
    let right = 1;
    let maxProfit = 0;

    while(right < prices.length) {
        if(prices[right] > prices[left]) {
            maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
            right++;
        }else if(prices[right] <= prices[left]) {
            left = right;
            right++;
        }

    }

    return maxProfit;
}

const result = maxProfit([10,1,5,6,7,1])
console.log(result)