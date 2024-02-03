function reverseStiring(str) {
  let reversed = "";// init the reversed before the for loop  

  //reversing the order of the string by chosing the calucaltion the 
  //string length and running the loop that many time to change the every value indexOf(
  //value like we can specify the strings letter by str[1] if its an array its going to get the value 
  //or its a string we going to get the first letter of the str
  //);
   for (let i = str.length -1; i >= 0; i--) {
    reversed +=  str[i];
    
  }
  return reversed;
}

//using the inbuild javascript functions 
function reversestring(str) {
 
  return  str.split("").reverse().join("");
  
}


console.log(reverseStiring("Hello everyone"));
console.log(reversestring("Hello everyone"));
