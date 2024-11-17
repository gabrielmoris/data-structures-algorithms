interface INode<T> {
  value: T;
  right: BTNode<T> | null;
  left: BTNode<T> | null;
}

class BTNode<T> implements INode<T> {
  value: T;
  right: INode<T> | null;
  left: INode<T> | null;
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

  insert(value: T) {}
  lookup(value: T) {}
  delete(value: T) {}
}

function traverse<T>(node: INode<T>): BTNode<T> {
  const tree: INode<T> = { value: node.value, right: null, left: null };
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
if (tree.root) console.log(JSON.stringify(traverse(tree.root)));
