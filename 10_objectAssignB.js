console.log(`Clone the below two objects using Object.assign() & spread operator method`);
let bankSbi = {
    bankName: "State Bank of India",
    branch: "Katraj",
    accountNo: 344486,
    ifsc: "SBIN00033",
}

let bankLocation = {
    street: "Solapur Road",
    city: "Pune",
    pinCode: 411016,
}
console.log(`Using Object.assign() method`);
    let bankAxis = Object.assign({}, bankSbi);
    bankAxis.branch = "Kothrud";
    console.log(`Axis Bank reference ${bankAxis.branch}`);
    console.log(`State Bank reference ${bankSbi.branch} `);

console.log(`-----------------------------------`);

   let bankCity = Object.assign({}, bankLocation);
   bankCity.street = "Satara Road";
   console.log(`bankCity reference is ${bankCity.street}`);
   console.log(`bankLocation reference is ${bankLocation.street}`);
   console.log(`--------------------------------`);

console.log(`Using Spread Operator`);
let bankDena = {...bankSbi}
bankDena.branch = "Warje";
console.log(`bankDena reference is ${bankDena.branch}`);
console.log(`bankSbi reference is ${bankSbi.branch}`);
console.log(`----------------------------------`);

let bankCity1 = {...bankLocation};
bankCity1.street = "JM Road";
console.log(`bankCity1 reference is ${bankCity1.street}`);
console.log(`bankLocation reference is ${bankLocation.street}`);
console.log(`-----------------------------------`);

console.log(`Create the object using literals rateOfInterest`);
 let rateOfInterest = {
    homeLoanInterest: "7%",
    personalLoanInterest: "7.5%",
    dueInterest: "8%",
 }

let sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest);
console.table(sbiDetails);

console.log(`Traverse the sbiDetails Object`);
for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(element);
    }
}

                   