
const arrayNumbers =[20,31,40,25,23,11,29,9,60,2,11];

const len = arrayNumbers.length;
console.log(`Total elements available in the array is ${len}`);

let element1 = arrayNumbers[0]
console.log(`First element in the array is ${element1}`);

let lastElement = arrayNumbers[arrayNumbers.length-1];
console.log(`Last element in the array is ${lastElement}`);

let thirdLastElement = arrayNumbers[arrayNumbers.length-3];
console.log(`Third last element in the array is ${thirdLastElement}`);

console.log(`Even positioned elements are`);
let addition = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
   let char = arrayNumbers[index];
   if (index%2==0) {
      console.log(arrayNumbers[index]);
      addition = addition + index;
   
   }
   
   
}

console.log(`Odd positioned elements are`);
   //  let sumation = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
      //   let char = arrayNumbers[index];
   if (index%2!==0) {
      console.log(arrayNumbers[index]);
   //  addition = addition + char;
      
   }
   
   
}

console.log(`Sum of all numbers of arrayNumbers`)
let sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
      let char = arrayNumbers[index];
      sum = sum + char;
}
console.log(sum);

console.log(`Find the numbers which are multiple of 5`);
for (let index = 0; index < arrayNumbers.length; index++) {
   let char = arrayNumbers[index];
   if (char%5==0) {
      console.log(char);
   }
   
}


let is115Available = arrayNumbers.includes(115);
console.log(`Is 115 available in arrayNumbers:- ${is115Available}`);


let is23Available = arrayNumbers.includes(23);
console.log(`Is Number 23 available in arrayNumbers: ${is23Available}`);

console.log(`Insert Number 55, 66 before index 3 & log the array on console`);
arrayNumbers.splice(3,0,55,66);
console.log(arrayNumbers);

console.log(`Delete 3 elements starting from index 4 & log the array on console `);
 arrayNumbers.splice(4,3)
 console.log(arrayNumbers);

 console.log(`Find the all even numbers in arrayNumbers`);
 for (let index = 0; index < arrayNumbers.length; index++) {
       let char = arrayNumbers[index];
   if (char%2==0) {
      console.log(char);
   }
   
 }

 console.log(`Find the all odd numbers in arrayNumbers`);
 for (let index = 0; index < arrayNumbers.length; index++) {
     let char = arrayNumbers[index];
   if (char%2!==0) {
      console.log(char);
   }
   
 }










