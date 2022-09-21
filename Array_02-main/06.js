const array = []

array.length = 100

array.fill(0, 0, 100)

console.log(array); // [0, 0, 0, 0, 0, 0, /* ... , */ 0]
