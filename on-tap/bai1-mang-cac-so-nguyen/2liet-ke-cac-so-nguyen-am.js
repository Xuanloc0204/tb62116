function listOutNegativeNumbers(a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] < 0) {
            console.log(a[i]);
        }
    }
}

let a = [1, 2, 3, -9, -8, -7, -4, 10, -15, 8];
listOutNegativeNumbers(a);