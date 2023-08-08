console.log(`Merge the below two objects`);
let personalDetails = {
    name: "Aditya Bhange",
    age: 25,
    hobby: "Playing Volleyball",
    isMarried: "No",
    }

    let collegeDetails = {
        collegeName: "Trinity",
        address: "kondhwa",
        city: "Pune",
        course: "MBA",
    }

let mergedObject = Object.assign({}, personalDetails, collegeDetails)
console.table(mergedObject);

console.log(`Create an array of your friend name & freeze it`);
 var array = ["Ganesh", "Shubham", "Karan", "Ram"];
 Object.freeze(array);
 array[1] = "Mohit";
 console.log(array);

 for (const value of array) {
    console.log(value);
 }

 console.log(`reverse the string word 'Technology'`);
 function reversestr(string){
    let reverse = " ";
    for (let index =string.length-1; index >8; index--) {
       let char = string.charAt(index);
       reverse = reverse.concat(char)
        
    }
    console.log(reverse);
 }
 reversestr("Codemind Technology");

