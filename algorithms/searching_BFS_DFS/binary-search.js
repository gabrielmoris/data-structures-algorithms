// It is like the lookup method in the binary three
function lookup(value) {
  //Code here
  if (!this.root) {
    return false;
  }
  let currentNode = this.root;
  while (currentNode) {
    if (value < currentNode.value) {
      //left

      currentNode = currentNode.left;
    } else if (value > currentNode.value) {
      //right

      currentNode = currentNode.right;
    } else if (currentNode.value === value) {
      return currentNode;
    }
  }
  return false;
} //O logN
