//                                  fib(10)
// 0, 1, 1, 2, 3, 5, 8, 13 ,21, 34, 55,     89, 144

function fib(n) {
  if (n === 0 || n === 1) {
    return n
  }

  return fib(n - 1) + fib(n - 2)
}

console.log(fib(10))
console.log(fib(50))

// ! Числа Фібоначчі можна розрахувати за допомогою наступної формули:
//
// F(n) = F(n-1) + F(n-2)
//
// де:
//  - F(n)   - це число Фібоначчі на позиції `n`,
//  - F(n-1) - це число Фібоначчі на позиції `n-1`,
//  - F(n-2) - це число Фібоначчі на позиції `n-2`.
//
// Початкові умови для цієї формули є F(0) = 0 та F(1) = 1.
// ! O(2^n) - exponential time complexity
