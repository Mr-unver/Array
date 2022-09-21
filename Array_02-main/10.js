const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sum = arrayNumbers.reduce((sum, item) => sum + item, 0)
const average = arrayNumbers.reduce((sum, item) => sum + item, 0) / arrayNumbers.length

console.log(sum); // 45
console.log(average); // 5