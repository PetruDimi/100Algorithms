function alphabetSubsequence(string) {
  const alphabetUniString = "abcdefghijklmnopqrstuvwxyz";
  let charAtArr = [];
  string.split("").forEach((char) => {
    if (alphabetUniString.includes(char)) {
      charAtArr.push(alphabetUniString.indexOf(char));
    }
  });

  const isIncreasing = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] >= arr[i + 1]) {
        return false;
      }
    }
    return true;
  };

  return isIncreasing(charAtArr)
}

console.log(alphabetSubsequence("cdcecrtg"));

// function alphabetSubsequence(s) {
//   arrayOfS = s.split("");
//   console.log("e".charCodeAt());
//   for (let i = 0; i < arrayOfS.length - 1; i++) {
//     if (arrayOfS[i].charCodeAt() >= arrayOfS[i + 1].charCodeAt()) {
//       return false;
//     }
//   }
//   return true;
// }

console.log(alphabetSubsequence("abc"));
console.log(alphabetSubsequence("acdfza"));
console.log(alphabetSubsequence("abcefga"));
