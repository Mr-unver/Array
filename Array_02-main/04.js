const arrayNumbers = [10, -2, -3, 0, 1, 30, 25];

arrayNumbers.sort(function sortNumber (a, b) { return b - a; })

console.log(arrayNumbers); // [30, 25, 10, 1, 0, -2, -3]
