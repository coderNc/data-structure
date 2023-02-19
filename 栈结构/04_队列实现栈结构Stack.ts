import IStack from "./IStack";

// 基于数组实现的栈结构
// 基于接口实现的栈
class ArrayStack<T = any> implements IStack<T> {
  private data: T[] = [];
  constructor() {}

  // 入栈
  push(element: T) {
    this.data.push(element);
  }
  // 出栈
  pop(): T | undefined {
    return this.data.pop();
  }
  // 返回栈顶元素，且不修改原栈
  peek(): T | undefined {
    return this.data?.[this.data?.length - 1];
  }

  // 检查是否为空栈，是为true，否为false
  isEmpty(): boolean {
    return this.data?.length === 0;
  }

  // 返回栈里的元素个数
  size(): number {
    return this.data?.length;
  }
}

const stack = new ArrayStack<string>();

stack.push("aaa");
stack.push("BBB");
stack.push("CCC");
stack.push("DDD");
stack.push("AAA");

console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());

export {};
