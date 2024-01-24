//filter element from array 

var filter = function(arr, fn) {
    arr.filter((n,i)=>{
        return n > 10;
    })
};
 var filter = function(arr, fn){
  arr.filter((n,i)=> n > 10);
}
 
var filter = function(arr,fn){
  arr.filter(fn);// but we don't need to use filter method so we need to use any other methods 
}
// this is a final method 
var filter = function(arr, fn) {
    //declarative programming
    // return arr.filter(fn);


    //imperative programming
    const res = [];

    for(let i = 0; i< arr.length; i++){
        if(fn(arr[i],Number(i))){
            res.push(arr[i]);
        }
    }
    return res;

};
    
