/* Node class */

class Node {
  constructor(value = null) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/* Tree class */

class Tree {
  constructor(array) {
    const sortedArray = [...new Set(array)].sort((a, b) => a - b);
    this.root = this.buildTree(sortedArray);
  }

  buildTree(array) {
    if (array.length === 0) return null;

    const mid = Math.floor(array.length / 2);
    const node = new Node(array[mid]);
    node.left = this.buildTree(array.slice(0, mid));
    node.right = this.buildTree(array.slice(mid + 1));
    return node;
  }

  insert(value, currentNode = this.root) {
    if (currentNode === null) return new Node(value);
    if (currentNode.value === value) return;

    if (currentNode.value < value) {
      currentNode.right = this.insert(value, currentNode.right);
    } else {
      currentNode.left = this.insert(value, currentNode.left);
    }
    return currentNode;
  }

  delete(value, currentNode = this.root) {
    if (currentNode == null) return currentNode;
    // no child nodes
    if (value < currentNode.value) {
      currentNode.left = this.delete(value, currentNode.left);
      return currentNode;
    } else if (value > currentNode.value) {
      currentNode.right = this.delete(value, currentNode.right);
      return currentNode;
    } 
    // One child node
    if (currentNode.left === null) {
      return currentNode.right;
    } else if (currentNode.right === null) {
      return currentNode.left;
    }
    // two child nodes
    else {
      let successorParent = currentNode;
      let successor = currentNode.right;
      while (successor.left !== null) {
        successorParent = successor;
        successor = successor.left;
      }
      // Successor is always the left child of its parent - dws: make successor's right right child as left of its parent.
      // If there is no successor, then assign successor.right to successorParent.right
      if (successorParent !== currentNode) {
        successorParent.left = successor.right;
      } else {
        successorParent.right = successor.right;
      }
      currentNode.value = successor.value;
      return currentNode;
    }
  }

  find(value, currentNode = this.root) {
    if (root === null || currentNode.value === value) return currentNode;
    return value < currentNode.value ? this.find(value, currentNode.left) : this.find(value, currentNode.right);
  }

  levelOrder() { 
    let Q = [this.root];
    let levelOrderList = [];
  
    while (Q.length > 0) {
      const current = Q.shift();;
      if (current.left != null) Q.push(current.left);
      if (current.right != null) Q.push(current.right);
      levelOrderList.push(current.value)
    }
    return levelOrderList;
  }

  inOrder(node = this.root, inOrderList = []) {
    if (node === null) return;

    this.inOrder(node.left, inOrderList);
    inOrderList.push(node.value);
    this.inOrder(node.right, inOrderList);

    return inOrderList;
  }

  preOrder(node = this.root, preOrderList = []) {
    if (node === null) return;

    preOrderList.push(node.value);
    this.preOrder(node.left, preOrderList);
    this.preOrder(node.right, preOrderList);

    return preOrderList;
  }

  postOrder(node = this.root, postOrderList = []) {
    if (node === null) return;

    this.postOrder(node.left, postOrderList);
    this.postOrder(node.right, postOrderList);
    postOrderList.push(node.value);

    return postOrderList;
  }

  height(node = this.root) {
    if (node == null) return 0;

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  depth(value, node = this.root, edgeCount = 0) {
    if (node === null) return 0;
    if (node.value === value) return edgeCount;

    if (value < node.value) {
      return this.depth(value, node.left, edgeCount += 1);
    } else {
      return this.depth(value, node.right, edgeCount += 1);
    }
  }

  isBalanced() {
    return this._testBalance(this.root) !== -1;
  }

  _testBalance(node = this.root) {
    if (node === null) return 0;

    const leftBalance = this._testBalance(node.left);
    const rightBalance = this._testBalance(node.right);
    const diff = Math.abs(leftBalance - rightBalance);

    if (leftBalance === -1 || rightBalance === -1 || diff > 1) {
      return -1;
    } else {
      return Math.max(leftBalance, rightBalance) + 1;
    }
  }

  reBalance() {
    const inOrderList = this.inOrder();
    this.root = this.buildTree(inOrderList);
  }

  prettyPrint(node = this.root, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
} 

/* Driver code */

const randomArray = (size) => {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
}

const tree = new Tree(randomArray(20));

console.log(tree.isBalanced());

console.log(tree.levelOrder());
console.log(tree.inOrder());
console.log(tree.preOrder());
console.log(tree.postOrder());

tree.prettyPrint();

tree.insert(420);
tree.insert(6969);
tree.insert(666);

console.log(tree.isBalanced());
tree.reBalance();
console.log(tree.isBalanced());

console.log(tree.levelOrder());
console.log(tree.inOrder());
console.log(tree.preOrder());
console.log(tree.postOrder());

tree.prettyPrint();