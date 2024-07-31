function demSoAm (arr){
    let count = 0;
    for (let i= 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++
        }
    }
    return count;
}
let arr = [-4,-1,-5,-3,9,10,-18,19,53,49];
document.write(demSoAm(arr));