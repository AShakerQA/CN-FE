const num1 = document.getElementById("firstNum");
const num2 = document.getElementById("secondNum");
const result = document.getElementById("result");
const myHistory = document.getElementById("history");

function getValues() {
    return [Number.parseFloat(num1.value), Number.parseFloat(num2.value)];
}

function writeResult(newResult) {
    result.value = newResult;
}

function addHistory(a, op, b, newResult) {
    const newHistory = document.createElement('p');
    newHistory.innerText = `${a} ${op} ${b} = ${newResult}`;

    myHistory.appendChild(newHistory);
}

function add() {
    const [a, b] = getValues(); //https://portal.qa-community.co.uk/~/cne/learning/javascript/javascript--destructuring#overview
    const newResult = a + b;
    writeResult(newResult);
    addHistory(a, '+', b, newResult);
}

function subtract() {
    const [a, b] = getValues();
    const newResult = a - b;
    writeResult(newResult);
    addHistory(a, '-', b, newResult);
}

function multiply() {
    const [a, b] = getValues();
    const newResult = a * b;
    writeResult(newResult);
    addHistory(a, '*', b, newResult);
}

function divide() {
    const [a, b] = getValues();
    const newResult = a / b;
    writeResult(newResult);
    addHistory(a, '/', b, newResult);
}