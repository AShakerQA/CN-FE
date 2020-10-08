const createForm = document.getElementById("createForm");

createForm.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(this.name);
    const data = {
        name: this.name.value,
        colour: this.colour.value,
        habitat: this.habitat.value
    }

    fetch("http://localhost:8081/duck/createDuck", { //Make request
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': "application/json"
        }
    }).then(response => {   // Receive response
        return response.json(); // Convert response body to json
    }).then(data => { //json data from previous .then()
        console.log(data);
    }).catch(error => console.log(error));
});