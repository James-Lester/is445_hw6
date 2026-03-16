// Country list
const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua-and-Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaïjan"
];


const autoComplete = (event) => {
    const query = event.target.value.trim().toLowerCase();
    const filtered = query === ""
        ? []
        : countryList.filter(country =>
            country.toLowerCase().includes(query)
        );

    const list = document.getElementById("suggestions");
    list.innerHTML = "";
    filtered.forEach(e => {
        let country = document.createElement("p");
        country.classList.add("suggestion");
        country.innerText = e;
        list.appendChild(country);
    })
}

const countryClicked = (event) => {
    if (!event.target.classList.contains("suggestion")) return;
    const inp = document.getElementById("country");
    inp.value = event.target.innerText;
    inp.dispatchEvent(new Event("input"));
}

const domLoaded = () => {
    const inp = document.getElementById("country");
    inp.addEventListener("input", autoComplete);

    const list = document.getElementById("suggestions");
    list.addEventListener("click", countryClicked)


}

window.addEventListener("DOMContentLoaded", domLoaded);