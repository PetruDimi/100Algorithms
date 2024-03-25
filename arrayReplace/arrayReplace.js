function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  inputArray.forEach((element, i) => {
    if (element === elemToReplace) {
      inputArray[i] = substitutionElem;
    }
  });
  return inputArray;
}

console.log(arrayReplace([1, 2, 1], 1, 3));
