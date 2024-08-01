function createArray() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        let phantu = Math.floor(Math.random() * 100) + 1;
        arr.push(phantu);
    }
    return arr;
}
let hienthi = createArray();
console.log(hienthi);