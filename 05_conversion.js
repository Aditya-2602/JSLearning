console.log('.........STEP 1----------------');
console.log('Implicit conversion to String');
result = '3' + 2;
console.log(`'3' + 2 = result of addition of "numeric string" type with "number" type is: ${result} `);

result = '3' + true;
console.log(`'3' + true = result of addition of "numeric string" type with "boolean" type is: ${result} `);

result = '3' + undefined;
console.log(`'3' + undefined = result of concatenation of "numeric string" type with "undefined" type is: ${result} `);

result = '3' + null;
console.log(`'3' + null = result of concatenation of "numeric string" type with "null" type is: ${result} `);

console.log('----------------Step 2----------------------');
console.log('Implicit Boolean conversion to Number');
result = '4' - true;
console.log(`'4' - true = Boolean true value is 1, result is: ${result} `);

result = 4 + true;
console.log(`4 + true = Boolean true value is 1, result is: ${result} `);

result = 4 + false;
console.log(`4 + false = Boolean false value is 0, result is: ${result} `);


console.log('---------------Step 3--------------------');
console.log('Implicit string conversion to Number');
result = '4' - '2';
console.log(`'4' - '2'= "string" converted to "number" for substraction result is:${result} `);

result = '4' - 2;
console.log(`'4' - 2= "string" converted to "number" for substraction result is:${result} `);

result = '4' * 2;
console.log(`'4' * 2= "string" converted to "number" for multiplication result is:${result} `);

result = '4' / 2;
console.log(`'4' / 2= "string" converted to "number" for dividation result is:${result} `);

console.log('-----------Step 4--------------');
result = 0 == ''
console.log(`0=='' answer is ${result} because "space" is converted into "number" `);

result = 0=='0'
console.log(`0=='0' answer is ${result} because "string" is converted into "number" `);

result = 0==false;
console.log(`0==false answer is ${result} because "false" is converted into "number" `);

result = null==undefined;
console.log(`null==undefined answer is ${result} because both are undetermined values `);

result = 1==[1];
console.log(`1==[1] answer is ${result} because both have same value number type `);

result = 1==true;
console.log(`1==true answer is ${result} because "boolean" type true converted into 1 as a number  `);

result = 1=='1';
console.log(`1=='1' answer is ${result} because "string" is converted into number & having same value `);










