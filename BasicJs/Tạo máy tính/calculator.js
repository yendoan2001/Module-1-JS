function calculate(operator) {
    let firstNumber = +document.getElementById("first_number").value;
    let secondNumber = +document.getElementById("second_number").value;
    let result = document.getElementById('result');
    if (operator === '+') result.innerHTML = firstNumber + secondNumber + ''
    if (operator === '-') result.innerHTML = firstNumber - secondNumber + ''
    if (operator === '*') result.innerHTML = firstNumber * secondNumber + ''
    if (operator === '/') result.innerHTML = firstNumber / secondNumber + ''
}