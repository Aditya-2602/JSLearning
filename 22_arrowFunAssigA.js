console.log(`-------Step 1------------`);
let arrowFun = function(){
    console.log(`Good Morning, Today is Tuesday`);
}
arrowFun();

console.log(`--------Step 2---------`);
let multiply = (num1,num2,num3=1) => {
    console.log(`Multilplication of ${num1},${num2} & ${num3} is ${num1*num2*num3}`);
}
multiply(5,5,2);
multiply(10,4)

console.log(`----------Step 3----------`);
let add = (num1,num2,num3,num4,num5) => {
    
    var result = num1 + num2 + num3 + num4 + num5;
    return result
}
let result = add(100,100,200,349,756);
console.log(`Addition of 100,100,200,349 & 756 is ${result}`);
let res = add("I am"," learning ", "ES6", " features ", "in depth");
console.log(res);



