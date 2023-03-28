import { testSortFunc } from "./utils";

function mergeSort(arr: number[]): number[] {
  // 当分解到最小单位时停止递归
  if (arr.length === 1) return arr;

  // 1. 分解
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  // 1.2递归切割左右数组得到数组
  const newLeftArr = mergeSort(leftArr);
  const newRightArr = mergeSort(rightArr);

  // 2. 合并
  // 2.1 定义左右双指针
  let i = 0,
    j = 0;
  const result: number[] = [];
  // 当左右指针都小于各自的长度时
  while (i < newLeftArr.length && j < newRightArr.length) {
    if (newLeftArr[i] <= newRightArr[j]) {
      result.push(newLeftArr[i]);
      i++;
    } else {
      result.push(newRightArr[j]);
      j++;
    }
  }

  // 2.2 考虑到左边或者右边循环完还有剩余，直接加入到数组中
  // 左边还有剩余
  if (i < newLeftArr.length) {
    result.push(...newLeftArr.slice(i));
  }
  // 右边还有剩余
  if (j < newRightArr.length) {
    result.push(...newRightArr.slice(j));
  }

  return result;
}


testSortFunc(mergeSort)