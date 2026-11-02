function moyenne(tableau) {
    if (tableau.length === 0) {
        return 0;
    }
    let somme = 0;
    for (let i = 0; i < tableau.length; i++) {
        if (typeof tableau[i] !== 'number') {
            return "Erreur : pas un nombre";
        }
        somme += tableau[i];
    }
    return somme / tableau.length;
}

let array1 = [102, 11, 547];
let array2 = [];
let array3 = ["test"];

console.log(moyenne(array1));
console.log(moyenne(array2));
console.log(moyenne(array3));
