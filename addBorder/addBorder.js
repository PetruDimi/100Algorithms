function addBorder(...picture) {
  let border = "*".repeat(picture[0]+2)

  return [border, ...picture.map(value => "*" + value + "*"), border];
}

console.log(addBorder("add", "abc"));
