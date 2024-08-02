let arr = []

function nhapMangSoNguyen(a) {
    for (a = 0; a < 20; a++) {
        n = prompt('nhap phan tu n ');
        arr.push(n);
    }
    return arr;
}

let hienthimang = nhapMangSoNguyen();
console.log("mang so nguyen la: " + hienthimang);

function hieuSumchanSumle(arr) {
    let sumchan = 0;
    let sumle = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumchan += arr[i];
        } else {
            sumle += arr[i];
        }
    }
    let hieu = sumchan - sumle
    return hieu;
}

let hienthihieu = hieuSumchanSumle(arr);
console.log("hieu cua tong chan va tong le la: " + hienthihieu);


