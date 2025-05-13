/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */
const mergeSortedArrays = (arr1, arr2) => {
  const results =[]
  // for (let i = 0; i < arr1.length; i++) {
  //   const num = arr1[i];
  //   results.push(num);
  // }
  // for (let i = 0; i < arr2.length; i++) {
  //   const num1 = arr2[i];
  //   results.push(num1)
  // }
  // for (let i = 0; i < results.length; i++) {
  //   const element = results[i];
  //   if (element[i+1]<= element[i+1]) {
  //     element1.push(element)
  //   }

  // }

  // return results
  let i = 0
  let j = 0
  const totalLength = arr1.length + arr2.length

  for (let k = 0; k < totalLength; k++) {
    if (i >= arr1.length) {
      results.push(arr2[j])
      j++
    } else if (j >= arr2.length) {
      results.push(arr1[i])
      i++
    } else if (arr1[i] < arr2[j]) {
      results.push(arr1[i])
      i++
    } else {
      results.push(arr2[j])
      j++
    }
  }

  return results
}

console.log(mergeSortedArrays([1, 2, 3], [4, 5, 6]))
console.log(mergeSortedArrays([1, 2, 3], [1, 2, 3]))
console.log(mergeSortedArrays([1, 4, 6], [2, 3, 7]))
console.log(mergeSortedArrays([], [2, 3, 7]))
console.log(mergeSortedArrays([1], [-9, 6])) 
