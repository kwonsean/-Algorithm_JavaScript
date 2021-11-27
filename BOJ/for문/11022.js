let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

const X = input[0]
const Y = input[1]

for (let i = 1; i <= X; i++) {
  let data = input[i].split(' ')
  const [a, b] = data
  console.log(`Case #${i}: ${a} + ${b} = ${Number(a) + Number(b)}`)
}
