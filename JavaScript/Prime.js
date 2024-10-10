function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    if (num === 2) return true; // 2 is the only even prime number
    if (num % 2 === 0) return false; // eliminate even numbers

    // Check odd numbers from 3 to the square root of num
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    
    return true;
}

// Example usage:
console.log(isPrime(11)); // true
console.log(isPrime(25)); // false
