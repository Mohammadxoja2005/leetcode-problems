// Example 1:

// Input: n = 1

// Output: ["()"]
// Example 2:

// Input: n = 3

// Output: ["((()))","(()())","(())()","()(())","()()()"]

function generateParenthesis(n) {
    const result = [];

    makeBackTrack(n, 0, 0,'', result)
    console.log(result)
}

function makeBackTrack(n, openN, closeN, current, arr) {
    if(current.length === 6) {
        arr.push(current);
        return;
    }

    if(openN < n) {
        makeBackTrack(n, openN + 1,closeN, current + "(", arr);
    }

    if(closeN < openN) {
        makeBackTrack(n, openN,closeN + 1, current + ")", arr)
    }
}

generateParenthesis(3)
