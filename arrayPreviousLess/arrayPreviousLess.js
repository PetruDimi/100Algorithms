function arrayPreviousLess(arr) {
  const arrPrev = [];
  for (let i = 0; i < arr.length; i++) {
    const copy = [...arr];
    const splicedArr = copy.splice(0, i);
    console.log(copy, splicedArr);
    if (splicedArr.length === 0) {
      arrPrev.push(-1);
    } else {
      for (let j = 0; j < splicedArr.length; j++) {
        if (arr[i] > splicedArr[i]) {
          arrPrev.push(splicedArr[i]);
        }
      }
    }
  }
  return arrPrev;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));

function arrayPreviousLess1(arr) {
  let lessThanArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(i);
    for (let j = i; j >= 0; j--) {
      if (arr[i] > arr[j]) {
        lessThanArr.unshift(arr[j]);
        break;
      } else if (j === 0) {
        lessThanArr.unshift(-1);
      }
    }
  }
  return lessThanArr;
}

console.log(arrayPreviousLess1([1, 2, 3, 4]));

// const newArr = [-1];
// for (let i = 1; i < arr.length; i++) {
//   console.log(i);
//   if (arr[i - 1] < arr[i]) {
//     newArr.push(arr[i - 1]);
//   } else {
//     newArr.push(-1);
//   }
// }
// return newArr;
