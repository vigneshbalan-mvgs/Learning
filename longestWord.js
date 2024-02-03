function findLongestWord(sentence) {
  const words =  sentence.split(" ");
  let longestWord = "";
  
  for (let word of words) {
   if (word.length > longestWord.length) {
    longestWord = word;
   } 
  }
  return longestWord;
  
}


console.log(findLongestWord("i love the world more then anyone in the this whole world"))
