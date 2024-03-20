function alphabeticShift(string) {
  const alphabetUniString = "abcdefghijklmnopqrstuvwxyz";

  let charAtArr = [];
  string.split("").forEach((char) => {
    if (alphabetUniString.includes(char)) {
      charAtArr.push(alphabetUniString.indexOf(char));
    }
  });
  console.log(charAtArr);

  let alphabetShiftArr = [];
  charAtArr.forEach((val) => {
    if (val + 1 !== 26) {
      alphabetShiftArr.push(alphabetUniString.charAt(val + 1));
    } else alphabetShiftArr.push("a");
  });
  return alphabetShiftArr.join("");
}

console.log(alphabeticShift("crazy"));


// function alphabeticShift1(str) {
//   return str
//     .split("")
//     .map(chCode => chCode.charCodeAt(0) + 1)
//     .map(codeChar => String.fromCharCode(codeChar))
//     .join("")
//     .replace(/{/g, "a");
// }

// console.log(alphabeticShift1("zabc"));

