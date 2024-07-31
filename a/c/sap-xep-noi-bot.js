function bubble_sort1(arr, n) {
    for (let i = n; i >= 2; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
let a=[1,2,3,4,5,6,7];
console.log(a)