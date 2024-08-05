// Input: [

// ]
//
// Output: [
//     [3,-1,0,1],
//     [2,2,1,-1],
//     [1,-1,2,-1],
//     [0,-1,3,4]
// ]

function islandsAndTreasure(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const res = [];
    let minNumberOfPath = Number.MAX_SAFE_INTEGER;

    for(let i = 0; i < m; ++i) {
        const subset = [];

        for(let j = 0; j < n; ++j) {
            if(grid[i][j] === -1 || grid[i][j] === 0) {
                subset.push(grid[i][j]);
            }

            if(grid[i][j] === 2147483647) {
                subset.push(dfs(grid, i,j,0))
                minNumberOfPath = Number.MAX_SAFE_INTEGER;
            }
        }

        res.push(subset);
    }

    function dfs(grid, i, j, pathNum) {
        if(i < 0 || i >= m || j < 0 || j >= n) {
            return;
        }
        if(grid[i][j] !== 2147483647) {
            if(grid[i][j] === 0) {
                minNumberOfPath = Math.min(minNumberOfPath, pathNum);
                return;
            }

            return;
        }

        grid[i][j] = "#";

        dfs(grid, i - 1, j, pathNum + 1);
        dfs(grid, i + 1, j, pathNum + 1);
        dfs(grid, i, j - 1, pathNum + 1);
        dfs(grid, i, j + 1, pathNum + 1);

        grid[i][j] = 2147483647;

        return minNumberOfPath;
    }

    return res;
}

const res = islandsAndTreasure([
    [0,-1],
    [2147483647,2147483647] ]);

console.log(res);
