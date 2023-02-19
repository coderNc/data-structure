// 基于数组实现的队列结构
class ArrayQueue<T = any> {
  private data: T[] = [];

  // 入队
  enQueue(element: T) {
    this.data.push(element);
  }
  // 出队
  deQueue(): T | undefined {
    return this.data.shift();
  }
  // 返回队列前端元素，且不修改原队列
  peek(): T | undefined {
    return this.data?.[0];
  }

  // 检查是否为空队列，是为true，否为false
  isEmpty(): boolean {
    return this.data?.length === 0;
  }

  // 返回队列里的元素个数
  size(): number {
    return this.data?.length;
  }
  // 打印
  print(): any {
    return this.data;
  }
}

export default ArrayQueue;
