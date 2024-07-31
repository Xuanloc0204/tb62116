function daoNguocMang(arr) {
    let n= arr.length;
    for (let i= 0; i < n/2; i++){
        let b =arr[i];
        arr[i]=arr[n-1-i];
        arr[n-1-i]= b;
    }
    return arr;
}
let arr =[1, 2, 3, 4, 5, 9, 8, 7, 6, 0];
document.write(daoNguocMang(arr));