/**
 * 快速排序
 * 描述： 从数列中挑出一个元素，称为 "基准"， 然后将所有元素比基准值小的摆放在基准左区，大的放右区，然后再递归的将左区和右区进行同样的操作
 * 
 * 
 */

// 常规数组分区解法：
// function quickSort(arr) {
//   // 设置一个递归结束条件：只剩下一个元素 ，递归结束
//   console.log('进行分区的数组：', arr)
//   if (arr.length <= 1) return arr
//   // 1.取一个基准 pivot
//   var pivot = arr.splice(Math.floor(arr.length / 2), 1)[0]
//   console.log('基准：', pivot)
//   // 2.设置左右区间，用于存放排序后的数
//   var left = [],
//     right = []
//   // 3.开始以基准进行分区
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i])
//     } else {
//       right.push(arr[i])
//     }
//   }
//   console.log('左区：', left, '右区：', right)
//   // 4.所有都分区后，再分别对左右分区进行递归操作
//   return quickSort(left).concat(pivot, quickSort(right))
// }

// 原地交换解法：
// left, right 为边界，定义数组 arr 的区间来进行递归
function quickSort(arr, leftIndex, rightIndex) {
  // debugger
  // 条件是：左边界必须小于右边界
  if (leftIndex < rightIndex) { // 递归结束条件
    // 找出一个基准
    var pivot = arr[rightIndex],
      // 左区的最后一位（左区范围：[0, leftEndIndex]）及下标值
      leftEndIndex = leftIndex - 1 // 注意：这是出口的关键，当区间内都不需要交换时，就可以直接跳出递归
    // 从 区间内的数据进行左右分区
    for (var j = leftIndex; j <= rightIndex; j++) {
      if (arr[j] <= pivot) {
        // 每次遇到小值就后移一位，遇到大值则不后移，
        // 即下次交换时，此时 leftEndIndex 指向着第一个大值，等待下一个小值与这个大值进行交换，保证 leftEndIndex 后的都是大值
        leftEndIndex++
        // 交换：保证左边的是小值，右边为大值
        if (arr[j] !== arr[leftEndIndex]) {
          console.log('交换：', arr[j], arr[leftEndIndex])
          var temp = arr[j]
          arr[j] = arr[leftEndIndex]
          arr[leftEndIndex] = temp
        }
      }
    }
    console.log(arr);
    // 当前分区所有交换完后，进行分别对左区和右区进行下一轮递归的分区操作
    console.log('左区：', leftIndex, leftEndIndex - 1);
    console.log('右区：', leftEndIndex + 1, rightIndex);
    quickSort(arr, leftIndex, leftEndIndex - 1)
    quickSort(arr, leftEndIndex + 1, rightIndex)
  }
  return arr
}

var a = [6, 9, 11, 3, 12, 10, 5, 7, 29, 8]

console.log('结果为：', quickSort(a, 0, a.length - 1));