class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}


// 非递归实现
function reverseList(head: ListNode | null): ListNode | null {
    // 如果链表为空或者链表只有一个节点则直接返回head
  if (head === null || head.next === null) return head;
  let newHead: ListNode | null = null;
  let cur: ListNode | null = head;
  while (head) {
    // 1.让current节点指向下一个节点
    // 目的:保留着下一个节点的引用,可以拿到，并且不会销毁
    cur = cur?.next ?? null;
    // 2.改变head当前指向的节点指向newHead
    // · 对于第一个节点来说指向newHead就是指向的null
    head.next = newHead;
    // 3.让newHead指向head节点
    // · 目的是下一次遍历时,第二步操作,可以让下一个节点指向第一个节点
    newHead = head;
    // 4.让head移向下一个节点 指向current
    head = cur;
  }
  return newHead;
}


// 递归实现
function recursionReverseList(head: ListNode | null): ListNode | null {
    // 如果链表为空或者链表只有一个节点则直接返回head
  if (head === null || head.next === null) return head;
  const newHead = recursionReverseList(head?.next ?? null);
  head.next.next = head;
  head.next = null;
  return newHead;
}



// function traverse(head: ListNode | null) {
//   const values: any[] = [];
//   let current = head;
//   while (current) {
//     values.push(current.val);
//     current = current.next;
//   }
//   console.log(values.join("->"));
// }


const node1 = new ListNode(1)
// const node2 = new ListNode(2)
// const node3 = new ListNode(3)

// node1.next = node2;
// node2.next = node3;

reverseList(node1);
