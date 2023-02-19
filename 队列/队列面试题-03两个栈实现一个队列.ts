class Stack {
  data: any[] = [];

  push(ele: any) {
    this.data.push(ele);
  }

  pop() {
    return this.data.pop();
  }

  size() {
    return this.data.length;
  }
}

class CQueue {
  enQueueStack = new Stack();
  deQueueStack = new Stack();
  constructor() {}

  appendTail(value: number): void {
    // 入队栈
    this.enQueueStack.push(value);
  }

  deleteHead(): number {
    // 出队栈
    if (this.deQueueStack.size()) {
      // 如果出队栈中有数据，则直接出栈
      return this.deQueueStack.pop();
    } else {
      // 对入队栈进行遍历出栈，然后出队栈入栈
      while (this.enQueueStack.size()) {
        this.deQueueStack.push(this.enQueueStack.pop());
      }
      return this.deQueueStack.pop() || -1;
    }
  }
}