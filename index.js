let findPermutations = (string) => {
  if (!string || typeof string !== "string") {
    return `${string} is not a string. Please enter a string`;
  } else if (string.length < 2 ) {
    return string;
  }

  let permutationsArray = [];
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (string.indexOf(char) != i) continue;

    let restChars = string.slice(0, i) + string.slice(i + 1, string.length);
    for (let permutation of findPermutations(restChars)) {
      permutationsArray.push(char + permutation);
    }
  }
  return permutationsArray.sort();
}

findPermutations('ccda');
