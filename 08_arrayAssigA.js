console.log(`Log the first & last element in the arrayFruits`);
const arrayFruits =["Banana","Orange","Apple","Mango","Water Melon"];
let element0 = arrayFruits[0];
console.log(`First element in the arrayFruits is: ${element0}`);

let lastElement = arrayFruits[arrayFruits.length-1];
console.log(`Last element in the arrayFruits is: ${lastElement}`);

console.log(`Add the element "Papaya" before "Banana"`);
arrayFruits[0] = "Papaya";
console.log(`${arrayFruits}`);

console.log(`Remove Mango from the array`);
arrayFruits.splice(3,1);
console.log(arrayFruits);

console.log(`Add element "Pineapple" at the last position`);
arrayFruits.push("Pineapple")
console.log(arrayFruits);

console.log(`Add element "Dragon fruit" before "Water Melon"`);
arrayFruits.splice(3,0,"Dragon Fruit");
console.log(arrayFruits);

console.log(`Replace an element "Orange" with "Kiwi"`);
arrayFruits.splice(1,1,"Kiwi");
console.log(arrayFruits);

console.log(`Log the elements starting from 1 to 4`);
console.log(arrayFruits.slice(1,4));

console.log(`Only select last 3 elements`);
console.log(arrayFruits.slice(3,6));
