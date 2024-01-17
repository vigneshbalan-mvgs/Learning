let nums = [42,51, 24, 98, 65, 12];
console.log("this is how filter works using array ")
console.log(nums.filter((item) => item%2 === 0));
console.log("this is how map works using array ")
console.log(nums.map((item) => item*2));
console.log("this is how reduce works using array ")
let result = nums.reduce((a,b) => a+b);
console.log(result);
console.log("this is how foreach  works using array ")


nums.forEach(element => {
  console.log(element);
})
