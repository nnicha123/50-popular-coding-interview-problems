function findPeak(arr) {
  // Time complexity:O(n)
  // Space complexity O(1)
  if (arr.length === 1) return 0;
  if (arr[0] >= arr[1]) return 0;
  if (arr[arr.length - 1] >= arr[arr.length - 2]) return arr.length - 1;
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i - 1] <= arr[i] && arr[i + 1] <= arr[i]) return i;
  }
}

function findPeak2(arr) {
  // Time complexity:O(log(n))
  // Space complexity:O(1)

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

console.log(findPeak2([4, 5, 8, 3]));
console.log(findPeak2([1, 3, 4, 7, 8]));
console.log(findPeak2([1, 5, 2, 6, 6, 3]));
