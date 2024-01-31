






var once = function(fn){
  let check = false;
  return function (...args){
    if (check) {
      return undefined;
    }
    check = true;
    return fn(...args);
  }
};

let fn = (a,b,c) => (a + b+ c);
let oncefn = once(fn);
console.log(oncefn(1,2,3));
console.log(oncefn(1,2,3));
