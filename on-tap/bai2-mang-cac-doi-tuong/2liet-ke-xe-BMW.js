class xehoi {
    id;name; color; capacity;

    constructor(id, name, color, capacity) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.capacity = capacity;
    }
}
let Audi = new xehoi(1, 'Audi','green', 8);
let BMW =new xehoi(2, 'BMW', 'Blue', 6);
let Merc =new xehoi(3,'Merc', 'green', 4);

let arr = [Audi,BMW,Merc];

function listOutBMWCars() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === 'BMW') {
            console.log(arr[i]);
        }
    }
}
let hienthi = listOutBMWCars(arr);
console.log(hienthi);