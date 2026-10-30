let societe = {
    nom: "Google",
    siegeSocial: "Googleplex, Mountain View, California, United States",
    fondateurs: [
        { nom: "Larry Page", dateNaissance: "26/03/1973", lieuNaissance: "East Lansing, Michigan" },
        { nom: "Sergey Brin", dateNaissance: "21/08/1973", lieuNaissance: "Moscou, Union Soviétique" }
    ],
    chiffreAffaires: [
        { annee: 2008, ca: 16.49 },
        { annee: 2012, ca: 37.97 },
        { annee: 2016, ca: 89.46 },
        { annee: 2018, ca: 136.2 }
    ]
};

console.log("Fondateurs :");
for (let i = 0; i < societe.fondateurs.length; i++) {
    let fondateur = societe.fondateurs[i];
    console.log(`${fondateur.nom}, né le ${fondateur.dateNaissance} à ${fondateur.lieuNaissance}`);
}

console.log("Chiffre d'affaires (en milliards de $) :");
for (let i = 0; i < societe.chiffreAffaires.length; i++) {
    let ligne = societe.chiffreAffaires[i];
    console.log(`${ligne.annee} : ${ligne.ca}`);
}
