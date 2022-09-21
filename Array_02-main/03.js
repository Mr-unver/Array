const array = [1, 2, [3, 4], [[5, 6], [7, 8]], [[[9]]]];

const flattedArray = array.flat(Infinity)

console.log(flattedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
