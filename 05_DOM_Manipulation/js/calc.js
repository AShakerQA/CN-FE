const num1 = document.getElementById("firstNum");
const num2 = document.getElementById("secondNum");
const result = document.getElementById("result");

function add() {
    const a = Number.parseFloat(num1.value);
    const b = Number.parseFloat(num2.value);

    result.value = a + b;
}

function subtract() {
    const a = Number.parseFloat(num1.value);
    const b = Number.parseFloat(num2.value);

    result.value = a - b;
}

function multiply() {
    const a = Number.parseFloat(num1.value);
    const b = Number.parseFloat(num2.value);

    result.value = a * b;
}

function divide() {
    const a = Number.parseFloat(num1.value);
    const b = Number.parseFloat(num2.value);

    result.value = a / b;
}