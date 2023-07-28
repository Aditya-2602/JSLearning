console.log('---------Step 1------------');
function maleMarriageEligibility(gender,age,boyName) {
  var result = gender=="Male" && age>=21 ? `Hey ${boyName} you are eligible for Marriage` : `Hey ${boyName} you are not eligible for Marriage`;
  return result;
}
var res = maleMarriageEligibility("Male",25,"Billgates");
console.log(res);
var res = maleMarriageEligibility("Male",17,"Stew Jobs");
console.log(res);

console.log('---------Step 2-----------');
function femaleMarriageEligibility(gender,age,girlName){
   var result = gender=="Female" && age>=18 ? `Hey ${girlName} you are eligible for Marriage` : `Hey ${girlName} you are not eligible for Marriage`;
return result;
}
var res = femaleMarriageEligibility("Female",16,"Jenifer");
console.log(res);
var res = femaleMarriageEligibility("Female",27,"Malinda Gates");
console.log(res);
