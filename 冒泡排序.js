// 冒泡排序，从第一位数开始，依次比较两个元素，将较大的数交换放在右边。直到最后一位数
function bubbleSort(arr) {
  console.time('计时结束')
  var len = arr.length
  for (var i = 0; i < len; i++) { // 每个数都循环一次
    for (var j = 0; j < len - 1 - i; j++) {
      console.log(j, len - i, arr[j], arr[j + 1]) // 因为 arr[j+1] 会越界, 所以需要为 len - 1
      if (arr[j] > arr[j + 1]) { // 依次比较相邻的两个数值
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  console.timeEnd('计时结束')
  return arr
}