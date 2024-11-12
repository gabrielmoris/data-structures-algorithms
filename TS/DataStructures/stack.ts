// Arrays or Linked lists are both good implementations for a Stack. It depends on the operations (if more resize is needed).
// Array: Use less memory, but resize can take O(n). It is more cache Friendly because of spatial locality.
// Linked lists: use more Memory, but if they need to grow and shrink frequently dont need resizing operations.

import chalk from "chalk";

class Node<T> {
  value: T;
  next: Node<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class StackLL<T> {
  top: Node<T> | null;
  bottom: Node<T> | null;
  length: number;
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek(): T | null {
    if (this.top) return this.top.value;
    else return null;
  }

  push(value: T): T {
    const node = new Node(value);
    if (!this.top) {
      this.top = node;
      this.bottom = node;
      this.length++;
      return value;
    }
    node.next = this.top;
    this.top = node;
    this.length++;
    return value;
  }

  pop(): null | T {
    if (this.isEmpty()) {
      return null;
    }
    const poppedValue = this.top!.value;
    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
      this.length = 0;
      return poppedValue;
    } else {
      this.top = this.top!.next;
      this.length--;
      return poppedValue;
    }
  }

  isEmpty(): boolean {
    return this.length === 0;
  }
}

const stack = new StackLL();
console.log(chalk.blue("______STACK LINKED LIST_______"));
stack.push("Google");
console.log(chalk.blue(stack.peek())); // Google
stack.push("Amazon");
stack.push("Meta");
console.log(chalk.blue(stack.peek())); // Meta

for (let i = 0; i < 3; i++) {
  console.log(chalk.blue(i + 1 + ": ", stack.pop()));
}

console.log(chalk.blue(stack.peek())); // null

/// ARRAY Implementation
class StackArray<T> {
  stack: T[];
  constructor() {
    this.stack = [];
  }

  peek(): T | null {
    if (this.stack.length) {
      return this.stack[this.stack.length - 1];
    } else {
      return null;
    }
  }

  push(value: T): T {
    this.stack.push(value);
    return value;
  }

  pop(): null | T {
    if (this.isEmpty()) {
      return null;
    }

    return this.stack.pop() as T;
  }

  isEmpty(): boolean {
    return this.stack.length === 0;
  }
}

const stackArr = new StackArray();
console.log(chalk.green("_________STACK ARRAY__________"));
stackArr.push("Arr Google");
console.log(chalk.green(stackArr.peek())); // Arr Google
stackArr.push("Arr Amazon");
stackArr.push("Arr Meta");
console.log(chalk.green(stackArr.peek())); // Arr Meta

for (let i = 0; i < 3; i++) {
  console.log(chalk.green(i + 1 + ": ", stackArr.pop()));
}

console.log(chalk.green(stackArr.peek())); // null
