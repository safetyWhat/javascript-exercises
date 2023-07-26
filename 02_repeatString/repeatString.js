const repeatString = function(word, times) {
    let newString = "";
    if (times < 0) return "ERROR"
    for (let i = 0; i < times; i++) {
        newString += word;
    }    
    return newString;
};
//repeatString("hey", 3)
//repeatString("hey", 10)
//repeatString("hey", 1)
//repeatString("hey", 0)
//repeatString('hey', -4)
//repeatString('hey', number).match(/((hey))/g).length



// Do not edit below this line
module.exports = repeatString;
