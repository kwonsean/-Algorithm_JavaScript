let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
//let input = fs.readFileSync('input.txt').toString().split('\n');

const data = input[0].split(' ')
const A = Number(data[0])
const B = Number(data[1])

if (A > B) {
  console.log('>')
} else if (A < B) {
  console.log('<')
} else {
  console.log('==')
}
