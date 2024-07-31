function ktraPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function getPrimes(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (ktraPrime(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

let arr = [2, 10, 5, 6, 7, 8];
console.log(getPrimes(arr))