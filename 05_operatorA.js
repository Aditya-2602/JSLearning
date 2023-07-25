console.log('-------Step 1--------');

function squareOfWordLength(name){
   var nameLength = name.length;
   console.log(`Length of ${name} is ${nameLength}`);
   var squareLength = nameLength*nameLength;
   return squareLength;
   
}
var res = squareOfWordLength("JavaScript");
console.log(`Length of square is ${res}`);
var res = squareOfWordLength("Google Chrome");
console.log(`Length of square is ${res}`);
var res = squareOfWordLength("Developer Smart");
console.log(`Length of square is ${res}`);

console.log('---------Step 2-----------');
var display = function(){
 str = "I am Angular Developer";
   var length = str.length;
   var word = str.split(" ");
   var wordCount =  word.length;
     var res = length/wordCount;
     console.log(`String length is ${length}`);
     console.log(`Total no of words are ${wordCount}`);
     console.log(`String length divided by total no of words is ${res}`);
}
display("")