/* Node class */

class Node {
  constructor(num) {
    this.num = num;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    const sortedArray = [...new Set(array)].sort((a, b) => a - b);
    this.root = this.buildTree(sortedArray);
  }

  buildTree(array) {
    if (array.length === 0) return null;
    const mid = Math.floor(array.length / 2);
    const node = new Node(array[mid]);
    node.left = this.buildTree(array.slice(0, mid - 1));
    node.right = this.buildTree(array.slice(mid + 1));
    return node;
  }

  insert(value, currentNode = this.root) {
    if (currentNode.value == null) return Node(value);
    if (currentNode.value == value) return;
    
    if (value < currentNode.value) {
      currentNode.left = insert(value, currentNode.left);
    } else {
      currentNode.right = insert(value, currentNode.right)
    }
    return currentNode;
  }

} 



/* 
const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};
*/