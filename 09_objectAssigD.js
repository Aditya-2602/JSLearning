
professor = {
    name: "Mr.Sawant sir",
    college: "COEP",
    age: 48,
    subject: "Java",
    department: "computer",
    degrees: {
    engineering: "CSC",
    phd: "Adv Computing",
    pg: "MS USA",

    getDegrees: function(){
       console.log(`Teacher degrees are: ${this.engineering}, ${this.phd}, ${this.pg} `);
    }
   },
    certificates: ['Hacker Rank Participation','Cerificate in IFE course','Certificate in Adv Programming'],
    
    }
    
    professor.degrees.totalExperience = "14 years";
    professor.college = "Trinity";
   
    console.log(professor);
    professor.degrees.getDegrees();
    console.log(`Last element of array is: ${professor.certificates[2]} `);
