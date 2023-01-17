const herd = document.getElementById("herd");

function createGoatCard(goat) {
    const card = document.createElement("div");

    card.classList.add("goat");

    const header = document.createElement("h2");
    header.textContent = goat["name"];
    card.appendChild(header);

    const colourBox = document.createElement("p");
    colourBox.textContent = `${goat["name"]}'s favourite colour is `;
    const colourName = document.createElement("span");
    colourName.textContent = goat["favouriteColour"];
    colourName.style.color = goat["favouriteColour"];
    colourBox.appendChild(colourName);
    card.appendChild(colourBox);

    card.classList.add(goat["age"] < 5 ? "young" : "old");


    herd.appendChild(card);
}

async function callTheHerd() {

    const res = await fetch("http://localhost:3000/goats");

    const data = await res.json();

    data.forEach(g => createGoatCard(g));
}

callTheHerd();