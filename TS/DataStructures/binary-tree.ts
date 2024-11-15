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
