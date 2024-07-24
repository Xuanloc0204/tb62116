let arr = [];
for (let i= 0; i < 5; i++) {
    let item = +prompt("Nhap so: " + i);
    if (typeof item === "number") {
        arr.push(item);
    } else {
        alert("Item not a number");
        i--;
    }
}
let x = prompt("Nhap gia tri can tim: ");
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
        alert("Gia tri " + x + " xuat hien tai vi tri thu " + (i));
        break;
    }
}