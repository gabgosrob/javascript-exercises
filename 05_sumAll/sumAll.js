const sumAll = function(first, second) {
    if (first < 0 || second < 0 || typeof(first) != "number" || typeof(second) != "number") {
        return "ERROR";
    }
    let low = (first < second) ? first : second;
    let high = (first >= second) ? first : second;

    let total = 0;
    for (let i = low; i <= high; i++) {
        total += i;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
