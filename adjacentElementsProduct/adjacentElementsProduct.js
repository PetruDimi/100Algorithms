const adjacentElementsProduct = (inputArray) => {
  let bigestProduct = 0;

  for (let i = 0; i < inputArray.length - 1; i++) {
    let product = inputArray[i] * inputArray[i + 1];
    if (bigestProduct < product) {
      bigestProduct = product;
    }
  }
  return bigestProduct;
};

console.log(adjacentElementsProduct([1, 3, 100, 2, 5, 6, 7]));
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([10, -10, 200, 100, 5]));
console.log(adjacentElementsProduct([61, 7, -21, -5, 17, 32, 12, -6, 81, 4]));

// //old school

// const adjacentElementsProduct1 = inputArray => {
//   console.log(inputArray);
//   largestProduct = inputArray[0] * inputArray[1];
//   console.log(largestProduct);

//   for (let i = 0; i < inputArray.length - 1; i++) {
//     const product = inputArray[i] * inputArray[i + 1];
//     console.log(product);
//     largestProduct = largestProduct > product ? largestProduct : product;
//   }

//   console.log(largestProduct);
// };

// adjacentElementsProduct1([1, 3, 100, 2, 5, 6, 7]);

// //newSchool ES6

// function adjacentElementsProduct2(inputArray) {
//   const productArray = inputArray
//     .map((num, index) => {
//       if (index < inputArray.length - 1) {
//         return num * inputArray[index + 1];
//       }
//     })
//     .filter(num => num !== undefined);
//   return Math.max(...productArray);
// }
