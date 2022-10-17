const strings = ["a", "b", "c", "d"];
const stringsReallyAre = {
  0: "a",
  1: "b",
  2: "c",
  3: "d",
};
// 4 items taking 4 shells of store = 16 bytes of storage

strings[2]; //O(1)

//push
strings.push("e"); //O(1) If dynamic array needs to be allocated O(n)

//pop
strings.pop(); //O(1)

//unshift
strings.unshift("x"); //O(n) I have to change all indexes after I put x at the begginning

//splice
strings.splice(2, 0, "alien"); //O(n), I also have to change indexes. Args(where I divide, how many items I delete, item added)

// HOW TO BUILD AN ARRAY FROM SCRATCH

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index]; //O(1)
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length; //O(1)
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem; //O(1)
  }
  delete(index) {
    // When I call shiftItems is O(n)
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index) {
    const lastItem = this.data[index];
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;

    return lastItem;
  }
}

const newArr = new MyArray();
newArr.push("Hola");
newArr.push("gominola");
newArr.pop();
newArr.push("que tal?");
newArr.push("!");
newArr.delete(1);
console.log(newArr);
