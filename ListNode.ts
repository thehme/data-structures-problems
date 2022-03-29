export class ListNode {
  constructor(value: unknown) {
    this.value = value;
    this.next = null;
  }

  value: unknown;
  next: ListNode | null;
};