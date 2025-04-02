// https://leetcode.cn/problems/design-linked-list/description/

class LinkedListSignedNode {  
  constructor(val) {
      this.val = val;
      this.next = null;
  }
}
class MySignedLinkedList {
  constructor() {
      this.head = new LinkedListSignedNode(null);
      this.size = 0
  }

  // 获取链表中下标为 index 的节点的值。如果下标无效，则返回 -1 
  get(index) {
    if (index < 0 || index >= this.size) {
      return -1
    }
    let cur = this.head;
    for (let i = 0; i <= index; i++) {
      cur = cur.next
    }
    return cur.val
  }

  addAtHead(val) {
      const newNode = new LinkedListSignedNode(val);
      newNode.next = this.head.next
      this.head.next = newNode
      this.size++
  }

  addAtTail(val) {
    const newNode = new LinkedListSignedNode(val);
    let cur = this.head
    while (cur.next) {
      cur = cur.next
    }
    cur.next = newNode
    this.size++
  }

  // 将一个值为 val 的节点插入到链表中下标为 index 的节点之前。如果 index 等于链表的长度，那么该节点会被追加到链表的末尾。如果 index 比长度更大，该节点将 不会插入 到链表中。
  // head->1->2->3
  addAtIndex(index, val) {
    if (index < 0 || index > this.size) {
      return
    }
    if (index < this.size) {
      let cur = this.head
      for (let i = 0; i < index; i++) {
        cur = cur.next
      }
      const newNode = new LinkedListSignedNode(val);
      newNode.next = cur.next
      cur.next = newNode
      this.size++
    } else if (index === this.size) {
      this.addAtTail(val)
    }
  }

  // 如果下标有效，则删除链表中下标为 index 的节点。
  // head->1->2->3->null
  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) {
      return
    }
    let cur = this.head
    for (let i = 0; i < index; i++) {
      cur = cur.next
    }
    cur.next = cur.next.next
    this.size--
  }
}

const mySignedLinkedList = new MySignedLinkedList();
console.log(mySignedLinkedList.addAtHead(1));
console.log(mySignedLinkedList.addAtTail(3));
console.log(mySignedLinkedList.addAtIndex(1, 2));
console.log(mySignedLinkedList.get(1));
console.log(mySignedLinkedList.deleteAtIndex(1));
console.log(mySignedLinkedList.get(1));
