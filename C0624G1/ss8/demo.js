function convert() {
    // lay du lieu ra
    let amount = document.getElementById('amount').value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
//     tinh toan
//     ket qua = amount * ty gia
    let rate = from/to;
    let result = amount*rate;
//     ghi ket qua
    document.getElementById('result').innerHTML = result;
}