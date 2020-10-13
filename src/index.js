module.exports = function reverse (n) {
    let reversedNumber = n.toString().split('').reverse().join('');
    return parseFloat(reversedNumber);
}
