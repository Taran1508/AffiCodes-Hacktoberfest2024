function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

// Example usage:
console.log(sumOfDigits(1234)); // 10 (1 + 2 + 3 + 4)
console.log(sumOfDigits(9876)); // 30 (9 + 8 + 7 + 6)
