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
let BMW =new xehoi(2, 'BMW', 'Blue', 32);
let Merc =new xehoi(3,'Merc', 'green', 16);

let arr = [Audi,BMW,Merc];
let n = arr.length;
function interchangeSort(arr, n) {
    for (let i = n; i >=2; i--) {
        for (let j = 0; j < i-1; j++) {
            if (arr[j].capacity > arr[j+1].capacity) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
let hienthi =interchangeSort(arr,n);
console.log(hienthi);