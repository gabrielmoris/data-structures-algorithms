// add a reverse method to the linked list to reverse the data

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  } //O1

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
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
      return this;
    }
    if (index >= this.length) {
      this.append(value);
      return this;
    }
    const newNode = new Node(value);
    const leader = this._traverseToIndex(index - 1);
    const holdintPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdintPointer;
    this.length++;
    return this;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return this;
    }
    if (index > this.length) {
      const leader = this._traverseToIndex(this.length - 2);
      leader.next = null;
      this.length--;
      return this;
    }
    const leader = this._traverseToIndex(index - 1);
    const holdintPointer = leader.next.next;
    leader.next = holdintPointer;
    this.length--;
    return this;
  } //On

  reverse() {
    if (!this.head.next) {
      return this;
    }

    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const tmp = second.next;
      second.next = first;
      first = second;
      second = tmp;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }

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

const myLintedList = new LinkedList(10);
myLintedList.append(16);
myLintedList.append(24);
// myLintedList.reverse();
console.log("linked list looks like: ", JSON.stringify(myLintedList.head));
console.log(myLintedList.printList());
console.log(myLintedList.tail, myLintedList.tail.next);
