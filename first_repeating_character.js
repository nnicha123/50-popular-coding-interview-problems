const solutionBruteForce = (str) => {
  // Time complexity: O(n^2), space complexity: O(1) -> we just use two extra variables i & j which makes O(2) which is a constant
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < i; j++) {
      if (str.charAt(i) === str.charAt(j)) return str.charAt(i);
    }
  }
  return "\0";
};

const solution = (str) => {
  // Time complexity O(n), space complexity O(n) worst case
  let characterStore = {};
  for (const ch of str) {
    if (characterStore[ch]) return ch;
    characterStore[ch] = true;
  }
  return "\0";
};

console.log(solution("inside code"));
console.log(solution("programming"));
console.log(solution("abcd"));
console.log(solution("abba"));
