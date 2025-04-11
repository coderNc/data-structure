class ArrayHashMapNode {
  constructor(key, val) {
    this.key = key;
    this.val = val;
  }
}

class MyArrayHashMap {
  constructor() {
    this.map = new Map();
    this.arr = [];
  }

  get(key) {
    if (!this.map.has(key)) {
      return;
    }
    const index = this.map.get(key);
    return this.arr[index].val;
  }

  put(key, value) {
    if (this.map.has(key)) {
      this.arr[this.map.get(key)].value = value;
      return;
    }
    this.arr.push(new ArrayHashMapNode(key, value));
    this.map.set(key, this.arr.length - 1);
  }

  remove(key) {
    if (!this.map.has(key)) {
      return;
    }
    const index = this.map.get(key);
    const node = this.arr[index];
    const lastNode = this.arr[this.arr.length - 1];
    // 互换位置
    this.arr[index] = lastNode;
    this.arr[this.arr.length - 1] = node;
    // 保存新 key对应的索引
    this.map.set(lastNode.key, index);
    // 删除
    this.arr.pop();
    this.map.delete(key);
  }

  // 随机弹出一个键
  randomKey() {
    let n = this.arr.length;
    let randomIndex = Math.floor(Math.random() * n);
    return this.arr[randomIndex].key;
  }
}

let arrayMap = new MyArrayHashMap();
arrayMap.put(1, 1);
arrayMap.put(2, 2);
arrayMap.put(3, 3);
arrayMap.put(4, 4);
arrayMap.put(5, 5);

console.log(arrayMap.get(1)); // 1
console.log(arrayMap.randomKey());

arrayMap.remove(4);
console.log(arrayMap.randomKey());
console.log(arrayMap.randomKey());