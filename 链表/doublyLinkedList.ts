class DoubleListNode<T = any> {
  value: T;
  next: DoubleListNode<T> | null = null;
  prev: DoubleListNode<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}

const createDoublyLinkedList = (arr: number[]) => {
  // 如果数组为空或未提供，直接返回 null
  if (!arr || !arr.length) {
    return null;
  }

  // 创建链表的头节点，并使用第一个数组元素作为其值
  let head = new DoubleListNode(arr[0]);
  let cur = head;

  // 遍历数组的剩余元素，逐个创建新节点并链接到链表中
  for (let i = 1; i < arr.length; i++) {
    const newNode = new DoubleListNode(arr[i]);
    cur.next = newNode;
    newNode.prev = cur;
    cur = cur.next;
  }
  return head;
}

// 查找
class DoublyLinkedList {
  head: DoubleListNode | null;
  constructor(arr: number[]) {
    this.head = createDoublyLinkedList(arr);
  }

  find() {
    let p = this.head;
    let tail: DoubleListNode | null = null;
    while (p) {
      console.log(p.value);
      tail = p;
      p = p.next;
    }
    p = tail;
    while (p) {
      console.log(p.value);
      p = p.prev;
    }
  }
}
const dll = new DoublyLinkedList([1, 2, 3, 4, 5]);
console.log(dll);
