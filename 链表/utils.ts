import { DoubleListNode } from "../type";

/**
 * 创建一个双向链表，并返回链表的头节点。
 * 
 * @param arr - 一个包含数字的数组，数组中的每个元素将作为链表节点的值。
 * @returns 返回链表的头节点。如果数组为空或未提供，则返回 null。
 */
export const createDoublyLinkedList = (arr: number[]) => {
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