import { ManyTreeNode } from "../type";

const traverseDFS = (root: ManyTreeNode | null) => {
  if (root === null) {
    return;
  }
  // 前序遍历
  console.log(root.value);
  for (let i = 0; i < root?.children?.length; i++) {
    traverseDFS(root?.children[i]);
  }
  // 后序遍历
  console.log(root.value);
};

// 层序遍历一： 无法记录节点深度
const levelOrderTraverseBFS1 = (root: ManyTreeNode) => {
  if (root === null) {
    return null;
  }
  const queue: ManyTreeNode[] = [root];
  while (queue.length !== 0) {
    const node = queue.shift();
    if (node) {
      console.log(node?.value);
      for (const children of node.children) {
        queue.push(children);
      }
    }
  }
};

// 层序遍历二： 记录节点深度
const levelOrderTraverseBFS2 = (root: ManyTreeNode) => {
  if (root === null) {
    return null;
  }
  const queue: ManyTreeNode[] = [root];
  let depth = 1;
  while (queue.length !== 0) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      if (node) {
        console.log(node?.value);
        for (const children of node.children) {
          queue.push(children);
        }
      }
    }
    depth++;
  }
};
