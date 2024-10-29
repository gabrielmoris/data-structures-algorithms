const basket = ["apples", "oranges", "grapes"];

//linked list would be:

// apples
//     8923 --> oranges
//                 8924 --> grapes
//                             8925 --> null

// Pointer: reference to another place in memory, object, data...
//Example:
const obj1 = { a: true };
const obj2 = obj1;

// build a linked list

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };
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
      return this.printList();
    }
    if (index >= this.length) {
      this.append(value);
      return this.printList();
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
myLintedList.append("delete me");
myLintedList.prepend(1);
myLintedList.insert(2, 99);
myLintedList.remove(0);
myLintedList.remove(34);
console.log("linked list looks like: ", JSON.stringify(myLintedList.head));
console.log(myLintedList.printList());
