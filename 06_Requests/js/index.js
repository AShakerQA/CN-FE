const output = document.getElementById("output");
let data;
const request = new XMLHttpRequest();
request.open("GET", "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json");
request.onload = function () {
    console.log("Response received!");
    data = request.response;
}
request.send();
console.log("Request Sent!");