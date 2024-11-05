export class Array<T> {
  length: number;
  data: { [key: string]: T };
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // O(1)
  get(index: number) {
    return this.data[index];
  }

  push(item: T) {
    this.data[this.length] = item;
    this.length++;
    return this;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  //O(n)
  delete(index: number) {
    const item = this.data[index];
    // 1. Loop all over the items from an index and reasign 1 index less (after deleting or shift)
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
}

const newArr = new Array();
console.log(newArr.push("Onions"));
console.log(newArr.push("Poratoes"));
newArr.delete(1);
console.log(newArr);
