export class IRecord {
  start: number;
  end: number;
  constructor(value: [number, number]) {
    this.start = value[0];
    this.end = value[1];
  }
}

export class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}
export class ListNode<T> {
  value: T;
  next: ListNode<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}
