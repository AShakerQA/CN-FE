const createForm = document.getElementById("createForm");
const duckOutput = document.getElementById("readDiv");

createForm.addEventListener('submit', function (event) {
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
    }).then(response => { // Receive response
        return response.json(); // Convert response body to json
    }).then(data => { //json data from previous .then()
        renderDucks();
        this.reset();
    }).catch(error => console.log(error));
});

function renderDucks() {
    fetch("http://localhost:8081/duck/getAll")
        .then(response => response.json())
        .then(arrayOfDucks => {
            console.log("Ducks: ", arrayOfDucks);
            duckOutput.innerHTML = '';
            arrayOfDucks.forEach(function(duck) {
                console.log(duck);

                const card = document.createElement("div");
                card.className = "card";
                // card.setAttribute("class", "card");
                duckOutput.appendChild(card);

                const cardBody = document.createElement("div");
                cardBody.className = "card-body";
                card.appendChild(cardBody);

                const title = document.createElement("h5");
                title.className = "card-title";
                title.innerText = duck.name;
                cardBody.appendChild(title);

                const colour = document.createElement("p");
                colour.className = "card-body";
                colour.innerText = "Colour: " + duck.colour;
                cardBody.appendChild(colour);

                const habitat = document.createElement("p");
                habitat.className = "card-body";
                habitat.innerText = "Habitat: " + duck.habitat;
                cardBody.appendChild(habitat);

                const deleteButton = document.createElement("a");
                deleteButton.className = "card-link";
                deleteButton.innerText = "Delete";
                deleteButton.addEventListener("click", function () {
                    deleteDuck(duck.id);
                })
                cardBody.appendChild(deleteButton);
            });
        }).catch(error => console.error(error));
}

renderDucks();

function deleteDuck(id) {
    fetch("http://localhost:8081/duck/deleteDuck/" + id, {
        method: "DELETE"
    }).then(response => {
        console.log(response);
        renderDucks();
    }).catch(error => console.error(error));
}