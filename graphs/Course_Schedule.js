// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take.
//     To take course 1 you should have finished course 0. So it is possible.

function canFinish(numCourses, pre) {
    const preMap = new Map();
    const visit = new Set();

    for(let i = 0; i < pre.length; i++) {
        for(let j = 0; j < pre[0].length; j++) {
            if(preMap.has(pre[i][0])) {
                preMap.get(pre[i][0]).push(pre[i][1]);
            }
            preMap.set(pre[i][0], [pre[i][1]]);
        }
    }

    for(const [key, value] of preMap.entries()) {
        dfs(pre, key, value)
    }

    function dfs(pre, key, value) {
        if(visit.has(key)) {
            return false;
        }

        visit.add(key);

        for(let i = 0; i < value.length; i++) {
           dfs(pre, key, value);
        }

        return true;
    }

    console.log(preMap);
}

canFinish(2, [[1,0],[0,1]]);

