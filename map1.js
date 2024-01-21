let myMap = new Map([
  ['name' : 'Jhon'],
  ['age' : 30 ],
  ['city' : 'New York'],
])

myMap.forEach(element => {
  console.log(`${key}:${value}`);
  
});

for (let [key, value] of myMap){
  console.log(`${key}:${value}`);
}

console.log(myMap.size);

myMap.delete('age');

myMap.clear();

//tranforming array
//
let numbers = [1,2,3,4,5,6];
let tranformedNumbers = numbers.map(num =>(num % 2 === 0 ? num * num : num * 2));


let result  = = data
  .filter((item = > item.age > 25)
.map(item=> ({name:item.name,doubelAge:item.age * 2}))
.reduce((acc,item) => {
  acc[item.name] = itme.doubelAge;
  return acc;
}, {});


myMap.map((item) => {

  
})



