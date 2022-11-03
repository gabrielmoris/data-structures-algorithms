class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  } //O1

  set(key, value) {
    let address = this._hash(key);

    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
  } //O1

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket.length) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  } //O1 but if there are collisions(more than 1 item) is On

  keys() {
    const keysArr = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArr.push(this.data[i][0][0]);
      }
    }
    return keysArr;
  } //On

  values() {
    const valsArr = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        valsArr.push(this.data[i][0][1]);
      }
    }
    return valsArr;
  } //On
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
console.log(myHashTable.get("grapes"));
myHashTable.set("apples", 9);
console.log(myHashTable.get("apples"));
myHashTable.set("oranges", 49);
console.log(myHashTable.keys());
console.log(myHashTable.values());
