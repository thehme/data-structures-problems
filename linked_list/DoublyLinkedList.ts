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
    // @ts-ignore
    console.log({newNode});
    // point newNode's prev to the current tail
    newNode.prev = this.tail;
    // point tail's next pointer to newNode, instead of null
    this.tail.next = newNode;
    // move tail to newNode
    this.tail = newNode;
    this.listSize++;
    return this;
  }

  prepend (value: number) {
    const newNode = new ListNode(value);
    // point the newNode to the head
    newNode.next = this.head;
    this.head.prev = newNode;
    // point head to new node, i.e. newNode
    this.head = newNode;
    // increment list size
    this.listSize++;
    // return new list
    return this;
  }

  printList () {
    const listArray = [];
    let currentNode: ListNode | null = this.head;
    while (currentNode !== null) {
      listArray.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return listArray;
  }

  insert (index: number, value: number) {
    // 0. if index is greater than the length, append value
    if (index >= this.listSize) {
      this.append(value);
      return this;
    }
    // 1. if index 0, then prepend
    if (index === 0) {
      this.prepend(value);
      return this;
    }
    // create node to be inserted
    const newNode = new ListNode(value);
    let prevNode: ListNode | null = null;
    let nextNode: ListNode | null = this.head;

    // find Node at index
    prevNode = this.traveseToIndex(index - 1);

    if (prevNode) {
      // save the next node
      nextNode = prevNode.next;
      newNode.prev = prevNode;
      // point prevNode to newNode
      prevNode.next = newNode;
      // point newNode to next node
      newNode.next = nextNode;
      if (nextNode) {
        nextNode.prev = newNode;
        this.listSize++;
      }
    }
    return this;
  }

  /**
   * Gets node at index
   * @param index of node to return
   * @returns node at index
   */
  traveseToIndex (index: number) {
    let currentIndex = 0;
    let currentNode: ListNode | null = this.head;
    while (currentIndex !== index && currentNode !== null) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode;
  }

  remove(index: number) {
    // if index is >= than the size of linked list, remove last index
    if (index >= (this.listSize - 1)) {
      // find node right before the end
      const prevNode = this.traveseToIndex(this.listSize - 2);
      // point prevNode to null;
      if (prevNode !== null) {
        prevNode.next = null;
        this.listSize--;
      }
      return this;
    }
    // if list is empty
    if (this.tail === null && this.head === null) {
      return this;
    }

    // when index is first
    if (index === 0) {
      if (this.head.next !== null) {
        this.head = this.head.next;
      }
      if (this.head.next !== null) {
        this.tail = this.head.next;
      }
      this.head.prev = null; // addition?
      this.listSize--;
      return this;
    }

    // when index is other than above values
    // find node before index to be removed
    let prevNode = this.traveseToIndex(index - 1);
    // save node after the index that is being removed
    if (prevNode !== null && prevNode.next !== null) {
      let nextNode = prevNode.next.next;
      // point prevNode to next Node
      prevNode.next = nextNode;

      if (nextNode) {
        nextNode.prev = prevNode;
        // reduce size of linked list
        this.listSize--;
      }
    }
    return this;
  }
}

function createDoublyLinkedList () {
  const doublyLinkedList = new DoublyLinkedList(10);
  // @ts-ignore
  console.log({doublyLinkedList});
  
  // @ts-ignore
  console.log(doublyLinkedList.append(5));
  // @ts-ignore
  console.log(doublyLinkedList.append(16));
  // @ts-ignore
  console.log(doublyLinkedList.prepend(1));
  // @ts-ignore
  console.log(doublyLinkedList.printList());

  doublyLinkedList.insert(0, 8);
  // @ts-ignore
  console.log(doublyLinkedList.printList());
  
  doublyLinkedList.insert(1, 6);
  // @ts-ignore
  console.log(doublyLinkedList.printList());

  doublyLinkedList.insert(2, 9);
  // @ts-ignore
  console.log(doublyLinkedList.printList());

  doublyLinkedList.insert(200, 99);
  // @ts-ignore
  console.log(doublyLinkedList.printList());

  doublyLinkedList.remove(0);
  // @ts-ignore
  console.log(doublyLinkedList.printList());

  doublyLinkedList.remove(4);
  // @ts-ignore
  console.log(doublyLinkedList.printList());

  doublyLinkedList.remove(2);
  // @ts-ignore
  console.log(doublyLinkedList.printList());
}

createDoublyLinkedList();