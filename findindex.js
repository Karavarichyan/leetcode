// function findTargetInfo(arr, target) {
//   function findBoundary(isFirst) {
//     let left = 0;
//     let right = arr.length - 1;
//     let result = -1;

//     while (left <= right) {
//       const mid = Math.floor((left + right) / 2);

//       if (arr[mid] === target) {
//         result = mid;
//         if (isFirst) {
//           right = mid - 1;
//         } else {
//           left = mid + 1;
//         }
//       } else if (arr[mid] < target) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }

//     return result;
//   }

//   const first = findBoundary(true);
//   const last = findBoundary(false);

//   if (first === -1 || last === -1) {
//     return { count: 0, indices: [] };
//   }

//   const count = last - first + 1;
//   const indices = Array.from({ length: count }, (_, i) => first + i);

//   return { count, indices };
// }


// function findTargetInfoFor(arr, target) {
//   let first = -1;
//   let last = -1;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       if (first === -1) {
//         first = i;
//       }
//       last = i;
//     } else if (arr[i] > target && last !== -1) {
//       break;
//     }
//   }

//   if (first === -1) {
//     return { count: 0, indices: [] };
//   }

//   const count = last - first + 1;
//   const indices = [];
//   for (let i = first; i <= last; i++) {
//     indices.push(i);
//   }

//   return { count, indices };
// }



function findDuplicatesSortedFor(arr, target) {
  let firstIndex = -1;
  let lastIndex = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      firstIndex = i;
      break;
    } else if (arr[i] > target) {
      break;
    }
  }

  if (firstIndex === -1) {
    return { count: 0, indices: [] };
  }

  for (let i = arr.length - 1; i >= firstIndex; i--) {
    if (arr[i] === target) {
      lastIndex = i;
      break;
    }
  }

  const count = lastIndex - firstIndex + 1;
  const indices = [];
  for (let i = firstIndex; i <= lastIndex; i++) {
    indices.push(i);
  }

  return { count, indices };
}
const arr = [1, 2, 2, 2, 2, 2, 2, 3, 4, 5, 6,6,6,6,6];
const target = 2;

console.log(findDuplicatesSortedFor(arr, target));
