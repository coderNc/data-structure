
// 基于数组实现的栈结构
class ArrayStack {
  private data: any[] = []
  constructor() {

  }

  // 入栈
  push(element: any) {
    this.data.push(element);
  }
  // 出栈
  pop() {
    return this.data.pop();
  }
  // 返回栈顶元素，且不修改原栈
  peek() {
    return this.data?.[this.data?.length - 1];
  }

  // 检查是否为空栈，是为true，否为false
  isEmpty() {
    return this.data?.length === 0;
  }


  // 返回栈里的元素个数
  size() {
    return this.data?.length;
  }
}

// const stack = new ArrayStack();

// stack.push('aaa');
// stack.push('BBB');
// stack.push('CCC');
// stack.push('DDD');
// stack.push('AAA');

// console.log(stack.pop());
// console.log(stack.peek());
// console.log(stack.isEmpty());
// console.log(stack.size());


export {}