import chalk from "chalk";

class HashTable {
  data: any[];
  constructor(size: number) {
    this.data = new Array(size);
  }

  private hash(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  public set(key: string, value: any) {
    const address = this.hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }

    // Check if key already exists and update its value
    const pair = this.data[address].find((pair: string[]) => pair[0] === key);
    if (pair) {
      pair.value = value;
    } else {
      // Add new key-value pair
      this.data[address].push([key, value]);
    }
    return address;
  }

  public get(key: string) {
    const address = this.hash(key);
    const bucket = this.data[address];
    if (bucket) {
      const pair = bucket.find((pair: string[]) => pair[0] === key);
      return pair ? pair[1] : undefined;
    }
    return undefined;
  }

  public delete(key: string) {
    const address = this.hash(key);
    const bucket = this.data[address];
    if (bucket) {
      bucket.forEach((pair: string[]) => {
        if (pair[0] === key) {
          const idx = bucket.indexOf(pair);
          bucket.splice(idx, 1);
        }
      });
    }
  }

  public keys() {
    const keys: string[] = [];

    // This proves that Object.keys() is not a Performant method in JS => O(n²)
    this.data.forEach((bucket) => {
      if (bucket) {
        if (bucket.length < 2) {
          keys.push(bucket[0][0]);
        } else {
          bucket.forEach((data: string[]) => {
            if (data) keys.push(data[0]);
          });
        }
      }
    });
    return keys;
  }

  // Each bucket represents a Memory address
  public print(): void {
    console.log(chalk.green("\nHash Table Contents:"));
    this.data.forEach((bucket, index) => {
      if (bucket && bucket.length > 0) {
        console.log(chalk.green(`\nBucket ${index}:`));
        bucket.forEach((pair: any[]) => {
          console.log(
            chalk.yellow(
              `  Key: "${pair[0]}" => Value: ${JSON.stringify(pair[1])}`
            )
          );
        });
      }
    });
  }
}

const hashTable = new HashTable(50);
hashTable.set("grapes", 10000);
console.log(hashTable.get("grapes"));
hashTable.set("bananas", 500);
console.log(hashTable.get("bananas"));
hashTable.set("apples", 500);
console.log(hashTable.get("apples"));
console.log(hashTable.keys());
hashTable.print();
console.log(chalk.blue("Deleting grapes"));
hashTable.delete("grapes");
hashTable.print();
