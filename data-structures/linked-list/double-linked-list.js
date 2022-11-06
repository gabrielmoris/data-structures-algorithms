class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class doubleLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  } //O1

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  } //O1
  printList() {
    const array = [];
    let currentNode = this.head;

    while (currentNode != null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  } //On

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    if (index >= this.length) {
      console.log(index, this.length);
      this.append(value);
      return this.printList();
    }
    const newNode = new Node(value);
    const leader = this._traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    return this;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
      return this;
    }
    if (index > this.length) {
      const leader = this._traverseToIndex(this.length - 2);
      leader.next = null;
      leader.prev = this.tail.prev.prev;
      this.tail = leader;
      this.length--;
      return this;
    }
    const leader = this._traverseToIndex(index - 1);
    const holdintPointer = leader.next.next;
    leader.next = holdintPointer;
    holdintPointer.prev = leader;
    this.length--;
    return this;
  } //On

  _traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

const myLintedList = new doubleLinkedList(10);
myLintedList.append(5);
myLintedList.append(16);
myLintedList.prepend(35);
myLintedList.insert(15, 44);
myLintedList.remove(1);
console.log("linked list looks like: ", myLintedList.remove(10));
console.log(myLintedList.printList());
