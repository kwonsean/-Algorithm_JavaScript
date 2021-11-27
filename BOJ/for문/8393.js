let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

const X = Number(input[0])

let sum = 0
for (let i = 1; i <= X; i++) {
  sum += i
}
console.log(sum)
