const arrays = [
  [0, 1, 2, 3],
  [10, 2, 5, 8],
  [12, 5, 23, 25],
  [0, -2, 4, 10],
  [-1, 0, 54, 32]
];

console.log(arrays)

for (let i = 0; i < arrays.length; i++) {
  {
      const arrayNumber = arrays[i]
      const arrayIndex = arrayNumber[0]
      if (arrayIndex === 0)
      {
           arrayNumber.shift()
      }
  }
}

console.log(arrays)
/*
[
  [1, 2, 3],
  [10, 2, 5, 8],
  [12, 5, 23, 25],
  [-2, 4, 10],
  [-1, 0, 54, 32]
]
*/