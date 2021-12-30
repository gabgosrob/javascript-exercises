const leapYears = function(year) {
    let isLeap = false;
    if (!(year % 4) && (!(year % 400) || year % 100)) {
        isLeap = true;
    }

    return isLeap;
};

// Do not edit below this line
module.exports = leapYears;
