let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, 1];
let firstLast;

if (array.length > 0 && array[0] === array[array.length - 1]) {
    firstLast = true;
} else {
    firstLast = false;
}

console.log(firstLast);