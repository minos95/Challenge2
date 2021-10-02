function utopianTree(n) {
  // let the maxHeight = 1
  let maxHeight = 1;

  // first we go through the (n) and loop through to the number
  for (let i = 0; i < n; i++) {
    i % 2 === 0 ? (maxHeight *= 2) : ++maxHeight;
  }
  //   console.log(maxHeight);
  return maxHeight;
}

utopianTree(5);
