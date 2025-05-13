// Задача: Product of Array Except Self
// (Произведение элементов массива кроме текущего)

// Дан массив целых чисел nums, верните массив, в котором каждый элемент i — это произведение всех элементов массива, кроме nums[i], без использования деления.

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Пояснение:
// [2×3×4, 1×3×4, 1×2×4, 1×2×3]

/**
 * @param {number[]} prices
 * @param {number[]}
 */

var maxProfit = function (prices) {
  let result = []
  // for (let i = 0; i < prices.length; i++) {
  //   let numsOne = 1
  //   for (let j = 0; j < prices.length; j++) {
  //     if (j !== i) {
  //       numsOne *= prices[j]
  //     }
  //   }
  //   result.push(numsOne)
  // }
  for (let i =0; i <prices.length; i++){
    let sum = 0
    if (prices[i]>i){
      
    }

  }
  return result
}

const prices = [ 1, 2, 3, 4]

console.log(maxProfit(prices))
