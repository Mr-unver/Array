const array1 = [true, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const array2 = [false, -2, -1, 0, 1, 2, 3, 4, 5, 6];

function res (arr) {
  const temp = arr.slice();
    if (temp[0] === true){
      temp.shift()
      temp.reverse()
      }
    else {
      temp.shift()
      }
  return temp
}

const finalArray1 = res(array1)
const finalArray2 = res(array2)

console.log(array1); // [true, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(array2); // [false, -2, -1, 0, 1, 2, 3, 4, 5, 6]

console.log(finalArray1); // [9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(finalArray2); // [-2, -1, 0, 1, 2, 3, 4, 5, 6]