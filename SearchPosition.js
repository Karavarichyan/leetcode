// Дано отсортированное множество различных целых чисел и целевое значение, вернуть индекс, если цель найдена. Если нет, вернуть индекс, где бы он был, если бы он был вставлен по порядку.

// Вам необходимо написать алгоритм, обладающий  O(log n)сложностью во время выполнения.

// Пример 1:

// Ввод: числа = [1,3,5,6], цель = 5
//  Вывод: 2
// Пример 2:

// Ввод: числа = [1,3,5,6], цель = 2
//  Вывод: 1
// Пример 3:

// Ввод: числа = [1,3,5,6], цель = 7
//  Вывод: 4

// Ограничения:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// numsсодержит различные значения, отсортированные в порядке возрастания .
// -104 <= target <= 104

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const binarySearch = (low, high) => {
    if (low > high) return low
    const mid = Math.floor((low + high) / 2)

    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      return binarySearch(mid + 1, high)
    } else {
      return binarySearch(low, mid - 1)
    }
  }

  return binarySearch(0, nums.length - 1)
}
