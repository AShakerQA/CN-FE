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

    myHistory.prepend(newHistory);
}

function calc(op) {
    const [a, b] = getValues();
    const newResult = eval(`${a} ${op} ${b}`)
    writeResult(newResult);
    addHistory(a, op, b, newResult);
}