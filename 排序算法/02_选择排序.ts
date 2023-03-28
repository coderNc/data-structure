import { testSortFunc } from "./utils";

function selectionSort(arr: number[]): number[] {
  const nums = [...arr];
  const n = nums.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      // 找到剩下元素中的最小值
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    // 一轮循环完得到最小下标值，交换当前元素和最小下标值元素
    [nums[minIndex], nums[i]] = [nums[i], nums[minIndex]];
  }

  return nums
}

testSortFunc(selectionSort)