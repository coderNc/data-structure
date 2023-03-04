class HashTable<T = any> {
  private Factor = { maxFactor: 0.75, minFactor: 0.25 }; // 因子
  private storage: [string, T][][] = [];
  private count: number = 0;
  private length: number = 0;

  private hashFunc(str: string, max: number) {
    // 1. 初始化hashCode
    let hashCode = 0;
    // 2. 霍纳算法，计算code的值
    for (let i = 0; i < str.length; i++) {
      hashCode = 31 * hashCode + str.charCodeAt(i);
    }

    // 3. 通过去摸计算索引值
    return hashCode % max;
  }
  // 修改容量
  private reSize(newLength: number) {
    // 获取数字最近的质数
    const newPrime = this.findNextPrime(newLength);
    // 1. 保存就数组中的内容
    const targetStorage = this.storage;
    // 2. 重置参数
    this.length = newPrime;
    this.storage = [];
    this.count = 0;
    // 3. 重新赋值
    targetStorage.forEach((bucket) => {
      if (!bucket) return;
      for (let i = 0; i < bucket.length; i++) {
        const tuple = bucket[i];
        this.put(tuple[0], tuple[1]);
      }
    });
  }

  // 找到下一个质数
  private findNextPrime(num: number): number {
    while (!this.isPrime(num)) {
      num++;
    }
    return num;
  }

  private isPrime(num: number): boolean {
    const sqrt = Math.sqrt(num);
    for (let i = 2; i <= sqrt; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  // 增改操作
  put(key: string, value: T) {
    // 1. 获取索引值
    const index = this.hashFunc(key, this.length);
    // 2. 去找对应索引值的桶
    let bucket = this.storage[index];
    // 3. 判断该桶是否存在
    if (!bucket) {
      // 如果桶不存在则创建新桶
      bucket = [];
      this.storage[index] = bucket;
    }
    // 4. 如果有桶则找对应的key
    let isUpdate = false;
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      // 如果找到key和目标key相等，则做覆盖操作
      if (tuple[0] === key) {
        tuple[1] = value;
        isUpdate = true;
        break;
      }
    }
    // 5. 遍历完还没有则直接push到桶里即可
    if (!isUpdate) {
      bucket.push([key, value]);
      this.count++;
      // 判断是否需要扩容
      const loadFactor = this.count / this.length;
      if (loadFactor > this.Factor.maxFactor) {
        this.reSize(this.length * 2);
      }
    }
  }

  // 查找操作
  get(key: string): T | null {
    // 1. 获取索引值
    const index = this.hashFunc(key, this.length);
    // 2. 找对应的桶
    const bucket = this.storage[index];
    // 3. 判断这个桶是否存在
    if (!bucket) return null;
    // 4. 如果桶存在
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      if (tuple[0] === key) {
        return tuple[1];
      }
    }
    // 5. 遍历完还未找到则返回空
    return null;
  }

  // 删除操作
  delete(key: string): T | null | undefined {
    // 1. 获取索引值
    const index = this.hashFunc(key, this.length);
    // 2. 找对应的桶
    const bucket = this.storage[index];
    // 3. 判断这个桶是否存在
    if (!bucket) return null;
    // 4. 如果桶存在
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      if (tuple[0] === key) {
        // 找到则删除对应的元组即可
        bucket.splice(i, 1);
        this.count--;
        // 判断是否需要缩容
        const loadFactor = this.count / this.length;
        if (loadFactor < this.Factor.minFactor && this.length > 7) {
          this.reSize(Math.floor(this.length / 2));
        }
        return tuple[1];
      }
    }
    return null;
  }
}

const hashTable = new HashTable();
hashTable.put("aaa", 123);
hashTable.put("bbb", 433);
console.log(hashTable.get("aaa"));
hashTable.put("aaa", 209);
console.log(hashTable.get("aaa"));
// console.log(hashTable.get("ccc"));
hashTable.delete("aaa");
console.log(hashTable.get("aaa"));
