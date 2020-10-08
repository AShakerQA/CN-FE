const createForm = document.getElementById("createForm");
const readDiv = document.getElementById("readDiv");

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
        getAll();
        this.reset();
    }).catch(error => console.log(error));
});

function getAll() {
    fetch("http://localhost:8081/duck/getAll")
        .then(response => response.json())
        .then(ducks => {
            console.log("Ducks: ", ducks);
            readDiv.innerHTML = '';
            ducks.forEach(function(duck) {
                console.log(duck);

                const card = document.createElement("div");
                card.className = "card";
                // card.setAttribute("class", "card");
                readDiv.appendChild(card);

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
            });
        }).catch(error => console.error(error));
}

getAll();