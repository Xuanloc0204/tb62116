
function bubbleSort(arr, n) {
    for (let i = 0; i < n-1; i++) {
        for (let j = n-1; j > i - 1; j--) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let arr1 = [5, 2, 9, 1];
let arr2 = [8, 7, 3, 4];
let arr = arr1.concat(arr2);
let n= arr.length;
let hienthi = bubbleSort(arr,n);
console.log(hienthi);