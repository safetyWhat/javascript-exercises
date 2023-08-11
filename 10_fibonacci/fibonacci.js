const fibonacci = function(arrLength) {
    if (arrLength < 0) {
        return 'OOPS';
    }
    let a = 0;
    let b = 1;
    let fib = [0, 1];
    for (x = 2; x <= arrLength; ++x) {
        let y = a + b;
        fib.push(y);
        a = b;
        b = y;
        //console.log(a,b,fib)
    }
    return fib[arrLength]
};

// Do not edit below this line
module.exports = fibonacci;
