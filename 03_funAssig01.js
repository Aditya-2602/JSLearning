console.log('.........1..........');
function show(){
    console.log("Angular Developer");
}
show();

function details(){
    console.log("React Developer");
}
details();

console.log('........2..........');
function personalDetails(firstName,lastName,collegeName){
    console.log('First Name:',firstName,"Last Name:",lastName,"College Name:",collegeName);
}
personalDetails("Aditya,","Bhange,","TCOER,");

console.log('...........3............');
function swapValues(arg1,arg2){
   console.log("Before swap:",arg1,arg2);
   var temp = arg1;
   var arg1 = "Virat";
   var arg2 = "Anushka";
   arg1 = arg2;
   arg2 = temp;
   console.log("After swap:",arg1,arg2);
}
swapValues("Virat","Anushka");
swapValues("1000","2000");

console.log('.........4..........');
function addThreeValues(num1,num2,num3){
   var addition = num1 + num2 + num3;
   return addition;
}
var result =  addThreeValues(10.23,600,40)
console.log('Addition of three numbers is:', result);
var result =  addThreeValues("Hello","Good","Morning");
console.log("Addition of three words is:",result);
