
function soLanXuatHien(arr, key) {
    let count = 0;
    for (let i= 0; i < arr.length; i++) {
        if (key === arr[i]) {
            count++;
        }
    }
    return count;
}