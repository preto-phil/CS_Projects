/* Node class */

class Node {
  constructor(value) {
    this.value = value;
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
    if (currentNode.value == null) return new Node(value);
    if (currentNode.value == value) return;
    
    if (value < currentNode.value) {
      currentNode.left = insert(value, currentNode.left);
    } else {
      currentNode.right = insert(value, currentNode.right)
    }
    return currentNode;
  }

  delete(value, currentNode = this.root) {
    if (currentNode.value == null) return currentNode;
    
    if (value < currentNode.value) {
      currentNode.left = delete(value, currentNode.left);
      return currentNode;
    } else if (value > currentNode.value) {
      currentNode.right = delete(value, currentNode.right);
      return currentNode;
    } 
    // One child node
    if (currentNode.left === null) {
      return currentNode.right;
    } else if (currentNode.right === null) {
      return currentNode.left;
    }

    else {
      let successorParent = currentNode;
      let successor = currentNode.right;
      while (successor.left !== null) {
        successorParent = successor;
        successor = successor.left;
      }
   
      // Delete successor.  Since successor is always left child of its parent we can safely make successor's right right child as left of its parent.
      // If there is no successor, then assign successor.right to successorParent.right
      if (successorParent !== currentNode) {
        successorParent.left = successor.right;
      } else {
        successorParent.right = successor.right;
      }
   
      // Copy Successor Data to currentNode
      currentNode.value = successor.value;
   
      // Delete Successor and return currentNode
      return currentNode;
    }
  }

  find(value, currentNode = this.root) {
    if (root === null || currentNode.value === value) return currentNode;
    return value < currentNode.value ? find(value, currentNode.left) : find(value, currentNode.right);
  }

  levelOrder() {
    if (this.root == null) return;
  
    let Q = [this.root];
    let levelOrderList = [];
  
    while (Q > 0) {
      current = Q[0];
      if (current.left != null) Q.push(current.left);
      if (current.right != null) Q.push(current.right);
      levelOrderList[-1] = Q.pop();
    }
    return levelOrderList;
  }

  inOrder(currentNode = this.root, inOrderList = []) {
    if (currentNode === null) return;
    this.inOrder(currentNode.left, inOrderList);
    inOrderList.push(currentNode);
    this.inOrder(currentNode.right, inOrderList);
    return inOrderList;
  }

  preOrder(currentNode = this.root, preOrderList = []) {
    if (currentNode === null) return;
    preOrderList.push(currentNode);
    this.preOrder(currentNode.left, preOrderList);
    this.preOrder(currentNode.right, preOrderList);
    return preOrderList;
  }

  postOrder(currentNode = this.root, postOrderList = []) {
    if (currentNode === null) return;
    this.postOrder(currentNode.left, postOrderList);
    this.postOrder(currentNode.right, postOrderList);
    postOrderList.push(currentNode);
    return postOrderList;
  }

  height() {
    
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


