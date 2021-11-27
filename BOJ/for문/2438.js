let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

const X = input[0]

for (let i = 1; i <= X; i++) {
  let answer = ''
  for (let j = 1; j <= i; j++) {
    answer += '*'
  }
  console.log(answer)
}
