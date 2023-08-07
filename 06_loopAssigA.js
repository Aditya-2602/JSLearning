console.log(``);
function vowelCount(str){
    let count = 0;
    for (let index = 0; index < str.length; index++) {
        let char = str.charAt(index);
        
    if (char=='a' || char=='e' || char=='i'|| char=='o'|| char=='u'
    || char=='A'|| char=='E'|| char=='I'|| char=='O'|| char=='U') {
        console.log(char);
        count = count + 1;
    }
}
console.log(`Total no of vowels is ${count}`);
}
vowelCount("I am very good IT Developer");

console.log(`Sum of cube of number from 1 to 5 is`);
function sumOfCube(){
    var sum = 0;
    for (let index = 1; index <=5; index++) {
           sum = sum + index*index*index;
        }
        console.log(sum);
}
sumOfCube(5);

function oddPositionedChars(string){
        var str = " ";
    for (let index = 0; index < string.length; index++) {
        var char = string.charAt(index);
        if (index%2!==0 && char!==" ") {
           str = str + char;
        }
        
    }
    console.log(`Odd positioned characters are${str}`);
}
oddPositionedChars("Hard work always pays back");
oddPositionedChars("Soon I will be Angular IT Champ");





