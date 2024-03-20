function almostIncreasingSequence(sequence) {
  const reducedSeq = sequence.reduce((acc, cur, curIndex) => {
    const seqArr = [...sequence];
    seqArr.splice(curIndex, 1);
    acc[curIndex] = seqArr;
    return acc;
  }, {});

  const isIncreasing = (arr) =>{
    for (let i = 0; i < arr.length - 1; i++) {
      if(arr[i] >= arr[i+1]){
        return false
      }
    }
    return true
  }

  for (const key in reducedSeq) {
    if(isIncreasing(reducedSeq[key])){
      return true
    } 
  }
  return false
}

console.log(almostIncreasingSequence([1, 2, 3, -4, -3]));
console.log(almostIncreasingSequence([1, 2, 3, 2]));
console.log(almostIncreasingSequence([1, 2, 3, 2, 0]));
console.log(almostIncreasingSequence([1, 2, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 1, 1]));
console.log(almostIncreasingSequence([1, 2, 1,2]));
console.log(almostIncreasingSequence([[1, 2, 3, 4, 99, 5, 6]]));

// let errors = 0;

// for (let i = 0; i < sequence.length; i++) {
//   if (sequence[i] <= sequence[i - 1]) {
//     errors++;

//     if (
//       sequence[i] <= sequence[i - 2] &&
//       sequence[i + 1] <= sequence[i - 1]
//     ) {
//       return false;
//     }
//   }
// }
// console.log(sequence[0]);

// return errors <= 1;
