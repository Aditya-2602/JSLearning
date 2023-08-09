
const arrayNums = [20,3,4,56,90,400,49]
// perform shallow clone
let newArray = arrayNums;
newArray.push(55,66);
console.log(`original array is ${arrayNums}`);
console.log(`Cloned array is ${newArray}`);

console.log(`========Step 3==========`);
const employee_info = {
  emp_id: 27,
  emp_name: "John Doe",
  salary: {
    july_month: "40,0000INR",
    aug_month: "50,0000INR",
    jun_month: "65,0000INR"
  },
  address: {
    locality: {
      colony: "OM Vrindavan Society",
      street: "Kanch Pokli, 431202",
    },
    city: "Mumbai",
    state: "Maharashtra",
    country:"India"
  },
  mobiles: ["+91 8600 3456 88", "1800-4567 32", "+91- 9096 5678 77"]
}

console.log(employee_info.address.locality, employee_info.address.city, employee_info.address.state, employee_info.address.country);
console.log(employee_info.mobiles);

// perform deep clone using JSON.stringfy()
console.log(`Update the newEmployee salary with 80K`);
 let newEmployee = JSON.parse(JSON.stringify(employee_info));
 newEmployee.salary.july_month = "80,0000INR";
 console.log(newEmployee.salary.july_month);

 console.log(`Update country: United kingdom to original object`);
  employee_info.salary.country = "United Kingdom";
  console.log(employee_info.salary.country);

  console.log(newEmployee);

  // Deep clone using spread operator
  arrayNums.push(10,25);
  console.log(arrayNums);
    let numArray = {...arrayNums};
    console.log(numArray);

    // merge the arrayEven with arrayNums
    arrayEven = [2,30,14,8]; 
     let mergedObject = {...arrayNums,arrayEven};
     console.log(mergedObject);