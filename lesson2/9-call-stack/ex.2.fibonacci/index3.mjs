// 0, 1, 1, 2, 3, 5, 8, 13 ,21, 34, 55, 89, 144

setTimeout(() => console.log('Timeout'), 0)

function fib(n) {
  return new Promise((resolve) => {
    if (n < 2) return resolve(n)

    Promise.all([fib(n - 1), fib(n - 2)]).then(([a, b]) => resolve(a + b))
  })
}

fib(10).then((res) => console.log('Result:', res))
fib(30).then((res) => console.log('Result:', res))
