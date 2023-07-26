const removeFromArray = function(array, ...items) {
    let newArray = [];
    array.forEach((item) => {
        if(!items.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
