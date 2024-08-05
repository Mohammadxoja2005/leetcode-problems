function orangesRotting(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let minNumMinutes = 0;

    function dfs(grid, i, j) {
        if(i < 0 || i >= m || j < 0 || j >= n || grid[i][j] !== 1) {
            return;
        }

        if(grid[i][j + 1] === 1 && grid[i][j - 1] === 1) {
            minNumMinutes++;
            grid[i][j + 1] = 2
            grid[i][j - 1] = 2;
        }

        dfs(grid, i - 1, j);
        dfs(grid, i + 1, j);
        dfs(grid, i, j - 1);
        dfs(grid, i, j + 1);
    }
}

orangesRotting([[2,1,1],
                     [1,1,0],
                     [0,1,1]]);