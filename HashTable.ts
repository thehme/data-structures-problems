
class HashTable {
  readonly data;

  constructor(size: number){
    this.data = new Array(size);
  }

  _hash(key: string) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

	set(key: string, value: number) {
		const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
		this.data[address].push([key, value]);
    return this.data;
	}

	get(key: string) { // Hash Table: [[],[],[],...]
    const bucketAddress = this._hash(key);
    const currentBucket = this.data[bucketAddress]; // bucket within Hash table []
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
	}

  keys() {
    const keysArray: string[] = [];
    for (let i = 0; i < this.data.length; i++) { // [[[],[],...],[[],..],[],...]
      const currentBucket = this.data[i]; // [[],[],...], e.g. [['grapes', 1000]]
      if (currentBucket) {
        if (currentBucket.length > 1) { // [[],[],[],...]
          for (let j = 0; j < currentBucket.length; j++) {
            const childBucket = currentBucket[j]; // [key, value]
            keysArray.push(childBucket[0]);
          }
        } else {
          keysArray.push(currentBucket[0][0]);
        }
      }
    }
    // @ts-ignore
    // console.log({keysArray});
    return keysArray;
  }
}

const myHashTable = new HashTable(3);
myHashTable.set('grapes', 10000)
// @ts-ignore
// console.log(myHashTable.get('grapes'))

myHashTable.set('apples', 9)
// @ts-ignore
// console.log(myHashTable.get('apples'))

myHashTable.set('oranges', 53)
// @ts-ignore
// console.log(myHashTable.get('oranges'))

// @ts-ignore
console.log(myHashTable.keys());