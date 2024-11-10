class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function print(root) {}

function flatten(root) {
  // Time complexity:O(n^2)
  // Space complexity:O(h)
  if (!root) return;
  flatten(root.left);
  flatten(root.right);
  //   keep right
  let oldRightSub = root.right;
  //   Add left to right
  root.right = root.left;
  root.left = null;
  //   Find leaf of right subtree
  let temp = root;
  while (temp.right) {
    temp = temp.right;
  }
  //   Found leaf -> no more right
  temp.right = oldRightSub;
  //   Add the saved right to the right of this
}

let head = null;
function flatten2(root) {
  // Time complexity:O(n), Space complexity:O(h)
  if (!root) return;
  flatten2(root.right);
  flatten2(root.left);
  root.left = null;
  root.right = head;
  head = root;
}

function bfs(queue, list) {
  if (!queue.length) return list;
  let currentNode = queue.shift();
  console.log(currentNode.data);
  list.push(currentNode.data);
  if (currentNode.left) queue.push(currentNode.left);
  if (currentNode.right) queue.push(currentNode.right);
  return bfs(queue, list);
}

function dfsInOrder(root) {
  if (!root) {
    return;
  }
  dfsInOrder(root.left);
  console.log(root.data);
  dfsInOrder(root.right);
}

function dfsPreorder(root) {
  if (!root) {
    return this;
  }
  console.log(root.data);
  dfsPreorder(root.left);
  dfsPreorder(root.right);
}

let tree = new Tree();
tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(5);
tree.left.left = new Node(3);
tree.left.right = new Node(4);
tree.right.left = new Node(6);
// console.log(tree);
// dfsInOrder(tree);
// console.log(dfsPreorder(tree));

// console.log(bfs([tree], []));
flatten(tree);
console.log(tree);
