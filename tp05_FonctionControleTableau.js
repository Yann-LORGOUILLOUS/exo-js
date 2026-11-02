function controleTableau(tableau) {
    for (let i = 0; i < tableau.length; i++) {
        if (typeof tableau[i] !== 'number') {
            return false;
        }
    }
    return true;
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [1, "test", 3];
let array3 = [];

console.log(controleTableau(array1));
console.log(controleTableau(array2));
console.log(controleTableau(array3));
