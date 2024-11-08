const solution = (arr, k) => {
  // Time complexity -> O(n) and space complexity O(n) -> worst case set has to store every value
  const valueNeeded = new Set();
  for (const num of arr) {
    console.log({ valueNeeded });
    if (valueNeeded.has(num)) return true;
    else {
      valueNeeded.add(k - num);
    }
  }
  return false;
};

const solution2 = (arr, k) => {
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] === k) {
      return true;
    } else if (arr[left] + arr[right] > k) {
      right--;
    } else {
      left++;
    }
  }
  return false;
};

console.log(solution([4, 5, 1, -3, 6], 11));
console.log(solution2([4, 5, 1, -3, 6], 11));
