/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let Count = init; //we create it becuase we need that init value for reset 
    return {
        increment:() => ++Count, // incremente
        decrement:() => --Count,
        reset:() => Count = init,
    }
    
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
