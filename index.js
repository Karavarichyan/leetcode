// Условие: 1
// Дана строка s, определить, является ли она палиндромом, игнорируя все небуквенно-цифровые символы и регистр.

// Палиндром — это строка, которая читается одинаково слева направо и справа налево.
// Вход: s = "A man, a plan, a canal: Panama"
// Выход: true
// Пояснение: После очистки — "amanaplanacanalpanama", это палиндром.
// Вход: s = "race a car"
// Выход: false
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const x = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  const y = x.split('').reverse().join('');
  return x === y;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome("Madam"));

// 2

// Дан целочисленный n. Верни массив строк длины n, где:

// Если число делится на 3 — вместо него запиши "Fizz".

// Если число делится на 5 — запиши "Buzz".

// Если делится и на 3, и на 5 — запиши "FizzBuzz".

// В противном случае — просто само число (в виде строки).

// /**
//  * @param {number} n
//  * @return {string[]}
//  */
// var fizzBuzz = function(n) {
//   const x = [];
//   for (let i = 1; i <= n; i++) {
//       if (i % 3 === 0 && i % 5 === 0) {
//           x.push("FizzBuzz");
//       } else if (i % 3 === 0) {
//           x.push("Fizz");
//       } else if (i % 5 === 0) {
//           x.push("Buzz");
//       } else {
//           x.push(i.toString());
//       }
//   }

//   return x;
// };
// console.log(fizzBuzz(15));
