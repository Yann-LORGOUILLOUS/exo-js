let listePaysTri;
let etatTri = "aucun";

function initialiserDonnees() {
    fetch("https://countriesnow.space/api/v0.1/countries/capital")
        .then(response => response.text())
        .then(text => {
            listePaysTri = JSON.parse(text).data;
            afficherTableau();
        });
}

function afficherTableau() {
    document.querySelector("#corps").innerHTML = "";
    for (let i = 0; i < listePaysTri.length; i++) {
        let nomPays = listePaysTri[i].name;
        let nomCapitale = listePaysTri[i].capital;
        document.querySelector("#corps").innerHTML += `<tr><td>${i+1}</td><td>${nomPays}</td><td>${nomCapitale}</td></tr>`;
    }
}

function trierParNom() {
    let sens = etatTri === "asc" ? -1 : 1;

    listePaysTri.sort((a, b) => sens * a.name.localeCompare(b.name));

    etatTri = sens === 1 ? "asc" : "desc";
    document.querySelector("#iconeTri").className =
        etatTri === "asc" ? "fa-solid fa-sort-up" : "fa-solid fa-sort-down";

    afficherTableau();
}
