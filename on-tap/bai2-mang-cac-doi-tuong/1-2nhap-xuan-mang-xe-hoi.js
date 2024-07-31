class Car {
    constructor(name, color, capacity) {
        this.name = name;
        this.color = color;
        this.capacity = capacity;

    }
}

//Viết hàm nhập 1 mảng các đối tượng xe hơi (inputArrayCars)
function inputCars() {
    let cars = [];
    let numOfCars = prompt("so luong xe:");

    for (let i = 0; i < numOfCars; i++) {
        let name = prompt("ten xe:");
        let color = prompt("mau son:");
        let capacity = prompt("so cho ngoi:");
        let car = new Car(name, color, capacity);
        cars.push(car);
    }

    return cars;
}

//Viết hàm xuất 1 mảng các đối tượng xe hơi (outputArrayCars)
function outputArrayCars() {
    console.log(inputCars())
}
outputArrayCars()