function daoNguocMang (a) {
    let n = a.length;
    for (let i=0; i < n/2; i++) {
        let b = a[i];
        a[i] = a[n - 1 - i];
        a[n- 1 - i] = b;
    }
    return a;
}
let a = [1,2,3,4,9,8,7,6];
document.write(daoNguocMang(a))