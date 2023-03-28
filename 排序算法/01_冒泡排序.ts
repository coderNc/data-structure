import { testSortFunc } from "./utils";

function bubbleSort(arr: number[]): number[] {
  const nums = [...arr];
  const n = nums.length;
  //外层循环
  for (let i = 0; i < n; i++) {
    let swapped = false;
    // 内层循环，比较相邻两个元素，将较大值交换到右侧
    // n - 1: 两两交换只能到n - 1, 如果取到n的话，nums[j + 1] 将会越界
    // n - 1 - i: 每次循环都会将最后一个排好序的跳过
    for (let j = 0; j < n - 1 - i; j++) {
      // 如果nums[j] > nums[j + 1]就交换
      if (nums[j] > nums[j + 1]) {
        // 数组解构交换
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        swapped = true;
      }
    }
    // 检测到第一轮没有后发生过交换，代表已经是正确的排序了，直接推出循环即可
    if (!swapped) break
  }
  return nums;
}

testSortFunc(bubbleSort);
