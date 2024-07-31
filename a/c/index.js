function revert(arr) {
    let n = arr.length;
    for (let i = 0; i < arr.length/2; i++) {
        let temp = arr[i];
        arr[i] = arr[n-1-i];
        arr[n-1-i] = temp;
    }
}
