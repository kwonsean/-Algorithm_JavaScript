let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

const data = input[0].split(' ')

let H = Number(data[0])
const M = Number(data[1])

if (M - 45 >= 0) {
  console.log(`${H} ${M - 45}`)
} else {
  if (H === 0) H = 24
  console.log(`${H - 1} ${60 - Math.abs(M - 45)}`)
}
