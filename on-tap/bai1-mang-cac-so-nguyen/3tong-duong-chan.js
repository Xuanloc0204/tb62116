function sumEvenPositiveNumbers(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 ===0) {
            sum += a[i];
        }
    }
    return sum;
}
let a = [1, 2, 3, -9, -8, -7, -4, 10, -15, 8];
document.write(sumEvenPositiveNumbers(a));