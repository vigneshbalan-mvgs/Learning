// remove dublicate also we can use Set 

function removeDuplicate (arr) {
const uniqelement = "";
  for (let i = 0; i < arr.length; i++) {
   if (uniqelement.indexOf(arr[i]) === -1) {
      uniqelement.push(arr[i]);
   } 
  }
  
return uniqelement;
}

console.log(removeDuplicate([1,2,3,3,3,4,5,6,6,7,7,]))
