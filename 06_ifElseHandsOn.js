console.log('---------Step 1----------');
function display(value){
   var result = value%2==0 ? "EVEN" : "ODD";
   console.log(`${value} is ${result}`);
}
display(45);
display(70);
display(67);
display(98);

console.log('--------Step 2---------');
function totalChar(char){
    str = "JavaScript-ES6";
   var len = str.length;
  var result = len>10 ? "JavaScript-ES6 String contains more than 10 characters" : "JavaScript-ES6 String contains less than 10 characters"
    console.log(result);
}
totalChar("");

console.log('--------Step 3---------');
function check(value){
    if (value.startsWith("Java")) {
        console.log(`${value} string starts with Java`);
    }
}
check("JavaScript Language");