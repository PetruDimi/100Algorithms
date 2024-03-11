function absoluteValueSumMinimization(...num) {
  const sortedArray = num.sort((a, b) => a - b);
  const isEven = sortedArray.length % 2 === 0;

  return isEven
    ? sortedArray[sortedArray.length / 2 - 1]
    : sortedArray[(sortedArray.length - 1) / 2];
}

console.log(absoluteValueSumMinimization(1, 2, 3, 4, 5, 6, 7));
console.log(absoluteValueSumMinimization(1, 2, 3, 4, 5));
console.log(absoluteValueSumMinimization(1, 4, 7, 5));
console.log(absoluteValueSumMinimization(1, 9, 3, 4));
console.log(absoluteValueSumMinimization(100, 50, 25));
