function snt(arr) {
    let conut = 0;
    for (let i = 1; i <= arr; i++) {
        if (arr % i === 0) {
            conut++;
        }
    }
    if (conut === 2) {
        return true;
    } else {
        return false;
    }
}
let arr = +prompt('nhap so');
document.write(snt(arr));