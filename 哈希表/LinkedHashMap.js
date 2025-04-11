class ListNode {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class MyLinkedHashMap {
  constructor(){
    this.head = new ListNode(null, null)
    this.tail = new ListNode(null, null)
    this.head.next = this.tail
    this.tail.prev = this.head
    this.map = new Map()
  }

  get(key) {
    if (!this.map.has(key)) {
      return
    }
    return this.map.get(key)
  }

  put(key, val) {
    if (!this.map.has(key)) {
      const newNode = new ListNode(key, val)
      newNode.prev = this.tail.prev
      newNode.next = this.tail
      this.tail.prev.next = newNode
      this.tail.prev = newNode
      this.map.set(key, newNode)
      return
    }
    this.map.get(key).val = val
  }

  remove(key) {
    if (!this.map.has(key)) {
      return
    }
    const node = this.map.get(key)
    node.next.prev = node.prev
    node.prev.next = node.next
    node.prev = null
    node.next = null
    this.map.delete(key)
  }

  keys() {
    const list = []
    let p = this.head.next
    while(p !== this.tail) {
      list.push(p.key)
      p = p.next
    }
    return list
  }
}
const map = new MyLinkedHashMap();
map.put("a", 1);
map.put("b", 2);
map.put("c", 3);
map.put("d", 4);
map.put("e", 5);

console.log(map.keys()); // ['a', 'b', 'c', 'd', 'e']

map.remove("c");

console.log(map.keys()); // ['a', 'b', 'd', 'e']