import { swap, testSortFunc } from "./utils"

function quickSort(num: number[]): number[] {
  const arr = [...num]


  // 最初的一次调用将整个数组看成一段
  partition(0, arr.length - 1)
  function partition(left: number, right: number) {
    // 结束条件：当两个索引之相等时结束
    if (left >= right) return
    // 找到基准值:总是数组最右边的元素
    let pivot = arr[right]
    // 定义双指针
    let i = left
    let j = right - 1
    while(i <= j) {
      // 找到一个元素比基准值大
      while(arr[i] < pivot) {
        i++
      }
      // 找到一个元素比基准值小
      while(arr[j] > pivot) {
        j--
      }
      // 此时已经找到符合的两个元素，如果i<=j  交换即可，
      if(i <= j) {
        swap(arr,i,j)
        i++
        j--
      }
    }

    // 交换基准值
    swap(arr, i, right)
    // 递归继续分割左边和右边的数组
    partition(left, j)
    partition(i + 1, right)
  }


  return arr
}

testSortFunc(quickSort)