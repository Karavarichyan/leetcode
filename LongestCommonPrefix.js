// Напишите функцию для поиска самой длинной общей строки префикса среди массива строк.

// Если общего префикса нет, вернуть пустую строку "".



// Пример 1:

// Ввод: strs = ["цветок","поток","полет"]
//  Вывод: "fl"
// Пример 2:

// Ввод: strs = ["dog","racecar","car"]
//  Вывод: ""
//  Пояснение: Среди входных строк нет общего префикса.


// Ограничения:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i]состоит только из строчных английских букв, если он непустой.
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let prefix = "";

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== char) {
        return prefix;
      }
    }

    prefix += char;
  }

  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));  
