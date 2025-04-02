// https://leetcode.cn/problems/design-linked-list/description/

class LinkedListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
class MyLinkedList {
  constructor() {
    this.head = new LinkedListNode(null);
    this.tail = new LinkedListNode(null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }

  // 获取链表中下标为 index 的节点的值。如果下标无效，则返回 -1
  get(index) {
    if (index < 0 || index >= this.size) {
      return -1;
    }
    let cur = this.head;
    for (let i = 0; i <= index; i++) {
      cur = cur.next;
    }
    return cur.val;
  }

  addAtHead(val) {
    const newNode = new LinkedListNode(val);
    newNode.prev = this.head;
    newNode.next = this.head.next;
    this.head.next.prev = newNode;
    this.head.next = newNode;
    this.size++;
  }

  addAtTail(val) {
    const newNode = new LinkedListNode(val);
    newNode.next = this.tail;
    newNode.prev = this.tail.prev;
    this.tail.prev.next = newNode;
    this.tail.prev = newNode;
    this.size++;
  }

  // 将一个值为 val 的节点插入到链表中下标为 index 的节点之前。如果 index 等于链表的长度，那么该节点会被追加到链表的末尾。如果 index 比长度更大，该节点将 不会插入 到链表中。
  // head->1->2->3->tail
  addAtIndex(index, val) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index < this.size) {
      let cur = this.head;
      for (let i = 0; i < index; i++) {
        cur = cur.next;
      }
      const newNode = new LinkedListNode(val);
      newNode.next = cur.next;
      newNode.prev = cur;
      cur.next.prev = newNode;
      cur.next = newNode;
      this.size++;
    } else if (index === this.size) {
      this.addAtTail(val);
    }
  }

  // 如果下标有效，则删除链表中下标为 index 的节点。
  // head->1->2->3->tail
  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) {
      return;
    }
    let cur = this.head;
    for (let i = 0; i <= index; i++) {
      cur = cur.next;
    }
    cur.next.prev = cur.prev;
    cur.prev.next = cur.next;
    this.size--;
  }

  display() {
    console.log(`size = ${this.size}`);
    let p = this.head.next;
    let str = "";
    while (p !== this.tail) {
      str += `${p.val} <-> `;
      p = p.next;
    }
    console.log(str + "null\n");
  }
}

const myLinkedList = new MyLinkedList();
console.log(myLinkedList.addAtHead(1));
console.log(myLinkedList.addAtTail(3));
console.log(myLinkedList.addAtIndex(1, 2));
console.log(myLinkedList.get(1));
console.log(myLinkedList.deleteAtIndex(1));
console.log(myLinkedList.get(1));
console.log(myLinkedList.display());
