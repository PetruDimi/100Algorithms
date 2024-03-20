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