function addBorder(...picture) {
  let border = "*".repeat(picture[0].length + 2);
  console.log(border);
  const itemsSideWall = picture.map((value) => "*" + value + "*");

  return [border, ...itemsSideWall, border];
}

console.log(addBorder("adds", "abcj"));
