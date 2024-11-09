function isValid(str) {
  // Time complexity:O(n)
  //   Space complexity:O(n)
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (isLeftBracket(str[i])) {
      arr.push(str[i]);
    } else {
      if (arr.length === 0) return false;
      else {
        let fromStack = arr.pop();
        if (!foundPair(fromStack, str[i])) {
          return false;
        }
      }
    }
  }
  return arr.length === 0;
}

function isLeftBracket(bracket) {
  return bracket === "(" || bracket === "{" || bracket === "[";
}

function foundPair(first, second) {
  return (
    (first === "(" && second === ")") ||
    (first === "{" && second === "}") ||
    (first === "[" && second === "]")
  );
}

console.log(isValid("{()}"));
console.log(isValid("{()}}"));
console.log(isValid("{(})"));
console.log(isValid("[}"));
console.log(isValid("(){}[]"));
