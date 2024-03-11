function absoluteValueSumMinimization(...num) {
  console.log(num.length);
  const sortedArr = num.sort((a, b) => a - b);
  const isEven = sortedArr.length % 2 === 0;
  console.log(sortedArr[sortedArr.length/2]);
  return isEven
    ? sortedArr[(sortedArr.length-1)/2]
    : sortedArr[sortedArr.length / 2-1];
}

console.log(absoluteValueSumMinimization(1, 2, 3, 4, 5, 6, 7));
console.log(absoluteValueSumMinimization(1, 2, 3, 4, 5));
console.log(absoluteValueSumMinimization(1, 4, 7, 5));
console.log(absoluteValueSumMinimization(1, 9, 3, 4));
console.log(absoluteValueSumMinimization(100, 50, 25));
