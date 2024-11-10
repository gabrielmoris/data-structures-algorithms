class Node {
  value: any;
  next: any;
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: Node;
  tail: Node;
  length: number;
  constructor(value: any) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  //O(1)
  append(value: any) {
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }

  //O(1)
  prepend(value: any) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }

  //O(n)
  insert(value: any, index: number) {
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
    node.next = currentNode.next;
    currentNode.next = node;
    this.length++;
  }

  //O(n)
  delete(index: number) {
    if (index < 1) {
      this.head = this.head.next;
      return this;
    }

    if (index >= this.length) {
      return this;
    }
    // Just deleting a ointer to the target node, will make the Garbage Collector delete it as well.
    const currentNode = this.traverse(index - 1);
    currentNode.next = currentNode.next.next;
    this.length--;
    return this;
  }

  printList() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode != null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }

  private traverse(index: number) {
    let currentIndex = 0;
    let currentNode = this.head;
    while (currentIndex < index) {
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
console.log(linkedList.printList());
