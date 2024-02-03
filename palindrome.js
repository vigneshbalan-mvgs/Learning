//palindrome is a word that repeat it self 

function isPalindrome (str) {

  //split = spliting every character using "" non spaced 
  //then we reverse the order of the characters
  //then we will join the character using join with "" non spaced input
  const reverseStr = str.split("").reverse().join("");
  
  return reverseStr === str;
}



console.log(isPalindrome("ses"))
