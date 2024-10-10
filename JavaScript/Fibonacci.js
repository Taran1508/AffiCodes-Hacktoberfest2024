function generateFibonacci(n) {
    let fib = [0, 1];

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib.slice(0, n); // Return the first 'n' numbers of Fibonacci sequence
}

// Example usage:
console.log(generateFibonacci(5)); // [0, 1, 1, 2, 3]
console.log(generateFibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
