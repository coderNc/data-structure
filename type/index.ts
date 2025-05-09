export class IRecord {
  start: number;
  end: number;
  constructor(value: [number, number]) {
    this.start = value[0];
    this.end = value[1];
  }
}

export class TreeNode<T = any> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}
export class ManyTreeNode<T = any> {
  value: T;
  children: ManyTreeNode<T> [] = [];
  constructor(value: T) {
    this.value = value;
  }
}
export class ListNode<T = any> {
  value: T;
  next: ListNode<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}

export class DoubleListNode<T = any> {
  value: T;
  next: DoubleListNode<T> | null = null;
  prev: DoubleListNode<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}
