let data;

function initialiserDonnees() {
  fetch("https://digicode.cleverapps.io/json/pays/pollution")
    .then(function (response) {
      return response.text();
    })
    .then(function (text) {
      data = JSON.parse(text);
      afficherDonnees();
    });
}

function afficherDonnees() {
  document.querySelector("#titre").textContent =
    `Pays les plus polluants pour le ${data.polluant} (${data.unite}) en ${data.annee}`;
  document.querySelector("#annee").textContent = data.annee;

  for (let i = 0; i < data.pays.length; i++) {
    document.querySelector("#corps").innerHTML += `<tr>
                    <td class="drapeau"><img src="https://flagcdn.com/24x18/${data.pays[i].code}.png"></td>
                    <td>${data.pays[i].nom}</td>
                    <td>${data.pays[i].valeur}</td>
                    <td>${data.pays[i].pourcentage}</td>
                </tr>`;
  }
}
