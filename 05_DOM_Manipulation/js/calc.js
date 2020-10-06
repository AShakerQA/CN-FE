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

function addHistory(num1, op, num2, newResult) {
    const newHistory = document.createElement('p');
    newHistory.innerText = `${num1} ${op} ${num2} = ${newResult}`;

    myHistory.prepend(newHistory);
}

function calc(op) {
    const [num1, num2] = getValues();
    const newResult = eval(`${num1} ${op} ${num2}`)
    writeResult(newResult);
    addHistory(num1, op, num2, newResult);
}