let a= +prompt('Moi nhap so');
function kiemtra(a) {
    let count = 0;
    for (let i = 1; i <= a; i++) {
        if (a % i === 0) {
            count++
        }
    }
    if (count !== 2) {
        alert(a + ' day khong phai la so nguyen to');
    } else {
        alert(a + ' day la so nguyen to');
    }
}
console.log(kiemtra(a))
