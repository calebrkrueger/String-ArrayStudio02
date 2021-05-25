let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//a) Use the 'includes' method to check to see if the words in each string are separated by commas (,), semicolons (;) or just spaces.

//strings[0].includes(",");
console.log(protoArray1.includes(','));
console.log(protoArray2.includes(';'));
console.log(protoArray3.includes(' '));
console.log(protoArray4.includes(','));

//b) If the string uses commas to separate the words, split it into an array, reverse the entries, and then join the array into a new comma separated string.
//if(protoArray1.includes(",")) {
  
  let newPA1 = protoArray1;
  newPA1 = newPA1.split(',').reverse().join(',');
  console.log(newPA1);
  //}
 //let newPA4 = protoArray4;
 // newPA4 = newPA4.split(',').reverse().join(',');
 // console.log(newPA4);

//c) If the string uses semicolons to separate the words, split it into an array, alphabetize the entries, and then join the array into a new comma separated string.
let newPA2 = protoArray2;
  newPA2 = newPA2.split(';').reverse().join(';');
  console.log(newPA2);


//d) If the string uses spaces to separate the words, split it into an array, reverse alphabetize the entries, and then join the array into a new space separated string.

let newPA3 = protoArray1;
  newPA1 = newPA1.split(',').reverse().join(',');
  console.log(newPA1);

//e) If the string uses ‘comma spaces’ to separate the list, modify your code to produce the same result as part “b”, making sure that the extra spaces are NOT part of the final string.
let newPA4 = protoArray4;
newPA4 = newPA4.split(', ').reverse().join(',');
  console.log(newPA4);