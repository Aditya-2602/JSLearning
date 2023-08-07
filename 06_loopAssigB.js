
function reverseString(string){
        let reverse = " ";
    for (let index = string.length-1; index >=0; index--) {
        const char = string.charAt(index);
        if (char!== ' ') {
            reverse = reverse.concat(char)
        }
            
       
    }
    console.log(`Reverse string is${reverse}`);
    
}
reverseString("Hard work always pays back");
reverseString("Soon I will be Angular IT Champ");

function reverseString1(string1){
    let reverse1 = " ";
    for (let index = string1.length-1; index>=0; index--) {
    
       let char = string1.charAt(index);
        reverse1 = reverse1.concat(char);
    }
    console.log(`Reverse string of 2 is ${reverse1}`);
}
reverseString1(" I am too much beautiful than you");