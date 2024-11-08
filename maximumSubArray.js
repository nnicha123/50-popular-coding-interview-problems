const solutionBruteForce = (arr) => {
  // Time complexity:O(n^2), Space complexity: O(1)
  let maxSum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum > maxSum) maxSum = sum;
    }
  }
  return maxSum;
};

function solution(arr) {
  // Time complexity: O(n), Space complexity: O(1) -> since not storing anywhere
  if (arr.length === 1) return arr[0];

  let currentSum = 0;
  let maxSum = -Infinity;

  for (const num of arr) {
    // Used dynamic programming as well because we get the currentSum based on the current addition, no need to recompute
    currentSum = Math.max(currentSum + num, num);
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
}

console.log(solution([2, 3, -6, 4, 2, -8, 3]));
console.log(solution([2, 3, -1, 4, -10, 2, 5]));
console.log(solution([-3, -1, -2]));
console.log(solution([1, 2, 3, 4]));
console.log(solution([1, 2, -100, 5, 6]));
