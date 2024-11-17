import chalk from "chalk";

class BTNode<T> {
  value: T;
  right: BTNode<T> | null;
  left: BTNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree<T> {
  root: BTNode<T> | null;
  constructor() {
    this.root = null;
  }

  insert(value: T) {
    const newNode = new BTNode(value);

    if (!this.root) this.root = newNode;

    let currNode = this.root;
    while (currNode) {
      if (value === currNode.value) {
        return; // Handle duplicate case
      }

      if (value > currNode.value) {
        if (currNode.right === null) {
          currNode.right = newNode;
          return this;
        }
        currNode = currNode.right;
      }

      if (value < currNode.value) {
        if (currNode.left === null) {
          currNode.left = newNode;
          return this;
        }
        currNode = currNode.left;
      }
    }
  }

  lookup(value: T) {
    let currNode = this.root;
    while (currNode) {
      if (value === currNode.value) {
        return currNode;
      }

      if (value > currNode.value) {
        currNode = currNode.right;
      } else {
        currNode = currNode.left;
      }
    }
    return null;
  }
  delete(value: T) {}
}

function traverse<T>(node: BTNode<T>): BTNode<T> {
  const tree: BTNode<T> = { value: node.value, right: null, left: null };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

const tree = new BinarySearchTree();

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(chalk.red("Lookup 4", JSON.stringify(tree.lookup(4))), "\n\n");

if (tree.root) console.log(chalk.green(JSON.stringify(traverse(tree.root))));

/*
          9
       /     \
      4       20
    /  \     /  \
   1    6   15   170
   {

  /// RESULT ///
  value: 9,
  right: {
    value: 20,
    right: { value: 170, right: null, left: null },
    left: { value: 15, right: null, left: null },
  },
  left: {
    value: 4,
    right: { value: 6, right: null, left: null },
    left: { value: 1, right: null, left: null },
  },
};
*/
