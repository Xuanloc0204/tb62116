function tinhhieu(arr) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum1 += arr[i];
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum2 += arr[i];
        }
    }
    return sum1 -sum2
}
let arr = [2,3,4,5,6,7,100];
console.log(tinhhieu(arr));
