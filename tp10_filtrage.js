let data;

function initialiserDonnees() {
  fetch("https://digicode.cleverapps.io/json/pays/pollution")
    .then(function (response) {
      return response.text();
    })
    .then(function (text) {
      data = JSON.parse(text);
      afficherDonnees(0, Number.MAX_VALUE);
    });
}

function afficherDonnees(min, max) {
  document.querySelector("#corps").innerHTML = "";

  document.querySelector("#titre").textContent =
    `Pays les plus polluants pour le ${data.polluant} (${data.unite}) en ${data.annee}`;
  document.querySelector("#annee").textContent = data.annee;

  for (let i = 0; i < data.pays.length; i++) {
    if (data.pays[i].valeur >= min && data.pays[i].valeur <= max) {
      document.querySelector("#corps").innerHTML += `<tr>
                        <td class="drapeau"><img src="https://flagcdn.com/24x18/${data.pays[i].code}.png"></td>
                        <td>${data.pays[i].nom}</td>
                        <td>${data.pays[i].valeur}</td>
                        <td>${data.pays[i].pourcentage}</td>
                    </tr>`;
    }
  }
}

function valider() {
  let min = document.querySelector("#minimum").value;
  let minValue;
  let max = document.querySelector("#maximum").value;
  let maxValue;

  // Convertir les valeurs min et max en nombres, en gérant les cas où elles sont vides
  if (min === "") {
    minValue = 0;
  } else {
    minValue = Number(min);
  }
  if (max === "") {
    maxValue = Number.MAX_VALUE;
  } else {
    maxValue = Number(max);
  }

  // Vérifier les valeurs négatives et les incohérences
  if (minValue < 0 || maxValue < 0) {
    window.alert(
      "Les valeurs ne peuvent pas être négatives. Veuillez entrer des valeurs positives.",
    );
    return;
  }
  if (minValue > maxValue) {
    window.alert(
      "La valeur minimale ne peut pas être supérieure à la valeur maximale. Veuillez entrer des valeurs cohérentes.",
    );
    return;
  }

  afficherDonnees(minValue, maxValue);
}
