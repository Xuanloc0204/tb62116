class studens {
    id;
    name;
    age;
    height;
    weight;

    constructor(id, name, age, height, weight) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }

    getBmi() {
        let BMI = this.weight / (this.height * this.height);
        return BMI;
    }
}

let A = new studens(1, "A", 18, 170, 55);
let B = new studens(2, "B", 20, 172, 57);
let C = new studens(3, "C", 22, 175, 60);

let c06 = [A, B, C];
let noidung = "";
for (let i = 0; i < c06.length; i++) {
    noidung +=
        <tr>
            <td>${c06.id}</td>
            <td>${c06.name}</td>
            <td>${c06.age}</td>
            <td>${c06.height}</td>
            <td>${c06.weight}</td>
        </tr>;
}
document.getElementById("content").innerHTML = noidung

// let sum = 0;
// for (let i = 0; i < c06.length; i++) {
//     sum += c06[i].height;
//
// }
// let tb =sum/c06.length;
// document.write(tb);
