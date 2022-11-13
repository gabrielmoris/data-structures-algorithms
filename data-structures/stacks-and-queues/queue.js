class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  } //O1
  enqueue(value) {
    const newNode = new Node(value);
    if (this.first === null) {
      this.first = newNode;
      this.last = newNode;
      this.length++;
      return this;
    }
    this.last.next = newNode;
    this.last = newNode;
    this.length++;
    return this;
  } //O1
  dequeue() {
    if (!this.first) {
      return;
    }
    if (this.first === this.last) {
      this.last = null;
      return this;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  } //O1
  //isEmpty (implement later);
}

const myQueue = new Queue();
console.log(myQueue.enqueue("Joy"));
console.log(myQueue.enqueue("Matt"));
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");
console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue.peek());

//Joy
//Matt
//Pavel
//Samir

//Implement QUEUE using stacks (Is a bad Idea to use arrays)

class StackQueue {
  constructor() {
    this.first = [];
    this.last = [];
  }

  enqueue(value) {
    const length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value);
    return this;
  } //On

  dequeue() {
    const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop();
    return this;
  } //On
  peek() {
    if (this.last.length > 0) {
      return this.last[0];
    }
    return this.first[this.first.length - 1];
  }
}

const myQueue2 = new StackQueue();
console.log(myQueue2.peek());
console.log(myQueue2.enqueue("Joy2"));
console.log(myQueue2.enqueue("Matt2"));
console.log(myQueue2.enqueue("Pavel2"));
console.log(myQueue2.peek());
myQueue2.dequeue();
myQueue2.dequeue();
myQueue2.dequeue();
console.log(myQueue2.peek());
