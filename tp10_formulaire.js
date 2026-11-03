const ID_CREATEUR = "YannL";
let listeUtilisateurs;

function chargerUtilisateurs() {
  fetch(`https://digicode.cleverapps.io/utilisateurs/${ID_CREATEUR}`)
    .then((response) => response.text())
    .then((text) => {
      listeUtilisateurs = JSON.parse(text);
      afficherUtilisateurs();
    });
}

function afficherUtilisateurs() {
  document.querySelector("#corps").innerHTML = "";
  for (let i = 0; i < listeUtilisateurs.length; i++) {
    let utilisateur = listeUtilisateurs[i];
    document.querySelector("#corps").innerHTML += `<tr>
            <td>${utilisateur.id}</td>
            <td>${utilisateur.nom}</td>
            <td>${utilisateur.prenom}</td>
            <td>${utilisateur.genre}</td>
            <td>${utilisateur.dateNaissance}</td>
            <td>${utilisateur.lieuNaissance}</td>
            <td>${utilisateur.departementNaissance}</td>
            <td>${utilisateur.numeroRue + " rue " + utilisateur.libelleRue + " " + utilisateur.codePostal + " " + utilisateur.ville}</td>
            <td class="poubelle" onclick="demanderSuppression(${utilisateur.id})">🗑️</td>
        </tr>`;
  }
}

function ajouterUtilisateur() {
  document.querySelector("#formulaire").style.display = "block";
}

function creerUtilisateur() {
  let utilisateur = {
    id: null,
    idCreateur: ID_CREATEUR,
    dateMaj: null,
    nom: document.querySelector("#nom").value,
    prenom: document.querySelector("#prenom").value,
    genre: document.querySelector('input[name="genre"]:checked')? document.querySelector('input[name="genre"]:checked').value: null,
    dateNaissance: document.querySelector("#dateNaissance").value,
    lieuNaissance: document.querySelector("#lieuNaissance").value,
    departementNaissance: document.querySelector("#departementNaissance").value,
    numeroRue: document.querySelector("#numeroRue").value,
    libelleRue: document.querySelector("#libelleRue").value,
    codePostal: document.querySelector("#codePostal").value,
    ville: document.querySelector("#ville").value,
  };

  fetch("https://digicode.cleverapps.io/utilisateurs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(utilisateur),
  }).then((response) => {
    return response.text().then((text) => {
      if (response.ok) {
        alert(text);
        document.querySelector("#formulaire").reset();
        document.querySelector("#formulaire").style.display = "none";
        chargerUtilisateurs();
      } else {
        alert(JSON.parse(text).message);
      }
    });
  });
}

let idASupprimer;

function demanderSuppression(id) {
  idASupprimer = id;
  document.querySelector("#modaleSuppression").showModal();
}

function annulerSuppression() {
  document.querySelector("#modaleSuppression").close();
}

function confirmerSuppression() {
  fetch(
    `https://digicode.cleverapps.io/utilisateurs/${ID_CREATEUR}/${idASupprimer}`,
    { method: "DELETE" },
  ).then((response) => {
    return response.text().then((text) => {
      document.querySelector("#modaleSuppression").close();
      if (!response.ok) {
        alert(text);
      }
      chargerUtilisateurs();
    });
  });
}
