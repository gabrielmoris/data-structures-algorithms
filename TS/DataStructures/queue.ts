// Linked lists are better implementations for a Queue. The arrays would need reindexing.

import chalk from "chalk";

class Node<T> {
  value: T;
  next: Node<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class Queue<T> {
  front: Node<T> | null;
  rear: Node<T> | null;
  length: number;
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  peek(): T | null {
    if (this.front) return this.front.value;
    else return null;
  }

  enqueue(value: T): T {
    const node = new Node(value);
    if (!this.rear) {
      this.front = node;
      this.rear = node;
      this.length++;
      return value;
    }
    this.rear.next = node;
    this.rear = node;
    this.length++;
    return value;
  }

  dequeue(): null | T {
    if (this.isEmpty()) {
      return null;
    }
    const poppedValue = this.front!.value;
    if (this.length === 1) {
      this.front = null;
      this.rear = null;
      this.length = 0;
      return poppedValue;
    } else {
      this.front = this.front!.next;
      this.length--;
      return poppedValue;
    }
  }

  isEmpty(): boolean {
    return this.length === 0;
  }
}

const stack = new Queue();
console.log(chalk.blue("______QUEUE_______"));
stack.enqueue("first");
console.log(chalk.blue(stack.peek())); // first
stack.enqueue("second");
stack.enqueue("third");
console.log(chalk.blue(stack.peek())); // first

for (let i = 0; i < 3; i++) {
  console.log(chalk.blue(i + 1 + ": ", stack.dequeue()));
}

console.log(chalk.blue(stack.peek())); // null
