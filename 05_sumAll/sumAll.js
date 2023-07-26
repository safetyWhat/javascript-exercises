const sumAll = function(lowNum, hiNum) {
    let list = [];
    let sum = 0;
    if (!Number.isInteger(lowNum) || !Number.isInteger(hiNum)) return "ERROR";
    if (lowNum < 0 || hiNum < 0) return "ERROR";
       if (lowNum < hiNum) {
            for (let i = lowNum; i <= hiNum; i++) {
                list.push(i);
            }
        } else {
            for (let i = hiNum; i <= lowNum; i++) {
                list.push(i);
            } 
        }
        for (let i = 0; i < list.length; i++) {
            sum += list[i];
        }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
