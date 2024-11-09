class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insert(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }
}

function reverseList(list) {
  // Time complexity:O(n)
  // Space complexity:O(1)
  let previous;
  let currentNode = list.head;
  while (currentNode) {
    let next = currentNode.next;
    currentNode.next = previous;
    previous = currentNode;
    currentNode = next;
  }
  list.head = previous;
}

function reverseListRecursive(list) {
  // Time complexity:O(n)
  // Space complexity: O(n)
  list.head = reverseNode(list.head);
}

function reverseNode(node) {
  if (!node) {
    return node;
  }
  const reversed = reverseNode(node.next);
  node.next.next = node;
  node.next = null;
  return reversed;
}

const linkedList = new LinkedList();
linkedList.insert(5);
linkedList.insert(3);
linkedList.insert(6);
linkedList.insert(4);
linkedList.insert(7);
console.log(linkedList);
console.log(reverseList(linkedList));
console.log(linkedList);
