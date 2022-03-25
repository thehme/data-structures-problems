class ListNode {
  value: number;
  next: ListNode | null;
  prev: ListNode | null;

  constructor (value: number) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  head: ListNode;
  tail: ListNode;
  listSize: number = 0;

  constructor (value: number) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.listSize++;
  }

  /**
   * Appends value to the end of a linked list
   * @param value 
   */
  append (value: number) {
    const newNode = new ListNode(value);
    // set next to be a ListNode, i.e. newNode
    this.tail.next = newNode;
    // point the tail the new node, i.e. newNode
    this.tail = newNode;
    // increase the list size
    this.listSize++;
    // return list
    return this;
  }

  // prepend (value: number) {
  //   const newNode = new ListNode(value);
  //   // point the newNode to the head
  //   newNode.next = this.head;
  //   // point head to new node, i.e. newNode
  //   this.head = newNode;
  //   // increment list size
  //   this.listSize++;
  //   // return new list
  //   return this;
  // }

  // printList () {
  //   const listArray = [];
  //   let currentNode: ListNode | null = this.head;
  //   while (currentNode !== null) {
  //     listArray.push(currentNode.value);
  //     currentNode = currentNode.next;
  //   }
  //   return listArray;
  // }

  // insert (index: number, value: number) {
  //   // 0. if index is greater than the length, append value
  //   if (index >= this.listSize) {
  //     this.append(value);
  //     return this;
  //   }
  //   // 1. if index 0, then prepend
  //   if (index === 0) {
  //     this.prepend(value);
  //     return this;
  //   }
  //   // create node to be inserted
  //   const newNode = new ListNode(value);
  //   let prevNode: ListNode | null = null;
  //   let nextNode: ListNode | null = this.head;

  //   // find Node at index
  //   prevNode = this.traveseToIndex(index - 1);

  //   if (prevNode) {
  //     // save the next node
  //     nextNode = prevNode.next;
  //     // point prevNode to newNode
  //     prevNode.next = newNode;
  //     // point newNode to next node
  //     newNode.next = nextNode;
  //     this.listSize++;
  //   }
  //   return this;
  // }

  // /**
  //  * Gets node at index
  //  * @param index of node to return
  //  * @returns node at index
  //  */
  // traveseToIndex (index: number) {
  //   let currentIndex = 0;
  //   let currentNode: ListNode | null = this.head;
  //   while (currentIndex !== index && currentNode !== null) {
  //     currentNode = currentNode.next;
  //     currentIndex++;
  //   }
  //   return currentNode;
  // }

  // remove(index: number) {
  //   // if index is >= than the size of linked list, remove last index
  //   if (index >= (this.listSize - 1)) {
  //     // find node right before the end
  //     const prevNode = this.traveseToIndex(this.listSize - 2);
  //     // point prevNode to null;
  //     if (prevNode !== null) {
  //       prevNode.next = null;
  //       this.listSize--;
  //     }
  //     return this;
  //   }
  //   // if list is empty
  //   if (this.tail === null && this.head === null) {
  //     return this;
  //   }

  //   // when index is first
  //   if (index === 0) {
  //     if (this.head.next !== null) {
  //       this.head = this.head.next;
  //     }
  //     if (this.head.next !== null) {
  //       this.tail = this.head.next;
  //     }
  //     this.listSize--;
  //     return this;
  //   }

  //   // when index is other
  //   // find node before index to be removed
  //   let prevNode = this.traveseToIndex(index - 1);
  //   // save node after the index that is being removed
  //   if (prevNode !== null && prevNode.next !== null) {
  //     let nextNode = prevNode.next.next;
  //     // point prevNode to next Node
  //     prevNode.next = nextNode;
  //     // reduce size of linked list
  //     this.listSize--;
  //   }
  //   return this;
  // }
}

function createDoublyLinkedList () {
  const myLinkedList = new LinkedList(10);
  // @ts-ignore
  // console.log({myLinkedList});
  
  // @ts-ignore
  // console.log(myLinkedList.append(5));
  // @ts-ignore
  // console.log(myLinkedList.prepend(9));
  // @ts-ignore
  // console.log(myLinkedList.printList());
  // myLinkedList.insert(0, 8);
  // // @ts-ignore
  // console.log(myLinkedList.printList());
  
  // myLinkedList.insert(1, 6);
  // // @ts-ignore
  // console.log(myLinkedList.printList());

  // myLinkedList.insert(2, 9);
  // // @ts-ignore
  // console.log(myLinkedList.printList());

  // myLinkedList.insert(200, 99);
  // // @ts-ignore
  // console.log(myLinkedList.printList());

  // myLinkedList.remove(0);
  // // @ts-ignore
  // console.log(myLinkedList.printList());

  // myLinkedList.remove(4);
  // // @ts-ignore
  // console.log(myLinkedList.printList());

  // myLinkedList.remove(2);
  // // @ts-ignore
  // console.log(myLinkedList.printList());
}

createDoublyLinkedList();