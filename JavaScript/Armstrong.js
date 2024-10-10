function isArmstrong(num) {
    let sum = 0;
    const numStr = num.toString();
    const numDigits = numStr.length;

    for (let digit of numStr) {
        sum += Math.pow(Number(digit), numDigits);
    }

    return sum === num;
}

// Example usage:
console.log(isArmstrong(153)); // true (1^3 + 5^3 + 3^3 = 153)
console.log(isArmstrong(9474)); // true (9^4 + 4^4 + 7^4 + 4^4 = 9474)
console.log(isArmstrong(123)); // false
