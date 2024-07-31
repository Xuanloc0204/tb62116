//Viết hàm nhập 1 mảng các số nguyên (inputArrayNumbers)
function inputArrayNumbers() {
    let arr = [];
    let soluong = prompt("so luong phan tu");
    for (let i = 0; i < soluong; i++) {
        let nhapso = +prompt("nhap phan tu");
        arr.push(nhapso);
    }
    return arr
}

//Viết hàm xuất 1 mảng các số nguyên (outputArrayNumbers)
function outputArrayNumbers() {
    let hienthi = inputArrayNumbers()
    return hienthi;
}

document.write(outputArrayNumbers());
