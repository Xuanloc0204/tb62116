function avg(a) {
    let count = 0;
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 === 0) {
            count++;
            sum += a[i];
        }
    }
    let avg = sum / count;
    return avg;
}

let a = [1, 2, 5, 10, 43, 15, 37, 87];
document.write(avg(a));