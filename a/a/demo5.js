let a= [7,8,9,10,8,7,5,2,6];
let n = a.length;
let b
for (let i=0; i < n/2; i++) {
    b = a[i];
    a[i] = a[n - 1 - i];
    a[n- 1 - i] = b;
}
document.write(a)