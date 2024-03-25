function arrayMaximalAdjacentDifference(arr) {
  const diffs = [];

  for (let i = 0; i < arr.length - 1; i++) {
    diffs.push(Math.abs(arr[i] - arr[i + 1]));
  }
  console.log(diffs);
  let maxDiff = diffs.reduce((max, num) => (num > max ? num : max));
  return maxDiff;
}

console.log(arrayMaximalAdjacentDifference([1, 3, 0, 6, 8]));
