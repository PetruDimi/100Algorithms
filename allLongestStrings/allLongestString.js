const allLongestStrings = inputArr => {
  let longestLength = 0;
  const longestWords = [];

  inputArr.forEach(word => {
    longestLength = longestLength < word.length ? word.length : longestLength;
  });

  inputArr.forEach(word => {
    word.length === longestLength ? longestWords.push(word) : "";
  });
  return longestWords;
};

console.log(allLongestStrings(["abc", "bbbb", "nine", "ddddd"]));
