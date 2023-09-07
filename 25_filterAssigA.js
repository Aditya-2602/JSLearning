
const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];
console.log(`find the numbers which are greater than 50`);

const array = arrayNumbers.filter((currentvalue) =>{
    return currentvalue > 50;
})
console.log(array);

console.log(`find the all even numbers from array`);
const array1 = arrayNumbers.filter((currentvalue) => {
   return currentvalue%2==0;
})
console.log(array1);

console.log(`find out the all odd numbers from array`);
const array2 = arrayNumbers.filter((currentvalue) => {
   return currentvalue%2!==0;
})
console.log(array2);

console.log(`find the numbers which are multiple of 5`);
const array3 = arrayNumbers.filter((currentvalue)=> {
     return currentvalue%5==0;
})
console.log(array3);

console.log(`find the numbers between 20 to 50`);
 const array4 = arrayNumbers.filter((currentvalue) =>{
   return currentvalue<=50 && currentvalue>=20;
})
console.log(array4);



