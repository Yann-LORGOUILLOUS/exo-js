function calculs(a, b) {
    let objetLitteral = {
        somme: a + b,
        soustraction: a - b,
        multiplication: a * b,
        division: a / b
    };
    return objetLitteral;
}

console.log(calculs(3, 7));
