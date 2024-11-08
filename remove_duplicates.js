const solutionBruteForce = (arr) => {
  // Time complexity: O(n^2), Space complexity:O(n)
  const resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!resultArr.includes(arr[i])) {
      resultArr.push(arr[i]);
    }
  }
  return resultArr;
};

const solutionSort = (arr) => {
  // nlog(n) because we sort it
  // Time complexity:O(nlog(n)), space complexity O(n) -> count result
  if (arr.length === 0) return 0;
  arr.sort((a, b) => a - b);
  const resultArr = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      resultArr.push(arr[i]);
    }
  }
  return resultArr;
};

const solution = (arr) => {
  // Time complexity:O(n), Space Complexity: O(n)
  let observed = {};
  for (const num of arr) {
    if (!observed[num]) {
      observed[num] = true;
    }
  }
  return Object.keys(observed).map((value) => parseInt(value));
};

console.log(solution([4, 2, 5, 3, 3, 1, 2, 4, 1, 5, 5, 5, 3, 1]));
console.log(solution([1, 1, 1, 1, 1, 1, 1, 1]));
console.log(solution([4, 4, 2, 3, 2, 2, 4, 3]));
