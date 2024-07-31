function findMaxPositiveNumbers(a) {
    let min = a[0];
    for (let i = 0; i < a.length; i++) {
        if (min >a[i] && a[i]>0 ){
            min = a[i];
        }
    }
    return min
}
let a = [1, 2, 3, -9, -8, -7, -4, 10, -15, 8];
document.write(findMaxPositiveNumbers(a));