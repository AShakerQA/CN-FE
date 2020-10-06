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