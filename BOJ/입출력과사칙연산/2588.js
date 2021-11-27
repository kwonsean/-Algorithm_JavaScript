let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
//let input = fs.readFileSync('input.txt').toString().split('\n');

const A = input[0]
const B = input[1]

console.log(A * B[2])
console.log(A * B[1])
console.log(A * B[0])
console.log(A * B)
