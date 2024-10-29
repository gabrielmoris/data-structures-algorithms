//Implementation as a Linked List
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  } //O1
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  } //O1
  pop() {
    if (!this.top) {
      return;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return holdingPointer;
  } //O1
  //isEmpty (implement function later)
}

// const myStack = new Stack();
// myStack.push("Google");
// myStack.push("Udemy");
// myStack.push("Discord");
// console.log(myStack.peek());
// console.log(myStack.pop());
//Discord
//Udemy
//Google

//Implementation as an Array

class Stack2 {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  } //O1
  push(value) {
    this.array.push(value);
    return this;
  } //O1
  pop() {
    this.array.pop();
    return this;
  } //O1
}

const myStack2 = new Stack2();
console.log(myStack2.peek());
myStack2.push("google");
console.log(myStack2.peek());
myStack2.push("udemy");
console.log(myStack2.peek());
myStack2.push("discord");
console.log(myStack2.peek());
console.log(myStack2.pop());
console.log(myStack2.pop());
console.log(myStack2.pop());
