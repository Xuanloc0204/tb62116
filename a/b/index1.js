
function getagv (arr) {
    let min = arr[0];
   for (let i= 0; i < arr.length; i++ ) {
       if (min > arr[i]) {
       min = arr[i];
       }
   }
    return min;
}
let arr= [1,3,5,6,7];
document.write(getagv(arr))