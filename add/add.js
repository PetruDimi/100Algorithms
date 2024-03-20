function add(...numbers) {
  let total = 0;
  numbers.forEach((num) => (total += num));
  return total;
}

const add2 = (...numbers) => {
  return numbers.reduce((acc, cur) => {
    return acc + cur
  });
};

console.log(add(1, 3));
console.log(add(37, 3));
console.log(add(2, 2, 2, 2, 2));
console.log(add(2, 2));

console.log(add2(2, 20,3,5,77,6,5));
