class Tree {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function reverseTree(root) {
  // Time complexity:O(n), space complexity:O(h) => h = height of tree
  if (!root) return;
  // swap
  [root.left, root.right] = [root.right, root.left];
  // recursive call
  reverseTree(tree.left);
  reverseTree(tree.right);
}
