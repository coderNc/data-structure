import { testSortFunc } from "./utils"

function insertionSort(arr: number[]): number[] {
  const nums = [...arr]
  const n = nums.length
  for (let i = 1; i < n; i++) {
    const cur = nums[i]
    let j =  i - 1
    while(nums[j] > cur && j >= 0) {
      // 如果该元素小于前一个元素，那么前一个元素向后移动，并继续向前比较
      nums[j + 1] = nums[j]
      j--
    }
    // 如果该元素大于前一个元素，那么它将放到合适的位置
    nums[j + 1] = cur
  }

  return nums
}

testSortFunc(insertionSort)