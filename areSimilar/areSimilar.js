
const areSimilar = (arr1, arr2) => {
  if (arr1.toString() === arr2.toString()) {
    return true;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  let truthArr = [];
  arr1.forEach((x, i) => {
    x === arr2[i] ? truthArr.push(true) : truthArr.push(false);
  });
  let falseArr = truthArr.filter((x) => x === false);
  console.log(falseArr);

  return falseArr.length === 2  ? true : false;
};

const a = [50, 2, 1, 3];
const b = [1, 2, 50, 3];
const c = [1, 2, 3];
const d = [1, 3, 2];
const e = [1, 2, 2];
const f = [1, 2, 1];

console.log(areSimilar(a, b));
console.log(areSimilar([1, 2, 3, 4], [1, 2, 3, 5]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
console.log(areSimilar([1, 2, 3], [1, 2, 3, 5]));
console.log(areSimilar([1, 2, 3, 4, 5, 6], [1, 2, 5, 4, 3, 6]));
console.log(areSimilar([1, 2, 3, 4, 5, 6, 7], [1, 2, 5, 4, 3, 7, 6]));

// function areSimilar(a, b) {
//   if (a.length != b.length) return false;
//   let fails = 0;
//   let isSimilar = true;
//   let sortedA = [...a].sort((a, b) => a - b);
//   let sortedB = [...b].sort((a, b) => a - b);
//   for (let i = 0; i < a.length; i++) {
//     if (sortedA[i] != sortedB[i]) {
//       fails++;
//     }
//     if (fails >= 1) {
//       return (isSimilar = false);
//     }
//   }
//   return isSimilar;
// }