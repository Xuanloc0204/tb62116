function kiemTraSoDuong (a){
    if(a>0){
        return true;
    } else {
        return false;
    }
}
let a = +prompt('nhap so');
console.log(kiemTraSoDuong(a))