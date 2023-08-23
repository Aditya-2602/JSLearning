
const arrayNumbers =[1,-7,40,502,-77,91,0,108,89,-601];
console.log(`--------Step 1----------`);
arrayNumbers.forEach((currentValue, index) => {
    console.log(`Element: ${currentValue}, Index: ${index}`);
})

console.log(`--------Step 2---------`);
arrayNumbers.forEach((currentValue) => {
    if (currentValue > 0) {
    console.log(`Positive numbers are ${currentValue}`);
    }
})

console.log(`---------Step 3----------`);
arrayNumbers.forEach((currentValue) => {
    if (currentValue < 0 ) {
        let array = [currentValue]
        console.log(array);
    }
    
})

console.log(`-------Step 4---------`);
arrayNumbers.forEach((currentValue) => {
    if (currentValue%2==0) {
        console.log(`Even numbers are ${currentValue}`);
    }
})

console.log(`-------Step 5--------`);
arrayNumbers.forEach((currentValue, index) => {
   if (index%2==0) {
    console.log(`Even index array values are ${currentValue}`);
   }
})

console.log(`--------Step 6----------`)
let sum = 0;
arrayNumbers.forEach((currentValue) => {
   
    sum = sum + currentValue;
    
})
console.log(sum);