// · ways to implement it: inorder, preorder, postorder
// Check all the nodes of the same level until I reach the last one

// this is a Binary tree
class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    //Code here
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;
      //Infinite loop that stops with a return
      while (true) {
        if (value < currentNode.value) {
          //left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  } //O logN
  DFSinorder() {
    return traverseInorder(this.root, []);
  }
  DFSpreorder() {
    return traversePreorder(this.root, []);
  }
  DFSpostorder() {
    return traversePostorder(this.root, []);
  }
}

function traverseInorder(node, list) {
  if (node.left) {
    traverseInorder(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    traverseInorder(node.right, list);
  }
  return list;
}

function traversePreorder(node, list) {
  list.push(node.value);
  if (node.left) {
    traversePreorder(node.left, list);
  }
  if (node.right) {
    traversePreorder(node.right, list);
  }
  return list;
}

function traversePostorder(node, list) {
  if (node.left) {
    traversePostorder(node.left, list);
  }
  if (node.right) {
    traversePostorder(node.right, list);
  }
  list.push(node.value);
  return list;
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.DFSinorder());
console.log(tree.DFSpreorder());
console.log(tree.DFSpostorder());

// This is the structure of the Tree

//     9
//  4     20
//1  6  15  170

// This is the result:
// inorder:[1, 4, 6, 9, 15, 20, 170];
// preorder:[9, 4, 1, 6, 20, 15, 170];
// postorder:[1, 6, 4, 15, 170, 20, 9];
