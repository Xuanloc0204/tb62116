let a = +prompt('moi nhap')
function kiemtra(a) {
    let count = 0;
    for (let i = 1; i <= a; i++) {
        if (a % i === 0) ;
        count++;
    }
    return count;
//     if (count !== 2) {
//         alert(a + ' day la so nguyen to');
//     } else {
//         alert(a + ' khong phai day la so nguyen to');
//     }
}
console.log(kiemtra(a))
