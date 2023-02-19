class NodeClass<T = any> {
  value: T;
  next: NodeClass | null;
  constructor(val: T) {
    this.value = val;
    this.next = null;
  }
}

class MyLinkedList<T> {
  head: NodeClass | null = null;
  size: number = 0;
  constructor() {}

  get(index: number): number {
    if (index < 0 || index > this.size) return -1;
    let cur = this.head;
    let len = 0;
    while (len++ < index && cur) {
      cur = cur.next;
    }
    return cur!.value;
  }

  addAtHead(val: number): void {
    let newNode = new NodeClass(val);
    let cur = this.head;
    this.head = newNode;
    newNode.next = cur;
    this.size++;
  }

  addAtTail(val: number): void {
    let newNode = new NodeClass(val);
    let cur = this.head;
    while (cur!.next) {
      cur = cur!.next;
    }
    cur!.next = newNode;
    this.size++;
  }

  addAtIndex(index: number, val: number): void {
    if (index > this.size) return;
    let newNode = new NodeClass(val);
    let cur = this.head;
    if (index <= 0) {
      this.head = cur!.next;
    } else {
      let len = 0;
      let pre: NodeClass | null = null;
      while (len++ < index && cur) {
        pre = cur;
        cur = cur.next;
      }
      pre!.next = newNode;
      newNode.next = cur;
    }
    this.size++;
  }

  deleteAtIndex(index: number): void {
    console.log(this.size);

    if (index < 0 || index > this.size) return;
    let cur = this.head;
    let len = 0;
    let pre: NodeClass | null = null;
    while (len++ < index && cur) {
      pre = cur;
      cur = cur.next;
    }
    pre!.next = cur!.next;
    this.size--;
  }

  traverse() {
    const values: T[] = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join("->"));
  }
}

const linkedList = new MyLinkedList();
linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1, 2); //链表变为1-> 2-> 3
linkedList.get(1);
linkedList.traverse();
linkedList.deleteAtIndex(1); //现在链表是1-> 3
linkedList.traverse();
linkedList.get(1); //返回3


export {}