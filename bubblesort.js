function sort(numbers){
  for (let i = 0; i < numbers.length; ++i) {
   for (let j = 0; j < numbers.length - (i + 1) ; ++j) {
    const left = numbers[j];
    const right = numbers[j + 1];
      if (left>right) {
        numbers[j] = right;
        numbers[j + 1] = left;
      }
   }
  }
  return numbers;
}

console.log(sort([2,1,4,52,12,51,3,6]));
console.log(sort([3,1,4,52,12,51,3,6]));

console.log(sort([2,1,4,52,12,51,3,6]));
console.log(sort([2,1,4,52,12,51,3,6]));
console.log(sort([2,1,4,52,12,51,3,6]));
console.log(sort([2,1,4,52,12,51,3,6]));

