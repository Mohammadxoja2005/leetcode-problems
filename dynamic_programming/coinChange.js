function coinChange(coins, amount) {
    // Create an array to store the minimum coins needed for each amount from 0 to amount
    const dp = new Array(amount + 1).fill(Infinity);
    console.log(dp);
    // Base case: 0 coins are needed to make amount 0
    dp[0] = 0;

    // console.log(dp[2 - 1])

    // Iterate over each coin
    for (let coin of coins) {
        // Update the dp array for all amounts from coin to amount
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }

    console.log(dp[10]);

    // If dp[amount] is still Infinity, it means we cannot make up that amount with the given coins
    return dp[amount] === Infinity ? -1 : dp[amount];
}

coinChange([1, 2, 5], 11);
