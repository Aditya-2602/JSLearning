
function reverseString(string){
    let reverse =" ";
    for (let index = string.length-1; index >=0; index--) {
        const char = string.charAt(index);
        if (char!== ' ') {
            reverse = reverse.concat(char)
        }
            
       
    }
    console.log(`Reverse string of "Hard work always pays back" is${reverse}`);
}
reverseString("Hard work always pays back");