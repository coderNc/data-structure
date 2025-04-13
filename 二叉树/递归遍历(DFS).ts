import { TreeNode } from "../type";

// 前序位置的代码会在进入节点时立即执行；中序位置的代码会在左子树遍历完成后，遍历右子树之前执行；后序位置的代码会在左右子树遍历完成后执行
const traverse = (root: TreeNode | null | undefined) => {
  if(root?.value === null) {
    return
  }
  // 前序遍历
  traverse(root?.left)
  // 中序遍历
  traverse(root?.right)
  // 后续遍历
}