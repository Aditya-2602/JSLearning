
function stringHandsOn(){
    var string = "     Hey you are doing good, keep it up       ";
    console.log(string);

    console.log(`Length of string is ${string.length}`);

    var trimString = string.trim();
    console.log(`Length of trimmed string is ${trimString.length}`);

    console.log(`First character of trimString is ${trimString.charAt(0)}, Last character of trimString is ${trimString.charAt(trimString.length-1)}`);

    var trimStringWord = trimString.split(" ");
    var wordAvailable =  trimStringWord.length;
    console.log(`Total words available in the string after trim are: ${wordAvailable}`);

   var result = string.length - trimString.length;
   console.log(`Total no of extra spaces removed after trim is: ${result}`);

   var result = string.indexOf('good');
   console.log(`Index of word 'good' from given string is: ${result}`);

   var result = string.substring(22);
   console.log(`substring starting from index 22 using substring method is: ${result}`);
   var result = string.slice(22);
   console.log(`substring starting from index 22 using slice method is: ${result}`);

   var result = trimString.endsWith('up');
   console.log(`Is given string ends with word 'up': ${result}`);

   var result = trimString.startsWith('Hey');
   console.log(`Is given string starts with word 'Hey': ${result}`);
}
stringHandsOn();