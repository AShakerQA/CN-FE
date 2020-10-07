const request = new XMLHttpRequest();
request.open("GET", "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json");
request.setRequestHeader("accept", "application/json");
request.onload = function() {
    console.log(request.response);
}
request.send();
console.log("Request sent!");