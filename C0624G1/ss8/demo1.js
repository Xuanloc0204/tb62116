function calculate(operator) {
    let one = parseFloat(document.getElementById('one').value);
    let hi = parseFloat(document.getElementById('hi').value);
    let result;

    switch (operator) {
        case '+':
            result = one + hi;
            break;
        case '-':
            result = one - hi;
            break;
        case '*':
            result = one * hi;
            break;
        case '/':
            if (hi !== 0) {
                result = one / hi;
            } else {
                result = 'Cannot divide by zero';
            }
            break;
        default:
            result = 'Invalid operator';
    }

    document.getElementById('result').textContent = `Result: ${result}`;
}