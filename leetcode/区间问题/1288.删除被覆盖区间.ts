import { IRecord } from "../../type";
// 给你一个区间列表，请你删除列表中被其他区间所覆盖的区间。

// 只有当 c <= a 且 b <= d 时，我们才认为区间 [a,b) 被区间 [c,d) 覆盖。

// 在完成所有删除操作后，请你返回列表中剩余区间的数目。

// 输入：intervals = [[1,4],[3,6],[2,8]]
// 输出：2
// 解释：区间 [3,6] 被区间 [2,8] 覆盖，所以它被删除了。

function removeCoveredIntervals(intervals: number[][]): number {
  const recordIntervals = intervals.map(
    (item) => new IRecord([item[0], item[1]])
  );
  // 1. 按照起点升序排列，起点相同时降序排列
  recordIntervals.sort((a, b) => {
    if (a.start === b.start) {
      return b.end - a.end;
    }
    return a.start - b.start;
  });
  let deleteCount = 0;
  let currentArr = recordIntervals[0];
  for (let i = 1; i < recordIntervals.length; i++) {
    // 如果当前区间的start <= 被比较区间的end
    if (recordIntervals[i].start <= currentArr.end) {
      // 如果当前区间的end > 被比较区间的end
      if (recordIntervals[i].end > currentArr.end) {
        // 将当前区间的end赋值给被比较区间的end
        currentArr.end = recordIntervals[i].end;
      } else {
        // 如果小于就是覆盖区间
        deleteCount++;
      }
    } else {
      // 如果当前区间的start > 被比较区间的end 说明两段区间没有交集
      // 将当前区间赋值给被比较区间来开启下一轮循环
      currentArr = recordIntervals[i];
    }
  }
  return intervals.length - deleteCount;
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
  removeCoveredIntervals([
    [1, 4],
    [3, 6],
    [2, 8],
  ])
);
