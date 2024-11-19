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

  // O(log n)
  insert(value: T) {
    const newNode = new BTNode(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currNode = this.root;

    // Divide & Conquer
    while (currNode) {
      if (value === currNode.value) {
        return this; // Handle duplicate case
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

  // O(log n)
  lookup(value: T) {
    if (!this.root) return null;
    let currNode: BTNode<T> | null = this.root;
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

  delete(value: T) {
    if (!this.root) return null;

    let currNode: BTNode<T> | null = this.root;
    let parentNode: BTNode<T> | null = null;

    // Find the node
    while (currNode!.value !== value) {
      parentNode = currNode;
      if (value < currNode!.value) {
        currNode = currNode!.left;
      } else {
        currNode = currNode!.right;
      }
    }

    if (!currNode) return null; // 404 Not Found

    // Case 1: Node to delete has no children (leaf node)
    if (!currNode.left && !currNode.right) {
      if (currNode === this.root) {
        // Then it is the root
        this.root = null;
        return this;
      }

      if (parentNode!.left === currNode) {
        parentNode!.left = null;
        return this;
      } else {
        parentNode!.right = null;
        return this;
      }
    }

    // Case 2: Node has only one child
    if (!currNode.left || !currNode.right) {
      const child = currNode.left || currNode.right;
      if (currNode === this.root) {
        // Then it is the root
        this.root = child;
        return this;
      }

      if (parentNode!.left === currNode) {
        parentNode!.left = child;
        return this;
      } else {
        parentNode!.right = child;
        return this;
      }
    }

    // Case 3: Node has two children
    // Find successor (smallest value in right subtree)
    // Replace current node with successor
    // Fix the connections
    let successorParent = currNode;
    let successor = currNode.right;

    while (successor.left) {
      successorParent = successor;
      successor = successor.left;
    }

    if (successorParent !== currNode) {
      successorParent.left = successor.right;
      successor.right = currNode.right;
    }

    successor.left = currNode.left;

    // If deleting root
    if (currNode === this.root) {
      this.root = successor;
    } else {
      if (parentNode!.left === currNode) {
        parentNode!.left = successor;
      } else {
        parentNode!.right = successor;
      }
    }
    return this;
  }
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
tree.insert(150);
tree.insert(180);
tree.insert(15);
tree.insert(1);
tree.delete(9);
console.log(chalk.red("Lookup 1", JSON.stringify(tree.lookup(1))), "\n\n");

if (tree.root) console.log(chalk.green(JSON.stringify(traverse(tree.root))));

/*
          9
       /     \
      4       20
    /  \     /  \
   1    6   15   170
                 /  \
              150   180
*/

export const beforeDeleting20 = {
  value: 9,
  right: {
    value: 20,
    right: {
      value: 170,
      right: { value: 180, right: null, left: null },
      left: { value: 150, right: null, left: null },
    },
    left: { value: 15, right: null, left: null },
  },
  left: {
    value: 4,
    right: { value: 6, right: null, left: null },
    left: { value: 1, right: null, left: null },
  },
};

export const afterDeleting20 = {
  value: 9,
  right: {
    value: 150,
    right: {
      value: 170,
      right: { value: 180, right: null, left: null },
      left: null,
    },
    left: { value: 15, right: null, left: null },
  },
  left: {
    value: 4,
    right: { value: 6, right: null, left: null },
    left: { value: 1, right: null, left: null },
  },
};
