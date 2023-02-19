
// Node节点类
class Node<T> {
  value: T
  next: Node<T> | null
  constructor(val: T) {
    this.value = val;
    this.next = null;
  }
}


class LinkedList<T> {
  private head: Node<T> | null = null;
  private size: number = 0;

  get length() {
    return this.size;
  }

}



export {}