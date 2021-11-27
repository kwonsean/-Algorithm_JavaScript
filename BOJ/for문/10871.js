let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

const X = input[0].split(' ')
let Y = input[1].split(' ')

const [a, check] = X

Y = Y.map((i) => (i = Number(i)))

let answer = Y.filter((item) => item < check)

console.log(answer.join(' '))
