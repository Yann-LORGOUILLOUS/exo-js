function creerGestionnaire() {
    return {
        taches: [],

        ajouterTache(description) {
            this.taches.push({ 
                description: description, 
                terminee: false });
        },

        terminerTache(index) {
            this.taches[index].terminee = true;
        },

        afficherTaches() {
            for (let i = 0; i < this.taches.length; i++) {
                let etat = this.taches[i].terminee ? "terminée" : "non terminée";
                console.log(i + " - " + this.taches[i].description + " : " + etat);
            }
        }
    };
}

let gestionnaire = creerGestionnaire();

gestionnaire.ajouterTache("Faire l'exercice JS");
gestionnaire.ajouterTache("Appeler DIGINAMIC");
gestionnaire.ajouterTache("Rendre son dossier");
gestionnaire.terminerTache(1);
gestionnaire.afficherTaches();
