// Character list. Each house has a name, code, and list of members
const houses = new Map();

houses.set("ST",
    {
        name: "Stark",
        characters: ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"]
    }
);

houses.set("LA",
    {
        name: "Lannister",
        characters: ["Tywin", "Cersei", "Jaime", "Tyrion"]
    }
);

houses.set("BA",
    {
        name: "Baratheon",
        characters: ["Robert", "Stannis", "Renly"]
    }
);

houses.set("TA",
    {
        name: "Targaryen",
        characters: ["Aerys", "Daenerys", "Viserys"]
    }
)

const domLoaded = () => {
    const select = document.getElementById("house");

    houses.forEach((value, key) => {
        const opt = document.createElement("option");
        opt.setAttribute("value", key);
        opt.text = value.name;
        select.appendChild(opt);
    })

    select.addEventListener("change", houseSelected);
}

const houseSelected = (event) => {
    const ul = document.getElementById("characters");
    ul.innerHTML = "";

    const selected = event.target.value;

    if (houses.has(selected)) {
        const house = houses.get(selected);

        house.characters.forEach(c => {
            const li = document.createElement("li");
            li.textContent = c;
            ul.appendChild(li);
        })

    }
}

window.addEventListener("DOMContentLoaded", domLoaded);