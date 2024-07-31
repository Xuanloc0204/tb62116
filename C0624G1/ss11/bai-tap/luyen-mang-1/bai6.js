let V = +prompt('nhap so');

function timPhanTu(arr) {
    let timthay = false;
    for (let i = 0; i < arr.length; i++) {
        if (V === arr[i]) {
            timthay = true;
        }
    }
    if (timthay){
        alert('V is in the array');
    } else {
        alert('V is not in the array');
    }
}
let arr =[1, 2, 4, 6, 15, 25, 90];
console.log(timPhanTu(arr));