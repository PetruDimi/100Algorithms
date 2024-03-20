const alternatingSum = (arr) => {
  let oddSumm = 0;
  let evenSum = 0;
  arr.forEach((x, i) => {
    i % 2 === 0 ? (evenSum += x) : (oddSumm += x);
  });

  return [evenSum, oddSumm];
};

console.log(alternatingSum([50, 60, 60, 45, 70, 10, 40, 10]));

function alternatingSums2(arr) {
  return arr.reduce(
    (acc, val, i) => {
      acc[i % 2] += val;
      return acc;
    },
    [0, 0]
  );
}

console.log(alternatingSums2([1, 2, 3, 4, 5, 6]));
console.log(alternatingSums2([10, 20, 30, 50, 10, 20]));

