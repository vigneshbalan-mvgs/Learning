//Map is help to reduce the stress in big data

let map = new Map();

map.set("Navin", "java");
map.set("Kiran", "Android");
map.set("hello", "everyone");
map.set("Chirag", "ML");
map.set("Navin", "BlockChain");

console.log(map.keys()); // Keys is the values that can help to print the value 

console.log(map.get('Chirag'));

for (let [k, v] of map) { // It means we have 2 map values so that we have to choose the 
  //two different values & then we console log with K,V like that 
  console.log(k, ":", v);
}

map.forEach((v, k) => { // We use K,V in for and then we use v,k in for each so print everything
  console.log(k, ":", v);
});
