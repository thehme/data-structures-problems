import { ListNode } from "../ListNode";

/**
 * LILO: Last In First Out
 * 
 */
class Stack {
  top: ListNode | null;
  bottom: ListNode | null;
  len: number;

  constructor() {
    this.top = null;
    this.bottom = null;
    this.len = 0;
  }
  
  /**
   * returns top of stack
   */
  peek() {
    return this.top;
  }

  push(value: string) {
    const newNode = new ListNode(value);
    // @ts-ignore
    // console.log({newNode});
    // if stack is empty
    if (this.len === 0) {
      this.top = newNode;
      this.bottom = newNode;
      this.len++;
      return this;
    }
    /*
    THIS IS NOT NEEDED
    // else stack is not empty
    let currentPointer = this.top;
    // @ts-ignore
    // console.log(currentPointer.next);
    while (currentPointer && currentPointer.next !== null) {
      if (currentPointer) {
        currentPointer = currentPointer.next;
      }
    }
    // @ts-ignore
    // console.log({currentPointer});
    if (currentPointer) {
      currentPointer.next = newNode;
      this.top = newNode;
      this.len++;
    }
    */
    const currentTop = this.top;
    // set current top to point to new node, beginning of linked list
    this.top = newNode;
    // now the new node, can point to previous top
    this.top.next = currentTop;
    this.len++;
    return this;
  }

  /**
   * Remove node at the top
   */
  pop() {
    // if no top
    if (!this.top) {
      return null;
    }
    // if there is a single node, set top/bottom to null and return empty stack
    if (this.top && this.top.next === null) {
      this.top = null;
      this.bottom = null;
      this.len--;
      return this;
    }
    // } else {
    //   if (this.top && this.top.next) {
      // const currentTop = this.top;
      this.top = this.top.next;
        // this.bottom = this.top.next;
      this.len--;
      return this;
      // }
    // }
  }
}

const myStack = new Stack();
// @ts-ignore
// console.log(myStack.peek());

// @ts-ignore
console.log(myStack.push('google'));
// @ts-ignore
// console.log(myStack.peek());

// @ts-ignore
console.log(myStack.push('udemy'));
// @ts-ignore
// console.log(myStack.peek());

// @ts-ignore
console.log(myStack.push('discord'));
// @ts-ignore
console.log(myStack.peek());


//       ^
//       | discord
//       | udemy
// Stack | google

const myStack2 = new Stack();
myStack2.push('Brenda');
myStack2.push('Mike');
myStack2.push('Mila');
myStack2.push('Alex');
// @ts-ignore
console.log(myStack2.peek());

myStack2.pop();
// @ts-ignore
console.log(myStack2.peek());

myStack2.pop();
// @ts-ignore
console.log(myStack2.peek());

myStack2.pop();
// @ts-ignore
console.log(myStack2.peek());

myStack2.pop();
// @ts-ignore
console.log(myStack2.peek());