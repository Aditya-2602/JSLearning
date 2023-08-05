

function stringBasics(){
   var word = 'My dream company is "TCS"';
   console.log(word);

   var hobby1 = "Long driving";
   var hobby2 = "Watching web series";
   var hobby3 = "Playing Volleyball";
   console.log(`hobby1 is: ${hobby1}, hobby2 is: ${hobby2}, hobby3 is: ${hobby3} `);

   let result = hobby1.length + hobby2.length + hobby3.length;
   console.log(`Sum of characters of hobby1 + hobby2 + hobby3 is: ${result}`);
}
stringBasics();