// Input:
//     n = 5
// grid = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]
//
// Output:
// false

function validTree(n, grid) {
    const map = new Map();
    const visit = new Set();

    if (n == 1) return grid.length == 0;

    if (grid.length == 0) return false;

    for (let edge of grid) {
        let node1 = edge[0];
        let node2 = edge[1];

        if (!map.has(node1))
            map.set(node1, []);

        if (!map.has(node2))
            map.set(node2, []);

        map.get(node1).push(node2);
        map.get(node2).push(node1);
    }

    console.log(map);

    if(!dfs(0, -1, visit)) return false;

    function dfs(node, previous, visited) {
        if (visited.has(node)) return false;

        visited.add(node);

        // Map(5) {
        //         0 => [ 1, 2, 3 ],
        //         1 => [ 0, 4 ],
        //         2 => [ 0 ],
        //         3 => [ 0 ],
        //         4 => [ 1 ]
        // }

        for (let neighbor of map.get(node)) {
            if (neighbor === previous) {
                console.log(neighbor, previous);
                continue
            }

            if (!dfs(neighbor, node, visited)) return false;
        }

        return true;
    }

    return true;
}

const res = validTree(5, [[0, 1], [0, 2], [0, 3], [1, 4]])
console.log(res);