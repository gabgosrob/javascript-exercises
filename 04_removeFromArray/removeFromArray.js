const removeFromArray = function(arr, ...toRemove) {
    toRemove.forEach(element => {
        index = arr.indexOf(element);
        if (index >= 0) {
            arr.splice(index, 1);
        }
    });

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
