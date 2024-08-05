// Input: n = 6, edges = [[0,1],[0,2],[1,2],[3,4]]
// Output: 3
// Explanation: From the picture above, one can see that all of the components of this graph are complete.

function countComponents(n, grid) {
    const map = new Map();
    const visit = new Set();
    let numberOfComponents = 1;

    for(let i = 0; i < n; i++) {
        map.set(i, []);
    }

    for(let i = 0; i < grid.length; i++) {
        map.get(grid[i][0]).push(grid[i][1]);
    }

    for(let i = 0; i < n; i++) {
        if(dfs(map, i)) {
            numberOfComponents++;
        }
    }

    function dfs(map, i) {
        if(visit.has(i)) {
            return false;
        }

        visit.add(i);

        for(const e of map.get(i).values()) {
            if(!dfs(map, e)) {
                return false;
            }
        }

        return true;
    }

    return numberOfComponents;
}

const res = countCompleteComponents(6, [[0,1],[0,2],[1,2],[3,4],[3,5]])
console.log(res);