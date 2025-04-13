// 111. 二叉树的最小深度

import { TreeNode } from "../type";

const minDepthBFS = (root: TreeNode) => {
  if (root === null) return 0;
  const queue = [root];
  let depth = 1;
  while (queue.length > 0) {
    let length = queue.length;
    for (let index = 0; index < length; index++) {
      const node = queue.shift();
      // 如果有叶子节点直接 return
      if (node?.left === null && node?.right === null) {
        return depth;
      }
      if (node?.left) {
        queue.push(node.left);
      }
      if (node?.right) {
        queue.push(node.right);
      }
    }
    depth++;
  }
  return depth;
};

const minDepthDFS = (root: TreeNode) => {
  if (root === null) return 0;
  // 最小值先取无穷大
  let minDepthValue = Infinity;
  let curDepthValue = 0;
  const traverse = (root: TreeNode | null) => {
    if (root === null) return
    curDepthValue++;
    if (root?.left === null && root?.right === null) {
      minDepthValue = Math.min(minDepthValue, curDepthValue);
    }
    traverse(root?.left);
    traverse(root?.right);
    curDepthValue--;
  };
  traverse(root);
  return minDepthValue;
};
