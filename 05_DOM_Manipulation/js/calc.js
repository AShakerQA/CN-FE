const num1 = document.getElementById("firstNum");
const num2 = document.getElementById("secondNum");
const result = document.getElementById("result");
const myHistory = document.getElementById("history");

function getValues() {
    return [
        Number.parseFloat(num1.value), 
        Number.parseFloat(num2.value)
    ];
}

function writeResult(newResult) {
    result.value = newResult;
}

function addHistory(num1, op, num2, newResult) {
    const newHistory = document.createElement('p');
    newHistory.innerText = `${num1} ${op} ${num2} = ${newResult}`;

    myHistory.appendChild(newHistory);
}

function add() {
    const [num1, num2] = getValues(); //https://portal.qa-community.co.uk/~/cne/learning/javascript/javascript--destructuring#overview
    const newResult = num1 + num2;
    writeResult(newResult);
    addHistory(num1, '+', num2, newResult);
}

function subtract() {
    const [num1, num2] = getValues();
    const newResult = num1 - num2;
    writeResult(newResult);
    addHistory(num1, '-', num2, newResult);
}

function multiply() {
    const [num1, num2] = getValues();
    const newResult = num1 * num2;
    writeResult(newResult);
    addHistory(num1, '*', num2, newResult);
}

function divide() {
    const [num1, num2] = getValues();
    const newResult = num1 / num2;
    writeResult(newResult);
    addHistory(num1, '/', num2, newResult);
}