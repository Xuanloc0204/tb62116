
let a = +prompt('nhap so a');
let b= +prompt('nhap so b');
console.log(a,b);
function doiCho(a,b){
    let c = a;
    a = b;
    b = c;
    return [a,b];
}
document.write(doiCho(a,b));