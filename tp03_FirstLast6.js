let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let firstLast6;

if ((array.length > 0) && (array[0] === 6 || array[array.length - 1] === 6)) {
    firstLast6 = true;
} else {
    firstLast6 = false;
}

console.log(firstLast6);