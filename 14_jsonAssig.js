
let profile=`{
    "name":"Aleix Melon",
    "id":"E00245",
    "role":["Dev","DBA"],
    "age":23,
    "doj":"11-12-2019",
    "married":false,
    "address":{
        "street":"32,Laham St.",
        "city":"Innsbruck",
        "country":"Austria"
    },
    "refferred by":"E0012"
}`
const newProfile=JSON.parse(profile);
console.log(`type of newProfile: ${typeof newProfile}`);
console.log(`Role: ${newProfile.role[0]}`);
console.log(`Name: ${newProfile.name.split(" ")[1]}`);
console.log(`Joining year of employee: ${newProfile.doj.split("-")[2]}`);
  
// check 11 or 21 is prime no or not:-

function primeNo(num){
    if (num%2!==0 || num==2 ) {
        console.log(`${num} is a prime no`);
    } else{
        console.log(`${num} is not a prime no`);
    }
}
primeNo(21);
primeNo(11)
primeNo(2)