
const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19]
console.log(`Add 10 in each element of above array`);
const arrayOfTen = arrayNumbers.map((currentValue) => {
      return currentValue + 10;
})
console.log(arrayOfTen);

console.log(`Cube the each array element`);
const arrayOfCube = arrayNumbers.map((currentValue) => {
       return currentValue*currentValue*currentValue;
})
console.log(arrayOfCube);

console.log(`Add index value to corresponding to each array element`);
arrayOfIndex = arrayNumbers.map((currentValue,index) => {
   return currentValue + index;
})
console.log(arrayOfIndex);