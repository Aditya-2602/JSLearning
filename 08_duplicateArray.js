console.log(`WAP to remove duplicate elements from array`);
var array = [4,5,4,5,8,5,7,8,9,7,8];
function getUnique(array){
    
    let uniqueArr = [];

    for(let element of array) {
        if(uniqueArr.indexOf(element) === -1) {
            uniqueArr.push(element);
        }
    }
    console.log(uniqueArr);
}
getUnique(array);








    










