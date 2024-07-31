function bubble_sort1(arr, n) {
    for (let i = n; i >=2; i--) {
        for (let j = 0; j < i-1; j++) {
            if (arr[j] < arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
let arr=[24, 45, -10, 8, -2, 45, 23, 13, 43, -1]
let hienthi = bubble_sort1(arr,arr.length);
document.write(hienthi)