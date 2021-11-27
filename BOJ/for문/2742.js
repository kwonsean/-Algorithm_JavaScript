let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

const X = input[0]

let answer = ''
for (let i = X; i >= 1; i--) {
  answer += i + '\n'
}
console.log(answer)
