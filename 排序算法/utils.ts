type SortFunc = (arr: number[]) => number[];
export const testSortFunc = (func: SortFunc) => {
  const arr = Array(10)
    .fill(0)
    .map((i) => Math.floor(Math.random() * 200));
  const newArr = func(arr);
  console.log("排序前数组：", arr);
  console.log("排序后数组：", newArr);
  console.log("是否排序有效", isSort(newArr));
};

export const isSort = (arr: number[]): boolean => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
};

export function swap<T>(arr: T[], left: number, right: number) {
  [arr[right], arr[left]] = [arr[left], arr[right]];
}
