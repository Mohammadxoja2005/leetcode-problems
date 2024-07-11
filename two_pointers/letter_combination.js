var letterCombinations = function (digits) {
    if (digits === "") return [];
    const result = [];

    const alphabets = ["ab"]

    makeBackTrack(digits.length, '', result)

};

var makeBackTrack = function (n, current, result) {
    if (current.length === n) {
        console.log(current);
        result.push(current)

        return;
    }

    makeBackTrack(n, current + "a", result)
    makeBackTrack(n, current + "b", result)
}

letterCombinations("23")