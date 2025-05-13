// function findSmall(args) {
//   return Math.min(...args);
// }

// console.log(findSmall([5, 3, 8, 1, 4]));
// console.log(findSmall([-2, 0, 100, -50]));
// console.log(findSmall([42]));
// console.log(findSmall([]));




function findSmall(args) {
  let min = args[0];
  for (let i = 1; i < args.length; i++) {
    if (args[i] < min) {
      min = args[i];
    }
  }
  return min;
}

console.log(findSmall([5, 3, 8, 1, 4]));
console.log(findSmall([-2, 0, 100, -50]));
console.log(findSmall([42]));
console.log(findSmall([]));
