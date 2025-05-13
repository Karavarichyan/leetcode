//1

// const fruits = ['mango', 'apple', 'kiwi', 'apple', 'kiwi'];

// const fruitsCount = (list) => {
//   const x = {};
//   list.forEach(element => {
//     if (!x[element]) {
//       x[element] = 1;
//     } else {
//       x[element]++;
//     }
//   });
//   return x;
// };

// console.log(fruitsCount(fruits));

//2

const fruits = ['mango', 'apple', 'kiwi', 'apple', 'kiwi'];
const uniqueItems =(list) =>{
  const unique ={}
list.forEach(element => {
  unique[element]= true
});
return Object.keys(unique)
}
console.log(uniqueItems(fruits));

//3
