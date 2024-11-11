class Node<T> {
  value: T;
  next: Node<T> | null;
  prev: Node<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedist<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  length: number;
  constructor(value: T) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  //O(1)
  append(value: T): this {
    const node = new Node(value);
    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  //O(1)
  prepend(value: T): this {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
    return this;
  }

  //O(n)
  insert(value: T, index: number): this {
    if (index < 1) {
      return this.prepend(value);
    }

    if (index >= this.length) {
      return this.append(value);
    }

    const node = new Node(value);
    const currentNode = this.traverse(index - 1);

    if (currentNode && currentNode.next) {
      node.next = currentNode.next;
      node.prev = currentNode;
      currentNode.next.prev = node;
      currentNode.next = node;
      this.length++;
    }
    return this;
  }

  //O(n)
  delete(index: number): this {
    if (index >= this.length || index < 0) {
      return this;
    }

    // Handle deleting first node
    if (index === 0) {
      if (this.head) {
        this.head = this.head.next;
        if (this.head) {
          this.head.prev = null;
        } else {
          // If we removed the last node
          this.tail = null;
        }
        this.length--;
      }
      return this;
    }

    // Handle deleting other nodes
    const currentNode = this.traverse(index - 1);
    if (currentNode && currentNode.next) {
      currentNode.next = currentNode.next.next;
      if (currentNode.next) {
        currentNode.next.prev = currentNode;
      } else {
        // Update tail when deleting last node
        this.tail = currentNode;
      }
      this.length--;
    }
    return this;
  }

  // Check this
  reverse(): this {
    if (!this.head || !this.head.next) return this;

    let oldHead = this.head;
    this.tail = this.head;
    this.tail.prev = this.head.next;
    let oldNext = oldHead.next;

    while (oldNext) {
      const temp = oldNext.next;
      if (oldHead.prev) {
        oldNext.prev = oldNext.next;
      }
      oldNext.next = oldHead;
      oldHead = oldNext;
      oldNext = temp;
    }
    this.head.next = null;
    this.head = oldHead;
    return this;
  }

  printList(): T[] {
    const arr = [];
    let currentNode = this.head;
    while (currentNode != null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }

  private traverse(index: number): Node<T> | null {
    let currentIndex = 0;
    let currentNode = this.head;
    while (currentNode != null && currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode;
  }
}

const linkedList = new DoublyLinkedist(1);
linkedList.append(2);
linkedList.append(4);
linkedList.prepend(0);
linkedList.insert(3, 3);
linkedList.delete(0);
linkedList.reverse();
console.log(linkedList.printList());
console.log(linkedList);
