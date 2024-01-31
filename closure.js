/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let count = n
    return function() {
        count++
        return count-1
    };
};


 
// const counter = createCounter(10)
// counter() // 10
// counter() // 11



//**
//it determine the closure function and howThe code you've provided defines a function `createCounter` that takes a number `n` as an argument and returns a function `counter`. This returned function, when invoked, increments a counter variable (`count`) and returns the incremented value.


