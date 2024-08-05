// Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
//
// Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]

function solve(grid) {
    const ROWS = grid.length;
    const COLS = grid[0].length;

    for(let i = 0; i < ROWS; i++) {
        dfs(grid, i, 0);
        dfs(grid, i, COLS - 1);
    }

    for(let i = 0; i < COLS; ++i){
        dfs(grid, 0, i);
        dfs(grid, ROWS - 1, i);
    }

    for(let i = 0; i < ROWS; ++i) {
        for(let j = 0; j < COLS; ++j) {
            if(grid[i][j] === "#") {
                grid[i][j] = "O";
            }else if(grid[i][j] === "O") {
                grid[i][j] = "X";
            }
        }
    }

    function dfs(grid, r, c) {
        if(r === ROWS || r < 0 || c === COLS || c < 0 || grid[r][c] !== 'O'){
            return;
        }

        grid[r][c] = "#";

        dfs(grid, r + 1, c);
        dfs(grid, r - 1, c);
        dfs(grid, r, c + 1);
        dfs(grid, r, c - 1);
    }

    return grid;
}

const res = solve([
    ["X","X","X","X"],
    ["X","O","O","X"],
    ["X","O","O","X"],
    ["X","X","X","O"]
]);

console.log(res);