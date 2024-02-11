function hello() {
   console.log('hello');
}

setTimeout(hello,1000);
setTimeout(hello,2000);
//promise are mainly focus on 3 things
//Pending 
//Resolved
//Rejected

const promise = new Promise(callback)

promise
.catch((err) => console.log(err))


function callback(resolve, reject){
  //Async operation 

  //network call disk reat I/O
  //
  //sitting idle
  //single threaded
  setTimeout(()=> reject(),1000)
  try{
    resolve()
  }
  catch(err){
reject('Error occured')
  }
  
}
//final example
//async function sleep(millis) {
//    function callback(resolve,reject){
//        setTimeout(resolve,millis);
//    }
//    return new Promise(callback);
//}

