// function GetAverage(mark) {
//   return Math.floor(mark.reduce((acc, cur) => acc + cur, 0) / mark.length);
// }
// console.log(GetAverage([80, 90, 100]));
// console.log(GetAverage([50, 75]));
// console.log(GetAverage([]));
function GetAverage(mark) {
  const acc = 0;
  mark.forEach(element => {
    acc +=element;
    return acc/mark.length
  });
}
console.log(GetAverage([80, 90, 100]));
console.log(GetAverage([50, 75]));
console.log(GetAverage([]));
