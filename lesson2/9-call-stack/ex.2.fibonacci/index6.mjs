setTimeout(() => console.log('Timeout', 0))

let memo = {}

function fib(n) {
  return new Promise((resolve) => {
    if (memo[n]) {
      return resolve(memo[n])
    }
    if (n === 0 || n === 1) {
      memo[n] = n

      return resolve(n)
    }
    setImmediate(() =>
        fib(n - 1).then((fib1) =>
            fib(n - 2).then((fib2) => {
              memo[n] = fib1 + fib2
              resolve(memo[n])
            })
        )
    )
  })
}

console.time('fib70')
console.time('fib1000')
fib(10).then((res) => console.log(res))
fib(40).then((res) => console.log(res))
fib(70).then((res) => {
  console.log(res)
  console.timeEnd('fib70')
})
fib(100).then((res) => console.log(res))
fib(1000).then((res) => {
  console.log(res)
  console.timeEnd('fib1000')
})

// O(2^n) -> O(n)
