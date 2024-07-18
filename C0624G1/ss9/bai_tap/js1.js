function kiemTraChiaHet(a, b) {

    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let result = document.getElementById('result');
    if (a % b === 0) {
        document.getElementById('result').innerHTML= (`${a} chia hết cho ${b}`)
    } else {
        document.getElementById('result').innerHTML= (`${a} không chia hết cho ${b}`)
    }
}