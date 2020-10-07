const header = document.getElementById("heading");
const input = document.querySelector("#myInput");

const newText = document.getElementById("newText");
const output = document.getElementById("output");

function update() {
    // debugger;
    header.innerText = input.value;
}   

function addNew() {
    const newP = document.createElement("p");
    newP.innerText = newText.value;

    output.appendChild(newP);
}

const hello = function() {
    console.log("Hello, World!");
}

// higher order -> a function that either accepts or returns another function
const higherOrder = function(func) {
    console.log("calling func");
    func();
    console.log("called func");
}

higherOrder(hello);

function getHello() { 
    return hello;
}
/*
function add(a, b) {
    return a + b;
}

const add = function(a, b) {
    return a + b;
}

const add = (a, b) => {
    return a + b;
}
*/
const add = (a, b) => a + b; //Implicitly return a + b

const arr = [1, 2, 3, 4, 5];

arr.filter(i => i % 2 === 0).map(i => i * i).forEach(i => console.log(i));

const arr2 = [23, 43536, 4353536, 242, 4647];

arr.reduce((acc, next) => acc + next);

let max = (accumulator, next) => {
    debugger;
    if (accumulator > next) {
        return accumulator;
    } else {
        return next;
    }
}

arr.reduce(max);