const solutionBruteForce = (arr) => {
  // Time complexity:O(n^2), space complexity:O(1) -> only variables i and j used
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] === arr[j]) return arr[i];
    }
  }
};

const solutionSort = (arr) => {
  // Time complexity:O(nlogn) (most efficient sorting time complexity value)
  // Space complexity: Depends on sorting algorithms used
  arr.sort((a, b) => a - b);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) return arr[i];
  }
};

const solution = (arr) => {
  // Time complexity:O(n), space complexity:O(n) -> repeated could have length of n-1 before finding duplicate
  const repeated = {};
  for (const num of arr) {
    if (repeated[num]) return num;
    repeated[num] = true;
  }
};

const bestSolution = (arr) => {
  // Time complexity:O(n), Space complexity:O(1)
  // 1. Tortoise and hare method, tortoise moves by 1 node (linked list) each time, while hare moves by 2
  // 2. When they meet, hare stays at that position and tortoise starts at index 0, then they move by 1 node each time
  // until they meet again. The index that they meet becomes the repeated value

  let tortoise = arr[0];
  let hare = arr[arr[0]];
  while (tortoise !== hare) {
    tortoise = arr[tortoise];
    hare = arr[arr[hare]];
  }
  tortoise = 0;
  while (tortoise !== hare) {
    tortoise = arr[tortoise];
    hare = arr[hare];
  }
  return tortoise;
};

console.log(bestSolution([4, 2, 1, 3, 1]));
console.log(bestSolution([1, 4, 2, 2, 5, 2]));
