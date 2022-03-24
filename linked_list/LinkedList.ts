class MyNode {
  value: number;
  next: MyNode | null;

  constructor (value: number) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: MyNode;
  tail: MyNode;
  listSize: number = 0;

  constructor (value: number) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.listSize++;
  }

  /**
   * Appends value to the end of a linked list
   * @param value 
   */
  append (value: number) {
    const newNode = new MyNode(value);
    // set next to be a MyNode, i.e. newNode
    this.tail.next = newNode;
    // point the tail the new node, i.e. newNode
    this.tail = newNode;
    // increase the list size
    this.listSize++;
    // return list
    return this;
  }

  prepend (value: number) {
    const newNode = new MyNode(value);
    // point the newNode to the head
    newNode.next = this.head;
    // point head to new node, i.e. newNode
    this.head = newNode;
    // increment list size
    this.listSize++;
    // return new list
    return this;
  }

  printList () {
    const listArray = [];
    let currentNode: MyNode | null = this.head;
    while (currentNode !== null) {
      listArray.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return listArray;
  }
}

function createLinkedList () {
  const myLinkedList = new LinkedList(10);
  // @ts-ignore
  console.log({myLinkedList});
  
  // @ts-ignore
  console.log(myLinkedList.append(5));
  // @ts-ignore
  console.log(myLinkedList.prepend(9));
  // @ts-ignore
  console.log(myLinkedList.printList());
  // console.log(myLinkedList.append(9));
}

createLinkedList();