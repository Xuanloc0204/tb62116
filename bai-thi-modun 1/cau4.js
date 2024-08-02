class dienthoai {
    name;
    madienthoai;
    hangsanxuat;
    gia

    constructor(name, madienthoai, hangsanxuat, gia) {
        this.name = name;
        this.madienthoai = madienthoai;
        this.hangsanxuat = hangsanxuat;
        this.gia = gia;
    }
}

let nokia = new dienthoai("nokia", "N1202", "nokia", 200);
let iphone = new dienthoai("iphone 5", "ip5", "apple", 1000);
let samsung = new dienthoai("samsung s23 untral", "s23", 3000);


let arr = [nokia, iphone, samsung];

let noidung = "";
for (let i = 0; i < arr.length; i++) {
    noidung += `
    <tr>
        <td>${arr[i].name}</td>
        <td>${arr[i].madienthoai}</td>
        <td>${arr[i].hangsanxuat}</td>
        <td>${arr[i].gia}</td>
    </tr>`;
}
document.getElementById("content").innerHTML = noidung;


function sapxep(arr) {
    let n = arr.length;
    for (let i = n; i >= 2; i--) {
        for (let j = 0; j < n - 1; j++) {
            if (arr[j].gia > arr[j + 1].gia) {
                let tem = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tem;

            }
        }
    }
    return arr;
}

let hienthisapxep = sapxep(arr);
console.log(hienthisapxep);