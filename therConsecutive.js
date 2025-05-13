// Дан целочисленный массив arr, вернуть, true если в массиве есть три последовательных нечетных числа. В противном случае вернуть  false.


// Пример 1:

// Ввод: arr = [2,6,4,1]
//  Вывод: false
//  Пояснение: Не существует трех последовательных коэффициентов.
// Пример 2:

// Ввод: arr = [1,2,34,3,4,5,7,23,12]
//  Вывод: true
//  Пояснение: [5,7,23] — три последовательных коэффициента.


// Ограничения:

// 1 <= arr.length <= 1000
// 1 <= arr[i] <= 1000


/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {

};


/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] % 2 === 1 && arr[i + 1] % 2 === 1 && arr[i + 2] % 2 === 1) {
            return true;
        }
    }
    return false;
};
