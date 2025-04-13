import { TreeNode } from "../type";
class State {
  node: TreeNode;
  depth: number
  constructor(node: TreeNode, depth: number) {
    this.node = node;
    this.depth = depth;
  }
}

// 这种写法最大的优势就是简单。每次把队头元素拿出来，然后把它的左右子节点加入队列，就完事了。
// 但是这种写法的缺点是，无法知道当前节点在第几层。知道节点的层数是个常见的需求，比方说让你收集每一层的节点，或者计算二叉树的最小深度等等。
const levelOrderTraverse1 = (root: TreeNode) => {
  if (root.value === null) {
    return null;
  }
  const queue: TreeNode[] = [];
  queue.push(root);
  while (queue.length !== 0) {
    const node = queue.shift();
    console.log(node?.value);
    if (node?.left) {
      queue.push(node.left);
    }
    if (node?.right) {
      queue.push(node.right);
    }
  }
};
// 最常用
const levelOrderTraverse2 = (root: TreeNode) => {
  if (root.value === null) {
    return null;
  }
  const queue: TreeNode[] = [];
  let depth = 1;
  queue.push(root);
  while (queue.length !== 0) {
    let length = queue.length;
    for (let index = 0; index < length; index++) {
      const node = queue.shift();
      // 访问 cur 节点，同时知道它所在的层数
      console.log("depth = " + depth + ", val = " + node?.value);
      if (node?.left) {
        queue.push(node.left);
      }
      if (node?.right) {
        queue.push(node.right);
      }
    }
    depth++;
  }
};

// 回顾写法二，我们每向下遍历一层，就给 depth 加 1，可以理解为每条树枝的权重是 1，二叉树中每个节点的深度，其实就是从根节点到这个节点的路径权重和，且同一层的所有节点，路径权重和都是相同的。
// 那么假设，如果每条树枝的权重和可以是任意值，现在让你层序遍历整棵树，打印每个节点的路径权重和，你会怎么做？
// 这样的话，同一层节点的路径权重和就不一定相同了，写法二这样只维护一个 depth 变量就无法满足需求了。
// 写法三就是为了解决这个问题，在写法一的基础上添加一个 State 类，让每个节点自己负责维护自己的路径权重和，代码如下
const levelOrderTraverse3 = (root: TreeNode) => {
  if (root.value === null) {
    return null;
  }
  const queue: State[] = [];
  queue.push(new State(root, 1));
  while (queue.length !== 0) {
    const state = queue.shift();
    console.log(state?.node?.value);
    if (state?.node?.left) {
      queue.push(new State(state.node.left, state.depth + 1));
    }
    if (state?.node?.right) {
      queue.push(new State(state.node.right, state.depth + 1));
    }
  }
};