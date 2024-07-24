let a = [1,2,5,4,10,-2,9,8,25,18];
// let max = 0;
let sum =0;
let tb = 0;

// for (let i= 0; i < a.length; i++) {
//     if (a[i] > max){
//         max = a[i];
//     }
// }
// document.write('phan tu co gia tri lon nhat: '+ max);

for (let i= 0; i < a.length; i++) {
    sum += a[i];
    tb = (a[i] / a.length);
    }
document.write(tb);