var num = 10;
var num2 = num++; // num2 = num + 1
console.log(`Value of num : ${num}`);
console.log(`Value of num2 : ${num2}`);

var num4 = 10;
var num5 = ++num4; // num4 = num4 + 1
console.log(`Value of num : ${num4}`);
console.log(`Value of num2 : ${num5}`);

var num6 = 5;
var num7 = --num6; // num7 = num6 - 1
console.log(`Value of num6 : ${num6}`);
console.log(`Value of num7 : ${num7}`);

console.log(`================================`);

// WAP to print numbers from 0 to 10
// start index = 2
// condition: <= 10
// increment = 1

for (let index = 0; index <= 10; index++) {
    console.log(index); 
}
console.log(`---------------------------`);
// Log numbers from 5 to 20
for (let index = 5; index <=20; index++) {
    console.log(index);
}

console.log(`---------------------------`);
// 10 to 1
for (let index = 10; index >=1; index--) {
   console.log(index);
}
console.log(`---------------------------`);
// 5 table
for (let index = 5; index <=50 ; index=index+5) {
    console.log(index);  
}
console.log(`----------- 7 table by revese porder----------------`);
for (let index = 70; index>=7; index=index-7) {
    console.log(index);
    
}

console.log(`First 5 odd numbers`);
// First 5 odd numbers
for (let index = 1; index <10 ; index=index+2) {
    console.log(index); 
}

console.log(`First 15 even numbers`);
// First 15 even number
for (let index = 0; index <30 ; index=index+2) {
    console.log(index); 
}

// Infinite Loop
// for (let index = 10; index > 0; index++) {
//     console.log(index);   
// }

console.log(`-------While Loop--------`);
// Numbers from 1 to 10
var i = 1;
while (i<=10) {
    console.log(`${i}`);
    i++;
}