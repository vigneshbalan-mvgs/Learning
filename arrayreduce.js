//reduce with that its also 
 

// everytime goint to the retrun value that make that go again and agian until the array elements are fully fineshed 
const nums = [1,2,3,4,5];
 
function fn(init, n){
  return init + n;
}

console.log(nums.reduce(fn,0)); //fn(init,n) init represent => the initail value then n represent the array item 


// * var reduce = function(nums, fn, init) {
//    let res =  init;

 //  nums.foreach((n) => {
   //    res = fn(res, n);
  // });

    // for (const n of nums){
    //     res = fn(res, n)
    // }

    //return res;

//    return nums.reduce(fn,init);
//};


