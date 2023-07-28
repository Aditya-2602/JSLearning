
var tcsEligibility = function(gradScore,hscScore,sscScore,candidateName){
   var result = gradScore>=70 || hscScore>=80 || sscScore>90 ? `Congrats ${candidateName} you are eligible for TCS interview` : `${candidateName} Unfortunately you are not eligible for TCS interview `
console.log(result);
}
tcsEligibility(80,60,90,"Aditya");
tcsEligibility(70,65,55,"Ganesh");
tcsEligibility(60,79,80,"Rohit");
