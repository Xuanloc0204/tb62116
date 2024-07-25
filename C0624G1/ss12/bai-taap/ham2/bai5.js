let arr = [];
let a = +prompt( 'nhap so a');
let b =+prompt('nhap so b');
let c =+prompt('nhap so c');
arr.push(a,b,c);
console.log(arr)
function checkNumber (array) {
    let n = arr[0];
    for (let i=0; i<arr.length; i++) {
        if(n>arr[i]){
            n=arr[i]
        }
    }
    return n;
}
console.log(checkNumber(arr));