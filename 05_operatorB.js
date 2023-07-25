console.log('------Step 1--------');
var greaterNumber = function(num1,num2){
var res = num1>num2 ? num1 : num2;
console.log(`Among ${num1} & ${num2}, ${res} is greater `);
}
greaterNumber(10,-10);
greaterNumber(800,899);


console.log('-------Step 2----------');
var num = 29;
var isEvenOrOddNum = num%2==0 ? "Even" : "Odd";
console.log(`The number 29 is ${isEvenOrOddNum}`);

var num = 44;
var isEvenOrOddNum = num%2==0 ? "Even" : "Odd";
console.log(`The number 44 is ${isEvenOrOddNum}`);

var num = 0;
var isEvenOrOddNum = num%2==0 ? "Even" : "Odd";
console.log(`The number 0 is ${isEvenOrOddNum}`);

var num = 101;
var isEvenOrOddNum = num%2==0 ? "Even" : "Odd";
console.log(`The number 101 is ${isEvenOrOddNum}`);

console.log('--------Step 3---------');
var wordLength = function(name){
   var length = name.length;
   var result = length%2==0 ? "Even" : "Odd";
   console.log(`${name} length is ${result}`);
}
wordLength("JavaScript");
wordLength("developer");
wordLength("Google");
