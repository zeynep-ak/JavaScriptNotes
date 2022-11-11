function convertToInteger(str) {
    return parseInt(str);
}

console.log(convertToInteger("007")); // 7
console.log(convertToInteger("x123")); // NaN
console.log(convertToInteger("123x")); // 123

// It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.

function convertToIntegerFromBinary(str) {
    return parseInt(str, 2);
}
console.log(convertToIntegerFromBinary("1001010100")); // 596
