// const numbers = [3, 4, 5, 6, -5, 7, 5, 3, 5, 8, -5, -11, 12, 23,1, 32];
// const sum = 10;

// const findIndex = (nums, target) => {
//   for (let index = 0; index < nums.length; index++) {
//     const element = nums[index];
//     for (let j = index + 1; j < nums.length; j++) {
//       const elementSec = nums[j];
//       if (element + elementSec === target) {
//         return [element, elementSec];
//       }
//     }
//   }
//   return [];
// };

// console.log(findIndex(numbers, sum));

const numbers = [3, 4, 5, 6, -5, 7, 5, 3, 5, 8, -5, -11,-1, 12, 23,21, 32];
const sum = 10;

const findAllPairs = (nums, target) => {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push([nums[i], nums[j]]);
      }
    }
  }
  return result;
};

console.log(findAllPairs(numbers, sum));
