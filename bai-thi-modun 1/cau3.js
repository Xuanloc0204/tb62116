let arr = [2, 6, 3, 8, 2, 9, 6];


function soNguyenTo(a) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
        return true;
    }
}

function a(a) {
    let newarr = [];
    for (let i = 0; i < a.length; i++) {
        if (soNguyenTo(a[i])) {
            newarr.push(a[i]);
        }
    }
    return newarr;
}

let hienthi = a(arr);
console.log("mang so nguyen to" + hienthi);


function sapXepTangDan(arr) {
    let n = arr.length;
    for (let i = n; i >= 2; i--) {
        for (let j = 0; j < n - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let tem = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tem;

            }
        }
    }
    return arr;
}

let hienthisapxep = sapXepTangDan(arr);
console.log(arr);
