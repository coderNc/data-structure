import ArrayStack from "./02_数组实现栈结构Stack(重构)";

// 1. 十进制转二进制
function decToBin(num: number) {
  const stack = new ArrayStack<number>();
  let nextNum = num;
  // 整除到大于0是循环结束
  while (nextNum > 0) {
    const res = nextNum % 2;
    stack.push(res);
    nextNum = Math.floor(nextNum / 2);
  }
  // console.log(stack.print());
  let result: string = "";

  // 拼接字符串，如果栈有长度就继续拼接
  while (stack.size()) {
    result = result + stack.pop();
  }
  return result;
}
console.log(decToBin(35));


