function arrayChange1(arr) {
  let count = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) {
        const diff = arr[i] - arr[i + 1] + 1
        arr[i+1] += diff
        count += diff
    }
  }
  return count
}

console.log(arrayChange1([1, 1, 1]));
console.log(arrayChange1([3, 2, 1]));
console.log(arrayChange1([9, 1, 1]));
console.log(arrayChange1([9, 5, 10, 9]));



