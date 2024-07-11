const result = [];
const n = 3;

function sitting_char_problem(n, current) {
    if(current.length === n) {
        result.push(current);
        return;
    }

    // if(current[1] !== "G") {
    // }

    sitting_char_problem(n, current+'B');
    sitting_char_problem(n, current+'G');
}

// [
//     'BBB', 'BBG',
//     'BGB', 'BGG',
//     'GBB', 'GBG',
//     'GGB', 'GGG'
// ]

// [ 'BBB', 'BBG', 'GBB', 'GBG' ]

sitting_char_problem(n, '');
console.log(result);