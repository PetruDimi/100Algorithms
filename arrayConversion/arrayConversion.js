function arrayConvertion(n) {
  const sumOrProd = (arr, isEven) => {
    let arrConv = [];
    if (!isEven) {
      for (let i = 0; i < arr.length; i += 2) {
        arrConv.push(arr[i] + arr[i + 1]);
      }
    } else {
      for (let i = 0; i < arr.length; i += 2) {
        arrConv.push(arr[i] * arr[i + 1]);
      }
    }
    return arrConv;
  };

  let isEven = false;
  while (n.length > 1) {
    n = sumOrProd(n, isEven);
    isEven = !isEven;
  }
  return +n
}

console.log(arrayConvertion([1, 2, 3, 4, 5, 6, 7, 8]));

// let isEven = true;
// while (n.length > 1) {
//   let tmp = [];
//   for (let i = 0; i < n.length; i += 2) {
//     if (isEven) {
//       tmp.push(n[i] + n[i + 1]);
//     } else {
//       tmp.push(n[i] * n[i + 1]);
//     }
//   }
//   n = tmp;
//   isEven = !isEven;
// }
// return n;
