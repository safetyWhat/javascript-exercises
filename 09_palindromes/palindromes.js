const palindromes = function (a) {
    //let pal = a;

    let pal = a.replace(/[^\w\s\']|_/g, "") //Remove special characters.
         .replace(/\s+/g, "")//Remove extra spaces.
         .toLowerCase(); //Convert to all lower case letters.
    console.log(pal)

    function reverseString(str) {
        let splitString = str.split('');
        let reverseArray = splitString.reverse();
        let joinArray = reverseArray.join('');
        return joinArray;
    }
    if (pal === reverseString(pal)) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
