class Node<T> {
  value: T;
  next: Node<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
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
      this.tail = node;
    }
    this.length++;
    return this;
  }

  //O(1)
  prepend(value: T): this {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }

  //O(n)
  insert(value: T, index: number): this {
    if (index < 1) {
      this.prepend(value);
      return this;
    }

    if (index >= this.length) {
      this.append(value);
      return this;
    }

    const node = new Node(value);
    const currentNode = this.traverse(index - 1);
    if (currentNode && currentNode.next) {
      node.next = currentNode.next;
      currentNode.next = node;
      this.length++;
    }
    return this;
  }

  //O(n)
  delete(index: number): this {
    if (index < 1 && this.head) {
      this.head = this.head.next;
      return this;
    }

    if (index >= this.length) {
      return this;
    }
    // Just deleting a ointer to the target node, will make the Garbage Collector delete it as well.
    const currentNode = this.traverse(index - 1);
    if (currentNode && currentNode.next) {
      currentNode.next = currentNode.next.next;
      if (index === this.length - 1) {
        this.tail = currentNode;
      }
      this.length--;
    }

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

  reverse(): this {
    if (!this.head || !this.head.next) return this;

    let oldHead = this.head;
    this.tail = this.head;
    let oldNext = oldHead.next;

    while (oldNext) {
      const temp = oldNext.next;
      oldNext.next = oldHead;
      oldHead = oldNext;
      oldNext = temp;
    }
    this.head.next = null;
    this.head = oldHead;
    return this;
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

const linkedList = new LinkedList(1);
linkedList.append(2);
linkedList.append(4);
linkedList.prepend(0);
linkedList.insert(3, 3);
linkedList.delete(3);
linkedList.reverse();
console.log(linkedList.printList());
console.log(JSON.stringify(linkedList));
