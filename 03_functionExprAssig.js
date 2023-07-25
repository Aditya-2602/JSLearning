console.log('-------Step 1----------');
  var squareOfNum = function (num){
    var result = num*num;
    console.log('Square of', num, result);
  }
  squareOfNum(5);
  squareOfNum(6);
  squareOfNum(25);
  squareOfNum(100);
  squareOfNum(67.89);
  squareOfNum(59);

  console.log('--------Step 2---------');
  console.log('Type of function is', typeof squareOfNum);

  console.log('-------Step 3---------');
  var areaRect = function(L,B){
           var result = L*B;
           console.log('Area of Rectangle L=499 & B=917 is', result);
          }
 areaRect(499,917);

 console.log('------Step 4--------');
 var swapValues = function(agr1,arg2){
    console.log('Before swap:',arg1,arg2);
    var temp = arg1;
     arg1 = arg2;
    arg2 =  temp;
    console.log('After swap',arg1, arg2);
}
var arg1 = "Mahi";
var arg2 = "Raina";
swapValues("Mahi","Raina");
var arg1 = "55";
var arg2 = "77";
swapValues("55","77");


console.log('-------Step 5---------');
var givenString = function(string){

var result = string.length;
console.log('Total characters available in the string is:', result);

var result = string.charAt(6);
console.log('Character at index 6 is', result);

var result = string.charAt(11);
console.log('Character at index 11 is', result);

var lenStr = string.charAt(string.length-1);
console.log('Last character in the string is:',lenStr);

var result = string.charAt(0);
console.log('First character from the string is:', result);

var thirdChar = string.charAt(string.length-3);
console.log('Third last character from the string is:', thirdChar);

var splitString = string.split("");
var count = splitString.length;
var squareValue = count * count;
console.log('Total no of words in given string:', count);
console.log('Square of total no of words:', squareValue);
}
givenString("JS the most popular language of internet");


