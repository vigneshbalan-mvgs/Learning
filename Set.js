let nums = new Set(); //call the contractor
//
//is repeted that means it not going to store in it
nums.add(3);
nums.add(4);
nums.add(3);
nums.add("No-repeat1");
nums.add("No-repeat");
nums.add("No-repeat");
console.log(nums);// it only output only one value that not repeated if the value 
nums.forEach(element => { console.log(element); });

console.log(nums.has("No-repeat"));
console.log(nums.has("No-repeat1"));
