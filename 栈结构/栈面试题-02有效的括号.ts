import ArrayStack from "./02_数组实现栈结构Stack(重构)";

// 有效的括号
// leetcode 20: https://leetcode.cn/problems/valid-parentheses/description/
function isValid(str: string) {
  const stack = new ArrayStack<string>();
  const strArr = str?.split("");
  let result = true;
  for (let i = 0; i < strArr.length; i++) {
    // 1. 只要匹配([{ 三个字符， 则入栈匹配的字符)]}
    switch (strArr[i]) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        // 如果当前字符 )]} 不和栈顶字符匹配，则不通过
        if (strArr[i] !== stack.pop()) return false;
        break;
    }
  }
  // 入栈的每一个括号都能一一对应的消除掉，所以栈为空才会匹配通过
  return stack.isEmpty();
  // console.log(strArr);
}

console.log(isValid("(("));

