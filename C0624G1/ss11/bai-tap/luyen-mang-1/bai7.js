let v = +prompt('nhap v');

function array(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (v === arr[i]) {
            arr.slice(i, 0, 0);
        }
    }

}

let arr = [1, 3, 5, 7, 9, 16, 20, 45];

document.write(array(arr));
