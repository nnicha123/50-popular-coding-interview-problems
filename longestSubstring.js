const solution = (str) => {
  // Time complexity: O(n),
  // Space complexity(1) -> even when indexes has 128 elements, it still is a constant -> S = 128 + 1 + 1 + 1 = 131
  let indexes = new Array(128).fill(-1);
  let start = 0;
  let maxLength = 0;
  for (let i = 0; i < str.length; i++) {
    if (indexes[str.charCodeAt(i)] >= start) {
      start = indexes[str.charCodeAt(i)] + 1;
      console.log({ start });
    }
    indexes[str.charCodeAt(i)] = i;
    maxLength = Math.max(maxLength, i - start + 1);
  }

  return maxLength;
};

console.log(solution("abcdbeghef"));
console.log(solution("aaaaa"));
console.log(solution("eddy"));
console.log(solution("a"));
console.log(solution("abcdef"));
console.log(
  solution(
    "sjlkdhfgkhfikhjbdihqydghlkfhnfduhvzighryaeuiutyhiugbfifbhaehiohearklhgkjldnfvlkjdanfdlkjthouhtuizehriuehnrkldfgjoduzhauh"
  )
);
