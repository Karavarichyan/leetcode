// Вы поднимаетесь по лестнице. Чтобы достичь вершины, нужны шаги.

// Каждый раз вы можете либо подняться 1, либо 2по ступенькам. Сколькими различными способами вы можете подняться на вершину?



// Пример 1:

// Вход: n = 2
//  Выход: 2
//  Пояснение: Есть два способа подняться на вершину.
// 1. 1 ступенька + 1 ступенька
// 2. 2 ступеньки
// Пример 2:

// Вход: n = 3
//  Выход: 3
//  Пояснение: Есть три способа подняться на вершину.
// 1. 1 ступенька + 1 ступенька + 1 ступенька
// 2. 1 ступенька + 2 ступеньки
// 3. 2 ступеньки + 1 ступенька


// Ограничения:

// 1 <= n <= 45


/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let first = 1;
  let second = 2;
  for (let i = 3; i <= n; i++) {
    let climb = first + second;
    first = second;
    second = climb;
  }

  return second;
};
console.log(climbStairs(5));
