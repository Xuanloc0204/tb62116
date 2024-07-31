function countOddSmallerThan10(a) {
    let conut = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i]%2!= 0 && a[i]<10) {
            conut++
        }
    }
    return conut;
}
let a = [1, 2, 3, -9, -8, -7, -4, 10, -15, 8];
document.write(countOddSmallerThan10(a));