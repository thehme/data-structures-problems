import { ListNode } from "../ListNode";

/**
 * FIFO = First In, First Out
 */
class Queue {
  first: ListNode | null;
  last: ListNode | null;
  len: number;

  constructor() {
    this.first = null; // first in line
    this.last = null; // last in line
    this.len = 0;
  }

  // add to end
  enqueue(value: string) {
    const newNode = new ListNode(value);
    // if queue is empty
    if (this.first === null) {
      this.first = newNode;
      this.last = newNode;
    }
    if (this.last !== null) {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.len++;
    return this;
  }

  // remove from the front
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.len--;
    return this;
  }

  // get first item
  peek() {
    return this.first;
  }
}

const myQueue = new Queue();
// @ts-ignore
console.log(myQueue.peek());

// @ts-ignore
console.log(myQueue.enqueue('Brenda'));
// @ts-ignore
// console.log(myQueue.peek());

// @ts-ignore
console.log(myQueue.enqueue('Mike'));
// @ts-ignore
// console.log(myQueue.peek());

// @ts-ignore
console.log(myQueue.enqueue('Mila'));
// @ts-ignore
// console.log(myQueue.peek());

// @ts-ignore
console.log(myQueue.enqueue('Alex'));
// @ts-ignore
// console.log(myQueue.peek());

// @ts-ignore
console.log("dequeue names");
// @ts-ignore
console.log(myQueue.dequeue());
// @ts-ignore
// console.log(myQueue.peek());

// @ts-ignore
console.log(myQueue.dequeue());
// @ts-ignore
// console.log(myQueue.peek());

// @ts-ignore
console.log(myQueue.dequeue());
// @ts-ignore
// console.log(myQueue.peek());

// @ts-ignore
console.log(myQueue.dequeue());
// @ts-ignore
console.log(myQueue.peek());


