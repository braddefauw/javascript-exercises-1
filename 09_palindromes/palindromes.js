const palindromes = function (str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    return lowRegStr === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
