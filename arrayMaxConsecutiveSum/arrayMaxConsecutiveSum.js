function arrayMaxConsecutiveSum(inputArray, k) {
  let sumOfKConsecutives = [];
  for (let i = 0; i < inputArray.length - k + 1; i++) {
    const copy = [...inputArray];
    const splicedVals = copy.splice(i, k);
    sumOfKConsecutives.push(
      splicedVals.reduce((acc, cur) => {
        return acc + cur;
      })
    );
    console.log(copy, splicedVals);
  }
  return Math.max(...sumOfKConsecutives)
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 3));

// let max = 0;
// let sum = 0;

// for (let i = 0; i < k; i++) {
//   sum += inputArray[i];
// }
// max = sum;

// for (let i = k; i < inputArray.length; i++) {
//   console.log(k)
//   console.log(i)
//   sum -= inputArray[i - k];
//   console.log(sum)
//   sum += inputArray[i];
//   console.log(sum)

//   if (sum > max) {
//     max = sum;
//   }
// }
// return max;
