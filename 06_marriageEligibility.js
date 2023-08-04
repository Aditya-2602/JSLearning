
function eligibility(gender,age){
  if (gender=="Male" && age>=21) {
    console.log(`Congrats, You are eligible for Marriage`);
  } else {
    if (gender=="Female" && age>=18) {
        console.log(`Congrats, You are eligible for Marriage`);
    } else {
        if (gender=="Male" && age<21) {
            console.log(`Sorry, You are not eligible for Marriage`);
        } else {
            if (gender=="Female" && age<18) {
             console.log(`Sorry, You are not eligible for Marriage`);   
            } else {
                if (gender=="Other") {
                    console.log(`Sorry, You are not eligible for Marriage`);     
                }
            }
            
        }
    }
    
  }
}
eligibility("Male",17);
eligibility("Male",25);
eligibility("Female",28);
eligibility("Female",16);
eligibility("Other",35);
eligibility("Other",41);
