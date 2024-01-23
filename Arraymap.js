
// No state or NO variable in js

var map = function(arr, fn) {
    return arr.map(fn);
};
// this is the simple to get  a output to it 
// let me tech you what we do with other values like that

var map = function(arr, fn){
  const res = new Array(arr.length);

  for (const i in arr){
    res[i] = fn(arr[i], Number(i));
  }
  return res;
  //return arr.map(fn);
}

//The Strategy design pattern - Open-Closed principel

//some other solving methods for same problem
var map = function(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = fn(arr[i], i);
    }

    return arr;
};
