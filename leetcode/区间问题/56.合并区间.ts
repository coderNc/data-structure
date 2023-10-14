// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
// 示例 1：

import { IRecord } from "../../type";

// 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出：[[1,6],[8,10],[15,18]]
// 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
// 示例 2：

// 输入：intervals = [[1,4],[4,5]]
// 输出：[[1,5]]
// 解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。

// 提示：

// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104

function merge(intervals: number[][]): number[][] {
  // 1. 按start排序
  intervals.sort((a, b) => a[0] - b[0]);
  const result: number[][] = [];
  let currentArr = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= currentArr[1]) {
      if (intervals[i][1] > currentArr[1]) {
        currentArr[1] = intervals[i][1];
      } else {
        continue;
      }
    } else {
      result.push(currentArr);
      currentArr = intervals[i];
    }
  }
  // 最后一步需要把currentArr（最后一个元素）添加进来
  result.push(currentArr);
  return result;
}


function merge1(intervals: number[][]): number[][] {
  const recordIntervals = intervals.map(item => new IRecord([item[0], item[1]]))
  // 1. 按start排序
  recordIntervals.sort((a, b) => a.start - b.start);
  const result: number[][] = [];
  let currentArr = recordIntervals[0];
  for (let i = 1; i < recordIntervals.length; i++) {
    // 如果当前区间的start <= 被比较区间的end
    if (recordIntervals[i].start <= currentArr.end) {
      // 如果当前区间的end > 被比较区间的end
      if (recordIntervals[i].end > currentArr.end) {
        // 将当前区间的end赋值给被比较区间的end
        currentArr.end = recordIntervals[i].end;
      } else {
        // 如果小于则直接continue
        continue;
      }
    } else {
      // 如果当前区间的start > 被比较区间的end 说明两段区间没有交集
      // 将被比较区间push到结果数组中
      result.push([currentArr.start, currentArr.end]);
      // 将当前区间赋值给被比较区间来开启下一轮循环
      currentArr = recordIntervals[i];
    }
  }
  // 最后一步需要把currentArr（最后一个元素）添加进来
  result.push([currentArr.start, currentArr.end]);
  return result;
}

// console.log(
//   merge([
//     [1, 3],
//     [2, 6],
//     [8, 10],
//     [15, 18],
//   ])
// );
console.log(
  merge1([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
