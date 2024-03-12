function add(...numbers) {
  return numbers.reduce((total, element) => {
    return (total += element);
  });
}

const add2 = (...numbers) => {
  let total = 0;
  numbers.forEach(num => (total += num));
  return total;
};

console.log(add(1, 3));
console.log(add(37, 3));
console.log(add(2, 2, 2, 2, 2));
console.log(add(2, 2));

console.log(add2(2, 2));
