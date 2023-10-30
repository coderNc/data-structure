class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const dummy = new ListNode(-1);
  let p = dummy;
  let p1 = list1;
  let p2 = list2;
  // 要注意有0的情况
  while (p1 !== null && p2 !== null) {
    if (p1.val <= p2.val) {
      p.next = p1;
      p1 = p1.next;
    } else {
      p.next = p2;
      p2 = p2.next;
    }
    // p指针不断前进
    p = p.next;
  }
  // 最后将剩余的复制给p
  if (p1 !== null) {
    p.next = p1;
  }
  if (p2 !== null) {
    p.next = p2;
  }
  return dummy.next;
}
