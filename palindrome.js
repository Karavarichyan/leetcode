// Условие: 1
// Дана строка s, определить, является ли она палиндромом, игнорируя все небуквенно-цифровые символы и регистр.

// Палиндром — это строка, которая читается одинаково слева направо и справа налево.
// Вход: s = "A man, a plan, a canal: Panama"
// Выход: true
// Пояснение: После очистки — "amanaplanacanalpanama", это палиндром.
// Вход: s = "race a car"
// Выход: false
// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isPalindrome = function (s) {
//   for (let i = 0; i < Math.floor(s.length / 2); i++) {
//     const charA = s[i]
//     const charB = s[s.length - 1 - i]
//     const compare = charA.localeCompare(charB, undefined, {
//       sensitivity: 'accent',
//     })

//     if (compare !== 0) {
//       return true
//     }
//   }
//   return false
// }
// console.log(isPalindrome('-A man, a plan, a canal: Panama+'))
// console.log(isPalindrome('race a car'))
// console.log(isPalindrome('Madam'))
// console.log(isPalindrome('asddsdsddrfrffghjkl;;lkjhgfdsssdssdsdsa'))


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    const charA = s[i]
    const charB = s[s.length - 1 - i]
    const compare = charA.localeCompare(charB, undefined, {
      sensitivity: 'a',
    })

    if (compare !== 0) {
      return true
    }
  }
  return false
}
console.log(isPalindrome('-A man, a plan, a canal: Panama+'))
console.log(isPalindrome('race a car'))
console.log(isPalindrome('Madam'))
console.log(isPalindrome('asddsdsddrfrffghjkl;;lkjhgfdsssdssdsdsa'))
