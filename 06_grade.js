
function gradeCalculation(marks){
      var marksValue = +marks;
if (marks>=90) {
    console.log(`Fantastic Marks:${marks}, Your grade is A+ `);
} else {
    if (marks>=75 && marks<90) {
        console.log(`Excellent Marks:${marks}, Your grade is A`);
    } else {
        if (marks>=50 && marks<75) {
            console.log(`Good Marks:${marks}, Your grade is B`);
        } else {
            if (marks>=35 && marks<50) {
                console.log(`Marks is ${marks},Your grade is C, Need improvement.`);
            } else {
            if (marks=0 || marks<0 || marks>100 || isNaN(marksValue) || marks==undefined)   {
                    console.log(`${marks} Please provide the valid marks`);
                }
            }
        }
    }
}
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(undefined);
gradeCalculation(null);




