// if the arms individually are equally strongest
const areEqualyStrong = (...args) => {
  const splice = args.splice(0, 2);
  const truthArr = [];
  args.forEach((x) => {
    truthArr.push(splice.includes(x));
  });
  console.log(truthArr);
  splice.forEach((x) => {
    truthArr.push(args.includes(x));
  });
  if (truthArr.includes(false)) {
    return false;
  } else return true;
};
console.log(areEqualyStrong(10, 15, 15, 10));
console.log(areEqualyStrong(15, 10, 15, 10));
console.log(areEqualyStrong(15, 15, 15, 10));
console.log(areEqualyStrong(15, 10, 15, 9));
console.log(areEqualyStrong(15, 40, 40, 5));
