// Node节点类
class Node<T = any> {
  value: T;
  next: Node<T> | null;
  constructor(val: T) {
    this.value = val;
    this.next = null;
  }
}


// 链表类
class LinkedList<T> {
  private head: Node<T> | null = null;
  private size: number = 0;

  get length() {
    return this.size;
  }

  // 向链表尾部添加元素
  append(element: T) {
    const node = new Node(element);
    // 1. 当链表为空
    if (!this.head) {
      this.head = node;
    } else {
      // 2. 当链表不为空
      // 创建一个current的指针
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      // 遍历后此时current指针指向最后一个节点, 追加节点即可
      current.next = node;
    }
    this.size++;
  }

  // 遍历打印链表元素
  traverse() {
    const values: T[] = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join("->"));
  }

  // 插入元素
  insert(position: number, element: T) {
    // 越界问题
    if (position < 0 || position > this.size) return false;

    const newNode = new Node<T>(element);
    let current = this.head;
    // 如果插入位置是第一个
    if (position === 0) {
      this.head = newNode;
      newNode.next = current;
    } else {
      let curLength = 0; // 当前第几个元素

      let previous: Node<T> | null = null; // 前一个指针
      // 双指针遍历 找到对应的位置
      while (curLength < position && current) { 
        previous = current;
        current = current.next;
        curLength++;
      }
      // 插入节点
      previous!.next = newNode;
      newNode.next = current;
    }
    return true;
  }

  // 获取对应位置的元素
  get(position: number): T | null {
    if (position < 0 || position > this.size) return null;

      let index = 0;
      let cur = this.head;
      while(index++ < position && cur) {
        cur = cur?.next;
      }
      return cur?.value ?? null;

  }

  // 返回元素在链表中的索引。如果链表中没有该元素则返回-1
  indexOf(element: T): number {
    let index = 0;
    let cur = this.head; 
    while(cur?.value !== element && cur) {
      cur = cur?.next;
      index++;
    }
    return index > this.size ? -1 : index;
  }

  // 修改某个位置的元素
  update(position: number, element: T): boolean {
    if (position < 0 || position > this.size) return false;

    let index = 0;
    let cur = this.head;
    while(index++ < position && cur) {
      cur = cur?.next;
    }
    // 找到该元素赋值即可
    cur!.value = element;
    return true;
  }

  // 从链表的特定位置移除一项
  removeAt(position: number): T | null {
    // 越界问题
    if (position < 0 || position > this.size) return null;

    let current = this.head;
    // 如果删除位置是第一个
    if (position === 0) {
      this.head = current!.next;
    } else {
      let curLength = 0; // 当前第几个元素
      let previous: Node<T> | null = null; // 前一个指针
      // 双指针遍历 找到对应的位置
      while (curLength < position && current) { 
        previous = current;
        current = current.next;
        curLength++;
      }
      // 删除节点
      previous!.next = current!.next ?? null;
      // 长度-1
      this.size--;
    }
    return current!.value;
  }

  // 从链表中移除一项
  remove(element: T): T | null {
    let cur = this.head;
    if (element === this.head?.value) {
      this.head = cur!.next
    } else {
      let index = 0;

      let pre: Node<T> | null = null; // 前一个指针
  
      while(cur?.value !== element && cur) {
        pre = cur;
        cur = cur?.next;
        index++;
      }
      
      if (!cur) return null;  // 如果遍历完一遍还未找到则此时cur=null
      
      pre!.next = cur!.next
    }
    return cur!.value ?? null;

  }

  // 检查链表的长度
  isEmpty(): boolean {
    return this.size === 0
  }
}

const linkedList = new LinkedList();

linkedList.append("asd");
linkedList.append("123");
linkedList.append("gga");
linkedList.append("axvsd");
linkedList.insert(0, 567);
linkedList.traverse();
// console.log(linkedList.get(3));
console.log(linkedList.indexOf('123'));
// console.log(linkedList.update(6, 'niuchao'));
// console.log(linkedList.removeAt(5));
console.log(linkedList.remove(5675757));

linkedList.traverse();

export {};
