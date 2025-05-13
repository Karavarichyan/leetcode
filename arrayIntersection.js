/**
 * @param {unknown[]} arr1
 * @param {unknown[]} arr2
 * @returns {unknown[]}
 */
// const arrayIntersection = (arr1, arr2) => {
//   const newArr = []
//   for (let index = 0; index < arr1.length; index++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[index] == arr2[j]) {
//         newArr.push(arr1[index])
//       }
//     }
//   }
//   return newArr
// }

// const arrayIntersection = (arr1, arr2) => {
//   const set2 = new Set(arr2)
//   return arr1.filter(item => set2.has(item))
// }
const arrayIntersection = (arr1, arr2) => {
  const set2 = new Set(arr2)
  const result = []

  for (let i = 0; i < arr1.length; i++) {
    if (set2.has(arr1[i])) {
      result.push(arr1[i])
    }
  }

  return result
}
console.log(arrayIntersection([1, 2, 3], [3, 4, 5]))
console.log(arrayIntersection(['test', 1, 'fake'], ['fake', 'test', 1]))
console.log(arrayIntersection([1, 2, 3], ['fake', 'text']))
