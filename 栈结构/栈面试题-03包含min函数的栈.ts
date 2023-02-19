class MinStack {
  stack: number[] = []
  x_Stack: number[] = []
  constructor() {

  }

  push(x: number): void {
      this.stack.push(x);
      console.log(this.x_Stack.length);
      let min: any = null;
      // 获取最小值  辅助栈的栈顶元素和x进行比较，
      if (this.x_Stack.length) {
        min = Math.min(this.x_Stack?.[this.x_Stack.length - 1], x);
      } else {
        min = x
      }
      this.x_Stack.push(min);
  }

  pop(): void {
      this.stack.pop();
      this.x_Stack.pop();
  }

  top(): number {
      return this.stack[this.stack.length - 1]
  }

  min(): number {
      return  this.x_Stack[this.x_Stack.length - 1]
  }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.min()); //   --> 返回 -3.
minStack.pop();
console.log(minStack.top()); //     --> 返回 0.
console.log(minStack.min());   //  --> 返回 -2.
