let inputString = prompt('nhap vao');
function demChuInHoa() {
    let count = 0;
    for (let i = 0; i < inputString.length; i++) {
        let a = inputString[i];
        if (a >= "A" && a <= "Z") {
            count++;
        }
    }
    return count;
}

console.log(demChuInHoa(inputString));