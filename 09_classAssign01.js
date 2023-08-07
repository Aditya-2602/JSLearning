console.log(`Define a class 'Vehicle' which contains 5 properties`);
class Vehicle {
    constructor(company,model,speed,establishedYear,country){
        this.company = company;
        this.model = model;
        this.speed = speed;
        this.establishedYear = establishedYear;
        this.country = country;

    }
    
   }
   let vehicleTata = new Vehicle("Tata","Nexon",120,2020,"India")
   let vehicletvs = new Vehicle("TVS","Apache",100,2008,"China")
   let vehiclehonda = new Vehicle("Honda","Activa",90,2015,"Japan")
   let vehiclehero = new Vehicle("Hero","Splender",95,2002,"Korea")
   let vehicleToyota = new Vehicle("Toyota","Innova",160,2010,"USA")

   const arrayOfVehicles = [vehicleTata,vehicletvs,vehiclehonda,vehiclehero,vehicleToyota];

   for (const vehicle of arrayOfVehicles) {
    console.log(`Vehicle has company - ${vehicle.company}, model - ${vehicle.model}, speed - ${vehicle.speed}, establishedYear - ${vehicle.establishedYear}, country - ${vehicle.country}`)
   }
   console.log(`------------------------------------------------------`);
   console.log(`Define a class 'College' which contains 4 properties`);
   class College {
     constructor(name,location,principal,establishedYear,course){
        this.name = name;
        this.location = location;
        this.principal = principal;
        this.establishedYear = establishedYear;
        this.course = course;
     }
     display(){
        console.log(`College Name is ${this.name}, Its location is ${this.location}, Principal name is ${this.principal}, College founded in ${this.establishedYear}, Course available in college is ${this.course}`);
     }
   }
   let collegeTrinity = new College("Trinity","Katraj","Mr.Jadhav sir",2008,"Engineering");
   let collegesinhgad = new College("Sinhgad","Vadgaon","Mr.Navale sir",2007,"MBA");
   let collegejspm = new College("JSPM","Hadapsar","Mr.Sawant sir",2006,"BBA");
   let collegevit = new College("VIT","Kondhwa","Mr.Lokhande sir",2005,"MBBS");

  collegeTrinity.display();
  collegesinhgad.display();
  collegejspm.display();
  collegevit.display();

  console.log(`-------------------------------------------------`);
  function traverseObject(object) {
    for (const key in object) {
      if (Object.hasOwnProperty.call(object, key)) {
         const element = object[key];
         console.log(element);
      }
    }
  }
  traverseObject(collegeTrinity);
  console.log(`--------------`);
  traverseObject(collegejspm);
  console.log(`--------------`);
  traverseObject(collegesinhgad);
  console.log(`--------------`);
  traverseObject(collegevit);


  
