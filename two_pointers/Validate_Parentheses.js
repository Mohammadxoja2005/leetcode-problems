function isValid(s) {
    const stack = [];

    const map = {
        ")": "(",
        "}": "{",
        "]": "["
    }

    for(const char of s) {
        let i = 0;
        const isBracket = char in map;

        if(!isBracket) {
            stack.push(char);
            i++;
            continue;
        }

        const isEqual = stack[stack.length - 1] === map[char];

        if(isEqual) {
            stack.pop();
            continue;
        }

        return false;
    }

    return stack.length === 0;
}

const result = isValid("([{}])")
console.log(result);