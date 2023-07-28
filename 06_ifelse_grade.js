
var voteEligible = function(age){
    if (age==0 || age<0 || age>130 || age==undefined || age==null) {
        console.log(` Age ${age} is Invalid data`);
    } else {
        if (age<18) {
            console.log(` Age ${age} is Not eligible for vote`);
        } else {
            if (age>=18) {
                console.log(` Age ${age} is Eligible for vote`);
            }
            
        }
        
    }
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(undefined);
voteEligible(null);





