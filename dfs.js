class Tree {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

// Parameters:
//  root: Tree
// return type: undefined

// Time complexity:O(n) -> call function O(1) for each node (n nodes)
// space complexity:O(h) -> where h is height of tree (max depth of node in tree)

function dfsPreorder(root) {
  // your code here
  if (!root) return;
  print(root.data);
  dfsPreorder(root.left);
  dfsPreorder(root.right);
}

function dfsInorder(root) {
  // your code here
  if (!root) return;
  dfsInorder(root.left);
  print(root.data);
  dfsInorder(root.right);
}

function dfsPostorder(root) {
  // your code here
  if (!root) return;
  dfsPostorder(root.left);
  dfsPostorder(root.right);
  print(root.data);
}
