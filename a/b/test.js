function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

function getPrimes(arr) {
    const primes = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            primes.push(arr[i]);
        }
    }
    return primes;
}

// Ví dụ sử dụng
const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const primes = getPrimes(arr);
console.log(primes);  // Output: [2, 3, 5, 7, 11]
