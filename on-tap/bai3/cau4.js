//kiem tra so chinh phuong

function isASquareNumber(n) {
    let count = 0;
    for (let i = 0; i <= n; i++) {
        if (Math.pow(i, 2) === n) {
            count++;
        }
    }
    if (count > 0) {
        return true;
    } else {
        return false;
    }
}


// //tinh tong cac so chinh phuong
//
function sumOfSquareNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isASquareNumber(arr[i])) {
            sum += arr[i];
        }
    }
    return sum;
}

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(sumOfSquareNumbers(a))